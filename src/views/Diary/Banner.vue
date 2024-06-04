<template>
  <div class="banner">
    <h1>{{ title }}</h1>
    <div class="banner_aboutus_img">
      <img :src="imgSrc" alt="banner" />
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      imgSrc: '/src/assets/img/banner_aboutus.jpg',
      title: '健身日記'
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  height: 200px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  gap: 5%;
  .banner_aboutus_img {
    width: 70%;
  }
  h1 {
    justify-self: center;
    align-self: center;
  }
}

</style>
