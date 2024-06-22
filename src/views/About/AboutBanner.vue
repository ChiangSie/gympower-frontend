<template>
  <section class="banner">
    <div class="banner_aboutus_img">
      <img :src="imgSrc" alt="banner" />
    </div>
    <h1>{{ title }}</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: '/src/assets/img/banner/banner_6.jpg',
      title: '關於我們'
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  margin-top: 40px;
  // padding: 3% 12%;
  // display: flex;
  // justify-content: flex-end;
  position: relative;
  .banner_aboutus_img {
    width: 100%;
    aspect-ratio: 2.5/1;
    // border-radius: 10px;
    overflow: hidden;
    img {
      vertical-align: middle;
      width: 100%;
      height: 400px;
      // aspect-ratio: 2.5/1;
      object-fit: cover;
      opacity: 70%;
    }
  }
  h1 {
    transform: translate(0, -50%);
    position: absolute;
    top: 40%;
    left: 42%;
  }
}
</style>
