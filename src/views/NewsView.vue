<template>
  <section class="aboutus">
    <div class="banner_aboutus_img">
      <img src="~@/assets/img/banner_aboutus.jpg" alt="" />
    </div>
    <h1>最新消息</h1>
  </section>

  <section class="slogan">
    <p>
      GYM 力的誕生源於我們對健康和運動的熱愛，以及對改善人們生活質量的強烈願望。
      在創始人親身經歷了通過健身改變生活的過程後，他們深刻認識到健身對於提升體能、強化心理素質以及增進整體健康的重要性。
      因此，GYM
      力的創立目標是為社區提供一個專業、友好且充滿激勵的健身環境，讓每個人都能找到屬於自己的健身方式。
    </p>
    <div class="slogan_img">
      <img src="~@/assets/img/aboutus_slogan.jpg" alt="" />
    </div>
  </section>
</template>

<script></script>

<style lang="scss">
section {
  width: 100%;
  padding: 3% 10%;
}
.aboutus {
  display: flex;
  justify-content: flex-end;
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
