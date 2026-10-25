# Laboratorio EHEP V2

Disponible únicamente en `/ehep/pruebas` con `EHEP_DEMO_ENABLED=1`. El servidor debe iniciarse en 127.0.0.1. La ruta responde 404 sin esa variable y siempre en Vercel. No incluir la variable en una preview pública. El banco se entrega al navegador del laboratorio: no contiene controles de evaluación segura.

## Uso local

Después de `pnpm build`, en PowerShell:

```powershell
$env:EHEP_DEMO_ENABLED='1'
pnpm start --hostname 127.0.0.1
```

Abre http://127.0.0.1:3000/ehep/pruebas. Elige un perfil ficticio, modalidad, cantidad y tiempo. Puedes navegar libremente, marcar preguntas, finalizar con confirmación o esperar el vencimiento. La revisión identifica respuesta elegida, clave del banco y omisiones. Las tarjetas permiten revelar la respuesta. Los últimos diez resultados se conservan durante esta sesión de página.

Administración permite buscar, editar, crear, archivar y restaurar preguntas; importar/exportar JSON; crear perfiles ficticios con carrera y vencimiento; activar/desactivar accesos. Desactivar un perfil termina su práctica abierta. La importación valida estructura, índices, identificadores únicos y tamaño antes de reemplazar el banco. Exporta antes de importar para conservar una copia.

**Recargar borra cambios, perfiles y resultados.** No hay almacenamiento persistente, acceso real de alumnos, autenticación ni rol administrativo. No introducir datos personales. No se llama a servicios externos.

## Procedencia y revisión

Fuente: CEFEDEP-site, commit 6405259e9b660723d04e01c265d81ec3a7e10034. Se importaron 3.177 entradas: 1.531 Medicina y 1.646 Enfermería. Una entrada de Enfermería (`enf-1646`) tiene 696 opciones y fue separada en `src/content/ehep-quarantine.json` para revisión sin corregir sus respuestas. El banco operativo contiene 3.176 preguntas. Validación técnica no equivale a validación académica; no se inventaron explicaciones ni se ofrece una nota oficial de aprobación.

## Pendiente para gestión real

1. Proyecto Firebase independiente, identidad verificada y roles administrativos definidos en servidor.
2. Base de preguntas y claves protegida; entregar al alumno solo preguntas autorizadas y corregir en servidor.
3. Persistir intentos, respuestas, plazos y accesos; reanudar tras recarga, auditoría de cambios y copias de seguridad.
4. Revisar el código Apps Script externo para migrar inscripción y verificación de pagos con idempotencia. No activar accesos por parámetros de URL.
5. Validación académica de preguntas, explicaciones y condiciones de acceso.
6. Pruebas de autorización negativa, aislamiento entre alumnos, concurrencia, recuperación y carga antes de desplegar.

No se desplegó ni se modificó el repositorio de producción.

