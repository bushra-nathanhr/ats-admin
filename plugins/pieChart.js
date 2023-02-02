// import Vue from 'vue';
// import { Pie } from 'vue-chartjs/legacy';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// ChartJS.register(ArcElement, Tooltip, Legend )
// export default Vue.extend({
//   extends: Pie,
//   props: ['chartData', 'chartOptions', 'colors'],
//   mounted() {
//     if (this.colors) {
//       this.gradient = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 450);
//       this.gradient.addColorStop(0, this.colors.start);
//       this.gradient.addColorStop(0.5, this.colors.middle);
//       this.gradient.addColorStop(1, this.colors.end);
//       this.chartData.datasets[0].backgroundColor = this.gradient;
//     }

//     this.renderChart(this.chartData, this.chartOptions);
//   }
// });
