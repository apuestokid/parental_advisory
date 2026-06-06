<template>
  <div ref="containerChart" class="chart-wrap h-full w-full">
    <highcharts
      v-if="showChart"
      ref="chart"
      :constructor-type="'mapChart'"
      class="h-full w-full overflow-hidden"
      :options="chartOptions"
    ></highcharts>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import worldMap from '@highcharts/map-collection/custom/world.topo.json'
import EuropeMap from '@highcharts/map-collection/custom/europe.topo.json'

const props = defineProps({
  continent: {
    type: String,
    default: 'America',
  },
  data: {
    type: Array,
    default: () => [],
  },
  size: {
    type: String,
    default: 'xl',
  },
})

// const features = worldMap.features.filter(el => {
//     return el.properties.continent.includes('America');
// });
const geometries = worldMap.objects.default.geometries.filter(el =>
  el.properties.continent.includes('America')
)
worldMap.objects.default.geometries = geometries

const americaMap = {
  ...worldMap,
}

const showChart = ref(true)

const chartOptions = computed(() => {
  if (!showChart.value) return {}
  return {
    chart: {
      map: props.continent === 'America' ? americaMap : EuropeMap,
      panning: {
        enabled: false,
      },
    },

    mapNavigation: {
      enabled: false,
    },
    mapView: {
      projection: {
        // name: undefined,
        // name: 'EqualEarth',
        name: 'Miller',
        // name: 'WebMercator',
      },
      // zoom: props.continent == 'America' ? 3.55 : 4.9,
      // zoom: zoom.value,
    },
    colorAxis: {
      min: 0,
      max: 0,
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      mappoint: {
        keys: [
          'lat',
          'lon',
          'name',
          'subregion',
          'is_operation',
          'id',
          'is_active',
          'zIndex',
          'has_employee',
        ],

        marker: {
          lineWidth: 0,
          lineColor: '#000',
          radius: 14,
        },
        overflow: 'allow',
        dataLabels: {
          useHTML: true,
          enabled: true,
          // AlignValue: 'auto',
          allowOverlap: true,
          // y: 19,
          // overflow: 'allow',
          formatter() {
            let point_size = 'h-6 w-6 '
            if (props.size === 'totem') point_size = 'h-4 w-4 '
            let classList = `${point_size} rounded-full  shadow-xl border relative`
            let inner_element
            let opacity = 'opacity-0 '
            if (this.point.is_active) {
              classList += ' pulse-marker pointer-events-none z-10'
              opacity = 'opacity-100 '
            }
            inner_element = `<div class="city_name pointer-events-none ${
              opacity
            } transition-all "><div>${this.point.name}</div></div>`

            if (!this.point.is_operation) classList += '  bg-aux text-aux '
            // classList += '  opacity-0_';

            if (this.point.is_operation) classList += '  bg-secondary text-secondary '

            if (props.continent === 'Europe') classList += ' is_europe'

            const str = `<div class="${classList}">${inner_element}</div>`
            return str
          },
        },
        color: 'transparent',
        series: {
          events: {
            // click: (event) => {},
          },
        },
      },
      series: {
        enableMouseTracking: true,
      },
    },
    series: [
      {
        name: 'Random data',
        borderWidth: 0,

        color: 'red',
        states: {
          hover: {
            // color: '#BADA55',
          },
        },
        dataLabels: {
          enabled: false,
          format: '{point.name}',
        },
        allAreas: true,
      },
      {
        type: 'mappoint',

        point: {
          events: {
            // click: (event) => {},
          },
        },

        ...props.data,
      },
      {
        data: [
          [39.46975, -0.37739, 'Valencia', '', false, 'vlc', false, 10, false],
          // [5.711, -74.0721, 'PEPE', '', false, 'PEPE', true],
        ],
        type: 'mappoint',
        name: 'VALENCIA',
      },

      //   "latitude": 19.4326,
      //                "longitude": -99.1332,
      //
      //   "id": "1a5215e8-d2f6-4c6c-9201-4950ae61c0f2",
      // "city": "Bogota",

      // "latitude": 4.711,
      // "longitude": -74.0721,
      // "utc_offset": -300,
      // "utc_offset_summer": -300,
      // "sub_region_id": "fb5056c8-3671-4739-bec0-c0a9e17d80a7",
      // "sub_region": "LATAM North",
      // "is_operation": true,
      // "is_operation": true,
      // "percent": 30.33
      // keys: ['lat', 'lon', 'name', 'subregion', 'is_operation', 'id', 'is_active', 'zIndex'],
    ],
  }
})
const chart = ref(null)
</script>
<style></style>
