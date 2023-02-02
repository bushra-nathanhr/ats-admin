import Vue from "vue";
import { Doughnut } from "vue-chartjs/legacy";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

Vue.component("doughnut-chart", {
  extends: Doughnut,
  props: ['chart-data', 'chart-options', 'colors'],
  mounted () {
    // if (this.colors) {
    //   this.gradient = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 450);
    //   this.gradient.addColorStop(0, this.colors.start);
    //   this.gradient.addColorStop(0.5, this.colors.middle);
    //   this.gradient.addColorStop(1, this.colors.end);
    //   this.chartData.datasets[0].backgroundColor = this.gradient;
    // }
  
    this.renderChart(this.chartData, this.chartOptions)
  }
});