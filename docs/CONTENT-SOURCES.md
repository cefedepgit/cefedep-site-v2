# Contenido e identidad de CEFEDEP

Actualización: 22 de septiembre de 2026.

## Identidad y aval

El propietario aportó el logo oficial de CEFEDEP Ecuador, el logo UISRAEL y dos fotografías de capacitaciones impartidas por CEFEDEP. Los originales se copiaron sin edición a `public/brand` y `public/photos`; los archivos de origen permanecen intactos. La paleta usa verde oscuro, dorado y tonos marfil del logo.

El propietario confirmó expresamente que los cursos tienen aval de la Universidad Israel. Se incluye el texto “Aval académico: Universidad Israel (UISRAEL)” sin extender ese aval a servicios de consultoría o preparación EHEP. No se afirma que los cursos otorguen un título universitario ni una habilitación profesional.

## Servicios y cursos

Consulta de solo lectura a https://www.cefedep.com/ y a las 19 fichas enlazadas desde su menú. Los servicios se resumen en seis líneas: tesis, creación de institutos, consultoría educativa, investigación y análisis, capacitación institucional y formación profesional.

Cada curso guarda `sourcePath` en `src/content/catalog.ts`; la URL original se obtiene con `https://www.cefedep.com/cursos/` más ese valor. Se verificaron título, duración, modalidad y requisitos. Los textos descriptivos fueron resumidos. La web pública se consultó como fuente; la V2 no depende de ella para cargar contenido o recursos y no se modificó producción.

Distribución: salud (4), humana y educación (9), tecnología (6). Los filtros conservan renderizado inicial de los 19 cursos. La expansión de requisitos funciona mediante HTML `details`.

No se trasladaron precios, convocatorias abiertas, pagos, horarios ni promesas de prácticas con terceros. Próximas fechas, cupos, costos y condiciones de certificación se dejan por consultar. Las fotografías no se atribuyen a una institución o evento específico porque el usuario no proporcionó esos nombres.
