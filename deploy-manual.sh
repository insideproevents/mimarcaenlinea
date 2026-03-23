#!/bin/zsh
echo "Manual deploy - ZIP method (no SSH)"
npm run build
cd dist
zip -r ../mimarca-deploy-$(date +%Y%m%d-%H%M).zip .
cd ..
echo "Upload mimarca-deploy-*.zip to cPanel File Manager → public_html → Extract"
echo "Done - https://mimarcaenlinea.cl"

