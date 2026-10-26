import { PULSE_APP_NAME } from '../../constants'
import type { PulseMessages } from './types'

export const esMessages: PulseMessages = {
  languageLabel: 'Idioma de la página',
  video: {
    ariaLabel: `Presentación del producto ${PULSE_APP_NAME}`,
    playLabel: 'Reproducir presentación',
    unsupported: 'Tu navegador no admite vídeo incrustado.',
  },
  landing: {
    metaTitle: `${PULSE_APP_NAME} — Temporizador de enfoque para iPhone y Mac`,
    metaDescription: `${PULSE_APP_NAME} es un temporizador Pomodoro tranquilo para iPhone y Mac con Focus History, Daily Focus Goals, inicio de sesión con Apple y Google, y sincronización offline-first entre tus dispositivos.`,
    heroImageAlt: `Temporizador de enfoque e historial semanal de ${PULSE_APP_NAME}`,
    backToProjects: 'Volver a proyectos',
    availableOnAppStore: 'Disponible en el App Store',
    availabilityLine: 'iOS 17+ · macOS 14.6+',
    eyebrow: 'Temporizador de enfoque para iPhone y Mac',
    tagline: 'Un temporizador Pomodoro suave que te ayuda a concentrarte — en el iPhone y en la barra de menús del Mac.',
    description: `Inicia una sesión de enfoque, toma un descanso y lleva tu historial contigo. Inicia sesión con Apple o Google para que Daily Focus Goals, Focus History y las preferencias sincronizadas sigan vinculadas a tu cuenta en iPhone y Mac — mientras el temporizador sigue funcionando sin conexión.`,
    downloadCta: 'Descargar en el App Store',
    watchDemo: 'Verlo en acción',
    supportCta: 'Soporte',
    stats: {
      platformLabel: 'Plataformas',
      platformValue: 'iPhone y Mac',
      languagesLabel: 'Idiomas',
      languagesValue: '12 idiomas',
      dataLabel: 'Sincronización',
      dataValue: 'Offline-first',
      builtWithLabel: 'Creado con',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Una forma más silenciosa de concentrarse',
      title: 'Tu temporizador está cuando lo necesitas — y desaparece cuando no.',
      description: `En Mac, abre ${PULSE_APP_NAME} desde la barra de menús, elige una sesión y cierra el popover. En iPhone, inicia Enfoque desde Inicio y continúa con Live Activities en dispositivos compatibles. El temporizador sigue mientras tú trabajas.`,
      caption:
        'Temporizadores de enfoque y descanso, Daily Focus Goals, Focus History, seguimiento de rachas, localización en 12 idiomas y alertas de finalización opcionales.',
    },
    rhythm: {
      eyebrow: 'Un ritmo que controlas tú',
      title: 'Enfoque, pausa, recuperación, repetición.',
      description: `${PULSE_APP_NAME} sugiere qué viene después, pero nunca inicia una sesión por ti. Cada duración se puede ajustar a tu día.`,
    },
    featureShowcases: [
      {
        title: 'Enfoque',
        badge: '1–120 min',
        description:
          'La cuenta atrás avanza en silencio mientras trabajas. Pausa, reinicia o salta — mantienes el control en iPhone y Mac.',
        imageFile: 'focus-running.png',
        alt: `Sesión de enfoque de ${PULSE_APP_NAME} con controles de pausa y cuenta atrás`,
      },
      {
        title: 'Barra de menús',
        badge: 'Mac',
        description:
          'En Mac, muestra u oculta el tiempo restante en la barra de menús. El elemento de estado de ancho fijo se mantiene en su sitio sin desplazar el popover, hasta 120:00.',
        imageFile: 'menubar.png',
        alt: `Cuenta atrás de ${PULSE_APP_NAME} en la barra de menús de macOS`,
      },
      {
        title: 'Personalización',
        badge: 'Tus reglas',
        description:
          'Duraciones flexibles, Daily Focus Goals, sonidos y animaciones de finalización, 12 idiomas de interfaz y preferencias de apariencia.',
        imageFile: 'settings.png',
        alt: `Ajustes de ${PULSE_APP_NAME} para duraciones, alertas de finalización, idioma y objetivos`,
      },
    ],
    history: {
      eyebrow: 'Progreso sin presión',
      title: 'Mira cómo se acumula el trabajo.',
      description:
        'Abre Focus History para revisar totales y rachas. Si has iniciado sesión, el historial puede sincronizarse entre tu iPhone y tu Mac para que el progreso te acompañe.',
      items: ['Tiempo total de enfoque', 'Sesiones completadas', 'Racha actual', 'Mejor racha', 'Daily Focus Goals'],
      imageAlt: `Historial de enfoque semanal de ${PULSE_APP_NAME} con sesiones, horas de enfoque y racha`,
    },
    feedback: {
      eyebrow: 'Feedback suave, a tu manera',
      title: 'Haz que terminar se sienta gratificante.',
      description: `Elige entre seis sonidos de finalización calmados y seis celebraciones con animales, o desactiva cualquiera de ellos. ${PULSE_APP_NAME} muestra el mensaje adecuado cuando termina una sesión de Enfoque, Descanso corto o Descanso largo.`,
      items: [
        'Título y subtítulo de finalización según la sesión',
        'Interfaz en 12 idiomas con el idioma del sistema por defecto',
        'Preferencias de idioma y apariencia en cada dispositivo',
        'Recordatorios de motivación opcionales en iPhone',
      ],
      settingsImageAlt: `Ajustes de ${PULSE_APP_NAME} para duraciones, idioma, sonidos de finalización y objetivos`,
      celebrationImageAlt: `Animación de celebración del conejo de ${PULSE_APP_NAME} al completar una sesión`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Mono', 'Koala', 'Gato', 'Zorro', 'Panda', 'Conejo'],
    },
    native: {
      eyebrow: 'Nativo por diseño',
      title: 'Hecho para sentirse como en casa en dispositivos Apple.',
      description: `SwiftUI, AppKit y las convenciones del sistema mantienen ${PULSE_APP_NAME} rápido y familiar — con etiquetas VoiceOver y compatibilidad con Reduce Motion en toda la app.`,
      features: [
        {
          title: 'Barra de menús en Mac e Inicio en iPhone',
          description: 'Un compañero discreto en la barra de menús en Mac y una experiencia de Inicio concentrada en iPhone.',
        },
        {
          title: 'Se mantiene preciso',
          description:
            'Las sesiones siguen siendo correctas tras el reposo, el despertar y los reinicios; el historial se registra en el plazo real.',
        },
        {
          title: 'Sincronización offline-first',
          description:
            'Sigue concentrándote sin conexión. Cuando vuelvas a estar en línea, los cambios con sesión iniciada se sincronizan con tu cuenta.',
        },
        {
          title: 'Habla tu idioma',
          description:
            'Interfaz completa en 12 idiomas con el idioma del sistema por defecto y cambio manual en Ajustes.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privado por diseño',
      title: 'Tu enfoque sigue siendo tuyo.',
      description: `${PULSE_APP_NAME} usa una cuenta para que el historial pueda sincronizarse entre tus dispositivos. Solo guardamos lo que la sincronización necesita, nunca vendemos tus datos y mantenemos la analítica separada de tu Focus History.`,
      items: [
        'Inicio de sesión con Apple o Google',
        'Enfoque offline-first en cada dispositivo',
        'Sincronización en la nube para historial y preferencias sincronizadas',
        'Sin redes publicitarias',
        'Elimina tu cuenta cuando quieras en Ajustes',
      ],
    },
    closing: {
      title: 'Haz espacio para el trabajo concentrado.',
      description: `Consigue ${PULSE_APP_NAME} en el App Store para iPhone y Mac, o consulta la política de privacidad y la página de soporte si necesitas ayuda.`,
      getSupport: 'Obtener soporte',
      privacy: 'Privacidad',
    },
  },
  support: {
    metaTitle: `Soporte de ${PULSE_APP_NAME}`,
    metaDescription: `Soporte, preguntas frecuentes y ayuda con la cuenta de ${PULSE_APP_NAME} en iPhone y Mac — Pomodoro Pro, compras, Focus Protection, inicio de sesión, sincronización y eliminación de cuenta.`,
    title: `Soporte de ${PULSE_APP_NAME}`,
    intro: `${PULSE_APP_NAME} es un temporizador Pomodoro tranquilo para iPhone y Mac. Inicia sesión con Apple o Google para sincronizar Focus History entre tus dispositivos. En iPhone, Pomodoro Pro opcional desbloquea Focus Protection, etiquetas personalizadas y Tag Insights.`,
    gettingStarted: {
      title: 'Primeros pasos',
      items: [
        {
          question: '¿Cómo inicio una sesión de enfoque?',
          answer:
            'En Mac, haz clic en el icono de la app en la barra de menús, elige Enfoque, Descanso corto o Descanso largo y pulsa Iniciar. En iPhone, abre la app, elige una sesión en Inicio y pulsa Iniciar. Puedes salir de la app mientras el temporizador está en marcha.',
        },
        {
          question: '¿Cómo cambio las duraciones de enfoque y descanso?',
          answer:
            'Abre Ajustes y modifica las duraciones de Enfoque, Descanso corto y Descanso largo. También puedes elegir un ritmo predefinido y ajustar los minutos.',
        },
        {
          question: '¿Cómo configuro Daily Focus Goals?',
          answer:
            'En Ajustes, indica cuántas sesiones de Enfoque quieres cada día. El progreso aparece en Inicio y en Focus History.',
        },
        {
          question: '¿Cómo veo Focus History?',
          answer:
            'Abre Focus History desde la app (en Mac, desde el popover o el menú de estado). Verás totales, rachas y progreso semanal.',
        },
        {
          question: '¿Cómo cambio el idioma y la apariencia?',
          answer:
            'En Ajustes, elige Idioma (Sistema o un idioma compatible) y Apariencia (Sistema, Claro u Oscuro). Estas preferencias permanecen en cada dispositivo y no se sincronizan.',
        },
      ],
    },
    accounts: {
      title: 'Cuentas',
      items: [
        {
          question: '¿Por qué es obligatorio iniciar sesión?',
          answer:
            'Una cuenta permite que Focus History, Daily Focus Goals y las preferencias sincronizadas te sigan en iPhone y Mac. Las instalaciones nuevas piden iniciar sesión antes de usar el temporizador. Los dispositivos que actualizan desde versiones antiguas pueden seguir usando el historial local hasta que inicies sesión. Las compras de Pomodoro Pro también permanecen en tu cuenta con sesión iniciada.',
        },
        {
          question: '¿Cómo inicio sesión con Apple o Google?',
          answer:
            'En la pantalla de inicio de sesión, elige Continuar con Apple o Continuar con Google y completa el flujo del proveedor. Apple puede ofrecer Hide My Email.',
        },
        {
          question: '¿Cómo cierro sesión?',
          answer:
            'Abre Ajustes → Cuenta → Cerrar sesión. Si hay cambios que aún no se han sincronizado, la app puede pedirte que sincronices primero o que cierres sesión de todos modos. Cerrar sesión no elimina tu cuenta.',
        },
        {
          question: '¿Cómo vuelvo a iniciar sesión?',
          answer:
            'Usa el mismo método de Apple o Google en la pantalla de inicio de sesión. Tu historial en la nube se restaura para esa cuenta en el dispositivo.',
        },
        {
          question: '¿Qué pasa si uso otra cuenta?',
          answer:
            'Cada cuenta tiene su propio historial. Iniciar sesión con otra cuenta no fusiona historiales distintos. Elige con cuidado antes de confirmar una reclamación de historial en un dispositivo que ya tiene sesiones locales.',
        },
        {
          question: '¿Puedo vincular Apple y Google a la misma cuenta?',
          answer:
            'Sí. En Ajustes → Cuenta puedes vincular el otro método de inicio de sesión si no lo usa ya otra cuenta.',
        },
      ],
    },
    cloudSync: {
      title: 'Sincronización en la nube',
      items: [
        {
          question: '¿Qué se sincroniza entre dispositivos?',
          answer:
            'Historial de sesiones de enfoque y descanso (incluida la etiqueta que elegiste), las etiquetas que creas, registros de Daily Focus Goal, datos de cuenta relacionados con rachas y preferencias sincronizadas como duraciones de sesión, objetivo diario, sonido, animaciones, sonido de finalización y animal de celebración.',
        },
        {
          question: '¿Qué ocurre sin internet?',
          answer:
            'Después de iniciar sesión, puedes seguir usando el temporizador sin conexión. Las sesiones y cambios nuevos permanecen en el dispositivo hasta que haya conexión.',
        },
        {
          question: '¿Qué ocurre cuando vuelvo a estar en línea?',
          answer:
            'La app sincroniza los cambios pendientes con tu cuenta. La sincronización es offline-first y acaba siendo coherente — no es colaboración en tiempo real instantánea.',
        },
        {
          question: '¿Cómo uso la misma cuenta en iPhone y Mac?',
          answer:
            'Instala la app en ambos dispositivos e inicia sesión con la misma cuenta de Apple o Google. Cuando termine la restauración, Focus History puede aparecer en los dos.',
        },
        {
          question: '¿Y si falta historial?',
          answer:
            'Confirma que has iniciado sesión con la misma cuenta, espera a que termine la restauración o sincronización y revisa Focus History de nuevo. Si iniciaste sesión con otra cuenta, verás el historial de esa cuenta.',
        },
      ],
    },
    migration: {
      title: 'Actualizar desde una versión anterior',
      items: [
        {
          question: '¿Qué pasa con mi historial local existente?',
          answer:
            'El historial local existente no se elimina en silencio. Tras iniciar sesión, la app pregunta antes de añadir ese historial a tu cuenta.',
        },
        {
          question: '¿Cómo reclamo mi historial?',
          answer:
            'Inicia sesión en la cuenta que debe ser dueña del historial, revisa la pantalla Añadir tu historial y elige Añadir a esta cuenta. Usa otra cuenta si la mostrada es incorrecta. Las sesiones no se pueden mover a otra cuenta más adelante.',
        },
        {
          question: '¿Qué pasa si los ajustes del dispositivo y de la cuenta difieren?',
          answer:
            'La app puede preguntar si conservas los ajustes de este dispositivo o los de la cuenta. Idioma, apariencia, notificaciones y recordatorios de motivación permanecen locales en el dispositivo.',
        },
      ],
    },
    notifications: {
      title: 'Notificaciones',
      items: [
        {
          question: '¿Cómo activo las notificaciones en iPhone?',
          answer:
            'Abre Ajustes → Notificaciones y elige Activar, o abre Ajustes del sistema si el permiso se denegó antes.',
        },
        {
          question: '¿Cómo funcionan los recordatorios de motivación?',
          answer:
            'En iPhone, abre Ajustes → Recordatorios de motivación y actívalos después de permitir notificaciones. Puedes pausarlos o definir horas silenciosas. Son opcionales y vienen desactivados por defecto.',
        },
        {
          question: '¿Qué pasa si las notificaciones están desactivadas?',
          answer:
            'Las alertas de fin de sesión y los recordatorios de motivación necesitan permiso de notificaciones. Usa Ajustes → Notificaciones → Abrir Ajustes para activarlas en Ajustes de iOS.',
        },
        {
          question: '¿Cómo funcionan Live Activities?',
          answer:
            'En iPhone compatibles, una Live Activity opcional puede mostrar una sesión activa en la pantalla de bloqueo y la Dynamic Island. Se solicita permiso cuando activas las funciones relacionadas.',
        },
      ],
    },
    pomodoroPro: {
      title: 'Pomodoro Pro',
      items: [
        {
          question: '¿Qué es Pomodoro Pro?',
          answer:
            'Pomodoro Pro es una compra dentro de la app opcional en iPhone. Desbloquea Focus Protection, etiquetas personalizadas (tus propios nombres y colores) y Tag Insights (tiempo de enfoque por etiqueta en semana y mes). El temporizador, las etiquetas integradas, Focus History y la sincronización siguen disponibles sin Pro.',
        },
        {
          question: '¿Qué opciones de compra hay?',
          answer:
            'Pomodoro Pro se ofrece como suscripción Mensual, suscripción Anual o compra única Lifetime. Las suscripciones se renuevan automáticamente salvo que canceles al menos 24 horas antes del final del periodo actual. Lifetime se cobra una vez y no es una suscripción.',
        },
        {
          question: '¿Dónde compro o veo Pomodoro Pro?',
          answer:
            'En iPhone, abre Ajustes → Pomodoro Pro o toca el chip de protección en Inicio. Debes tener sesión iniciada. Pro permanece en tu cuenta en cada dispositivo donde inicies sesión.',
        },
        {
          question: '¿Cómo restauro las compras?',
          answer:
            'Usa Restaurar compras en el paywall o en Ajustes → Pomodoro Pro. Las compras hechas con la misma cuenta de Apple pasan a la cuenta en la que tienes sesión. Si no se encuentra nada, confirma que usas la cuenta de Apple que compró Pro e inténtalo de nuevo en línea.',
        },
      ],
    },
    purchases: {
      title: 'Suscripciones y compras',
      items: [
        {
          question: '¿Cómo gestiono o cancelo una suscripción?',
          answer:
            'Las suscripciones las factura Apple. En iPhone, abre Ajustes → Pomodoro Pro → Gestionar suscripción, o ve a Ajustes → [tu nombre] → Suscripciones y selecciona la app. Cancela al menos 24 horas antes de la renovación para evitar el siguiente cargo. Eliminar la app o tu cuenta de Pomodoro no cancela una suscripción.',
        },
        {
          question: '¿Cómo solicito un reembolso?',
          answer:
            'Los reembolsos los gestiona Apple. Visita reportaproblem.apple.com, inicia sesión con la cuenta de Apple usada para la compra, encuentra la transacción y envía una solicitud de reembolso. No podemos procesar reembolsos del App Store nosotros mismos.',
        },
        {
          question: '¿Qué pasa si una compra falla o Pro no se desbloquea?',
          answer:
            'Mantén la sesión iniciada, comprueba la conexión de red e inténtalo de nuevo. Si el pago está pendiente (por ejemplo Pedir para comprar), Pro se desbloquea tras la aprobación. Si ya pagaste, usa Restaurar compras. Si hay problemas de pago en una suscripción activa, actualiza tu método de pago en los ajustes del App Store.',
        },
        {
          question: '¿Qué pasa si compro Lifetime con una suscripción activa?',
          answer:
            'Lifetime desbloquea Pro de forma permanente, pero una suscripción existente no se cancela automáticamente. Desactiva la renovación automática en los ajustes de suscripción del App Store para no volver a cobrarse.',
        },
      ],
    },
    focusProtection: {
      title: 'Focus Protection',
      items: [
        {
          question: '¿Qué es Focus Protection?',
          answer:
            'Focus Protection es una función de Pomodoro Pro en iPhone. Usa las API de Screen Time de Apple para bloquear las apps, categorías o sitios web que elijas mientras corre una sesión de Enfoque. Los descansos nunca se bloquean. Al terminar la sesión, las apps bloqueadas se desbloquean solas.',
        },
        {
          question: '¿Cómo la configuro?',
          answer:
            'Con Pro activo, toca el chip Focus Protection en Inicio (o ábrelo desde Ajustes). Permite el acceso a Screen Time cuando se pida, elige qué bloquear y activa Focus Protection. Inicia una sesión de Enfoque para aplicar los escudos.',
        },
        {
          question: '¿Cómo la desactivo o desbloqueo apps?',
          answer:
            'Abre la hoja Focus Protection y elige Desactivar ahora, o desactiva la función. Tras terminar una sesión también puedes usar Desbloquear apps en la pantalla de escudo. Para quitar por completo el acceso Screen Time de la app, ve a Ajustes de iOS → Screen Time → Apps con acceso a Screen Time.',
        },
        {
          question: '¿Qué pasa si Focus Protection no funciona?',
          answer:
            'Confirma que Pro está activo, que el acceso a Screen Time está permitido y que seleccionaste apps o categorías para bloquear. Focus Protection solo aplica durante sesiones de Enfoque, no en descansos. Si revocaste el acceso en Ajustes del sistema, abre la app y vuelve a permitirlo. Reiniciar el iPhone puede ayudar tras un cambio de permiso.',
        },
      ],
    },
    accountPrivacy: {
      title: 'Cuenta y privacidad',
      items: [
        {
          question: '¿Cómo elimino mi cuenta?',
          answer:
            'Inicia sesión, abre Ajustes → Cuenta → Eliminar cuenta y confirma. Tu cuenta y el historial de enfoque sincronizado se eliminan permanentemente de nuestra base de datos activa. No se puede deshacer. La eliminación requiere conexión de red. Eliminar tu cuenta no cancela una suscripción del App Store; gestiónala en los ajustes del App Store.',
        },
        {
          question: '¿Qué afecta la eliminación de la cuenta?',
          answer:
            'Se eliminan los datos en la nube sincronizados de esa cuenta, se revoca la autorización de Sign in with Apple cuando esté almacenada, se solicita eliminar el registro de compra vinculado a tu cuenta en nuestro proveedor de compras, y se quitan los datos de la cuenta del dispositivo donde eliminas. Las copias locales en otros dispositivos ya no pueden sincronizarse; elimina la app o bórralas allí si hace falta. Las copias de seguridad del proveedor pueden conservar datos eliminados durante un periodo limitado de recuperación. Apple conserva sus propios registros de transacciones del App Store.',
        },
        {
          question: '¿Cómo exporto mis datos?',
          answer:
            'Ajustes → Cuenta → Exportar mis datos guarda un archivo JSON con sesiones, objetivos diarios, ajustes sincronizados y perfil de cuenta. Los datos locales no reclamados también se pueden exportar desde la pantalla de inicio de sesión.',
        },
        {
          question: '¿Dónde está la política de privacidad?',
          answer:
            'Abre la política de privacidad en el sitio web del producto o usa el enlace de privacidad en las páginas de producto de este sitio.',
        },
      ],
    },
    requirements: {
      title: 'Requisitos',
      body: 'iPhone: iOS 17 o posterior. Mac: macOS 14.6 o posterior. Las compras de Pomodoro Pro y Focus Protection están disponibles en iPhone.',
    },
    contact: {
      title: 'Contacto',
      body: 'Para ayuda, comentarios o informes de errores:',
    },
    privacyPolicyLink: 'Política de privacidad',
  },
  privacy: {
    metaTitle: `Política de privacidad de ${PULSE_APP_NAME}`,
    metaDescription: `Política de privacidad de ${PULSE_APP_NAME}: inicio de sesión con Apple y Google, sincronización en la nube, compras Pomodoro Pro vía RevenueCat, Focus Protection, analítica y eliminación de cuenta en Mac e iPhone.`,
    title: 'Política de privacidad',
    subtitle: `${PULSE_APP_NAME} — Temporizador Pomodoro para Mac e iPhone`,
    lastUpdated: 'Última actualización: 26 de octubre de 2026',
    summary: {
      title: 'Resumen',
      body: `Cuando inicias sesión con Apple o Google, tu cuenta mantiene sincronizados entre Mac e iPhone tu historial de enfoque, objetivos diarios y ajustes del temporizador. Solo almacenamos lo que la app necesita para ello: tu dirección de correo electrónico, un identificador de cuenta y los datos de enfoque que creas. Nunca los vendemos, no los usamos para publicidad ni los compartimos con nuestro proveedor de analítica. Si compras Pomodoro Pro en iPhone, nuestro proveedor de compras RevenueCat conserva tu historial de compras vinculado a tu cuenta para que Pro funcione en cada dispositivo donde inicies sesión. Las elecciones de apps de Focus Protection nunca salen de tu iPhone. Puedes exportar tus datos o eliminar tu cuenta en cualquier momento desde Ajustes. Por separado, la app puede enviar analítica de uso anónima y respetuosa con la privacidad para mejorar los flujos de enfoque.`,
    },
    localData: {
      title: 'Datos almacenados en tu dispositivo',
      body: 'Tus ajustes del temporizador, preferencias de sesión e historial de enfoque se guardan localmente en tu Mac o iPhone con el almacenamiento estándar del sistema, para que el temporizador siga funcionando sin conexión. Cada cuenta iniciada en un dispositivo tiene su propio almacenamiento local. Tu sesión de inicio se guarda en el llavero del sistema. Idioma, apariencia, inicio al iniciar sesión, notificaciones y recordatorios de motivación permanecen en cada dispositivo y no se sincronizan. El contenido del historial de enfoque no se sube a nuestro proveedor de analítica.',
      migrationSafety:
        'Cuando inicias sesión por primera vez en un dispositivo que ya tiene historial de enfoque, la app pregunta antes de mover ese historial a tu cuenta. Hasta que el traslado se confirme en nuestros servidores, más 90 días, la app conserva la copia local anterior y un archivo de copia de seguridad local en el dispositivo como red de seguridad, y luego los elimina automáticamente.',
    },
    accountAndSync: {
      title: 'Tu cuenta y datos sincronizados',
      intro: 'Si inicias sesión, tratamos:',
      items: [
        'Información de contacto: la dirección de correo compartida por Sign in with Apple (puede ser una dirección de retransmisión privada mediante Hide My Email) o Google. No solicitamos tu nombre.',
        'Identificadores: un ID de cuenta creado al iniciar sesión y un ID aleatorio por instalación, usados solo para sincronizar e identificar qué dispositivo hizo un cambio.',
        'Datos de enfoque: sesiones de enfoque y descanso completadas y eliminadas (horas, duraciones, día local y zona horaria, y la etiqueta que elegiste), las etiquetas que creas (nombre y color), objetivos diarios, tu mejor racha y ajustes sincronizados (duraciones de sesión, objetivo diario, sonido, animaciones, sonido de finalización, animal de celebración).',
      ],
      closing:
        'Estos datos se usan solo para sincronización, historial y funciones de cuenta. Están vinculados a tu cuenta, no se usan para seguimiento y no se comparten con terceros salvo los encargados del tratamiento indicados abajo.',
    },
    processors: {
      title: 'Encargados del tratamiento y ubicación',
      bodyBeforeSupabase: 'Los datos de cuenta y sincronización se almacenan con',
      bodyAfterSupabase:
        ' (base de datos y autenticación) en la Unión Europea. El inicio de sesión lo gestiona',
      orWord: 'o',
      bodyAfterProviders:
        ', según la opción que elijas. Las compras de Pomodoro Pro se gestionan con',
      bodyAfterRevenueCat:
        ' (consulta Compras más abajo). Los datos se cifran en tránsito y el acceso está restringido para que cada cuenta solo pueda leer sus propios datos.',
    },
    purchases: {
      title: 'Compras (iPhone)',
      bodyBeforeRevenueCat:
        'Pomodoro Pro se vende a través del App Store; Apple gestiona el pago y nosotros nunca vemos tus datos de pago. Para desbloquear Pro en cada dispositivo donde inicies sesión, la app comparte tu ID de cuenta con',
      bodyAfterRevenueCat:
        ', que conserva tu historial de compras (productos comprados, fechas de compra y renovación, y estado de suscripción) vinculado a ese ID. Estos datos se usan solo para conceder y restaurar el acceso Pro, no se usan para seguimiento y no se comparten con nuestro proveedor de analítica. Pro requiere una cuenta con sesión iniciada; no se envía nada a RevenueCat antes de que inicies sesión.',
    },
    focusProtection: {
      title: 'Focus Protection (iPhone)',
      body: 'Focus Protection usa el framework Screen Time de Apple (Family Controls) para bloquear las apps, categorías y sitios web que elijas mientras corre una sesión de enfoque. Apple solo da a la app tokens opacos de tus elecciones: no podemos ver qué apps o sitios elegiste, cómo los usas ni otros datos de Screen Time. Tus elecciones permanecen en ese iPhone, nunca se suben ni sincronizan, y no se envían a nuestro proveedor de analítica. Puedes desactivar Focus Protection en la app en cualquier momento, o quitar el acceso de la app en Ajustes → Screen Time → Apps con acceso a Screen Time.',
    },
    retention: {
      title: 'Conservación, copias de seguridad y eliminación',
      items: [
        'Tus datos sincronizados se conservan mientras exista tu cuenta.',
        'Eliminar cuenta (Ajustes → Cuenta → Eliminar cuenta) elimina permanentemente tu cuenta y todos los datos sincronizados de nuestra base de datos activa, revoca la autorización de Sign in with Apple de la app cuando esté almacenada, pide a RevenueCat que elimine el registro de compra vinculado a tu cuenta y quita los datos de la cuenta del dispositivo donde eliminas. Las copias locales en otros dispositivos ya no pueden sincronizarse y permanecen allí hasta que elimines la app en esos dispositivos o las quites desde la pantalla de inicio de sesión cuando se ofrezca.',
        'Nuestro proveedor de base de datos conserva copias de seguridad diarias durante 7 días. Los datos eliminados pueden permanecer en esas copias hasta que caduquen; solo se usan para recuperación ante desastres. También podemos conservar una copia semanal cifrada hasta 90 días con el mismo fin.',
        'Eliminar tu cuenta no cancela una suscripción del App Store; gestiónala o cancélala en los ajustes de tu cuenta de Apple. Apple conserva su propio registro de tus transacciones del App Store.',
        'Cerrar sesión no elimina nada. Los cambios que aún no se han sincronizado permanecen en el dispositivo hasta que la misma cuenta vuelva a iniciar sesión.',
        'Los registros de analítica los gestiona TelemetryDeck según sus prácticas de conservación y no se usan para restaurar tu Focus History.',
      ],
    },
    export: {
      title: 'Exportación',
      body: 'Ajustes → Cuenta → Exportar mis datos guarda un archivo JSON con tus sesiones, objetivos diarios, ajustes sincronizados y perfil de cuenta. Los datos que aún no se han movido a una cuenta también se pueden exportar desde la pantalla de inicio de sesión.',
    },
    analytics: {
      title: 'Analítica',
      introBeforeLink: 'Utilizamos',
      introAfterLink:
        ', un servicio de analítica centrado en la privacidad, para entender cómo se usa la app (por ejemplo: sesiones de enfoque o descanso iniciadas o completadas, cambios en el objetivo diario, cambios de ajustes, resultados del permiso de notificaciones, eventos de recordatorios de motivación y si se completó el onboarding). Las señales no incluyen texto libre, nombres, correos electrónicos ni el contenido de tu historial de enfoque.',
      identifier:
        'TelemetryDeck identifica las instalaciones con un identificador cifrado (hash) limitado al dispositivo y puede adjuntar metadatos de dispositivo no personales (como el modelo, la versión del sistema operativo y la configuración regional). Estos datos se usan solo para analítica, no se vinculan a tu identidad por nuestra parte y no se utilizan para seguimiento entre apps o sitios web de otras empresas.',
      learnMore: 'Más información:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'Actualizaciones del App Store',
      body: 'Si usas «Buscar actualizaciones» en Ajustes, la app puede contactar con Apple para comprobar si hay una versión más reciente disponible en el App Store.',
    },
    launchAtLogin: {
      title: 'Inicio al iniciar sesión (Mac)',
      body: 'Si activas Inicio al iniciar sesión en Ajustes en Mac, la app usa las API del sistema macOS para registrarse como elemento de inicio de sesión. Esta preferencia está bajo tu control y puedes desactivarla en cualquier momento.',
    },
    notifications: {
      title: 'Notificaciones y Live Activities (iPhone)',
      body: 'En iPhone, las notificaciones locales opcionales, los recordatorios de motivación y las Live Activities te ayudan a ver cuándo termina una sesión o a volver suavemente al enfoque. El permiso solo se solicita cuando eliges activar esas funciones. El contenido de las notificaciones permanece en tu dispositivo.',
    },
    whatWeDoNotDo: {
      title: 'Lo que no hacemos',
      items: [
        'Sin redes publicitarias',
        'Sin venta de información personal',
        'Sin acceso a tus contactos, fotos, ubicación precisa, cámara o micrófono para analítica',
      ],
    },
    children: {
      title: 'Menores',
      body: `${PULSE_APP_NAME} no recoge a sabiendas información personal de menores más allá de lo que una cuenta necesita para sincronizar, como se describe arriba. Las señales de analítica son anónimas y no incluyen contenido personal.`,
    },
    changes: {
      title: 'Cambios',
      body: 'Si esta política cambia, la versión actualizada se publicará en esta URL.',
    },
    contact: {
      title: 'Contacto',
      body: 'Preguntas sobre esta política:',
    },
  },
}
