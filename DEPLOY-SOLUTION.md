# MIMARCA - Solución Deploy Atascado

## ⚠️ El deploy se queda en cola

Esto significa que cPanel tiene limitaciones. Soluciones:

---

### Opción 1: Usar método ZIP (INMEDIATO)

```bash
./deploy-manual.sh
```

Luego sube el ZIP a cPanel → File Manager → public_html → Extract

---

### Opción 2: Configurar Webhook (recomendado)

Usa un servicio como **DeployHQ** o **Webhook.site** para conectar GitHub → cPanel

---

### Opción 3: Build local + Upload

1. Build local:
```bash
npm run build
```

2. Sube los archivos de `dist/` directamente por FTP o cPanel File Manager

---

## Nota importante:

cPanel Git no hace build de aplicaciones Node.js automáticamente. Solo clona el repositorio.

**Para auto-deploy real**, necesitas:
- VPS con Node.js instalado
- O usar servicios como Netlify/Vercel (gratis)

---

## Mientras tanto, usa:
```bash
./deploy-manual.sh
# Y sube el ZIP a cPanel
```
