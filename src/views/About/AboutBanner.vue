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
      imgSrc: '/src/assets/img/banner_aboutus.jpg',
      title: '關於我們'
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  margin-top: 67px;
  padding: 3% 12%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  .banner_aboutus_img {
    width: 70%;
    aspect-ratio: 2.5/1;
    border-radius: 10px;
    overflow: hidden;
    img {
      vertical-align: middle;
      width: 100%;
      aspect-ratio: 2.5/1;
      object-fit: cover;
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
