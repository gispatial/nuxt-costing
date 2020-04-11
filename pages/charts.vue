<template>
  <div class="animated fadeIn">
    <b-card-group columns class="card-columns cols-2">
      <b-card header="Daily Margin Reports">
        <div class="chart-wrapper">
          <line-example/>
        </div>
      </b-card>
      <b-card header="Costing Project Chart">
        <div class="chart-wrapper">
          <bar-example/>
        </div>
      </b-card>
      <b-card header="Montly Project Chart">
        <div class="chart-wrapper">
          <doughnut-example/>
        </div>
      </b-card>
      <b-card header="Costing Percentage Chart">
        <div class="chart-wrapper">
          <radar-example/>
        </div>
      </b-card>
      <b-card header="Revenue Per Month">
        <div class="chart-wrapper">
          <pie-example/>
        </div>
      </b-card>
      <b-card header="Order Received">
        <div class="chart-wrapper">
          <polar-area-example/>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import BarExample from '~/components/charts/BarExample'
import LineExample from '~/components/charts/LineExample'
import DoughnutExample from '~/components/charts/DoughnutExample'
import RadarExample from '~/components/charts/RadarExample'
import PieExample from '~/components/charts/PieExample'
import PolarAreaExample from '~/components/charts/PolarAreaExample'

export default {
  name: 'charts',
  components: {
    BarExample,
    LineExample,
    DoughnutExample,
    RadarExample,
    PieExample,
    PolarAreaExample
  }
}
</script>
