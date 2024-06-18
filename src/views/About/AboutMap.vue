<template>
    <div id="app">
        <div class="title_area">
            <!-- <h1>Taiwan<br />Weather Map<br /></h1> -->
            <h1>全國門市據點</h1>
            <hr />
            <div class="forcast" v-if="now_area">
                <h2>{{ now_area.place }} {{ now_area.tag }}</h2>
                <h4>電話：{{ now_area.low }}</h4>
                <h4>地址：{{ now_area.high }}</h4>
                <h6>營業時間：{{ now_area.weather }}</h6>
                
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
                { tag: '大安店', place: '台北', low:'02-32231122',high: '台北市大安區359號', weather: '平日:10:00-23:00 | 假日:9:30-23:30'},
                { tag: '板橋店', place: '新北', low:'02-33266722', high: '新北市板橋區中正路123號', weather: '平日:10:00-23:00 | 假日:9:30-23:30'},
                { tag: '中港店', place: '台中', low:'04-32231122', high: '台中市台灣大道一段227號6樓', weather: '平日:9:00-21:30 | 假日:8:00-23:30' },
                { tag: '府城店', place: '臺南', low:'06-37788190', high: '台南市東山路122號', weather: '平日:10:00-23:00 | 假日:9:30-23:30' },
                { tag: '小港店', place: '高雄', low:'07-37788190', high: '高雄市小港區中正東路1301號12樓', weather: '平日:10:00-23:00 | 假日:9:30-23:30' },
                { tag: '中正店', place: '基隆', low:'02-33266722', high: '基隆市中正路213號5樓', weather: '平日:9:00-21:30 | 假日:8:00-23:30' },
                { tag: '中原店', place: '桃園', low:'03-33266722', high: '桃園市中壢區中原路223號', weather: '平日:10:00-23:00 | 假日:9:30-23:30' },
                { tag: '科技園區店', place: '新竹', low:'03-33266722', high: '新竹市科技園區路1號', weather: '平日:10:00-23:00 | 假日:9:30-23:30' },
                { tag: '竹北店', place: '新竹', low:'03-33266722', high:'新竹縣竹北市中正西路129號7樓', weather: '平日:10:00-23:00 | 假日:9:30-23:30' },
                { tag: '苗栗店', place: '苗栗', low:'037-33266722', high: '苗栗市中華路178號', weather: '平日:10:00-23:00 | 假日:9:30-23:30' },
                { tag: '員林店', place: '彰化', low:'04-22314557', high: '彰化縣員林市莒光路109號2樓', weather: '平日:10:00-23:00 | 假日:9:30-23:30' },
                { tag: '埔里店', place: '南投', low:'04-22314557', high: '南投縣埔里鎮五平街166號', weather: '平日:9:00-21:30 | 假日:8:00-23:30' },
                { tag: '斗六店', place: '雲林', low:'05-22314987', high: '雲林縣斗六市振平街331號', weather: '平日:10:00-23:00 | 假日:9:30-23:30' },
                { tag: '嘉義市店', place: '嘉義', low:'05-22314557', high: '嘉義市圓環路1號', weather: '平日:10:00-23:00 | 假日:9:30-23:30' },
                { tag: '民雄店', place: '嘉義縣', low:'05-22266907', high: '嘉義縣民雄鄉中祿路337號', weather: '平日:10:00-23:00 | 假日:9:30-23:30' },
                { tag: '屏東大學店', place: '屏東', low:'08-22314557', high: '屏東市民生路4-18號', weather: '平日:10:00-23:00 | 假日:9:30-23:30' },
                { tag: '羅東店', place: '宜蘭', low: '03-22314557', high: '宜蘭縣羅東鎮文化路228號', weather: '平日:10:00-23:00 | 假日:9:30-23:30' },
                { tag: '東華大學店', place: '花蓮', low:'03-22314557', high: '花蓮縣壽豐鄉志學村大學路2段1號', weather: '平日:9:00-21:30 | 假日:8:00-23:30' },
                { tag: '鐵花村店', place: '台東縣', low:'089-22314557', high: '台東縣台東市大學路二段369號', weather: '平日:9:00-21:30 | 假日:8:00-23:30' },
                { tag: '馬公店', place: '澎湖縣', low:'06-37788190', high:'澎湖縣馬公市忠門路5號' , weather: '平日:10:00-23:00 | 假日:9:30-23:30' },
                { tag: '中山店', place: '金門縣', low:'082-37788190', high: 24, weather: '平日:10:00-23:00 | 假日:9:30-23:30' },
                { tag: 'lienchiang_country', place:'連江縣', low: 20, high: 24, weather: '平日:9:00-21:30 | 假日:8:00-23:30' }
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
    /* font-family: 'Fjalla One'; */
    font-family: Noto Serif TC;

}

svg {
    height: 100vh;
}

body {
    background-color: #f9f8f7;
    /* background-color: #ebf2f6; */
    /* margin: 32px; */
}
path {
    stroke: #002451;
    fill: transparent;
    transition: 0.5s;
    cursor: pointer;
}

path:hover {
    fill: #D4EAF7;
    transform: translate(-5px, -5px);
}

.title_area {
    position: absolute;
    right: 80px;
    top: 900px;
    color: rgb(26, 68, 76);
    border: 5px solid rgb(26, 68, 76);
    border-radius:20px;
    padding: 40px 35px;
    background-color: #dfdfdf;
}

hr {
    width: 160px;
    margin-left: 0;
    border: none;
    border-bottom: solid 5px #b99362;
}

h1 {
    margin: 0;
    padding: 0;
    font-weight: 600;
}
h2{
    font-size: 30px;
    font-weight: 600;
}
h6{
    font-size: 22px;
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