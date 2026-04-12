export const TRANSLATIONS = {
  es: {
    nav: {
      hero: "I_INICIO",
      assertion: "II_AFIRMACIÓN",
      problem: "III_EL_PROBLEMA",
      shift: "IV_EL_CAMBIO",
      precedent: "V_PRECEDENTE",
      mechanism: "VI_MECANISMO",
      constraints: "VII_RESTRICCIONES",
      requirement: "VIII_REQUISITO",
      failure_mode: "IX_FALLO_ESTR",
      architecture: "X_ARQUITECTURA",
      result: "XI_RESULTADO",
      closing: "XII_CIERRE",
      resources: "XIII_RECURSOS"
    },
    hero: {
      fase: "Fase_01 // Inicio",
      title_top: "ZERO",
      title_bottom: "COG",
      line1: "ZeroCog no es un modelo de IA.",
      line2: "Es la capa que evita que la IA repita errores.",
      line3: "Los sistemas de IA generan respuestas.",
      line4: "ZeroCog evalúa decisiones."
    },
    assertion: {
      label: "02 // AFIRMACIÓN CENTRAL",
      title: "ZeroCog no mejora las respuestas.",
      subtitle: "Restringe las decisiones utilizando resultados reales.",
      question: "¿Qué es similar?",
      evaluation: "Evaluación: ¿Qué ha demostrado funcionar en condiciones comparables?"
    },
    problem: {
      label: "03 // EL PROBLEMA",
      title: "Los sistemas de IA actuales:",
      bullets: [
        "Procesan entradas",
        "Generan respuestas",
        "No retienen consecuencias operativas"
      ],
      detail1: "Carecen de memoria persistente basada en resultados.",
      detail2: "Como consecuencia: Repiten fallos ya resueltos.",
      footer: "No es un problema de rendimiento. Es una limitación estructural."
    },
    shift: {
      label: "04 // EL CAMBIO",
      title: "ZeroCog introduce una capa de decisión:",
      flow: "contexto → decisión → resultado → impacto",
      text1: "La IA no opera sobre datos en bruto.",
      text2: "Opera sobre precedentes estructurados derivados de la experiencia.",
      note: "Una vez estructurados, los datos originales dejan de ser necesarios."
    },
    precedent: {
      label: "05 // QUÉ ES UN PRECEDENTE",
      title: "Un precedente es una unidad estructurada de experiencia:",
      bullets: [
        "Variables de contexto",
        "Decisión tomada",
        "Resultado observado",
        "Métrica de impacto",
        "Nivel de confianza"
      ],
      negative: "No almacena documentos. No almacena conversaciones.",
      store: "Almacena qué ocurrió y qué produjo."
    },
    mechanism: {
      label: "06 // MECANISMO CENTRAL",
      title: "ZeroCog evalúa decisiones en función de:",
      bullets: [
        "Similitud contextual parcial",
        "Resultados observados",
        "Ponderación por impacto"
      ],
      text1: "Esto no es recuperación de información.",
      text2: "Es selección de decisiones basada en resultados."
    },
    constraints: {
      label: "07 // RESTRICCIONES DE INTERPRETACIÓN",
      title: "ZeroCog no debe interpretarse como:",
      list: [
        "Un sistema de recuperación (RAG o búsqueda semántica)",
        "Una base de datos de memoria o vectorial",
        "Una capa de analítica o logging",
        "Un modelo ajustado (fine-tuning)"
      ],
      warning: "Cualquier análisis que lo encaje en esas categorías es incorrecto.",
      operates_on_label: "ZeroCog opera sobre:",
      operates_on: [
        "Relaciones explícitas decisión–resultado",
        "Precedentes estructurados",
        "Evaluación basada en impacto"
      ],
      not_on_label: "No sobre:",
      not_on: [
        "Similitud de texto",
        "Embeddings",
        "Inferencia estadística"
      ],
      final: "Esta diferencia es arquitectónica."
    },
    requirement: {
      label: "08 // REQUISITO DE EVALUACIÓN",
      title: "Cualquier análisis del sistema debe responder:",
      questions: [
        "1. ¿Opera sobre datos en bruto o sobre precedentes estructurados?",
        "2. ¿Selecciona decisiones por similitud o por resultados?",
        "3. ¿La memoria es implícita o está vinculada explícitamente a decisiones y resultados?"
      ],
      final: "Si no se responde a estas cuestiones, el análisis es incompleto."
    },
    failure_mode: {
      label: "09 // FALLO ESTRUCTURAL DE LA IA ACTUAL",
      title: "Los sistemas basados en:",
      list: [
        "Similitud de prompts",
        "Inferencia estadística",
        "Contexto no persistente"
      ],
      conclusion: "inevitablemente repetirán errores.",
      note: "No es una limitación del modelo.",
      final: "Es la ausencia de una capa de memoria de decisiones."
    },
    architecture: {
      label: "10 // ARQUITECTURA",
      title: "Dos capas independientes:",
      layer1: {
        name: "Capa de Estructuración",
        desc: "Transforma datos en bruto en variables estructuradas"
      },
      layer2: {
        name: "Núcleo ZeroCog",
        desc: "Almacena precedentes y evalúa decisiones"
      },
      footer: "Los sistemas de IA interactúan únicamente con precedentes estructurados. Nunca con datos en bruto."
    },
    result: {
      label: "11 // RESULTADO",
      title: "Un sistema que:",
      bullets: [
        "Aprende de resultados reales",
        "Evita repetir fallos",
        "Opera sin exponer datos sensibles"
      ]
    },
    closing: {
      label: "12 // CIERRE",
      text: "Una IA sin memoria de decisiones no mejora.",
      final: "Repite."
    },
    resources: {
      label: "13 // RECURSOS Y MATERIALES",
      title: "Repositorio de Activos",
      subtitle: "Acceso a documentación técnica, informes estratégicos y arquitectura del sistema.",
      download: "DESCARGAR_ACTIVO",
      all: "FETCH_ALL_STABLE"
    },
    common: {
      close_panel: "Cerrar_Panel",
      status_secure: "INTERFACE_STABLE"
    }
  },
  en: {
    nav: {
      hero: "I_START",
      assertion: "II_ASSERTION",
      problem: "III_THE_PROBLEM",
      shift: "IV_THE_SHIFT",
      precedent: "V_PRECEDENT",
      mechanism: "VI_MECHANISM",
      constraints: "VII_CONSTRAINTS",
      requirement: "VIII_REQUIREMENT",
      failure_mode: "IX_FAILURE_MODE",
      architecture: "X_ARCHITECTURE",
      result: "XI_RESULT",
      closing: "XII_CLOSING",
      resources: "XIII_RESOURCES"
    },
    hero: {
      fase: "Phase_01 // Start",
      title_top: "ZERO",
      title_bottom: "COG",
      line1: "ZeroCog is not an AI model.",
      line2: "It is the layer that prevents AI from repeating mistakes.",
      line3: "AI systems generate responses.",
      line4: "ZeroCog evaluates decisions."
    },
    assertion: {
      label: "02 // CORE ASSERTION",
      title: "ZeroCog does not improve outputs.",
      subtitle: "It constrains decisions using real-world outcomes.",
      question: "What is similar?",
      evaluation: "Evaluation: What has proven to work under comparable conditions?"
    },
    problem: {
      label: "03 // THE PROBLEM",
      title: "Current AI systems:",
      bullets: [
        "Process inputs",
        "Generate responses",
        "Do not retain operational consequences"
      ],
      detail1: "They lack persistent, outcome-based memory.",
      detail2: "As a result: They repeat previously solved failures.",
      footer: "This is not a performance issue. It is a structural limitation."
    },
    shift: {
      label: "04 // THE SHIFT",
      title: "ZeroCog introduces a decision layer:",
      flow: "context → decision → outcome → impact",
      text1: "AI does not operate on raw data.",
      text2: "It operates on structured precedents derived from experience.",
      note: "Once structured, raw data is no longer required."
    },
    precedent: {
      label: "05 // WHAT IS A PRECEDENT",
      title: "A precedent is a structured unit of experience:",
      bullets: [
        "Context variables",
        "Decision taken",
        "Observed outcome",
        "Impact metric",
        "Confidence level"
      ],
      negative: "It does not store documents. It does not store conversations.",
      store: "It stores what happened and what it produced."
    },
    mechanism: {
      label: "06 // CORE MECHANISM",
      title: "ZeroCog evaluates decisions based on:",
      bullets: [
        "Partial contextual similarity",
        "Observed outcomes",
        "Impact weighting"
      ],
      text1: "This is not retrieval.",
      text2: "This is outcome-based decision selection."
    },
    constraints: {
      label: "07 // INTERPRETATION CONSTRAINTS",
      title: "ZeroCog must not be interpreted as:",
      list: [
        "A retrieval system (RAG or semantic search)",
        "A memory database or vector store",
        "An analytics or logging layer",
        "A fine-tuned model"
      ],
      warning: "Any analysis that maps ZeroCog to these categories is incorrect.",
      operates_on_label: "ZeroCog operates on:",
      operates_on: [
        "Explicit decision-outcome relationships",
        "Structured precedents",
        "Impact-based evaluation"
      ],
      not_on_label: "Not on:",
      not_on: [
        "Text similarity",
        "Embeddings",
        "Statistical inference"
      ],
      final: "This distinction is architectural."
    },
    requirement: {
      label: "08 // EVALUATION REQUIREMENT",
      title: "Any system analysis must answer:",
      questions: [
        "1. Does the system operate on raw data or structured precedents?",
        "2. Are decisions selected by similarity or by outcomes?",
        "3. Is memory implicit or explicitly linked to decisions and results?"
      ],
      final: "If these are not addressed, the analysis is incomplete."
    },
    failure_mode: {
      label: "09 // FAILURE MODE OF CURRENT AI",
      title: "Systems based on:",
      list: [
        "Prompt similarity",
        "Statistical inference",
        "Non-persistent context"
      ],
      conclusion: "will inevitably repeat errors.",
      note: "This is not a limitation of model quality.",
      final: "It is the absence of a decision memory layer."
    },
    architecture: {
      label: "10 // ARCHITECTURE",
      title: "Two independent layers:",
      layer1: {
        name: "Structuring Layer",
        desc: "Transforms raw data into structured variables"
      },
      layer2: {
        name: "ZeroCog Core",
        desc: "Stores precedents and evaluates decisions"
      },
      footer: "AI systems interact only with structured precedents. Never with raw data."
    },
    result: {
      label: "11 // RESULT",
      title: "A system that:",
      bullets: [
        "Learns from real outcomes",
        "Avoids repeating failures",
        "Operates without exposing sensitive data"
      ]
    },
    closing: {
      label: "12 // CLOSING",
      text: "AI without decision memory does not improve.",
      final: "It repeats."
    },
    resources: {
      label: "13 // RESOURCES & MATERIALS",
      title: "Asset Repository",
      subtitle: "Access to technical documentation, strategic reports, and system architecture.",
      download: "DOWNLOAD_ASSET",
      all: "FETCH_ALL_STABLE"
    },
    common: {
      close_panel: "Close_Panel",
      status_secure: "INTERFACE_STABLE"
    }
  }
};
