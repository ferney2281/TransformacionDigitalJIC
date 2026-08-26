export const getThermometerLevel = (score) => {
  if (score <= 8) {
    return {
      level: "Apenas empezando",
      recommendation: "Empiece por las herramientas 4, 5 y 7.",
      colorClass: "level-low"
    };
  } else if (score <= 16) {
    return {
      level: "En marcha",
      recommendation: "Refuerce las herramientas 2, 6 y 8.",
      colorClass: "level-mid"
    };
  } else {
    return {
      level: "Avanzando",
      recommendation: "Pase a las herramientas 9, 10 y 11.",
      colorClass: "level-high"
    };
  }
};

// Función helper para calcular el nivel por dimensión y general (0 a 4)
export const getDimensionLevel = (score) => {
  if (score === null || score === undefined) return "";
  if (score <= 1) return "Limitado";
  if (score <= 2) return "En transición";
  if (score <= 3) return "Avanzado";
  return "Líder";
};

// Opciones disponibles para el Paso 3: Mi Meta
export const miMetaOptions = [
  "Vender mas y clientes",
  "Operar mejor",
  "Cuidar y cumplir",
  "Avanzar a la 5RI"
];

// Estructura completa de preguntas y metas por dimensión para el Paso 2
export const step2DimensionsData = [
  {
    id: 1,
    name: "Personas y bienestar (empleados)",
    targetRef: 3.06,
    questions: [
      { id: "1.1", text: "Mi equipo recibe formación digital aplicada a su trabajo de forma periódica." },
      { id: "1.2", text: "Medimos el bienestar y la carga de trabajo de las personas." },
      { id: "1.3", text: "Las personas participan en las decisiones sobre nuevas herramientas tecnológicas." }
    ]
  },
  {
    id: 2,
    name: "Clientes",
    targetRef: 2.83,
    questions: [
      { id: "2.1", text: "Conozco y registro de forma sistemática a mis clientes." },
      { id: "2.2", text: "Atiendo a los clientes por canales digitales." },
      { id: "2.3", text: "Uso la información del cliente para mejorar mi oferta." }
    ]
  },
  {
    id: 3,
    name: "Sostenibilidad",
    targetRef: 2.89,
    questions: [
      { id: "3.1", text: "Tengo prácticas para reducir consumo de energía, agua o residuos." },
      { id: "3.2", text: "Puedo responder solicitudes básicas de información ambiental o social de clientes/proveedores." },
      { id: "3.3", text: "La sostenibilidad se considera en mis decisiones de negocio." }
    ]
  },
  {
    id: 4,
    name: "Resiliencia",
    targetRef: 2.66,
    questions: [
      { id: "4.1", text: "Hago copias de seguridad de la información crítica." },
      { id: "4.2", text: "Tengo un plan para seguir operando ante una falla o incidente." },
      { id: "4.3", text: "Identifico los riesgos principales de mi negocio." }
    ]
  },
  {
    id: 5,
    name: "Liderazgo y cultura",
    targetRef: 2.97,
    questions: [
      { id: "5.1", text: "La dirección tiene una visión clara de la transformación digital." },
      { id: "5.2", text: "Se promueve una cultura de probar y aprender, sin castigar el error." },
      { id: "5.3", text: "Hay alguien responsable de liderar el cambio digital." }
    ]
  },
  {
    id: 6,
    name: "Tecnología y datos",
    targetRef: 2.8,
    questions: [
      { id: "6.1", text: "Tengo la información del negocio organizada y accesible." },
      { id: "6.2", text: "Uso herramientas en la nube para trabajar y guardar archivos." },
      { id: "6.3", text: "Tomo decisiones apoyado en datos." }
    ]
  },
  {
    id: 7,
    name: "Estrategia y modelo de negocio",
    targetRef: 2.97,
    questions: [
      { id: "7.1", text: "Tengo claro cómo lo digital cambia mi forma de generar ingresos." },
      { id: "7.2", text: "He explorado nuevos servicios o canales digitales." },
      { id: "7.3", text: "Mi estrategia digital está escrita y se revisa." }
    ]
  },
  {
    id: 8,
    name: "Marketing digital",
    targetRef: 2.8,
    questions: [
      { id: "8.1", text: "Tengo presencia digital activa y actualizada." },
      { id: "8.2", text: "Realizo acciones de marketing digital con seguimiento." },
      { id: "8.3", text: "Mido los resultados de mis acciones comerciales digitales." }
    ]
  },
  {
    id: 9,
    name: "Procesos",
    targetRef: 2.8,
    questions: [
      { id: "9.1", text: "Mis procesos clave están documentados." },
      { id: "9.2", text: "He automatizado tareas repetitivas." },
      { id: "9.3", text: "Mido el desempeño de mis procesos." }
    ]
  }
];

export const questionnaireSteps = [
  {
    id: 1,
    code: "Herramienta 1",
    title: "Termómetro digital",
    subtitle: "Chequeo de 10 minutos",
    description: "Responda cada frase: 0 = no / 1 = a medias / 2 = sí.",
    maxScore: 24,
    questions: [
      { id: 1, text: "Tengo presencia digital (página o redes) y está actualizada.", hint: "Herr. 4 y 5" },
      { id: 2, text: "Registro a mis clientes en algún sistema (no solo en memoria o papel).", hint: "Herr. 5" },
      { id: 3, text: "Atiendo a mis clientes por canales digitales (WhatsApp, redes, web).", hint: "Herr. 5" },
      { id: 4, text: "Hago copias de seguridad de la información importante del negocio.", hint: "Herr. 7" },
      { id: 5, text: "Uso contraseñas seguras y doble verificación donde es posible.", hint: "Herr. 7" },
      { id: 6, text: "Guardo los archivos del negocio en la nube.", hint: "Herr. 6" },
      { id: 7, text: "Tengo la información del negocio organizada y a la mano.", hint: "Herr. 2" },
      { id: 8, text: "Uso herramientas digitales para tareas que antes hacía a mano.", hint: "Herr. 6" },
      { id: 9, text: "Quien dirige la empresa tiene clara la importancia de lo digital.", hint: "Herr. 11" },
      { id: 10, text: "Mi equipo sabe usar las herramientas digitales que necesitamos.", hint: "Herr. 2" },
      { id: 11, text: "Pido autorización a los clientes para usar sus datos.", hint: "Herr. 8" },
      { id: 12, text: "Reviso los resultados de mis acciones digitales con algún indicador.", hint: "Herr. 12" }
    ]
  },
  {
    id: 2,
    code: "Herramienta 2",
    title: "Autodiagnóstico de madurez",
    subtitle: "Las 9 dimensiones",
    description: "Califique cada frase: 0 Totalmente en desacuerdo · 0,5 En desacuerdo · 1 Ni de acuerdo ni en desacuerdo · 1,5 De acuerdo · 2 Totalmente de acuerdo."
  },
  {
    id: 3,
    code: "Paso 3",
    title: "Mi Meta",
    subtitle: "Selección de objetivo"
  },
  {
    id: 4,
    code: "Herramienta 3",
    title: "Termómetro de los 3 pilares de la Industria 5.0",
    subtitle: "Profundización",
    description: "Mide si su transformación es humana, sostenible y resiliente —no solo tecnológica—. 0 = no / 1 = a medias / 2 = sí. Base: criterios del Premio Industry 5.0 de la Comisión Europea."
  },
  {
    id: 5,
    code: "Paso 5",
    title: "Informe de resultados",
    subtitle: "Diagnóstico final"
  }
];

// Estructura de preguntas y pilares para la Herramienta 3 (Paso 4)
export const step4PillarsData = [
  {
    id: 1,
    name: "Pilar 1. Centrada en las personas (humana)",
    maxScore: 6,
    questions: [
      { id: "1.1", text: "Las decisiones digitales consideran el bienestar de las personas." },
      { id: "1.2", text: "La tecnología apoya a las personas, no las reemplaza sin criterio." },
      { id: "1.3", text: "Las personas se forman para trabajar con nuevas herramientas." }
    ]
  },
  {
    id: 2,
    name: "Pilar 2. Sostenible",
    maxScore: 6,
    questions: [
      { id: "2.1", text: "Medimos o reducimos nuestro impacto ambiental." },
      { id: "2.2", text: "Consideramos criterios sociales y ambientales en compras y operación." },
      { id: "2.3", text: "Vemos la sostenibilidad como una oportunidad de negocio." }
    ]
  },
  {
    id: 3,
    name: "Pilar 3. Resiliente",
    maxScore: 6,
    questions: [
      { id: "3.1", text: "Estamos protegidos ante incidentes digitales (respaldos, seguridad)." },
      { id: "3.2", text: "Podemos adaptarnos rápido a cambios del entorno." },
      { id: "3.3", text: "Tenemos planes para seguir operando ante imprevistos." }
    ]
  },
  {
    id: 4,
    name: "Integración (lo que distingue a la Industria 5.0)",
    maxScore: 2,
    questions: [
      { id: "4.1", text: "Los tres pilares se consideran juntos en nuestras decisiones, no por separado." }
    ]
  }
];