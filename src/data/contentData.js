// src/data/contentData.js

import herramientasImg from '../assets/Herramientas.png';
import tendenciasImg from '../assets/Tendencias.png';
import competenciasImg from '../assets/Competencias.png';
import apoyoImg from '../assets/Apoyo.png';
import glosarioImg from '../assets/Glosario.png';

export const siteContent = {
  header: {
    logoUrl: "/TransformacionDigitalJIC/Logo5RIF3Horizontal.png",
    logoText: "Transformación Digital",
    navLinks: [
      { id: "inicio", label: "Inicio", link: "#inicio", active: true },
      { id: "herramientas", label: "Herramientas", link: "/tools" },
      { id: "tendencias", label: "Tendencias", link: "#tendencias" },
      { id: "competencias", label: "Competencias", link: "#competencias" },
      { id: "nosotros", label: "Sobre nosotros", link: "#nosotros" },
      { id: "glosario", label: "Glosario", link: "#glosario" },
    ],
    ctaButton: "Empiece aquí >"
  },
  hero: {
    titlePart1: "Impulsa tu futuro.",
    titlePart2: "Transforma tu mundo.",
    description: "Descubre herramientas, tendencias y conocimientos para avanzar en tu camino hacia la transformación digital.",
    buttonText: "Empiece aquí >",
    imageUrl: "/TransformacionDigitalJIC/IsotipoColor.png" // Puedes reemplazarlo por la imagen real del mockup
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
  },
  toolsPage: {
    title: "Herramientas Digitales",
    subtitle: "Explora los instrumentos para impulsar la transformación...",
    tools: [
      {
        id: 1,
        badgeText: "Herramienta 1",
        title: "Termómetro Digital",
        subtitle: "Chequeo Inicial de Madurez Digital",
        description: "Realiza una evaluación rápida de 12 preguntas para conocer el nivel de madurez digital de tu empresa, identificar su punto de partida y recibir recomendaciones sobre las herramientas más adecuadas para continuar el proceso de transformación digital.",
        duration: "10 min",
        iconUrl: "/TransformacionDigitalJIC/thermometer.svg",
        actionRoute: "/tools/diagnostico"
      },
      {
        id: 2,
        badgeText: "Herramienta 2",
        title: "Autodiagnóstico de Madurez",
        subtitle: "Evaluación Integral en 9 Dimensiones",
        description: "Analiza el nivel de madurez digital de tu empresa en nueve dimensiones estratégicas, identifica las principales brechas frente a una meta de referencia y prioriza las acciones para construir tu hoja de ruta de transformación digital.",
        duration: "20 - 30 min",
        iconUrl: "/TransformacionDigitalJIC/analytics.svg",
        actionRoute: "/tools/matriz"
      },
      {
        id: 3,
        badgeText: "Herramienta 3",
        title: "Termómetro Industria 5.0",
        subtitle: "Evaluación de los 3 Pilares 5RI",
        description: "Evalúa si la transformación digital de tu empresa integra los tres pilares de la Industria 5.0: personas, sostenibilidad y resiliencia, identificando oportunidades para lograr un desarrollo equilibrado y sostenible.",
        duration: "10 - 15 min",
        iconUrl: "/TransformacionDigitalJIC/balance.svg",
        actionRoute: "/tools/matriz"
      },
      {
        id: 4,
        badgeText: "Herramienta 4",
        title: "Modelo de Negocio Digital",
        subtitle: "Diseño de Valor y Estrategia Digital",
        description: "Define cómo tu empresa crea, entrega y captura valor mediante un modelo de negocio digital, identificando oportunidades para innovar en productos, servicios, canales y fuentes de ingresos.",
        duration: "25 - 35 min",
        iconUrl: "/TransformacionDigitalJIC/business_center.svg",
        actionRoute: "/tools/matriz"
      },
      {
        id: 5,
        badgeText: "Herramienta 5",
        title: "¿Por Dónde Empezar?",
        subtitle: "Priorización de Iniciativas Digitales",
        description: "Evalúa y prioriza las iniciativas de transformación digital según su impacto y esfuerzo, identificando las acciones de mayor valor y menor costo para obtener resultados rápidos.",
        duration: "15 - 20 min",
        iconUrl: "/TransformacionDigitalJIC/flag.svg",
        actionRoute: "/tools/matriz"
      },
      {
        id: 6,
        badgeText: "Herramienta 6",
        title: "Hoja de Ruta Digital",
        subtitle: "Plan de Implementación por Horizontes",
        description: "Diseña un plan de transformación digital estructurado por horizontes de tiempo, definiendo acciones, responsables y prioridades para cerrar las brechas identificadas y alcanzar los objetivos estratégicos.",
        duration: "20 - 30 min",
        iconUrl: "/TransformacionDigitalJIC/route.svg",
        actionRoute: "/tools/matriz"
      },
      {
        id: 7,
        badgeText: "Herramienta 7",
        title: "Ciberseguridad Esencial",
        subtitle: "Protección y Continuidad del Negocio",
        description: "Evalúa las prácticas fundamentales de ciberseguridad de tu empresa mediante las seis funciones del marco NIST, fortaleciendo la protección de la información y la continuidad operativa frente a incidentes.",
        duration: "15 - 20 min",
        iconUrl: "/TransformacionDigitalJIC/shield.svg",
        actionRoute: "/tools/matriz"
      },
      {
        id: 8,
        badgeText: "Herramienta 8",
        title: "Protección de Datos",
        subtitle: "Cumplimiento de la Ley 1581",
        description: "Verifica el cumplimiento de la normativa colombiana de protección de datos personales, fortaleciendo la confianza de los clientes y reduciendo riesgos legales para tu empresa.",
        duration: "10 - 15 min",
        iconUrl: "/TransformacionDigitalJIC/lock.svg",
        actionRoute: "/tools/matriz"
      },
      {
        id: 9,
        badgeText: "Herramienta 9",
        title: "IA Responsable",
        subtitle: "Gobernanza y Gestión de Riesgos",
        description: "Evalúa el uso responsable de la inteligencia artificial mediante buenas prácticas de gobernanza, gestión de riesgos y protección de datos para una adopción segura y confiable.",
        duration: "15 - 20 min",
        iconUrl: "/TransformacionDigitalJIC/psychology.svg",
        actionRoute: "/tools/matriz"
      },
      {
        id: 10,
        badgeText: "Herramienta 10",
        title: "Reporte de Sostenibilidad",
        subtitle: "Indicadores ESG para Empresas",
        description: "Genera un reporte básico de sostenibilidad con información ambiental, social y de gobernanza, facilitando el acceso a nuevos mercados, clientes y oportunidades de financiación.",
        duration: "20 - 30 min",
        iconUrl: "/TransformacionDigitalJIC/eco.svg",
        actionRoute: "/tools/matriz"
      },
      {
        id: 11,
        badgeText: "Herramienta 11",
        title: "Reporte de Sostenibilidad",
        title: "Plan de Cambio",
        subtitle: "Gestión del Cambio y Pilotos",
        description: "Planifica la adopción de nuevas iniciativas mediante gestión del cambio, pilotos controlados y una gobernanza ligera que facilite la implementación exitosa de la transformación digital.",
        duration: "25 - 35 min",
        iconUrl: "/TransformacionDigitalJIC/change_circle.svg",
        actionRoute: "/tools/matriz"
      },
      {
        id: 12,
        badgeText: "Herramienta 12",
        title: "Tablero de Indicadores",
        subtitle: "Seguimiento del Desempeño",
        description: "Monitorea el avance de la transformación digital mediante indicadores estratégicos y de seguimiento que apoyan la toma de decisiones basada en resultados.",
        duration: "15 - 20 min",
        iconUrl: "/TransformacionDigitalJIC/monitoring.svg",
        actionRoute: "/tools/matriz"
      },
      {
        id: 13,
        badgeText: "Herramienta 13",
        title: "Marketing Digital y CRM",
        subtitle: "Gestión Comercial y Clientes",
        description: "Fortalece la presencia digital de tu empresa, organiza la gestión de clientes mediante un CRM y mejora el seguimiento comercial para aumentar las oportunidades de venta.",
        duration: "25 - 35 min",
        iconUrl: "/TransformacionDigitalJIC/groups.svg",
        actionRoute: "/tools/matriz"
      },
      {
        id: 14,
        badgeText: "Herramienta 14",
        title: "Procesos y Automatización",
        subtitle: "Optimización de Procesos",
        description: "Identifica procesos repetitivos y oportunidades de automatización para mejorar la eficiencia operativa, reducir errores y optimizar el uso de los recursos.",
        duration: "20 - 30 min",
        iconUrl: "/TransformacionDigitalJIC/settings.svg",
        actionRoute: "/tools/matriz"
      },
      {
        id: 15,
        badgeText: "Herramienta 15",
        title: "Gestión de Datos",
        subtitle: "Organización y Calidad de la Información",
        description: "Organiza los datos de tu empresa, mejora su calidad y confiabilidad, y conviértelos en información útil para respaldar decisiones estratégicas.",
        duration: "20 - 25 min",
        iconUrl: "/TransformacionDigitalJIC/database.svg",
        actionRoute: "/tools/matriz"
      },
      {
        id: 16,
        badgeText: "Herramienta 16",
        title: "Bienestar del Equipo",
        subtitle: "Evaluación del Entorno Laboral",
        description: "Analiza el bienestar, la carga de trabajo y el compromiso del equipo para impulsar una transformación digital centrada en las personas y mejorar el desempeño organizacional.",
        duration: "10 - 15 min",
        iconUrl: "/TransformacionDigitalJIC/favorite.svg",
        actionRoute: "/tools/matriz"
      },
      {
        id: 17,
        badgeText: "Herramienta 17",
        title: "Apoyo y Financiación",
        subtitle: "Conexión con el Ecosistema Empresarial",
        description: "Encuentra programas de formación, acompañamiento y financiación que apoyen la transformación digital de tu empresa y faciliten el acceso a recursos estratégicos.",
        duration: "10 - 15 min",
        iconUrl: "/TransformacionDigitalJIC/handshake.svg",
        actionRoute: "/tools/matriz"
      },
      {
        id: 18,
        badgeText: "Herramienta 18",
        title: "Estrategias de Innovación",
        subtitle: "Portafolio de Innovación Empresarial",
        description: "Diseña un portafolio equilibrado de iniciativas de innovación, priorizando oportunidades de corto, mediano y largo plazo para impulsar el crecimiento sostenible de tu empresa.",
        duration: "25 - 35 min",
        iconUrl: "/TransformacionDigitalJIC/lightbulb.svg",
        actionRoute: "/tools/matriz"
      }
    ]
  }
};