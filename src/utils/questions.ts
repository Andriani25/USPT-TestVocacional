interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    medicina: number;
    sociales: number;
    innovacion: number;
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
        innovacion: 0,
      },
      {
        text: "Resolver problemas sociales",
        medicina: 0,
        sociales: 3,
        innovacion: 1,
      },
      {
        text: "Crear nuevas tecnologías",
        medicina: 1,
        sociales: 0,
        innovacion: 3,
      },
      {
        text: "Investigar nuevos tratamientos",
        medicina: 2,
        sociales: 0,
        innovacion: 2,
      },
    ],
  },
  {
    id: 2,
    question: "¿En qué ambiente te sientes más cómodo trabajando?",
    options: [
      { text: "Hospital o clínica", medicina: 3, sociales: 0, innovacion: 0 },
      {
        text: "Comunidad o centros sociales",
        medicina: 0,
        sociales: 3,
        innovacion: 0,
      },
      {
        text: "Laboratorio o startup",
        medicina: 1,
        sociales: 0,
        innovacion: 3,
      },
      { text: "Oficina corporativa", medicina: 0, sociales: 1, innovacion: 2 },
    ],
  },
  {
    id: 3,
    question: "¿Qué tipo de problemas prefieres resolver?",
    options: [
      { text: "Diagnósticos médicos", medicina: 3, sociales: 0, innovacion: 1 },
      {
        text: "Conflictos interpersonales",
        medicina: 0,
        sociales: 3,
        innovacion: 0,
      },
      {
        text: "Desafíos tecnológicos",
        medicina: 1,
        sociales: 0,
        innovacion: 3,
      },
      {
        text: "Estrategias de negocio",
        medicina: 0,
        sociales: 1,
        innovacion: 2,
      },
    ],
  },
  {
    id: 4,
    question: "¿Cuál es tu materia favorita?",
    options: [
      { text: "Biología y Química", medicina: 3, sociales: 0, innovacion: 1 },
      {
        text: "Historia y Literatura",
        medicina: 0,
        sociales: 3,
        innovacion: 0,
      },
      { text: "Matemáticas y Física", medicina: 1, sociales: 0, innovacion: 3 },
      {
        text: "Economía y Administración",
        medicina: 0,
        sociales: 1,
        innovacion: 2,
      },
    ],
  },
  {
    id: 5,
    question: "¿Qué te motiva más en la vida?",
    options: [
      { text: "Salvar vidas", medicina: 3, sociales: 1, innovacion: 0 },
      { text: "Ayudar a la sociedad", medicina: 1, sociales: 3, innovacion: 0 },
      { text: "Innovar y crear", medicina: 0, sociales: 0, innovacion: 3 },
      { text: "Liderar proyectos", medicina: 1, sociales: 1, innovacion: 2 },
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
      },
      {
        text: "En equipos multidisciplinarios",
        medicina: 1,
        sociales: 3,
        innovacion: 1,
      },
      {
        text: "De forma independiente",
        medicina: 1,
        sociales: 0,
        innovacion: 3,
      },
      { text: "Liderando equipos", medicina: 1, sociales: 2, innovacion: 2 },
    ],
  },
  {
    id: 7,
    question: "¿Qué habilidad consideras tu fortaleza?",
    options: [
      { text: "Empatía y cuidado", medicina: 3, sociales: 2, innovacion: 0 },
      {
        text: "Comunicación y persuasión",
        medicina: 1,
        sociales: 3,
        innovacion: 1,
      },
      { text: "Análisis y lógica", medicina: 2, sociales: 0, innovacion: 3 },
      { text: "Liderazgo y visión", medicina: 1, sociales: 1, innovacion: 2 },
    ],
  },
  {
    id: 8,
    question: "¿Qué tipo de impacto quieres tener?",
    options: [
      {
        text: "Mejorar la salud individual",
        medicina: 3,
        sociales: 1,
        innovacion: 0,
      },
      {
        text: "Transformar comunidades",
        medicina: 0,
        sociales: 3,
        innovacion: 1,
      },
      {
        text: "Revolucionar industrias",
        medicina: 1,
        sociales: 0,
        innovacion: 3,
      },
      {
        text: "Crear nuevos mercados",
        medicina: 0,
        sociales: 1,
        innovacion: 2,
      },
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
      },
      {
        text: "Proyectos comunitarios",
        medicina: 0,
        sociales: 3,
        innovacion: 0,
      },
      {
        text: "Competencias de programación",
        medicina: 0,
        sociales: 0,
        innovacion: 3,
      },
      {
        text: "Emprendimiento estudiantil",
        medicina: 1,
        sociales: 1,
        innovacion: 2,
      },
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
      },
      { text: "Como líder social", medicina: 0, sociales: 3, innovacion: 0 },
      {
        text: "Como innovador tecnológico",
        medicina: 0,
        sociales: 0,
        innovacion: 3,
      },
      {
        text: "Como CEO de una empresa",
        medicina: 1,
        sociales: 1,
        innovacion: 2,
      },
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
      },
      {
        text: "La psicología y comportamiento social",
        medicina: 1,
        sociales: 3,
        innovacion: 0,
      },
      {
        text: "Las nuevas tecnologías",
        medicina: 0,
        sociales: 0,
        innovacion: 3,
      },
      {
        text: "Las estrategias de mercado",
        medicina: 0,
        sociales: 1,
        innovacion: 2,
      },
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
      },
      {
        text: "Problemas sociales profundos",
        medicina: 0,
        sociales: 3,
        innovacion: 0,
      },
      {
        text: "Desafíos técnicos innovadores",
        medicina: 1,
        sociales: 0,
        innovacion: 3,
      },
      {
        text: "Oportunidades de negocio",
        medicina: 0,
        sociales: 1,
        innovacion: 2,
      },
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
      },
      {
        text: "Técnicas de investigación social",
        medicina: 0,
        sociales: 3,
        innovacion: 0,
      },
      {
        text: "Software y tecnología avanzada",
        medicina: 1,
        sociales: 0,
        innovacion: 3,
      },
      {
        text: "Análisis de datos y métricas",
        medicina: 1,
        sociales: 1,
        innovacion: 2,
      },
    ],
  },
  {
    id: 14,
    question: "¿Qué te genera más satisfacción?",
    options: [
      {
        text: "Ver a un paciente recuperarse",
        medicina: 3,
        sociales: 1,
        innovacion: 0,
      },
      {
        text: "Resolver un conflicto social",
        medicina: 0,
        sociales: 3,
        innovacion: 0,
      },
      {
        text: "Crear algo completamente nuevo",
        medicina: 0,
        sociales: 0,
        innovacion: 3,
      },
      {
        text: "Alcanzar objetivos ambiciosos",
        medicina: 1,
        sociales: 1,
        innovacion: 2,
      },
    ],
  },
  {
    id: 15,
    question: "¿En qué área te gustaría especializarte?",
    options: [
      { text: "Ciencias de la salud", medicina: 3, sociales: 0, innovacion: 0 },
      {
        text: "Ciencias sociales y humanas",
        medicina: 0,
        sociales: 3,
        innovacion: 0,
      },
      {
        text: "Tecnología e innovación",
        medicina: 0,
        sociales: 0,
        innovacion: 3,
      },
      {
        text: "Negocios y emprendimiento",
        medicina: 1,
        sociales: 1,
        innovacion: 2,
      },
    ],
  },
];
