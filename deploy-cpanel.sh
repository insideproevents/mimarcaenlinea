#!/bin/zsh

echo "=== MIMARCA cPanel Deploy ==="
echo "1. Build production..."
npm run build

echo "2. Deploy to mimarcae@mimarcaenlinea.cl:public_html"
scp -r -i ./id_rsa dist/* mimarcae@mimarcaenlinea.cl:/home/mimarcae/public_html/
scp -i ./id_rsa public/* mimarcae@mimarcaenlinea.cl:/home/mimarcae/public_html/

echo "3. Fix permissions..."
ssh -i ./id_rsa mimarcae@mimarcaenlinea.cl "chmod -R 755 ~/public_html && chmod 644 ~/public_html/*"

echo "4. Clean..."
rm -rf dist/

echo "✅ Deploy complete - https://mimarcaenlinea.cl"

