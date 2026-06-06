/**
 * Guies de PantallaSana — VA.
 * Versió en valencià (normativa AVL).
 */
export default {
  'android-phone': {
    tool: 'Google Family Link',
    intro:
      'Family Link és l\'app gratuïta de Google per a supervisar el mòbil Android del teu fill des del teu: temps d\'ús, apps permeses, filtres i localització. Anem pas a pas.',
    docs: ['Començar a usar Family Link (Google)', 'Configurar els controls parentals (Google)'],
    steps: [
      {
        title: 'Instal·la Family Link al TEU mòbil',
        detail: 'El teu telèfon serà el comandament a distància des del qual controles tot.',
        substeps: [
          'Obri la botiga d\'apps del teu mòbil (Play Store en Android, App Store en iPhone).',
          'En el buscador escriu "Google Family Link".',
          'Polsa "Instalar" i espera que es descarregue.',
          'Obri-la i inicia sessió amb el TEU compte de Google (el de l\'adult).',
        ],
      },
      {
        title: 'Crea o vincula el compte del teu fill',
        detail: 'Cada xiquet necessita el seu propi compte de Google per a ser supervisat.',
        substeps: [
          'En Family Link, polsa la icona "+" o "Añadir niño/a".',
          'Si NO té compte: tria "Crear cuenta para tu hijo/a" i introdueix el seu nom i data de naixement reals.',
          'Si JA té compte: tria vincular-lo; li arribarà una sol·licitud que hauràs d\'acceptar des del seu mòbil.',
          'Segueix l\'assistent fins que el compte aparega a la teua app.',
        ],
      },
      {
        title: 'Connecta el mòbil del xiquet',
        detail: 'Cal activar la supervisió al propi dispositiu del menor.',
        substeps: [
          'Agafa el mòbil del teu fill.',
          'Obri "Ajustes" › busca "Google" › "Controles parentales".',
          'Polsa "Empezar" i selecciona que el dispositiu és "para un niño o adolescente".',
          'Inicia sessió amb el compte del menor i confirma la vinculació amb el teu quan ho demane.',
        ],
      },
      {
        title: 'Posa un límit de temps diari',
        detail: 'Defineix quantes hores al dia pot usar el mòbil i quan se\'n va a dormir.',
        substeps: [
          'A la TEUA app Family Link, selecciona el teu fill.',
          'Entra en "Controles" › "Tiempo de pantalla".',
          'A "Límite diario", tria les hores permeses per a cada dia de la setmana.',
          'A "Hora de dormir", fixa a partir de quina hora el mòbil es bloqueja per la nit.',
        ],
      },
      {
        title: 'Controla les apps i les descàrregues',
        detail: 'Aprova tu mateix cada app nova i limita les que ja estan instal·lades.',
        substeps: [
          'En Family Link, entra en "Controles" › "Apps".',
          'Activa "Pedir aprobación" perquè cada descàrrega necessite el teu permís.',
          'Toca qualsevol app instal·lada per a posar-li un límit de minuts o bloquejar-la.',
          'En "Controles de Google Play", ajusta el filtre per edat de jocs, apps i pel·lícules.',
        ],
      },
      {
        title: 'Activa els filtres de contingut',
        detail: 'Perquè les cerques, YouTube i el web mostren contingut apropiat.',
        substeps: [
          'En "Controles" › "Filtros de contenido".',
          'En "Búsqueda de Google", activa "SafeSearch".',
          'En "YouTube", tria una experiència supervisada o YouTube Kids.',
          'En "Google Chrome", tria "Intentar bloquear sitios para adultos".',
        ],
      },
    ],
    tips: [
      'Family Link és gratuït i funciona també per a Chromebook.',
      'A partir dels 13 anys el menor pot gestionar el seu compte; parla-ho amb ell abans.',
      'També pots ajustar opcions des del navegador a familylink.google.com.',
    ],
  },
  iphone: {
    tool: 'Tiempo de uso (Apple)',
    intro:
      'Apple inclou "Tiempo de uso" sense necessitat d\'instal·lar res. Amb "Compartir en familia" controles l\'iPhone del teu fill des del teu, de manera remota.',
    docs: [
      'Controls parentals a iPhone/iPad (Apple)',
      'Com funciona "Compartir en familia" (Apple)',
    ],
    steps: [
      {
        title: 'Activa "Compartir en familia"',
        detail: 'És el grup familiar que et permet gestionar el seu dispositiu en remot.',
        substeps: [
          'Al TEU iPhone, obri "Ajustes" i toca el teu nom a la part de dalt.',
          'Polsa "Compartir en familia" › "Añadir miembro".',
          'Si el teu fill no té compte, tria "Crear cuenta para un niño" i segueix els passos amb la seua data de naixement real.',
          'Si ja la té, convida\'l i accepta des del seu dispositiu.',
        ],
      },
      {
        title: 'Entra al seu "Tiempo de uso"',
        detail: 'Des d\'ací configures tot sense tindre el seu mòbil a la mà.',
        substeps: [
          'Al TEU iPhone, ves a "Ajustes" › "Tiempo de uso".',
          'Baixa fins a l\'apartat "Familia" i toca el nom del teu fill.',
          'Si no apareix, assegura\'t que va acceptar la invitació de "Compartir en familia".',
        ],
      },
      {
        title: 'Crea un codi només per a pares',
        detail: 'Evita que el teu fill canvie o desactive les restriccions.',
        substeps: [
          'Dins del seu "Tiempo de uso", toca "Usar código de Tiempo de uso".',
          'Tria un nombre de 4 xifres DIFERENT del de desbloqueig del mòbil.',
          'No el compartisques amb el teu fill i apunta\'l en un lloc segur.',
        ],
      },
      {
        title: 'Programa el "Tiempo de inactividad"',
        detail: 'Franges (nit, classe, deures) en què només funcionen apps essencials.',
        substeps: [
          'Al seu "Tiempo de uso", toca "Tiempo de inactividad" i activa\'l.',
          'Tria "Cada día" o personalitza horaris per dia.',
          'Fixa, per exemple, de 21:00 a 07:00 per a les nits.',
          'En "Apps siempre permitidas" deixa només Telèfon i poc més.',
        ],
      },
      {
        title: 'Posa límits a les apps',
        detail: 'Topalls de temps per categoria: jocs, xarxes, entreteniment…',
        substeps: [
          'Toca "Límites de apps" › "Añadir límite".',
          'Marca categories (per exemple "Juegos" o "Redes sociales").',
          'Indica quants minuts al dia es permeten i guarda.',
        ],
      },
      {
        title: 'Restringeix contingut i compres',
        detail: 'Bloqueja contingut per a adults i evita despeses no desitjades.',
        substeps: [
          'Toca "Restricciones de contenido y privacidad" i activa\'l.',
          'En "Restricciones de contenido", ajusta música, pel·lícules i webs per edat.',
          'En "Contenido web", tria "Limitar sitios web para adultos".',
          'Activa "Pedir permiso para comprar" des del grup "Compartir en familia".',
        ],
      },
    ],
    tips: [
      'No necessites apps externes ni pagar res.',
      'Apple envia un informe setmanal d\'activitat; revisa\'l amb el teu fill.',
    ],
  },
  'android-tablet': {
    tool: 'Google Family Link',
    intro:
      'La tauleta Android es controla igual que un mòbil Android: amb Google Family Link des del teu telèfon. Si és una tauleta Amazon Fire, usa Amazon Kids (sistema diferent).',
    docs: ['Començar a usar Family Link (Google)', 'Configurar controls parentals (Google)'],
    steps: [
      {
        title: 'Instal·la Family Link al TEU mòbil',
        detail: 'Serà el comandament amb el qual controles la tauleta a distància.',
        substeps: [
          'Descarrega "Google Family Link" des de la teua botiga d\'apps.',
          'Inicia sessió amb el teu compte de Google d\'adult.',
          'Si ja tens el teu fill afegit (pel seu mòbil), ací també el veuràs.',
        ],
      },
      {
        title: 'Configura el compte del menor a la tauleta',
        detail: 'La tauleta ha d\'iniciar sessió amb el compte supervisat del xiquet.',
        substeps: [
          'A la tauleta, obri "Ajustes" › "Google" › "Controles parentales".',
          'Polsa "Empezar" i indica que és un dispositiu per a un menor.',
          'Inicia sessió amb el compte infantil supervisat (o crea\'l en eixe moment).',
          'Confirma la vinculació amb el teu compte quan ho sol·licite.',
        ],
      },
      {
        title: 'Posa límit de temps i hora de dormir',
        detail: 'Controla quant i fins a quina hora s\'usa la tauleta.',
        substeps: [
          'A la teua app Family Link, selecciona el teu fill › "Tiempo de pantalla".',
          'Defineix el "Límite diario" per dia de la setmana.',
          'Configura la "Hora de dormir" perquè la tauleta es bloquege de nit.',
        ],
      },
      {
        title: 'Limita apps concretes',
        detail: 'Posa topalls a jocs o vídeos sense bloquejar tota la tauleta.',
        substeps: [
          'Entra en "Controles" › "Apps".',
          'Toca l\'app que vulgues (per exemple YouTube o un joc).',
          'Assigna-li un límit de minuts diaris o bloqueja-la.',
        ],
      },
      {
        title: 'Activa filtres de web, cerca i botiga',
        detail: 'Perquè el contingut siga apropiat a la seua edat.',
        substeps: [
          'En "Filtros de contenido", activa SafeSearch a la cerca de Google.',
          'Configura YouTube supervisat o instal·la YouTube Kids.',
          'En "Controles de Google Play", limita descàrregues per edat.',
        ],
      },
    ],
    tips: [
      'Si diversos germans usen la mateixa tauleta, l\'ideal és un perfil per xiquet.',
      'Les tauletes Amazon Fire NO usen Family Link: busca "Amazon Kids" en els seus ajustos.',
    ],
  },
  ipad: {
    tool: 'Tiempo de uso (Apple)',
    intro:
      'L\'iPad comparteix el mateix sistema que l\'iPhone: usa "Tiempo de uso" i "Compartir en familia" per a controlar-lo des del teu propi dispositiu Apple.',
    docs: [
      'Controls parentals a iPhone/iPad (Apple)',
      'Usar "Tiempo en pantalla" amb un menor (Apple)',
    ],
    steps: [
      {
        title: 'Afig l\'iPad a "Compartir en familia"',
        detail: 'Vincula el compte del teu fill al teu grup familiar.',
        substeps: [
          'Al teu dispositiu Apple, ves a "Ajustes" › el teu nom › "Compartir en familia".',
          'Polsa "Añadir miembro" i crea o convida el compte del teu fill.',
          'A l\'iPad, inicia sessió amb eixe mateix compte del menor.',
        ],
      },
      {
        title: 'Protegeix els ajustos amb un codi',
        detail: 'Un codi que només tu coneixes evita que canvie les normes.',
        substeps: [
          'Ves a "Ajustes" › "Tiempo de uso" › selecciona el teu fill.',
          'Toca "Usar código de Tiempo de uso" i crea un PIN només per a pares.',
        ],
      },
      {
        title: 'Posa límits de temps a les apps',
        detail: 'Especialment útil amb jocs i vídeo a l\'iPad.',
        substeps: [
          'Al seu "Tiempo de uso", toca "Límites de apps" › "Añadir límite".',
          'Tria categories com "Juegos" o "Entretenimiento".',
          'Indica els minuts diaris permesos i guarda.',
        ],
      },
      {
        title: 'Restringeix contingut per edat',
        detail: 'Filtra apps, pel·lícules i webs no apropiades.',
        substeps: [
          'Toca "Restricciones de contenido y privacidad" i activa\'l.',
          'Ajusta les classificacions per edat en "Restricciones de contenido".',
          'En "Contenido web", activa "Limitar sitios web para adultos".',
          'Desactiva la navegació privada de Safari perquè pugues revisar l\'historial.',
        ],
      },
      {
        title: 'Programa el "Tiempo de inactividad"',
        detail: 'Franges sense distraccions per a deures o per la nit.',
        substeps: [
          'Al seu "Tiempo de uso", activa "Tiempo de inactividad".',
          'Defineix les franges (per exemple, vesprada d\'estudi i nit).',
          'Deixa només apps essencials en "Apps siempre permitidas".',
        ],
      },
    ],
    tips: [
      'Ideal per a iPads compartits del col·legi: evita descàrregues no desitjades.',
      'Revisa junts l\'informe setmanal d\'activitat.',
    ],
  },
  playstation: {
    tool: 'Control parental de PlayStation / app PlayStation Family',
    intro:
      'PlayStation (PS4 i PS5) té controls parentals per compte familiar. Pots gestionar-los des de la consola, des del web o amb la nova app PlayStation Family per a mòbil.',
    docs: [
      'Control parental i límits de despesa a PlayStation',
      'Control parental de PlayStation (web oficial)',
    ],
    steps: [
      {
        title: 'Converteix-te en gestor de la família',
        detail: 'L\'adult que crea la família controla els comptes dels menors.',
        substeps: [
          'A la consola, ves a "Ajustes" › "Familia y control parental" › "Gestión de la familia".',
          'Inicia sessió amb el TEU compte d\'adult (major d\'edat).',
          'Accepta ser el "gestor de la familia".',
          'Alternativa: fes-ho des d\'un navegador en account.sony.com o amb l\'app PlayStation Family.',
        ],
      },
      {
        title: 'Afig el teu fill com a membre',
        detail: 'Cada menor necessita el seu compte infantil dins de la família.',
        substeps: [
          'En "Gestión de la familia", tria "Añadir miembro de la familia" › "Crear usuario".',
          'Introdueix la seua data de naixement real (defineix les restriccions automàtiques).',
          'Completa la creació del seu compte.',
        ],
      },
      {
        title: 'Limita el temps de joc',
        detail: 'Defineix hores diàries i franges; la consola avisa i s\'apaga en acabar.',
        substeps: [
          'Selecciona el teu fill en "Familia y control parental".',
          'Entra en "Restricciones de tiempo de juego".',
          'Tria el fus horari, les hores màximes per dia i la franja permesa.',
          'Decideix què passa en acabar: avisar o tancar sessió automàticament.',
        ],
      },
      {
        title: 'Ajusta el contingut per edat (PEGI)',
        detail: 'Bloqueja jocs, apps i vídeo no apropiats per a la seua edat.',
        substeps: [
          'A les restriccions del menor, obri "Restricciones de contenido".',
          'Fixa el nivell per edat per a jocs i aplicacions (classificació PEGI).',
          'Limita també el navegador web i el contingut per a adults.',
        ],
      },
      {
        title: 'Controla xat, multijugador i despesa',
        detail: 'Protegeix la comunicació amb desconeguts i evita compres sorpresa.',
        substeps: [
          'En "Comunicación y contenido generado por usuarios", restringeix missatges i xats.',
          'Limita o desactiva el multijugador en línia si ho veus necessari.',
          'En "Límite de gasto mensual", posa un topall (o 0 €) per a la PlayStation Store.',
        ],
      },
    ],
    tips: [
      'L\'app PlayStation Family (iOS/Android) permet gestionar-ho tot des del mòbil.',
      'Rebràs informes del temps de joc dels teus fills per correu.',
    ],
  },
  xbox: {
    tool: 'Microsoft Family Safety / app Xbox Family Settings',
    intro:
      'Xbox usa comptes de Microsoft. Amb l\'app Xbox Family Settings (o Microsoft Family Safety) fixes temps, contingut i despesa, i pots compartir els límits amb un PC Windows.',
    docs: [
      'App de control parental de Xbox (suport oficial)',
      'Configurar Microsoft Family Safety',
    ],
    steps: [
      {
        title: 'Crea el teu grup familiar de Microsoft',
        detail: 'És la base sobre la qual s\'apliquen tots els límits.',
        substeps: [
          'Al mòbil, instal·la l\'app "Xbox Family Settings" o "Microsoft Family Safety".',
          'Inicia sessió amb el TEU compte de Microsoft d\'adult.',
          'Crea la teua família (també pots fer-ho a family.microsoft.com).',
        ],
      },
      {
        title: 'Afig el compte infantil',
        detail: 'La seua edat real activa restriccions apropiades automàticament.',
        substeps: [
          'A l\'app, polsa "Añadir miembro de la familia".',
          'Crea un compte de Microsoft per al teu fill amb la seua data de naixement real.',
          'A la Xbox, demana-li que inicie sessió amb eixe compte.',
        ],
      },
      {
        title: 'Posa límits de temps de pantalla',
        detail: 'Horaris per dia que es poden sincronitzar amb Windows.',
        substeps: [
          'A l\'app, selecciona el teu fill › "Tiempo de pantalla".',
          'Activa els límits i defineix les franges horàries per dia.',
          'Si usa el mateix compte en un PC, activa el límit compartit entre Xbox i Windows.',
        ],
      },
      {
        title: 'Filtra jocs, apps i contingut per edat',
        detail: 'Bloqueja el que no siga apropiat per a la seua edat.',
        substeps: [
          'Entra en "Contenido y aplicaciones" (o "Filtros de contenido").',
          'Selecciona l\'edat del teu fill per a fixar la classificació PEGI permesa.',
          'Revisa la llista de jocs permesos i ajusta-la si cal.',
        ],
      },
      {
        title: 'Controla la despesa i el joc en línia',
        detail: 'Evita compres sense permís i limita el contacte amb desconeguts.',
        substeps: [
          'Activa "Pedir permiso para comprar" a la Microsoft Store.',
          'Ajusta la privacitat i seguretat en línia de Xbox (xat, multijugador, clips).',
          'Opcional: afig saldo al seu compte en compte de vincular una targeta.',
        ],
      },
    ],
    tips: [
      'L\'app t\'envia informes d\'activitat i avisos al mòbil.',
      'Si el teu fill usa el mateix compte en Windows, els límits s\'apliquen també allí.',
    ],
  },
  switch: {
    tool: 'App Control parental de Nintendo Switch',
    intro:
      'Nintendo té una app gratuïta específica que controla la Switch (i la Switch 2) des del teu mòbil de manera molt senzilla: temps de joc, hora de dormir i contingut per edat.',
    docs: ['App de control parental de Nintendo Switch (web oficial)'],
    steps: [
      {
        title: 'Descarrega l\'app i crea el teu compte Nintendo',
        detail: 'Necessites un compte Nintendo d\'adult per a configurar-la.',
        substeps: [
          'Al teu mòbil, busca "Nintendo Switch Parental Controls" a la botiga d\'apps.',
          'Instal·la-la i inicia sessió (o crea un compte Nintendo d\'adult).',
        ],
      },
      {
        title: 'Vincula l\'app amb la consola',
        detail: 'Un codi de sis dígits connecta el teu mòbil amb la Switch.',
        substeps: [
          'A la Switch, obri "Ajustes de la consola" › "Control parental" › "Ajustes de control parental".',
          'La consola mostrarà un codi de registre de 6 dígits.',
          'A l\'app del mòbil, introdueix eixe codi quan t\'ho demane.',
          'Confirma per a completar la vinculació.',
        ],
      },
      {
        title: 'Fixa el temps de joc diari',
        detail: 'La consola avisa i pot suspendre el joc en acabar.',
        substeps: [
          'A l\'app, entra en "Límite de tiempo de juego".',
          'Indica quants minuts al dia pot jugar.',
          'Activa "Suspender software" si vols que el joc es pause en acabar.',
        ],
      },
      {
        title: 'Posa una hora límit (hora de dormir)',
        detail: 'A partir d\'eixa hora la Switch deixa de funcionar.',
        substeps: [
          'Dins dels límits de temps, ajusta la "Hora de dormir".',
          'Comprova que siga coherent amb els dies d\'escola i els caps de setmana.',
        ],
      },
      {
        title: 'Ajusta el contingut per edat',
        detail: 'Bloqueja jocs no apropiats i restringeix la comunicació.',
        substeps: [
          'A l\'app, obri "Restricciones por nivel de edad".',
          'Selecciona l\'edat del teu fill o personalitza les restriccions.',
          'Limita la publicació d\'imatges/text en xarxes socials i el xat.',
          'Restringeix la compra a l\'eShop si no vols que compre sol.',
        ],
      },
    ],
    tips: [
      'L\'app et mostra a què va jugar i quant de temps cada dia.',
      'Guarda el PIN de control parental fora de l\'abast dels xiquets.',
    ],
  },
  smarttv: {
    tool: 'Control parental del televisor + apps (YouTube Kids, Netflix…)',
    intro:
      'En una Smart TV combines dues coses: el control del propi televisor (PIN i classificació) i el de cada app de vídeo. El menú canvia segons la marca (Samsung, LG, Sony, TCL…).',
    docs: [
      'Controls parentals de YouTube Kids (Google)',
      'Control parental a Netflix (ajuda oficial)',
    ],
    steps: [
      {
        title: 'Activa el bloqueig per PIN del televisor',
        detail: 'Un PIN protegeix els ajustos i el contingut per a adults.',
        substeps: [
          'Obri els "Ajustes" del televisor amb el comandament.',
          'Busca "Sistema", "Seguridad" o "Control parental" (varia segons la marca).',
          'Crea un PIN i anota\'l en un lloc segur.',
          'Fixa el nivell de classificació per edat que es permet veure.',
        ],
      },
      {
        title: 'Crea perfils infantils a les apps de vídeo',
        detail: 'Netflix, Disney+ o Prime Video filtren per edat amb un perfil "Niños".',
        substeps: [
          'Obri cada app de streaming a la tele.',
          'Crea un perfil nou i marca\'l com a infantil / "Niños".',
          'Fixa el nivell de maduresa i, si l\'app ho permet, bloqueja el perfil adult amb PIN.',
        ],
      },
      {
        title: 'Usa YouTube Kids en compte de YouTube',
        detail: 'YouTube Kids és la forma més segura de veure vídeos a la tele.',
        substeps: [
          'Instal·la l\'app "YouTube Kids" des de la botiga del televisor.',
          'Configura-la amb el teu compte de Google i tria el rang d\'edat.',
          'Si no està disponible, en YouTube normal activa el "Modo restringido".',
        ],
      },
      {
        title: 'Bloqueja la instal·lació d\'apps',
        detail: 'Evita que s\'afigen apps noves sense el teu permís.',
        substeps: [
          'Als ajustos del televisor, busca la botiga d\'apps.',
          'Activa l\'opció de demanar PIN per a instal·lar o comprar.',
        ],
      },
      {
        title: 'Revisa els dispositius connectats per HDMI',
        detail: 'Consoles i sticks tenen els seus propis controls a banda.',
        substeps: [
          'Comprova què hi ha connectat (Fire TV, Chromecast, consola…).',
          'Configura el control parental de cadascun d\'eixos dispositius per separat.',
        ],
      },
    ],
    tips: [
      'Busca al manual de la teua marca les paraules "control parental" o "bloqueig".',
      'Un sol perfil infantil ben configurat evita la majoria de sustos.',
    ],
  },
  windows: {
    tool: 'Microsoft Family Safety',
    intro:
      'Windows 10 i 11 inclouen control parental gratuït amb els comptes familiars de Microsoft. La clau: que el teu fill use un compte de xiquet, no el d\'administrador.',
    docs: ['Configurar Microsoft Family Safety', 'Microsoft Family Safety (web oficial)'],
    steps: [
      {
        title: 'Crea un compte de xiquet al PC',
        detail: 'És la base per a poder aplicar qualsevol límit.',
        substeps: [
          'Al PC, obri "Configuración" › "Cuentas" › "Familia".',
          'Polsa "Agregar a alguien" › "Crear una para un niño".',
          'Introdueix la seua data de naixement real i completa el compte.',
          'Assegura\'t que el seu compte és de tipus "Estándar", NO administrador.',
        ],
      },
      {
        title: 'Gestiona la família des de l\'app o el web',
        detail: 'Tota la configuració es fa des de Family Safety.',
        substeps: [
          'Instal·la "Microsoft Family Safety" al teu mòbil o entra a family.microsoft.com.',
          'Inicia sessió amb el teu compte d\'adult i selecciona el teu fill.',
        ],
      },
      {
        title: 'Fixa el temps de pantalla',
        detail: 'Horaris d\'ús de l\'ordinador per dia de la setmana.',
        substeps: [
          'En Family Safety, entra en "Tiempo de pantalla".',
          'Activa els límits per al dispositiu Windows.',
          'Defineix les franges horàries permeses cada dia.',
        ],
      },
      {
        title: 'Activa el filtre web i de cerques',
        detail: 'Només és eficaç si usa el navegador Microsoft Edge.',
        substeps: [
          'En "Filtros de contenido" › "Web y búsqueda", activa el filtratge.',
          'Activa "Filtrar solo sitios apropiados" i la cerca segura.',
          'IMPORTANT: bloqueja altres navegadors (Chrome, Firefox), o el filtre no servirà.',
        ],
      },
      {
        title: 'Limita apps, jocs i despesa',
        detail: 'Bloqueja programes per edat i controla les compres.',
        substeps: [
          'En "Filtros de contenido" › "Aplicaciones y juegos", fixa el límit per edat.',
          'Revisa la llista d\'apps permeses.',
          'Activa "Pedir permiso para comprar" a la Microsoft Store.',
        ],
      },
    ],
    tips: [
      'Que el teu fill NO tinga permisos d\'administrador és la primera barrera de seguretat.',
      'El filtre web de Family Safety només funciona en Microsoft Edge.',
    ],
  },
  mac: {
    tool: 'Tiempo de uso (Apple)',
    intro:
      'En Mac, "Tiempo de uso" i "Compartir en familia" funcionen igual que en iPhone/iPad. El primer és crear un compte d\'usuari estàndard (no administrador) per al teu fill.',
    docs: ['Controls parentals d\'Apple (suport)', 'Com funciona "Compartir en familia" (Apple)'],
    steps: [
      {
        title: 'Crea un compte d\'usuari per al teu fill',
        detail: 'Un compte estàndard sense permisos d\'administrador.',
        substeps: [
          'Obri el menú Apple () › "Ajustes del Sistema".',
          'Ves a "Usuarios y grupos" › "Añadir cuenta".',
          'Crea un compte de tipus "Estándar" (mai "Administrador") per al menor.',
        ],
      },
      {
        title: 'Afig-lo a "Compartir en familia"',
        detail: 'Permet gestionar els seus límits en remot des del teu dispositiu Apple.',
        substeps: [
          'En "Ajustes del Sistema", entra al teu nom › "Compartir en familia".',
          'Afig o convida el compte del teu fill al grup familiar.',
        ],
      },
      {
        title: 'Activa "Tiempo de uso" amb codi',
        detail: 'Protegeix la configuració amb un PIN només per a pares.',
        substeps: [
          'En "Ajustes del Sistema" › "Tiempo de uso", selecciona el teu fill.',
          'Activa "Tiempo de uso" i després "Usar código de Tiempo de uso".',
          'Configura límits d\'apps i de webs igual que a l\'iPhone.',
        ],
      },
      {
        title: 'Restringeix contingut i compres',
        detail: 'Bloqueja webs per a adults i la instal·lació lliure de programes.',
        substeps: [
          'En "Restricciones de contenido y privacidad", activa\'l.',
          'En "Contenido web", tria "Limitar sitios web para adultos".',
          'Limita l\'App Store i desactiva la instal·lació d\'apps externes.',
        ],
      },
      {
        title: 'Programa el "Tiempo de inactividad"',
        detail: 'Franges (nit, deures) amb només apps essencials.',
        substeps: [
          'Al seu "Tiempo de uso", activa "Tiempo de inactividad".',
          'Defineix les franges horàries per dia.',
          'Deixa només l\'imprescindible en "Apps siempre permitidas".',
        ],
      },
    ],
    tips: [
      'El compte estàndard (sense administrador) és la barrera més important.',
      'Revisa l\'informe setmanal d\'activitat del Mac.',
    ],
  },
  chromebook: {
    tool: 'Google Family Link',
    intro:
      'El Chromebook es gestiona amb el compte de Google del menor i l\'app Family Link, igual que un Android. Requereix ChromeOS 71 o posterior.',
    docs: [
      'Gestionar el compte del teu fill al Chromebook (Google)',
      'Començar a usar Family Link (Google)',
    ],
    steps: [
      {
        title: 'Tin a punt el compte supervisat en Family Link',
        detail: 'És el mateix compte de Google del xiquet que uses per al seu mòbil/tauleta.',
        substeps: [
          'Assegura\'t de tindre "Family Link" al teu mòbil amb el teu fill afegit.',
          'Si encara no té compte supervisat, crea\'l primer des de l\'app.',
        ],
      },
      {
        title: 'Inicia sessió al Chromebook amb eixe compte',
        detail: 'En ser supervisat, aplica els controls automàticament.',
        substeps: [
          'Encén el Chromebook i, a la pantalla d\'inici, afig un usuari.',
          'Inicia sessió amb el compte de Google supervisat del menor.',
          'Accepta la supervisió quan aparega l\'avís.',
        ],
      },
      {
        title: 'Configura el filtre de Chrome i el web',
        detail: 'Controla a quins llocs pot accedir el teu fill.',
        substeps: [
          'A la teua app Family Link, selecciona el teu fill › "Controles" › "Google Chrome".',
          'Tria "Intentar bloquear sitios para adultos" o permet només webs concretes.',
          'Comprova que SafeSearch està activat (ho està per defecte en comptes supervisats).',
        ],
      },
      {
        title: 'Controla apps i extensions',
        detail: 'Decideix què pot instal·lar i revisa la seua activitat.',
        substeps: [
          'En Family Link, entra en "Controles" › "Apps".',
          'Activa l\'aprovació de descàrregues i revisa les extensions permeses.',
          'Posa límits de temps a apps concretes si ho necessites.',
        ],
      },
      {
        title: 'Posa límit de temps i hora de dormir',
        detail: 'El Chromebook es bloqueja segons l\'horari que definisques.',
        substeps: [
          'En "Tiempo de pantalla", fixa el límit diari per dia.',
          'Configura la "Hora de dormir" per al Chromebook.',
        ],
      },
    ],
    tips: [
      'Si el Chromebook és del col·legi, part del control el gestiona el centre i no podràs canviar-lo.',
      'Usa un codi parental perquè no puga llevar la supervisió.',
    ],
  },
}
