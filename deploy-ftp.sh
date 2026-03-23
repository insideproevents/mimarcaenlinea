#!/bin/zsh
# MIMARCA Deploy via FTP (cPanel)
# No requiere SSH ni claves

echo "=== MIMARCA FTP Deploy ==="

# 1. Build production
echo "1. Building..."
npm run build

# 2. FTP upload using curl
# Configura estas variables o edita los valores directamente
FTP_HOST="mimarcaenlinea.cl"
FTP_USER="mimarcae"
# FTP_PASS="tu_password_aqui"  # ⚠️ EDITAR - O usa variable de entorno

# Verificar password
if [ -z "$FTP_PASS" ]; then
    echo "2. FTP Password needed..."
    echo -n "Enter FTP password: "
    read -s FTP_PASS
    echo ""
fi

echo "2. Uploading to FTP..."

# Upload using lftp or curl
if command -v lftp &> /dev/null; then
    lftp -e "set ftp:ssl-allow no; open -u $FTP_USER,$FTP_PASS $FTP_HOST; mirror -R dist /; bye"
else
    # Fallback: crear ZIP para upload manual
    echo "   lftp not found, creating ZIP for manual upload..."
    cd dist
    zip -r ../mimarca-deploy-$(date +%Y%m%d-%H%M).zip .
    cd ..
    echo "   Upload mimarca-deploy-*.zip to cPanel → File Manager → Extract"
fi

echo "✅ Deploy complete - https://mimarcaenlinea.cl"
