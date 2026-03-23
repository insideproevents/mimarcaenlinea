#!/bin/bash
# MIMARCA Simple Deploy Script
# No requiere SSH - Build local + Manual upload

set -e

echo "=== MIMARCA Deploy ==="

# 1. Build
echo "1. Building..."
npm run build

# 2. Create ZIP
echo "2. Creating ZIP..."
cd dist
zip -r ../mimarca-deploy-$(date +%Y%m%d-%H%M).zip .
cd ..

# 3. Instructions
echo ""
echo "✅ Listo!"
echo "Sube el archivo mimarca-deploy-*.zip a:"
echo "  cPanel → File Manager → public_html → Extract"
echo ""
echo "O usa los archivos en dist/ para FTP directo"
