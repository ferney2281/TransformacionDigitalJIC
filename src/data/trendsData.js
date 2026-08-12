// src/data/trendsData.js
export const trendsData = {
  title: "Tendencias",
  subtitle: "Conoce las tendencias que están transformando el mundo.",
  trends: [
    // ---------------------------------------------------------
    // EJE A — PARADIGMAS: TD Y LA QUINTA REVOLUCIÓN INDUSTRIAL
    // ---------------------------------------------------------
    {
      id: 1,
      eje: "EJE A",
      tag: "Paradigmas",
      title: "La Quinta Revolución Industrial (5RI)",
      description: "Paradigma rector que integra los pilares humano-céntrico, sostenible y resiliente como criterios simultáneos de diseño productivo.",
      typeLabel: "Marco rector",
      typeSubtext: "Impacto estructural",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/factory.svg",
      actionRoute: "/trends/quinta-revolucion"
    },
    {
      id: 2,
      eje: "EJE A",
      tag: "Paradigmas",
      title: "Tecnología como Complemento Humano",
      description: "Principio rector donde las tecnologías avanzadas potencian y amplifican las capacidades del talento en lugar de sustituirlo.",
      typeLabel: "Principio 5RI",
      typeSubtext: "Enfoque colaborativo",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/groups.svg",
      actionRoute: "/trends/tecnologia-complemento-humano"
    },
    {
      id: 3,
      eje: "EJE A",
      tag: "Paradigmas",
      title: "Transformación Digital Gestionada",
      description: "La digitalización como un proceso estratégico por etapas de madurez que sirve como sustrato técnico para los propósitos de la 5RI.",
      typeLabel: "Proceso estratégico",
      typeSubtext: "Evolución continua",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/autorenew.svg",
      actionRoute: "/trends/transformacion-digital-paradigma"
    },

    // ---------------------------------------------------------
    // EJE B — FACTOR HUMANO: EL CUELLO DE BOTELLA REAL
    // ---------------------------------------------------------
    {
      id: 4,
      eje: "EJE B",
      tag: "Liderazgo",
      title: "Liderazgo Digital: El Cuello de Botella",
      description: "Las mipymes fracasan en su transformación principalmente por déficits de visión y liderazgo del decisor, no por falta de tecnología.",
      typeLabel: "Factor crítico",
      typeSubtext: "Alta prioridad",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/area_chart.svg",
      actionRoute: "/trends/liderazgo-digital-cuello-botella"
    },
    {
      id: 5,
      eje: "EJE B",
      tag: "Talento",
      title: "Brecha Intención-Acción en Upskilling",
      description: "Existe un reconocimiento generalizado sobre la importancia de formar al talento, pero la inversión real en reskilling sigue siendo muy escasa.",
      typeLabel: "Brecha de talento",
      typeSubtext: "Desafío operativo",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/campaign.svg",
      actionRoute: "/trends/brecha-intencion-accion-upskilling"
    },
    {
      id: 6,
      eje: "EJE B",
      tag: "Bienestar",
      title: "Bienestar y Ergonomía Cognitiva",
      description: "El control de la carga mental y la fatiga digital evolucionan de ser una buena práctica a convertirse en un factor de competitividad y retención.",
      typeLabel: "Enfoque 5RI",
      typeSubtext: "Factor humano",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/group.svg",
      actionRoute: "/trends/bienestar-ergonomia-cognitiva"
    },
    {
      id: 7,
      eje: "EJE B",
      tag: "Estructura",
      title: "Sucesión Generacional en Mipymes",
      description: "El relevo generacional en empresas familiares actúa como un potente catalizador de transformación digital o como un punto de alta vulnerabilidad.",
      typeLabel: "Empresa familiar",
      typeSubtext: "Oportunidad de relevo",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/change_circle.svg",
      actionRoute: "/trends/sucesion-generacional-mipymes"
    },

    // ---------------------------------------------------------
    // EJE C — MODELOS DE NEGOCIO EN TRANSFORMACIÓN
    // ---------------------------------------------------------
    {
      id: 8,
      eje: "EJE C",
      tag: "Modelos",
      title: "Servicialización Digital",
      description: "Transición desde la venta de productos individuales hacia la oferta de servicios continuos basados en datos, suscripción y monitoreo.",
      typeLabel: "Ventaja competitiva",
      typeSubtext: "Ingresos recurrentes",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/psychology.svg",
      actionRoute: "/trends/servicializacion-digital-pymes"
    },
    {
      id: 9,
      eje: "EJE C",
      tag: "Ecosistemas",
      title: "Plataformas y Ecosistemas Multi-Actor",
      description: "Modelo orquestado por instituciones locales para acelerar la transformación digital en territorios sin ecosistemas de innovación desarrollados.",
      typeLabel: "Modelo LATAM",
      typeSubtext: "Articulación territorial",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/privacy_tip.svg",
      actionRoute: "/trends/plataformas-ecosistemas-latam"
    },

    // ---------------------------------------------------------
    // EJE D — RECTORES TRANSVERSALES
    // ---------------------------------------------------------
    {
      id: 10,
      eje: "EJE D",
      tag: "Sostenibilidad",
      title: "Doble Transición Verde y Digital",
      description: "La digitalización y la sostenibilidad como exigencias simultáneas impulsadas por cadenas globales de valor y normativas ESG.",
      typeLabel: "Acceso a mercados",
      typeSubtext: "Requisito de cadena",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/nature_people.svg",
      actionRoute: "/trends/doble-transicion-verde-digital"
    },
    {
      id: 11,
      eje: "EJE D",
      tag: "Sostenibilidad",
      title: "Sostenibilidad Productiva Triple",
      description: "Criterio de diseño que integra el desempeño económico, la equidad social y el respeto ambiental como un solo frente operativo.",
      typeLabel: "Triple impacto",
      typeSubtext: "Criterio de diseño",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/recycling.svg",
      actionRoute: "/trends/sostenibilidad-productiva-triple-impacto"
    },
    {
      id: 12,
      eje: "EJE D",
      tag: "Sostenibilidad",
      title: "Economía Circular y Regenerativa",
      description: "Modelos productivos orientados a cerrar ciclos de materiales y energía mediante trazabilidad digital y reúso eficiente.",
      typeLabel: "Modelos circulares",
      typeSubtext: "Ahorro y eficiencia",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/eco.svg",
      actionRoute: "/trends/economia-circular-modelos-regenerativos"
    },
    {
      id: 13,
      eje: "EJE D",
      tag: "Ciberseguridad",
      title: "Vulnerabilidad Cibernética de Pymes",
      description: "La exposición a ciberataques como un riesgo existencial que exige ciberhigiene básica desde la primera etapa digital.",
      typeLabel: "Riesgo operativo",
      typeSubtext: "Protección crítica",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/shield_with_house.svg",
      actionRoute: "/trends/vulnerabilidad-cibernetica-pymes"
    },
    {
      id: 14,
      eje: "EJE D",
      tag: "Marketing",
      title: "Hiperpersonalización vs. Privacidad",
      description: "El reto comercial de ofrecer experiencias altamente personalizadas respetando la privacidad y el consentimiento sobre los datos.",
      typeLabel: "Confianza digital",
      typeSubtext: "Diferencial comercial",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/person_search.svg",
      actionRoute: "/trends/hiperpersonalizacion-vs-privacidad"
    },
    {
      id: 15,
      eje: "EJE D",
      tag: "Resiliencia",
      title: "Resiliencia Operativa y Mantenimiento",
      description: "Capacidad de anticipar y recuperarse de disrupciones operativas mediante monitoreo predictivo y visibilidad digital de la cadena.",
      typeLabel: "Continuidad",
      typeSubtext: "Base de resiliencia",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/health_and_safety.svg",
      actionRoute: "/trends/resiliencia-mantenimiento-predictivo"
    },

    // ---------------------------------------------------------
    // EJE E — CONTEXTO LATAM Y COLOMBIA
    // ---------------------------------------------------------
    {
      id: 16,
      eje: "EJE E",
      tag: "Contexto",
      title: "Asimetría Estructural en LATAM",
      description: "Coexistencia entre sectores de frontera 5RI y un amplio tejido mipyme rezagado en herramientas digitales básicas.",
      typeLabel: "Realidad regional",
      typeSubtext: "Brecha estructural",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/lightbulb.svg",
      actionRoute: "/trends/asimetria-estructural-latam"
    },
    {
      id: 17,
      eje: "EJE E",
      tag: "Contexto",
      title: "Madurez Digital Mipyme Colombia",
      description: "Caracterización del tejido nacional: adopción moderada de herramientas básicas y baja penetración de tecnologías avanzadas.",
      typeLabel: "Diagnóstico nacional",
      typeSubtext: "Punto de partida",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/smart_toy.svg",
      actionRoute: "/trends/madurez-digital-mipyme-colombia"
    },
    {
      id: 18,
      eje: "EJE E",
      tag: "Contexto",
      title: "Red Institucional Habilitadora",
      description: "Arquitectura institucional (CONPES 4144, Bancóldex, CTDE, iNNpulsa) como infraestructura blanda para el acompañamiento empresarial.",
      typeLabel: "Soporte público",
      typeSubtext: "Articulación de oferta",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/home_work.svg",
      actionRoute: "/trends/red-institucional-colombia"
    },

    // ---------------------------------------------------------
    // EJE F — TECNOLOGÍAS HABILITADORAS (TRANSVERSAL)
    // ---------------------------------------------------------
    {
      id: 19,
      eje: "EJE F",
      tag: "Tecnología",
      title: "IA Generativa y Agéntica",
      description: "Evolución desde el uso superficial de la IA hacia la integración de agentes autónomos en procesos operativos centrales.",
      typeLabel: "Acelerador digital",
      typeSubtext: "Casos de uso reales",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/psychology.svg",
      actionRoute: "/trends/ia-generativa-agentica"
    },
    {
      id: 20,
      eje: "EJE F",
      tag: "Tecnología",
      title: "Cloud y Arquitecturas Híbridas",
      description: "Transición obligatoria de sistemas locales a infraestructuras en la nube como precondición técnica de cualquier avance digital.",
      typeLabel: "Infraestructura base",
      typeSubtext: "Precondición técnica",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/foggy.svg",
      actionRoute: "/trends/cloud-arquitecturas-hibridas"
    },
    {
      id: 21,
      eje: "EJE F",
      tag: "Tecnología",
      title: "Marketing Digital Apoyado en CRM",
      description: "Estrategia comercial integrada que actúa como la puerta de entrada más rápida y con mayor retorno para la mipyme.",
      typeLabel: "Puerta de entrada",
      typeSubtext: "Retorno temprano",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/campaign2.svg",
      actionRoute: "/trends/marketing-digital-crm"
    },
    {
      id: 22,
      eje: "EJE F",
      tag: "Tecnología",
      title: "Automatización Inteligente",
      description: "Convergencia de RPA, IA Generativa e Internet de Todo (IoE) para optimizar procesos repetitivos y liberar tiempo valioso.",
      typeLabel: "Eficiencia operativa",
      typeSubtext: "Integración tecnológica",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/precision_manufacturing.svg",
      actionRoute: "/trends/automatizacion-inteligente-rpa-genai"
    },
    {
      id: 23,
      eje: "EJE F",
      tag: "Tecnología",
      title: "Gemelos Digitales y Simulación",
      description: "Réplicas virtuales sincronizadas que permiten simular, predecir y validar procesos antes de realizar inversiones físicas.",
      typeLabel: "Simulación avanzada",
      typeSubtext: "Horizonte 5RI",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/partner_exchange.svg",
      actionRoute: "/trends/gemelos-digitales-simulacion"
    },
    {
      id: 24,
      eje: "EJE F",
      tag: "Tecnología",
      title: "Analítica e IA Industrial",
      description: "Gobernanza y explotación del dato como el cimiento necesario e insumo crítico antes de desplegar inteligencia artificial.",
      typeLabel: "Cimiento de datos",
      typeSubtext: "Efecto palanca",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/memory.svg",
      actionRoute: "/trends/analitica-datos-ia-industrial"
    },
    {
      id: 25,
      eje: "EJE F",
      tag: "Tecnología",
      title: "Physical AI y Robótica Colaborativa",
      description: "Robots colaborativos (cobots) y wearables que amplifican la capacidad, seguridad y bienestar del trabajador industrial.",
      typeLabel: "Robótica humana",
      typeSubtext: "Empoderamiento",
      iconUrl: "/TransformacionDigitalJIC/trendsIcons/robot.svg",
      actionRoute: "/trends/physical-ai-robotica-colaborativa"
    }
  ]
};