<template>
  <div class="section section-banner">
    <div class="container container-banner">
        <div class="banner-title">
          <h1>{{ title }}</h1>
        </div>
        <div class="banner-img">
            <img src="../assets/img/banner_aboutus.jpg" alt="banner" />
          </div>
      </div>
  </div>
</template>

<script>
export default {
   props: ['title','imgSrc'],
  data() {
    return {
   
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
.container-banner {
  display: flex;
  flex-direction: row;
  padding-top: 80px;
  justify-content: center;
  .banner-title{
    width: 30%;
    text-align: center;
    align-self: center;
  }
  @media screen and (max-width: 768px) {
    .banner-title{
      position: absolute;
      width: 100%;
      color: #fff;
    }
  }
  .banner-img{
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
  @media screen and (max-width: 768px) {
    .banner-img{
      width: 100%;
    }
  }
}
@media screen and (max-width: 768px) {
  .container-banner {
    padding-top: 70px;
  }
}
</style>
