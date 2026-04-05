export const TRANSLATIONS = {
  es: {
    nav: {
      hero: "I_INICIO",
      paradox: "II_TENSIÓN",
      usecases: "III_OPERATIVA",
      solution: "IV_SOLUCIÓN",
      value: "V_VALOR",
      architecture: "VI_ARQUITECTURA",
      contact: "VII_CONTACTO",
      documentation: "VIII_DOCUMENTACIÓN",
    },
    // Hero
    hero: {
      fase: "Fase_01 // Inicio",
      title_top: "ZERO",
      title_bottom: "COG",
      subtitle: "Infraestructura de memoria diseñada para permitir a la IA operar con <span class='text-[#0F2B46] italic border-b border-[#00A86B]/30'>contexto real</span> sin exponer datos ni comprometer la privacidad.",
      cta_contact: "Iniciar_Contacto",
      cta_arch: "Ver_Arquitectura",
    },
    // Tension
    tension: {
      label: "02 // TENSIÓN",
      left_title: "El límite de la <br /><span class='text-gray-400'>IA actual</span>",
      left_text: "Las IAs actuales procesan información, pero no mantienen contexto. <br /><span class='border-b border-gray-100'>Operan por sesión, no sobre memoria estructurada.</span>",
      left_bullets: [
        "El contexto desaparece al cerrar la sesión.",
        "Dependencia de infraestructuras externas.",
        "Sin memoria operativa a largo plazo."
      ],
      right_title: "El dilema de la <br /><span class='text-[#00A86B]'>IA futura</span>",
      right_text: "Cuando la IA tenga acceso continuo a información contextual, el problema deja de ser técnico. <br /><span class='border-b border-[#00A86B]/10'>Pasa a ser una cuestión de control.</span>",
      right_bullets: [
        "¿Quién es propietario de la memoria generada?",
        "¿Dónde reside realmente ese contexto?",
        "¿Se utiliza para asistir o para extraer valor del usuario?"
      ]
    },
    // Solution
    solution: {
      label: "04 // LA_SOLUCIÓN",
      title: "Arquitectura de Memoria Soberana",
      text: "Una misma memoria, dos formas de operar según el nivel de control y capacidad requerido.",
      sovereign: {
        title: "Modo Soberano",
        text: "La IA opera directamente sobre los datos dentro del entorno controlado.",
        bullets: [
          "Ejecución local.",
          "Sin transferencias externas de información sensible.",
          "Máximo control sobre datos y contexto."
        ],
        footer: "LOCAL · PRIVATE · OFFLINE-CAPABLE"
      },
      external: {
        title: "Modo Externo",
        text: "Uso de modelos avanzados manteniendo separación entre contexto y datos reales.",
        bullets: [
          "Procesos de anonimización antes de cualquier transferencia.",
          "Compatibilidad con distintos proveedores de IA.",
          "Escalabilidad bajo demanda."
        ],
        footer: "ANONYMIZED · REMOTE · MODEL-AGNOSTIC"
      }
    },
    // Operativa
    operativa: {
      label: "03 // OPERATIVA",
      title: "¿Qué permite esta infraestructura?",
      personal: {
        title: "Entorno Personal",
        text: "Memoria persistente diseñada para permitir a la IA operar con tu contexto.",
        bullets: ["Recuperación de información personal.", "Asistencia basada en historial.", "Control sobre datos."]
      },
      smb: {
        title: "Entorno PyME",
        text: "IA capaz de responder sobre tu propio negocio.",
        bullets: ["Consulta sobre operaciones.", "Acceso estructurado a documentos.", "Respuestas con contexto real."]
      },
      enterprise: {
        title: "Enterprise",
        text: "Capa de memoria diseñada para integrarse con sistemas existentes.",
        bullets: ["Control de acceso.", "Compatibilidad total.", "Trazabilidad del uso."]
      }
    },
    // Value
    value: {
      label: "05 // VALOR",
      title: "Ventaja <br /><span class='text-[#00A86B] font-bold'>Estructural</span>",
      bullets: [
        { h: "Control de datos por diseño", p: "El dato no abandona su dominio sin control explícito." },
        { h: "Continuidad operativa", p: "Contexto estructurado a largo plazo." },
        { h: "Desacoplamiento del modelo", p: "La inteligencia es intercambiable. La memoria permanece." }
      ]
    },
    // Contact
    contact: {
      label: "06 // CONTACTO",
      status_dev: "STATUS_ En desarrollo",
      status_docs: "Docs Available",
      status_access: "access controlled",
      title: "Acceso y contacto",
      text: "Documentación disponible bajo acceso controlado. Solicita acceso si quieres comprender la arquitectura en más detalle.",
      ethics: "Si ves el impacto económico y el desafío ético, hablemos.",
      cta: "Ver_Documentación",
      malaga: "Malaga_esp"
    },
    // Login
    login: {
      title: "Protocolo_Acceso",
      subtitle: "Investor Portal v3.0 // SECURE",
      email_label: "Email_Identidad",
      pass_label: "Clave_Encriptada",
      placeholder_email: "nombre@empresa.com",
      btn_login: "INICIAR_SESIÓN",
      error: "Credenciales no válidas. Protocolo denegado.",
      back: "← Volver a la Red Pública",
      footer_secure: "SECURE_CHANNEL_ACTIVE",
      footer_sync: "Sync_Ready"
    },
    // Common
    common: {
      close_panel: "Cerrar_Panel"
    },
    // Indicators
    indicators: {
      alignment: "PROTOCOLO_ALINEACIÓN",
      sector: "SECTOR_ALINEADO"
    }
  },
  en: {
    // Navigation
    nav: {
      hero: "I_START",
      paradox: "II_TENSION",
      usecases: "III_OPERATIONS",
      solution: "IV_SOLUTION",
      value: "V_VALUE",
      architecture: "VI_ARCHITECTURE",
      contact: "VII_CONTACT",
      documentation: "VIII_DOCUMENTATION",
    },
    // Common
    common: {
      close_panel: "Close_Panel"
    },
    // Hero
    hero: {
      fase: "Phase_01 // Start",
      title_top: "ZERO",
      title_bottom: "COG",
      subtitle: "Memory infrastructure designed to allow AI to operate with <span class='text-[#0F2B46] italic border-b border-[#00A86B]/30'>real context</span> without exposing data or compromising privacy.",
      cta_contact: "Start_Contact",
      cta_arch: "View_Architecture",
    },
    // Tension
    tension: {
      label: "02 // TENSION",
      left_title: "The limit of <br /><span class='text-gray-400'>Current AI</span>",
      left_text: "Current AIs process information, but they don't maintain context. <br /><span class='border-b border-gray-100'>They operate per session, not over structured memory.</span>",
      left_bullets: [
        "Context disappears when closing the session.",
        "Dependence on external infrastructures.",
        "No long-term operational memory."
      ],
      right_title: "The future <br /><span class='text-[#00A86B]'>AI dilemma</span>",
      right_text: "When AI has continuous access to contextual information, the problem stops being technical. <br /><span class='border-b border-[#00A86B]/10'>It becomes a matter of control.</span>",
      right_bullets: [
        "Who owns the generated memory?",
        "Where does that context actually reside?",
        "Is it used to assist or to extract value from the user?"
      ]
    },
    // Solution
    solution: {
      label: "04 // THE_SOLUTION",
      title: "Sovereign Memory Architecture",
      text: "One memory, two ways to operate based on the level of control and capacity required.",
      sovereign: {
        title: "Sovereign Mode",
        text: "The AI operates directly on the data within the controlled environment.",
        bullets: [
          "Local execution.",
          "No external transfers of sensitive information.",
          "Maximum control over data and context."
        ],
        footer: "LOCAL · PRIVATE · OFFLINE-CAPABLE"
      },
      external: {
        title: "External Mode",
        text: "Use of advanced models maintaining separation between context and real data.",
        bullets: [
          "Anonymization processes before any transfer.",
          "Compatibility with different AI providers.",
          "Scalability on demand."
        ],
        footer: "ANONYMIZED · REMOTE · MODEL-AGNOSTIC"
      }
    },
    // Operativa
    operativa: {
      label: "03 // OPERATIONS",
      title: "What does this infrastructure allow?",
      personal: {
        title: "Personal Environment",
        text: "Persistent memory designed to allow AI to operate with your context.",
        bullets: ["Personal information recovery.", "History-based assistance.", "Control over data."]
      },
      smb: {
        title: "SMB Environment",
        text: "AI capable of answering about your own business.",
        bullets: ["Query about operations.", "Structured access to documents.", "Responses with real context."]
      },
      enterprise: {
        title: "Enterprise",
        text: "Memory layer designed to integrate with existing systems.",
        bullets: ["Access control.", "Full compatibility.", "Usage traceability."]
      }
    },
    // Value
    value: {
      label: "05 // VALUE",
      title: "Structural <br /><span class='text-[#00A86B] font-bold'>Advantage</span>",
      bullets: [
        { h: "Data control by design", p: "The data does not leave its domain without explicit control." },
        { h: "Operational continuity", p: "Long-term structured context." },
        { h: "Model decoupling", p: "Intelligence is interchangeable. Memory remains." }
      ]
    },
    // Contact
    contact: {
      label: "06 // CONTACT",
      status_dev: "STATUS_ In development",
      status_docs: "Docs Available",
      status_access: "access controlled",
      title: "Access and Contact",
      text: "Documentation available under controlled access. Request access if you want to understand the architecture in more detail.",
      ethics: "If you see the economic impact and the ethical challenge, let's talk.",
      cta: "View_Documentation",
      malaga: "Malaga_esp"
    },
    // Login
    login: {
      title: "Access_Protocol",
      subtitle: "Investor Portal v3.0 // SECURE",
      email_label: "Identity_Email",
      pass_label: "Encrypted_Key",
      placeholder_email: "name@company.com",
      btn_login: "LOG_IN",
      error: "Invalid credentials. Protocol denied.",
      back: "← Back to Public Network",
      footer_secure: "SECURE_CHANNEL_ACTIVE",
      footer_sync: "Sync_Ready"
    },
    // Indicators
    indicators: {
      alignment: "ALIGNMENT_PROTOCOL",
      sector: "ALIGNED_SECTOR"
    }
  }
};
