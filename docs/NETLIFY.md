# Preview independiente en Netlify

Proyecto nuevo: cefedep-v2-preview. Repositorio privado: Josuexpg/cefedep-v2.
No importar CEFEDEP-site ni configurar cefedep.com o DNS.

1. Iniciar sesión en Netlify y seleccionar Free; sin servicios de pago ni recarga automática.
2. Autorizar GitHub solamente para cefedep-v2.
3. Importar el repositorio, rama codex/base-funcional, directorio raíz.
4. La configuración netlify.toml fija Node 24, pnpm build y .next.
5. Mantener EHEP_DEMO_ENABLED=0; no introducir credenciales reales.
6. Usar el subdominio netlify.app asignado. La app toma DEPLOY_PRIME_URL para canonical y sitemap; conserva noindex y robots Disallow.
7. Verificar páginas, imágenes, canonical, robots y que /ehep/pruebas responde 404.

Los cambios guardados en la rama conectada de GitHub generan nuevos despliegues. Para revisar antes de publicar, trabajar en otra rama y abrir un pull request. El contenido se edita en src/content y las páginas en src/app. GitHub edita archivos de código; no sustituye un panel visual de contenidos.

El laboratorio EHEP solo funciona localmente. La publicación web no activa autenticación, alumnos, pagos ni guardado de datos. El banco de preguntas debe seguir en el repositorio privado.

El plan gratuito tiene límites de consumo y puede pausar el sitio al agotarlos. Revisar los límites en el panel antes de confirmar. No habilitar complementos pagados.

Referencias: https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/ y https://www.netlify.com/pricing/
