import { Heart, Users, Lightbulb, type LucideProps } from "lucide-react";

export interface Institute{
name: string,
description: string,
icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
color: string,
careers: string[]
}

const institutes = {
  medicina: {
    name: "Instituto de Medicina",
    description:
      "Dedicado a formar profesionales de la salud comprometidos con el bienestar humano",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    careers: [
      "Medicina",
      "Kinesiología",
      "Emergencias Médicas"
    ],
  },
  sociales: {
    name: "Instituto de Sociales",
    description:
      "Formando líderes que transforman la sociedad y construyen un mundo mejor",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    careers: [
      "Abogacía",
      "Relaciones Internacionales",
      "Procuración",
      "Comercio Exterior",
      "Finanzas",
    ],
  },
  innovacion: {
    name: "Instituto de Competitividad e Innovación",
    description: "Creando los innovadores y emprendedores del futuro",
    icon: Lightbulb,
    color: "from-purple-500 to-indigo-500",
    careers: [
      "Gestión en Empresas Agroindustriales",
      "Bromatología",
      "Tecnología en los Alimentos",
      "Guardaparque",
    ],
  },
};

export default institutes