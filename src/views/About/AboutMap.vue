<template>
    <div id="app">
        <div class="title_area">
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
            placeData: []
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
        fetchPlaceData() {
            axios
                .get('/public/json/map.json') 
                .then((response) => {
                    this.placeData = response.data
                })
                .catch((error) => {
                    console.error('Error fetching place data:', error)
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
        this.fetchPlaceData() 
    }
}
</script>

<style>
* {
    font-family: Noto Serif TC;
}
svg {
    height: 100vh;
}
body {
    background-color: #f9f8f7;
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
h2 {
    font-size: 30px;
    font-weight: 600;
}
h6 {
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
