import { services } from "./catalog";
const content = [
  {
    slug: "asesoria-tesis",
    audience:
      "Estudiantes y profesionales que necesitan orientación metodológica para su trabajo de titulación o investigación.",
    outcome:
      "Un proyecto mejor delimitado, con coherencia entre objetivos, metodología y resultados.",
    preparation:
      "Comparte el reglamento de tu institución, tu avance actual y las observaciones de tu tutor.",
    stages: [
      "Diagnóstico del avance y las exigencias académicas",
      "Definición de prioridades y plan de acompañamiento",
      "Sesiones de revisión metodológica y técnica",
      "Revisión de resultados y preparación de la defensa",
    ],
    questions: [
      [
        "¿Puedo consultar si ya tengo un avance?",
        "Sí. La revisión puede partir de una idea, un proyecto en desarrollo o datos ya recogidos. El alcance se define después de conocer tu situación.",
      ],
      [
        "¿El servicio sustituye mi trabajo o al tutor?",
        "No. El acompañamiento respeta tu autoría y las reglas de tu institución. Las decisiones, el aprendizaje y la presentación del trabajo siguen siendo tu responsabilidad.",
      ],
      [
        "¿Se garantiza la aprobación?",
        "No. La evaluación corresponde a tu institución. El acompañamiento se centra en fortalecer la calidad metodológica y la preparación.",
      ],
    ],
  },
  {
    slug: "creacion-institutos",
    audience:
      "Promotores y equipos que desean estructurar un proyecto de instituto tecnológico en Ecuador.",
    outcome:
      "Una hoja de ruta para organizar el modelo institucional, la oferta y la documentación del proyecto.",
    preparation:
      "Indica la ubicación prevista, las áreas de formación, el estado del proyecto y el equipo promotor.",
    stages: [
      "Revisión de la idea y diagnóstico del proyecto",
      "Planificación institucional y definición de la oferta",
      "Organización académica, curricular y documental",
      "Revisión de avances y prioridades de implementación",
    ],
    questions: [
      [
        "¿Puedo empezar con una idea?",
        "Sí. El diagnóstico permite identificar los componentes que faltan y ordenar el desarrollo del proyecto.",
      ],
      [
        "¿La consultoría garantiza la autorización?",
        "No. Las autorizaciones dependen de las autoridades competentes y de los requisitos aplicables. La consultoría apoya la preparación del proyecto.",
      ],
      [
        "¿Incluye todas las etapas?",
        "Las etapas y entregables se acuerdan según el avance y las necesidades del promotor; no se presupone un paquete único.",
      ],
    ],
  },
  {
    slug: "consultoria-educativa",
    audience:
      "Universidades, institutos y equipos responsables de calidad, planificación o desarrollo académico.",
    outcome:
      "Prioridades de mejora y una ruta de trabajo vinculadas a las necesidades de la institución.",
    preparation:
      "Describe el objetivo de la consultoría, las unidades involucradas y los documentos que ya existen.",
    stages: [
      "Diagnóstico institucional y definición del alcance",
      "Revisión de información y criterios de trabajo",
      "Desarrollo de propuestas con el equipo institucional",
      "Validación de avances y seguimiento acordado",
    ],
    questions: [
      [
        "¿Qué temas se pueden abordar?",
        "Autoevaluación, preparación para acreditación, planificación estratégica, diseño de carreras, formación dual, microcredenciales y estatutos, según el alcance acordado.",
      ],
      [
        "¿Se garantiza una acreditación?",
        "No. La decisión corresponde al organismo evaluador. El servicio acompaña la preparación, la revisión y la mejora institucional.",
      ],
      [
        "¿Se puede contratar un componente específico?",
        "Sí. El alcance puede concentrarse en una necesidad concreta de la institución.",
      ],
    ],
  },
  {
    slug: "investigacion-analisis",
    audience:
      "Investigadores, docentes y equipos que necesitan apoyo metodológico o análisis de información.",
    outcome:
      "Un análisis alineado con los objetivos y una interpretación comprensible de los resultados.",
    preparation:
      "Explica tu pregunta de investigación, el diseño del estudio y el tipo de datos. No envíes datos personales en esta vista de pruebas.",
    stages: [
      "Revisión de objetivos, diseño e instrumentos",
      "Evaluación de la calidad y estructura de los datos",
      "Definición y desarrollo del análisis",
      "Interpretación de resultados y revisión de límites",
    ],
    questions: [
      [
        "¿Pueden orientar antes de recoger datos?",
        "Sí. El diseño de investigación y los instrumentos forman parte de las áreas de acompañamiento.",
      ],
      [
        "¿Se puede trabajar con datos ya recogidos?",
        "Sí. Primero se revisa su estructura, calidad y relación con los objetivos para determinar qué análisis es adecuado.",
      ],
      [
        "¿Puedo cargar una base de datos aquí?",
        "No. Esta vista no admite archivos ni almacena información. El canal y las condiciones para compartir datos deberán acordarse antes de una prestación real.",
      ],
    ],
  },
  {
    slug: "capacitacion-institucional",
    audience:
      "Equipos docentes, directivos y comunidades académicas que buscan fortalecer sus prácticas.",
    outcome:
      "Una propuesta de formación relacionada con los objetivos y necesidades del equipo.",
    preparation:
      "Indica el tema, el perfil de participantes, el tamaño del grupo y la modalidad que necesitas.",
    stages: [
      "Identificación de necesidades del equipo",
      "Definición de objetivos y contenidos del taller",
      "Acuerdo de modalidad, actividades y alcance",
      "Desarrollo y revisión del aprendizaje según la propuesta",
    ],
    questions: [
      [
        "¿Qué temáticas trabajan?",
        "Evaluación del aprendizaje, elaboración de reactivos, innovación educativa y programas adaptados a la institución.",
      ],
      [
        "¿Pueden adaptar una capacitación?",
        "El programa se define a partir del diagnóstico y de los objetivos del equipo. Duración, modalidad y actividades se acuerdan en la propuesta.",
      ],
      [
        "¿Todos los talleres tienen aval universitario?",
        "El aval mostrado en el catálogo corresponde a los cursos. Las condiciones de certificación de una capacitación institucional deben confirmarse en su propuesta específica.",
      ],
    ],
  },
  {
    slug: "formacion-profesional",
    audience:
      "Personas que buscan actualizar conocimientos en salud, educación, área humana y tecnología.",
    outcome:
      "Una ruta de formación elegida según tus objetivos, requisitos y disponibilidad.",
    preparation:
      "Selecciona un área o curso y consulta su modalidad, requisitos y próxima convocatoria.",
    stages: [
      "Exploración del catálogo por área",
      "Revisión de requisitos y contenidos",
      "Consulta de convocatoria y condiciones",
      "Inscripción por un canal habilitado en una fase posterior",
    ],
    questions: [
      [
        "¿Qué áreas incluye el catálogo?",
        "Salud, área humana y educación, y tecnología. Puedes filtrar los 19 cursos en la página de cursos.",
      ],
      [
        "¿Qué aval tienen los cursos?",
        "Los cursos cuentan con aval académico de la Universidad Israel (UISRAEL), según la información confirmada por CEFEDEP. Consulta las condiciones de certificación del programa elegido.",
      ],
      [
        "¿Puedo inscribirme desde esta V2?",
        "Todavía no. Esta es una vista de pruebas: el formulario solo valida información y los pagos están desactivados.",
      ],
    ],
  },
];
export const servicePages = content.map((item, index) => ({
  ...services[index],
  ...item,
}));
