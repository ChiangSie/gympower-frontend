<template>
  <section class="place">
    <div class="place_card" v-for="card in list" :key="card.id">
      <div class="card_left">
        <h3>
          <div class="title-part1">{{ card.titlePart1 }}</div>
          <div class="title-part2">{{ card.titlePart2 }}</div>
        </h3>
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
          titlePart1: '戶外',
          titlePart2: '運動場',
          text: '根據各個會所的地點和環境條件，我們規劃了多種特殊的運動健身設施。例如：台北詠安店設有游泳池、桃園中壢店配備了籃球場、台中中正店擁有網球室。這些設施為了提供會員多樣化的運動選擇，滿足不同需求。'
        },
        {
          id: 2,
          imgSrc: '/src/assets/img/aboutus_slogan.jpg',
          titlePart1: '高級',
          titlePart2:'健身樂部',
          text: '根據各個會所的地點和環境條件，我們規劃了不同種的健身設備及環境供會員多種選擇，讓您在健身之餘，也能感受到尊貴與奢華。'
        },
        {
          id: 3,
          imgSrc: '/src/assets/img/aboutus_slogan.jpg',
          titlePart1: '兒童',
          titlePart2:'遊樂場',
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
  background-color: #F9F8F7;

  .place_card {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5% 0;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    .card_left {
      width: 55%;
      margin: 0 2%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p{
          font-size: 13px;
        }
      h3{
        font-size: 36px;
        font-weight: 600;
        .title-part1{
        color: #004EAF;
        }
        .title-part2{
        color: #71C4EF;  
        }
      }
    }
    .card_right {
      width: 60%;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        max-height: 300px;
        display: block;
      }
    }
  }
}
</style>
