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
  methods: {},
  data() {
    return {
      sourceData: [],
    };
  },
  mounted() {
    fetch("/json/indexCourse.json")
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
                <div class="pic"><img :src="course.image" /></div>
                <div class="txt">
                  <h3>
                    <div>{{ course.coach }}</div>
                    <span>{{ course.price }}</span>
                  </h3>
                </div>
              </div>
              <div class="card-footer">
                <P class="content">{{ course.describe }}</P>
                <button class="apply">{{ course.apply }}</button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="more">了解更多</div>
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

  .title {
    text-align: center;
    margin-bottom: 60px;
    font-weight: bold;
  }

  .row {
    .swiper-slide {
      border-radius: 10px;
      text-align: left;
      background-color: #f9f8f7;
    }
    .card {
      margin-bottom: 30px;
      background-color: #fff;
      border-radius: 10px;

      .card-head {
        padding: 30px 20px 0 20px;
      }

      .card-body {
        padding: 0 20px;
      }

      h2 {
        margin-bottom: 15px;
        font-weight: bold;
      }

      .txt {
        h3 {
          font-weight: bold;
          display: flex;
          justify-content: space-between;
        }
      }

      img {
        width: 100%;
        aspect-ratio: 3 / 1;
        object-fit: cover;
        border-radius: 10px;
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
          width: 60%;
        }

        .apply {
          color: #fff;
          width: 30%;
          font-size: clamp(16px, 2.18vw, 28px);
          padding: 10px;
          text-align: center;
          width: 25%;
          background-color: #002451;
          border: none;
          border-radius: 10px;
          width: fit-content;
        }
      }
    }

    .more {
      width: 100px;
      height: 40px;
      background-color: #002451;
      border-radius: 10px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      margin-left: auto;
      margin-right: 15px;
    }
  }
}
</style>
