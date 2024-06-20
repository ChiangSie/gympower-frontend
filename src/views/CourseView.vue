<template>
  <Banner :title="'課程資訊'" />

  <div class="section section-course">
    <div class="container">
      <div class="section section-sort">
        <div class="btn-sort">
          <button @click="clear">
            <h3>全部課程</h3>
          </button>
          <button @click="filter(1)">
            <h3>有氧課程</h3>
          </button>
          <button @click="filter(2)">
            <h3>重訓課程</h3>
          </button>
          <button @click="filter(3)">
            <h3>瑜珈課程</h3>
          </button>
        </div>
      </div>

      <div class="section section-classinfo">
        <div class="container">
          <div class="displayList" v-if="displayList.length === 0">
            <h3 class="txt">目前未開課</h3>
          </div>
          <div v-else>
            <Classinfo v-for="course in paginatedPosts" :key="course.id" :cardData="course" />

            <div class="page">
              <a href="#" v-for="n in totalPages" :key="n" @click.prevent="currentPage = n"
                :class="{ 'active-page': currentPage === n }">{{ n }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/component/Banner.vue';
import Classinfo from '@/component/Classinfo.vue';

export default {
  components: {
    Banner,
    Classinfo,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 3,
      courses: [],
      displayList: [],
    }
  },
  mounted() {
    this.clear();
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      fetch(`${import.meta.env.BASE_URL}json/course.json`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.courses = json;
          this.displayList = json;
        });
    },
    clear() {
      this.displayList = this.courses;
      this.currentPage = 1;
    },
    parseImg(imgURL) {
      return new URL(`../../../assets/img/course/${imgURL}`, import.meta.url).href;
    },
    filter(type) {
      this.displayList = this.courses.filter(course => {
        return course.type === type;
      })
      this.currentPage = 1;
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.displayList.length / this.itemsPerPage);
    },
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.displayList.slice(start, end);
    }
  },
}
</script>

<style lang="scss" scoped>
.section {
  background-color: #F9F8F7;
  padding-top: 10px;

  .container {
    width: 100%;
    max-width: 1200px;
    padding-bottom: 1%;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
}

.section-course {
  .section-sort {
    width: 20%;
    position: -webkit-sticky;
    position: sticky;
    top: 100px;
    height: 60vh;
    outline: 1px solid;
    border-radius: 10px;

    .btn-sort {
      padding-top: 10%;
      display: flex;
      flex-direction: column;

      button {
        border: none;
        background: none;
        padding: 10px 20px;
        color: #333;
        transition: all 0.3s ease;
        white-space: nowrap;
      }

      /* 按鈕選取後的樣式 */
      button:focus,
      button:active {
        outline: none;
        position: relative;
      }

      button:focus::before,
      button:active::before {
        content: "";
        position: absolute;
        left: 10%;
        /* 調整左側偏移量 */
        top: 50%;
        transform: translateY(-50%);
        width: 5px;
        height: 30px;
        background-color: #333;
        /* 調整box顏色 */
      }
    }
  }

  @media screen and (max-width: 768px) {
    .btn-sort h3 {
      font-size: 16px;
      white-space: wrap;
    }
  }

  .section-classinfo {
    width: 80%;

    .container {
      flex-direction: column;

      .txt {
        display: inline-block;
        text-align: center;
        align-content: center;
        width: 100%;
        height: 200px;
        background-color: #fff;
        border-radius: 10px;
      }
    }

    .page {
      text-align: center;
      padding-bottom: 2rem;

      a {
        margin: 0 .3rem;
        padding: .3rem .5rem;
        background-color: #002451;
        color: #fff;
        border-radius: 50%;
        text-decoration: none;
      }
    }
  }
}
</style>
