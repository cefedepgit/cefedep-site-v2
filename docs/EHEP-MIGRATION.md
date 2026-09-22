# EHEP: referencia y alcance de migración

Fuente consultada en modo de solo lectura: Josuexpg/CEFEDEP-site, commit 6405259e9b660723d04e01c265d81ec3a7e10034.

## Funcionamiento encontrado

- Simuladores de Medicina y Enfermería, con bancos independientes en JavaScript.
- Configuración de modo examen o flashcards, cantidad de preguntas y tiempo.
- Selección aleatoria, navegación, conservación de respuestas durante el intento.
- Finalización manual o por tiempo; porcentaje, tiempo invertido, promedio y revisión.
- Flashcards con reverso de respuesta.
- Botón llamado “Explicación Médica de IA” que realmente abre una búsqueda de Google; no es una integración de IA.
- Acceso Firebase y selección de carrera a partir de displayName.
- Inscripción con Payphone o transferencia; registro y automatización mediante Google Apps Script externo.
- El menú menciona Odontología, pero el árbol del repositorio no contiene su simulador ni su banco.
- No se encontró un panel de administración, persistencia de intentos ni código del receptor Apps Script en el árbol consultado.

## Límites que deben corregirse

El perfil displayName no debe ser la autoridad de autorización; un perfil vacío permite acceso en el código consultado. Los bancos y respuestas están en archivos públicos. Ocultar una página o aplicar marcas de agua no protege su contenido.

El retorno de pago envía transactionStatus Approved al receptor externo basándose en parámetros de URL y muestra éxito sin verificar el resultado de negocio. Se desconoce si Apps Script verifica el pago; su código no está incluido. La V2 debe verificar identidad, autorización y pago en servidor, con idempotencia, antes de activar acceso.

La selección aleatoria mediante sort aleatorio se debe reemplazar por un muestreo sin sesgo. La duración se debe calcular con una fecha límite, evitando depender de la cantidad de intervalos ejecutados. Validar índices correctos y estructura de cada pregunta antes de importar.

## Separación de entornos

No se copiaron credenciales, tokens, usuarios ni configuraciones productivas. No se llamó a Firebase, Payphone ni al receptor Apps Script. No se modificó CEFEDEP-site.

Primero implementar y probar el motor en V2. Autenticación, inscripciones, pagos y administración reales requieren un entorno de pruebas independiente y revisión del flujo servidor. No presentar un acceso simulado como sesión real.

## Alcance confirmado

El propietario confirmó simulador optimizado y mejorado, y panel de administración. La entrega local y sus límites están documentados en EHEP-LAB.md. La inspección de código no permite inferir el funcionamiento de herramientas administrativas externas al repositorio.

