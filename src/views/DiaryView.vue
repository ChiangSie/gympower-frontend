<template>
  <div class="background">
    <Banner :title="'健身日記'" />
    <div class="section section-search">
      <div class="container container-search">
        <div class="search">
          <p>健身交換日記</p>
          <input class="search-input" type="text" v-model="searchText" />
          <button class="search-btn" id="search-btn" @click="showlightbox">+ 新增</button>
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
            <DiaryCard :cardData="card" :diary="card" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="create">
    <div class="create-head">
      <h2>建立貼文</h2>
      <p id="close" class="close" @click="closelightbox">
        <i class="fa-solid fa-xmark"></i>
      </p>
    </div>
    <div class="border"></div>
    <div class="create-body">
      <div class="author">
        <p>貼文者</p>
        <p>sam</p>
      </div>
      <div class="create-date">
        <p>發佈日期</p>
        <p>2024/05/25</p>
      </div>
    </div>
    <div class="create-content">
      <p>內容</p>
      <textarea name="" id=""></textarea>
      <p>上傳照片</p>
      <input type="file" />
    </div>
    <div class="create-footer">
      <div class="cancel" @click="closelightbox"><p>取消</p></div>
      <div class="upload"><p>發佈</p></div>
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
    fetch(`${import.meta.env.BASE_URL}json/diarylist.json`)
      .then((res) => res.json())
      .then((json) => {
        //確認有沒有response
        console.log(json);
        //顯示用
        this.sourceData = json;
      });
  },
  methods: {
    showlightbox() {
      document.querySelector(".create").style.display = "block";
      document.querySelector(".background").style.opacity = ".2";
      document.querySelector(".background").style.pointerEvents = "none";
    },
    closelightbox() {
      document.querySelector(".create").style.display = "none";
      document.querySelector(".background").style.opacity = "1";
      document.querySelector(".background").style.pointerEvents = "auto";
    },
    parseImg(imgURL) {
      return new URL(`../assets/img/Diary/${imgURL}`, import.meta.url).href;
    },
  },
};
</script>
<style lang="scss" scoped>
.create {
  background-color: #fff;
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  border: solid 1px #000000;
  border-radius: 10px;
  .create-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #000;
    background-color: #71c4ef;
    border-radius: 10px 10px 0 0;
    h2 {
      padding: 5%;
    }
    .close {
      padding: 5%;
      i {
        width: 50px;
        height: 50px;
        border: 1px solid #000;
        border-radius: 50%;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }

  .create-body {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    align-items: center;
    .author,
    .create-date {
      padding: 0 5%;

      display: flex;
      flex-direction: column;
    }
    .create-date {
      align-items: flex-end;
    }
  }
  .create-content {
    padding: 0 5%;

    display: flex;
    margin: 20px 0;
    flex-direction: column;
    textarea {
      margin-bottom: 20px;
      border-radius: 10px;
      outline: none;
    }
  }
  .create-footer {
    padding: 0 5%;
    margin: 20px 0;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    .cancel {
      cursor: pointer;
      border: 1px solid #000;
      border-radius: 10px;
      width: clamp(58px, 6.64vw, 85px);
      aspect-ratio: 2/1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .upload {
      cursor: pointer;

      border: 1px solid #000;
      border-radius: 10px;
      width: clamp(58px, 6.64vw, 85px);
      aspect-ratio: 2/1;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #002451;
      color: #fff;
    }
  }
}
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
      cursor: pointer;
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
