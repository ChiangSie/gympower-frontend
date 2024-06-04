<template>
  <section class="newsclass">
    <h2>{{ title }}</h2>

    <div class="newsclass_info">
      <div class="newsclass_txt">
        <h3>{{ classtitle }}</h3>
        <p>{{ text }}</p>
      </div>
      <div class="newsclass_pic">
        <img :src="imgSrc" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: '最新消息',
      classtitle: '皮拉提斯核心訓練',
      text: '適合所有健身水平的學員。課程重點是通過控制、呼吸和精準動作來強化核心肌群，包括腹部、下背部和骨盆區域。訓練包括動作如卷腹、橋式和皮拉提斯百次等，有助於改善姿勢、增強核心力量及提升整體身體的協調性。',
      imgSrc: '/src/assets/img/banner_aboutus.jpg' //記得換圖片//
    }
  }
}
</script>

<style lang="scss" scoped>
.newsclass {
  width: 100%;
  padding: 3% 12%;

  .newsclass_info {
    width: 100%;
    margin: 3% 0%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .newsclass_txt {
      width: 50%;
      padding: 3% 0%;
    }

    .newsclass_pic {
      width: 50%;
      aspect-ratio: 2/1;

      img {
        vertical-align: middle;
        width: 100%;
        aspect-ratio: 2/1;
        object-fit: cover;
        object-position: 50% 50%;
      }
    }
  }
}
</style>
