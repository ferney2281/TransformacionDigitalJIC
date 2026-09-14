import logoApp from '/LogoFinalVerticalColor.png';

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
    code: "D1",
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
    code: "D2",
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
    code: "D3",
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
    code: "D4",
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
    code: "D5",
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
    code: "D6",
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
    code: "D7",
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
    code: "D8",
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
    code: "D9",
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
    title: "Resultados Diagnóstico y Madurez",
    subtitle: "Informe final general",
    logoSrc: logoApp,
    logoAlt: "Logo del Proyecto 5RI"
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

// Opciones de áreas de la empresa para el Paso 5
export const areasOptions = [
  { id: "tech_software", label: "Tecnología / Software" },
  { id: "fin_services", label: "Servicios financieros / Seguros" },
  { id: "healthcare", label: "Cuidado de salud / Ciencias de la vida" },
  { id: "manufacturing", label: "Fabricación / Manufactura" },
  { id: "retail_ecommerce", label: "Comercio" },
  { id: "consumer_goods", label: "Bienes de consumo" },
  { id: "energy_utilities", label: "Energía / Servicios públicos" },
  { id: "telecom", label: "Telecomunicaciones" },
  { id: "transport_logistics", label: "Transporte / Logística" },
  { id: "prof_services", label: "Servicios profesionales" },
  { id: "education", label: "Educación" },
  { id: "public_sector", label: "Sector público / Gobierno" },
  { id: "construction_infrastructure", label: "Construcción e Infraestructura" },
  { id: "agriculture_agro-industry", label: "Agricultura, ganadería y pesca / Agroindustria" },
  { id: "tourism_gastronomy", label: "Turismo, hotelería y gastronomía" },
  { id: "automotive", label: "Automotriz" },
  { id: "nonprofit_ngo", label: "Organización sin ánimo de lucro / ONG" },
  { id: "otros", label: "Otros" }
];

// Lista de las 9 Dimensiones
export const dimensionsList = [
  { id: "D1", name: "D1 Centrado en el humano - Empleados" },
  { id: "D2", name: "D2 Centrado en el humano - Clientes" },
  { id: "D3", name: "D3 Sostenibilidad" },
  { id: "D4", name: "D4 Resiliencia" },
  { id: "D5", name: "D5 Liderazgo y cultura organizacional" },
  { id: "D6", name: "D6 Tecnologia digital y gestion de datos" },
  { id: "D7", name: "D7 Estrategias y modelos de negocio" },
  { id: "D8", name: "D8 Marketing digital" },
  { id: "D9", name: "D9 Gestion de procesos" }
];

// Matriz de Acciones por Nivel y Dimensión
export const actionsDatabase = {
  "Limitado": [
    { dim: "D1", action: "Iniciar plan de upskilling del equipo con micro-credenciales y formatos cortos aplicados al puesto, con apoyo de programa institucional.", horizon: "H2 - Mediano (12-36 m)", id: "A-08" },
    { dim: "D2", action: "Implementar CRM basico (paquete vertical accesible) con captura sistematica de cliente y trazabilidad de oportunidades.", horizon: "H2 - Mediano (12-36 m)", id: "A-06" },
    { dim: "D3", action: "Integrar criterios minimos de sostenibilidad y reporte ESG basico para acceder a cadenas de proveedores de empresas mayores.", horizon: "H3 - Largo (36+ m)", id: "A-13" },
    { dim: "D4", action: "Implementar ciberhigiene minima: respaldos automatizados, autenticacion multifactor en cuentas criticas y formacion corta contra phishing.", horizon: "H1 - Corto (0-12 m)", id: "A-03" },
    { dim: "D5", action: "Realizar diagnostico inicial de madurez 5RI con el instrumento del proyecto y sensibilizar al decisor sobre el rumbo de la TD sectorial.", horizon: "H1 - Corto (0-12 m)", id: "A-04" },
    { dim: "D5", action: "Realizar sesiones cortas de alfabetizacion digital del decisor con casos sectoriales aplicados (no formacion general).", horizon: "H1 - Corto (0-12 m)", id: "A-05" },
    { dim: "D5", action: "Designar un responsable (sponsor) de la transformacion digital con autoridad de decision y una cadencia fija de revision del avance.", horizon: "H1 - Corto (0-12 m)", id: "A-55" },
    { dim: "D5", action: "Articular acompanamiento tecnico continuo con CCOA, CTDE o iNNpulsa mediante un instrumento concreto (no participacion aislada en eventos).", horizon: "H2 - Mediano (12-36 m)", id: "A-09" },
    { dim: "D5", action: "Migrar al nivel Transicion con diagnostico anual repetido y plan de ruta personalizado documentado.", horizon: "H3 - Largo (36+ m)", id: "A-11" },
    { dim: "D5", action: "Identificar la oportunidad de sucesion generacional o liderazgo digital interno como motor del siguiente salto de madurez.", horizon: "H3 - Largo (36+ m)", id: "A-14" },
    { dim: "D6", action: "Adoptar paquete de productividad en la nube (correo profesional, almacenamiento, ofimatica colaborativa) y reemplazar archivos en disco local.", horizon: "H1 - Corto (0-12 m)", id: "A-02" },
    { dim: "D6", action: "Definir indicadores lideres del viaje de cambio (direccion, ritmo, recursos, motivacion) y KPIs por proceso, con revision periodica del retorno (ROI).", horizon: "H1 - Corto (0-12 m)", id: "A-57" },
    { dim: "D6", action: "Iniciar captura basica de datos de operacion y de clientes para construir la linea base que habilitara analitica posterior.", horizon: "H2 - Mediano (12-36 m)", id: "A-10" },
    { dim: "D7", action: "Definir una propuesta de valor diferencial sectorial: transitar de 'comerciante general' a especialista en un nicho.", horizon: "H3 - Largo (36+ m)", id: "A-12" },
    { dim: "D8", action: "Establecer presencia digital basica: sitio web simple o perfiles activos en redes pertinentes + WhatsApp Business con catalogo y respuestas rapidas.", horizon: "H1 - Corto (0-12 m)", id: "A-01" },
    { dim: "D9", action: "Formalizar dos procesos criticos en herramientas digitales: facturacion electronica obligatoria y control de inventarios o servicio al cliente segun giro.", horizon: "H2 - Mediano (12-36 m)", id: "A-07" }
  ],
  "Transición": [
    { dim: "D1", action: "Medir bienestar laboral con instrumento breve y redisenar rituales de reunion y notificacion para reducir carga cognitiva.", horizon: "H1 - Corto (0-12 m)", id: "A-18" },
    { dim: "D1", action: "Establecer plan formal de upskilling con presupuesto dedicado y vinculacion explicita al desempeno individual y de equipo.", horizon: "H2 - Mediano (12-36 m)", id: "A-22" },
    { dim: "D2", action: "Adoptar marco de gobernanza de datos personales con cumplimiento de la Ley 1581/2012 y politica de privacidad visible al cliente.", horizon: "H2 - Mediano (12-36 m)", id: "A-21" },
    { dim: "D3", action: "Mapear cadena de proveedores y clientes mayores para detectar exigencias ESG entrantes y anticipar requisitos contractuales.", horizon: "H1 - Corto (0-12 m)", id: "A-19" },
    { dim: "D3", action: "Desarrollar competencias de sostenibilidad de la empresa: valoracion de la sostenibilidad, pensamiento sistemico y economia circular, mas alla del reporte ESG.", horizon: "H2 - Mediano (12-36 m)", id: "A-60" },
    { dim: "D3", action: "Reportar indicadores ESG verificables a clientes corporativos y financiadores como activo de negociacion, no como carga.", horizon: "H3 - Largo (36+ m)", id: "A-27" },
    { dim: "D4", action: "Implementar protocolos de ciberseguridad alineados con ENISA 12 pasos: politica de contrasenas, gestion de accesos y plan minimo de respuesta a incidentes.", horizon: "H1 - Corto (0-12 m)", id: "A-17" },
    { dim: "D4", action: "Disenar plan de continuidad operativa formal con simulacro anual de incidente cibernetico y de interrupcion operacional.", horizon: "H2 - Mediano (12-36 m)", id: "A-23" },
    { dim: "D5", action: "Mapear y mitigar los factores inhibidores: resistencia al cambio, falta de recursos, de habilidades, de planificacion y de cultura digital.", horizon: "H1 - Corto (0-12 m)", id: "A-58" },
    { dim: "D5", action: "Establecer derechos de decision explicitos y, en empresas medianas y grandes, un comite que separe la gobernanza de la transformacion de la operacion diaria.", horizon: "H2 - Mediano (12-36 m)", id: "A-56" },
    { dim: "D5", action: "Articular el liderazgo digital del sucesor o del segundo nivel gerencial con protocolo de gobierno familiar si aplica.", horizon: "H3 - Largo (36+ m)", id: "A-26" },
    { dim: "D6", action: "Pilotar uso aplicado de IA generativa en un proceso repetitivo concreto (atencion N1, redaccion comercial o gestion documental) con metrica de impacto.", horizon: "H1 - Corto (0-12 m)", id: "A-16" },
    { dim: "D6", action: "Integrar CRM con el sistema operativo (ventas, facturacion, inventarios) y eliminar el Excel paralelo como fuente de verdad.", horizon: "H2 - Mediano (12-36 m)", id: "A-20" },
    { dim: "D6", action: "Avanzar al nivel Avanzado con capacidades de analitica descriptiva instaladas en al menos dos areas (ventas y operaciones).", horizon: "H3 - Largo (36+ m)", id: "A-25" },
    { dim: "D7", action: "Pilotar la incorporacion de un componente recurrente al modelo de negocio (suscripcion, mantenimiento programado, servicio asociado) en un segmento.", horizon: "H2 - Mediano (12-36 m)", id: "A-24" },
    { dim: "D7", action: "Posicionar la empresa en una mesa sectorial regional o en una cadena de valor articulada, con rol visible.", horizon: "H3 - Largo (36+ m)", id: "A-28" },
    { dim: "D8", action: "Profundizar marketing digital con CRM activo: segmentacion, automatizacion basica de comunicaciones, metricas de conversion y campanas iterativas.", horizon: "H1 - Corto (0-12 m)", id: "A-15" },
    { dim: "D9", action: "Antes de cada piloto, seleccionar casos de uso de alto impacto y baja complejidad y ejecutarlo con un equipo fusion (negocio y tecnico) en 9-12 meses.", horizon: "H1 - Corto (0-12 m)", id: "A-59" }
  ],
  "Avanzado": [
    { dim: "D1", action: "Establecer programa estructurado de bienestar con indicadores en el sistema de gestion (rotacion, eNPS, carga cognitiva).", horizon: "H1 - Corto (0-12 m)", id: "A-32" },
    { dim: "D3", action: "Operar un sistema integrado de gestion sostenibilidad-digital con reporteria ESG automatizada para clientes y financiadores.", horizon: "H2 - Mediano (12-36 m)", id: "A-36" },
    { dim: "D3", action: "Internacionalizar con cumplimiento ESG estandar y trazabilidad digital de cadena exigible por compradores europeos o norteamericanos.", horizon: "H3 - Largo (36+ m)", id: "A-41" },
    { dim: "D4", action: "Realizar auditoria externa de ciberseguridad y ejecutar plan de remediacion priorizado con responsables y plazos.", horizon: "H1 - Corto (0-12 m)", id: "A-33" },
    { dim: "D5", action: "Ejecutar la sucesion organizacional con plan formal de relevo y plan de desarrollo del equipo gerencial documentado.", horizon: "H2 - Mediano (12-36 m)", id: "A-37" },
    { dim: "D5", action: "Generar conocimiento aplicado en alianza con universidades regionales (PCJIC, U. de A. Seccional Oriente) y centros sectoriales.", horizon: "H3 - Largo (36+ m)", id: "A-42" },
    { dim: "D6", action: "Integrar IA en flujos centrales (ventas, atencion al cliente, gestion documental) con metricas de impacto medibles y comparables.", horizon: "H1 - Corto (0-12 m)", id: "A-30" },
    { dim: "D6", action: "Pilotar un agente de IA verticalizado en un caso de uso sectorial especifico (atencion con razonamiento, no IA conversacional generica).", horizon: "H2 - Mediano (12-36 m)", id: "A-38" },
    { dim: "D7", action: "Implementar componente de servicializacion digital sectorial (suscripcion, monitoreo remoto, servicio basado en datos del producto) en una linea.", horizon: "H2 - Mediano (12-36 m)", id: "A-34" },
    { dim: "D7", action: "Avanzar al nivel Lider con propuesta de valor diferenciada y reconocida en el sector regional o nacional.", horizon: "H3 - Largo (36+ m)", id: "A-39" },
    { dim: "D7", action: "Articular plataforma sectorial o ecosistema multi-actor con rol activo (orquestador o nodo critico, no solo participante).", horizon: "H3 - Largo (36+ m)", id: "A-40" },
    { dim: "D8", action: "Implementar personalizacion avanzada del marketing con consentimiento explicito documentado y metricas de confianza del cliente.", horizon: "H1 - Corto (0-12 m)", id: "A-31" },
    { dim: "D9", action: "Optimizar procesos criticos con analitica descriptiva y dashboards operativos en tiempo real, con responsables asignados a cada KPI.", horizon: "H1 - Corto (0-12 m)", id: "A-29" },
    { dim: "D9", action: "Adoptar automatizacion inteligente (RPA + GenAI) en procesos repetitivos de back office, con cuantificacion del tiempo liberado.", horizon: "H2 - Mediano (12-36 m)", id: "A-35" }
  ],
  "Líder": [
    { dim: "D1", action: "Liderar la transicion a 5RI plena con resultados auditables en los tres pilares (humano-centrico, sostenible, resiliente) reportados anualmente.", horizon: "H3 - Largo (36+ m)", id: "A-53" },
    { dim: "D2", action: "Consolidar la gobernanza etica del dato y del uso de IA con politicas internas formales y transparencia externa hacia clientes.", horizon: "H1 - Corto (0-12 m)", id: "A-46" },
    { dim: "D3", action: "Certificar practicas en estandares sectoriales o internacionales pertinentes (calidad, sostenibilidad, seguridad de la informacion).", horizon: "H1 - Corto (0-12 m)", id: "A-43" },
    { dim: "D3", action: "Articular una cadena de valor sostenible con metricas verificables y acceso a financiacion verde indexada a desempeno.", horizon: "H2 - Mediano (12-36 m)", id: "A-50" },
    { dim: "D5", action: "Documentar y publicar casos de uso aplicados como referente sectorial: papers conjuntos, casos en CCOA, ponencias en eventos regionales.", horizon: "H1 - Corto (0-12 m)", id: "A-44" },
    { dim: "D5", action: "Mentorar mipymes de la cadena propia con programa formal (proveedores, distribuidores, clientes pequenos) como vehiculo de twin transition de cadena.", horizon: "H1 - Corto (0-12 m)", id: "A-45" },
    { dim: "D5", action: "Liderar una mesa sectorial, cluster o nodo de ecosistema (camara, gremio, universidad) con agenda y metricas verificables.", horizon: "H2 - Mediano (12-36 m)", id: "A-47" },
    { dim: "D6", action: "Implementar IA agentica en decisiones operativas de impacto medible: agentes con autonomia limitada y supervision humana.", horizon: "H3 - Largo (36+ m)", id: "A-51" },
    { dim: "D7", action: "Codisenar instrumentos institucionales (Bancoldex, CCOA, iNNpulsa) con la experiencia operativa propia para mejorar el diseno de politica publica.", horizon: "H2 - Mediano (12-36 m)", id: "A-48" },
    { dim: "D7", action: "Industrializar la servicializacion con portafolio diversificado de servicios recurrentes basados en datos y resultados garantizados.", horizon: "H2 - Mediano (12-36 m)", id: "A-49" },
    { dim: "D7", action: "Operar un modelo de negocio plataforma con ecosistema de terceros (proveedores, complementadores, clientes B2B) y captura de valor multilateral.", horizon: "H3 - Largo (36+ m)", id: "A-52" },
    { dim: "D7", action: "Generar propiedad intelectual y conocimiento aplicado replicable (patentes, publicaciones indexadas, casos de referencia internacional).", horizon: "H3 - Largo (36+ m)", id: "A-54" }
  ]
};

// Metadatos de Metas para Paso 3
export const metaDataMap = {
  "Vender mas y clientes": { label: "Vender más y relacionarse mejor con clientes", tools: "13 y 4" },
  "Operar mejor": { label: "Operar mejor (eficiencia)", tools: "14 y 15" },
  "Cuidar y cumplir": { label: "Cuidar y cumplir (riesgo y normativa)", tools: "7, 8 y 9" },
  "Avanzar a la 5RI": { label: "Avanzar hacia la 5RI (humana, sostenible, resiliente)", tools: "16, 10, 3 y 11" }
};

// Metadatos de títulos y labels para la sección de Modelos/Tecnología según la Meta
export const reportGoalSectionData = {
  sectionTitle: "Modelos de negocio y tecnología según la meta",
  modelsTitle: "Modelos de negocio sugeridos",
  techTitle: "Tecnologías clave para la meta"
};

// Metadatos de títulos y labels para la sección de Modelos/Tecnología según el Nivel de Madurez
export const reportMaturitySectionData = {
  sectionTitle: "Modelos de negocio y tecnología según nivel de madurez",
  modelsTitle: "Modelos de negocio aplicables",
  techTitle: "Tecnologías asociadas al nivel"
};

// Catálogo maestro
export const masterBusinessModels = {
  MN1: "MN1 - Servitización digital / PSS",
  MN2: "MN2 - Plataforma mediada / ecosistema",
  MN3: "MN3 - Circular / regenerativo",
  MN4: "MN4 - Omnicanal / CRM-céntrico",
  MN5: "MN5 - Suscripción / ingresos recurrentes",
  MN6: "MN6 - Data-driven / hiperpersonalización responsable"
};

export const masterTechnologies = {
  TE1: "TE1 - IA generativa y agéntica",
  TE2: "TE2 - Cloud y arquitecturas híbridas",
  TE3: "TE3 - CRM y marketing digital",
  TE4: "TE4 - Automatización inteligente (RPA/BPA)",
  TE5: "TE5 - Gemelos digitales y simulación",
  TE6: "TE6 - Analítica de datos y gobierno del dato",
  TE7: "TE7 - Physical AI: cobots y wearables"
};

// Matriz según Nivel de Madurez (Hoja 'Nivel')
export const modelsAndTechByMaturity = {
  "Limitado": {
    intent: "Proteger y ordenar la base",
    starterTools: "H7 - H8 - H15 - H13 - H4",
    models: [
      "MN4 - Omnicanal / CRM-céntrico (presencia/omnicanal básico)"
    ],
    technologies: [
      "TE2 - Cloud y arquitecturas híbridas (respaldo/cloud)",
      "TE3 - CRM y marketing digital (CRM básico)"
    ]
  },
  "Transición": {
    intent: "Priorizar y avanzar",
    starterTools: "H5 - H6 - H13 - H14 - H11",
    models: [
      "MN4 - Omnicanal / CRM-céntrico",
      "MN1 - Servitización digital / PSS (servitización inicial)",
      "MN5 - Suscripción / ingresos recurrentes"
    ],
    technologies: [
      "TE3 - CRM y marketing digital",
      "TE6 - Analítica de datos y gobierno del dato (analítica)",
      "TE4 - Automatización inteligente (RPA/BPA)"
    ]
  },
  "En transición": {
    intent: "Priorizar y avanzar",
    starterTools: "H5 - H6 - H13 - H14 - H11",
    models: [
      "MN4 - Omnicanal / CRM-céntrico",
      "MN1 - Servitización digital / PSS (servitización inicial)",
      "MN5 - Suscripción / ingresos recurrentes"
    ],
    technologies: [
      "TE3 - CRM y marketing digital",
      "TE6 - Analítica de datos y gobierno del dato (analítica)",
      "TE4 - Automatización inteligente (RPA/BPA)"
    ]
  },
  "Avanzado": {
    intent: "Optimizar y profundizar",
    starterTools: "H9 - H10 - H16 - H12 - H14",
    models: [
      "MN3 - Circular / regenerativo",
      "MN6 - Data-driven / hiperpersonalización responsable",
      "MN1 - Servitización digital / PSS (PSS pleno)"
    ],
    technologies: [
      "TE6 - Analítica de datos y gobierno del dato",
      "TE1 - IA generativa y agéntica",
      "TE4 - Automatización inteligente (RPA/BPA)"
    ]
  },
  "Líder": {
    intent: "Liderar e integrar",
    starterTools: "H3 - H10 - H17 + rol tractor",
    models: [
      "MN2 - Plataforma mediada / ecosistema (plataforma tractora)",
      "MN3 - Circular / regenerativo"
    ],
    technologies: [
      "TE5 - Gemelos digitales y simulación",
      "TE7 - Physical AI: cobots y wearables",
      "TE1 - IA generativa y agéntica"
    ]
  }
};

// Matriz DIRECTA según la Meta Seleccionada (Hoja 'Meta' del Excel - Independiente del Nivel)
export const businessModelsAndTechByGoal = {
  "Vender mas y clientes": {
    models: [
      "MN4 - Omnicanal / CRM-céntrico",
      "MN6 - Data-driven / hiperpersonalización responsable"
    ],
    technologies: [
      "TE3 - CRM y marketing digital",
      "TE1 - IA generativa y agéntica"
    ]
  },

  "Operar mejor": {
    models: [
      "MN1 - Servitización digital / PSS",
      "MN5 - Suscripción / ingresos recurrentes"
    ],
    technologies: [
      "TE4 - Automatización inteligente (RPA/BPA)",
      "TE6 - Analítica de datos y gobierno del dato"
    ]
  },

  "Cuidar y cumplir": {
    models: [
      "MN6 - Data-driven / hiperpersonalización responsable",
    ],
    technologies: [
      "TE2 - Cloud y arquitecturas híbridas",
      "TE6 - Analítica de datos y gobierno del dato"
    ]
  },

  "Avanzar a la 5RI": {
    models: [
      "MN1 - Servitización digital / PSS",
      "MN3 - Circular / regenerativo",
      "MN2 - Plataforma mediada / ecosistema"
    ],
    technologies: [
      "TE7 - Physical AI: cobots y wearables",
      "TE5 - Gemelos digitales y simulación",
      "TE6 - Analítica de datos y gobierno del dato"
    ]
  }
};

// Aliases para soportar variantes con texto largo
businessModelsAndTechByGoal["Vender más y relacionarse mejor con clientes"] = businessModelsAndTechByGoal["Vender mas y clientes"];
businessModelsAndTechByGoal["Operar mejor (eficiencia)"] = businessModelsAndTechByGoal["Operar mejor"];
businessModelsAndTechByGoal["Cuidar y cumplir (riesgo y normativa)"] = businessModelsAndTechByGoal["Cuidar y cumplir"];
businessModelsAndTechByGoal["Avanzar hacia la 5RI (humana, sostenible, resiliente)"] = businessModelsAndTechByGoal["Avanzar a la 5RI"];