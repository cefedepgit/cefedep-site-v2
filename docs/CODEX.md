# Entorno de Codex para CEFEDEP V2

## Estado

Se verificó acceso mediante el conector GitHub y se clonó el repositorio privado `Josuexpg/cefedep-v2`. El contenido inicial era únicamente `README.md`. El remoto de la copia local apunta exclusivamente a ese repositorio. No se creó un entorno de Codex Cloud ni se modificaron ajustes de cuenta.

## App de escritorio

Abrir la carpeta de esta copia de `cefedep-v2` como proyecto local de Codex. Seleccionar únicamente este repositorio para las tareas futuras. Las instrucciones de trabajo están en `AGENTS.md`.

## Codex Cloud, si se desea usar

1. En los ajustes de entornos de Codex, crear un entorno para `Josuexpg/cefedep-v2` y verificar propietario y nombre exactos.
2. Seleccionar Node.js 24 y pnpm 11.19.0. No copiar variables ni secretos de producción.
3. Una vez que estos archivos estén publicados en la rama de desarrollo, configurar como preparación `pnpm install --frozen-lockfile`. Si la imagen no incluye pnpm, instalar primero `npm install --global pnpm@11.19.0` en ese contenedor.
4. Para pruebas de navegador en Linux: `pnpm exec playwright install --with-deps chromium` durante la preparación.
5. Ejecutar `pnpm check` y `pnpm test:e2e`. La variable opcional `SITE_URL` puede omitirse para pruebas locales. Mantener el valor local cuando se ejecuten las pruebas E2E incluidas.
6. No añadir tokens de Firebase, Payphone, CRM, Moodle o Vercel. No habilitar despliegues automáticos sin aprobación.

La preparación necesita red para descargar dependencias; la aplicación y las pruebas funcionales no necesitan APIs externas.

Fuente oficial consultada: https://learn.chatgpt.com/docs/environments/cloud-environment
