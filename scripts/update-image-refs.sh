#!/bin/bash

# Update image references to use WebP format
# This script updates component files to reference .webp instead of .png/.jpg

echo "🔄 Updating image references to WebP..."

cd "$(dirname "$0")/.." || exit

# Backup directory
BACKUP_DIR="backups/pre-webp-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"

# Find all TSX/JSX files with image references
FILES=$(grep -rl "\.png\|\.jpg\|\.PNG\|\.JPG" src/ --include="*.tsx" --include="*.jsx" 2>/dev/null)

COUNT=0

for file in $FILES; do
    # Skip if file doesn't exist
    [ ! -f "$file" ] && continue

    # Create backup
    cp "$file" "$BACKUP_DIR/$(basename "$file")"

    # Replace extensions (case insensitive)
    sed -i.bak \
        -e 's/\.png"/.webp"/g' \
        -e "s/\.png'/.webp'/g" \
        -e 's/\.PNG"/.webp"/g' \
        -e "s/\.PNG'/.webp'/g" \
        -e 's/\.jpg"/.webp"/g' \
        -e "s/\.jpg'/.webp'/g" \
        -e 's/\.JPG"/.webp"/g' \
        -e "s/\.JPG'/.webp'/g" \
        "$file"

    # Remove backup file created by sed
    rm -f "${file}.bak"

    echo "✅ Updated: $file"
    COUNT=$((COUNT + 1))
done

echo ""
echo "✨ Complete! Updated $COUNT files"
echo "   Backups saved to: $BACKUP_DIR"
