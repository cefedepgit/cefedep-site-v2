# Integraciones futuras

## Límite actual

`contracts.ts` define puertos tipados. `disabled.ts` implementa cada puerto con `NOT_CONFIGURED`. No hay SDK, credenciales, solicitudes de red ni operaciones persistentes. Ninguna variable activa proveedores automáticamente. El formulario solo valida en memoria del componente y no llama a estos puertos.

## Firebase

Implementar sesión y repositorio de leads del lado servidor; usar un proyecto de desarrollo o emuladores independientes. Definir reglas de acceso, autorización y política de retención antes de almacenar información. Las credenciales administrativas nunca deben entrar al navegador.

## CRM

`Lead` prepara origen, consentimiento versionado y campaña opcional. Antes de habilitar captura real: aviso de privacidad validado, consentimiento apropiado, validación del servidor, límites de tamaño, protección antiabuso y control de frecuencia, deduplicación/idempotencia y reintentos trazables. No registrar datos personales en logs.

## Payphone

`PayphonePort` utiliza centavos enteros, USD, orden e idempotencia. Implementar primero contra un entorno de pruebas autorizado. Calcular importes con un catálogo verificado en servidor; nunca confiar en el importe enviado por el cliente. Verificar el mecanismo oficial de autenticidad y reconciliación de eventos antes de confirmar un pago o habilitar acceso. No existe checkout en esta fase.

## Moodle

`MoodlePort` prepara matriculación mediante identificadores internos. Antes de habilitarla: resolver identidad/autorización, mapear cursos, proteger tokens en servidor y hacer matriculaciones idempotentes. No otorgar acceso basándose solo en una redirección del navegador.

## Evolución

Añadir cada adaptador en su módulo de servidor y probar errores, reintentos y duplicados con un sandbox. Conservar el modo desactivado como valor por defecto. Activar servicios, pagos reales o acciones externas sensibles requiere autorización explícita.
