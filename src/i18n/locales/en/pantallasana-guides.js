/**
 * PantallaSana guides — EN.
 * English (British) translation of the ES source of truth.
 * Mirrors data/guides.js (same keys).
 */
export default {
  'android-phone': {
    tool: 'Google Family Link',
    intro:
      'Family Link is Google’s free app to supervise your child’s Android phone from yours: time of use, allowed apps, filters and location. Let’s go step by step.',
    docs: ['Get started with Family Link (Google)', 'Set up parental controls (Google)'],
    steps: [
      {
        title: 'Install Family Link on YOUR phone',
        detail: 'Your phone is the remote control from which you manage everything.',
        substeps: [
          'Open your phone’s app store (Play Store on Android, App Store on iPhone).',
          'In the search box, type "Google Family Link".',
          'Tap "Install" and wait for it to download.',
          'Open it and sign in with YOUR Google account (the adult one).',
        ],
      },
      {
        title: 'Create or link your child’s account',
        detail: 'Each child needs their own Google account to be supervised.',
        substeps: [
          'In Family Link, tap the "+" icon or "Add child".',
          'If they DON’T have an account: choose "Create an account for your child" and enter their real name and date of birth.',
          'If they DO already have one: choose to link it; they’ll receive a request that you’ll need to accept from their phone.',
          'Follow the wizard until the account appears in your app.',
        ],
      },
      {
        title: 'Connect your child’s phone',
        detail: 'Supervision has to be turned on from the child’s own device.',
        substeps: [
          'Pick up your child’s phone.',
          'Open "Settings" › look for "Google" › "Parental controls".',
          'Tap "Get started" and select that the device is "for a child or teen".',
          'Sign in with the child’s account and confirm the link with yours when prompted.',
        ],
      },
      {
        title: 'Set a daily time limit',
        detail: 'Decide how many hours a day they can use the phone and when bedtime is.',
        substeps: [
          'In YOUR Family Link app, select your child.',
          'Go to "Controls" › "Screen time".',
          'Under "Daily limit", choose the hours allowed for each day of the week.',
          'Under "Bedtime", set the time from which the phone is locked at night.',
        ],
      },
      {
        title: 'Manage apps and downloads',
        detail: 'Approve every new app yourself and limit those already installed.',
        substeps: [
          'In Family Link, go to "Controls" › "Apps".',
          'Turn on "Require approval" so every download needs your permission.',
          'Tap any installed app to set a minute limit or block it.',
          'In "Google Play controls", adjust the age filter for games, apps and films.',
        ],
      },
      {
        title: 'Turn on content filters',
        detail: 'So that searches, YouTube and the web show age-appropriate content.',
        substeps: [
          'Go to "Controls" › "Content filters".',
          'Under "Google Search", turn on "SafeSearch".',
          'Under "YouTube", choose a supervised experience or YouTube Kids.',
          'Under "Google Chrome", choose "Try to block mature sites".',
        ],
      },
    ],
    tips: [
      'Family Link is free and also works for Chromebook.',
      'From age 13 the child can manage their own account; talk it through with them first.',
      'You can also adjust options from a browser at familylink.google.com.',
    ],
  },
  iphone: {
    tool: 'Apple Screen Time',
    intro:
      'Apple includes "Screen Time" with no need to install anything. With "Family Sharing" you can manage your child’s iPhone from yours, remotely.',
    docs: [
      'Parental controls on iPhone/iPad (Apple)',
      'How Family Sharing works (Apple)',
    ],
    steps: [
      {
        title: 'Set up Family Sharing',
        detail: 'It’s the family group that lets you manage their device remotely.',
        substeps: [
          'On YOUR iPhone, open "Settings" and tap your name at the top.',
          'Tap "Family Sharing" › "Add member".',
          'If your child doesn’t have an account, choose "Create an account for a child" and follow the steps using their real date of birth.',
          'If they already have one, invite them and accept from their device.',
        ],
      },
      {
        title: 'Open their "Screen Time"',
        detail: 'From here you can configure everything without having their phone in hand.',
        substeps: [
          'On YOUR iPhone, go to "Settings" › "Screen Time".',
          'Scroll down to the "Family" section and tap your child’s name.',
          'If it doesn’t appear, make sure they accepted the Family Sharing invitation.',
        ],
      },
      {
        title: 'Create a parents-only passcode',
        detail: 'Stops your child from changing or disabling the restrictions.',
        substeps: [
          'Inside their Screen Time, tap "Use Screen Time Passcode".',
          'Choose a 4-digit number DIFFERENT from the phone’s unlock code.',
          'Don’t share it with your child and write it down somewhere safe.',
        ],
      },
      {
        title: 'Schedule "Downtime"',
        detail: 'Time slots (night, school, homework) when only essential apps work.',
        substeps: [
          'In their Screen Time, tap "Downtime" and turn it on.',
          'Choose "Every Day" or customise the schedule by day.',
          'Set, for example, 9:00 pm to 7:00 am for the night.',
          'Under "Always Allowed", leave just Phone and a few essentials.',
        ],
      },
      {
        title: 'Set app limits',
        detail: 'Time caps by category: games, social media, entertainment…',
        substeps: [
          'Tap "App Limits" › "Add Limit".',
          'Tick categories (for example "Games" or "Social").',
          'Specify how many minutes a day are allowed and save.',
        ],
      },
      {
        title: 'Restrict content and purchases',
        detail: 'Block adult content and avoid unwanted spending.',
        substeps: [
          'Tap "Content & Privacy Restrictions" and turn it on.',
          'Under "Content Restrictions", adjust music, films and websites by age.',
          'Under "Web Content", choose "Limit Adult Websites".',
          'Turn on "Ask to Buy" from the Family Sharing group.',
        ],
      },
    ],
    tips: [
      'You don’t need any external apps and you don’t pay anything.',
      'Apple sends a weekly activity report; review it with your child.',
    ],
  },
  'android-tablet': {
    tool: 'Google Family Link',
    intro:
      'An Android tablet is controlled in the same way as an Android phone: with Google Family Link from your phone. If it’s an Amazon Fire tablet, use Amazon Kids (a different system).',
    docs: ['Get started with Family Link (Google)', 'Set up parental controls (Google)'],
    steps: [
      {
        title: 'Install Family Link on YOUR phone',
        detail: 'It will be the remote with which you manage the tablet from a distance.',
        substeps: [
          'Download "Google Family Link" from your app store.',
          'Sign in with your adult Google account.',
          'If you already have your child added (from their phone), they’ll show up here too.',
        ],
      },
      {
        title: 'Set up the child’s account on the tablet',
        detail: 'The tablet has to sign in with the child’s supervised account.',
        substeps: [
          'On the tablet, open "Settings" › "Google" › "Parental controls".',
          'Tap "Get started" and indicate it’s a device for a child.',
          'Sign in with the supervised child account (or create it then and there).',
          'Confirm the link with your account when prompted.',
        ],
      },
      {
        title: 'Set a time limit and bedtime',
        detail: 'Manage how much and until when the tablet is used.',
        substeps: [
          'In your Family Link app, select your child › "Screen time".',
          'Set the "Daily limit" for each day of the week.',
          'Configure "Bedtime" so the tablet locks at night.',
        ],
      },
      {
        title: 'Limit specific apps',
        detail: 'Cap games or videos without blocking the whole tablet.',
        substeps: [
          'Go to "Controls" › "Apps".',
          'Tap the app you want (for example YouTube or a game).',
          'Assign a daily minute limit or block it.',
        ],
      },
      {
        title: 'Turn on web, search and store filters',
        detail: 'So the content is appropriate for their age.',
        substeps: [
          'In "Content filters", turn on SafeSearch in Google Search.',
          'Set up supervised YouTube or install YouTube Kids.',
          'In "Google Play controls", limit downloads by age.',
        ],
      },
    ],
    tips: [
      'If several siblings share the same tablet, the ideal is one profile per child.',
      'Amazon Fire tablets do NOT use Family Link: look for "Amazon Kids" in their settings.',
    ],
  },
  ipad: {
    tool: 'Apple Screen Time',
    intro:
      'The iPad shares the same system as the iPhone: use "Screen Time" and "Family Sharing" to manage it from your own Apple device.',
    docs: [
      'Parental controls on iPhone/iPad (Apple)',
      'Use Screen Time with a child (Apple)',
    ],
    steps: [
      {
        title: 'Add the iPad to Family Sharing',
        detail: 'Link your child’s account to your family group.',
        substeps: [
          'On your Apple device, go to "Settings" › your name › "Family Sharing".',
          'Tap "Add member" and create or invite your child’s account.',
          'On the iPad, sign in with that same child account.',
        ],
      },
      {
        title: 'Protect the settings with a passcode',
        detail: 'A passcode only you know stops them changing the rules.',
        substeps: [
          'Go to "Settings" › "Screen Time" › select your child.',
          'Tap "Use Screen Time Passcode" and create a PIN just for parents.',
        ],
      },
      {
        title: 'Set time limits for apps',
        detail: 'Particularly useful with games and video on the iPad.',
        substeps: [
          'In their Screen Time, tap "App Limits" › "Add Limit".',
          'Choose categories such as "Games" or "Entertainment".',
          'Specify the daily minutes allowed and save.',
        ],
      },
      {
        title: 'Restrict content by age',
        detail: 'Filter inappropriate apps, films and websites.',
        substeps: [
          'Tap "Content & Privacy Restrictions" and turn it on.',
          'Adjust the age ratings in "Content Restrictions".',
          'Under "Web Content", turn on "Limit Adult Websites".',
          'Disable private browsing in Safari so you can review the history.',
        ],
      },
      {
        title: 'Schedule "Downtime"',
        detail: 'Distraction-free slots for homework or at night.',
        substeps: [
          'In their Screen Time, turn on "Downtime".',
          'Set the time slots (for example, study afternoon and night).',
          'Leave only essential apps in "Always Allowed".',
        ],
      },
    ],
    tips: [
      'Ideal for shared school iPads: avoids unwanted downloads.',
      'Look at the weekly activity report together.',
    ],
  },
  playstation: {
    tool: 'PlayStation parental controls / PlayStation Family app',
    intro:
      'PlayStation (PS4 and PS5) has parental controls via a family account. You can manage them from the console, via the web or with the new PlayStation Family mobile app.',
    docs: [
      'Parental controls and spending limits on PlayStation',
      'PlayStation parental controls (official site)',
    ],
    steps: [
      {
        title: 'Become the family manager',
        detail: 'The adult who creates the family controls the child accounts.',
        substeps: [
          'On the console, go to "Settings" › "Family Management" › "Family management".',
          'Sign in with YOUR adult account (over the legal age).',
          'Accept the role of "family manager".',
          'Alternative: do it from a browser at account.sony.com or with the PlayStation Family app.',
        ],
      },
      {
        title: 'Add your child as a member',
        detail: 'Each child needs their own child account within the family.',
        substeps: [
          'In "Family management", choose "Add family member" › "Create user".',
          'Enter their real date of birth (this drives the automatic restrictions).',
          'Finish creating their account.',
        ],
      },
      {
        title: 'Limit play time',
        detail: 'Set daily hours and time slots; the console warns and shuts down when time’s up.',
        substeps: [
          'Select your child in "Family Management".',
          'Go to "Play Time Restrictions".',
          'Choose the time zone, maximum hours per day and the allowed time slot.',
          'Decide what happens at the end: warn or sign out automatically.',
        ],
      },
      {
        title: 'Adjust content by age (PEGI)',
        detail: 'Block games, apps and video not appropriate for their age.',
        substeps: [
          'In the child’s restrictions, open "Content Restrictions".',
          'Set the age level for games and applications (PEGI rating).',
          'Also limit the web browser and adult content.',
        ],
      },
      {
        title: 'Manage chat, multiplayer and spending',
        detail: 'Protect communication with strangers and avoid surprise purchases.',
        substeps: [
          'In "Communication and User-Generated Content", restrict messages and chats.',
          'Limit or disable online multiplayer if you think it’s needed.',
          'In "Monthly Spending Limit", set a cap (or €0) for the PlayStation Store.',
        ],
      },
    ],
    tips: [
      'The PlayStation Family app (iOS/Android) lets you manage everything from your phone.',
      'You’ll receive reports of your children’s play time by email.',
    ],
  },
  xbox: {
    tool: 'Microsoft Family Safety / Xbox Family Settings app',
    intro:
      'Xbox uses Microsoft accounts. With the Xbox Family Settings app (or Microsoft Family Safety) you set time, content and spending, and you can share the limits with a Windows PC.',
    docs: [
      'Xbox parental controls app (official support)',
      'Set up Microsoft Family Safety',
    ],
    steps: [
      {
        title: 'Create your Microsoft family group',
        detail: 'It’s the foundation that all limits are applied on top of.',
        substeps: [
          'On your phone, install the "Xbox Family Settings" or "Microsoft Family Safety" app.',
          'Sign in with YOUR adult Microsoft account.',
          'Create your family (you can also do this at family.microsoft.com).',
        ],
      },
      {
        title: 'Add the child account',
        detail: 'Their real age automatically activates appropriate restrictions.',
        substeps: [
          'In the app, tap "Add a family member".',
          'Create a Microsoft account for your child with their real date of birth.',
          'On the Xbox, ask them to sign in with that account.',
        ],
      },
      {
        title: 'Set screen time limits',
        detail: 'Schedules by day that can sync with Windows.',
        substeps: [
          'In the app, select your child › "Screen time".',
          'Turn on the limits and set the time slots by day.',
          'If they use the same account on a PC, turn on a shared limit between Xbox and Windows.',
        ],
      },
      {
        title: 'Filter games, apps and content by age',
        detail: 'Block anything not appropriate for their age.',
        substeps: [
          'Go to "Content and apps" (or "Content filters").',
          'Select your child’s age to set the allowed PEGI rating.',
          'Review the list of allowed games and tweak it if needed.',
        ],
      },
      {
        title: 'Control spending and online play',
        detail: 'Prevent purchases without permission and limit contact with strangers.',
        substeps: [
          'Turn on "Ask to Buy" in the Microsoft Store.',
          'Adjust the Xbox online privacy and safety settings (chat, multiplayer, clips).',
          'Optional: add credit to their account instead of linking a card.',
        ],
      },
    ],
    tips: [
      'The app sends you activity reports and notifications on your phone.',
      'If your child uses the same account on Windows, the limits apply there too.',
    ],
  },
  switch: {
    tool: 'Nintendo Switch Parental Controls app',
    intro:
      'Nintendo has a dedicated free app that controls the Switch (and the Switch 2) from your phone very simply: play time, bedtime and content by age.',
    docs: ['Nintendo Switch parental controls app (official site)'],
    steps: [
      {
        title: 'Download the app and create your Nintendo account',
        detail: 'You need an adult Nintendo account to set it up.',
        substeps: [
          'On your phone, search for "Nintendo Switch Parental Controls" in the app store.',
          'Install it and sign in (or create an adult Nintendo account).',
        ],
      },
      {
        title: 'Link the app to the console',
        detail: 'A six-digit code connects your phone with the Switch.',
        substeps: [
          'On the Switch, open "System Settings" › "Parental Controls" › "Parental Controls Settings".',
          'The console will display a 6-digit registration code.',
          'In the phone app, enter that code when prompted.',
          'Confirm to complete the link.',
        ],
      },
      {
        title: 'Set the daily play time',
        detail: 'The console warns and can pause play when time’s up.',
        substeps: [
          'In the app, go to "Play-time limit".',
          'Specify how many minutes a day they can play.',
          'Turn on "Suspend Software" if you want the game to pause when time’s up.',
        ],
      },
      {
        title: 'Set a curfew (bedtime)',
        detail: 'After that time the Switch stops working.',
        substeps: [
          'Within the time limits, adjust the "Bedtime".',
          'Check it’s consistent with school days and weekends.',
        ],
      },
      {
        title: 'Adjust content by age',
        detail: 'Block inappropriate games and restrict communication.',
        substeps: [
          'In the app, open "Restricted Software".',
          'Select your child’s age or customise the restrictions.',
          'Limit the posting of images/text to social media and chat.',
          'Restrict eShop purchases if you don’t want them buying on their own.',
        ],
      },
    ],
    tips: [
      'The app shows you what they played and how long each day.',
      'Keep the parental controls PIN out of reach of the children.',
    ],
  },
  smarttv: {
    tool: 'TV parental controls + apps (YouTube Kids, Netflix…)',
    intro:
      'On a smart TV you combine two things: the TV’s own controls (PIN and age rating) and those of each video app. The menus vary by brand (Samsung, LG, Sony, TCL…).',
    docs: [
      'YouTube Kids parental controls (Google)',
      'Parental controls on Netflix (official help)',
    ],
    steps: [
      {
        title: 'Turn on the TV PIN lock',
        detail: 'A PIN protects the settings and adult content.',
        substeps: [
          'Open the TV "Settings" with the remote.',
          'Look for "System", "Security" or "Parental controls" (this varies by brand).',
          'Create a PIN and write it down somewhere safe.',
          'Set the age rating level that is allowed to be watched.',
        ],
      },
      {
        title: 'Create child profiles in the video apps',
        detail: 'Netflix, Disney+ or Prime Video filter by age with a "Kids" profile.',
        substeps: [
          'Open each streaming app on the TV.',
          'Create a new profile and mark it as for children / "Kids".',
          'Set the maturity level and, if the app allows it, lock the adult profile with a PIN.',
        ],
      },
      {
        title: 'Use YouTube Kids instead of YouTube',
        detail: 'YouTube Kids is the safest way to watch videos on the TV.',
        substeps: [
          'Install the "YouTube Kids" app from the TV store.',
          'Set it up with your Google account and choose the age range.',
          'If it isn’t available, turn on "Restricted Mode" in regular YouTube.',
        ],
      },
      {
        title: 'Block app installations',
        detail: 'Stops new apps being added without your permission.',
        substeps: [
          'In the TV settings, find the app store.',
          'Turn on the option to require a PIN to install or buy.',
        ],
      },
      {
        title: 'Check the devices connected via HDMI',
        detail: 'Consoles and sticks have their own separate controls.',
        substeps: [
          'Check what’s plugged in (Fire TV, Chromecast, console…).',
          'Configure the parental controls for each of those devices separately.',
        ],
      },
    ],
    tips: [
      'In your brand’s manual, search for "parental controls" or "lock".',
      'A single well-configured child profile prevents most surprises.',
    ],
  },
  windows: {
    tool: 'Microsoft Family Safety',
    intro:
      'Windows 10 and 11 include free parental controls via Microsoft family accounts. The key: your child should use a child account, not the administrator one.',
    docs: ['Set up Microsoft Family Safety', 'Microsoft Family Safety (official site)'],
    steps: [
      {
        title: 'Create a child account on the PC',
        detail: 'It’s the foundation for being able to apply any limit.',
        substeps: [
          'On the PC, open "Settings" › "Accounts" › "Family".',
          'Tap "Add someone" › "Create one for a child".',
          'Enter their real date of birth and complete the account.',
          'Make sure their account is "Standard" type, NOT administrator.',
        ],
      },
      {
        title: 'Manage the family from the app or the web',
        detail: 'All configuration is done from Family Safety.',
        substeps: [
          'Install "Microsoft Family Safety" on your phone or go to family.microsoft.com.',
          'Sign in with your adult account and select your child.',
        ],
      },
      {
        title: 'Set screen time',
        detail: 'Computer usage schedules by day of the week.',
        substeps: [
          'In Family Safety, go to "Screen time".',
          'Turn on the limits for the Windows device.',
          'Set the allowed time slots each day.',
        ],
      },
      {
        title: 'Turn on web and search filtering',
        detail: 'Only effective if they use the Microsoft Edge browser.',
        substeps: [
          'In "Content filters" › "Web and search", turn on filtering.',
          'Turn on "Filter inappropriate websites" and safe search.',
          'IMPORTANT: block other browsers (Chrome, Firefox), or the filter is useless.',
        ],
      },
      {
        title: 'Limit apps, games and spending',
        detail: 'Block programs by age and manage purchases.',
        substeps: [
          'In "Content filters" › "Apps and games", set the age limit.',
          'Review the list of allowed apps.',
          'Turn on "Ask to Buy" in the Microsoft Store.',
        ],
      },
    ],
    tips: [
      'Making sure your child does NOT have administrator permissions is the first line of safety.',
      'The Family Safety web filter only works in Microsoft Edge.',
    ],
  },
  mac: {
    tool: 'Apple Screen Time',
    intro:
      'On Mac, "Screen Time" and "Family Sharing" work the same as on iPhone/iPad. The first step is to create a standard user account (not administrator) for your child.',
    docs: ['Apple parental controls (support)', 'How Family Sharing works (Apple)'],
    steps: [
      {
        title: 'Create a user account for your child',
        detail: 'A standard account with no administrator permissions.',
        substeps: [
          'Open the Apple menu () › "System Settings".',
          'Go to "Users & Groups" › "Add Account".',
          'Create a "Standard" account (never "Administrator") for the child.',
        ],
      },
      {
        title: 'Add them to Family Sharing',
        detail: 'Lets you manage their limits remotely from your Apple device.',
        substeps: [
          'In "System Settings", go to your name › "Family Sharing".',
          'Add or invite your child’s account to the family group.',
        ],
      },
      {
        title: 'Turn on "Screen Time" with a passcode',
        detail: 'Protect the configuration with a parents-only PIN.',
        substeps: [
          'In "System Settings" › "Screen Time", select your child.',
          'Turn on "Screen Time" and then "Use Screen Time Passcode".',
          'Set up app and website limits the same way as on the iPhone.',
        ],
      },
      {
        title: 'Restrict content and purchases',
        detail: 'Block adult sites and free installation of programs.',
        substeps: [
          'In "Content & Privacy Restrictions", turn it on.',
          'Under "Web Content", choose "Limit Adult Websites".',
          'Limit the App Store and disable the installation of external apps.',
        ],
      },
      {
        title: 'Schedule "Downtime"',
        detail: 'Time slots (night, homework) with only essential apps.',
        substeps: [
          'In their Screen Time, turn on "Downtime".',
          'Set the time slots by day.',
          'Leave just the essentials in "Always Allowed".',
        ],
      },
    ],
    tips: [
      'The standard account (no administrator rights) is the most important barrier.',
      'Review the weekly Mac activity report.',
    ],
  },
  chromebook: {
    tool: 'Google Family Link',
    intro:
      'The Chromebook is managed with the child’s Google account and the Family Link app, just like an Android. It needs ChromeOS 71 or later.',
    docs: [
      'Manage your child’s account on Chromebook (Google)',
      'Get started with Family Link (Google)',
    ],
    steps: [
      {
        title: 'Have the supervised account ready in Family Link',
        detail: 'It’s the same Google account your child uses on their phone/tablet.',
        substeps: [
          'Make sure you have "Family Link" on your phone with your child added.',
          'If they don’t yet have a supervised account, create it first from the app.',
        ],
      },
      {
        title: 'Sign in to the Chromebook with that account',
        detail: 'Because it’s supervised, the controls apply automatically.',
        substeps: [
          'Turn on the Chromebook and, on the home screen, add a user.',
          'Sign in with the child’s supervised Google account.',
          'Accept the supervision when the prompt appears.',
        ],
      },
      {
        title: 'Set up the Chrome and web filter',
        detail: 'Manage which sites your child can access.',
        substeps: [
          'In your Family Link app, select your child › "Controls" › "Google Chrome".',
          'Choose "Try to block mature sites" or allow only specific websites.',
          'Check that SafeSearch is turned on (it is by default on supervised accounts).',
        ],
      },
      {
        title: 'Manage apps and extensions',
        detail: 'Decide what they can install and review their activity.',
        substeps: [
          'In Family Link, go to "Controls" › "Apps".',
          'Turn on download approval and review the allowed extensions.',
          'Set time limits on specific apps if you need to.',
        ],
      },
      {
        title: 'Set a time limit and bedtime',
        detail: 'The Chromebook locks based on the schedule you set.',
        substeps: [
          'In "Screen time", set the daily limit per day.',
          'Set the "Bedtime" for the Chromebook.',
        ],
      },
    ],
    tips: [
      'If the Chromebook belongs to the school, part of the control is managed by the school and you won’t be able to change it.',
      'Use a parental passcode so they can’t remove supervision.',
    ],
  },
}
