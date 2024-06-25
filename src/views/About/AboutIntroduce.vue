<template>
  <section class="introduce">
    <!-- <div class="intro-first">
      <h2>{{ intro1[0].title }}</h2>
      <p>
        {{ intro1[0].text }}
      </p>
    </div> -->
    <div class="intro-second">
      <h2>{{ intro2[0].title }}</h2>
      <p>{{ intro2[0].text }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // intro1: [
      //   {
      //     title: '運動愛好者的首選',
      //     text: 'GYM 力 擁有頂尖的教練團隊，搭配最先進的健身器材，並提供多樣化的運動和舞蹈課程。此外，我們在台北、基隆、桃園、新竹、苗栗、台中、彰化、南投、雲林、嘉義、台南、高雄、屏東、宜蘭、花蓮等地設有寬敞的健身及休閒設施，讓健身成為您生活的一部分。'
      //   }
      // ],
      intro2: [
        {
          title: '給您全方位的健身體驗',
          text: '「GYM 力」專注於打造多元化健身體驗，不論是舒適的高級健身俱樂部、充滿樂趣的兒童遊樂場，還是活力四射的戶外運動場，都能滿足不同年齡層與健身需求。專業教練、現代化設備與豐富的團體課程，讓每位會員都能在這裡找到適合自己的健身方式，實現健康生活目標。'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.introduce {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;

  .intro-second {
    width: 100%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      width: 100%;
    }
    h2{
      color: #004EAF;
      margin: 10px 0;
      font-size: 30px;
    }
  }
}
</style>
