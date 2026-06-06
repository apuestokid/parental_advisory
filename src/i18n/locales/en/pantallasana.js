/**
 * Locale EN — PantallaSana
 * Namespace: ps.*
 * English (British) translation of the ES source of truth.
 */
export default {
  ui: {
    appName: 'PantallaSana',
    appTagline: 'Parental controls guide for families',
    footer:
      'PantallaSana · Parental controls guide for families · No sign-up; your data stays on your device.',
    install: '⬇️ Install app',
    backToDashboard: 'Back to dashboard',
    backToDashboardArrow: '← Back to dashboard',
    protectionShort: 'protection',
    themeAria: 'Switch light/dark theme',
    home: 'Home',
    install_aria: 'Install app on this device',
    backHome: 'Home',
  },
  nav: {
    home: '🏠 Home',
    comparator: '⚖️ Compare',
    search: '🔎 Search',
    calculator: '⏱️ Time',
    homeLabel: 'Home',
    comparatorLabel: 'Compare',
    searchLabel: 'Search',
    calculatorLabel: 'Time',
    sections: 'Sections',
  },
  onboarding: {
    title: 'Welcome to PantallaSana',
    subtitle:
      'We help you protect your children on every screen at home, step by step and without the fuss. To get started, tell us which devices you have.',
    pickHint: 'Tap all the ones you have at home',
    selectedOne: 'device selected',
    selectedMany: 'devices selected',
    cta: 'See my dashboard →',
    selectedMark: '✓ Selected',
  },
  dashboard: {
    levelLabel: 'Family protection level',
    completedPrefix: 'You have completed',
    completedMiddle: 'of',
    completedSuffix: 'recommended settings.',
    devicesTitle: 'Your devices',
    edit: '✏️ Edit',
    toolsTitle: 'Tools',
    eduTitle: 'For you, the one doing the caring 💛',
    cta: {
      continue: 'Continue setup',
      start: 'Start',
    },
    stepCount: '{done}/{total} steps',
    minutes: '⏱️ {min} min',
    protectionMessages: {
      zero: 'Let’s start protecting them!',
      low: 'Good start',
      mid: 'You’re well on your way',
      high: 'Almost there',
      full: 'Fully protected! 🎉',
    },
    tools: {
      comparator: {
        title: 'App comparator',
        desc: 'Find the parental controls app that best fits your family.',
      },
      search: {
        title: 'Quick search',
        desc: 'Got a specific question? Search it and get the answer.',
      },
      calculator: {
        title: 'Screen time',
        desc: 'Work out a recommended time based on age.',
      },
    },
    eduTips: {
      talk: {
        title: 'Talk, don’t just ban',
        text: 'Agree on the rules together. Understanding the why works better than imposing it.',
      },
      bedroom: {
        title: 'Screens out of the bedroom',
        text: 'Charging devices outside the bedroom improves sleep and reduces night-time use.',
      },
      signs: {
        title: 'Warning signs',
        text: 'Mood swings, secrecy or withdrawal can point to a problem. Keep the conversation open.',
      },
    },
  },
  guide: {
    withTool: 'With {tool}',
    minutes: '⏱️ {min} min',
    progressTitle: 'Your progress',
    progressCount: '{done} of {total}',
    docsTitle: '📄 Official documentation',
    stepsTitle: 'Steps to follow',
    stepLabel: 'STEP {n}',
    stepCheckAria: 'Mark step {n} as completed',
    stepCompletedToast: 'Step {n} completed ✓',
    tipsTitle: '💡 Tips',
    celebrate: {
      title: 'Device protected!',
      desc: 'You have completed every step of {name}.',
      back: 'Back to dashboard',
      stay: 'Stay here',
    },
    notFound: 'We couldn’t find that guide',
  },
  comparator: {
    title: 'Parental controls app comparator',
    subtitle:
      'Filter by your needs and find the tool that fits your family best.',
    platform: 'Platform',
    allPlatforms: 'All',
    onlyFree: 'Free only',
    requiredFeatures: 'Must-have features',
    appsCount: '{n} app(s) match',
    clear: 'Clear filters',
    noResultsTitle: 'No app matches your filters',
    noResultsDesc: 'Try removing one of the criteria.',
    table: {
      app: 'App',
      price: 'Price',
      age: 'Age',
      platforms: 'Platforms',
    },
    visitWeb: 'Visit official website →',
    age: 'Age: {value}',
    yes: 'Yes',
    no: 'No',
  },
  search: {
    title: 'Quick search',
    subtitle: 'Type a specific question. For example: “how do I block YouTube on the Switch”.',
    placeholder: 'What do you need to set up?',
    label: 'Search',
    faqsTitle: 'Frequently asked questions',
    resultsCount: '{n} result(s)',
    typeLabel: {
      faq: 'Question',
      device: 'Device',
      step: 'Step',
    },
    viewGuide: 'See full guide →',
    viewGuideShort: 'See guide →',
    emptyTitle: '🤔 We couldn’t find anything for “{q}”',
    emptyDesc: 'Try different words, or take a look at the',
    emptyLink: 'app comparator',
  },
  calculator: {
    title: 'Screen time calculator',
    subtitle:
      'A guideline based on age and type of use, drawing on recommendations from the WHO and the AAP (American Academy of Pediatrics).',
    age: 'Child’s age',
    ageAria: 'Age',
    usageTitle: 'What do they use screens for?',
    usageHint: 'You can pick more than one.',
    resultPretitle: 'Recommended leisure time',
    resultBracket: 'per day · {label} bracket',
    placeholder: 'Adjust the age to see a recommendation.',
    disclaimer:
      '* For guidance only. Does not include schoolwork and should not displace sleep, study, outdoor play or family life.',
    duration: {
      hAndM: '{h} h {m} min',
      h: '{h} h',
      m: '{m} min',
    },
  },
  difficulty: {
    facil: 'Easy',
    medio: 'Medium',
    avanzado: 'Advanced',
  },
  categories: {
    movil: 'Phones and tablets',
    consola: 'Consoles',
    tv: 'Television',
    ordenador: 'Computers',
  },
  devices: {
    'android-phone': { name: 'Android smartphone', short: 'Android' },
    iphone: { name: 'iPhone', short: 'iPhone' },
    'android-tablet': { name: 'Android tablet', short: 'Tablet' },
    ipad: { name: 'iPad', short: 'iPad' },
    playstation: { name: 'PlayStation console', short: 'PlayStation' },
    xbox: { name: 'Xbox', short: 'Xbox' },
    switch: { name: 'Nintendo Switch', short: 'Switch' },
    smarttv: { name: 'Smart TV', short: 'Smart TV' },
    windows: { name: 'Windows PC', short: 'Windows' },
    mac: { name: 'Mac', short: 'Mac' },
    chromebook: { name: 'Chromebook', short: 'Chromebook' },
  },
  features: {
    timeLimit: 'Time limit',
    webFilter: 'Web filter',
    appBlock: 'App blocking',
    geolocation: 'Location tracking',
    reports: 'Activity reports',
    contentMonitor: 'Content monitoring / alerts',
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
      price: 'Free',
      ageTarget: '0–14 years',
      bestFor: 'Families with Android devices and Chromebooks.',
    },
    'screen-time': {
      name: 'Apple Screen Time',
      price: 'Free',
      ageTarget: 'All ages',
      bestFor: 'All-Apple families (iPhone, iPad, Mac).',
    },
    'microsoft-family': {
      name: 'Microsoft Family Safety',
      price: 'Free',
      ageTarget: 'All ages',
      bestFor: 'Homes with Windows and Xbox.',
    },
    qustodio: {
      name: 'Qustodio',
      price: 'Free / from ~€43/year',
      ageTarget: '5–18 years',
      bestFor: 'Homes with mixed devices that want a single dashboard.',
    },
    bark: {
      name: 'Bark',
      price: 'From ~€5/month',
      ageTarget: '8–18 years',
      bestFor: 'Spotting warning signs (bullying, sensitive content) in chats and social media.',
    },
    'norton-family': {
      name: 'Norton Family',
      price: 'From ~€50/year',
      ageTarget: '5–17 years',
      bestFor: 'Web and search supervision with detailed reports.',
    },
  },
  activities: {
    educational: {
      label: 'Educational or creative use',
      description: 'Learning, reading, creating, coding…',
    },
    games: {
      label: 'Video games',
      description: 'Leisure games on console, phone or PC.',
    },
    video: {
      label: 'Watching videos / series',
      description: 'YouTube, streaming platforms…',
    },
    social: {
      label: 'Social media / chat',
      description: 'Messaging and social networks (from age 13).',
    },
  },
  brackets: {
    '2-5': {
      label: '2 to 5 years',
      note: 'Up to 1 hour a day, always with educational content and adult company.',
    },
    '6-8': {
      label: '6 to 8 years',
      note: 'Prioritise quality content and keep screens out of the bedroom.',
    },
    '9-11': {
      label: '9 to 11 years',
      note: 'Agree clear rules of use and screen-free zones/times (meals, before bed).',
    },
    '12-14': {
      label: '12 to 14 years',
      note: 'Encourage self-regulation and talk about social media use and privacy.',
    },
  },
  faqs: {
    'bloquear-youtube-switch': {
      question: 'How do I block YouTube on the Nintendo Switch?',
      answer:
        'Open the “Nintendo Switch Parental Controls” app on your phone, go into the restrictions settings and disable or limit access to the browser and to posting on social media. For safe video, only use the console with approved apps.',
    },
    'limite-tiempo-iphone': {
      question: 'How do I set a time limit on the iPhone?',
      answer:
        'Go to Settings › Screen Time › App Limits, add a limit by category or app and protect it with a Screen Time passcode that only parents know.',
    },
    'family-link-gratis': {
      question: 'Is Family Link free?',
      answer:
        'Yes. Google Family Link is completely free for Android and Chromebook, and includes time limits, app controls and location.',
    },
    'youtube-kids-tv': {
      question: 'How do I watch safe videos on the smart TV?',
      answer:
        'Install the YouTube Kids app on the television instead of regular YouTube, and create a “Kids” profile on Netflix, Disney+ or Prime Video to filter content by age.',
    },
    'limitar-juego-playstation': {
      question: 'How do I limit gaming hours on PlayStation?',
      answer:
        'As family manager, go to Settings › Family Management › play-time restrictions and set the daily hours allowed. The console will give a warning before shutting down.',
    },
    'bloquear-compras': {
      question: 'How do I stop my child making purchases without permission?',
      answer:
        'Every system (Apple, Google, Microsoft, consoles) has an “Ask to Buy” option. Turn it on so every purchase needs your approval.',
    },
    'cuanto-tiempo-pantalla': {
      question: 'How much screen time is recommended by age?',
      answer:
        'As a guide: up to 1 h/day for ages 2 to 5, and 1 to 2 h of leisure from age 6 onwards, always without displacing sleep, study or outdoor play. Use our calculator for a personalised estimate.',
    },
    'filtro-web-windows': {
      question: 'How do I filter websites on a Windows PC?',
      answer:
        'Use Microsoft Family Safety: turn on web content filtering (it works in Microsoft Edge) and block other browsers such as Chrome or Firefox so the filter is effective.',
    },
    'evitar-trampas': {
      question: 'What if my child tries to bypass the controls?',
      answer:
        'The usual tricks: clearing history, using incognito mode, creating fake accounts or using another device. Protect the settings with a passcode only you know, don’t give them administrator permissions, and talk to them about the rules.',
    },
  },
}
