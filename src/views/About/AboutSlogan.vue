<template>
  <div class="features">
    <div class="feature" v-for="feature in features" :key="feature.title">
      <img :src="feature.icon" />
      <h4>{{ feature.title_cn }}</h4>
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: '/src/assets/img/about_pilates.png',
          title: 'Premium Environment',
          title_cn: '優質環境',
          description: '配備先進的健身器材，滿足各種有氧和力量訓練需求。'
        },
        {
          icon: '/src/assets/img/about_trainer.png',
          title: 'Professional Trainers',
          title_cn: '專業教練',
          description: '根據您的需求提供健康營養計劃，助您達成健身目標。'
        },
        {
          icon: '/src/assets/img/about_exercise.png',
          title: 'Advanced Equipment',
          title_cn: '高級設備',
          description: '提供乾淨舒適的淋浴設施，讓您在運動後放鬆身心。'
        },
        {
          icon: '/src/assets/img/about_course.png',
          title: 'Group Classes',
          title_cn: '團體課程',
          description: '專業教練根據您的需求量身訂製健身計劃，確保最佳效果。'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// *{
//   font-family: Noto Serif TC;
// }
.features {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: 16px 20px;
  background-color: #E9E9E9;
  height: 280px;
}

.feature {
  max-width: 230px;
  // height: 230px;
  // border-radius: 50%;
  // background-color: #D4EAF7;
  img {
  width: 45px;
  height: 45px;
  margin-bottom: 10px;
}
}

.feature {
  h3, h4 {
    font-size: 18px;
    margin: 3px 0;
  }
  p {
    font-size: 13px;
    color: #666;
  }
}
</style>
