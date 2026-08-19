// 0. Datos del Encabezado Principal Hero
export const mainHeaderData = {
  title: 'Competencias Digitales',
  subtitle: 'Explora los instrumentos para impulsar la transformación y fortalecer tus habilidades en la Quinta Revolución Industrial.',
  iconUrl: '/TransformacionDigitalJIC/competencias.svg'
};

// 1. Navegación Principal del Módulo Competencias
export const mainTabsData = [
  { id: 'catalogo', label: 'Catálogo', icon: 'grid_view' },
  { id: 'niveles', label: 'Niveles de dominio', icon: 'bar_chart' },
  { id: 'gobernanza', label: 'Gobernanza', icon: 'account_balance' },
  { id: 'desarrollo', label: 'Desarrollo', icon: 'rocket_launch' },
  { id: 'hoja-ruta', label: 'Hoja de ruta', icon: 'map' },
  { id: 'cursos', label: 'Cursos abiertos', icon: 'desktop_windows' }
];

// 2. Sub-navegación del Catálogo
export const catalogSubTabsData = [
  { id: 'tecnologia', label: 'Tecnología', icon: 'desktop_windows' },
  { id: 'gestion', label: 'Gestión', icon: 'work' },
  { id: 'innovacion', label: 'Innovación', icon: 'rocket_launch' },
  { id: 'personas', label: 'Personas', icon: 'groups' },
  { id: 'sostenibilidad', label: 'Sostenibilidad', icon: 'eco' }
];

// 3. Contenido de la Pestaña "Catálogo"
export const catalogContentData = {
  tecnologia: {
    title: "Tecnología",
    description: "Competencias digitales que permiten gestionar la información, los sistemas y la seguridad en un entorno tecnológico, fortaleciendo la eficiencia y la confianza en la operación.",
    icon: "desktop_windows",
    categories: [
      {
        id: "ca1",
        code: "CA1.",
        title: "Datos",
        icon: "bar_chart",
        items: [
          {
            id: "d1",
            title: "Alfabetización informacional y de datos",
            description: "Buscar, filtrar y evaluar información y datos; distinguir fuentes confiables.",
            level: "Limitado",
            levelType: "limited"
          },
          {
            id: "d2",
            title: "Gestión y organización de datos",
            description: "Capturar, almacenar y organizar datos de operación y de clientes; convenciones de nombrado.",
            level: "Limitado",
            levelType: "limited"
          },
          {
            id: "d3",
            title: "Analítica básica y decisión basada en datos",
            description: "Construir indicadores simples y tableros descriptivos para decidir.",
            level: "Transición",
            levelType: "transition"
          }
        ]
      },
      {
        id: "ca4",
        code: "CA4.",
        title: "Ciberseguridad y datos personales",
        icon: "verified_user",
        items: [
          {
            id: "c1",
            title: "Ciberhigiene",
            description: "Respaldos automáticos, autenticación multifactor y prevención de phishing.",
            level: "Limitado",
            levelType: "limited"
          },
          {
            id: "c2",
            title: "Protección de datos personales",
            description: "Aplicar la Ley 1581/2012 y una política de privacidad visible al cliente.",
            level: "Transición",
            levelType: "transition"
          }
        ]
      }
    ]
  },

  gestion: {
    title: "Gestión",
    description: "Competencias enfocadas en la conducción de la transformación, la relación con el cliente y el liderazgo estratégico para adaptar el negocio.",
    icon: "work",
    linkToSection: {
      question: "¿Quieres saber cómo desarrollar estas competencias?",
      text: "Consulta la sección Gobernanza y gestión del cambio",
      targetTab: "gobernanza"
    },
    categories: [
      {
        id: "ca2",
        code: "CA2.",
        title: "Comunicación y relación con el cliente",
        icon: "forum",
        items: [
          {
            id: "c2-1",
            title: "Comunicación digital y canales",
            description: "Operar canales digitales y mensajería de negocio con catálogo y respuesta oportuna.",
            level: "Limitado",
            levelType: "limited"
          },
          {
            id: "c2-2",
            title: "Atención y relación con el cliente (CRM)",
            description: "Registrar clientes y oportunidades y dar seguimiento sistemático.",
            level: "Transición",
            levelType: "transition"
          }
        ]
      },
      {
        id: "ca6",
        code: "CA6.",
        title: "Liderazgo y gestión del cambio",
        icon: "hub",
        items: [
          {
            id: "c6-1",
            title: "Visión y liderazgo digital",
            description: "Orientar el rumbo digital del negocio con casos sectoriales aplicados.",
            level: "Limitado",
            levelType: "limited"
          },
          {
            id: "c6-2",
            title: "Gestión del cambio y sucesión",
            description: "Conducir el cambio cultural y el relevo generacional o de liderazgo.",
            level: "Avanzado",
            levelType: "advanced"
          }
        ]
      }
    ]
  },

  innovacion: {
    title: "Innovación",
    description: "Habilidades para aprovechar modelos de negocio digitales, inteligencia artificial y automatización avanzada de procesos.",
    icon: "rocket_launch",
    categories: [
      {
        id: "ca3",
        code: "CA3.",
        title: "Negocio digital",
        icon: "storefront",
        items: [
          {
            id: "c3-1",
            title: "Presencia y contenido digital",
            description: "Crear y mantener presencia y contenido digital pertinente al sector.",
            level: "Limitado",
            levelType: "limited"
          },
          {
            id: "c3-2",
            title: "Propuesta de valor y comercio digital",
            description: "Definir propuesta de valor y habilitar venta o servicio digital.",
            level: "Transición",
            levelType: "transition"
          },
          {
            id: "c3-3",
            title: "Detección de oportunidades y creatividad",
            description: "Identificar oportunidades de mercado y generar propuestas de valor.",
            level: "Limitado",
            levelType: "limited"
          },
          {
            id: "c3-4",
            title: "Alfabetización financiera y económica",
            description: "Entender costos, márgenes y el retorno de las iniciativas digitales.",
            level: "Transición",
            levelType: "transition"
          }
        ]
      },
      {
        id: "ca5",
        code: "CA5.",
        title: "IA y automatización",
        icon: "smart_toy",
        items: [
          {
            id: "c5-1",
            title: "Uso responsable de IA",
            description: "Aplicar IA generativa en tareas concretas con criterio y supervisión humana.",
            level: "Transición",
            levelType: "transition"
          },
          {
            id: "c5-2",
            title: "Automatización de procesos",
            description: "Identificar y automatizar tareas repetitivas con cuantificación de impacto.",
            level: "Avanzado",
            levelType: "advanced"
          }
        ]
      }
    ]
  },

  personas: {
    title: "Personas",
    description: "Capacidades orientadas al bienestar humano, la colaboración armónica con la tecnología y el aprendizaje continuo.",
    icon: "groups",
    categories: [
      {
        id: "ca7",
        code: "CA7.",
        title: "Bienestar y capacidades humanas",
        icon: "sentiment_satisfied",
        items: [
          {
            id: "c7-1",
            title: "Bienestar y ergonomía cognitiva",
            description: "Medir el bienestar y rediseñar rituales de trabajo para reducir carga cognitiva.",
            level: "Transición",
            levelType: "transition",
            icon: "face"
          },
          {
            id: "c7-2",
            title: "Colaboración humano-máquina",
            description: "Integrar herramientas digitales sin sustituir el criterio humano.",
            level: "Transición",
            levelType: "transition",
            icon: "handshake"
          },
          {
            id: "c7-3",
            title: "Mentalidad de crecimiento y aprender a aprender",
            description: "Gestionar el propio aprendizaje y adaptarse al cambio continuo.",
            level: "Limitado",
            levelType: "limited",
            icon: "psychology"
          },
          {
            id: "c7-4",
            title: "Flexibilidad y resiliencia personal",
            description: "Afrontar la incertidumbre y sostener el desempeño ante el cambio.",
            level: "Transición",
            levelType: "transition",
            icon: "trending_up"
          }
        ]
      }
    ]
  },

  sostenibilidad: {
    title: "Sostenibilidad",
    description: "Competencias centradas en el desarrollo sostenible, resiliencia operativa y economía circular alineadas con la 5RI.",
    icon: "eco",
    categories: [
      {
        id: "ca8",
        code: "CA8.",
        title: "Sostenibilidad y resiliencia",
        icon: "nest_eco_leaf",
        items: [
          {
            id: "c8-1",
            title: "Sostenibilidad y reporte ESG digital",
            description: "Capturar y reportar indicadores ESG verificables con apoyo digital.",
            level: "Avanzado",
            levelType: "advanced"
          },
          {
            id: "c8-2",
            title: "Continuidad y resiliencia operativa",
            description: "Planear la continuidad ante incidentes cibernéticos y operacionales.",
            level: "Transición",
            levelType: "transition"
          },
          {
            id: "c8-3",
            title: "Valoración de la sostenibilidad y pensamiento sistémico",
            description: "Comprender la sostenibilidad como valor y analizar el negocio como sistema.",
            level: "Transición",
            levelType: "transition"
          },
          {
            id: "c8-4",
            title: "Economía circular y eficiencia de recursos",
            description: "Reducir, reutilizar y trazar insumos y residuos; eficiencia energética.",
            level: "Avanzado",
            levelType: "advanced"
          }
        ]
      }
    ]
  }
};

// 4. Contenido de la Pestaña "Niveles de Dominio"
export const domainLevelsData = [
  {
    id: 'limitado',
    title: 'Limitado',
    icon: 'eco',
    colorClass: 'level-limitado',
    badgeColor: '#eab308',
    description: 'Iniciativas aisladas que comienzan a generar aprendizaje y resultados básicos.'
  },
  {
    id: 'transicion',
    title: 'Transición',
    icon: 'potted_plant',
    colorClass: 'level-transicion',
    badgeColor: '#22c55e',
    description: 'Procesos en desarrollo, con avances significativos y aplicación creciente.'
  },
  {
    id: 'avanzado',
    title: 'Avanzado',
    icon: 'rocket_launch',
    colorClass: 'level-avanzado',
    badgeColor: '#15803d',
    description: 'Prácticas consolidadas, integradas al negocio con resultados medibles.'
  },
  {
    id: 'lider',
    title: 'Líder',
    icon: 'emoji_events',
    colorClass: 'level-lider',
    badgeColor: '#166534',
    description: 'Referente que innova, comparte y genera impacto más allá de su organización.'
  }
];

export const domainLevelsInfo = {
  title: '¿Cómo se interpretan?',
  description: 'Los niveles de dominio son una guía para que cada organización identifique su punto de partida y avance de manera progresiva en el desarrollo de competencias clave para la 5RI.'
};

// 5. Contenido de la Pestaña "Gobernanza"
export const governanceData = {
  header: {
    title: "Gobernanza",
    description: "Principios y mecanismos para orientar, coordinar y sostener la transformación digital en las organizaciones.",
    icon: "account_balance"
  },
  about: {
    title: "¿Qué es?",
    description: "Es el marco que define cómo se toman las decisiones, se asignan responsabilidades y se hace seguimiento al avance de la transformación digital, asegurando coherencia con los pilares de la SRI: humano-céntrico, sostenible y resiliente.",
    icon: "info"
  },
  keyElements: {
    title: "Elementos clave",
    items: [
      "Liderazgo y compromiso de la dirección.",
      "Políticas y lineamientos estratégicos.",
      "Seguimiento y evaluación continua.",
      "Articulación con actores del ecosistema."
    ]
  },
  action: {
    text: "Ver todo que de gobernanza",
    icon: "desktop_windows"
  }
};

// Contenido de la Pestaña "Desarrollo"
export const developmentData = {
  header: {
    title: "Desarrollo de competencias",
    description: "Estrategias y recursos para fortalecer las habilidades que impulsan la transformación digital.",
    icon: "rocket_launch"
  },
  strategies: {
    title: "Estrategias clave",
    icon: "verified",
    items: [
      {
        id: "s1",
        title: "Aprendizaje continuo",
        description: "Actualización permanente de conocimientos y habilidades.",
        icon: "school"
      },
      {
        id: "s2",
        title: "Formación práctica",
        description: "Aplicación de lo aprendido en contextos reales de negocio.",
        icon: "psychology"
      },
      {
        id: "s3",
        title: "Acompañamiento y mentoría",
        description: "Orientación para la implementación en el día a día.",
        icon: "record_voice_over"
      },
      {
        id: "s4",
        title: "Uso de recursos abiertos",
        description: "Acceso a contenidos de calidad, gratuitos y certificados.",
        icon: "menu_book"
      }
    ]
  },
  approach: {
    title: "Enfoque",
    description: "Basado en la aplicabilidad, la flexibilidad y la inclusión, para que todas las personas puedan desarrollar competencias digitales y humanas que generen valor sostenible.",
    icon: "eco"
  }
};

// Contenido de la Pestaña "Hoja de ruta"
export const roadmapData = {
  header: {
    title: "Hoja de ruta",
    description: "Tu camino para fortalecer las competencias y avanzar hacia la SRI.",
    icon: "map"
  },
  stages: {
    title: "Etapas sugeridas",
    items: [
      {
        step: "1",
        title: "Diagnóstico",
        description: "Evalúa tu nivel actual de competencias y prioriza tus brechas.",
        badge: "Mes 1"
      },
      {
        step: "2",
        title: "Plan de acción",
        description: "Define los objetivos de aprendizaje y las estrategias para alcanzarlos.",
        badge: "Mes 2"
      },
      {
        step: "3",
        title: "Implementación",
        description: "Desarrolla las competencias con cursos, herramientas y acompañamiento.",
        badge: "Mes 3–6"
      },
      {
        step: "4",
        title: "Seguimiento y mejora",
        description: "Mide avances, ajusta y fortalece tu proceso de transformación.",
        badge: "Mes 7+"
      }
    ]
  },
  recommendation: {
    title: "Recomendación",
    description: 'Empieza por las competencias con nivel de entrada "Limitado" o "Transición" y avanza de forma gradual según tu realidad y recursos.',
    icon: "lightbulb"
  }
};

// Contenido de la Pestaña "Cursos"
export const coursesData = {
  header: {
    title: "Cursos en línea abiertos",
    description: "Aprende de los mejores. Cursos gratuitos o de acceso abierto para fortalecer tus competencias y cerrar brechas de conocimiento.",
    icon: "computer"
  },
  categories: [
    { id: "all", label: "Todos" },
    { id: "tecnologia", label: "Tecnología" },
    { id: "gestion", label: "Gestión" },
    { id: "innovacion", label: "Innovación" },
    { id: "personas", label: "Personas" },
    { id: "sostenibilidad", label: "Sostenibilidad" }
  ],
  items: [
    {
      id: "c1",
      title: "Transformación digital para Mipymes",
      platform: "Coursera",
      category: "gestion",
      certificate: "Certificado opcional",
      price: "Gratuito",
      logoType: "meta",
      url: "https://www.coursera.org"
    },
    {
      id: "c2",
      title: "Fundamentos de IA Generativa",
      platform: "Google Skills",
      category: "tecnologia",
      certificate: "Certificado",
      price: "Gratuito",
      logoType: "google",
      url: "https://skillshop.exceedlms.com"
    },
    {
      id: "c3",
      title: "Herramientas digitales para la productividad",
      platform: "SENA",
      category: "tecnologia",
      certificate: "Certificado",
      price: "Gratuito",
      logoType: "sena",
      url: "https://sena.territorio.la"
    }
  ]
};