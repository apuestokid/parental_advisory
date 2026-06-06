export default [
  {
    path: '/demo',
    name: 'Home',
    component: () => import('@/views/app/AuthApp.vue'),
    redirect: {
      name: 'Welcome',
    },
    children: [
      {
        path: 'welcome',
        name: 'Welcome',
        component: () => import('@/views/WelcomeView.vue'),
      },
      {
        path: 'docs-api',
        name: 'ApiDocs',
        component: () => import('@/views/ApiDocs/ApiDocs.vue'),
      },
    ],
  },
]
