<template>
  <section class="newsdiary">
    <h2>{{ newsdiarytitle }}</h2>
    <div class="row">
      <div class="col col-6 col-md-6 col-lg-3 col-xl-3" v-for="card in paginatedCards" :key="card.id">
        <Diary :cardData="card" />
      </div>
    </div>
    <div class="page">
        <a href=""
        v-for="n in totalPages"
        :key="n"
        @click.prevent="currentPage = n"
        :class="{ 'active-page': currentPage === n }"
        >{{ n }}</a>
    </div>
  </section>
</template>

<script>
import Diary from '@/component/DiaryCard.vue';
export default {
  components: {
    Diary
  },
  computed: {
    paginatedCards() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.sourceData.slice(start, end);
    },
    totalPages() {
      // 自動生成頁碼
      return Math.ceil(this.sourceData.length / this.itemsPerPage);
    },
  },
    mounted() {
    fetch(`${import.meta.env.BASE_URL}json/diarylist.json`)
      .then((res) => res.json())
      .then((json) => {
        //確認有沒有response
        console.log(json);
        //顯示用
        this.sourceData = json;
      });
  },
  data() {
    return {
      newsdiarytitle: '健身交換日記',
      sourceData: [],
      currentPage: 1,
      // 每頁顯示的卡片數量
      itemsPerPage: 4,
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
    padding: 1rem 0;
  }

}

  .page {
    text-align: center;
    padding: 1rem 0;
    a {
      margin: 0 0.3rem;
      padding: 0.3rem 0.5rem;
      background-color: #999;
      color: #fff;
      border-radius: 50%;
      align-self: center;
      text-decoration: none;
    }
    .active-page {
      background-color: #002451;
    }
  }

  @media screen and (max-width: 768px) {
    .page {
      padding-top: 0.5rem;
    }
  }

</style>
