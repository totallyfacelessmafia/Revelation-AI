@echo off
echo ============================================
echo   Revelation Inc AI - Video Builder
echo ============================================
echo.

set PYTHON="C:\Users\zeped\AppData\Local\Python\bin\python.exe"

%PYTHON% "%~dp0build_video.py" %*

echo.
pause
