# MIMARCA - Guía de Deploy con Git

## Métodos disponibles:

### 1. cPanel Git™ (Auto-deploy desde GitHub) ⚡️ RECOMENDADO

**Configuración en cPanel:**
1. Ingresa a cPanel → **Git™ Version Control**
2. Crea nuevo repositorio: **Create**
3. Configura:
   - Repository Address: `https://github.com/insideproevents/mimarcaenlinea.git`
   - Repository Path: `/home/mimarcae/mimarcaenlinea` (o donde prefieras)
   - Branch: `main`
   - ✅ **Deploy**: Enable
   - Deployment Path: `/home/mimarcae/public_html`

4. Click **Create**

**Cuando hagas push a GitHub:**
```bash
git add .
git commit -m "tu mensaje"
git push origin main
```
→ cPanel automáticamente hace build y deploy a public_html

---

### 2. Deploy manual ZIP (sin Git)

```bash
./deploy-manual.sh
# Sube mimarca-deploy-*.zip a cPanel → File Manager → Extract
```

---

### 3. Deploy FTP

```bash
./deploy-ftp.sh
# Ingresa password FTP cuando lo solicite
```

---

## Workflow recomendado:

```bash
# 1. Hacer cambios en el código
git add .
git commit -m "fix: cambios realizados"
git push origin main

# 2. cPanel hace auto-deploy automáticamente
# Listo: https://mimarcaenlinea.cl
```

---

## Notas:
- cPanel debe tener Node.js instalado
- El archivo `.cpanel.yml` configura el proceso de build
- No se necesita SSH ni claves
