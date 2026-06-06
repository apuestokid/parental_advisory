<template>
  <highcharts ref="highchartsRef" :options="chartOptions" class="h-full w-full"></highcharts>
</template>

<script setup name="DonnutChart">
import { computed } from 'vue'
const chartOptions = computed(() => ({
  chart: {
    type: 'pie',
  },
  plotOptions: {
    series: {
      allowPointSelect: true,
      cursor: 'pointer',
      borderRadius: 150,
      dataLabels: [
        {
          enabled: false,
          distance: 20,
          format: '{point.name}',
        },
        {
          enabled: false,
          distance: -15,
          format: '{point.percentage:.0f}%',
          style: {
            fontSize: '0.9em',
          },
        },
      ],
      showInLegend: true,
    },
  },
  series: [
    {
      name: 'Registrations',
      colorByPoint: true,
      borderColor: 'var(--color-body)',
      borderWidth: '6px',
      innerSize: '75%',
      data: [
        {
          name: 'EV',
          y: 23.9,
        },
        {
          name: 'Hybrids',
          y: 12.6,
        },
        {
          name: 'Diesel',
          y: 37.0,
        },
        {
          name: 'Petrol',
          y: 26.4,
        },
      ],
    },
  ],
}))
</script>
<style></style>
