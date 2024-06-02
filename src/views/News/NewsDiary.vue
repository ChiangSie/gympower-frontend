<template>
  <section class="newsdiary">
    <h2>{{ newsdiarytitle }}</h2>
    <div class="diary_area">
      <div class="diary_card" v-for="card in diarylist" :key="card.id">
        <div class="card_pic">
          <img :src="card.imgSrc" alt="" />
          <h4>{{ card.imgTitle1 }}</h4>
          <h3>{{ card.imgTitle2 }}</h3>
        </div>
        <p>{{ card.text }}</p>
        <p>{{ card.time }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newsdiarytitle: '健身交換日記',
      diarylist: [
        {
          id: 1,
          imgSrc: '',
          imgTitle1: '健康飲食',
          imgTitle2: '健身者的營養指南',
          text: '在健身的過程中，飲食扮演著至關重要的角色。以下是一些關於如何通過飲食來支持健身目標的建議',
          time: '2024.05.20'
        },
        {
          id: 2,
          imgSrc: '',
          imgTitle1: '健康飲食',
          imgTitle2: '健身者的營養指南',
          text: '在健身的過程中，飲食扮演著至關重要的角色。以下是一些關於如何通過飲食來支持健身目標的建議',
          time: '2024.05.20'
        },
        {
          id: 3,
          imgSrc: '',
          imgTitle1: '健康飲食',
          imgTitle2: '健身者的營養指南',
          text: '在健身的過程中，飲食扮演著至關重要的角色。以下是一些關於如何通過飲食來支持健身目標的建議',
          time: '2024.05.20'
        },
        {
          id: 4,
          imgSrc: '',
          imgTitle1: '健康飲食',
          imgTitle2: '健身者的營養指南',
          text: '在健身的過程中，飲食扮演著至關重要的角色。以下是一些關於如何通過飲食來支持健身目標的建議',
          time: '2024.05.20'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.newsdiary {
  width: 100%;
  padding: 3% 12%;
  h2 {
    text-align: center;
  }
  .diart_area {
    display: flex;
    flex-direction: row;
  }
}
</style>
