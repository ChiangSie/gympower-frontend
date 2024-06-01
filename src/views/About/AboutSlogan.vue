<template>
  <section class="slogan">
    <p>
      {{ text }}
    </p>
    <div class="slogan_img">
      <img :src="imgSrc" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: '/src/assets/img/aboutus_slogan.jpg',
      text: 'GYM 力的誕生源於我們對健康和運動的熱愛，以及對改善人們生活質量的強烈願望。在創始人親身經歷了通過健身改變生活的過程後，他們深刻認識到健身對於提升體能、強化心理素質以及增進整體健康的重要性。因此，GYM力的創立目標是為社區提供一個專業、友好且充滿激勵的健身環境，讓每個人都能找到屬於自己的健身方式。'
    }
  }
}
</script>

<style lang="scss" scoped>
.slogan {
  width: 100%;
  padding: 3% 12%;
  display: flex;
  flex-direction: row;
  // justify-content: center;
  gap: 15px;
  p {
    width: 35%;
    margin-left: 10%;
  }
  .slogan_img {
    width: 35%;
    aspect-ratio: 1/1;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
}
</style>
