#!/usr/bin/env bash
# Usage (from anywhere in the repo): ./cv/build.sh
# Creates a venv on first run, then generates the CV PDF from data/cv.json.
set -e

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VENV="$REPO_ROOT/cv/.venv"

# Create venv if it doesn't exist yet
if [ ! -d "$VENV" ]; then
  echo "Creating virtual environment..."
  python3 -m venv "$VENV"
fi

# Install/upgrade dependencies inside the venv
"$VENV/bin/pip" install --quiet --upgrade reportlab

# Run the generator
"$VENV/bin/python" "$REPO_ROOT/cv/generate_cv.py"

echo ""
echo "PDF updated → public/files/SeanGorman-CV.pdf"
echo "To deploy:    git add data/cv.json public/files/SeanGorman-CV.pdf && git commit -m 'update CV' && git push"
