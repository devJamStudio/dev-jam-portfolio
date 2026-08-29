#!/bin/bash
# Capture a portfolio card screenshot in the house convention.
#
#   ./scripts/screenshot.sh <slug> <url>
#   ./scripts/screenshot.sh colloitaliano https://colloitaliano.com
#
# Convention, so every card in the grid matches:
#   * 1440x1200 viewport at 2x, then keep the TOP 16:10 and scale to 1920x1200.
#     The viewport is taller than the crop on purpose — bottom-fixed cookie
#     banners render below the fold and get cropped away instead of appearing
#     in the shot.
#   * JPEG q82. The retina PNGs are ~3MB each and GitHub rejects a push of them.
#
# Needs Chrome/Chromium (CHROME=/path/to/binary) and ImageMagick.
set -euo pipefail

slug="${1:?usage: screenshot.sh <slug> <url>}"
url="${2:?usage: screenshot.sh <slug> <url>}"

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
[ -x "$CHROME" ] || { echo "Set CHROME to a Chrome/Chromium binary (not found: $CHROME)"; exit 1; }

out="$(cd "$(dirname "$0")/.." && pwd)/src/images/portfolio"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

"$CHROME" --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --window-size=1440,1200 --virtual-time-budget=15000 \
  --screenshot="$tmp/$slug.png" "$url" > /dev/null 2>&1

magick "$tmp/$slug.png" -crop 2880x1800+0+0 +repage \
  -resize 1920x1200! -quality 82 "$out/$slug.jpg"

echo "$out/$slug.jpg  $(identify -format '%wx%h %b' "$out/$slug.jpg")"
echo "Reference it from src/data/portfolio.ts as image: \"$slug\""
