<template>
  <div>
    <!-- 1 -->
    <div class="outdoor-sports">
      <div class="header">場館分類</div>
      <div class="content">
        <div class="main-image">
          <img :src="selectedImage1" alt="Selected Image" />
        </div>
        <div class="info">
          <h3>高級健身俱樂部</h3>
          <p>
            根據各個會所的地點和環境條件，我們規劃了多種特殊的運動健身設施。例如：台北詠安店設有游泳池，讓喜愛游泳的會員能在舒適的環境中進行水中鍛鍊；桃園中壢店配備了籃球場，不僅滿足籃球愛好者的需求，還提供了團體籃球訓練課程；台中中正店擁有專業級別的網球室，會員可以在這裡享受高品質的網球運動。<br />
            除此之外，每個會所還配備了現代化的健身器材，包括最新款的跑步機、力量訓練設備以及綜合訓練器械，確保會員能夠進行全面的身體鍛鍊。我們還提供各類團體課程，例如瑜伽、有氧舞蹈、普拉提等，這些課程由經驗豐富的教練帶領，旨在提升會員的運動體驗，增加健身樂趣。
          </p>
          <div class="some-images">
            <img v-for="image1pic in images1" :key="image1pic.id" :src="parseImg(image1pic.image)" @click="selectImage1(image)" />
          </div>
        </div>
      </div>
    </div>

    <div class="separator-container">
      <div class="separator"></div>
    </div>

    <!-- 2 -->
    <div class="outdoor-sports">
      <div class="content">
        <div class="main-image">
          <img :src="selectedImage2" alt="Selected Image" />
        </div>
        <div class="info">
          <h3>高級健身俱樂部</h3>
          <p>
            根據各個會所的地點和環境條件，我們規劃了多種特殊的運動健身設施。例如：台北詠安店設有游泳池，讓喜愛游泳的會員能在舒適的環境中進行水中鍛鍊；桃園中壢店配備了籃球場，不僅滿足籃球愛好者的需求，還提供了團體籃球訓練課程；台中中正店擁有專業級別的網球室，會員可以在這裡享受高品質的網球運動。<br />
            除此之外，每個會所還配備了現代化的健身器材，包括最新款的跑步機、力量訓練設備以及綜合訓練器械，確保會員能夠進行全面的身體鍛鍊。我們還提供各類團體課程，例如瑜伽、有氧舞蹈、普拉提等，這些課程由經驗豐富的教練帶領，旨在提升會員的運動體驗，增加健身樂趣。
          </p>
          <div class="some-images">
            <img v-for="image2pic in images2" :key="image2pic.id" :src="parseImg(image2pic.image)" @click="selectImage2(image)" />
          </div>
        </div>
      </div>
    </div>

    <div class="separator-container">
      <div class="separator"></div>
    </div>

    <!-- 3 -->
    <div class="outdoor-sports">
      <div class="content">
        <div class="main-image">
          <img :src="selectedImage3" alt="Selected Image" />
        </div>
        <div class="info">
          <h3>高級健身俱樂部</h3>
          <p>
            根據各個會所的地點和環境條件，我們規劃了多種特殊的運動健身設施。例如：台北詠安店設有游泳池，讓喜愛游泳的會員能在舒適的環境中進行水中鍛鍊；桃園中壢店配備了籃球場，不僅滿足籃球愛好者的需求，還提供了團體籃球訓練課程；台中中正店擁有專業級別的網球室，會員可以在這裡享受高品質的網球運動。<br />
            除此之外，每個會所還配備了現代化的健身器材，包括最新款的跑步機、力量訓練設備以及綜合訓練器械，確保會員能夠進行全面的身體鍛鍊。我們還提供各類團體課程，例如瑜伽、有氧舞蹈、普拉提等，這些課程由經驗豐富的教練帶領，旨在提升會員的運動體驗，增加健身樂趣。
          </p>
          <div class="some-images">
            <img v-for="image3pic in images3" :key="image3pic.id" :src="parseImg(image3pic.image)" @click="selectImage3(image)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import selectedImage1 from '/src/assets/img/banner_aboutus.jpg'
import selectedImage2 from '/src/assets/img/banner_aboutus.jpg'
import selectedImage3 from '/src/assets/img/banner_aboutus.jpg'

export default {
  data() {
    return {
      selectedImage1,
      selectedImage2,
      selectedImage3,
      images1:[],
      images2:[],
      images3:[],
      // images1: [
      //   '/src/assets/img/about_gym_1.jpg',
      //   '/src/assets/img/about_gym_2.jpg',
      //   '/src/assets/img/about_gym_3.jpg',
      //   '/src/assets/img/about_gym_4.jpg'
      // ],
      // images2: [
      //   '/src/assets/img/about_kids_1.jpg',
      //   '/src/assets/img/about_kids_2.jpg',
      //   '/src/assets/img/about_kids_3.jpg',
      //   '/src/assets/img/about_kids_1.jpg',
        
      // ],
      // images3: [
      //   '/src/assets/img/about_gym_1.jpg',
      //   '/src/assets/img/about_gym_2.jpg',
      //   '/src/assets/img/about_gym_3.jpg',
      //   '/src/assets/img/about_gym_4.jpg'
      // ]
    }
  },
  methods: {
    selectImage1(image) {
      this.selectedImage1 = image;
    },
    selectImage2(image) {
      this.selectedImage2 = image;
    },
    selectImage3(image) {
      this.selectedImage3 = image;
    },
    parseImg(imgURL) {
      // 放在vue專案的圖檔路徑會被轉譯，因此需要這樣更改
      return new URL(`../../assets/img/${imgURL}`, import.meta.url).href
    },
  },
  mounted() {
        fetch(`${import.meta.env.BASE_URL}json/aboutplace1.json`)
            .then((res) => res.json())
            .then((json) => {
                //確認有沒有response
                console.log(json)
                //顯示用
                this.images1 = json
        }),
        fetch(`${import.meta.env.BASE_URL}json/aboutplace2.json`)
            .then((res) => res.json())
            .then((json) => {
                //確認有沒有response
                console.log(json)
                //顯示用
                this.images2 = json
        }),
        fetch(`${import.meta.env.BASE_URL}json/aboutplace3.json`)
            .then((res) => res.json())
            .then((json) => {
                //確認有沒有response
                console.log(json)
                //顯示用
                this.images3 = json
        })
  },
}
</script>

<style lang="scss" scoped>
.outdoor-sports {
  .header {
    background-color: #004eaf;
    color: white;
    text-align: center;
    padding: 16px;
    margin: 20px 35px;
    font-size: 25px;
    font-weight: 600;
  }

  .content {
    display: flex;
    justify-content: center;
    padding: 40px;

    .main-image {
      width: 40%;
      display: flex;
      justify-content: center;

      img {
        width: 80%;
        height: auto;
        max-height: 500px;
      }
    }

    .info {
      width: 55%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      h3 {
        margin: 20px 0 10px;
      }

      p {
        margin-bottom: 20px;
      }

      .some-images {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;

        img {
          width: 120px;
          height: 120px;
          cursor: pointer;
          transition: transform 0.2s;

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
}

.separator-container {
  display: flex;
  justify-content: center;
}

.separator {
  width: 90%;
  height: 1px;
  background-color: #898b8a;
}
</style>
