interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    medicina: number;
    sociales: number;
    innovacion: number;
    deportes: number;
    disenio: number;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "¿Qué actividad te resulta más interesante?",
    options: [
      {
        text: "Ayudar a personas enfermas",
        medicina: 3,
        sociales: 1,
        innovacion: 1,
        deportes: 0,
        disenio: 0
      },
      {
        text: "Resolver problemas sociales",
        medicina: 1,
        sociales: 3,
        innovacion: 1,
        deportes: 0,
        disenio: 1
      },
      {
        text: "Crear nuevas tecnologías",
        medicina: 1,
        sociales: 1,
        innovacion: 3,
        deportes: 0,
        disenio: 2
      },
      {
        text: "Deportes y actividades físicas",
        medicina: 1,
        sociales: 1,
        innovacion: 0,
        deportes: 3,
        disenio: 0
      },
      {
        text: "Dibujar modelos creativos o artísticos",
        medicina: 0,
        sociales: 0,
        innovacion: 0,
        deportes: 0,
        disenio: 3
      }
    ],
  },
  {
    id: 2,
    question: "¿En qué ambiente te sientes más cómodo trabajando?",
    options: [
      { text: "Hospital o clínica", medicina: 3, sociales: 0, innovacion: 0, deportes: 0, disenio: 0 },
      {
        text: "Comunidad o centros sociales",
        medicina: 0,
        sociales: 3,
        innovacion: 0,
        deportes: 0,
        disenio: 1
      },
      { text: "Oficina corporativa", medicina: 0, sociales: 0, innovacion: 3, deportes: 0, disenio: 2 },
      { text: "Gimnasio o instalaciones deportivas", medicina: 1, sociales: 0, innovacion: 0, deportes: 3, disenio: 0 },
      { text: "Estudio de diseño o arte", medicina: 0, sociales: 0, innovacion: 0, deportes: 0, disenio: 3}
    ],
  },
  {
    id: 3,
    question: "¿Qué tipo de problemas prefieres resolver?",
    options: [
      { text: "Diagnósticos médicos", medicina: 3, sociales: 0, innovacion: 0, deportes: 0, disenio: 0 },
      {
        text: "Conflictos interpersonales",
        medicina: 0,
        sociales: 3,
        innovacion: 0,
        deportes: 0,
        disenio: 0
      },
      {
        text: "Estrategias de negocio",
        medicina: 0,
        sociales: 1,
        innovacion: 3,
        deportes: 0,
        disenio: 0
      },
      { text: "Mejorar el estado físico de una persona", medicina: 2, sociales: 0, innovacion: 0, deportes: 3, disenio: 0 },
      { text: "LLevar a cabo diseños extravagantes y complejos", medicina: 0, sociales: 0, innovacion: 1, deportes: 0, disenio: 3 }
    ],
  },
  {
    id: 4,
    question: "¿Cuál es tu materia favorita?",
    options: [
      { text: "Biología y Química", medicina: 3, sociales: 0, innovacion: 1, deportes: 1, disenio: 0 },
      { text: "Matemáticas y Física", medicina: 1, sociales: 0, innovacion: 3, deportes: 0, disenio: 0 },
      {
        text: "Economía y Administración",
        medicina: 0,
        sociales: 3,
        innovacion: 3,
        deportes: 0,
        disenio: 1
      },
      { text: "Educación Física", medicina: 1, sociales: 0, innovacion: 0, deportes: 3, disenio: 0 },
      { text: "Arte y Diseño", medicina: 0, sociales: 0, innovacion: 1, deportes: 0, disenio: 3 }
    ],
  },
  {
    id: 5,
    question: "¿Qué te motiva más en la vida?",
    options: [
      { text: "Salvar vidas", medicina: 3, sociales: 0, innovacion: 0, deportes: 0, disenio: 0 },
      { text: "Ayudar a la sociedad", medicina: 1, sociales: 3, innovacion: 0, deportes: 0, disenio: 0 },
      { text: "Innovar y crear", medicina: 0, sociales: 0, innovacion: 3, deportes: 0, disenio: 2 },
      { text: "Ser profesional en un deporte", medicina: 0, sociales: 0, innovacion: 0, deportes: 3, disenio: 0 },
      { text: "Expresar mi creatividad", medicina: 0, sociales: 0, innovacion: 1, deportes: 0, disenio: 3 }
    ],
  },
  {
    id: 6,
    question: "¿Cómo prefieres trabajar?",
    options: [
      {
        text: "Con pacientes directamente",
        medicina: 3,
        sociales: 2,
        innovacion: 0,
        deportes: 0,
        disenio: 0
      },
      {
        text: "En equipos multidisciplinarios",
        medicina: 1,
        sociales: 3,
        innovacion: 1,
        deportes: 1,
        disenio: 0
      },
      { text: "Liderando equipos", medicina: 0, sociales: 2, innovacion: 3, deportes: 0, disenio: 1 },
      { text: "En el staff de un equipo de deportes", medicina: 0, sociales: 0, innovacion: 0, deportes: 3, disenio: 0 },
      { text: "Diseñando bocetos o dibujos", medicina: 0, sociales: 0, innovacion: 2, deportes: 0, disenio: 3}
    ],
  },
  {
    id: 7,
    question: "¿Qué habilidad consideras tu fortaleza?",
    options: [
      { text: "Empatía y cuidado", medicina: 3, sociales: 1, innovacion: 0, deportes: 0, disenio: 0 },
      {
        text: "Comunicación y persuasión",
        medicina: 0,
        sociales: 3,
        innovacion: 1,
        deportes: 0,
        disenio: 0
      },
      { text: "Análisis y lógica", medicina: 2, sociales: 0, innovacion: 2, deportes: 0, disenio: 1 },
      { text: "Trabajo en equipo y liderazgo", medicina: 1, sociales: 1, innovacion: 3, deportes: 3, disenio: 0 },
      { text: "Creatividad y dibujo", medicina: 0, sociales: 0, innovacion: 1, deportes: 0, disenio: 3 }
    ],
  },
  {
    id: 8,
    question: "¿Qué tipo de impacto quieres tener?",
    options: [
      {
        text: "Mejorar la calidad de vida de las personas",
        medicina: 3,
        sociales: 1,
        innovacion: 1,
        deportes: 3,
        disenio: 0
      },
      {
        text: "Transformar comunidades",
        medicina: 0,
        sociales: 3,
        innovacion: 1,
        deportes: 0,
        disenio: 0
      },
      {
        text: "Revolucionar industrias",
        medicina: 0,
        sociales: 1,
        innovacion: 3,
        deportes: 0,
        disenio: 2
      },
      {
        text: "Fomentar el deporte y la salud física en todas las edades",
        medicina: 1,
        sociales: 1,
        innovacion: 0,
        deportes: 3,
        disenio: 0
      },
      {
        text: "Crear obras de arte que inspiren",
        medicina: 0,
        sociales: 0,
        innovacion: 1,
        deportes: 0,
        disenio: 3
      }
    ],
  },
  {
    id: 9,
    question: "¿Qué actividad extracurricular te atrae más?",
    options: [
      {
        text: "Voluntariado en hospitales",
        medicina: 3,
        sociales: 1,
        innovacion: 0,
        deportes: 0,
        disenio: 0
      },
      {
        text: "Proyectos comunitarios",
        medicina: 2,
        sociales: 3,
        innovacion: 0,
        deportes: 0,
        disenio: 0
      },
      {
        text: "Emprendimientos comerciales",
        medicina: 0,
        sociales: 1,
        innovacion: 3,
        deportes: 0,
        disenio: 1
      },
      {
        text: "Hacer deportes",
        medicina: 1,
        sociales: 0,
        innovacion: 0,
        deportes: 3,
        disenio: 0
      },
      {
        text: "Clases de arte o diseño",
        medicina: 0,
        sociales: 0,
        innovacion: 1,
        deportes: 0,
        disenio: 3
      }
    ],
  },
  {
    id: 10,
    question: "¿Cómo te ves en 10 años?",
    options: [
      {
        text: "Como médico especialista",
        medicina: 3,
        sociales: 0,
        innovacion: 0,
        deportes: 0,
        disenio: 0
      },
      { text: "Como un activista social", medicina: 0, sociales: 3, innovacion: 0, deportes: 0, disenio: 0 },
      {
        text: "Como CEO de una empresa",
        medicina: 0,
        sociales: 1,
        innovacion: 3,
        deportes: 0,
        disenio: 0
      },
      {
        text: "Como entrenador o deportista profesional",
        medicina: 1,
        sociales: 0,
        innovacion: 0,
        deportes: 3,
        disenio: 0
      },
      {
        text: "Como un artista reconocido",
        medicina: 0,
        sociales: 0,
        innovacion: 1,
        deportes: 0,
        disenio: 3
      }
    ],
  },
  {
    id: 11,
    question: "¿Qué te resulta más fascinante?",
    options: [
      {
        text: "El funcionamiento del cuerpo humano",
        medicina: 3,
        sociales: 0,
        innovacion: 1,
        deportes: 2,
        disenio: 0
      },
      {
        text: "La psicología y comportamiento social",
        medicina: 1,
        sociales: 3,
        innovacion: 0,
        deportes: 0,
        disenio: 0
      },
      {
        text: "Los avances tecnológicos",
        medicina: 0,
        sociales: 0,
        innovacion: 3,
        deportes: 0,
        disenio: 2
      },
      {
        text: "La estrategia y tácticas deportivas",
        medicina: 0,
        sociales: 0,
        innovacion: 0,
        deportes: 3,
        disenio: 0
      },
      {
        text: "El arte y la creatividad visual o auditiva",
        medicina: 0,
        sociales: 0,
        innovacion: 1,
        deportes: 0,
        disenio: 3
      }
    ],
  },
  {
    id: 12,
    question: "¿Qué tipo de retos prefieres?",
    options: [
      {
        text: "Casos médicos complejos",
        medicina: 3,
        sociales: 0,
        innovacion: 1,
        deportes: 0,
        disenio: 0
      },
      {
        text: "Problemas sociales profundos",
        medicina: 0,
        sociales: 3,
        innovacion: 0,
        deportes: 0,
        disenio: 0
      },
      {
        text: "Desafíos técnicos innovadores",
        medicina: 1,
        sociales: 0,
        innovacion: 3,
        deportes: 0,
        disenio: 2
      },
      {
        text: "Retos físicos y de equipo",
        medicina: 0,
        sociales: 0,
        innovacion: 0,
        deportes: 3,
        disenio: 0
      },
      {
        text: "Diseñar una idea con materiales limitados", medicina: 0, sociales: 0, innovacion: 0, deportes: 0, disenio: 0
      }
    ],
  },
  {
    id: 13,
    question: "¿Qué herramientas prefieres usar?",
    options: [
      {
        text: "Equipos médicos y diagnósticos",
        medicina: 3,
        sociales: 0,
        innovacion: 1,
        deportes: 0,
        disenio: 0
      },
      {
        text: "Técnicas de investigación social",
        medicina: 0,
        sociales: 3,
        innovacion: 0,
        deportes: 0,
        disenio: 0
      },
      {
        text: "Software y tecnología avanzada",
        medicina: 1,
        sociales: 0,
        innovacion: 3,
        deportes: 0,
        disenio: 2
      },
      {
        text: "Planes de entrenamiento y pesas",
        medicina: 1,
        sociales: 0,
        innovacion: 0,
        deportes: 3,
        disenio: 0
      },
      {
        text: "Impresoras 3D y Realidad Virtual",
        medicina: 0,
        sociales: 0,
        innovacion: 1,
        deportes: 0,
        disenio: 3
      }
    ],
  },
  {
    id: 14,
    question: "¿Qué te genera más satisfacción?",
    options: [
      {
        text: "Ver a un paciente recuperarse",
        medicina: 3,
        sociales: 0,
        innovacion: 0,
        deportes: 0,
        disenio: 0
      },
      {
        text: "Resolver un conflicto social",
        medicina: 0,
        sociales: 3,
        innovacion: 0,
        deportes: 0,
        disenio: 0
      },
      {
        text: "Crear algo completamente nuevo",
        medicina: 0,
        sociales: 0,
        innovacion: 3,
        deportes: 0,
        disenio: 2
      },
      {
        text: "Romper un récord físico",
        medicina: 0,
        sociales: 0,
        innovacion: 0,
        deportes: 3,
        disenio: 0
      },
      {
        text: "Que un diseño complejo de resultado",
        medicina: 0,
        sociales: 0,
        innovacion: 1,
        deportes: 0,
        disenio: 3
      }
    ],
  },
  {
    id: 15,
    question: "¿En qué área te gustaría especializarte?",
    options: [
      { text: "Ciencias de la salud", medicina: 3, sociales: 0, innovacion: 0, deportes: 0, disenio: 0 },
      {
        text: "Ciencias sociales y humanas",
        medicina: 0,
        sociales: 3,
        innovacion: 0,
        deportes: 0,
        disenio: 0
      },
      {
        text: "Tecnología e innovación",
        medicina: 0,
        sociales: 0,
        innovacion: 3,
        deportes: 0,
        disenio: 2
      },
      { text: "Investigación en entrenamientos físicos y el cuerpo humano", medicina: 1, sociales: 0, innovacion: 0, deportes: 3, disenio: 0 },
      { text: "Diseño gráfico y multimedia", medicina: 0, sociales: 0, innovacion: 1, deportes: 0, disenio: 3 }
    ],
  },
];
