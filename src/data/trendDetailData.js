// src/data/trendDetailData.js
export const trendsDetailData = {
  "quinta-revolucion": {
    id: "quinta-revolucion",
    badgeAxis: "EJE A",
    axisName: "Paradigmas",
    trendNumber: "TENDENCIA 01",
    title: "La Quinta Revolución Industrial consolidada como marco rector que integra humano, tecnología, sostenibilidad y resiliencia",
    shortDescription: "Un nuevo paradigma que coloca a las personas y al planeta en el centro del progreso, construyendo organizaciones más humanas, sostenibles y resilientes.",
    heroImage: "/TransformacionDigitalJIC/5ri-graphic.png",
    definition: {
      icon: "book",
      text: "La 5RI es el paradigma productivo que articula tres pilares — humano-céntrico, sostenible y resiliente — como criterios simultáneos de diseño de empresas, cadenas de valor y políticas públicas. Surge como evolución crítica de la Industria 4.0, que se concentró en automatización y conectividad sin internalizar suficientemente al trabajador, al planeta ni al riesgo sistémico."
    },
    drivers: [
      { id: 1, title: "1. Madurez tecnológica", desc: "La consolidación de las tecnologías habilitadoras de 4.0 abre espacio para gobernarlas y orientarlas al bien común.", icon: "memory" },
      { id: 2, title: "2. Presión social y regulatoria", desc: "Exigencias crecientes en sostenibilidad (CSRD europeo, CONPES 4144 colombiano) que impulsan modelos de negocio responsables.", icon: "balance" },
      { id: 3, title: "3. Disrupciones globales", desc: "La pandemia y otras crisis recientes ubicaron la resiliencia y la capacidad de adaptación en el centro de la estrategia.", icon: "language" },
      { id: 4, title: "4. Convergencia académica", desc: "La comunidad académica internacional reconoce la insuficiencia del paradigma 4.0 y avanza hacia marcos más integrales.", icon: "school" }
    ],
    implication: {
      text: "Cualquier diseño de programa de transformación digital para mipymes que ignore alguno de los tres pilares opera contra la dirección sectorial. El paradigma 4.0 puro, centrado solo en automatización, ya no es defendible como única lectura para un proyecto de fondo.",
      quote: "La 5RI no es solo tecnología: es una nueva forma de entender el progreso."
    },
    resources: [
      { id: 1, type: "Documento", format: "PDF", title: "Quinta Revolución Industrial: Marco conceptual y aplicaciones", link: "/docs/quinta-revolucion.pdf" },
      { id: 2, type: "Informe", format: "Link", title: "CONPES 4144 de 2022 (Política de reindustrialización)", link: "https://www.dnp.gov.co" },
      { id: 3, type: "Artículo", format: "Link", title: "Más allá de la Industria 4.0: hacia la 5RI", link: "#" },
      { id: 4, type: "Video", format: "Video", duration: "05:30 min", title: "¿Qué es la 5RI y por qué es importante?", link: "#" }
    ],
    prevTrend: { title: "Paradigma 4.0", slug: "paradigma-4-0" },
    nextTrend: { title: "Tecnología como complemento del humano", slug: "tecnologia-complemento-humano" }
  },

  "tecnologia-complemento-humano": {
    id: "tecnologia-complemento-humano",
    badgeAxis: "EJE A",
    axisName: "Paradigmas",
    trendNumber: "TENDENCIA 02",
    title: "Tecnología como complemento del humano, no como sustituto: el principio rector emergente",
    shortDescription: "Un enfoque donde las tecnologías digitales avanzadas se introducen para amplificar las capacidades humanas y potenciar el talento.",
    heroImage: "/TransformacionDigitalJIC/human-centric-graphic.png",
    definition: {
      text: "Es el principio según el cual las tecnologías digitales avanzadas (IA, robótica adaptativa, analítica) se introducen para amplificar las capacidades humanas, liberar tiempo del talento y mejorar la calidad de las decisiones — no para reemplazar trabajadores. Este principio se materializa en el diseño de procesos, en la selección de tecnologías y en los indicadores con los que se mide el éxito de la transformación digital."
    },
    drivers: [
      { id: 1, title: "1. Lecciones de la Industria 4.0", desc: "La automatización pura generó desplazamiento sin reinserción en modelos previos.", icon: "school" },
      { id: 2, title: "2. Evidencia de Productividad", desc: "Empresas con enfoque colaborativo humano-tecnología superan en productividad a las que sustituyen.", icon: "trending_up" },
      { id: 3, title: "3. Presión Regulatoria", desc: "Exigencias crecientes y normativas sobre el uso ético de la Inteligencia Artificial.", icon: "gavel" },
      { id: 4, title: "4. Empowered Worker", desc: "Madurez del concepto del trabajador empoderado en la literatura estratégica.", icon: "badge" }
    ],
    implication: {
      text: "Las estrategias de transformación digital para mipymes deben diseñarse desde la pregunta «¿cómo libera tiempo y eleva el aporte del trabajador?» antes que desde «¿qué se automatiza?». Esto cambia el lenguaje de los pilotos, los indicadores de éxito y los criterios de selección de proveedores tecnológicos.",
      quote: "La tecnología no sustituye al talento: potencia su capacidad de decisión e innovación."
    },
    resources: [
      { id: 1, type: "Informe", format: "PDF", title: "Empowered Worker: Modelos de colaboración humano-IA", link: "#" },
      { id: 2, type: "Artículo", format: "Link", title: "Criterios de selección de tecnología ética para Mipymes", link: "#" }
    ],
    prevTrend: { title: "La Quinta Revolución Industrial", slug: "quinta-revolucion" },
    nextTrend: { title: "Transformación Digital como Paradigma", slug: "transformacion-digital-paradigma" }
  },

  "transformacion-digital-paradigma": {
    id: "transformacion-digital-paradigma",
    badgeAxis: "EJE A",
    axisName: "Paradigmas",
    trendNumber: "TENDENCIA 03",
    title: "La transformación digital como paradigma y proceso gestionado: el sustrato de la Quinta Revolución Industrial",
    shortDescription: "La integración tecnológica como proceso continuo y estratégico con propósito humano-céntrico, sostenible y resiliente.",
    heroImage: "/TransformacionDigitalJIC/td-paradigma-graphic.png",
    definition: {
      text: "La transformación digital (TD) es el proceso de integración de tecnologías digitales en todos los ámbitos de una organización, capaz de reconfigurar operaciones, propuesta de valor y cultura. No equivale a adoptar una herramienta puntual: es una trayectoria gestionada por etapas de madurez. La TD funciona como sustrato técnico y la 5RI le imprime un propósito humano-céntrico, sostenible y resiliente. La distinción nuclear es esta: la 4RI/TD conecta y automatiza para buscar eficiencia; la 5RI orquesta esas mismas tecnologías al servicio del humano, la sostenibilidad y la resiliencia."
    },
    drivers: [
      { id: 1, title: "1. Tecnologías Habilitadoras", desc: "Abaratamiento de las tecnologías habilitadoras (cloud, inteligencia artificial, datos).", icon: "cloud" },
      { id: 2, title: "2. Presión Competitiva", desc: "Presión competitiva y de clientes en el entorno de mercado.", icon: "speed" },
      { id: 3, title: "3. Brechas de Productividad", desc: "Brechas persistentes de productividad asociadas a baja madurez digital.", icon: "analytics" },
      { id: 4, title: "4. Políticas Públicas", desc: "Políticas públicas orientadas a la digitalización empresarial.", icon: "account_balance" }
    ],
    implication: {
      text: "La TD va más allá de tendencias tecnológicas, es un proceso con dirección estratégica. El paradigma de la 5RI no exige tecnologías nuevas: exige reorientar las existentes hacia sus tres pilares.",
      quote: "La 5RI no exige tecnologías nuevas: exige reorientar las existentes hacia sus tres pilares."
    },
    resources: [
      { id: 1, type: "Documento", format: "PDF", title: "Guía de gestión de madurez digital para Mipymes", link: "#" },
      { id: 2, type: "Informe", format: "Link", title: "De la 4RI a la 5RI: Reorientación estratégica de activos digitales", link: "#" }
    ],
    prevTrend: { title: "Tecnología como complemento del humano", slug: "tecnologia-complemento-humano" },
    nextTrend: { title: "El liderazgo digital como cuello de botella", slug: "liderazgo-digital-cuello-botella" }
  },

  "liderazgo-digital-cuello-botella": {
    id: "liderazgo-digital-cuello-botella",
    badgeAxis: "EJE B",
    axisName: "Factor Humano",
    trendNumber: "TENDENCIA 04",
    title: "El liderazgo digital es el cuello de botella estructural de la transformación digital en pymes, no la tecnología",
    shortDescription: "Los fracasos en iniciativas de transformación digital en Mipymes se deben mayoritariamente a déficits de liderazgo y gestión del cambio antes que a barreras tecnológicas.",
    heroImage: "/TransformacionDigitalJIC/liderazgo-digital-graphic.png",
    definition: {
      text: "Es la observación empírica, validada en múltiples contextos geográficos, de que las empresas pequeñas y medianas que fracasan en sus iniciativas de transformación digital lo hacen mayoritariamente por déficits de liderazgo — visión, gestión del cambio, capacidad de prioridad, alfabetización digital del decisor — antes que por insuficiencia tecnológica o financiera."
    },
    drivers: [
      { id: 1, title: "1. Acceso Tecnológico", desc: "Disponibilidad creciente de tecnologías a costo accesible que elimina la barrera de entrada.", icon: "cloud_done" },
      { id: 2, title: "2. Modelos Mentales Analógicos", desc: "Persistencia de enfoques gerenciales tradicionales frente a nuevos entornos digitales.", icon: "psychology" },
      { id: 3, title: "3. Soledad del Decisor", desc: "Soledad estructural en la Mipyme, carente de una capa directiva con expertise digital.", icon: "person_off" },
      { id: 4, title: "4. Brecha de Aprendizaje", desc: "Descalce entre la velocidad del cambio tecnológico y el ciclo de aprendizaje del directivo.", icon: "speed" }
    ],
    implication: {
      text: "Los programas de acompañamiento a Mipymes deben invertir en formación del decisor antes (o en simultáneo) que en formación de empleados; un piloto que automatice un proceso operativo sin haber alineado al gerente fracasa con probabilidad alta.",
      quote: "Sin la alineación estratégica del líder, cualquier piloto de automatización está destinado al fracaso."
    },
    resources: [
      { id: 1, type: "Guía", format: "PDF", title: "Liderazgo y Gestión del Cambio para Gerentes de Mipymes", link: "#" },
      { id: 2, type: "Artículo", format: "Link", title: "Cómo superar la soledad del decisor en la era digital", link: "#" }
    ],
    prevTrend: { title: "Transformación Digital como Paradigma", slug: "transformacion-digital-paradigma" },
    nextTrend: { title: "Brecha Intención-Acción en Upskilling", slug: "brecha-intencion-accion-upskilling" }
  },

  "brecha-intencion-accion-upskilling": {
    id: "brecha-intencion-accion-upskilling",
    badgeAxis: "EJE B",
    axisName: "Factor Humano",
    trendNumber: "TENDENCIA 05",
    title: "Brecha intención-acción en upskilling y reskilling: el factor humano se sabe prioritario pero no se invierte",
    shortDescription: "La desconexión entre el reconocimiento del valor de la formación digital y la inversión real en planes de capacitación en las pymes.",
    heroImage: "/TransformacionDigitalJIC/upskilling-graphic.png",
    definition: {
      text: "Es la separación documentada entre el reconocimiento generalizado de que la formación digital de la fuerza de trabajo es estratégica y la inversión efectivamente realizada en planes de upskilling y reskilling. La brecha es mayor en pymes que en grandes corporaciones por restricciones de tiempo, presupuesto y planeación."
    },
    drivers: [
      { id: 1, title: "1. Dinamismo de Habilidades", desc: "Alta velocidad de cambio en las competencias digitales requeridas por el mercado.", icon: "update" },
      { id: 2, title: "2. Costo de Oportunidad", desc: "Retirar a un empleado para formarlo representa una pérdida directa e inmediata de producción.", icon: "hourglass_disabled" },
      { id: 3, title: "3. Formatos Inadecuados", desc: "Ausencia de catálogos formativos breves, prácticos y directamente aplicables.", icon: "history_edu" },
      { id: 4, title: "4. Falta de Financiación", desc: "Falta de mecanismos financieros dedicados exclusivamente al reskilling empresarial.", icon: "payments" }
    ],
    implication: {
      text: "El esfuerzo de formación debe romper con el paradigma del curso largo y migrar a formatos cortos, conectados con un problema operativo concreto de la Mipyme. Los programas que llegan al territorio deben dimensionar su éxito por aplicación efectiva, no por horas dictadas.",
      quote: "El éxito del reskilling en la Mipyme se mide por la aplicación práctica inmediata, no por horas académicas dictadas."
    },
    resources: [
      { id: 1, type: "Manual", format: "PDF", title: "Micro-aprendizajes aplicados a la productividad de Mipymes", link: "#" },
      { id: 2, type: "Caso de Estudio", format: "Link", title: "Modelos de formación en el puesto de trabajo", link: "#" }
    ],
    prevTrend: { title: "El Liderazgo Digital como Cuello de Botella", slug: "liderazgo-digital-cuello-botella" },
    nextTrend: { title: "Bienestar Laboral y Ergonomía Cognitiva", slug: "bienestar-ergonomia-cognitiva" }
  },

  "bienestar-ergonomia-cognitiva": {
    id: "bienestar-ergonomia-cognitiva",
    badgeAxis: "EJE B",
    axisName: "Factor Humano",
    trendNumber: "TENDENCIA 06",
    title: "Bienestar laboral y ergonomía cognitiva como nuevo frente competitivo de la Quinta Revolución Industrial",
    shortDescription: "El diseño de procesos que respetan los límites cognitivos y promueven el bienestar integral se consolida como un factor operativo y competitivo directo.",
    heroImage: "/TransformacionDigitalJIC/bienestar-cognitivo-graphic.png",
    definition: {
      text: "El bienestar laboral — físico, mental, social — y la ergonomía cognitiva — carga mental, fatiga digital, claridad de roles — están migrando de «buena práctica» a «criterio operativo» y «factor competitivo». Las empresas que diseñan procesos respetando límites cognitivos retienen mejor talento, reducen errores y aumentan productividad."
    },
    drivers: [
      { id: 1, title: "1. Saturación Digital", desc: "Sobrecarga de notificaciones, multitarea constante y exceso de reuniones virtuales.", icon: "notifications_paused" },
      { id: 2, title: "2. Costo de Rotación", desc: "Incremento significativo de los costos asociados a la pérdida y reemplazo de talento.", icon: "group_remove" },
      { id: 3, title: "3. Expectativas Generacionales", desc: "Nuevas generaciones rechazan activamente modelos laborales extractivos y desgastantes.", icon: "sentiment_satisfied" },
      { id: 4, title: "4. Trabajo Híbrido", desc: "Consolidación de modelos de trabajo remoto e híbrido como configuraciones estables.", icon: "home_work" }
    ],
    implication: {
      text: "El bienestar deja de ser tema de área de gestión humana y entra en la conversación de diseño operativo. Para Mipymes, esto se traduce en pilotos sencillos (revisión de carga de reuniones, protocolos de notificaciones, claridad de roles) con impacto medible en rotación y satisfacción.",
      quote: "Cuidar la carga mental del equipo no es solo gestión humana: es diseño operativo de alta productividad."
    },
    resources: [
      { id: 1, type: "Herramienta", format: "PDF", title: "Checklist de Ergonomía Cognitiva y Fatiga Digital", link: "#" },
      { id: 2, type: "Guía", format: "Link", title: "Protocolos de comunicación asíncrona para Mipymes", link: "#" }
    ],
    prevTrend: { title: "Brecha Intención-Acción en Upskilling", slug: "brecha-intencion-accion-upskilling" },
    nextTrend: { title: "Sucesión Generacional en Mipymes Familares", slug: "sucesion-generacional-mipymes" }
  },

  "sucesion-generacional-mipymes": {
    id: "sucesion-generacional-mipymes",
    badgeAxis: "EJE B",
    axisName: "Factor Humano",
    trendNumber: "TENDENCIA 07",
    title: "Sucesión generacional y mipymes familiares como catalizador o freno de la transformación digital",
    shortDescription: "El relevo generacional en empresas familiares actúa como el motor de innovación más potente o como una fuente de alta fragilidad organizacional.",
    heroImage: "/TransformacionDigitalJIC/sucesion-generacional-graphic.png",
    definition: {
      text: "La gran mayoría de las Mipymes en América Latina son familiares. La transición generacional en el control y la gerencia — cuando un sucesor más joven asume liderazgo — es uno de los catalizadores más potentes documentados para iniciar transformación digital. Pero también es uno de los puntos de mayor fragilidad: una sucesión mal gestionada destruye lo construido y genera conflicto organizacional."
    },
    drivers: [
      { id: 1, title: "1. Ventana de Relevo", desc: "Fundadores en edad de retiro crean una coyuntura crítica de empalme generacional.", icon: "elderly" },
      { id: 2, title: "2. Nativos Digitales", desc: "Nuevas generaciones asumen roles directivos con alfabetización digital natural.", icon: "devices" },
      { id: 3, title: "3. Tensión de Lógicas", desc: "Conflictos constantes entre la lógica patrimonial familiar y la lógica de competitividad.", icon: "sync_problem" },
      { id: 4, title: "4. Ausencia de Gobierno", desc: "Falta de protocolos formales de sucesión y órganos de gobierno familiar estructurados.", icon: "account_balance_wallet" }
    ],
    implication: {
      text: "Los programas de transformación digital para Mipymes familiares deben integrar el ángulo de sucesión y gobierno familiar como parte del piloto, no como tema separado. Identificar empresas en ventana de relevo y diseñar intervenciones específicas para esa coyuntura puede multiplicar el retorno por empresa intervenida.",
      quote: "El relevo generacional es la ventana de oportunidad perfecta para digitalizar el ADN de la empresa familiar."
    },
    resources: [
      { id: 1, type: "Protocolo", format: "PDF", title: "Modelo de Gobierno Digital para Empresas Familares", link: "#" },
      { id: 2, type: "Artículo", format: "Link", title: "Cómo gestionar el empalme generacional en la era digital", link: "#" }
    ],
    prevTrend: { title: "Bienestar Laboral y Ergonomía Cognitiva", slug: "bienestar-ergonomia-cognitiva" },
    nextTrend: { title: "Modelos de Negocio Sostenibles", slug: "modelos-negocio-sostenibles" }
  },

  "servicializacion-digital-pymes": {
    id: "servicializacion-digital-pymes",
    badgeAxis: "EJE C",
    axisName: "Modelos de Negocio",
    trendNumber: "TENDENCIA 08",
    title: "Servicialización digital como ventaja competitiva emergente para pymes",
    shortDescription: "La transición desde un modelo de venta individual hacia servicios continuos y recurrentes habilitados por tecnología.",
    heroImage: "/TransformacionDigitalJIC/servicializacion-digital-graphic.png",
    definition: {
      text: "La servicialización es la transición desde un modelo basado en venta de productos individuales hacia un modelo que ofrece servicios continuos asociados al producto (suscripción, mantenimiento, monitoreo, resultados). La servicialización digital la habilita con tecnología (sensores, plataformas, datos) y se ha convertido en una de las rutas más prometedoras para que pymes escapen de mercados disrumpidos."
    },
    drivers: [
      { id: 1, title: "1. Disrupción de Mercados", desc: "Presión y disrupción de mercados tradicionales por plataformas digitales.", icon: "storefront" },
      { id: 2, title: "2. Demanda por Resultados", desc: "Demanda creciente del cliente por «resultados» más que por la compra de activos.", icon: "published_with_changes" },
      { id: 3, title: "3. Sensores Asequibles", desc: "Disponibilidad de sensores e Internet de las Cosas (IoT) a bajo costo.", icon: "sensors" },
      { id: 4, title: "4. Ingresos Recurrentes", desc: "Atractivo financiero y previsibilidad de los modelos de facturación por suscripción.", icon: "repeat" }
    ],
    implication: {
      text: "Mipymes en sectores B2B y de servicios técnicos deberían evaluar sistemáticamente la oportunidad de incorporar componentes de servicio recurrente. Los programas institucionales pueden facilitar pilotos sectoriales (no genéricos) que documenten la transición.",
      quote: "El cliente de hoy no busca comprar un producto, sino asegurar un resultado continuo."
    },
    resources: [
      { id: 1, type: "Guía", format: "PDF", title: "Modelos de Servicialización para Mipymes B2B", link: "#" },
      { id: 2, type: "Caso de Estudio", format: "Link", title: "De la venta de producto al modelo de suscripción", link: "#" }
    ],
    prevTrend: { title: "Sucesión Generacional en Mipymes Familares", slug: "sucesion-generacional-mipymes" },
    nextTrend: { title: "Plataformas Mediadas y Ecosistemas Multi-actor", slug: "plataformas-ecosistemas-latam" }
  },

  "plataformas-ecosistemas-latam": {
    id: "plataformas-ecosistemas-latam",
    badgeAxis: "EJE C",
    axisName: "Modelos de Negocio",
    trendNumber: "TENDENCIA 09",
    title: "Plataformas mediadas y ecosistemas multi-actor como modelo LATAM para territorios sin ecosistema desarrollado",
    shortDescription: "Un modelo que articula una plataforma central con múltiples actores para acelerar la transformación digital en la región.",
    heroImage: "/TransformacionDigitalJIC/ecosistemas-latam-graphic.png",
    definition: {
      text: "Es el modelo que articula a una plataforma central — universidad, autoridad pública, hub local, cámara de comercio — con múltiples actores (mipymes, proveedores tecnológicos, financiadores) para acelerar la adopción de transformación digital en territorios donde el ecosistema de innovación no se desarrolla espontáneamente. Difiere del modelo «Silicon Valley» (capital de riesgo + universidades) y se adapta al tejido latinoamericano. El modelo de cuádruple hélice que articula esta tendencia admite la extensión a quíntuple hélice — con el medio ambiente como quinta hélice."
    },
    drivers: [
      { id: 1, title: "1. Insuficiencia de Mercado", desc: "Insuficiencia del modelo de mercado puro en territorios con bajo capital de riesgo.", icon: "domain_disabled" },
      { id: 2, title: "2. Coordinación Multi-Actor", desc: "Necesidad de articulación entre diversos actores que poseen incentivos distintos.", icon: "hub" },
      { id: 3, title: "3. Instituciones Intermedias", desc: "Disponibilidad de cámaras de comercio y universidades regionales actuando como orquestadores.", icon: "account_balance" },
      { id: 4, title: "4. Aprendizaje de Fracasos", desc: "Evolución frente a iniciativas anteriores fragmentadas y de bajo impacto acumulado.", icon: "fact_check" }
    ],
    implication: {
      text: "Para Colombia y el Oriente Antioqueño específicamente, este es el modelo que mejor se ajusta a la realidad institucional: cámaras de comercio fuertes, universidades regionales, gobierno departamental con instrumentos y mipymes mayoritarias. El desafío no es crear el modelo sino orquestar mejor lo que ya existe.",
      quote: "En Latinoamérica el ecosistema no surge espontáneamente: se construye orquestando a los actores existentes."
    },
    resources: [
      { id: 1, type: "Informe", format: "PDF", title: "Modelos de Orquestación Territorial en América Latina", link: "#" },
      { id: 2, type: "Artículo", format: "Link", title: "De la Cuádruple a la Quíntuple Hélice: Sostenibilidad en el Territorio", link: "#" }
    ],
    prevTrend: { title: "Servicialización Digital para Pymes", slug: "servicializacion-digital-pymes" },
    nextTrend: { title: "Gobernanza de Datos e IA Responsable", slug: "gobernanza-datos-ia" }
  },
  "doble-transicion-verde-digital": {
    id: "doble-transicion-verde-digital",
    badgeAxis: "EJE D",
    axisName: "Rectores Transversales",
    trendNumber: "TENDENCIA 10",
    title: "Doble transición verde-digital: el ESG arrastra a las pymes proveedoras",
    shortDescription: "La transición simultánea hacia operaciones digitales y sostenibles como condición indispensable para acceder a grandes cadenas de valor.",
    heroImage: "/TransformacionDigitalJIC/doble-transicion-graphic.png",
    definition: {
      text: "La transición simultánea hacia operaciones digitales y sostenibles — doble transición — está dejando de ser una opción para convertirse en condición de acceso a mercados. Grandes corporaciones, presionadas por marcos regulatorios y exigencia de inversores, transmiten requisitos ESG (Environmental, Social, Governance) a su cadena de proveedores — incluyendo pymes."
    },
    drivers: [
      { id: 1, title: "1. Regulaciones Globales", desc: "Marco normativo europeo (CSRD) que exige reportes de impacto a las cadenas de suministro.", icon: "gavel" },
      { id: 2, title: "2. Presión Inversionista", desc: "Presión creciente de inversionistas y aseguradoras por criterios de sostenibilidad.", icon: "trending_up" },
      { id: 3, title: "3. Marco Colombiano Emergente", desc: "Lineamientos del CONPES 4144 que articulan dimensiones digitales y de sostenibilidad.", icon: "account_balance" },
      { id: 4, title: "4. Economía Circular", desc: "Apetito del consumidor y crecimiento de modelos circulares como estándar de mercado.", icon: "recycling" }
    ],
    implication: {
      text: "Mipymes que aspiren a integrarse en cadenas de valor exportadoras o suministrar a grandes empresas deben empezar a capturar y reportar datos ESG básicos. Para Colombia, esta es una palanca de internacionalización con potencial de impacto en agroindustria, manufactura y servicios.",
      quote: "El reporte ESG ya no es exclusivo de multinacionales: es la nueva carta de presentación de las pymes proveedoras."
    },
    resources: [
      { id: 1, type: "Guía", format: "PDF", title: "Primeros Pasos en Reporte ESG para Mipymes", link: "#" },
      { id: 2, type: "Informe", format: "Link", title: "Doble Transición Verde y Digital en América Latina", link: "#" }
    ],
    prevTrend: { title: "Plataformas Mediadas y Ecosistemas Multi-actor", slug: "plataformas-ecosistemas-latam" },
    nextTrend: { title: "Sostenibilidad Productiva y Triple Impacto", slug: "sostenibilidad-productiva-triple-impacto" }
  },

  "sostenibilidad-productiva-triple-impacto": {
    id: "sostenibilidad-productiva-triple-impacto",
    badgeAxis: "EJE D",
    axisName: "Rectores Transversales",
    trendNumber: "TENDENCIA 11",
    title: "Sostenibilidad productiva: la triple sostenibilidad — económica, social y ambiental — como criterio de diseño",
    shortDescription: "Conjunto de prácticas y tecnologías que aseguran el desempeño económico, el bienestar social y el respeto al medio ambiente de forma simultánea.",
    heroImage: "/TransformacionDigitalJIC/sostenibilidad-productiva-graphic.png",
    definition: {
      text: "Conjunto de prácticas, modelos y tecnologías que hacen a la organización productiva en las tres dimensiones de la sostenibilidad — económica, social y ambiental — de forma simultánea. No se reduce a lo ambiental: integra la viabilidad y el desempeño económico sostenido, el bienestar y la equidad social (trabajadores, comunidad y cadena de valor) y el respeto a los límites del planeta. Materializa el pilar de sostenibilidad de la 5RI como criterio de diseño de la operación, no como obligación de divulgación (ESG)."
    },
    drivers: [
      { id: 1, title: "1. Cadenas de Valor", desc: "Presión regulatoria y de cadenas globales sobre desempeño de triple impacto.", icon: "hub" },
      { id: 2, title: "2. Expectativas de Trabajo Digno", desc: "Creciente exigencia social por equidad, bienestar e impacto en la comunidad.", icon: "diversity_3" },
      { id: 3, title: "3. Eficiencia de Recursos", desc: "Incremento continuo de costos de energía, materias primas y logística.", icon: "energy_savings_leaf" },
      { id: 4, title: "4. Metas Net-Zero", desc: "Evidencia de que la sostenibilidad bien gestionada optimiza el desempeño económico a largo plazo.", icon: "crisis_alert" }
    ],
    implication: {
      text: "Cerrar la brecha de sostenibilidad exige entenderla como triple — económica, social y ambiental — y no solo como gestión ambiental o reporte. Para el tejido del Oriente Antioqueño, las puertas accesibles son la eficiencia energética y la trazabilidad (ambiental), el trabajo digno y las competencias verdes (social) y los modelos de negocio que sostienen el desempeño en el tiempo (económico).",
      quote: "La sostenibilidad productiva no es un costo de divulgación: es la metodología para diseñar empresas viables."
    },
    resources: [
      { id: 1, type: "Manual", format: "PDF", title: "Diseño Operativo con Criterios de Triple Sostenibilidad", link: "#" },
      { id: 2, type: "Caso de Estudio", format: "Link", title: "Eficiencia Energética y Trabajo Digno en Mipymes", link: "#" }
    ],
    prevTrend: { title: "Doble Transición Verde-Digital", slug: "doble-transicion-verde-digital" },
    nextTrend: { title: "Economía Circular y Modelos Regenerativos", slug: "economia-circular-modelos-regenerativos" }
  },

  "economia-circular-modelos-regenerativos": {
    id: "economia-circular-modelos-regenerativos",
    badgeAxis: "EJE D",
    axisName: "Rectores Transversales",
    trendNumber: "TENDENCIA 12",
    title: "Economía circular y modelos regenerativos habilitados por tecnología",
    shortDescription: "Modelos de negocio que cierran ciclos de materiales y regeneran sistemas naturales mediante herramientas digitales.",
    heroImage: "/TransformacionDigitalJIC/economia-circular-graphic.png",
    definition: {
      text: "Modelos de producción y de negocio que cierran los ciclos de materiales y energía — reducir, reutilizar, reparar, remanufacturar y reciclar — y que regeneran los sistemas naturales, habilitados por tecnologías digitales. Es la materialización ambiental concreta de la sostenibilidad productiva: donde aquella define el criterio triple, esta operacionaliza la dimensión ambiental en la cadena de valor."
    },
    drivers: [
      { id: 1, title: "1. Costo de Materiales", desc: "Escasez y encarecimiento de materias primas e insumos energéticos.", icon: "inventory" },
      { id: 2, title: "2. Regulación Ambiental", desc: "Regulaciones stictas y metas globales de descarbonización (Net-Zero).", icon: "eco" },
      { id: 3, title: "3. Exigencia de Cadena", desc: "Requisitos de trazabilidad de residuos por parte de grandes compradores.", icon: "route" },
      { id: 4, title: "4. Madurez Tecnológica", desc: "Evolución de sensores e IoT para monitoreo y diseño de ciclo de vida.", icon: "memory" }
    ],
    implication: {
      text: "Para el tejido del Oriente Antioqueño, las puertas accesibles son la trazabilidad de insumos y residuos, el reúso y la reparación, y los modelos producto-servicio que extienden la vida útil — palancas de menor costo que conectan la dimensión ambiental con el ahorro económico.",
      quote: "La economía circular transforma los residuos operativos en nuevas fuentes de ingresos."
    },
    resources: [
      { id: 1, type: "Guía", format: "PDF", title: "Rutas de Trazabilidad y Reúso para el Oriente Antioqueño", link: "#" },
      { id: 2, type: "Herramienta", format: "Link", title: "Calculadora de Impacto Circular para Mipymes", link: "#" }
    ],
    prevTrend: { title: "Sostenibilidad Productiva y Triple Impacto", slug: "sostenibilidad-productiva-triple-impacto" },
    nextTrend: { title: "Vulnerabilidad Cibernética de las Pymes", slug: "vulnerabilidad-cibernetica-pymes" }
  },

  "vulnerabilidad-cibernetica-pymes": {
    id: "vulnerabilidad-cibernetica-pymes",
    badgeAxis: "EJE D",
    axisName: "Rectores Transversales",
    trendNumber: "TENDENCIA 13",
    title: "Vulnerabilidad cibernética estructural de las pymes: de riesgo informático a amenaza existencial",
    shortDescription: "La creciente exposición a ciberataques exige incorporar la ciberseguridad como pilar básico de continuidad operativa.",
    heroImage: "/TransformacionDigitalJIC/ciberseguridad-pymes-graphic.png",
    definition: {
      text: "Las pymes constituyen el segmento empresarial con menor confianza para anticipar y recuperarse de incidentes cibernéticos. Lo que para una gran empresa es un incidente gestionable, para una mipyme puede ser un evento terminal. La frecuencia y sofisticación de ataques está aumentando, y las pymes son blanco creciente justamente porque sus defensas son menores."
    },
    drivers: [
      { id: 1, title: "1. Profesionalización del Delito", desc: "Surgimiento del Ransomware-as-a-Service y mercado global de exploits.", icon: "security_update_warning" },
      { id: 2, title: "2. Mayor Superficie de Ataque", desc: "Uso extendido de la nube, dispositivos IoT y esquemas de trabajo remoto.", icon: "cloud_off" },
      { id: 3, title: "3. Ingeniería Social con IA", desc: "Ataques ultradiseñados mediante Deepfakes y phishing personalizado.", icon: "psychology_alt" },
      { id: 4, title: "4. Ataques de Cadena", desc: "Vulnerabilidad en pymes utilizada como puerta trasera para atacar grandes corporaciones.", icon: "link_off" }
    ],
    implication: {
      text: "Las hojas de ruta de transformación digital para mipymes deben incluir desde el primer momento medidas de ciberhigiene básica (backups, autenticación multifactor, formación contra phishing) y un plan mínimo de continuidad operativa. Sin esto, los avances digitales generan exposición sin contraparte.",
      quote: "Un solo incidente cibermético no controlado puede significar el cierre definitivo de una Mipyme."
    },
    resources: [
      { id: 1, type: "Checklist", format: "PDF", title: "Ciberhigiene Básica y Protocolos de Backups", link: "#" },
      { id: 2, type: "Guía", format: "Link", title: "Plan Mínimo de Continuidad Operativa ante Ciberataques", link: "#" }
    ],
    prevTrend: { title: "Economía Circular y Modelos Regenerativos", slug: "economia-circular-modelos-regenerativos" },
    nextTrend: { title: "Hiperpersonalización vs. Privacidad de Datos", slug: "hiperpersonalizacion-vs-privacidad" }
  },

  "hiperpersonalizacion-vs-privacidad": {
    id: "hiperpersonalizacion-vs-privacidad",
    badgeAxis: "EJE D",
    axisName: "Rectores Transversales",
    trendNumber: "TENDENCIA 14",
    title: "Hiperpersonalización vs. paradoja personalización-privacidad: el nuevo equilibrio del marketing digital",
    shortDescription: "Equilibrar la exigencia de experiencias personalizadas con la demanda de protección y privacidad de datos del cliente.",
    heroImage: "/TransformacionDigitalJIC/privacidad-marketing-graphic.png",
    definition: {
      text: "Es la tensión emergente entre dos vectores opuestos pero simultáneos: por un lado, el cliente espera experiencias hiperpersonalizadas (recomendaciones precisas, atención contextual, ofertas relevantes); por otro lado, el cliente exige cada vez más control sobre el uso de sus datos. Resolverla bien — con transparencia, consentimiento explícito y valor visible — es ahora un diferencial competitivo, no una carga regulatoria."
    },
    drivers: [
      { id: 1, title: "1. Datos Masivos y Automation", desc: "Disponibilidad de plataformas de CRM y marketing automatizado.", icon: "mark_email_read" },
      { id: 2, title: "2. Endurecimiento Regulatorio", desc: "Marco estricto de Habeas Data (Ley 1581/2012 en Colombia, GDPR en UE).", icon: "policy" },
      { id: 3, title: "3. Conciencia del Consumidor", desc: "Rechazo del consumidor frente a prácticas comerciales invasivas o extractivas.", icon: "visibility_off" },
      { id: 4, title: "4. Factor Confianza", desc: "Sanciones públicas y pérdida de reputación por mal uso de información privada.", icon: "verified_user" }
    ],
    implication: {
      text: "Las mipymes que estén formalizando o modernizando su marketing digital deben incorporar desde el diseño el cumplimiento mínimo de la Ley 1581/2012 e, idealmente, un compromiso visible de transparencia. Esto no es solo evitar multas: es construir el activo «confianza» que se ha vuelto diferencial competitivo.",
      quote: "La privacidad de los datos no es una traba legal: es la base para construir confianza con el cliente."
    },
    resources: [
      { id: 1, type: "Kit", format: "PDF", title: "Plantillas de Habeas Data y Consentimiento para Mipymes", link: "#" },
      { id: 2, type: "Artículo", format: "Link", title: "Estrategias de Marketing Basadas en Consentimiento Activo", link: "#" }
    ],
    prevTrend: { title: "Vulnerabilidad Cibernética de las Pymes", slug: "vulnerabilidad-cibernetica-pymes" },
    nextTrend: { title: "Resiliencia Operativa y Mantenimiento Predictivo", slug: "resiliencia-mantenimiento-predictivo" }
  },

  "resiliencia-mantenimiento-predictivo": {
    id: "resiliencia-mantenimiento-predictivo",
    badgeAxis: "EJE D",
    axisName: "Rectores Transversales",
    trendNumber: "TENDENCIA 15",
    title: "Resiliencia operativa y cadena de suministro digital: el mantenimiento predictivo como puerta de entrada",
    shortDescription: "Uso de tecnología accesible para anticipar fallas, proteger las operaciones y asegurar la continuidad del negocio.",
    heroImage: "/TransformacionDigitalJIC/resiliencia-predictiva-graphic.png",
    definition: {
      text: "Capacidad de una organización para anticipar, absorber y recuperarse de disrupciones mediante tecnologías digitales que dan visibilidad, predicción y adaptación en tiempo real a sus operaciones y a su cadena de suministro. Operacionaliza el pilar de resiliencia de la 5RI."
    },
    drivers: [
      { id: 1, title: "1. Disrupciones Constantes", desc: "Volatilidad de la demanda y shocks frecuentes en la cadena logística.", icon: "warning" },
      { id: 2, title: "2. Exigencia de Continuidad", desc: "Costos elevados derivados de paradas no planificadas en la operación.", icon: "build_circle" },
      { id: 3, title: "3. Sensorización Accesible", desc: "Abaratamiento de sensores IoT para monitoreo de condición física y térmica.", icon: "settings_remote" },
      { id: 4, title: "4. Visibilidad Operativa", desc: "Plataformas de predicción accesibles para mipymes en la nube.", icon: "analytics" }
    ],
    implication: {
      text: "El cierre de la brecha de resiliencia cuenta con habilitadores hoy accesibles: monitoreo de condición de bajo costo y continuidad operativa básica. Es la base de una de las acciones de no-regret para la mipyme.",
      quote: "Anticipar la falla operativa con tecnología accesible es el camino más directo hacia la resiliencia."
    },
    resources: [
      { id: 1, type: "Guía", format: "PDF", title: "Implementación de Sensores de Bajo Costo para Mantenimiento", link: "#" },
      { id: 2, type: "Caso de Estudio", format: "Link", title: "Prevención de Paradas Operativas en Pymes Industriales", link: "#" }
    ],
    prevTrend: { title: "Hiperpersonalización vs. Privacidad de Datos", slug: "hiperpersonalizacion-vs-privacidad" },
    nextTrend: { title: "Contexto Nacional y Brechas Territoriales", slug: "contexto-nacional-brechas" }
  },
  "asimetria-estructural-latam": {
    id: "asimetria-estructural-latam",
    badgeAxis: "EJE E",
    axisName: "Contexto LATAM y Colombia",
    trendNumber: "TENDENCIA 16",
    title: "Asimetría estructural LATAM: sectores avanzados I5.0 vs. tejido mipyme rezagado en digitalización básica",
    shortDescription: "La brecha entre grandes sectores que avanzan en la frontera tecnológica y un tejido mipyme estancado en capacidades digitales básicas.",
    heroImage: "/TransformacionDigitalJIC/asimetria-latam-graphic.png",
    definition: {
      text: "América Latina presenta una paradoja estructural característica: sectores específicos — financiero, agroexportador, manufactura grande, tecnología — avanzan en la frontera I5.0 (IA, agentic, servicialización), mientras que el tejido mipyme — que constituye más del 90% de las empresas y entre el 40% y el 60% del empleo formal — permanece en niveles principiantes de digitalización. Esta asimetría genera dualidad económica y debilita la transmisión de impacto."
    },
    drivers: [
      { id: 1, title: "1. Concentración de Capital", desc: "Enfoque de la inversión de riesgo en sectores específicos de alto retorno.", icon: "pie_chart" },
      { id: 2, title: "2. Estructura Productiva", desc: "Heredada con fuerte peso en sectores primarios e informalidad.", icon: "factory" },
      { id: 3, title: "3. Falta de Instrumentos", desc: "Insuficiencia de programas diseñados a la medida de la microempresa.", icon: "home_repair_service" },
      { id: 4, title: "4. Brechas de Infraestructura", desc: "Distribución desigual de conectividad, energía y logística en el territorio.", icon: "signal_cellular_connected_no_internet_4_bar" }
    ],
    implication: {
      text: "Cualquier intervención debe asumir la asimetría como dato estructural, no como anomalía. La aspiración no puede ser «elevar todas las mipymes al nivel del sector avanzado» sino diseñar caminos diferenciados: las microempresas necesitan instrumentos distintos de las medianas, y los sectores tradicionales requieren instrumentos distintos del sector financiero.",
      quote: "No se trata de forzar a todas las pymes al mismo ritmo, sino de crear rutas de adopción tecnológica adaptadas a su realidad."
    },
    resources: [
      { id: 1, type: "Estudio", format: "PDF", title: "Dualidad Productiva y Transformación Digital en LATAM", link: "#" },
      { id: 2, type: "Informe", format: "Link", title: "Rutas de Cierre de Brecha Digital para Mipymes Tradicionales", link: "#" }
    ],
    prevTrend: { title: "Resiliencia Operativa y Mantenimiento Predictivo", slug: "resiliencia-mantenimiento-predictivo" },
    nextTrend: { title: "Madurez Digital de la Mipyme Colombiana", slug: "madurez-digital-mipyme-colombia" }
  },

  "madurez-digital-mipyme-colombia": {
    id: "madurez-digital-mipyme-colombia",
    badgeAxis: "EJE E",
    axisName: "Contexto LATAM y Colombia",
    trendNumber: "TENDENCIA 17",
    title: "Madurez digital de la mipyme colombiana: baja en capacidades básicas, muy baja en capacidades avanzadas",
    shortDescription: "Diagnóstico empírico sobre la adopción tecnológica en Colombia: avance moderado en lo básico y presencia escasa de herramientas avanzadas.",
    heroImage: "/TransformacionDigitalJIC/madurez-colombia-graphic.png",
    definition: {
      text: "Es la caracterización empírica del estado actual de digitalización del tejido mipyme colombiano. Los estudios disponibles convergen en una conclusión consistente: las capacidades digitales básicas (computadores, conectividad, redes sociales) tienen penetración moderada-baja; las capacidades avanzadas (CRM, ERP, IoT, analítica, IA) son muy escasas; el avance hacia capacidades transformacionales es incipiente."
    },
    drivers: [
      { id: 1, title: "1. Restricción de Capital", desc: "Limitaciones financieras de presupuesto para adquirir e implementar software.", icon: "savings" },
      { id: 2, title: "2. Escasez de Talento", desc: "Dificultad para atraer y retener personal con competencias digitales clave.", icon: "person_search" },
      { id: 3, title: "3. Falta de Financiación", desc: "Ausencia de líneas de crédito dimensionadas para la escala de la microempresa.", icon: "credit_card_off" },
      { id: 4, title: "4. Heterogeneidad Regional", desc: "Grandes diferencias de adopción tecnológica entre regiones y municipios.", icon: "map" }
    ],
    implication: {
      text: "El punto de partida realista para diseñar programas de transformación digital en Colombia es la consolidación de capacidades básicas (presencia digital, herramientas de productividad, conectividad estable) en simultáneo con introducción selectiva de capacidades avanzadas en mipymes en franja Avanzada del marco 5RI. Saltar pasos sin fundamento conduce a abandono.",
      quote: "Digitalizar con éxito exige consolidar primero la cimentación básica antes de dar el salto a tecnologías avanzadas."
    },
    resources: [
      { id: 1, type: "Reporte", format: "PDF", title: "Índice de Madurez Digital de la Mipyme Colombiana", link: "#" },
      { id: 2, type: "Guía", format: "Link", title: "Escalones de Adopción Tecnológica para el Tejido Empresarial", link: "#" }
    ],
    prevTrend: { title: "Asimetría Estructural LATAM", slug: "asimetria-estructural-latam" },
    nextTrend: { title: "Red Institucional Habilitadora Colombiana", slug: "red-institucional-colombia" }
  },

  "red-institucional-colombia": {
    id: "red-institucional-colombia",
    badgeAxis: "EJE E",
    axisName: "Contexto LATAM y Colombia",
    trendNumber: "TENDENCIA 18",
    title: "Red institucional habilitadora colombiana: CONPES 4144 + Bancóldex + CTDE + iNNpulsa como infraestructura blanda",
    shortDescription: "La arquitectura pública y territorial que articula instrumentos, acompañamiento e incentivos para digitalizar las mipymes.",
    heroImage: "/TransformacionDigitalJIC/red-institucional-graphic.png",
    definition: {
      text: "Colombia cuenta con una arquitectura institucional para la transformación digital de mipymes que, aunque imperfecta, es robusta en su diseño y opera con escalas relevantes. Esta red articula política pública (CONPES 4144), financiación (Bancóldex), acompañamiento técnico (Centros de Transformación Digital Empresarial, iNNpulsa), datos oficiales (DANE) e instituciones territoriales (cámaras de comercio)."
    },
    drivers: [
      { id: 1, title: "1. Evolución Normativa", desc: "Madurez de la política pública desde el CONPES 3975 y el nuevo CONPES 4144.", icon: "gavel" },
      { id: 2, title: "2. Aprendizaje Acumulado", desc: "Experiencia operativa de MinTIC, iNNpulsa y Bancóldex con mipymes.", icon: "school" },
      { id: 3, title: "3. Red Territorial", desc: "Cámaras de comercio actuando como orquestadores locales y CTDEs activos.", icon: "domain" },
      { id: 4, title: "4. Cooperación e Inversión", desc: "Recursos públicos e internacionales (BID) enfocados en adopción de IA y datos.", icon: "handshake" }
    ],
    implication: {
      text: "Cualquier programa de transformación digital para mipymes en Colombia debería articularse con la red institucional existente antes que crear estructuras paralelas. Los problemas no están en la oferta total disponible, sino en la coordinación, la llegada al último kilómetro territorial y la calidad del acompañamiento al usuario final.",
      quote: "El reto no es crear nueva oferta institucional, sino conectar eficazmente a las empresas con la red que ya existe."
    },
    resources: [
      { id: 1, type: "Documento", format: "PDF", title: "CONPES 4144: Estrategia para la Transformación Digital", link: "#" },
      { id: 2, type: "Directorio", format: "Link", title: "Oferta de Oferta de Oferta e Instrumentos CTDE y Bancóldex", link: "#" }
    ],
    prevTrend: { title: "Madurez Digital de la Mipyme Colombiana", slug: "madurez-digital-mipyme-colombia" },
    nextTrend: { title: "Quinta Revolución Industrial", slug: "quinta-revolucion" }
  },
  "ia-generativa-agentica": {
    id: "ia-generativa-agentica",
    badgeAxis: "EJE F",
    axisName: "Tecnologías Habilitadoras",
    trendNumber: "TENDENCIA 19",
    title: "IA generativa y agéntica: el acelerador asimétrico",
    shortDescription: "La rápida adopción de herramientas de IA generativa y agéntica, transitando de usos superficiales hacia la automatización profunda de procesos.",
    heroImage: "/TransformacionDigitalJIC/ia-generativa-graphic.png",
    definition: {
      text: "La inteligencia artificial generativa — modelos de lenguaje, generación de imagen, asistentes conversacionales — y la siguiente generación, la IA agéntica (sistemas que toman decisiones autónomas), están en una fase de penetración acelerada en mipymes. Pero la profundidad del uso es muy desigual: la mayoría usa funciones superficiales como redacción asistida, mientras que muy pocos integran IA en procesos centrales de negocio."
    },
    drivers: [
      { id: 1, title: "1. Acceso Masivo", desc: "Disponibilidad de herramientas gratuitas o de bajo costo con capacidades avanzadas.", icon: "smart_toy" },
      { id: 2, title: "2. Adopción Rápida", desc: "Curva de aprendizaje accesible para casos de uso básicos e individuales.", icon: "bolt" },
      { id: 3, title: "3. Presión Competitiva", desc: "Aceleración generalizada de competidores incorporando asistentes IA.", icon: "trending_up" },
      { id: 4, title: "4. Paradigma Agéntico", desc: "Evolución hacia agentes de IA que ejecutan tareas complejas de forma autónoma.", icon: "precision_manufacturing" }
    ],
    implication: {
      text: "Para mipymes, la oportunidad de impacto real está en migrar de «usar ChatGPT para redactar» a integrar IA en procesos repetitivos — cotizaciones, atención al cliente, gestión documental — y monitoreables. Los programas de acompañamiento deben enfocarse en casos de uso concretos, no en formación general sobre IA.",
      quote: "El valor real de la IA no está en generar texto, sino en integrarla como agente en los procesos repetitivos del negocio."
    },
    resources: [
      { id: 1, type: "Guía", format: "PDF", title: "Casos de Uso de IA Agéntica para Mipymes", link: "#" },
      { id: 2, type: "Taller", format: "Link", title: "Integración de Asistentes IA en Atención al Cliente", link: "#" }
    ],
    prevTrend: { title: "Red Institucional Habilitadora Colombiana", slug: "red-institucional-colombia" },
    nextTrend: { title: "Cloud y Arquitecturas Híbridas", slug: "cloud-arquitecturas-hibridas" }
  },

  "cloud-arquitecturas-hibridas": {
    id: "cloud-arquitecturas-hibridas",
    badgeAxis: "EJE F",
    axisName: "Tecnologías Habilitadoras",
    trendNumber: "TENDENCIA 20",
    title: "Cloud y arquitecturas híbridas como infraestructura tecnológica dominante en pymes",
    shortDescription: "La transición desde servidores locales hacia servicios en la nube como precondición técnica para cualquier proceso de transformación digital.",
    heroImage: "/TransformacionDigitalJIC/cloud-hibrida-graphic.png",
    definition: {
      text: "El modelo de infraestructura tecnológica dominante para pymes ya no es la infraestructura local (servidores propios, software instalado). El paradigma vigente combina servicios en la nube (SaaS, IaaS, PaaS) con arquitecturas híbridas que mantienen ciertos datos o procesos en local por razones de cumplimiento, latencia o costo. Esta migración es la precondición para casi cualquier siguiente paso de transformación digital."
    },
    drivers: [
      { id: 1, title: "1. Madurez SaaS", desc: "Evolución de software clave (ERP, CRM, contabilidad) hacia la nube.", icon: "cloud_done" },
      { id: 2, title: "2. Reducción de Costos", desc: "Paso de inversiones iniciales altas (CapEx) a costos operativos escalables (OpEx).", icon: "request_quote" },
      { id: 3, title: "3. Trabajo Remoto", desc: "Necesidad de acceso seguro a la información corporativa desde cualquier lugar.", icon: "devices" },
      { id: 4, title: "4. Actualización Continua", desc: "Mantenimiento y parches de seguridad automáticos sin intervención física.", icon: "system_update" }
    ],
    implication: {
      text: "Cualquier programa de transformación digital debe asumir como punto de partida la migración o consolidación cloud. Las mipymes que mantengan archivos en Excel local y software instalado en un solo equipo enfrentarán dificultades crecientes para acceder a herramientas más avanzadas (analítica, IA, integración entre sistemas).",
      quote: "Sin infraestructura en la nube, la adopción de analítica o inteligencia artificial se vuelve inviable."
    },
    resources: [
      { id: 1, type: "Manual", format: "PDF", title: "Migración Cloud Segura para Pymes", link: "#" },
      { id: 2, type: "Checklist", format: "Link", title: "Evaluación de Preparación para Arquitecturas Híbridas", link: "#" }
    ],
    prevTrend: { title: "IA Generativa y Agéntica", slug: "ia-generativa-agentica" },
    nextTrend: { title: "Estrategia de Marketing Digital apoyada en CRM", slug: "marketing-digital-crm" }
  },

  "marketing-digital-crm": {
    id: "marketing-digital-crm",
    badgeAxis: "EJE F",
    axisName: "Tecnologías Habilitadoras",
    trendNumber: "TENDENCIA 21",
    title: "Estrategia de marketing digital apoyada en CRM como punto de entrada estructural de la mipyme",
    shortDescription: "La consolidación de la estrategia comercial y el stack CRM como la puerta de entrada más ágil y rentable a la transformación digital.",
    heroImage: "/TransformacionDigitalJIC/marketing-crm-graphic.png",
    definition: {
      text: "Para la gran mayoría de mipymes, la primera ola realmente transformadora de la transformación digital no ocurre en producción ni en finanzas, sino en la relación comercial: marketing digital y gestión de la relación con el cliente. Es el frente donde la inversión en herramientas y prácticas digitales produce retorno medible en menor tiempo y donde la curva de aprendizaje resulta más amigable para el equipo y para el decisor."
    },
    drivers: [
      { id: 1, title: "1. Clientes Digitales", desc: "Saturación de canales digitales donde el cliente demanda interacción inmediata.", icon: "forum" },
      { id: 2, title: "2. Retorno Rápido", desc: "Retorno de inversión directo y visible en ventas a corto plazo.", icon: "point_of_sale" },
      { id: 3, title: "3. Plataformas Accesibles", desc: "Costo reducido de herramientas como WhatsApp Business, Meta y CRM básicos.", icon: "add_shopping_cart" },
      { id: 4, title: "4. Acompañamiento Institucional", desc: "Programas públicos e institucionales orientados a impulsar el e-commerce.", icon: "campaign" }
    ],
    implication: {
      text: "Cualquier hoja de ruta de transformación digital para mipymes que no empiece por el frente marketing-digital + CRM operará contra la trayectoria natural de adopción. Y al revés: priorizar este frente entrega retorno temprano que financia el siguiente paso (procesos, datos, ERP).",
      quote: "El marketing digital impulsado por CRM es la puerta de entrada que financia el resto de la transformación digital."
    },
    resources: [
      { id: 1, type: "Guía", format: "PDF", title: "Implementación de CRM para Mipymes Comerciales", link: "#" },
      { id: 2, type: "Herramienta", format: "Link", title: "Diseño de Embudos de Conversión y Ventas Digitales", link: "#" }
    ],
    prevTrend: { title: "Cloud y Arquitecturas Híbridas", slug: "cloud-arquitecturas-hibridas" },
    nextTrend: { title: "Automatización Inteligente: RPA + GenAI + IoE", slug: "automatizacion-inteligente-rpa-genai" }
  },

  "automatizacion-inteligente-rpa-genai": {
    id: "automatizacion-inteligente-rpa-genai",
    badgeAxis: "EJE F",
    axisName: "Tecnologías Habilitadoras",
    trendNumber: "TENDENCIA 22",
    title: "Automatización inteligente: convergencia RPA + GenAI + Internet de Todo (IoE)",
    shortDescription: "La integración de robótica de procesos, IA generativa e IoT para liberar tiempo operativo de tareas repetitivas.",
    heroImage: "/TransformacionDigitalJIC/automatizacion-inteligente-graphic.png",
    definition: {
      text: "Es la integración progresiva de tres familias tecnológicas: automatización robótica de procesos (RPA), IA generativa (GenAI) e Internet of Everything (IoE). Cada una por separado tiene limitaciones; juntas habilitan automatizaciones que antes requerían programación a medida y equipos grandes."
    },
    drivers: [
      { id: 1, title: "1. Evolución de RPA", desc: "Superación de limitaciones de reglas fijas mediante comprensión de lenguaje.", icon: "auto_awesome" },
      { id: 2, title: "2. Captura de Datos IoE", desc: "Sensores y dispositivos capturando información en tiempo real.", icon: "sensors" },
      { id: 3, title: "3. Plataformas Low-Code", desc: "Reducción radical de barreras de entrada técnicas para programar automatizaciones.", icon: "code_off" },
      { id: 4, title: "4. Eficiencia Operativa", desc: "Liberación de horas de trabajo administrativo de bajo valor añadido.", icon: "schedule" }
    ],
    implication: {
      text: "Mipymes con flujos de trabajo repetitivos (facturación, conciliación, atención al cliente de primer nivel) son candidatos naturales a pilotos de automatización. La promesa no es despedir personal, sino liberar tiempo para tareas de mayor valor — lo que conecta con el principio rector de la Tendencia 2.",
      quote: "Automatizar flujos rutinarios busca aumentar el valor y la capacidad del talento humano, no reemplazarlo."
    },
    resources: [
      { id: 1, type: "Matriz", format: "PDF", title: "Identificación de Procesos Candidatos a Automatización", link: "#" },
      { id: 2, type: "Caso", format: "Link", title: "Automatización de Facturación con Herramientas Low-Code", link: "#" }
    ],
    prevTrend: { title: "Estrategia de Marketing Digital apoyada en CRM", slug: "marketing-digital-crm" },
    nextTrend: { title: "Gemelos Digitales y Simulación", slug: "gemelos-digitales-simulacion" }
  },

  "gemelos-digitales-simulacion": {
    id: "gemelos-digitales-simulacion",
    badgeAxis: "EJE F",
    axisName: "Tecnologías Habilitadoras",
    trendNumber: "TENDENCIA 23",
    title: "Gemelos digitales y simulación: la réplica virtual que predice antes de intervenir",
    shortDescription: "Creación de réplicas virtuales sincronizadas para predecir, simular y optimizar procesos antes de realizar cambios físicos.",
    heroImage: "/TransformacionDigitalJIC/gemelos-digitales-graphic.png",
    definition: {
      text: "Un gemelo digital (Digital Twin) es una réplica virtual de alta fidelidad de un activo, proceso o sistema físico, sincronizada en tiempo real mediante sensores, que habilita simulación, predicción y control. Su forma avanzada — el Cognitive Digital Twin — incorpora razonamiento y soporte a la decisión."
    },
    drivers: [
      { id: 1, title: "1. Madurez Sensorica", desc: "Disponibilidad de sensores IoT y capacidad de cómputo para procesar datos.", icon: "memory" },
      { id: 2, title: "2. Lógica de Simulación", desc: "Necesidad de validar escenarios e intervenciones sin arriesgar la operación real.", icon: "schema" },
      { id: 3, title: "3. Presión de Eficiencia", desc: "Búsqueda de optimización de recursos y reducción de desperdicios.", icon: "query_stats" },
      { id: 4, title: "4. Control Predictivo", desc: "Integración de IA para anticipar cuellos de botella y fallas en la planta.", icon: "view_in_ar" }
    ],
    implication: {
      text: "Para la mipyme del Oriente Antioqueño no es de adopción inmediata, pero su versión accesible — la simulación de procesos puntuales — es una puerta de entrada de bajo riesgo y define el horizonte de la lógica simular-antes-de-invertir.",
      quote: "Probar y equivocar en el entorno virtual evita costos y errores críticos en el mundo físico."
    },
    resources: [
      { id: 1, type: "Informe", format: "PDF", title: "Simulación de Procesos Productivos para Pymes Industriales", link: "#" },
      { id: 2, type: "Artículo", format: "Link", title: "Del IoT Básico al Gemelo Digital: Hoja de Ruta Gradual", link: "#" }
    ],
    prevTrend: { title: "Automatización Inteligente: RPA + GenAI + IoE", slug: "automatizacion-inteligente-rpa-genai" },
    nextTrend: { title: "Analítica de Datos e IA Industrial", slug: "analitica-datos-ia-industrial" }
  },

  "analitica-datos-ia-industrial": {
    id: "analitica-datos-ia-industrial",
    badgeAxis: "EJE F",
    axisName: "Tecnologías Habilitadoras",
    trendNumber: "TENDENCIA 24",
    title: "Analítica de datos, IA industrial y gobierno del dato: el cimiento de toda la cadena de inteligencia",
    shortDescription: "Captura, gobierno y explotación de datos operativos para fundamentar las decisiones estratégicas en evidencia.",
    heroImage: "/TransformacionDigitalJIC/analitica-datos-graphic.png",
    definition: {
      text: "Conjunto de capacidades para capturar, gobernar y explotar datos — analítica descriptiva, predictiva y prescriptiva, big data e inteligencia artificial aplicada — con el fin de soportar decisiones operativas y estratégicas basadas en evidencia."
    },
    drivers: [
      { id: 1, title: "1. Datos Industriales", desc: "Generación masiva de datos en operaciones digitales y físicas.", icon: "dataset" },
      { id: 2, title: "2. Herramientas Accesibles", desc: "Democratización y abaratamiento de plataformas de Business Intelligence (BI).", icon: "bar_chart" },
      { id: 3, title: "3. Decisiones en Tiempo Real", desc: "Exigencia de reemplazar la intuición por evidencia basada en métricas.", icon: "speed" },
      { id: 4, title: "4. Insumo para la IA", desc: "Reconocimiento de que la calidad de los datos es la condición para implementar IA.", icon: "database" }
    ],
    implication: {
      text: "La dimensión de Tecnología y datos es una de las mayores brechas del diagnóstico (n=35). Ordenar el dato y dominar la analítica básica es el habilitador de menor costo y mayor efecto palanca antes de cualquier IA avanzada.",
      quote: "Organizar y gobernar los datos de la empresa es el requisito previo a cualquier iniciativa exitosa de IA."
    },
    resources: [
      { id: 1, type: "Guía", format: "PDF", title: "Gobierno de Datos Mínimo Viable para Mipymes", link: "#" },
      { id: 2, type: "Plantilla", format: "Link", title: "Tableros de Control Operativo con Herramientas BI Accesibles", link: "#" }
    ],
    prevTrend: { title: "Gemelos Digitales y Simulación", slug: "gemelos-digitales-simulacion" },
    nextTrend: { title: "Physical AI y Robótica Colaborativa", slug: "physical-ai-robotica-colaborativa" }
  },

  "physical-ai-robotica-colaborativa": {
    id: "physical-ai-robotica-colaborativa",
    badgeAxis: "EJE F",
    axisName: "Tecnologías Habilitadoras",
    trendNumber: "TENDENCIA 25",
    title: "Physical AI: robótica colaborativa, cobots y wearables que amplifican al trabajador",
    shortDescription: "Integración de IA en sistemas físicos para aumentar la seguridad, эрgonomía y capacidad del operario en planta.",
    heroImage: "/TransformacionDigitalJIC/physical-ai-graphic.png",
    definition: {
      text: "Integración de la inteligencia artificial en sistemas físicos que perciben, deciden y actúan en el mundo real — robots colaborativos (cobots), robots de doble brazo, exoesqueletos y wearables —, diseñados para amplificar al trabajador, no para sustituirlo."
    },
    drivers: [
      { id: 1, title: "1. Cobots Seguros", desc: "Desarrollo de robótica segura que comparte espacio de trabajo sin barreras.", icon: "smart_toy" },
      { id: 2, title: "2. Modelos VLA", desc: "Modelos Vision-Language-Action que otorgan percepción y razonamiento a los robots.", icon: "visibility" },
      { id: 3, title: "3. Enfoque 5RI", desc: "Priorización de la salud, seguridad y ergonomía del operador en la industria.", icon: "health_and_safety" },
      { id: 4, title: "4. Flexibilidad de Planta", desc: "Facilidad para reprogramar cobots frente a cambios de lote o producción.", icon: "published_with_changes" }
    ],
    implication: {
      text: "Relevante para la manufactura y la agroindustria del Oriente Antioqueño. Su lectura 5RI clave: la métrica de éxito no es la mano de obra ahorrada sino el aumento de la capacidad y la seguridad del trabajador.",
      quote: "La robótica colaborativa no sustituye al trabajador: amplifica su fuerza, precisión y seguridad."
    },
    resources: [
      { id: 1, type: "Estudio", format: "PDF", title: "Adopción de Cobots en la Agroindustria y Manufactura", link: "#" },
      { id: 2, type: "Guía", format: "Link", title: "Ergonomía y Criterios 5RI en Entornos de Robótica Colaborativa", link: "#" }
    ],
    prevTrend: { title: "Analítica de Datos e IA Industrial", slug: "analitica-datos-ia-industrial" },
    nextTrend: { title: "Quinta Revolución Industrial", slug: "quinta-revolucion" }
  }
};