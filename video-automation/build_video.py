"""
Revelation Inc AI — 1-Hour Ambient Video Builder
=================================================
Merges MP3s from /music into one master audio track with crossfades,
then loops a short background video to match the audio length.

Uses FFmpeg for everything — no Python audio dependencies needed.

Requirements:
    FFmpeg must be on PATH

Usage:
    python build_video.py
    python build_video.py --crossfade 3 --background backgrounds/loop.mp4
"""

import argparse
import json
import os
import re
import subprocess
import sys
from pathlib import Path


SCRIPT_DIR = Path(__file__).parent
MUSIC_DIR = SCRIPT_DIR / "music"
BG_DIR = SCRIPT_DIR / "backgrounds"
OUTPUT_DIR = SCRIPT_DIR / "output"


def run_ffmpeg(cmd: list[str], quiet: bool = False) -> subprocess.CompletedProcess:
    """Run an FFmpeg command and handle errors."""
    if not quiet:
        print(f"  > {' '.join(cmd)}\n")
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"FFmpeg error:\n{result.stderr[-1000:]}")
        sys.exit(1)
    return result


def get_duration(file_path: Path) -> float:
    """Get duration of an audio/video file in seconds via ffprobe."""
    cmd = [
        "ffprobe", "-v", "quiet",
        "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1",
        str(file_path),
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    return float(result.stdout.strip())


def get_sorted_mp3s(music_dir: Path) -> list[Path]:
    """Get all MP3 files sorted by filename."""
    files = sorted(music_dir.glob("*.mp3"))
    if not files:
        print(f"ERROR: No MP3 files found in {music_dir}")
        sys.exit(1)
    return files


def concatenate_audio(mp3_files: list[Path], crossfade_sec: int, output_path: Path) -> float:
    """
    Concatenate MP3 files with crossfade using FFmpeg filter_complex.
    Returns duration in seconds.
    """
    print(f"\n--- Audio Assembly ---")
    print(f"Found {len(mp3_files)} tracks:\n")

    # Get durations for metadata
    durations = []
    for i, mp3 in enumerate(mp3_files, 1):
        dur = get_duration(mp3)
        durations.append(dur)
        print(f"  {i:2d}. {mp3.name} ({dur:.1f}s)")

    if len(mp3_files) == 1:
        # Single file — just copy it
        cmd = ["ffmpeg", "-y", "-i", str(mp3_files[0]), "-c:a", "libmp3lame", "-b:a", "320k", str(output_path)]
        run_ffmpeg(cmd, quiet=True)
        print(f"\nMaster audio: {durations[0]:.1f}s ({durations[0]/60:.1f} min)")
        return durations[0]

    # Build FFmpeg filter for crossfade chain
    inputs = []
    for mp3 in mp3_files:
        inputs.extend(["-i", str(mp3)])

    # Build crossfade filter chain:
    # [0][1] acrossfade=d=2 -> [a01]
    # [a01][2] acrossfade=d=2 -> [a02]
    # ...
    filters = []
    n = len(mp3_files)

    if n == 2:
        filters.append(f"[0:a][1:a]acrossfade=d={crossfade_sec}:c1=tri:c2=tri[out]")
        filter_str = ";".join(filters)
        map_label = "[out]"
    else:
        # First pair
        filters.append(f"[0:a][1:a]acrossfade=d={crossfade_sec}:c1=tri:c2=tri[a01]")
        prev = "[a01]"
        for i in range(2, n):
            out_label = "[out]" if i == n - 1 else f"[a{i:02d}]"
            filters.append(f"{prev}[{i}:a]acrossfade=d={crossfade_sec}:c1=tri:c2=tri{out_label}")
            prev = out_label
        filter_str = ";".join(filters)
        map_label = "[out]"

    cmd = [
        "ffmpeg", "-y",
        *inputs,
        "-filter_complex", filter_str,
        "-map", map_label,
        "-c:a", "libmp3lame", "-b:a", "320k",
        str(output_path),
    ]

    print(f"\nMerging with {crossfade_sec}s crossfades...")
    run_ffmpeg(cmd)

    total_dur = get_duration(output_path)
    print(f"Master audio duration: {total_dur:.1f}s ({total_dur/60:.1f} min)")
    print(f"Saved: {output_path}")
    return total_dur


def generate_song_metadata(mp3_files: list[Path], crossfade_sec: int, output_path: Path):
    """
    Generate a JSON metadata file with song timestamps for YouTube chapters.
    """
    timestamps = []
    current_sec = 0.0

    for mp3 in mp3_files:
        dur = get_duration(mp3)
        minutes = int(current_sec // 60)
        seconds = int(current_sec % 60)
        title = mp3.stem  # filename without extension
        timestamps.append({
            "title": title,
            "timestamp": f"{minutes:02d}:{seconds:02d}",
            "start_sec": round(current_sec, 2),
        })
        current_sec += dur - crossfade_sec

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(timestamps, f, indent=2)

    print("\n--- YouTube Chapters (copy to video description) ---\n")
    for entry in timestamps:
        print(f"  {entry['timestamp']} {entry['title']}")
    print(f"\nSaved metadata: {output_path}")
    return timestamps


def find_background(bg_dir: Path, explicit_path: str | None = None) -> Path:
    """Find the background loop video."""
    if explicit_path:
        p = Path(explicit_path)
        if p.exists():
            return p
        p = SCRIPT_DIR / explicit_path
        if p.exists():
            return p
        print(f"ERROR: Background video not found: {explicit_path}")
        sys.exit(1)

    for ext in ("*.mp4", "*.webm", "*.mov"):
        videos = list(bg_dir.glob(ext))
        if videos:
            return videos[0]

    print(f"ERROR: No background video found in {bg_dir}")
    print("Place a short looping MP4 (10-20s) in the backgrounds/ folder.")
    sys.exit(1)


def assemble_video(bg_video: Path, master_audio: Path, output_path: Path):
    """
    Use FFmpeg stream_loop to loop background video over the full audio.
    -c:v copy = no re-encoding = renders in minutes, not hours.
    """
    print(f"\n--- Video Assembly (FFmpeg stream_loop) ---")
    print(f"  Background: {bg_video}")
    print(f"  Audio:      {master_audio}\n")

    cmd = [
        "ffmpeg",
        "-y",
        "-stream_loop", "-1",          # loop video infinitely
        "-i", str(bg_video),
        "-i", str(master_audio),
        "-map", "0:v",                 # video from background
        "-map", "1:a",                 # audio from master
        "-c:v", "copy",               # NO re-encode (fast!)
        "-c:a", "aac",
        "-b:a", "320k",
        "-shortest",                   # stop when audio ends
        "-movflags", "+faststart",     # optimize for streaming
        str(output_path),
    ]

    run_ffmpeg(cmd)

    size_mb = output_path.stat().st_size / (1024 * 1024)
    print(f"Done! Output: {output_path} ({size_mb:.1f} MB)")


def main():
    parser = argparse.ArgumentParser(
        description="Build 1-hour ambient video from MP3s + looping background"
    )
    parser.add_argument(
        "--crossfade", type=int, default=2,
        help="Crossfade between songs in seconds (default: 2)"
    )
    parser.add_argument(
        "--background", type=str, default=None,
        help="Path to background loop video (auto-detects from backgrounds/ if omitted)"
    )
    parser.add_argument(
        "--music-dir", type=str, default=None,
        help="Path to music folder (default: ./music)"
    )
    parser.add_argument(
        "--output-name", type=str, default="final_video.mp4",
        help="Output filename (default: final_video.mp4)"
    )
    args = parser.parse_args()

    music_dir = Path(args.music_dir) if args.music_dir else MUSIC_DIR
    crossfade_sec = args.crossfade

    print("=" * 50)
    print("  Revelation Inc AI — Video Builder")
    print("=" * 50)

    # Step 1: Concatenate audio with crossfades
    mp3_files = get_sorted_mp3s(music_dir)
    master_audio = OUTPUT_DIR / "master_audio.mp3"
    concatenate_audio(mp3_files, crossfade_sec, master_audio)

    # Step 2: Generate YouTube chapter timestamps
    metadata_path = OUTPUT_DIR / "song_timestamps.json"
    generate_song_metadata(mp3_files, crossfade_sec, metadata_path)

    # Step 3: Find background video
    bg_video = find_background(BG_DIR, args.background)

    # Step 4: Assemble final video (stream_loop = FAST)
    output_path = OUTPUT_DIR / args.output_name
    assemble_video(bg_video, master_audio, output_path)

    print("\n" + "=" * 50)
    print("  BUILD COMPLETE")
    print("=" * 50)
    print(f"\n  Video:    {output_path}")
    print(f"  Chapters: {metadata_path}")
    print(f"\n  Paste the chapter timestamps into your YouTube")
    print(f"  description for track-by-track navigation.")
    print()


if __name__ == "__main__":
    main()
