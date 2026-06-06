/**
 * Guías paso a paso de PantallaSana — ES.
 * Estructura espejada con data/guides.js (mismas claves).
 */
export default {
  'android-phone': {
    tool: 'Google Family Link',
    intro:
      'Family Link es la app gratuita de Google para supervisar el móvil Android de tu hijo desde el tuyo: tiempo de uso, apps permitidas, filtros y localización. Vamos paso a paso.',
    docs: ['Empezar a usar Family Link (Google)', 'Configurar los controles parentales (Google)'],
    steps: [
      {
        title: 'Instala Family Link en TU móvil',
        detail: 'Tu teléfono será el mando a distancia desde el que controlas todo.',
        substeps: [
          'Abre la tienda de apps de tu móvil (Play Store en Android, App Store en iPhone).',
          'En el buscador escribe "Google Family Link".',
          'Pulsa "Instalar" y espera a que se descargue.',
          'Ábrela e inicia sesión con TU cuenta de Google (la del adulto).',
        ],
      },
      {
        title: 'Crea o vincula la cuenta de tu hijo',
        detail: 'Cada niño necesita su propia cuenta de Google para ser supervisado.',
        substeps: [
          'En Family Link, pulsa el icono "+" o "Añadir niño/a".',
          'Si NO tiene cuenta: elige "Crear cuenta para tu hijo/a" e introduce su nombre y fecha de nacimiento reales.',
          'Si YA tiene cuenta: elige vincularla; le llegará una solicitud que deberás aceptar desde su móvil.',
          'Sigue el asistente hasta que la cuenta aparezca en tu app.',
        ],
      },
      {
        title: 'Conecta el móvil del niño',
        detail: 'Hay que activar la supervisión en el propio dispositivo del menor.',
        substeps: [
          'Coge el móvil de tu hijo.',
          'Abre "Ajustes" › busca "Google" › "Controles parentales".',
          'Pulsa "Empezar" y selecciona que el dispositivo es "para un niño o adolescente".',
          'Inicia sesión con la cuenta del menor y confirma la vinculación con la tuya cuando lo pida.',
        ],
      },
      {
        title: 'Pon un límite de tiempo diario',
        detail: 'Define cuántas horas al día puede usar el móvil y cuándo se va a dormir.',
        substeps: [
          'En TU app Family Link, selecciona a tu hijo.',
          'Entra en "Controles" › "Tiempo de pantalla".',
          'En "Límite diario", elige las horas permitidas para cada día de la semana.',
          'En "Hora de dormir", fija a partir de qué hora el móvil se bloquea por la noche.',
        ],
      },
      {
        title: 'Controla las apps y las descargas',
        detail: 'Aprueba tú cada app nueva y limita las que ya están instaladas.',
        substeps: [
          'En Family Link, entra en "Controles" › "Apps".',
          'Activa "Pedir aprobación" para que cada descarga necesite tu permiso.',
          'Toca cualquier app instalada para ponerle un límite de minutos o bloquearla.',
          'En "Controles de Google Play", ajusta el filtro por edad de juegos, apps y películas.',
        ],
      },
      {
        title: 'Activa los filtros de contenido',
        detail: 'Para que las búsquedas, YouTube y la web muestren contenido apropiado.',
        substeps: [
          'En "Controles" › "Filtros de contenido".',
          'En "Búsqueda de Google", activa "SafeSearch".',
          'En "YouTube", elige una experiencia supervisada o YouTube Kids.',
          'En "Google Chrome", elige "Intentar bloquear sitios para adultos".',
        ],
      },
    ],
    tips: [
      'Family Link es gratuito y funciona también para Chromebook.',
      'A partir de los 13 años el menor puede gestionar su cuenta; háblalo con él antes.',
      'También puedes ajustar opciones desde el navegador en familylink.google.com.',
    ],
  },
  iphone: {
    tool: 'Tiempo de uso (Apple)',
    intro:
      'Apple incluye "Tiempo de uso" sin necesidad de instalar nada. Con "Compartir en familia" controlas el iPhone de tu hijo desde el tuyo, en remoto.',
    docs: [
      'Controles parentales en iPhone/iPad (Apple)',
      'Cómo funciona Compartir en familia (Apple)',
    ],
    steps: [
      {
        title: 'Activa Compartir en familia',
        detail: 'Es el grupo familiar que te permite gestionar su dispositivo en remoto.',
        substeps: [
          'En TU iPhone, abre "Ajustes" y toca tu nombre arriba del todo.',
          'Pulsa "Compartir en familia" › "Añadir miembro".',
          'Si tu hijo no tiene cuenta, elige "Crear cuenta para un niño" y sigue los pasos con su fecha de nacimiento real.',
          'Si ya la tiene, invítale y acepta desde su dispositivo.',
        ],
      },
      {
        title: 'Entra en su "Tiempo de uso"',
        detail: 'Desde aquí configuras todo sin tener su móvil en la mano.',
        substeps: [
          'En TU iPhone, ve a "Ajustes" › "Tiempo de uso".',
          'Baja hasta el apartado "Familia" y toca el nombre de tu hijo.',
          'Si no aparece, asegúrate de que aceptó la invitación de Compartir en familia.',
        ],
      },
      {
        title: 'Crea un código solo para padres',
        detail: 'Evita que tu hijo cambie o desactive las restricciones.',
        substeps: [
          'Dentro de su Tiempo de uso, toca "Usar código de Tiempo de uso".',
          'Elige un número de 4 cifras DISTINTO al de desbloqueo del móvil.',
          'No lo compartas con tu hijo y apúntalo en un lugar seguro.',
        ],
      },
      {
        title: 'Programa el "Tiempo de inactividad"',
        detail: 'Franjas (noche, clase, deberes) en las que solo funcionan apps esenciales.',
        substeps: [
          'En su Tiempo de uso, toca "Tiempo de inactividad" y actívalo.',
          'Elige "Cada día" o personaliza horarios por día.',
          'Fija, por ejemplo, de 21:00 a 07:00 para las noches.',
          'En "Apps siempre permitidas" deja solo Teléfono y poco más.',
        ],
      },
      {
        title: 'Pon límites a las apps',
        detail: 'Topes de tiempo por categoría: juegos, redes, entretenimiento…',
        substeps: [
          'Toca "Límites de apps" › "Añadir límite".',
          'Marca categorías (por ejemplo "Juegos" o "Redes sociales").',
          'Indica cuántos minutos al día se permiten y guarda.',
        ],
      },
      {
        title: 'Restringe contenido y compras',
        detail: 'Bloquea contenido para adultos y evita gastos no deseados.',
        substeps: [
          'Toca "Restricciones de contenido y privacidad" y actívalo.',
          'En "Restricciones de contenido", ajusta música, películas y webs por edad.',
          'En "Contenido web", elige "Limitar sitios web para adultos".',
          'Activa "Pedir permiso para comprar" desde el grupo Compartir en familia.',
        ],
      },
    ],
    tips: [
      'No necesitas apps externas ni pagar nada.',
      'Apple envía un informe semanal de actividad; revísalo con tu hijo.',
    ],
  },
  'android-tablet': {
    tool: 'Google Family Link',
    intro:
      'La tablet Android se controla igual que un móvil Android: con Google Family Link desde tu teléfono. Si es una tablet Amazon Fire, usa Amazon Kids (sistema distinto).',
    docs: ['Empezar a usar Family Link (Google)', 'Configurar controles parentales (Google)'],
    steps: [
      {
        title: 'Instala Family Link en TU móvil',
        detail: 'Será el mando con el que controlas la tablet a distancia.',
        substeps: [
          'Descarga "Google Family Link" desde tu tienda de apps.',
          'Inicia sesión con tu cuenta de Google de adulto.',
          'Si ya tienes a tu hijo añadido (por su móvil), aquí lo verás también.',
        ],
      },
      {
        title: 'Configura la cuenta del menor en la tablet',
        detail: 'La tablet debe iniciar sesión con la cuenta supervisada del niño.',
        substeps: [
          'En la tablet, abre "Ajustes" › "Google" › "Controles parentales".',
          'Pulsa "Empezar" e indica que es un dispositivo para un menor.',
          'Inicia sesión con la cuenta infantil supervisada (o créala en ese momento).',
          'Confirma la vinculación con tu cuenta cuando lo solicite.',
        ],
      },
      {
        title: 'Pon límite de tiempo y hora de dormir',
        detail: 'Controla cuánto y hasta qué hora se usa la tablet.',
        substeps: [
          'En tu app Family Link, selecciona a tu hijo › "Tiempo de pantalla".',
          'Define el "Límite diario" por día de la semana.',
          'Configura la "Hora de dormir" para que la tablet se bloquee de noche.',
        ],
      },
      {
        title: 'Limita apps concretas',
        detail: 'Pon topes a juegos o vídeos sin bloquear toda la tablet.',
        substeps: [
          'Entra en "Controles" › "Apps".',
          'Toca la app que quieras (por ejemplo YouTube o un juego).',
          'Asígnale un límite de minutos diarios o bloquéala.',
        ],
      },
      {
        title: 'Activa filtros de web, búsqueda y tienda',
        detail: 'Para que el contenido sea apropiado a su edad.',
        substeps: [
          'En "Filtros de contenido", activa SafeSearch en la Búsqueda de Google.',
          'Configura YouTube supervisado o instala YouTube Kids.',
          'En "Controles de Google Play", limita descargas por edad.',
        ],
      },
    ],
    tips: [
      'Si varios hermanos usan la misma tablet, lo ideal es un perfil por niño.',
      'Las tablets Amazon Fire NO usan Family Link: busca "Amazon Kids" en sus ajustes.',
    ],
  },
  ipad: {
    tool: 'Tiempo de uso (Apple)',
    intro:
      'El iPad comparte el mismo sistema que el iPhone: usa "Tiempo de uso" y "Compartir en familia" para controlarlo desde tu propio dispositivo Apple.',
    docs: [
      'Controles parentales en iPhone/iPad (Apple)',
      'Usar Tiempo en pantalla con un menor (Apple)',
    ],
    steps: [
      {
        title: 'Añade el iPad a Compartir en familia',
        detail: 'Vincula la cuenta de tu hijo a tu grupo familiar.',
        substeps: [
          'En tu dispositivo Apple, ve a "Ajustes" › tu nombre › "Compartir en familia".',
          'Pulsa "Añadir miembro" y crea o invita la cuenta de tu hijo.',
          'En el iPad, inicia sesión con esa misma cuenta del menor.',
        ],
      },
      {
        title: 'Protege los ajustes con un código',
        detail: 'Un código que solo tú conoces evita que cambie las normas.',
        substeps: [
          'Ve a "Ajustes" › "Tiempo de uso" › selecciona a tu hijo.',
          'Toca "Usar código de Tiempo de uso" y crea un PIN solo para padres.',
        ],
      },
      {
        title: 'Pon límites de tiempo a las apps',
        detail: 'Especialmente útil con juegos y vídeo en el iPad.',
        substeps: [
          'En su Tiempo de uso, toca "Límites de apps" › "Añadir límite".',
          'Elige categorías como "Juegos" o "Entretenimiento".',
          'Indica los minutos diarios permitidos y guarda.',
        ],
      },
      {
        title: 'Restringe contenido por edad',
        detail: 'Filtra apps, películas y webs no apropiadas.',
        substeps: [
          'Toca "Restricciones de contenido y privacidad" y actívalo.',
          'Ajusta las clasificaciones por edad en "Restricciones de contenido".',
          'En "Contenido web", activa "Limitar sitios web para adultos".',
          'Desactiva la navegación privada de Safari para que puedas revisar el historial.',
        ],
      },
      {
        title: 'Programa el "Tiempo de inactividad"',
        detail: 'Franjas sin distracciones para deberes o por la noche.',
        substeps: [
          'En su Tiempo de uso, activa "Tiempo de inactividad".',
          'Define las franjas (por ejemplo, tarde de estudio y noche).',
          'Deja solo apps esenciales en "Apps siempre permitidas".',
        ],
      },
    ],
    tips: [
      'Ideal para iPads compartidos del colegio: evita descargas no deseadas.',
      'Revisa juntos el informe semanal de actividad.',
    ],
  },
  playstation: {
    tool: 'Control parental de PlayStation / app PlayStation Family',
    intro:
      'PlayStation (PS4 y PS5) tiene controles parentales por cuenta familiar. Puedes gestionarlos desde la consola, desde la web o con la nueva app PlayStation Family para móvil.',
    docs: [
      'Control parental y límites de gasto en PlayStation',
      'Control parental de PlayStation (web oficial)',
    ],
    steps: [
      {
        title: 'Conviértete en gestor de la familia',
        detail: 'El adulto que crea la familia controla las cuentas de los menores.',
        substeps: [
          'En la consola, ve a "Ajustes" › "Familia y control parental" › "Gestión de la familia".',
          'Inicia sesión con TU cuenta de adulto (mayor de edad).',
          'Acepta ser el "gestor de la familia".',
          'Alternativa: hazlo desde un navegador en account.sony.com o con la app PlayStation Family.',
        ],
      },
      {
        title: 'Añade a tu hijo como miembro',
        detail: 'Cada menor necesita su cuenta infantil dentro de la familia.',
        substeps: [
          'En "Gestión de la familia", elige "Añadir miembro de la familia" › "Crear usuario".',
          'Introduce su fecha de nacimiento real (define las restricciones automáticas).',
          'Completa la creación de su cuenta.',
        ],
      },
      {
        title: 'Limita el tiempo de juego',
        detail: 'Define horas diarias y franjas; la consola avisa y se apaga al terminar.',
        substeps: [
          'Selecciona a tu hijo en "Familia y control parental".',
          'Entra en "Restricciones de tiempo de juego".',
          'Elige el huso horario, las horas máximas por día y la franja permitida.',
          'Decide qué pasa al acabar: avisar o cerrar sesión automáticamente.',
        ],
      },
      {
        title: 'Ajusta el contenido por edad (PEGI)',
        detail: 'Bloquea juegos, apps y vídeo no apropiados para su edad.',
        substeps: [
          'En las restricciones del menor, abre "Restricciones de contenido".',
          'Fija el nivel por edad para juegos y aplicaciones (clasificación PEGI).',
          'Limita también el navegador web y el contenido para adultos.',
        ],
      },
      {
        title: 'Controla chat, multijugador y gasto',
        detail: 'Protege la comunicación con desconocidos y evita compras sorpresa.',
        substeps: [
          'En "Comunicación y contenido generado por usuarios", restringe mensajes y chats.',
          'Limita o desactiva el multijugador online si lo ves necesario.',
          'En "Límite de gasto mensual", pon un tope (o 0 €) para la PlayStation Store.',
        ],
      },
    ],
    tips: [
      'La app PlayStation Family (iOS/Android) permite gestionar todo desde el móvil.',
      'Recibirás informes del tiempo de juego de tus hijos por correo.',
    ],
  },
  xbox: {
    tool: 'Microsoft Family Safety / app Xbox Family Settings',
    intro:
      'Xbox usa cuentas de Microsoft. Con la app Xbox Family Settings (o Microsoft Family Safety) fijas tiempo, contenido y gasto, y puedes compartir los límites con un PC Windows.',
    docs: [
      'App de control parental de Xbox (soporte oficial)',
      'Configurar Microsoft Family Safety',
    ],
    steps: [
      {
        title: 'Crea tu grupo familiar de Microsoft',
        detail: 'Es la base sobre la que se aplican todos los límites.',
        substeps: [
          'En el móvil, instala la app "Xbox Family Settings" o "Microsoft Family Safety".',
          'Inicia sesión con TU cuenta de Microsoft de adulto.',
          'Crea tu familia (también puedes hacerlo en family.microsoft.com).',
        ],
      },
      {
        title: 'Añade la cuenta infantil',
        detail: 'Su edad real activa restricciones apropiadas automáticamente.',
        substeps: [
          'En la app, pulsa "Añadir miembro de la familia".',
          'Crea una cuenta de Microsoft para tu hijo con su fecha de nacimiento real.',
          'En la Xbox, pídele que inicie sesión con esa cuenta.',
        ],
      },
      {
        title: 'Pon límites de tiempo de pantalla',
        detail: 'Horarios por día que pueden sincronizarse con Windows.',
        substeps: [
          'En la app, selecciona a tu hijo › "Tiempo de pantalla".',
          'Activa los límites y define las franjas horarias por día.',
          'Si usa la misma cuenta en un PC, activa el límite compartido entre Xbox y Windows.',
        ],
      },
      {
        title: 'Filtra juegos, apps y contenido por edad',
        detail: 'Bloquea lo que no sea apropiado para su edad.',
        substeps: [
          'Entra en "Contenido y aplicaciones" (o "Filtros de contenido").',
          'Selecciona la edad de tu hijo para fijar la clasificación PEGI permitida.',
          'Revisa la lista de juegos permitidos y ajústala si hace falta.',
        ],
      },
      {
        title: 'Controla el gasto y el juego online',
        detail: 'Evita compras sin permiso y limita el contacto con desconocidos.',
        substeps: [
          'Activa "Pedir permiso para comprar" en la Microsoft Store.',
          'Ajusta la privacidad y seguridad online de Xbox (chat, multijugador, clips).',
          'Opcional: añade saldo a su cuenta en lugar de vincular una tarjeta.',
        ],
      },
    ],
    tips: [
      'La app te envía informes de actividad y avisos al móvil.',
      'Si tu hijo usa la misma cuenta en Windows, los límites se aplican también allí.',
    ],
  },
  switch: {
    tool: 'App Control parental de Nintendo Switch',
    intro:
      'Nintendo tiene una app gratuita específica que controla la Switch (y la Switch 2) desde tu móvil de forma muy sencilla: tiempo de juego, hora de dormir y contenido por edad.',
    docs: ['App de control parental de Nintendo Switch (web oficial)'],
    steps: [
      {
        title: 'Descarga la app y crea tu cuenta Nintendo',
        detail: 'Necesitas una cuenta Nintendo de adulto para configurarla.',
        substeps: [
          'En tu móvil, busca "Nintendo Switch Parental Controls" en la tienda de apps.',
          'Instálala e inicia sesión (o crea una cuenta Nintendo de adulto).',
        ],
      },
      {
        title: 'Vincula la app con la consola',
        detail: 'Un código de seis dígitos conecta tu móvil con la Switch.',
        substeps: [
          'En la Switch, abre "Ajustes de la consola" › "Control parental" › "Ajustes de control parental".',
          'La consola mostrará un código de registro de 6 dígitos.',
          'En la app del móvil, introduce ese código cuando te lo pida.',
          'Confirma para completar la vinculación.',
        ],
      },
      {
        title: 'Fija el tiempo de juego diario',
        detail: 'La consola avisa y puede suspender el juego al acabar.',
        substeps: [
          'En la app, entra en "Límite de tiempo de juego".',
          'Indica cuántos minutos al día puede jugar.',
          'Activa "Suspender software" si quieres que el juego se pause al terminar.',
        ],
      },
      {
        title: 'Pon una hora límite (hora de dormir)',
        detail: 'A partir de esa hora la Switch deja de funcionar.',
        substeps: [
          'Dentro de los límites de tiempo, ajusta la "Hora de dormir".',
          'Comprueba que sea coherente con los días de cole y los fines de semana.',
        ],
      },
      {
        title: 'Ajusta el contenido por edad',
        detail: 'Bloquea juegos no apropiados y restringe la comunicación.',
        substeps: [
          'En la app, abre "Restricciones por nivel de edad".',
          'Selecciona la edad de tu hijo o personaliza las restricciones.',
          'Limita la publicación de imágenes/texto en redes sociales y el chat.',
          'Restringe la compra en la eShop si no quieres que compre solo.',
        ],
      },
    ],
    tips: [
      'La app te muestra a qué jugó y cuánto tiempo cada día.',
      'Guarda el PIN de control parental fuera del alcance de los niños.',
    ],
  },
  smarttv: {
    tool: 'Control parental del televisor + apps (YouTube Kids, Netflix…)',
    intro:
      'En una Smart TV combinas dos cosas: el control del propio televisor (PIN y clasificación) y el de cada app de vídeo. El menú cambia según la marca (Samsung, LG, Sony, TCL…).',
    docs: [
      'Controles parentales de YouTube Kids (Google)',
      'Control parental en Netflix (ayuda oficial)',
    ],
    steps: [
      {
        title: 'Activa el bloqueo por PIN del televisor',
        detail: 'Un PIN protege los ajustes y el contenido para adultos.',
        substeps: [
          'Abre los "Ajustes" del televisor con el mando.',
          'Busca "Sistema", "Seguridad" o "Control parental" (varía según la marca).',
          'Crea un PIN y anótalo en un lugar seguro.',
          'Fija el nivel de clasificación por edad que se permite ver.',
        ],
      },
      {
        title: 'Crea perfiles infantiles en las apps de vídeo',
        detail: 'Netflix, Disney+ o Prime Video filtran por edad con un perfil "Niños".',
        substeps: [
          'Abre cada app de streaming en la tele.',
          'Crea un perfil nuevo y márcalo como infantil / "Niños".',
          'Fija el nivel de madurez y, si la app lo permite, bloquea el perfil adulto con PIN.',
        ],
      },
      {
        title: 'Usa YouTube Kids en lugar de YouTube',
        detail: 'YouTube Kids es la forma más segura de ver vídeos en la tele.',
        substeps: [
          'Instala la app "YouTube Kids" desde la tienda del televisor.',
          'Configúrala con tu cuenta de Google y elige el rango de edad.',
          'Si no está disponible, en YouTube normal activa el "Modo restringido".',
        ],
      },
      {
        title: 'Bloquea la instalación de apps',
        detail: 'Evita que se añadan apps nuevas sin tu permiso.',
        substeps: [
          'En los ajustes del televisor, busca la tienda de apps.',
          'Activa la opción de pedir PIN para instalar o comprar.',
        ],
      },
      {
        title: 'Revisa los dispositivos conectados por HDMI',
        detail: 'Consolas y sticks tienen sus propios controles aparte.',
        substeps: [
          'Comprueba qué hay conectado (Fire TV, Chromecast, consola…).',
          'Configura el control parental de cada uno de esos dispositivos por separado.',
        ],
      },
    ],
    tips: [
      'Busca en el manual de tu marca las palabras "control parental" o "bloqueo".',
      'Un solo perfil infantil bien configurado evita la mayoría de sustos.',
    ],
  },
  windows: {
    tool: 'Microsoft Family Safety',
    intro:
      'Windows 10 y 11 incluyen control parental gratuito con las cuentas familiares de Microsoft. La clave: que tu hijo use una cuenta de niño, no la de administrador.',
    docs: ['Configurar Microsoft Family Safety', 'Microsoft Family Safety (web oficial)'],
    steps: [
      {
        title: 'Crea una cuenta de niño en el PC',
        detail: 'Es la base para poder aplicar cualquier límite.',
        substeps: [
          'En el PC, abre "Configuración" › "Cuentas" › "Familia".',
          'Pulsa "Agregar a alguien" › "Crear una para un niño".',
          'Introduce su fecha de nacimiento real y completa la cuenta.',
          'Asegúrate de que su cuenta es de tipo "Estándar", NO administrador.',
        ],
      },
      {
        title: 'Gestiona la familia desde la app o la web',
        detail: 'Toda la configuración se hace desde Family Safety.',
        substeps: [
          'Instala "Microsoft Family Safety" en tu móvil o entra en family.microsoft.com.',
          'Inicia sesión con tu cuenta de adulto y selecciona a tu hijo.',
        ],
      },
      {
        title: 'Fija el tiempo de pantalla',
        detail: 'Horarios de uso del ordenador por día de la semana.',
        substeps: [
          'En Family Safety, entra en "Tiempo de pantalla".',
          'Activa los límites para el dispositivo Windows.',
          'Define las franjas horarias permitidas cada día.',
        ],
      },
      {
        title: 'Activa el filtro web y de búsquedas',
        detail: 'Solo es eficaz si usa el navegador Microsoft Edge.',
        substeps: [
          'En "Filtros de contenido" › "Web y búsqueda", activa el filtrado.',
          'Activa "Filtrar solo sitios apropiados" y la búsqueda segura.',
          'IMPORTANTE: bloquea otros navegadores (Chrome, Firefox), o el filtro no servirá.',
        ],
      },
      {
        title: 'Limita apps, juegos y gasto',
        detail: 'Bloquea programas por edad y controla las compras.',
        substeps: [
          'En "Filtros de contenido" › "Aplicaciones y juegos", fija el límite por edad.',
          'Revisa la lista de apps permitidas.',
          'Activa "Pedir permiso para comprar" en la Microsoft Store.',
        ],
      },
    ],
    tips: [
      'Que tu hijo NO tenga permisos de administrador es la primera barrera de seguridad.',
      'El filtro web de Family Safety solo funciona en Microsoft Edge.',
    ],
  },
  mac: {
    tool: 'Tiempo de uso (Apple)',
    intro:
      'En Mac, "Tiempo de uso" y "Compartir en familia" funcionan igual que en iPhone/iPad. Lo primero es crear una cuenta de usuario estándar (no administrador) para tu hijo.',
    docs: ['Controles parentales de Apple (soporte)', 'Cómo funciona Compartir en familia (Apple)'],
    steps: [
      {
        title: 'Crea una cuenta de usuario para tu hijo',
        detail: 'Una cuenta estándar sin permisos de administrador.',
        substeps: [
          'Abre el menú Apple () › "Ajustes del Sistema".',
          'Ve a "Usuarios y grupos" › "Añadir cuenta".',
          'Crea una cuenta de tipo "Estándar" (nunca "Administrador") para el menor.',
        ],
      },
      {
        title: 'Añádelo a Compartir en familia',
        detail: 'Permite gestionar sus límites en remoto desde tu dispositivo Apple.',
        substeps: [
          'En "Ajustes del Sistema", entra en tu nombre › "Compartir en familia".',
          'Añade o invita la cuenta de tu hijo al grupo familiar.',
        ],
      },
      {
        title: 'Activa "Tiempo de uso" con código',
        detail: 'Protege la configuración con un PIN solo para padres.',
        substeps: [
          'En "Ajustes del Sistema" › "Tiempo de uso", selecciona a tu hijo.',
          'Activa "Tiempo de uso" y luego "Usar código de Tiempo de uso".',
          'Configura límites de apps y de webs igual que en el iPhone.',
        ],
      },
      {
        title: 'Restringe contenido y compras',
        detail: 'Bloquea webs para adultos y la instalación libre de programas.',
        substeps: [
          'En "Restricciones de contenido y privacidad", actívalo.',
          'En "Contenido web", elige "Limitar sitios web para adultos".',
          'Limita la App Store y desactiva la instalación de apps externas.',
        ],
      },
      {
        title: 'Programa el "Tiempo de inactividad"',
        detail: 'Franjas (noche, deberes) con solo apps esenciales.',
        substeps: [
          'En su Tiempo de uso, activa "Tiempo de inactividad".',
          'Define las franjas horarias por día.',
          'Deja solo lo imprescindible en "Apps siempre permitidas".',
        ],
      },
    ],
    tips: [
      'La cuenta estándar (sin administrador) es la barrera más importante.',
      'Revisa el informe semanal de actividad del Mac.',
    ],
  },
  chromebook: {
    tool: 'Google Family Link',
    intro:
      'El Chromebook se gestiona con la cuenta de Google del menor y la app Family Link, igual que un Android. Requiere ChromeOS 71 o posterior.',
    docs: [
      'Gestionar la cuenta de tu hijo en Chromebook (Google)',
      'Empezar a usar Family Link (Google)',
    ],
    steps: [
      {
        title: 'Ten lista la cuenta supervisada en Family Link',
        detail: 'Es la misma cuenta de Google del niño que usas para su móvil/tablet.',
        substeps: [
          'Asegúrate de tener "Family Link" en tu móvil con tu hijo añadido.',
          'Si aún no tiene cuenta supervisada, créala primero desde la app.',
        ],
      },
      {
        title: 'Inicia sesión en el Chromebook con esa cuenta',
        detail: 'Al ser supervisada, aplica los controles automáticamente.',
        substeps: [
          'Enciende el Chromebook y, en la pantalla de inicio, añade un usuario.',
          'Inicia sesión con la cuenta de Google supervisada del menor.',
          'Acepta la supervisión cuando aparezca el aviso.',
        ],
      },
      {
        title: 'Configura el filtro de Chrome y la web',
        detail: 'Controla a qué sitios puede acceder tu hijo.',
        substeps: [
          'En tu app Family Link, selecciona a tu hijo › "Controles" › "Google Chrome".',
          'Elige "Intentar bloquear sitios para adultos" o permite solo webs concretas.',
          'Comprueba que SafeSearch está activado (lo está por defecto en cuentas supervisadas).',
        ],
      },
      {
        title: 'Controla apps y extensiones',
        detail: 'Decide qué puede instalar y revisa su actividad.',
        substeps: [
          'En Family Link, entra en "Controles" › "Apps".',
          'Activa la aprobación de descargas y revisa las extensiones permitidas.',
          'Pon límites de tiempo a apps concretas si lo necesitas.',
        ],
      },
      {
        title: 'Pon límite de tiempo y hora de dormir',
        detail: 'El Chromebook se bloquea según el horario que definas.',
        substeps: [
          'En "Tiempo de pantalla", fija el límite diario por día.',
          'Configura la "Hora de dormir" para el Chromebook.',
        ],
      },
    ],
    tips: [
      'Si el Chromebook es del colegio, parte del control lo gestiona el centro y no podrás cambiarlo.',
      'Usa un código parental para que no pueda quitar la supervisión.',
    ],
  },
}
