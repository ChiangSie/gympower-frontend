<template>
<div id="app">
    <div class="title_area">
    <h1>Taiwan<br />Weather Map<br /></h1>
    <hr />
    <div class="forcast" v-if="now_area">
        <h5>{{ now_area.place }} {{ now_area.tag }}</h5>
        <h4>{{ now_area.low }}~{{ now_area.high }}°C</h4>
        <h2>{{ now_area.weather }}</h2>
    </div>
    </div>
    <div v-html="svgContent"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      now_area: null,
      svgContent: '',
      filter: '',
      placeData: [
        { tag: 'taipei_city', place: '臺北市', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'new_taipei_city', place: '新北市', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'taichung_city', place: '台中市', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'tainan_city', place: '臺南市', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'kaohsiung_city', place: '高雄市', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'keelung_city', place: '基隆市', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'taoyuan_country', place: '桃園市', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'hsinchu_city', place: '新竹市', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'hsinchu_country', place: '新竹縣', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'miaoli_country', place: '苗栗縣', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'changhua_country', place: '彰化縣', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'nantou_country', place: '南投縣', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'yunlin_country', place: '雲林縣', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'chiayi_city', place: '嘉義市', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'chiayi_country', place: '嘉義縣', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'pingtung_country', place: '屏東縣', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'yilan_country', place: '宜蘭縣', low: 20, 高: 24, weather: 'Sunny' },
        { tag: 'hualien_country', place: '花蓮縣', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'taitung_country', place: '台東縣', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'penghu_country', place: '澎湖縣', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'kinmen_country', place: '金門縣', low: 20, high: 24, weather: 'Sunny' },
        { tag: 'lienchiang_country', place: '連江縣', low: 20, high: 24, weather: 'Sunny' }
      ]
    }
  },
  computed: {
    now_area() {
      const result = this.placeData.filter((obj) => obj.tag === this.filter)
      return result.length > 0 ? result[0] : null
    }
  },
  methods: {
    fetchSvg() {
      axios
        .get('/src/assets/img/taiwan_map.svg')
        .then((response) => {
          this.svgContent = response.data
          this.$nextTick(() => {
            this.addMouseEventListeners()
          })
        })
        .catch((error) => {
          console.error('Error fetching SVG:', error)
        })
    },
    addMouseEventListeners() {
      const svgPaths = this.$el.querySelectorAll('path')
      svgPaths.forEach((path) => {
        path.addEventListener('mouseenter', this.handleMouseEnter)
      })
    },
    handleMouseEnter(event) {
      const tagname = event.target.getAttribute('data-name')
      if (tagname) {
        this.filter = tagname
      }
    }
  },
  mounted() {
    this.fetchSvg()
  }
}
</script>

<style>
* {
  font-family: 'Fjalla One';
}

svg {
  height: 100vh;
}

body {
  background-color: rgba(34, 34, 34, 0.9);
}

path {
  stroke: white;
  fill: transparent;
  transition: 0.5s;
  cursor: pointer;
}

path:hover {
  fill: #b99362;
  transform: translate(-5px, -5px);
}

.title_area {
  position: absolute;
  right: 20px;
  top: 20px;
  color: white;
  font-size: 25px;
}

hr {
  width: 100px;
  margin-left: 0;
  border: none;
  border-bottom: solid 2px #b99362;
}

h1 {
  margin: 0;
  padding: 0;
}

.forcast h2,
.forcast h4,
.forcast h5 {
  margin: 0;
}

.forcast h2 {
  margin-top: 50px;
}
</style>
