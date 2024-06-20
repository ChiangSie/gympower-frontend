<template>
  <div class="features">
    <div class="feature" v-for="feature in features" :key="feature.title">
      <img :src="parseImg(feature.icon)" />
      <h3>{{ feature.title }}</h3>
      <!-- <img :src="feature.icon" /> -->
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
      return new URL(`../../assets/img/${imgURL}`, import.meta.url).href
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
}

.feature {
  max-width: 230px;
  // height: 230px;
  // border-radius: 50%;
  // background-color: #D4EAF7;
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
</style>
