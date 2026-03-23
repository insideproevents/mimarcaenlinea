# MIMARCA - Guía de Deploy

## Métodos disponibles:

### 1. Vercel (⭐ RECOMENDADO - Gratis, auto-deploy)

```bash
npm i -g vercel
vercel
```

1. Conecta tu repositorio GitHub a Vercel
2. ¡Listo! Auto-deploy con cada push

**Ventajas:**
- ✅ Gratis
- ✅ Auto-deploy instantáneo
- ✅ CDN global
- ✅ Build automático de Node.js

---

### 2. cPanel Git (atascado - no recomendado)

El deploy se queda en cola porque cPanel shared no tiene Node.js para hacer build.

---

### 3. ZIP manual

```bash
./deploy-manual.sh
# Sube mimarca-deploy-*.zip a cPanel → Extract
```

---

### 4. FTP

```bash
./deploy-ftp.sh
```

---

## Para deploy inmediato:

```bash
./deploy-manual.sh
```
