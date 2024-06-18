<template>
  <div class="container container-classinfo">
    <h2 class="title">課程資訊</h2>
    <div class="row">
      <swiper
        :slidesPerView="2"
        :spaceBetween="30"
        :loop="true"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="course in sourceData" :key="course.id">
          <div class="col col-12 col-md-6 col-lg-6 col-xl-6">
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
          </div>
        </swiper-slide>
      </swiper>
      <div class="more">了解更多</div>
    </div>
  </div>
</template>
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
