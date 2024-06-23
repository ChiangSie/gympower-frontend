<!-- <template>
  <div class="features">
    <div class="feature" v-for="feature in features" :key="feature.title">
      <img :src="parseImg(feature.icon)" />
      <h4>{{ feature.title_cn }}</h4>
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features:[]
    }
  },
  mounted() {
        fetch(`${import.meta.env.BASE_URL}json/aboutslong.json`)
            .then((res) => res.json())
            .then((json) => {
                //確認有沒有response
                console.log(json)
                //顯示用
                this.features = json
            })
  },
  methods:{
    parseImg(imgURL) {
      // 放在vue專案的圖檔路徑會被轉譯，因此需要這樣更改
      return new URL(`/src/assets/img/about/${imgURL}`, import.meta.url).href
    },
  }
}
</script>

<style lang="scss" scoped>
// *{
//   font-family: Noto Serif TC;
// }
.features {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: 16px 20px;
  background-color: #E9E9E9;
  height: 280px;
  border: 2px solid #002451;
}

.feature {
  max-width: 230px;
  background-color: 
  img {
  width: 45px;
  height: 45px;
  margin-bottom: 10px;
}
}

.feature {
  h3, h4 {
    font-size: 18px;
    margin: 3px 0;
  }
  p {
    font-size: 13px;
    color: #666;
  }
}
</style> -->

<template>
  <div class="features">
    <div
      class="feature"
      v-for="(feature, index) in features"
      :key="feature.title"
      :class="{ 'white-background': index % 2 === 0, 'blue-background': index % 2 !== 0 }"
    >
      <img :src="parseImg(feature.icon)" />
      <h4>{{ feature.title_cn }}</h4>
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: []
    }
  },
  mounted() {
    fetch(`${import.meta.env.BASE_URL}json/aboutslong.json`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        this.features = json
      })
  },
  methods: {
    parseImg(imgURL) {
      return new URL(`/src/assets/img/about/${imgURL}`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss" scoped>
.features {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  text-align: center;
  margin: 16px 20px;
  background-color: #e9e9e9;
  height: 280px;
  // border: 2px solid #002451;
  padding: 0;
}

.feature {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  img {
    width: 45px;
    height: 45px;
    margin-bottom: 10px;
  }

  h3,
  h4 {
    font-size: 18px;
    margin: 3px 0;
  }

  p {
    font-size: 13px;
    color: #666;
  }
}

.white-background {
  background-color: white;
}

.blue-background {
  background-color: #d1e8ff;
}

.features .feature:not(:last-child) {
  margin-right: -2px;
}
</style>
