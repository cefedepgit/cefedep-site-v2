# Preview independiente en Vercel

Este documento prepara el despliegue; no se ha desplegado ni vinculado ninguna cuenta, proyecto o dominio.

## Antes de cualquier acción externa

Solicitar aprobación para crear/vincular un proyecto nuevo de Vercel y publicar la vista previa. Confirmar que `cefedep-v2` no está vinculado al proyecto de producción. Una conexión Git puede generar despliegues al hacer push: verificarla antes de publicar una rama.

## Configuración propuesta, solo después de aprobación

1. Crear un proyecto separado llamado `cefedep-v2-preview`. No reutilizar el proyecto de `cefedep.com`.
2. Seleccionar exclusivamente `Josuexpg/cefedep-v2`. Framework: Next.js. Root directory: raíz del repositorio. Node: 24.x. Instalación: `pnpm install --frozen-lockfile`. Build: `pnpm build`. Mantener el directorio de salida predeterminado de Next.js.
3. Mantener el dominio de producción y DNS intactos. Usar únicamente la URL generada por Vercel.
4. No cargar claves ni variables reales. Omitir `SITE_URL`: la aplicación usa `VERCEL_URL` para canonical y sitemap; para un alias de preview aprobado, configurar `SITE_URL` con su origen HTTPS y reconstruir.
5. Activar la protección de acceso al deployment si está disponible. `noindex` y robots no son autenticación ni control de acceso.
6. Para publicar desde una copia local con Vercel CLI, ejecutar `vercel` y seleccionar el proyecto nuevo aprobado. No usar `--prod`. El comando crea un deployment y requiere aprobación previa.
7. Revisar las seis páginas, menú móvil, formulario, `/robots.txt`, `/sitemap.xml`, URL canonical y respuesta 404. Confirmar que no hay llamadas a producción ni a proveedores.

Importar un repositorio desde el panel puede iniciar un primer deployment. Detenerse antes de Import/Deploy hasta tener aprobación. El entorno técnico Production de un proyecto nuevo no autoriza conectar el dominio real; la propuesta de esta fase es un deployment Preview independiente.

Para habilitar indexación pública en el futuro será necesaria una tarea explícita que revise las protecciones de `src/lib/site.ts`, `src/app/layout.tsx`, `src/app/robots.ts` y `next.config.ts`. No basta con añadir variables.

Fuentes oficiales consultadas:

- https://vercel.com/docs/projects/deploy-from-cli
- https://vercel.com/docs/deployments/overview
