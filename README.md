# CEFEDEP V2

Base funcional independiente para `Josuexpg/cefedep-v2`. Nunca modifica el repositorio, dominio ni servicios de producción de `cefedep.com`.

## Inicio local

Requisitos: Node.js 24 LTS (mínimo 22.14) y pnpm 11.19.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Abrir http://localhost:3000. No se necesitan claves ni archivo `.env` para empezar. `.env.example` documenta la URL opcional. No usar datos personales reales.

```sh
pnpm check
pnpm exec playwright install chromium
pnpm test:e2e
```

`pnpm check` ejecuta lint, TypeScript, pruebas unitarias y build. Las pruebas de navegador usan el build, arrancan un servidor local y lo cierran al terminar. Si se cambia código, volver a compilar antes de ejecutar E2E.

## Incluido

- Next.js App Router, TypeScript y Tailwind; seis rutas: `/`, `/servicios`, `/cursos`, `/ehep`, `/nosotros`, `/contacto`.
- Componentes compartidos, navegación móvil, estados de formulario accesibles y página 404.
- Metadata, canonical, Open Graph, Twitter, icono, sitemap y robots.
- Preview siempre `noindex`, `nofollow` y `Disallow: /`, con cabecera `X-Robots-Tag`. El sitemap permite revisar rutas sin habilitar indexación.
- Validación local del formulario: no hay endpoint, envío, almacenamiento ni mensaje de éxito ficticio. Sin JavaScript permanece deshabilitado.
- Contratos tipados y adaptadores desactivados para Firebase, Payphone, CRM y Moodle.

## Organización

`src/app` contiene rutas y SEO. `src/components` contiene UI reutilizable. `src/content/catalog.ts` concentra el catálogo editorial inicial. `src/lib` contiene validación, origen y metadata. `src/integrations` contiene contratos y adaptadores que fallan explícitamente con `NOT_CONFIGURED`.

La identidad incorpora los logos y fotografías proporcionados por el propietario. El catálogo incluye 19 cursos y seis servicios consultados en la web pública, y el aval de Universidad Israel confirmado por el propietario. Revisar próximas fechas, cupos, precios y condiciones de certificación antes de publicar una versión comercial. Ver [fuentes de contenido](docs/CONTENT-SOURCES.md).

## Documentación

- [Material editorial pendiente](docs/EDITORIAL-PENDING.md): perfiles, casos reales, testimonios y condiciones de convocatorias.
- Nuevas páginas: seis servicios en `/servicios/[slug]` y ficha modelo en `/cursos/auxiliar-farmacia`.

- [Configuración de Codex](docs/CODEX.md)
- [Preview independiente en Vercel](docs/PREVIEW.md)
- [Integraciones futuras](docs/INTEGRATIONS.md)
- [Resultados de validación](docs/VALIDATION.md)

No desplegar, conectar dominios ni activar proveedores sin aprobación del usuario. Los cambios entregados son locales hasta que se autorice su publicación remota.
