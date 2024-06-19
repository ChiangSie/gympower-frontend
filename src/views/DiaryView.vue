<template>
  <Banner :title="'健身日記'" :imgSrc="'src/assets/img/banner_aboutus.jpg'" />

  <div class="section section-search">
    <div class="container container-search">
      <div class="search">
        <p>健身交換日記</p>
        <input class="search-input" type="text" v-model="searchText" />
        <button class="search-btn">+ 新增</button>
      </div>
      <div class="page">
        <a
          href=""
          v-for="n in totalPages"
          :key="n"
          @click.prevent="currentPage = n"
          :class="{ 'active-page': currentPage === n }"
          >{{ n }}</a
        >
      </div>
    </div>
  </div>
  <div class="section section-diary">
    <div class="container container-diary">
      <div class="row">
        <div
          class="col-6 col-md-4 col-lg-4 col-xl-3"
          v-for="card in paginatedCards"
          :key="card.id"
        >
          <DiaryCard :cardData="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Banner from "../component/Banner.vue";
import DiaryCard from "../component/DiaryCard.vue";
</script>

<script>
export default {
  components: {
    Banner,
    DiaryCard,
  },
  data() {
    return {
      // v-model 參考
      searchText: "",
      // 引入 json 資料
      sourceData: [],
      // 當前頁碼
      currentPage: 1,
      // 每頁顯示的卡片數量
      itemsPerPage: 8,
    };
  },
  computed: {
    filteredCards() {
      return this.sourceData.filter(
        (card) =>
          card.text.toLowerCase().includes(this.searchText.toLowerCase()) ||
          card.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
          card.date.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
    paginatedCards() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredCards.slice(start, end);
    },
    totalPages() {
      // 自動生成頁碼
      return Math.ceil(this.filteredCards.length / this.itemsPerPage);
    },
  },
  mounted() {
    fetch("/json/diarylist.json")
      .then((res) => res.json())
      .then((json) => {
        //確認有沒有response
        console.log(json);
        //顯示用
        this.sourceData = json;
      });
  },
};
</script>
<style lang="scss" scoped>
.section {
  background-color: #f9f8f7;
}

img {
  width: 100%;
}

a {
  text-decoration: none;
  color: #000000;
}

.container {
  width: 100%;
  max-width: 1200px;
  padding-bottom: 1%;
}

.container-search {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;

  .search {
    display: flex;
    align-items: center;
    gap: 10px;

    .search-input {
      padding: 10px 10px 10px 35px;
      border: solid 0.1px #b4def2;
      color: #fff;
      border-radius: 35px;
      background-color: #b4def2;
      outline: none;
    }

    .search-btn {
      padding: 10px 15px;
      border: solid 0.1px #ffffff;
      background-color: #002451;
      color: #fff;
      border-radius: 35px;
    }
  }

  @media screen and (max-width: 768px) {
    .search {
      p {
        display: none;
      }
    }
  }

  .page {
    align-self: center;
    a {
      margin: 0 0.3rem;
      padding: 0.3rem 0.5rem;
      background-color: #999;
      color: #fff;
      border-radius: 50%;
      align-self: center;
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
}
</style>
