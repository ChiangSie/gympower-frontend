<template>
  <section>
    <div class="banner_aboutus_img">
      <img src="~@/assets/img/banner_aboutus.jpg" alt="" />
    </div>
    <h1>最新消息</h1>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 3% 10%;
  position: relative;

  .banner_aboutus_img {
    width: 60%;
    aspect-ratio: 2.5/1;

    img {
      width: 100%;
      aspect-ratio: 2/1;
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
