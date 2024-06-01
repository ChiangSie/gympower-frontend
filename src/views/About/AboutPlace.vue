<template>
  <section class="place">
    <div class="place_card" v-for="card in list" :key="card.id">
      <div class="card_left">
        <h3>{{ card.title }}</h3>
        <p>{{ card.text }}</p>
      </div>
      <div class="card_right">
        <img :src="card.imgSrc" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          imgSrc: '/src/assets/img/aboutus_slogan.jpg',
          title: 'GYM力戶外運動場',
          text: '根據各個會所的地點和環境條件，我們規劃了多種特殊的運動健身設施。例如：台北詠安店設有游泳池、桃園中壢店配備了籃球場、台中中正店擁有網球室。這些設施為了提供會員多樣化的運動選擇，滿足不同需求。'
        },
        {
          id: 2,
          imgSrc: '/src/assets/img/aboutus_slogan.jpg',
          title: 'GYM力高級健身樂部',
          text: '根據各個會所的地點和環境條件，我們規劃了不同種的健身設備及環境供會員多種選擇，讓您在健身之餘，也能感受到尊貴與奢華。'
        },
        {
          id: 3,
          imgSrc: '/src/assets/img/aboutus_slogan.jpg',
          title: 'GYM力兒童遊樂場',
          text: '忙碌的爸爸媽媽在運動之餘，不用擔心小寶貝在家沒人照顧，來到GYM力健身房，提供您的孩子免費使用兒童遊樂場，並且有專人替您照顧您的孩子，除了讓您擁有健康身體，也能兼顧家庭。'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.place {
  width: 100%;
  padding: 3% 12%;
  .place_card {
    width: 100%;
    padding: 3% 12%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5% 0;
    .card_left {
      width: 40%;
    }
    .card_right {
      width: 40%;
      aspect-ratio: 1/1;
      img {
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
        object-position: 50% 50%;
      }
    }
  }
}
</style>
