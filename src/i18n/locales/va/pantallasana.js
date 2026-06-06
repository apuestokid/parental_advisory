/**
 * Locale VA — PantallaSana
 * Versió en valencià (normativa AVL).
 */
export default {
  ui: {
    appName: 'PantallaSana',
    appTagline: 'Guia de control parental per a famílies',
    footer:
      'PantallaSana · Guia de control parental per a famílies · Sense registre, les teues dades es queden al teu dispositiu.',
    install: '⬇️ Instal·lar app',
    backToDashboard: 'Tornar al panell',
    backToDashboardArrow: '← Tornar al panell',
    protectionShort: 'protecció',
    themeAria: 'Canviar tema clar/fosc',
    home: 'Inici',
    install_aria: 'Instal·lar l\'app al dispositiu',
    backHome: 'Inici',
  },
  nav: {
    home: '🏠 Inici',
    comparator: '⚖️ Comparador',
    search: '🔎 Buscar',
    calculator: '⏱️ Temps',
    homeLabel: 'Inici',
    comparatorLabel: 'Comparador',
    searchLabel: 'Buscar',
    calculatorLabel: 'Temps',
    sections: 'Seccions',
  },
  onboarding: {
    title: 'Benvingut/da a PantallaSana',
    subtitle:
      'T\'ajudem a protegir els teus fills en cada pantalla de casa, pas a pas i sense complicacions. Per a començar, conta\'ns quins dispositius teniu.',
    pickHint: 'Toca tots els que tingueu a casa',
    selectedOne: 'dispositiu seleccionat',
    selectedMany: 'dispositius seleccionats',
    cta: 'Veure el meu panell →',
    selectedMark: '✓ Seleccionat',
  },
  dashboard: {
    levelLabel: 'Nivell de protecció familiar',
    completedPrefix: 'Has completat',
    completedMiddle: 'de',
    completedSuffix: 'configuracions recomanades.',
    devicesTitle: 'Els teus dispositius',
    edit: '✏️ Editar',
    toolsTitle: 'Eines',
    eduTitle: 'Per a tu, que eres qui cuida 💛',
    cta: {
      continue: 'Continuar la configuració',
      start: 'Començar',
    },
    stepCount: '{done}/{total} passos',
    minutes: '⏱️ {min} min',
    protectionMessages: {
      zero: 'Comencem a protegir-los!',
      low: 'Bon començament',
      mid: 'Vas per molt bon camí',
      high: 'Quasi ho tens tot',
      full: 'Protecció completa! 🎉',
    },
    tools: {
      comparator: {
        title: 'Comparador d\'apps',
        desc: 'Troba l\'app de control parental ideal per a la teua família.',
      },
      search: {
        title: 'Buscador ràpid',
        desc: 'Tens un dubte concret? Busca\'l i obtín la resposta.',
      },
      calculator: {
        title: 'Temps de pantalla',
        desc: 'Calcula un temps recomanat segons l\'edat.',
      },
    },
    eduTips: {
      talk: {
        title: 'Parla, no sols prohibisques',
        text: 'Acordeu junts les normes d\'ús. Entendre el perquè funciona millor que imposar.',
      },
      bedroom: {
        title: 'Pantalles fora del dormitori',
        text: 'Carregar els dispositius fora de l\'habitació millora el son i redueix l\'ús nocturn.',
      },
      signs: {
        title: 'Senyals d\'alerta',
        text: 'Canvis d\'humor, secretisme o aïllament poden indicar un problema. Mantín el diàleg obert.',
      },
    },
  },
  guide: {
    withTool: 'Amb {tool}',
    minutes: '⏱️ {min} min',
    progressTitle: 'El teu progrés',
    progressCount: '{done} de {total}',
    docsTitle: '📄 Documentació oficial',
    stepsTitle: 'Passos a seguir',
    stepLabel: 'PAS {n}',
    stepCheckAria: 'Marcar el pas {n} com a completat',
    stepCompletedToast: 'Pas {n} completat ✓',
    tipsTitle: '💡 Consells',
    celebrate: {
      title: 'Dispositiu protegit!',
      desc: 'Has completat tots els passos de {name}.',
      back: 'Tornar al panell',
      stay: 'Continuar ací',
    },
    notFound: 'No hem trobat eixa guia',
  },
  comparator: {
    title: 'Comparador d\'apps de control parental',
    subtitle:
      'Filtra segons les teues necessitats i troba l\'eina que millor encaixa amb la teua família.',
    platform: 'Plataforma',
    allPlatforms: 'Totes',
    onlyFree: 'Només gratuïtes',
    requiredFeatures: 'Funcions imprescindibles',
    appsCount: '{n} app(s) coincideixen',
    clear: 'Netejar filtres',
    noResultsTitle: 'Cap app no compleix els filtres',
    noResultsDesc: 'Prova a llevar algun dels criteris.',
    table: {
      app: 'App',
      price: 'Preu',
      age: 'Edat',
      platforms: 'Plataformes',
    },
    visitWeb: 'Visitar web oficial →',
    age: 'Edat: {value}',
    yes: 'Sí',
    no: 'No',
  },
  search: {
    title: 'Buscador ràpid',
    subtitle: 'Escriu el teu dubte concret. Per exemple: «com bloquege YouTube a la Switch».',
    placeholder: 'Què necessites configurar?',
    label: 'Buscar',
    faqsTitle: 'Preguntes freqüents',
    resultsCount: '{n} resultat(s)',
    typeLabel: {
      faq: 'Pregunta',
      device: 'Dispositiu',
      step: 'Pas',
    },
    viewGuide: 'Veure guia completa →',
    viewGuideShort: 'Veure guia →',
    emptyTitle: '🤔 No hem trobat res per a «{q}»',
    emptyDesc: 'Prova amb altres paraules, o revisa el',
    emptyLink: 'comparador d\'apps',
  },
  calculator: {
    title: 'Calculadora de temps de pantalla',
    subtitle:
      'Una orientació segons l\'edat i el tipus d\'ús, basada en recomanacions de l\'OMS i l\'Acadèmia Americana de Pediatria (AAP).',
    age: 'Edat del xiquet/a',
    ageAria: 'Edat',
    usageTitle: 'Per a què usa les pantalles?',
    usageHint: 'Pots triar-ne diverses.',
    resultPretitle: 'Temps d\'oci recomanat',
    resultBracket: 'al dia · franja {label}',
    placeholder: 'Ajusta l\'edat per a veure una recomanació.',
    disclaimer:
      '* Orientatiu. No inclou l\'ús escolar i no ha de desplaçar el son, l\'estudi, el joc a l\'aire lliure ni la vida familiar.',
    duration: {
      hAndM: '{h} h {m} min',
      h: '{h} h',
      m: '{m} min',
    },
  },
  difficulty: {
    facil: 'Fàcil',
    medio: 'Mitjà',
    avanzado: 'Avançat',
  },
  categories: {
    movil: 'Mòbils i tauletes',
    consola: 'Consoles',
    tv: 'Televisió',
    ordenador: 'Ordinadors',
  },
  devices: {
    'android-phone': { name: 'Smartphone Android', short: 'Android' },
    iphone: { name: 'iPhone', short: 'iPhone' },
    'android-tablet': { name: 'Tauleta Android', short: 'Tauleta' },
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
    timeLimit: 'Límit de temps',
    webFilter: 'Filtre web',
    appBlock: 'Bloqueig d\'apps',
    geolocation: 'Geolocalització',
    reports: 'Informes d\'activitat',
    contentMonitor: 'Monitor de contingut / alertes',
  },
  platforms: {
    android: 'Android',
    ios: 'iOS / iPhone',
    windows: 'Windows',
    mac: 'Mac',
    chromebook: 'Chromebook',
    console: 'Consoles',
  },
  apps: {
    'family-link': {
      name: 'Google Family Link',
      price: 'Gratuït',
      ageTarget: '0–14 anys',
      bestFor: 'Famílies amb dispositius Android i Chromebook.',
    },
    'screen-time': {
      name: 'Apple Tiempo de Uso',
      price: 'Gratuït',
      ageTarget: 'Totes',
      bestFor: 'Famílies 100% Apple (iPhone, iPad, Mac).',
    },
    'microsoft-family': {
      name: 'Microsoft Family Safety',
      price: 'Gratuït',
      ageTarget: 'Totes',
      bestFor: 'Llars amb Windows i Xbox.',
    },
    qustodio: {
      name: 'Qustodio',
      price: 'Gratuït / des de ~43 €/any',
      ageTarget: '5–18 anys',
      bestFor: 'Llars amb dispositius mixtos que volen un únic panell.',
    },
    bark: {
      name: 'Bark',
      price: 'Des de ~5 €/mes',
      ageTarget: '8–18 anys',
      bestFor: 'Detectar senyals d\'alerta (assetjament, contingut sensible) en xats i xarxes.',
    },
    'norton-family': {
      name: 'Norton Family',
      price: 'Des de ~50 €/any',
      ageTarget: '5–17 anys',
      bestFor: 'Supervisió web i de cerques amb informes detallats.',
    },
  },
  activities: {
    educational: {
      label: 'Ús educatiu o creatiu',
      description: 'Aprendre, llegir, crear, programar…',
    },
    games: {
      label: 'Videojocs',
      description: 'Jocs d\'oci en consola, mòbil o PC.',
    },
    video: {
      label: 'Veure vídeos / sèries',
      description: 'YouTube, plataformes de streaming…',
    },
    social: {
      label: 'Xarxes socials / xat',
      description: 'Missatgeria, xarxes (a partir dels 13 anys).',
    },
  },
  brackets: {
    '2-5': {
      label: '2 a 5 anys',
      note: 'Màxim 1 hora al dia i sempre amb contingut educatiu i acompanyament adult.',
    },
    '6-8': {
      label: '6 a 8 anys',
      note: 'Prioritza contingut de qualitat i mantín les pantalles fora del dormitori.',
    },
    '9-11': {
      label: '9 a 11 anys',
      note: 'Acorda normes clares d\'ús i zones/horaris sense pantalles (menjars, abans de dormir).',
    },
    '12-14': {
      label: '12 a 14 anys',
      note: 'Fomenta l\'autoregulació i parla de l\'ús de les xarxes socials i la privacitat.',
    },
  },
  faqs: {
    'bloquear-youtube-switch': {
      question: 'Com bloquege YouTube en la Nintendo Switch?',
      answer:
        'Obri l\'app "Nintendo Switch Parental Controls" al teu mòbil, entra a l\'ajust de restriccions i desactiva o limita l\'accés al navegador i a la publicació en xarxes. Per a vídeo segur, usa la consola només amb apps aprovades.',
    },
    'limite-tiempo-iphone': {
      question: 'Com pose un límit de temps a l\'iPhone?',
      answer:
        'Ves a "Ajustes" › "Tiempo de Uso" › "Límites de apps", afig un límit per categoria o app i protegeix-lo amb un codi de "Tiempo de Uso" exclusiu per a pares.',
    },
    'family-link-gratis': {
      question: 'Family Link és gratuït?',
      answer:
        'Sí. Google Family Link és totalment gratuït per a Android i Chromebook, i inclou límits de temps, control d\'apps i localització.',
    },
    'youtube-kids-tv': {
      question: 'Com veig vídeos segurs a la Smart TV?',
      answer:
        'Instal·la l\'app YouTube Kids al televisor en compte de YouTube normal, i crea un perfil "Niños" a Netflix, Disney+ o Prime Video per a filtrar el contingut per edat.',
    },
    'limitar-juego-playstation': {
      question: 'Com limite les hores de joc a PlayStation?',
      answer:
        'Com a gestor de la família, entra a "Ajustes" › "Familia y control parental" › límits de temps de joc i defineix les hores diàries permeses. La consola avisarà abans d\'apagar-se.',
    },
    'bloquear-compras': {
      question: 'Com evite que el meu fill faça compres sense permís?',
      answer:
        'En tots els sistemes (Apple, Google, Microsoft, consoles) existeix l\'opció "Pedir permiso para comprar". Activa-la perquè cada compra necessite la teua aprovació.',
    },
    'cuanto-tiempo-pantalla': {
      question: 'Quant de temps de pantalla és recomanable segons l\'edat?',
      answer:
        'Com a orientació: fins a 1 h/dia entre els 2 i els 5 anys, i entre 1 i 2 h d\'oci a partir dels 6, sempre sense desplaçar el son, l\'estudi ni el joc a l\'aire lliure. Usa la nostra calculadora per a una estimació personalitzada.',
    },
    'filtro-web-windows': {
      question: 'Com filtre les webs en un PC Windows?',
      answer:
        'Usa Microsoft Family Safety: activa el filtratge de contingut web (funciona en Microsoft Edge) i bloqueja altres navegadors com Chrome o Firefox perquè el filtre siga eficaç.',
    },
    'evitar-trampas': {
      question: 'I si el meu fill intenta saltar-se els controls?',
      answer:
        'El més habitual: esborrar l\'historial, usar el navegador en mode incògnit, crear comptes falsos o usar un altre dispositiu. Protegeix els ajustos amb un codi que només tu conegues, no li dones permisos d\'administrador i parla amb ell sobre les normes.',
    },
  },
}
