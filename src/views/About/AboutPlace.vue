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
            <img v-for="(image, index) in images1" :key="index" :src="image" @click="selectImage1(image)" />
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
          <h3>兒童遊樂場</h3>
          <p>
            健身房內的兒童遊樂場是專為家長提供便利的設施，讓他們在健身時能放心讓孩子在安全、有趣的環境中玩耍。遊樂場配備了各種年齡適宜的遊樂設備，如滑梯、攀爬架、球池和積木區，滿足不同年齡段兒童的需求。專業的遊樂場工作人員會全程監護，確保孩子們的安全和愉快。同時，遊樂場內的設備都經過嚴格的安全檢查和定期維護，確保孩子們能在無憂的環境中活動。此外，遊樂場還設有舒適的家長休息區，讓家長可以隨時觀察孩子的情況並放鬆片刻。這樣的設施不僅提升了健身房的服務質量，也讓家長們能夠兼顧運動和育兒，享受更平衡的生活方式。兒童遊樂場的設置，使健身房成為一家人共同的健康樂園，讓孩子們也能在運動的氛圍中度過快樂的時光。
          </p>
          <div class="some-images">
            <img v-for="(image, index) in images2" :key="index" :src="image" @click="selectImage2(image)" />
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
            <img v-for="(image, index) in images3" :key="index" :src="image" @click="selectImage3(image)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImage1: '/src/assets/img/about_gym_1.jpg',
      images1: [
        '/src/assets/img/about_gym_1.jpg',
        '/src/assets/img/about_gym_2.jpg',
        '/src/assets/img/about_gym_3.jpg',
        '/src/assets/img/about_gym_4.jpg'
      ],
      selectedImage2: '/src/assets/img/about_kids_2.jpg',
      images2: [
        '/src/assets/img/about_kids_1.jpg',
        '/src/assets/img/about_kids_2.jpg',
        '/src/assets/img/about_kids_3.jpg',
        '/src/assets/img/about_kids_4.jpg',
        
      ],
      selectedImage3: '/src/assets/img/about_outside_3.jpg',
      images3: [
        '/src/assets/img/about_outside_1.jpg',
        '/src/assets/img/about_outside_2.jpg',
        '/src/assets/img/about_outside_3.jpg',
        '/src/assets/img/about_outside_4.jpg',
    ]
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
    }
  }
}
</script>

<style lang="scss" scoped>
.outdoor-sports {
  .header {
    background-color: #004eaf;
    color: white;
    text-align: center;
    padding: 16px 0 16px;
    margin: 20px 30px;
    height: 55px;
    font-size: 25px;
    font-weight: 600;
  }

  .content {
    display: flex;
    justify-content: center;
    padding: 40px;

    .main-image {
      width: 40%;
      height: 450px;
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
        margin: 20px 0 20px;
      }

      p {
        margin: 20px 0 20px;
        font-size: 14px;
      }

      .some-images {
        display: flex;
        justify-content: space-between;
        padding-top: 24px;

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
