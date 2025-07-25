import { Heart, Users, Lightbulb } from "lucide-react";

const institutes = {
  medicina: {
    name: "Instituto de Medicina",
    description:
      "Dedicado a formar profesionales de la salud comprometidos con el bienestar humano",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    careers: [
      "Medicina Humana",
      "Enfermería",
      "Obstetricia",
      "Nutrición",
      "Psicología",
    ],
  },
  sociales: {
    name: "Instituto de Sociales",
    description:
      "Formando líderes que transforman la sociedad y construyen un mundo mejor",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    careers: [
      "Derecho",
      "Trabajo Social",
      "Comunicaciones",
      "Educación",
      "Sociología",
    ],
  },
  innovacion: {
    name: "Instituto de Competitividad e Innovación",
    description: "Creando los innovadores y emprendedores del futuro",
    icon: Lightbulb,
    color: "from-purple-500 to-indigo-500",
    careers: [
      "Ingeniería de Sistemas",
      "Administración",
      "Marketing",
      "Ingeniería Industrial",
      "Economía",
    ],
  },
};

export default institutes