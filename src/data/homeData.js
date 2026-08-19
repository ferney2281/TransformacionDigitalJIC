// src/data/homeData.js
import herramientasImg from '../assets/Herramientas.png';
import tendenciasImg from '../assets/Tendencias.png';
import competenciasImg from '../assets/Competencias.png';
import apoyoImg from '../assets/Apoyo.png';
import glosarioImg from '../assets/Glosario.png';

export const homeData = {
  header: {
    logoUrl: "/TransformacionDigitalJIC/Logo5RIF3Horizontal.png",
    logoText: "Transformación Digital",
    navLinks: [
      { id: "inicio", label: "Inicio", link: "/", active: true },
      { id: "herramientas", label: "Herramientas", link: "/tools" },
      { id: "tendencias", label: "Tendencias", link: "/trends" },
      { id: "competencias", label: "Competencias", link: "/competencies" },
      { id: "nosotros", label: "Sobre nosotros", link: "/about-us" },
      { id: "glosario", label: "Glosario", link: "/glossary" },
    ],
    ctaButton: "Empiece aquí >"
  },
  hero: {
    titlePart1: "Impulsa tu futuro.",
    titlePart2: "Transforma tu mundo.",
    description: "Descubre herramientas, tendencias y conocimientos para avanzar en tu camino hacia la transformación digital.",
    buttonText: "Empiece aquí >",
    imageUrl: "/TransformacionDigitalJIC/IsotipoColor.png"
  },
  cards: [
    {
      id: "1",
      icon: herramientasImg,
      title: "Herramientas",
      description: "Conoce y aplica las mejores herramientas digitales"
    },
    {
      id: "2",
      icon: tendenciasImg,
      title: "Tendencias",
      description: "Mantente al día con las tendencias que están transformando el mundo."
    },
    {
      id: "3",
      icon: competenciasImg,
      title: "Competencias",
      description: "Desarrolla habilidades clave para el entorno digital actual."
    },
    {
      id: "4",
      icon: apoyoImg,
      title: "Sobre nosotros",
      description: "Encuentra recursos, programas y ayuda cuando lo necesites."
    },
    {
      id: "5",
      icon: glosarioImg,
      title: "Glosario",
      description: "Comprende los términos clave del mundo digital."
    }
  ],
  bannerCta: {
    title: "La transformación digital empieza contigo.",
    subtitle: "Aprende, aplica y comparte. Juntos construimos el futuro",
    buttonText: "Empiece aquí >"
  }
};