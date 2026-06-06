import { defineAsyncComponent } from 'vue'

const DonnutChart = defineAsyncComponent(() => import('@/highcharts/charts/DonnutChart.vue'))

export default function registerComponents(app) {
  app.component('DonnutChart', DonnutChart)
}
