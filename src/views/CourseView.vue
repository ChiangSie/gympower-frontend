<template>
  <section class="course">
    <div class="banner_course_img">
      <img src="~@/assets/img/banner_aboutus.jpg" alt="" />
    </div>
    <h1>課程資訊</h1>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.course {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 67px;
  padding: 3% 12%;
  position: relative;

  .banner_course_img {
    width: 70%;
    aspect-ratio: 2.5/1;
    border-radius: 10px;
    overflow: hidden;

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
