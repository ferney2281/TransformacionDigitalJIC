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
  { id: 'cursos', label: 'Cursos abiertos', icon: 'desktop_windows' },
  { id: 'estrategias', label: 'Estrategias', icon: 'lightbulb' }
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
    { id: "ia", label: "Inteligencia Artificial" },
    { id: "ciberseguridad", label: "Ciberseguridad" },
    { id: "marketing", label: "Marketing Digital" },
    { id: "gestion", label: "Gestión" },
    { id: "innovacion", label: "Innovación" },
    { id: "personas", label: "Personas y Bienestar" },
    { id: "sostenibilidad", label: "Sostenibilidad" }
  ],
  items: [
    {
      id: "c1",
      title: "Portafolio AvanzaTEC (53 cursos)",
      platform: "MinTIC + 15 aliados tecnológicos",
      category: "tecnologia",
      certificate: "Certificado de industria",
      price: "Gratuito",
      logoType: "avanzatec",
      url: "https://avanzatec.gov.co",
      description: "Formación virtual en IA, ciberseguridad, analítica de datos, marketing digital, comercio electrónico y prompt engineering; clases en vivo y contenido asincrónico.",
      relevance: "Cobertura transversal de CA1–CA5; canal público nacional para cierre de brechas."
    },
    {
      id: "c2",
      title: "Certificado de carrera en Marketing Digital y E-commerce",
      platform: "Google / Coursera",
      category: "marketing",
      certificate: "Certificado Google",
      price: "Auditable sin costo",
      logoType: "google",
      url: "https://www.coursera.org",
      description: "Ruta completa de atracción de clientes, pauta digital, tienda en línea y analítica de marketing.",
      relevance: "CA2–CA3 (C2.1, C3.1, C3.2); ataca las brechas del frente comercial: D8 (1,63) y D2 (1,58)."
    },
    {
      id: "c3",
      title: "Inbound marketing y CRM gratuito",
      platform: "HubSpot Academy",
      category: "marketing",
      certificate: "Certificado",
      price: "Gratuito",
      logoType: "hubspot",
      url: "https://academy.hubspot.com/es",
      description: "Metodología de atracción y conversión de clientes y configuración de un CRM gratuito para seguimiento sistemático.",
      relevance: "CA2 (C2.2); habilita el KPI de clientes gestionados en CRM."
    },
    {
      id: "c4",
      title: "Marketing digital; análisis y visualización de datos",
      platform: "SENA — Sofía Plus / Betowa",
      category: "marketing",
      certificate: "Certificación oficial",
      price: "Gratuito",
      logoType: "sena",
      url: "https://betowa.sena.edu.co",
      description: "Cursos y programas técnicos virtuales: estrategia de marketing, SEO, analítica con SQL y Power BI.",
      relevance: "CA1–CA2 (C1.2, C1.3); certificación de competencias laborales; canal natural estatal."
    },
    {
      id: "c5",
      title: "Introducción a la Ciberseguridad",
      platform: "Cisco Networking Academy",
      category: "ciberseguridad",
      certificate: "Insignia digital",
      price: "Gratuito",
      logoType: "cisco",
      url: "https://www.netacad.com",
      description: "Fundamentos de protección digital personal y empresarial (~6 h).",
      relevance: "CA4 (C4.1); responde a D4 —el score actual más bajo, 1,13— y a la acción no-regret de ciberhigiene."
    },
    {
      id: "c6",
      title: "Introducción a la IA generativa",
      platform: "Google Skills / Cloud Skills Boost",
      category: "ia",
      certificate: "Insignia verificable",
      price: "Gratuito",
      logoType: "google",
      url: "https://skills.google",
      description: "Fundamentos de IA generativa sin prerrequisitos técnicos.",
      relevance: "CA5 (C5.1); puerta de entrada al uso responsable de IA."
    },
    {
      id: "c7",
      title: "Transformación de su negocio con IA (líderes y directores de pymes)",
      platform: "Microsoft Learn",
      category: "ia",
      certificate: "Insignia / Certificado",
      price: "Gratuito",
      logoType: "microsoft",
      url: "https://learn.microsoft.com",
      description: "Aplicación de IA en optimización de procesos, análisis de datos y decisión estratégica para decisores.",
      relevance: "CA5–CA6 (C5.1, C6.1); forma primero al decisor; fortalece D5 (1,59)."
    },
    {
      id: "c8",
      title: "Fundamentos de Inteligencia Artificial",
      platform: "IBM SkillsBuild",
      category: "ia",
      certificate: "Insignia digital IBM",
      price: "Gratuito",
      logoType: "ibm",
      url: "https://skillsbuild.org/es",
      description: "Conceptos de machine learning, deep learning y procesamiento de lenguaje natural (~10 h).",
      relevance: "CA5 (C5.1) y alfabetización de datos (CA1); apoya la dimensión D6 (1,56)."
    },
    {
      id: "c9",
      title: "MOOCs Conecta Empleo",
      platform: "Fundación Telefónica",
      category: "gestion",
      certificate: "Certificado",
      price: "Gratuito",
      logoType: "telefonica",
      url: "https://conectaempleo-formacion.fundaciontelefonica.com",
      description: "Más de 30 MOOCs: gestión ágil de proyectos, emprendimiento digital, finanzas para emprendedores y ciberseguridad.",
      relevance: "CA3, CA4 y CA6 (C3.4, C6.1); apoya D5 y D7 en perfiles directivos y de mandos medios."
    },
    {
      id: "c10",
      title: "Aprendiendo a aprender",
      platform: "Deep Teaching Solutions / Coursera",
      category: "personas",
      certificate: "Certificado opcional",
      price: "Gratuito",
      logoType: "coursera",
      url: "https://www.coursera.org/learn/aprendiendo-a-aprender",
      description: "Herramientas mentales de aprendizaje eficaz: gestión de la procrastinación, memoria y práctica espaciada.",
      relevance: "CA7 (C7.3); sustenta la cultura de aprendizaje continuo y ataca la brecha intención-acción."
    },
    {
      id: "c11",
      title: "La ciencia del bienestar",
      platform: "Universidad de Yale / Coursera",
      category: "personas",
      certificate: "Certificado opcional",
      price: "Gratuito",
      logoType: "yale",
      url: "https://www.coursera.org",
      description: "Hábitos y prácticas de bienestar basadas en evidencia, con retos semanales aplicados.",
      relevance: "CA7 (C7.1); protege el activo humano (D1), la única dimensión con techo objetivo Líder."
    },
    {
      id: "c12",
      title: "Economía circular (introducción; envases y empaques)",
      platform: "TU Delft y LOGYCA / edX",
      category: "sostenibilidad",
      certificate: "Certificado opcional",
      price: "Auditable sin costo",
      logoType: "edx",
      url: "https://www.edx.org",
      description: "Fundamentos de circularidad y aplicación a producto, envase y empaque en contexto latinoamericano.",
      relevance: "CA8 (C8.4); impulsa D3 (1,54) y preparación para las exigencias ESG de cadena de valor."
    },
    {
      id: "c13",
      title: "MOOCs de transformación digital y desarrollo",
      platform: "AcademiaBID",
      category: "innovacion",
      certificate: "Certificado",
      price: "Gratuito",
      logoType: "bid",
      url: "https://cursos.iadb.org/es",
      description: "Cursos para América Latina y el Caribe en transformación digital, sostenibilidad y economía digital.",
      relevance: "CA6 y CA8; complementa el Chequeo Digital del BID ya integrado a esta guía."
    }
  ]
};

//  Componente Estrategias (o importando developmentData.strategies)
export const strategiesData = {
  header: {
    title: "Estrategias generales de desarrollo de competencias",
    description: "Las estrategias generales se sustentan en literatura internacional y regional, y son aplicables a cualquier compañía, con independencia de su sector o tamaño. Siguen el principio de paquetes de competencias (skills bundles) propuesto por la OCDE [4].",
    icon: "lightbulb"
  },
  items: [
    {
      id: "s1",
      title: "Formar primero al decisor y luego distribuir",
      description: "El liderazgo digital es el cuello de botella estructural; la formación comienza por el decisor, pero se distribuye hacia mandos medios y equipos [2], [5].",
      icon: "supervisor_account"
    },
    {
      id: "s2",
      title: "Aprender haciendo sobre el puesto de trabajo",
      description: "Micro-credenciales y formatos cortos vinculados a una tarea real superan a la formación genérica, y reducen la brecha intención-acción en upskilling [3], [4].",
      icon: "work_history"
    },
    {
      id: "s3",
      title: "Paquetes, no competencias aisladas",
      description: "Cada intervención formativa combina una competencia instrumental con una humano-céntrica [4].",
      icon: "widgets"
    },
    {
      id: "s4",
      title: "Canalizar la oferta institucional",
      description: "Antes de crear oferta propia, vincular a las personas a Talento Tech, al SENA y demás ofertas institucionales, y a las organizaciones al CTDE y a la CCOA [6], [14], [15].",
      icon: "account_balance"
    },
    {
      id: "s5",
      title: "Gobernar el cambio",
      description: "Asignar un responsable, un ritmo y derechos de decisión, y anticipar los factores inhibidores [5], [19].",
      icon: "settings_suggest"
    },
    {
      id: "s6",
      title: "Medir con indicadores líderes",
      description: "Definir indicadores que anticipen el avance —no solo resultados tardíos— y revisar el retorno de manera periódica [20], [5].",
      icon: "analytics"
    },
    {
      id: "s7",
      title: "Apalancar la IA como amplificador del aprendizaje",
      description: "Las herramientas de IA generativa pueden actuar como tutor adaptativo y como andamiaje en el puesto de trabajo, reduciendo el costo de la formación a la medida; su adopción formativa exige criterio y supervisión humana [2], [3].",
      icon: "smart_toy"
    }
  ],
  aiAmplification: {
    title: "La IA como amplificador del desarrollo de competencias",
    description: "Las tecnologías de IA, y en particular la IA generativa, no son solo un contenido a aprender: son un vehículo que acelera el desarrollo de las demás competencias.",
    icon: "auto_awesome"
  }
};