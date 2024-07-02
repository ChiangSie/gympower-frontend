<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../assets/sass/plugin/_swiper.scss";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  mounted() {
    fetch(`${import.meta.env.BASE_URL}json/indexCourse.json`)
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
      sourceData: [],
    };
  },
  methods: {
    parseImg(imgURL) {
      // 放在vue專案的圖檔路徑會被轉譯，因此需要這樣更改
      return new URL(`../../assets/img/index/${imgURL}`, import.meta.url).href;
    },
  },
};
</script>
<template>
  <section class="section section-classinfo">
    <!-- 背景裝飾字 -->
    <h2 class="decorate-txt">COURSES</h2>
    <div class="container container-classinfo">
      <h2 class="title">課程資訊</h2>
      <div class="row">
        <swiper
          :slidesPerView="1"
          :spaceBetween="30"
          :loop="true"
          :navigation="true"
          :modules="modules"
          :breakpoints="{
            '850': {
              slidesPerView: 2,
            },
          }"
          class="mySwiper"
        >
          <swiper-slide v-for="course in sourceData" :key="course.id">
            <div class="card">
              <div class="card-head">
                <h2>{{ course.title }}</h2>
              </div>
              <div class="card-body">
                <div class="pic">
                  <img :src="parseImg(course.image)" />
                </div>
                <div class="txt">
                  <h3>
                    <div>{{ course.coach }}</div>
                    <span>{{ course.price }}</span>
                  </h3>
                </div>
              </div>
              <div class="card-footer">
                <p class="content">{{ course.describe }}</p>
                <router-link :to="`/course/${course.id}`">
                <button class="apply">{{ course.apply }}</button>
                </router-link>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <router-link to="/course">
        <div class="more">了解更多</div>
        </router-link>
        
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container-classinfo {
  .title {
    text-align: center;
    margin-bottom: 60px;
    font-weight: bold;
  }
  .row {
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* 調整為靠右對齊 */
    .swiper-slide {
      border-radius: 10px;
      text-align: left;
      background-color: #f9f8f7;
    }
    .card {
      background-color: #eaf2f6;
      border-radius: 10px;
      width: 96%;
      gap: 0;

      .card-head {
        padding: 30px 20px 0 20px;
      }

      .card-body {
        padding: 0 20px;
      }

      h2 {
        margin-bottom: 15px;
        font-weight: bold;
        font-size: 24px;
      }

      .txt {
        h3 {
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          font-size: 22px;
        }
      }

      img {
        width: 100%;
        aspect-ratio: 3 / 1;
        object-fit: cover;
        // border-radius: 10px;
        margin-bottom: 15px;
      }

      h3 {
        margin-bottom: 15px;
      }

      .card-footer {
        border-radius: 0 0 10px 10px;
        width: 100%;
        padding: 20px 20px;
        background-color: #d4eaf7;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;

        .content {
          width: 70%;
        }
        p {
          font-size: 13px;
        }
        .apply:hover {
          scale: 1.2;
          transition: 0.5s;
        }
        .apply {
          cursor: pointer;
          color: #fff;
          font-size: clamp(14px, 2.18vw, 18px);
          padding: 8px 10px;
          text-align: center;
          width: 25%;
          background-color: #002451;
          border: none;
          border-radius: 10px;
          width: fit-content;
        }
      }
    }
    .more:hover {
      transition: 0.5s;
      scale: 1.2;
      z-index: 3;
    }
    .more {
      font-size: 15px;
      cursor: pointer;
      width: 70px;
      color: #002451;
      text-align: center;
      line-height: 16px;
      margin-left: auto;
      margin-right: 20px;
      margin-top: 30px;
      display: inline-block;
      border-bottom: 1px solid #002451;
    }
  }
}
</style>
