import catalogJson from "./catalog.json";

export interface Course {
  category: string;
  title: string;
  description: string;
  duration: string;
  modality: string;
  requirement: string;
  sourcePath?: string;
  slug: string;
  courseDetail?: string;
}

export const services = [
  {
    number: "01",
    title: "Tesis e investigación",
    tag: "Asesoría académica",
    image: "/photos/servicios/asesoria.jpg",
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
    image: "/photos/servicios/proyectos.jpg",
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
    image: "/photos/servicios/research.jpg",
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
export const baseCourses: Course[] = [
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
    "category": "Humana y educación",
    "title": "Asistencia Jurídica",
    "description": "Formación en el ordenamiento jurídico ecuatoriano, técnicas de redacción legal, archivo y gestión de trámites administrativos y judiciales.",
    "duration": "80 horas",
    "modality": "100% virtual",
    "requirement": "Bachilleres y jóvenes de 18 a 35 años",
    "sourcePath": "humana/curso_asistencia_juridica.html",
    "slug": "curso-asistencia-juridica"
  },
  {
    "category": "Humana y educación",
    "title": "Asistente en Parvularia",
    "description": "Bases pedagógicas, éticas y operativas para la atención integral, cuidado y estimulación de niños de 0 a 5 años en centros infantiles.",
    "duration": "80 horas",
    "modality": "100% virtual",
    "requirement": "Bachilleres, madres comunitarias y personal de guarderías (18 a 35 años)",
    "sourcePath": "humana/curso_asistencia_parvularia.html",
    "slug": "curso-asistencia-parvularia"
  },
  {
    "category": "Humana y educación",
    "title": "Formulación de Productos Cosméticos Artesanales",
    "description": "Elaboración artesanal de productos de uso personal e higiene aplicando Buenas Prácticas de Manufactura (BPM), balance de emulsión y medición de pH.",
    "duration": "80 horas",
    "modality": "100% virtual",
    "requirement": "Emprendedores, estudiantes y público en general",
    "sourcePath": "humana/curso_cosmeticos.html",
    "slug": "curso-cosmeticos"
  },
  {
    "category": "Humana y educación",
    "title": "Gestión Operativa de Trámites Judiciales",
    "description": "Gestión técnica de trámites judiciales en plataformas oficiales mediante digitalización de expedientes, firma electrónica y cómputo de plazos.",
    "duration": "80 horas",
    "modality": "100% virtual",
    "requirement": "Bachilleres, estudiantes, asistentes administrativos y personas interesadas en el área jurídica",
    "sourcePath": "humana/curso_tramites_judiciales.html",
    "slug": "curso-tramites-judiciales"
  },
  {
    "category": "Humana y educación",
    "title": "Diseño de Recursos Didácticos Interactivos",
    "description": "Creación de materiales educativos multimedia mediante metodologías tecno-pedagógicas, herramientas en la nube (Canva, Genially) y gamificación.",
    "duration": "40 horas",
    "modality": "100% virtual",
    "requirement": "Docentes, instructores y profesionales de la educación",
    "sourcePath": "humana/curso_recursos_didacticos.html",
    "slug": "curso-recursos-didacticos"
  },
  {
    "category": "Humana y educación",
    "title": "Creación de Carreras y Ajustes Curriculares",
    "description": "Estructuración de proyectos de diseño de nuevas carreras y rediseño curricular aplicando normativas del CES, estudios de pertinencia y perfiles de egreso.",
    "duration": "40 horas",
    "modality": "100% virtual",
    "requirement": "Gestores académicos, directivos, coordinadores de carrera y docentes de educación superior",
    "sourcePath": "humana/curso_proyectos_educativos.html",
    "slug": "curso-proyectos-educativos"
  },
  {
    "category": "Humana y educación",
    "title": "Facilitación y Conducción de Grupos",
    "description": "Competencias metodológicas para la facilitación de talleres, diseño de planes de sesión, dinámicas colaborativas y gamificación corporativa.",
    "duration": "40 horas",
    "modality": "100% virtual",
    "requirement": "Capacitadores, facilitadores, consultores y servidores públicos",
    "sourcePath": "humana/curso_facilitacion_grupos.html",
    "slug": "curso-facilitacion-grupos"
  },
  {
    "category": "Humana y educación",
    "title": "Instrumentos de Evaluación del Aprendizaje",
    "description": "Construcción técnica de reactivos de opción múltiple de alto impacto, ensamble y validación psicométrica de pruebas estandarizadas.",
    "duration": "40 horas",
    "modality": "100% virtual",
    "requirement": "Docentes, evaluadores y diseñadores instruccionales",
    "sourcePath": "humana/curso_evaluacion_desempeno.html",
    "slug": "curso-evaluacion-desempeno"
  },
  {
    "category": "Humana y educación",
    "title": "Equidad y Justicia en el Trabajo",
    "description": "Comprensión y aplicación de la normativa laboral sobre derechos de género, prevención del acoso laboral y activación de rutas de denuncia ante el MDT.",
    "duration": "40 horas",
    "modality": "100% virtual",
    "requirement": "Profesionales de recursos humanos, líderes sindicales, estudiantes de derecho, personal administrativo, empleadores y público general",
    "sourcePath": "humana/curso_equidad_justicia.html",
    "slug": "curso-equidad-justicia"
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

const dynamicCourses: Course[] = (catalogJson as Record<string, string>[]).map((item) => ({
  category: item.category || "General",
  title: item.title || item.slug,
  description: item.description || "",
  duration: item.duration || "Por confirmar",
  modality: item.modality || "100% virtual",
  requirement: item.requirement || "Sin requisito específico",
  sourcePath: item.sourcePath || "",
  slug: item.slug,
  courseDetail: item.courseDetail || item.detailFile || `${item.slug}.json`,
}));

export const courses: Course[] = [
  ...baseCourses.map((c) => ({
    ...c,
    courseDetail: c.courseDetail ?? `${c.slug}.json`,
  })),
  ...dynamicCourses,
];

const derivedCategories = Array.from(
  new Set(courses.map((course) => course.category)),
);

export const categories = [
  "Todos",
  ...derivedCategories.filter((c) => c !== "Todos"),
] as const;
