/**
 * Locale ES — PantallaSana
 * Namespace: ps.*
 * Fuente de verdad. Los locales en/ca se generan a partir de éste y están
 * pendientes de traducción (ver header de cada archivo).
 */
export default {
  ui: {
    appName: 'PantallaSana',
    appTagline: 'Guía de control parental para familias',
    footer:
      'PantallaSana · Guía de control parental para familias · Sin registro, tus datos se quedan en tu dispositivo.',
    install: '⬇️ Instalar app',
    backToDashboard: 'Volver al panel',
    backToDashboardArrow: '← Volver al panel',
    protectionShort: 'protección',
    themeAria: 'Cambiar tema claro/oscuro',
    home: 'Inicio',
    install_aria: 'Instalar app en el dispositivo',
    backHome: 'Inicio',
  },
  nav: {
    home: '🏠 Inicio',
    comparator: '⚖️ Comparador',
    search: '🔎 Buscar',
    calculator: '⏱️ Tiempo',
    homeLabel: 'Inicio',
    comparatorLabel: 'Comparador',
    searchLabel: 'Buscar',
    calculatorLabel: 'Tiempo',
    sections: 'Secciones',
  },
  onboarding: {
    title: 'Bienvenido/a a PantallaSana',
    subtitle:
      'Te ayudamos a proteger a tus hijos en cada pantalla de casa, paso a paso y sin complicaciones. Para empezar, cuéntanos qué dispositivos tenéis.',
    pickHint: 'Toca todos los que tengáis en casa',
    selectedOne: 'dispositivo seleccionado',
    selectedMany: 'dispositivos seleccionados',
    cta: 'Ver mi panel →',
    selectedMark: '✓ Seleccionado',
  },
  dashboard: {
    levelLabel: 'Nivel de protección familiar',
    completedPrefix: 'Has completado',
    completedMiddle: 'de',
    completedSuffix: 'configuraciones recomendadas.',
    devicesTitle: 'Tus dispositivos',
    edit: '✏️ Editar',
    toolsTitle: 'Herramientas',
    eduTitle: 'Para ti, que eres quien cuida 💛',
    cta: {
      continue: 'Continuar configuración',
      start: 'Empezar',
    },
    stepCount: '{done}/{total} pasos',
    minutes: '⏱️ {min} min',
    protectionMessages: {
      zero: '¡Empecemos a protegerlos!',
      low: 'Buen comienzo',
      mid: 'Vas por muy buen camino',
      high: 'Casi lo tienes todo',
      full: '¡Protección completa! 🎉',
    },
    tools: {
      comparator: {
        title: 'Comparador de apps',
        desc: 'Encuentra la app de control parental ideal para tu familia.',
      },
      search: {
        title: 'Buscador rápido',
        desc: '¿Una duda concreta? Búscala y obtén la respuesta.',
      },
      calculator: {
        title: 'Tiempo de pantalla',
        desc: 'Calcula un tiempo recomendado según la edad.',
      },
    },
    eduTips: {
      talk: {
        title: 'Habla, no solo prohíbas',
        text: 'Acordad juntos las normas de uso. Entender el porqué funciona mejor que imponer.',
      },
      bedroom: {
        title: 'Pantallas fuera del dormitorio',
        text: 'Cargar los dispositivos fuera de la habitación mejora el sueño y reduce el uso nocturno.',
      },
      signs: {
        title: 'Señales de alerta',
        text: 'Cambios de humor, secretismo o aislamiento pueden indicar un problema. Mantén el diálogo abierto.',
      },
    },
  },
  guide: {
    withTool: 'Con {tool}',
    minutes: '⏱️ {min} min',
    progressTitle: 'Tu progreso',
    progressCount: '{done} de {total}',
    docsTitle: '📄 Documentación oficial',
    stepsTitle: 'Pasos a seguir',
    stepLabel: 'PASO {n}',
    stepCheckAria: 'Marcar paso {n} como completado',
    stepCompletedToast: 'Paso {n} completado ✓',
    tipsTitle: '💡 Consejos',
    celebrate: {
      title: '¡Dispositivo protegido!',
      desc: 'Has completado todos los pasos de {name}.',
      back: 'Volver al panel',
      stay: 'Seguir aquí',
    },
    notFound: 'No encontramos esa guía',
  },
  comparator: {
    title: 'Comparador de apps de control parental',
    subtitle:
      'Filtra según tus necesidades y encuentra la herramienta que mejor encaja con tu familia.',
    platform: 'Plataforma',
    allPlatforms: 'Todas',
    onlyFree: 'Solo gratis',
    requiredFeatures: 'Funciones imprescindibles',
    appsCount: '{n} app(s) coinciden',
    clear: 'Limpiar filtros',
    noResultsTitle: 'Ninguna app cumple los filtros',
    noResultsDesc: 'Prueba a quitar alguno de los criterios.',
    table: {
      app: 'App',
      price: 'Precio',
      age: 'Edad',
      platforms: 'Plataformas',
    },
    visitWeb: 'Visitar web oficial →',
    age: 'Edad: {value}',
    yes: 'Sí',
    no: 'No',
  },
  search: {
    title: 'Buscador rápido',
    subtitle: 'Escribe tu duda concreta. Por ejemplo: «cómo bloqueo YouTube en la Switch».',
    placeholder: '¿Qué necesitas configurar?',
    label: 'Buscar',
    faqsTitle: 'Preguntas frecuentes',
    resultsCount: '{n} resultado(s)',
    typeLabel: {
      faq: 'Pregunta',
      device: 'Dispositivo',
      step: 'Paso',
    },
    viewGuide: 'Ver guía completa →',
    viewGuideShort: 'Ver guía →',
    emptyTitle: '🤔 No encontramos nada para «{q}»',
    emptyDesc: 'Prueba con otras palabras, o revisa el',
    emptyLink: 'comparador de apps',
  },
  calculator: {
    title: 'Calculadora de tiempo de pantalla',
    subtitle:
      'Una orientación según la edad y el tipo de uso, basada en recomendaciones de la OMS y la Academia Americana de Pediatría (AAP).',
    age: 'Edad del niño/a',
    ageAria: 'Edad',
    usageTitle: '¿Para qué usa las pantallas?',
    usageHint: 'Puedes elegir varias.',
    resultPretitle: 'Tiempo de ocio recomendado',
    resultBracket: 'al día · franja {label}',
    placeholder: 'Ajusta la edad para ver una recomendación.',
    disclaimer:
      '* Orientativo. No incluye el uso escolar y no debe desplazar sueño, estudio, juego al aire libre ni vida familiar.',
    duration: {
      hAndM: '{h} h {m} min',
      h: '{h} h',
      m: '{m} min',
    },
  },
  difficulty: {
    facil: 'Fácil',
    medio: 'Medio',
    avanzado: 'Avanzado',
  },
  categories: {
    movil: 'Móviles y tablets',
    consola: 'Consolas',
    tv: 'Televisión',
    ordenador: 'Ordenadores',
  },
  devices: {
    'android-phone': { name: 'Smartphone Android', short: 'Android' },
    iphone: { name: 'iPhone', short: 'iPhone' },
    'android-tablet': { name: 'Tablet Android', short: 'Tablet' },
    ipad: { name: 'iPad', short: 'iPad' },
    playstation: { name: 'Consola PlayStation', short: 'PlayStation' },
    xbox: { name: 'Xbox', short: 'Xbox' },
    switch: { name: 'Nintendo Switch', short: 'Switch' },
    smarttv: { name: 'Smart TV', short: 'Smart TV' },
    windows: { name: 'PC Windows', short: 'Windows' },
    mac: { name: 'Mac', short: 'Mac' },
    chromebook: { name: 'Chromebook', short: 'Chromebook' },
  },
  features: {
    timeLimit: 'Límite de tiempo',
    webFilter: 'Filtro web',
    appBlock: 'Bloqueo de apps',
    geolocation: 'Geolocalización',
    reports: 'Informes de actividad',
    contentMonitor: 'Monitor de contenido / alertas',
  },
  platforms: {
    android: 'Android',
    ios: 'iOS / iPhone',
    windows: 'Windows',
    mac: 'Mac',
    chromebook: 'Chromebook',
    console: 'Consolas',
  },
  apps: {
    'family-link': {
      name: 'Google Family Link',
      price: 'Gratis',
      ageTarget: '0–14 años',
      bestFor: 'Familias con dispositivos Android y Chromebook.',
    },
    'screen-time': {
      name: 'Apple Tiempo de Uso',
      price: 'Gratis',
      ageTarget: 'Todas',
      bestFor: 'Familias 100% Apple (iPhone, iPad, Mac).',
    },
    'microsoft-family': {
      name: 'Microsoft Family Safety',
      price: 'Gratis',
      ageTarget: 'Todas',
      bestFor: 'Hogares con Windows y Xbox.',
    },
    qustodio: {
      name: 'Qustodio',
      price: 'Gratis / desde ~43 €/año',
      ageTarget: '5–18 años',
      bestFor: 'Hogares con dispositivos mixtos que quieren un único panel.',
    },
    bark: {
      name: 'Bark',
      price: 'Desde ~5 €/mes',
      ageTarget: '8–18 años',
      bestFor: 'Detectar señales de alerta (acoso, contenido sensible) en chats y redes.',
    },
    'norton-family': {
      name: 'Norton Family',
      price: 'Desde ~50 €/año',
      ageTarget: '5–17 años',
      bestFor: 'Supervisión web y de búsquedas con informes detallados.',
    },
  },
  activities: {
    educational: {
      label: 'Uso educativo o creativo',
      description: 'Aprender, leer, crear, programar…',
    },
    games: {
      label: 'Videojuegos',
      description: 'Juegos de ocio en consola, móvil o PC.',
    },
    video: {
      label: 'Ver vídeos / series',
      description: 'YouTube, plataformas de streaming…',
    },
    social: {
      label: 'Redes sociales / chat',
      description: 'Mensajería, redes (a partir de 13 años).',
    },
  },
  brackets: {
    '2-5': {
      label: '2 a 5 años',
      note: 'Máximo 1 hora al día y siempre con contenido educativo y acompañamiento adulto.',
    },
    '6-8': {
      label: '6 a 8 años',
      note: 'Prioriza contenido de calidad y mantén las pantallas fuera del dormitorio.',
    },
    '9-11': {
      label: '9 a 11 años',
      note: 'Acuerda normas claras de uso y zonas/horarios sin pantallas (comidas, antes de dormir).',
    },
    '12-14': {
      label: '12 a 14 años',
      note: 'Fomenta la autorregulación y habla del uso de redes sociales y privacidad.',
    },
  },
  faqs: {
    'bloquear-youtube-switch': {
      question: '¿Cómo bloqueo YouTube en la Nintendo Switch?',
      answer:
        'Abre la app "Nintendo Switch Parental Controls" en tu móvil, entra en el ajuste de restricciones y desactiva o limita el acceso al navegador y a la publicación en redes. Para vídeo seguro, usa la consola solo con apps aprobadas.',
    },
    'limite-tiempo-iphone': {
      question: '¿Cómo pongo un límite de tiempo en el iPhone?',
      answer:
        'Ve a Ajustes › Tiempo de Uso › Límites de apps, añade un límite por categoría o app y protégelo con un código de Tiempo de Uso exclusivo para padres.',
    },
    'family-link-gratis': {
      question: '¿Family Link es gratis?',
      answer:
        'Sí. Google Family Link es totalmente gratuito para Android y Chromebook, e incluye límites de tiempo, control de apps y localización.',
    },
    'youtube-kids-tv': {
      question: '¿Cómo veo vídeos seguros en la Smart TV?',
      answer:
        'Instala la app YouTube Kids en la televisión en lugar de YouTube normal, y crea un perfil "Niños" en Netflix, Disney+ o Prime Video para filtrar el contenido por edad.',
    },
    'limitar-juego-playstation': {
      question: '¿Cómo limito las horas de juego en PlayStation?',
      answer:
        'Como gestor de la familia, entra en Ajustes › Familia y control parental › límites de tiempo de juego y define las horas diarias permitidas. La consola avisará antes de apagarse.',
    },
    'bloquear-compras': {
      question: '¿Cómo evito que mi hijo haga compras sin permiso?',
      answer:
        'En todos los sistemas (Apple, Google, Microsoft, consolas) existe la opción "Pedir permiso para comprar". Actívala para que cada compra necesite tu aprobación.',
    },
    'cuanto-tiempo-pantalla': {
      question: '¿Cuánto tiempo de pantalla es recomendable según la edad?',
      answer:
        'Como orientación: hasta 1 h/día entre los 2 y 5 años, y entre 1 y 2 h de ocio a partir de los 6, siempre sin desplazar sueño, estudio ni juego al aire libre. Usa nuestra calculadora para una estimación personalizada.',
    },
    'filtro-web-windows': {
      question: '¿Cómo filtro las webs en un PC Windows?',
      answer:
        'Usa Microsoft Family Safety: activa el filtrado de contenido web (funciona en Microsoft Edge) y bloquea otros navegadores como Chrome o Firefox para que el filtro sea eficaz.',
    },
    'evitar-trampas': {
      question: '¿Y si mi hijo intenta saltarse los controles?',
      answer:
        'Lo más habitual: borrar el historial, usar el navegador en modo incógnito, crear cuentas falsas o usar otro dispositivo. Protege los ajustes con un código que solo tú conozcas, no le des permisos de administrador y habla con él sobre las normas.',
    },
  },
}
