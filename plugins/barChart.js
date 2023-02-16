import Vue from "vue";
import { Bar } from 'vue-chartjs/legacy'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

Vue.component("bar-chart", {
  extends: Bar,
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: '300px'
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {
        
      }
    },

    plugins: {
      type: Array,
      default: () => []
    }
  },
    datasetIdKey: {
      type: String,
      default: ''
    },
  mounted () {
  //   if (this.colors) {
  //     this.gradient = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 450);
  //     this.gradient.addColorStop(0, this.colors.start);
  //     this.gradient.addColorStop(0.5, this.colors.middle);
  //     this.gradient.addColorStop(1, this.colors.end);
  //     this.chartData.datasets[0].backgroundColor = this.gradient;
  
  //   }
  
  //   this.renderChart(this.chartData, this.chartOptions)
  }
});
