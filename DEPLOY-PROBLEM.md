# 🚫 PROBLEMA: cPanel Git se queda en cola

## Causa del problema:

Tu hosting **cPanel shared** NO tiene Node.js instalado. 

El Git de cPanel solo puede clonar repositorios, NO puede ejecutar `npm run build`.

---

## ✅ SOLUCIONES:

### Opción 1: Usar Vercel (RECOMENDADO)

```bash
git push origin main
# Vercel hace auto-deploy automáticamente
```

1. Ve a [vercel.com](https://vercel.com)
2. Importa tu repositorio GitHub
3. ¡Listo! Deploy automático

### Opción 2: Build local + ZIP

```bash
npm run build
./deploy-manual.sh
# Sube ZIP a cPanel
```

### Opción 3: Eliminar .cpanel.yml de Git

Si quieres usar solo Vercel, podemos eliminar la config de cPanel de Git.

---

## Nota importante:

El deploy de cPanel **NO FUNCIONARÁ** hasta que tu hosting instale Node.js.

**Vercel es la mejor opción** - es gratis y funciona perfectamente.
