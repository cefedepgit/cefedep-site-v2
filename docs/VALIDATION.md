# Resultados de validación

## Páginas de servicios y ficha de curso

Se añadieron seis rutas estáticas de servicios y la ficha de Auxiliar en Farmacia, con metadata individual, breadcrumbs, preguntas frecuentes, enlaces desde los listados y sitemap ampliado. Se preserva noindex en toda la preview.

Lint y TypeScript pasaron. Build correcto con las siete rutas nuevas. Las tres pruebas unitarias se ejecutaron tras compilación con TypeScript por la limitación de tsx/Windows descrita abajo. Playwright se ejecutó contra el servidor local con PLAYWRIGHT_EXTERNAL_SERVER=1.

Los datos editoriales faltantes están en EDITORIAL-PENDING.md. No se han publicado cambios remotos ni se ha activado ninguna integración.

Resultado final: 40/40 pruebas de navegador aprobadas en 14.0 segundos, salida 0. Incluyen todas las rutas nuevas en escritorio y móvil, canonical, noindex, navegación a las fichas, preguntas desplegables, sitemap y 404 para un servicio inexistente. Revisión visual de la ficha de Farmacia realizada.

Fecha: 22 de septiembre de 2026. Copia local de `Josuexpg/cefedep-v2` en Windows.

## Actualización de identidad y catálogo

Se incorporaron los dos logos y las dos fotografías aportadas, la paleta verde/dorado, seis servicios y 19 cursos con aval UISRAEL. Se revisaron visualmente inicio de escritorio y catálogo móvil. Las fotografías y logos cargan correctamente.

Validación de esta actualización: lint y TypeScript correctos; build correcto; 3/3 pruebas unitarias y 24/24 pruebas de navegador aprobadas (14.4 segundos, salida 0). Las cuatro pruebas adicionales verifican filtros (4/9/6/19 cursos), requisitos desplegables y carga de imágenes en escritorio y móvil.

En este entorno, `pnpm check` se detuvo al iniciar `tsx` porque Windows no pudo consultar el usuario del proceso (`uv_os_get_passwd`). Se ejecutaron las mismas pruebas unitarias tras compilarlas con TypeScript a `work/unit` y con `node --test`, sin modificar su lógica. El build se ejecutó directamente con Next.js. No se solicitaron permisos adicionales.

Para evitar el problema de cierre del servidor observado anteriormente, la ejecución de Playwright utilizó el servidor local ya iniciado con `PLAYWRIGHT_EXTERNAL_SERVER=1`. Esta opción omite únicamente la gestión del servidor por Playwright; conserva todos los tests. El modo normal sigue creando su propio servidor.

El informe siguiente corresponde a la base anterior y se conserva como historial.

## Resultado final

| Verificación                      | Resultado                                                                     |
| --------------------------------- | ----------------------------------------------------------------------------- |
| ESLint                            | Correcto, sin errores ni advertencias de código                               |
| TypeScript (`tsc --noEmit`)       | Correcto                                                                      |
| Pruebas unitarias                 | 3/3 aprobadas                                                                 |
| Build de producción               | Correcto; seis páginas públicas, 404, icono, robots y sitemap generados       |
| Playwright Chromium               | 20/20 aprobadas, 8.7 segundos; salida 0                                       |
| Revisión visual                   | Inicio en escritorio (1280 px) y móvil (390 px), sin solapamientos observados |
| Compatibilidad entre dependencias | `pnpm peers check`: sin conflictos                                            |

## Cobertura

Las pruebas comprueban respuestas HTTP, título, descripción, canonical, noindex, H1 único, ausencia de errores JavaScript y desbordamiento horizontal en las seis rutas. Incluyen navegación móvil, validación y foco en errores, ausencia de envíos y almacenamiento local del formulario, formulario deshabilitado sin JavaScript, sitemap, robots y 404. Las unitarias verifican entradas inválidas y límites, rechazo de dominios de producción y adaptadores desactivados sin llamadas de red.

## Incidencias resueltas

- TypeScript 7 no era compatible con typescript-eslint: se fijó TypeScript 6.0.3.
- Los complementos actuales de ESLint de Next.js requieren ESLint 9: se fijó 9.39.5. El registro lo marca como deprecated; revisar una actualización conjunta de ESLint y complementos en una fase posterior. Es una dependencia de desarrollo, no del sitio en ejecución.
- Se corrigió el título de inicio para incluir la marca mediante metadata absoluta.
- La prueba de canonical ahora normaliza URLs: el origen con y sin barra final identifica la misma página raíz.
- El aislamiento de Windows impedía finalizar el proceso de pruebas aunque todos los casos pasaban. La ejecución final autorizada fuera de ese aislamiento terminó correctamente con salida 0.

## Límites y pendientes

No se probaron Firefox, Safari real, dispositivos físicos, carga, ni servicios externos. La emulación móvil usa Chromium. No hay prueba de integración real porque Firebase, Payphone, CRM y Moodle están deliberadamente desactivados. No se ha desplegado en Vercel ni creado un entorno Codex Cloud. No se ha publicado la rama en GitHub. No se tocaron producción, DNS, dominios, claves ni pagos reales.

El contenido institucional, identidad y catálogo requieren revisión del propietario. La base funcional es apta para revisión local y para preparar una preview independiente; no constituye una plataforma comercial terminada.

## Entrega EHEP — 22 de septiembre de 2026

- Lint y TypeScript: aprobados. Build final: aprobado.
- `pnpm check` se ejecutó: lint/typecheck pasaron; tsx falló por `uv_os_get_passwd ENOMEM` del entorno Windows. Las mismas pruebas se compilaron con TypeScript y ejecutaron mediante `node --test`: 8 aprobadas.
- E2E: 40 pruebas existentes aprobadas; 8 pruebas EHEP aprobadas en escritorio y móvil (ejecución específica final). Verifican navegación/respuestas, finalización y omisiones, reloj, tarjetas, importación inválida, revocación, creación/archivo/restauración y ancho responsive.
- La primera ejecución detectó una entrada con 696 opciones; se preservó en cuarentena. Un test comprueba el banco operativo completo de 3.176 entradas. También se corrigió un selector de prueba que coincidía con el anunciador de rutas de Next.js.
- Ruta del laboratorio sin variable de activación: HTTP 404 verificado con servidor separado.
- No se probaron autenticación real, persistencia, pagos ni permisos de servidor: siguen sin implementar. Ver EHEP-LAB.md.
