<template>
  <section class="coach">
    <div class="banner_coach_img">
      <img src="~@/assets/img/banner_aboutus.jpg" alt="" />
    </div>
    <h1>最新消息</h1>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.coach {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 67px;
  padding: 3% 12%;
  position: relative;

  .banner_coach_img {
    width: 70%;
    aspect-ratio: 2.5/1;
    border-radius: 10px;
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
