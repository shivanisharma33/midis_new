#!/bin/bash

# Image optimization script for Midis project
# Converts PNG images to WebP format for better compression

echo "🖼️  Starting image optimization..."
echo ""

# Navigate to project root
cd "$(dirname "$0")/.." || exit

# Create backup directory if it doesn't exist
BACKUP_DIR="public/images/originals"
mkdir -p "$BACKUP_DIR"

# Counter for optimized images
OPTIMIZED=0
TOTAL_SAVED=0

# Function to convert PNG to WebP
convert_to_webp() {
    local input_file="$1"
    local output_file="${input_file%.png}.webp"
    local output_file="${output_file%.jpg}.webp"
    local output_file="${output_file%.PNG}.webp"
    local output_file="${output_file%.JPG}.webp"

    # Skip if WebP already exists
    if [ -f "$output_file" ]; then
        echo "⏭️  Skipping (already exists): $(basename "$output_file")"
        return
    fi

    # Get original file size
    local original_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null)

    # Convert to WebP with quality 85
    if cwebp -q 85 "$input_file" -o "$output_file" > /dev/null 2>&1; then
        local new_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
        local saved=$((original_size - new_size))
        TOTAL_SAVED=$((TOTAL_SAVED + saved))
        OPTIMIZED=$((OPTIMIZED + 1))

        # Format sizes
        local orig_mb=$(echo "scale=2; $original_size / 1048576" | bc)
        local new_mb=$(echo "scale=2; $new_size / 1048576" | bc)
        local percent=$(echo "scale=1; 100 - ($new_size * 100 / $original_size)" | bc)

        echo "✅ $(basename "$input_file") → $(basename "$output_file")"
        echo "   ${orig_mb}MB → ${new_mb}MB (${percent}% smaller)"
    else
        echo "❌ Failed: $(basename "$input_file")"
    fi
}

# Convert portfolio images (biggest offenders)
echo "📁 Optimizing portfolio images..."
if [ -d "public/images/port" ]; then
    for img in public/images/port/*.{png,PNG,jpg,JPG}; do
        [ -f "$img" ] && convert_to_webp "$img"
    done
fi

echo ""
echo "📁 Optimizing main images..."

# Convert large images in root
for img in public/images/*.{png,PNG,jpg,JPG}; do
    if [ -f "$img" ]; then
        # Get file size in MB
        size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        size_mb=$(echo "scale=2; $size / 1048576" | bc)

        # Only convert if larger than 500KB
        if (( $(echo "$size_mb > 0.5" | bc -l) )); then
            convert_to_webp "$img"
        fi
    fi
done

echo ""
echo "✨ Optimization complete!"
echo "   Optimized: $OPTIMIZED images"

# Calculate total saved in MB
TOTAL_SAVED_MB=$(echo "scale=2; $TOTAL_SAVED / 1048576" | bc)
echo "   Space saved: ${TOTAL_SAVED_MB}MB"
echo ""
echo "⚠️  Next steps:"
echo "   1. Update image references in components to use .webp extensions"
echo "   2. Add fallback for browsers that don't support WebP"
echo "   3. Delete original PNG/JPG files if satisfied with results"
