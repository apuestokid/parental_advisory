import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import { setHighchartsLocale } from './locales.js'
import 'highcharts/highcharts-more'
import 'highcharts/modules/map'

// highchartsMore(Highcharts);
const colors = [1, 2, 3, 4, 5, 6, 7, 8].map(n => `var(--color-zeus${n})`)
// Set default locale to Spanish

import { state } from '@/store/index.js'
const currentLang = state.language
setHighchartsLocale(currentLang, Highcharts)

Highcharts.setOptions({
  chart: {
    plotBackgroundColor: 'transparent',
    backgroundColor: 'transparent',
    plotBorderWidth: 0,
  },
  accessibility: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  title: {
    text: '',
  },
  subtitle: {
    text: '',
  },
  legend: {
    enabled: false,
  },
  yAxis: {
    title: '',
    labels: {
      style: {
        color: 'var(--color-font)',
      },
    },
  },
  xAxis: {
    title: '',
    labels: {
      style: {
        color: 'var(--color-font)',
      },
    },
  },

  colors,
  global: {
    timezoneOffset: new Date().getTimezoneOffset(),
  },
  tooltip: {
    enabled: true,
    shared: true,
    backgroundColor: 'var(--color-body)',
    borderWidth: 0,
    valueDecimals: 2,
    // valueSuffix: '%',
    style: {
      color: 'var(--color-font)',
    },
    dateTimeLabelFormats: {
      day: '%d/%m/%Y',
    },
    // zIndex:20
  },
  plotOptions: {
    series: {
      borderWidth: 0,
    },
    areaspline: {
      fillOpacity: 0.1,
    },
  },
})

// import highchartsRoundedCorners from 'highcharts-rounded-corners';
// highchartsRoundedCorners(Highcharts);

// import SolidGauge from 'highcharts/modules/solid-gauge';
// SolidGauge(Highcharts);

// import HighchartsMore from 'highcharts/highcharts-more';
// HighchartsMore(Highcharts);

export { HighchartsVue, Highcharts, setHighchartsLocale }
