// src/data/glossaryData.js
import imgGlosario from '../assets/Glosario.png';
export const glossaryCategories = [
  { id: "todos", label: "Todos", icon: "grid" },
  { id: "instituciones", label: "Instituciones", icon: "institution" },
  { id: "marcos", label: "Marcos", icon: "framework" },
  { id: "siglas", label: "Siglas", icon: "acronym" },
  { id: "conceptos", label: "Conceptos", icon: "concept" },
  { id: "tecnologias", label: "Tecnologías", icon: "tech" },
  { id: "indicadores", label: "Indicadores", icon: "metrics" },
  { id: "competencias", label: "Competencias", icon: "skills" },
];

export const glossaryData = {
  title: "Glosario",
  icon: imgGlosario,
  subtitle: "Encuentra rápidamente el significado de las instituciones, siglas, marcos y conceptos utilizados en la guía.",
  terms: [
    {
      id: 1,
      term: "AGCID",
      category: "instituciones",
      description: "Agencia Chilena de Cooperación Internacional para el Desarrollo; coautora, con SEGIB, de herramientas de transformación digital para pymes.",
      link: "https://www.agci.cl/" // Si incluye link, muestra el botón "Ver"
    },
    {
      id: 2,
      term: "Bancóldex",
      category: "instituciones",
      description: "Banco de Desarrollo Empresarial de Colombia; provee instrumentos de financiación, incluida la línea de transición verde.",
      link: "https://www.bancoldex.com/"
    },
    {
      id: 3,
      term: "BID",
      category: "instituciones",
      description: "Banco Interamericano de Desarrollo; ofrece el Chequeo Digital, autodiagnóstico de madurez digital para mipymes.",
      link: "https://www.iadb.org/"
    },
    {
      id: 4,
      term: "CAF",
      category: "instituciones",
      description: "Banco de Desarrollo de América Latina y el Caribe; dispone de un programa de hoja de ruta de transformación digital para pymes.",
      link: null // Si es null, no muestra botón
    },
    {
      id: 5,
      term: "CCOA",
      category: "instituciones",
      description: "Cámara de Comercio del Oriente Antioqueño; fuente del registro empresarial regional y aliado de acompañamiento técnico.",
      link: "https://www.ccoa.org.co/"
    }
  ]
};