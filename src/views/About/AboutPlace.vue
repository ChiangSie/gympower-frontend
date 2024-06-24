<template>
  <div>
    <!-- 場館分類標題 -->
    <div class="header">場館分類</div>

    <div class="outdoor-sports">
      <div v-for="(section, index) in sections" :key="index">
        <div class="content">
          <div class="main-image">
            <img :src="section.selectedImage" alt="Selected Image" />
          </div>
          <div class="info">
            <h3>{{ section.title }}</h3>
            <p>{{ section.description }}</p>
            <div class="some-images">
              <img v-for="image in section.images" :key="image" :src="image" @click="selectImage(index, image)" />
            </div>
          </div>
        </div>
        <div class="separator-container" v-if="index < sections.length - 1">
          <div class="separator"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          selectedImage: '/src/assets/img/about/about_gym_2.jpg',
          title: '高級健身俱樂部',
          description: `根據各個會所的地點和環境條件，我們規劃了多種特殊的運動健身設施。例如：台北詠安店設有游泳池，讓喜愛游泳的會員能在舒適的環境中進行水中鍛鍊；桃園中壢店配備了籃球場，不僅滿足籃球愛好者的需求，還提供了團體籃球訓練課程；台中中正店擁有專業級別的網球室，會員可以在這裡享受高品質的網球運動。除此之外，每個會所還配備了現代化的健身器材，包括最新款的跑步機、力量訓練設備以及綜合訓練器械，確保會員能夠進行全面的身體鍛鍊。我們還提供各類團體課程，例如瑜伽、有氧舞蹈、普拉提等，這些課程由經驗豐富的教練帶領，旨在提升會員的運動體驗，增加健身樂趣。`,
          images: [
            '/src/assets/img/about/about_gym_1.jpg',
            '/src/assets/img/about/about_gym_2.jpg',
            '/src/assets/img/about/about_gym_3.jpg',
            '/src/assets/img/about/about_gym_4.jpg',
            
          ]
        },
        {
          selectedImage: '/src/assets/img/about/about_kids_2.jpg',
          title: '兒童遊樂場',
          description: `歡迎來到 GYM 力的兒童遊樂場！我們專為家長設計了一個安全且充滿樂趣的兒童遊樂區，讓您在健身的同時，孩子們也能盡情玩耍。我們的遊樂場配備了多種豐富的設施，如滑梯、攀爬架和球池，讓孩子們在快樂中提升體能與協調能力。為確保孩子們的安全，遊樂場內有專業的看護人員全程陪伴，並定期對設施進行消毒和維護。我們還設置了急救設備，隨時應對突發情況。這裡不僅是孩子們釋放精力的好地方，也是他們結交新朋友、發展社交能力的理想場所。來 GYM 力，讓您和您的孩子都能擁有一個健康、快樂的生活方式！加入我們，讓健身變成全家人共同的樂趣！`,
          images: [
            '/src/assets/img/about/about_kids_1.jpg',
            '/src/assets/img/about/about_kids_2.jpg',
            '/src/assets/img/about/about_kids_3.jpg',
            '/src/assets/img/about/about_kids_4.jpg',
            
          ]
        },
        {
          selectedImage:'/src/assets/img/about/about_outside_2.jpg',
          title: '戶外運動場',
          description: `歡迎來到 GYM 力的戶外運動場！我們的戶外運動場為您提供了一個開放、健康且充滿活力的運動空間，讓您在大自然中享受運動的樂趣。這裡設有多種運動設施，如跑道、籃球場、排球場和戶外健身器材，適合各個年齡段和不同運動愛好者。在這裡，您可以享受清新的空氣和陽光，進行各類運動訓練和團體活動。我們還定期舉辦戶外健身課程和社區活動，讓您在鍛煉的同時，結識更多志同道合的朋友。戶外運動場設施完善，並定期維護，確保您的運動體驗安全舒適。來 GYM 力，體驗戶外運動的無限可能！無論是早晨的慢跑，還是傍晚的籃球比賽，這裡都是您釋放壓力、保持健康的理想場所。快來加入我們，感受戶外運動的魅力吧！`,
          images: [
            '/src/assets/img/about/about_outside_1.jpg',
            '/src/assets/img/about/about_outside_2.jpg',
            '/src/assets/img/about/about_outside_3.jpg',
            '/src/assets/img/about/about_outside_4.jpg',
            
          ]
        }
      ]
    };
  },
  methods: {
    selectImage(index, image) {
      this.sections[index].selectedImage = image;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #71C4EF;
  color: white;
  text-align: center;
  padding: 16px 0;
  margin: 20px 30px;
  height: 55px;
  font-size: 25px;
  font-weight: 600;
}

.outdoor-sports {
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
        margin: 20px 0;
      }

      p {
        margin: 20px 0;
        font-size: 14px;
      }

      .some-images {
        display: flex;
        justify-content: space-between;
        padding-top: 40px;

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
@media (max-width: 768px) {
  .outdoor-sports {
    .content {
      flex-direction: column; 
      align-items: center;

      .main-image {
        width: 100%;
        height: auto; 
        margin-bottom: 20px;

        img {
          width: 100%; 
          height: auto;
        }
      }

      .info {
        width: 100%;
        margin-bottom: 20px;
        text-align: center;
      }

      .some-images {
        justify-content: center; 
        img {
          width: 45px;
          height: 45px;
          gap: 5px;
        }
      }
    }
  }
}
</style>
