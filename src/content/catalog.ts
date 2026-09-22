export const services = [
  {
    number: "01",
    title: "Tesis e investigación",
    tag: "Asesoría académica",
    description:
      "Orientación en metodología, instrumentos, análisis y defensa de proyectos académicos.",
    details: [
      "Planteamiento del tema y objetivos",
      "Diseño metodológico e instrumentos",
      "Análisis e interpretación de resultados",
      "Revisión y preparación de la defensa",
    ],
  },
  {
    number: "02",
    title: "Creación de institutos",
    tag: "Proyectos educativos",
    description:
      "Acompañamiento para estructurar un instituto tecnológico, desde su modelo hasta la oferta académica.",
    details: [
      "Planificación y modelo institucional",
      "Perfiles, mallas y diseño curricular",
      "Documentación y procesos",
      "Evaluación y seguimiento de calidad",
    ],
  },
  {
    number: "03",
    title: "Consultoría educativa",
    tag: "Universidades e institutos",
    description:
      "Asesoría en autoevaluación, planificación, desarrollo curricular y mejora institucional.",
    details: [
      "Autoevaluación de carreras y posgrados",
      "Preparación para procesos de acreditación",
      "Planificación estratégica y creación de carreras",
      "Formación dual, microcredenciales y estatutos",
    ],
  },
  {
    number: "04",
    title: "Investigación y análisis",
    tag: "Datos y metodología",
    description:
      "Apoyo en el diseño de estudios, tratamiento de datos e interpretación de hallazgos.",
    details: [
      "Diseño de investigación",
      "Construcción de instrumentos",
      "Procesamiento y análisis estadístico",
      "Presentación de resultados",
    ],
  },
  {
    number: "05",
    title: "Capacitación institucional",
    tag: "Equipos que aprenden",
    description:
      "Talleres para docentes y directivos en evaluación, reactivos e innovación educativa.",
    details: [
      "Evaluación del aprendizaje",
      "Elaboración y revisión de reactivos",
      "Innovación en la práctica docente",
      "Programas adaptados a cada institución",
    ],
  },
  {
    number: "06",
    title: "Formación profesional",
    tag: "Cursos avalados",
    description:
      "Formación en salud, área humana, educación y tecnología con aval de la Universidad Israel.",
    details: [
      "Salud y cuidado",
      "Educación y área humana",
      "Python e inteligencia artificial",
      "Desarrollo web y nube",
    ],
  },
];
export const categories = [
  "Todos",
  "Salud",
  "Humana y educación",
  "Tecnología",
] as const;
export const courses = [
  {
    category: "Salud",
    title: "Auxiliar en Farmacia",
    description:
      "Formación en farmacología, dispensación, normativa sanitaria y gestión de inventarios.",
    duration: "2 meses · 8 semanas",
    modality: "Híbrida · 80% virtual / 20% práctico",
    requirement: "Bachiller",
    sourcePath: "salud/curso_farmacia.html",
    slug: "curso-farmacia",
  },
  {
    category: "Salud",
    title: "Auxiliar en Enfermería con Mención en Geriatría",
    description:
      "Cuidados básicos y acompañamiento del adulto mayor con enfoque humano y bioseguridad.",
    duration: "80 horas · 8 semanas",
    modality: "Híbrida · 80% virtual / 20% práctico",
    requirement: "Bachiller",
    sourcePath: "salud/curso_enfermeria.html",
    slug: "curso-enfermeria",
  },
  {
    category: "Salud",
    title: "Salud Ocupacional y Ergonomía",
    description:
      "Identificación de riesgos y evaluación ergonómica para promover entornos laborales saludables.",
    duration: "40 horas",
    modality: "100% virtual",
    requirement: "Perfil afín a salud y seguridad ocupacional",
    sourcePath: "salud/curso_salud_ocupacional.html",
    slug: "curso-salud-ocupacional",
  },
  {
    category: "Salud",
    title: "Primeros Auxilios Básicos",
    description:
      "Aprendizaje de respuesta inicial, bioseguridad y reconocimiento de emergencias.",
    duration: "40 horas",
    modality: "100% virtual",
    requirement: "Sin requisito específico",
    sourcePath: "salud/curso_primeros_auxilios.html",
    slug: "curso-primeros-auxilios",
  },
  {
    category: "Humana y educación",
    title: "Asistencia Jurídica",
    description:
      "Bases para apoyar la redacción documental y la organización de trámites y expedientes.",
    duration: "2 meses · 8 semanas",
    modality: "Híbrida · 80% virtual / 20% práctico",
    requirement: "Bachiller",
    sourcePath: "humana/curso_asistencia_juridica.html",
    slug: "curso-asistencia-juridica",
  },
  {
    category: "Humana y educación",
    title: "Asistente en Parvularia",
    description:
      "Herramientas pedagógicas para acompañar el aprendizaje y la atención de la primera infancia.",
    duration: "80 horas · 2 meses",
    modality: "Virtual · sincrónica y asincrónica",
    requirement: "Bachiller / cuidadoras",
    sourcePath: "humana/curso_asistencia_parvularia.html",
    slug: "curso-asistencia-parvularia",
  },
  {
    category: "Humana y educación",
    title: "Formulación de Productos Cosméticos Artesanales",
    description:
      "Introducción a materias primas, formulación y buenas prácticas de elaboración cosmética.",
    duration: "80 horas",
    modality: "100% virtual",
    requirement: "Educación básica / bachillerato",
    sourcePath: "humana/curso_cosmeticos.html",
    slug: "curso-cosmeticos",
  },
  {
    category: "Humana y educación",
    title: "Gestión Operativa de Trámites Judiciales",
    description:
      "Organización de expedientes digitales y herramientas para la gestión documental judicial.",
    duration: "80 horas",
    modality: "100% virtual",
    requirement: "Bachiller / estudiante de Derecho",
    sourcePath: "humana/curso_tramites_judiciales.html",
    slug: "curso-tramites-judiciales",
  },
  {
    category: "Humana y educación",
    title: "Diseño de Recursos Didácticos Interactivos",
    description:
      "Materiales multimedia, gamificación y recursos para el aula digital.",
    duration: "80 horas",
    modality: "100% virtual",
    requirement: "Bachiller",
    sourcePath: "humana/curso_recursos_didacticos.html",
    slug: "curso-recursos-didacticos",
  },
  {
    category: "Humana y educación",
    title: "Apoyo Pedagógico para la Asistencia Parvularia",
    description:
      "Ambientes de juego, estimulación y actividades psicomotrices para la educación infantil.",
    duration: "80 horas",
    modality: "100% virtual",
    requirement: "Bachiller / perfil afín",
    sourcePath: "humana/curso_apoyo_pedagogico.html",
    slug: "curso-apoyo-pedagogico",
  },
  {
    category: "Humana y educación",
    title: "Creación de Carreras y Ajustes Curriculares",
    description:
      "Diseño de proyectos académicos, perfiles de egreso y planificación curricular en educación superior.",
    duration: "40 horas",
    modality: "100% virtual",
    requirement: "Título de tercer o cuarto nivel",
    sourcePath: "humana/curso_proyectos_educativos.html",
    slug: "curso-proyectos-educativos",
  },
  {
    category: "Humana y educación",
    title: "Facilitación y Conducción de Grupos",
    description:
      "Planificación de talleres y metodologías participativas para la capacitación corporativa.",
    duration: "40 horas",
    modality: "100% virtual",
    requirement: "Bachiller / tercer nivel",
    sourcePath: "humana/curso_facilitacion_grupos.html",
    slug: "curso-facilitacion-grupos",
  },
  {
    category: "Humana y educación",
    title: "Instrumentos de Evaluación del Aprendizaje",
    description:
      "Diseño de preguntas y criterios para construir y revisar evaluaciones del aprendizaje.",
    duration: "40 horas",
    modality: "100% virtual",
    requirement: "Docentes de educación básica, bachillerato o superior",
    sourcePath: "humana/curso_evaluacion_desempeno.html",
    slug: "curso-evaluacion-desempeno",
  },
  {
    category: "Tecnología",
    title: "Automatización con Python e IA",
    description:
      "Proyectos de automatización, procesamiento de datos y soluciones apoyadas por inteligencia artificial.",
    duration: "40 horas",
    modality: "100% virtual",
    requirement: "Bachiller",
    sourcePath: "tecnologia/curso_python_automatizacion.html",
    slug: "curso-python-automatizacion",
  },
  {
    category: "Tecnología",
    title: "Programación Básica con Python",
    description:
      "Lógica, estructuras de control y algoritmos para comenzar a resolver problemas con código.",
    duration: "40 horas",
    modality: "100% virtual",
    requirement: "Bachiller",
    sourcePath: "tecnologia/curso_python_basica.html",
    slug: "curso-python-basica",
  },
  {
    category: "Tecnología",
    title: "Procesamiento y Visualización de Datos con Python",
    description:
      "Organización y análisis de datos con bibliotecas de Python y representaciones gráficas.",
    duration: "40 horas",
    modality: "100% virtual",
    requirement: "Bachiller",
    sourcePath: "tecnologia/curso_python_datos.html",
    slug: "curso-python-datos",
  },
  {
    category: "Tecnología",
    title: "Visión por Computadora con Python",
    description:
      "Fundamentos de procesamiento de imágenes y detección visual con OpenCV y NumPy.",
    duration: "40 horas",
    modality: "100% virtual",
    requirement: "Bachiller / técnico afín",
    sourcePath: "tecnologia/curso_python_vision.html",
    slug: "curso-python-vision",
  },
  {
    category: "Tecnología",
    title: "Desarrollo Web con HTML5 y CSS3",
    description:
      "Estructura, diseño adaptable y publicación de sitios web estáticos.",
    duration: "40 horas",
    modality: "100% virtual",
    requirement: "Bachiller",
    sourcePath: "tecnologia/curso_desarrollo_web.html",
    slug: "curso-desarrollo-web",
  },
  {
    category: "Tecnología",
    title: "Fundamentos de Cloud Computing",
    description:
      "Modelos de servicio, costos e infraestructura en AWS, Azure y Google Cloud.",
    duration: "40 horas",
    modality: "100% virtual",
    requirement: "Bachiller",
    sourcePath: "tecnologia/curso_cloud_computing.html",
    slug: "curso-cloud-computing",
  },
];
