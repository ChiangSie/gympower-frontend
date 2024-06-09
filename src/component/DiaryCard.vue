<template>
  <router-link :to="{ name: 'DiaryPage' }">
    <div class="card">
      <div class="pic">
        <img :src="cardData.imgSrc" />
        <div class="box"></div>
        <div class="title">
          <h3>{{ cardData.title }}</h3>
        </div>
      </div>
      <div class="txt">
        <p>{{ cardData.text }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'DiaryCard',
  props: {
    cardData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}

a {
  text-decoration: none;
  color: #000000;
}

  .card {
    .pic {
      position: relative;
      border-radius: 10px;

      img {
        border-radius: 10px;
      }

      .title {
        position: absolute;
        width: 200px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 3;
      }

      .box {
        position: absolute;
        width: 100%;
        height: 150px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fffeee9d;
      }
    }

  }
</style>