import { DocumentationView as ZeusBlocksDocumentationView } from '@zeus-front/zeus-blocks'
import pantallaSanaRoutes from '@/pantallasana/routes'

export default [
  ...pantallaSanaRoutes,
  {
    name: 'zeusblocks',
    path: '/zeusblocks',
    component: ZeusBlocksDocumentationView,
  },
  {
    name: 'zeusui',
    path: '/zeusui',
    component: () => import('@/views/app/ZeusUiDocs.vue'),
  },
  {
    name: '404',
    path: '/:pathMatch(.*)*',
    meta: {
      exclude_from_usability: true,
    },
    component: () => import('@/views/404/FourCeroFour.vue'),
  },
]
