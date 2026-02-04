#!/bin/bash

# Safely remove original PNG/JPG files that have been converted to WebP
# Only removes files where a WebP version exists

echo "🗑️  Cleaning up original images..."
echo ""

cd "$(dirname "$0")/.." || exit

REMOVED=0
SPACE_FREED=0

# Function to remove original if WebP exists
remove_if_webp_exists() {
    local original="$1"
    local webp="${original%.*}.webp"

    if [ -f "$webp" ]; then
        # Get file size before deletion
        local size=$(stat -f%z "$original" 2>/dev/null || stat -c%s "$original" 2>/dev/null)
        SPACE_FREED=$((SPACE_FREED + size))

        rm "$original"
        echo "🗑️  Removed: $(basename "$original")"
        REMOVED=$((REMOVED + 1))
    fi
}

# Clean portfolio images
echo "📁 Cleaning portfolio images..."
if [ -d "public/images/port" ]; then
    for img in public/images/port/*.{png,PNG,jpg,JPG}; do
        [ -f "$img" ] && remove_if_webp_exists "$img"
    done
fi

echo ""
echo "📁 Cleaning main images..."

# Clean main images (only large ones that were converted)
for img in public/images/*.{png,PNG,jpg,JPG}; do
    if [ -f "$img" ]; then
        # Only remove if WebP exists
        remove_if_webp_exists "$img"
    fi
done

echo ""
echo "✨ Cleanup complete!"
echo "   Files removed: $REMOVED"

# Calculate space freed in MB
SPACE_FREED_MB=$(echo "scale=2; $SPACE_FREED / 1048576" | bc)
echo "   Space freed: ${SPACE_FREED_MB}MB"
