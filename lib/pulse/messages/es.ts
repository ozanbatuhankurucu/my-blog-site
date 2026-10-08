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
    metaTitle: `${PULSE_APP_NAME} — Temporizador Pomodoro de la barra de menús para macOS`,
    metaDescription: `${PULSE_APP_NAME} es un temporizador Pomodoro nativo para macOS, con un popover rediseñado, historial de enfoque completo, alertas según la sesión y compatibilidad con 12 idiomas.`,
    heroImageAlt: `Temporizador de enfoque e historial semanal de ${PULSE_APP_NAME}`,
    backToProjects: 'Volver a proyectos',
    availableOnAppStore: 'Disponible en el Mac App Store',
    eyebrow: 'Temporizador Pomodoro de la barra de menús',
    tagline: 'Un temporizador Pomodoro discreto que vive en tu barra de menús.',
    description: `Mantén la concentración sin saturar el escritorio. Inicia una sesión de enfoque, toma un descanso y deja que ${PULSE_APP_NAME} registre tu progreso con el historial de enfoque completo — en silencio, en segundo plano.`,
    downloadCta: 'Descargar en el Mac App Store',
    watchDemo: 'Verlo en acción',
    supportCta: 'Soporte',
    stats: {
      platformLabel: 'Plataforma',
      platformValue: 'macOS nativo',
      languagesLabel: 'Idiomas',
      languagesValue: '12 idiomas',
      dataLabel: 'Recogida de datos',
      dataValue: 'Ninguna',
      builtWithLabel: 'Creado con',
      builtWithValue: 'SwiftUI + AppKit',
    },
    demo: {
      eyebrow: 'Una forma más silenciosa de concentrarse',
      title: 'Tu temporizador está cuando lo necesitas—y desaparece cuando no.',
      description: `Abre ${PULSE_APP_NAME} desde la barra de menús, elige una sesión y cierra el popover. El temporizador sigue funcionando mientras trabajas. En el primer arranque, una breve introducción te muestra dónde encontrarlo — respetando Reduce Motion si está activado.`,
      caption:
        'Controles de sesión rediseñados, historial de enfoque completo, localización en 12 idiomas, alertas de finalización según la sesión y ajustes.',
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
          'La cuenta atrás avanza en silencio mientras trabajas. Pausa, reinicia o salta; el temporizador de la barra de menús permanece anclado.',
        imageFile: 'focus-running.png',
        alt: `Sesión de enfoque de ${PULSE_APP_NAME} con controles de pausa y cuenta atrás en la barra de menús`,
      },
      {
        title: 'Barra de menús',
        badge: 'Cuenta atrás estable',
        description:
          'Muestra u oculta el tiempo restante al instante. El elemento de estado de ancho fijo se mantiene en su sitio sin desplazar el popover, hasta 120:00.',
        imageFile: 'menubar.png',
        alt: `Cuenta atrás de ${PULSE_APP_NAME} en la barra de menús de macOS`,
      },
      {
        title: 'Personalización',
        badge: 'Tus reglas',
        description:
          'Duraciones flexibles, sonidos y animaciones de finalización, 12 idiomas de interfaz e inicio al iniciar sesión.',
        imageFile: 'settings.png',
        alt: `Ajustes de ${PULSE_APP_NAME} para duraciones, alertas de finalización, idioma e inicio al iniciar sesión`,
      },
    ],
    history: {
      eyebrow: 'Progreso sin presión',
      title: 'Mira cómo se acumula el trabajo.',
      description:
        'Abre la ventana de historial completo desde el popover o el menú de estado. Totales y rachas muestran tu progreso sin convertir el enfoque en otro panel que gestionar.',
      items: ['Tiempo total de enfoque', 'Sesiones completadas', 'Racha actual', 'Mejor racha'],
      imageAlt: `Historial de enfoque semanal de ${PULSE_APP_NAME} con sesiones, horas de enfoque y racha`,
    },
    feedback: {
      eyebrow: 'Feedback suave, a tu manera',
      title: 'Haz que terminar se sienta gratificante.',
      description: `Elige entre seis sonidos de finalización calmados y seis celebraciones con animales, o desactiva cualquiera de ellos. ${PULSE_APP_NAME} muestra el mensaje adecuado cuando termina una sesión de Enfoque, Descanso corto o Descanso largo.`,
      items: [
        'Título y subtítulo de finalización según la sesión',
        'Interfaz en 12 idiomas con el idioma del sistema por defecto',
        'Cambio de idioma en Ajustes: Sistema o cualquier idioma compatible',
      ],
      settingsImageAlt: `Ajustes de ${PULSE_APP_NAME} para duraciones, idioma, sonidos de finalización e inicio al iniciar sesión`,
      celebrationImageAlt: `Animación de celebración del conejo de ${PULSE_APP_NAME} al completar una sesión`,
      soundNames: ['Forest Birds', 'Crystal Chime', 'Gentle Marimba', 'Rain Drops', 'Soft Bell', 'Zen Gong'],
      animalNames: ['Mono', 'Koala', 'Gato', 'Zorro', 'Panda', 'Conejo'],
    },
    native: {
      eyebrow: 'Nativo por diseño',
      title: 'Hecho para sentirse como en casa en tu Mac.',
      description: `SwiftUI, AppKit y las convenciones del sistema macOS mantienen ${PULSE_APP_NAME} rápido, familiar y fiable — con etiquetas VoiceOver y compatibilidad con Reduce Motion en toda la app.`,
      features: [
        {
          title: 'Vive en la barra de menús',
          description: 'Sin icono en el Dock ni ventana principal que compita por tu atención.',
        },
        {
          title: 'Se mantiene preciso',
          description:
            'Las sesiones siguen siendo correctas tras el reposo, el despertar y los reinicios; el historial se registra en el plazo real.',
        },
        {
          title: 'Mantiene los datos en local',
          description: 'Tus ajustes y el historial de enfoque nunca salen de tu Mac.',
        },
        {
          title: 'Habla tu idioma',
          description:
            'Interfaz completa en 12 idiomas con el idioma del sistema por defecto y cambio manual en Ajustes.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privado por defecto',
      title: 'Tu enfoque no es un punto de datos.',
      description: `${PULSE_APP_NAME} no recoge datos. Sin cuentas, analítica, publicidad ni peticiones de red. Todo permanece en tu Mac.`,
      items: [
        'Sin inicio de sesión',
        'Sin sincronización en la nube',
        'Sin seguimiento',
        'Sin acceso a archivos personales',
        'Ningún dato sale de tu Mac',
      ],
    },
    closing: {
      title: 'Haz espacio para el trabajo concentrado.',
      description: `Consigue ${PULSE_APP_NAME} en el Mac App Store, o consulta la política de privacidad y la página de soporte si necesitas ayuda.`,
      getSupport: 'Obtener soporte',
      privacy: 'Privacidad',
    },
  },
  support: {
    metaTitle: `Soporte de ${PULSE_APP_NAME}`,
    metaDescription: `Soporte y guía de inicio de ${PULSE_APP_NAME}, un temporizador Pomodoro de la barra de menús para Mac.`,
    title: `Soporte de ${PULSE_APP_NAME}`,
    intro: `${PULSE_APP_NAME} es un temporizador Pomodoro sencillo de la barra de menús para Mac.`,
    gettingStarted: {
      title: 'Primeros pasos',
      steps: [
        'Haz clic en el icono de la app en la barra de menús (zona superior derecha de la pantalla).',
        'Elige Enfoque, Descanso corto o Descanso largo.',
        'Pulsa Iniciar. Puedes cerrar el popover mientras el temporizador sigue en marcha.',
      ],
    },
    settings: {
      title: 'Ajustes',
      body: 'Abre la pestaña Ajustes para cambiar las duraciones de sesión, los sonidos de finalización, las animaciones de la barra de menús y el inicio al iniciar sesión.',
    },
    history: {
      title: 'Historial de enfoque completo',
      body: 'Abre el historial completo desde el popover o el menú de estado de la barra de menús para ver tu tiempo total de enfoque, las sesiones completadas, la racha actual y la mejor racha.',
    },
    requirements: {
      title: 'Requisitos',
      body: 'macOS 14.6 o posterior.',
    },
    contact: {
      title: 'Contacto',
      body: 'Para ayuda, comentarios o informes de errores:',
    },
  },
  privacy: {
    metaTitle: `Política de privacidad de ${PULSE_APP_NAME}`,
    metaDescription: `Política de privacidad de ${PULSE_APP_NAME}, un temporizador Pomodoro para Mac e iPhone.`,
    title: 'Política de privacidad',
    subtitle: `${PULSE_APP_NAME} — Temporizador Pomodoro para Mac e iPhone`,
    lastUpdated: 'Última actualización: 24 de septiembre de 2026',
    summary: {
      title: 'Resumen',
      body: `${PULSE_APP_NAME} no requiere una cuenta y no recoge nombres, correos electrónicos ni contenido personal. La app puede enviar analítica de uso anónima y respetuosa con la privacidad para mejorar los flujos de enfoque. Los ajustes del temporizador y el historial de enfoque permanecen en su dispositivo.`,
    },
    localData: {
      title: 'Datos almacenados en su dispositivo',
      body: 'Los ajustes del temporizador, las preferencias de sesión y el historial de enfoque se guardan localmente en su Mac o iPhone mediante el almacenamiento estándar del sistema. El contenido del historial de enfoque en sí no se carga a nuestro proveedor de analítica.',
    },
    analytics: {
      title: 'Analítica',
      introBeforeLink: 'Utilizamos',
      introAfterLink:
        ', un servicio de analítica centrado en la privacidad, para entender cómo se usa la app (por ejemplo: sesiones de enfoque o descanso iniciadas o completadas, cambios en el objetivo diario, cambios de ajustes y si se ha terminado el onboarding). Las señales no incluyen texto libre, nombres, correos electrónicos ni el contenido de su historial de enfoque.',
      identifier:
        'TelemetryDeck identifica las instalaciones con un identificador cifrado (hash) limitado al dispositivo y puede adjuntar metadatos de dispositivo no personales (como el modelo, la versión del sistema operativo y la configuración regional). Estos datos se usan solo para analítica, no se vinculan a su identidad por nuestra parte y no se utilizan para el seguimiento entre apps o sitios web de otras empresas.',
      learnMore: 'Más información:',
      faqLabel: 'TelemetryDeck Privacy FAQ',
    },
    appStoreUpdates: {
      title: 'Actualizaciones del App Store',
      body: 'Si utiliza «Buscar actualizaciones» en Ajustes, la app puede contactar con Apple para comprobar si hay una versión más reciente disponible en el App Store.',
    },
    launchAtLogin: {
      title: 'Inicio al iniciar sesión (Mac)',
      body: 'Si activa Inicio al iniciar sesión en Ajustes en Mac, la app usa las API del sistema macOS para registrarse como elemento de inicio de sesión. Esta preferencia está bajo su control y puede desactivarla en cualquier momento.',
    },
    notifications: {
      title: 'Notificaciones y Live Activities (iPhone)',
      body: 'En el iPhone, las notificaciones locales opcionales y las Live Activities le ayudan a ver cuándo termina una sesión. El permiso solo se solicita cuando usted elige activar esas funciones. El contenido de las notificaciones permanece en su dispositivo.',
    },
    whatWeDoNotDo: {
      title: 'Lo que no hacemos',
      items: [
        'Sin cuenta ni inicio de sesión',
        'Sin redes publicitarias',
        'Sin venta de información personal',
        'Sin acceso a sus contactos, fotos, ubicación precisa, cámara o micrófono para analítica',
      ],
    },
    children: {
      title: 'Menores',
      body: `${PULSE_APP_NAME} no recoge a sabiendas información personal de menores. Las señales de analítica son anónimas y no incluyen contenido personal.`,
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
