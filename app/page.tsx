"use client";

import Link from "next/link";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

type Feature = {
  title: string;
  copy: string;
};

const aceFeatures: Feature[] = [
  {
    title: "Digital Human Synthesis",
    copy: "Create lifelike brand avatars from a single client photo with premium fidelity and style control.",
  },
  {
    title: "Omni-Channel Publishing",
    copy: "Deploy content to LinkedIn, X, Instagram, and TikTok in one click from a unified command layer.",
  },
  {
    title: "Narrative Intelligence",
    copy: "Adaptive AI models learn your brand tone so every post remains authentic, deliberate, and on strategy.",
  },
];

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#ace", label: "Ace AI" },
  { href: "#archive", label: "Archive" },
  { href: "#contact", label: "Inquiry" },
];

function FadeSection({ children, id }: { children: React.ReactNode; id: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handle = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        setVisible(true);
      }
    };

    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, [id]);

  return (
    <div id={id} className={visible ? "animate-fadeUp" : "translate-y-7 opacity-0"}>
      {children}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="relative overflow-hidden bg-obsidian">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.12)_0%,rgba(11,12,16,1)_55%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-obsidian/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
          <Link href="#hero" className="relative overflow-hidden font-[var(--font-cinzel)] text-xs uppercase tracking-cinematic text-gold md:text-sm">
            <span className="relative inline-block px-1">Ace AI</span>
            <span className="gold-foil-shimmer" aria-hidden="true" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="font-[var(--font-inter)] text-sm text-ivory/85 transition hover:text-gold">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded border border-gold/55 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-gold md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            Menu
          </button>
        </div>
      </header>

      <aside
        className={`fixed right-0 top-0 z-40 h-full w-72 transform border-l border-gold/30 bg-[#0f1016]/95 px-7 pt-24 backdrop-blur-xl transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-[var(--font-inter)] text-sm uppercase tracking-[0.16em] text-ivory/85 transition hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <section id="hero" className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pb-24 pt-32 md:px-10 md:pt-40">
        <FadeSection id="hero-fade">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-6 font-[var(--font-cinzel)] text-xs uppercase tracking-cinematic text-gold/90">Revelation Inc. AI</p>
              <h1 className="max-w-4xl font-[var(--font-cinzel)] text-4xl uppercase tracking-cinematic text-gold sm:text-5xl md:text-7xl">
                Illuminating The Unseen.
              </h1>
              <p className="mt-7 max-w-2xl font-[var(--font-inter)] text-base leading-relaxed text-ivory/90 md:text-lg">
                Bespoke AI Architecture for the Elite Enterprise.
              </p>
              <a
                href="#contact"
                className="mt-10 inline-flex w-fit items-center justify-center rounded-sm border border-gold/80 bg-gold/10 px-8 py-3 font-[var(--font-inter)] text-sm uppercase tracking-[0.12em] text-gold transition hover:bg-gradient-to-r hover:from-gold hover:to-champagne hover:text-obsidian"
              >
                Request a Revelation
              </a>
            </div>
            <div className="lg:col-span-5">
              <Image
                src="/images/hero-archive.svg"
                alt="Abstract midnight archive visualization"
                width={800}
                height={500}
                className="h-auto w-full rounded-2xl border border-gold/25 bg-black/20 shadow-glow"
                priority
              />
            </div>
          </div>
        </FadeSection>
      </section>

      <section id="ace" className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <FadeSection id="ace-fade">
          <div className="mb-12 flex flex-col gap-6">
            <p className="font-[var(--font-cinzel)] text-xs uppercase tracking-cinematic text-gold/85">Ace AI Spotlight</p>
            <h2 className="font-[var(--font-cinzel)] text-3xl uppercase tracking-cinematic text-gold sm:text-4xl md:text-5xl">
              Your Voice. Your Image. Infinite Reach.
            </h2>
            <p className="max-w-3xl font-[var(--font-inter)] text-base leading-relaxed text-ivory/90 md:text-lg">
              Ace AI generates photorealistic brand avatars and automates high-engagement publishing across every social
              platform simultaneously.
            </p>
          </div>

          <div className="glass-card mb-14 rounded-2xl border border-gold/35 p-6 shadow-glow md:p-10">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="font-[var(--font-cinzel)] text-[10px] uppercase tracking-cinematic text-gold/90">Mock Queue Dashboard</p>
              <span className="rounded-full border border-gold/60 px-3 py-1 font-[var(--font-inter)] text-[10px] uppercase tracking-[0.16em] text-gold">
                Live Sync
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-gold/25 bg-white/5 p-4">
                <p className="mb-3 font-[var(--font-inter)] text-xs uppercase tracking-[0.14em] text-ivory/80">Scheduled Posts</p>
                <div className="space-y-3">
                  {[
                    "LinkedIn Executive Insight",
                    "X Market Pulse Thread",
                    "Instagram Product Teaser",
                    "TikTok Narrative Clip",
                  ].map((item) => (
                    <div key={item} className="rounded border border-gold/20 bg-black/20 px-3 py-2 font-[var(--font-inter)] text-sm text-ivory/85">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-gold/25 bg-white/5 p-4">
                <p className="mb-3 font-[var(--font-inter)] text-xs uppercase tracking-[0.14em] text-ivory/80">Avatar Render Pipeline</p>
                <div className="space-y-3">
                  {[
                    "Face Alignment: Complete",
                    "Voiceprint Match: 98.7%",
                    "Brand Style Lock: Enabled",
                    "Publish Window: Armed",
                  ].map((item) => (
                    <div key={item} className="rounded border border-gold/20 bg-black/20 px-3 py-2 font-[var(--font-inter)] text-sm text-ivory/85">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border border-gold/25 bg-black/20">
                <Image
                  src="/images/ace-dashboard.svg"
                  alt="Ace AI dashboard mockup"
                  width={900}
                  height={580}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {aceFeatures.map((feature) => (
              <article key={feature.title} className="rounded-xl border border-gold/30 bg-gradient-to-b from-white/5 to-transparent p-6 shadow-glow">
                <h3 className="mb-3 font-[var(--font-cinzel)] text-lg uppercase tracking-[0.14em] text-gold">{feature.title}</h3>
                <p className="font-[var(--font-inter)] text-sm leading-relaxed text-ivory/88">{feature.copy}</p>
              </article>
            ))}
          </div>
        </FadeSection>
      </section>

      <section id="archive" className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <FadeSection id="archive-fade">
          <div className="grid items-center gap-8 rounded-2xl border border-gold/35 bg-gradient-to-r from-white/5 via-transparent to-white/5 p-8 md:grid-cols-12 md:p-12">
            <div className="md:col-span-7">
              <p className="mb-5 font-[var(--font-cinzel)] text-xs uppercase tracking-cinematic text-gold/85">The Midnight Archive</p>
              <h2 className="font-[var(--font-cinzel)] text-3xl uppercase tracking-cinematic text-gold sm:text-4xl md:text-5xl">
                From Dark Data To Golden Insight.
              </h2>
              <p className="mt-6 max-w-3xl font-[var(--font-inter)] text-base leading-relaxed text-ivory/90 md:text-lg">
                Revelation Inc. AI is built on a singular philosophy: hidden information holds strategic power. We architect
                bespoke intelligence systems that illuminate latent patterns, elevate executive decisions, and turn complex
                data shadows into market-leading clarity.
              </p>
            </div>
            <div className="md:col-span-5">
              <Image
                src="/images/midnight-vault.svg"
                alt="Midnight archive data vault visualization"
                width={600}
                height={600}
                className="mx-auto h-auto w-full max-w-md rounded-xl border border-gold/20 bg-black/20"
              />
            </div>
          </div>
        </FadeSection>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-6 pb-24 pt-12 md:px-10 md:pb-32">
        <FadeSection id="contact-fade">
          <div className="rounded-2xl border border-gold/40 bg-black/30 p-8 md:p-12">
            <h2 className="font-[var(--font-cinzel)] text-2xl uppercase tracking-cinematic text-gold sm:text-3xl md:text-4xl">
              Contact / Inquiry
            </h2>
            <p className="mt-4 font-[var(--font-inter)] text-sm leading-relaxed text-ivory/88 md:text-base">
              Submit your inquiry to begin a confidential architecture briefing.
            </p>

            <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
              <input
                className="rounded-md border border-gold/45 bg-transparent px-4 py-3 font-[var(--font-inter)] text-sm text-ivory placeholder:text-ivory/45 focus:border-champagne focus:outline-none"
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
              <input
                className="rounded-md border border-gold/45 bg-transparent px-4 py-3 font-[var(--font-inter)] text-sm text-ivory placeholder:text-ivory/45 focus:border-champagne focus:outline-none"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="rounded-md border border-gold/45 bg-transparent px-4 py-3 font-[var(--font-inter)] text-sm text-ivory placeholder:text-ivory/45 focus:border-champagne focus:outline-none md:col-span-2"
                type="text"
                name="company"
                placeholder="Company"
              />
              <textarea
                className="min-h-36 rounded-md border border-gold/45 bg-transparent px-4 py-3 font-[var(--font-inter)] text-sm text-ivory placeholder:text-ivory/45 focus:border-champagne focus:outline-none md:col-span-2"
                name="message"
                placeholder="Tell us what you need illuminated"
                required
              />
              <button
                type="submit"
                className="md:col-span-2 inline-flex w-full items-center justify-center rounded-md border border-gold/80 bg-gold/10 px-8 py-3 font-[var(--font-inter)] text-sm uppercase tracking-[0.12em] text-gold transition hover:bg-gradient-to-r hover:from-gold hover:to-champagne hover:text-obsidian"
              >
                Request a Revelation
              </button>
            </form>
          </div>
        </FadeSection>
      </section>
    </main>
  );
}
