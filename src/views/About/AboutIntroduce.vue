<template>
  <section class="introduce">
    <div class="intro-first">
      <h2>{{ intro1[0].title }}</h2>
      <p>
        {{ intro1[0].text }}
      </p>
    </div>
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
      intro1: [
        {
          title: '運動愛好者的首選',
          text: 'GYM 力 擁有頂尖的教練團隊，搭配最先進的健身器材，並提供多樣化的運動和舞蹈課程。此外，我們在台北、基隆、桃園、新竹、苗栗、台中、彰化、南投、雲林、嘉義、台南、高雄、屏東、宜蘭、花蓮等地設有寬敞的健身及休閒設施，讓健身成為您生活的一部分。'
        }
      ],
      intro2: [
        {
          title: '多品牌經營',
          text: 'GYM力以擁有健康的身體為首要目標 ，為提供各年齡層及族群，提供每個人所想要的健身環境。'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.introduce {
  width: 100%;
  padding: 3% 12%;
  display: flex;
  flex-direction: column;
  text-align: center;
  .intro-first {
    width: 100%;
    padding: 10%;
  }
  .intro-second {
    width: 100%;
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      width: 50%;
    }
  }
}
</style>
