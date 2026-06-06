/**
 * Rutas de PantallaSana (app pública, sin autenticación).
 * Se montan en la raíz `/` bajo el layout principal.
 */
export default [
  {
    path: '/',
    component: () => import('@/pantallasana/views/PantallaSanaLayout.vue'),
    children: [
      {
        path: '',
        name: 'ps-dashboard',
        component: () => import('@/pantallasana/views/DashboardView.vue'),
      },
      {
        path: 'bienvenida',
        name: 'ps-onboarding',
        component: () => import('@/pantallasana/views/OnboardingView.vue'),
      },
      {
        path: 'dispositivo/:id',
        name: 'ps-device',
        component: () => import('@/pantallasana/views/DeviceGuideView.vue'),
      },
      {
        path: 'comparador',
        name: 'ps-comparator',
        component: () => import('@/pantallasana/views/ComparatorView.vue'),
      },
      {
        path: 'buscar',
        name: 'ps-search',
        component: () => import('@/pantallasana/views/SearchView.vue'),
      },
      {
        path: 'tiempo-de-pantalla',
        name: 'ps-calculator',
        component: () => import('@/pantallasana/views/CalculatorView.vue'),
      },
    ],
  },
]
