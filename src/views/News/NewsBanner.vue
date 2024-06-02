<template>
  <section class="news">
    <div class="banner_newss_img">
      <img :src="imgSrc" alt="banner" />
    </div>
    <h1>最新消息</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: '/src/assets/img/banner_aboutus.jpg', //後續要更改圖片//
      title: '最新消息'
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  width: 100%;
  padding: 3% 10%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  .banner_news_img {
    width: 70%;
    aspect-ratio: 2.5/1;
    img {
      width: 100%;
      aspect-ratio: 2.5/1;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
  h1 {
    transform: translate(0, -50%);
    position: absolute;
    top: 50%;
    left: 20%;
  }
}
</style>
