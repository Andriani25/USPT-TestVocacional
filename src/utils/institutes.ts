import { Heart, Users, Lightbulb, Volleyball, Building, type LucideProps } from "lucide-react";

export interface Institute{
name: string,
description: string,
icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
color: string,
careers: string[]
}

const institutes = {
  medicina: {
    name: "Instituto de Salud y Calidad de Vida",
    description:
      "El Instituto de Salud y Calidad de Vida (ISYCV) se especializa en formar a los futuros médicos, doctores y kinesiólogos desde los primeros años de estudio. En el Centro de Simulación Nestor Forenza, los alumnos de las carreras de este Instituto podrán llevar a cabo sus prácticas desde un inicio, utilizando nuestros androides de prácticas invasivas. Permitiendo ,por ejemplo, realizar inyecciones, extracciónes, incisiones, y muchos otros procedimientos de una forma realista.",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    careers: [
      "Medicina",
      "Kinesiología",
      "Emergencias Médicas"
    ],
  },
  sociales: {
    name: "Instituto de Estudios Sociales, Política y Cultura",
    description:
      "El Instituto de Sociales se caracteriza por formar de manera didáctica a todos nuestros alumnos gracias a las distintas actividades que se realiza en cada carrera. Además contamos con la Sala de Litigación en nuestra Sede Plaza, en donde alumnos de Abogacía, Comercio Exterior, y Relaciones Internacionales realizan sus prácticas tanto de juicios con jurado, y simulaciones de sesiones de la ONU.",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    careers: [
      "Abogacía",
      "Relaciones Internacionales",
      "Procuración",
      "Comercio Exterior",
      "Finanzas",
      "Tecnicatura y Licenciatura en Ceremonial, Protocolo y Organización de Eventos (Disponible a Distancia)"
    ],
  },
  disenio: {
  name: "Instituto de Diseño, Estrategia y Creatividad",
  description: "El Instituto de Diseño se encarga de formar profesionales de gran capacidad técnica que cubran los requerimientos de la región relacionadas al diseño y creatividad. Investigando sobre problemáticas vinculadas al diseño  ",
  icon: Building,
  color: "from-orange-500 to-yellow-500",
  careers: [
    "Diseño Industrial",
    "Diseño Textil",
    "Arquitectura"
  ]
  },
  innovacion: {
    name: "Instituto de Desarrollo e Innovación Tecnológica",
    description: "El Instituto de Competitividad e Innovación principalmente se centra en la creatividad del estudiante para resolver distintos inconvenientes, tanto empresariales como sociales. EL Instituto cuenta con el CIBA (Centro Integral de Biotecnología Aplicada), donde nuestros alumnos de Bromatología, de Ciencia y Tecnología de los alimentos, realizan sus prácticas profesionales. Esto les permite destacar en futuras aplicaciones de trabajo, e incluso dependiendo de su desempeño, pueden quedar trabajando en el CIBA.",
    icon: Lightbulb,
    color: "from-purple-500 to-indigo-500",
    careers: [
      "Gestión en Empresas Agroindustriales",
      "Bromatología",
      "Tecnología en los Alimentos",
      "Guardaparque",
    ],
  },
    deportes: {
    name: "Instituto de Educación y Gestión Deportiva",
    description: "El Instituto de Deporte se especializa en formar a los futuros profesionales del deporte, desde entrenadores hasta gestores deportivos.",
    icon: Volleyball,
    color: "from-green-500 to-gray-500",
    careers: [
      "Gestión Deportiva",
      "Tecnicatura en Guía de Montaña",
    ],
  }
};

export default institutes