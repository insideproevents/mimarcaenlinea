#!/bin/bash
# MIMARCA Git Auto-Deploy Script
# Corre en cPanel: ./deploy-git.sh
# O configúralo en cPanel Git™ Version Control

set -e

echo "=== MIMARCA Git Deploy ==="
echo "Branch: main"
echo "Repo: https://github.com/insideproevents/mimarcaenlinea.git"

# Si hay un repositorio existente, hacer pull
if [ -d ".git" ]; then
    echo "1. Git pull..."
    git pull origin main
else
    echo "1. Cloning repo..."
    git clone https://github.com/insideproevents/mimarcaenlinea.git .
fi

# Instalar dependencias si es necesario
if [ -f "package.json" ]; then
    echo "2. Install dependencies..."
    npm install
fi

# Build production
echo "3. Build..."
npm run build

# Mover contenido de dist a public_html
echo "4. Copy to public_html..."
cp -r dist/* ../public_html/ 2>/dev/null || true

echo "✅ Deploy complete - https://mimarcaenlinea.cl"
