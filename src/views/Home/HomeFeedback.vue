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
  methods: {
    parseImg(imgURL) {
      // 放在vue專案的圖檔路徑會被轉譯，因此需要這樣更改
      return new URL(`../../assets/img/index/${imgURL}`, import.meta.url).href
    },
  },
  data() {
    return {
      sourceData: [],
    };
  },
  mounted() {
    fetch(`${import.meta.env.BASE_URL}json/feedback.json`)
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
  <!-- 學員回饋 -->
  <section class="section section-feedback">
    <h2 class="decorate-txt flex-end">FEEDBACK</h2>
    <div class="container container-feedback">
      <h2 class="title">學員回饋</h2>
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
          <swiper-slide v-for="feedback in sourceData" :key="feedback.id">
            <div class="card">
              <div class="coach">
                <div class="pic">
                  <img :src="parseImg(feedback.image)" />
                </div>
                <div class="name">
                  <p>{{ feedback.coach }}</p>
                </div>
              </div>
              <div class="course">
                <div class="course-title">
                  <div class="course-name">
                    <p>{{ feedback.course }}</p>
                  </div>
                  <div class="course-date">
                    <p>{{ feedback.date }}</p>
                  </div>
                </div>
                <div class="course-describe">
                  <p>
                    {{ feedback.describe }}
                  </p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section-feedback {
  .container-feedback {
    max-width: 1100px;

    .title {
      font-weight: bold;
      text-align: center;
      margin-bottom: 60px;
    }

    .row {
      .swiper-slide {
        text-align: left;
        border-radius: 10px;
      }
      .card {
        flex-grow: 1;
        border-radius: 10px;
        padding: 20px;
        background: linear-gradient(62deg, #f0eee9, #d4eaf7);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        .coach {
          width: 30%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;

          .pic {
            border-radius: 50%;
            overflow: hidden;

            > img {
              width: 100%;
              aspect-ratio: 1/1;
              display: block;
            }
          }
        }

        .course {
          width: 70%;
          display: flex;
          flex-direction: column;
          gap: 20px;

          .course-title {
            display: flex;
            align-items: center;
            justify-content: space-around;
          }
        }
      }
    }
  }
}
</style>
