<template>
    <div class="container container-classinfo">
        <h2 class="title">課程資訊</h2>
        <div class="row">
            <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
                clickable: true,
            }" :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide>
                    <div class="col col-12 col-md-6 col-lg-6 col-xl-6">
                        <div class="card">
                            <div class="card-head">
                                <h2>週三有氧課程</h2>
                            </div>
                            <div class="card-body">
                                <div class="pic">
                                    <img src="../../assets/img/index/indexcourse.png">
                                </div>
                                <div class="txt">
                                    <h3>
                                        <div>Wendy老師</div><span>NT.3500|六堂</span>
                                    </h3>
                                </div>
                            </div>
                            <div class="card-footer">
                                <P class="content">帶領學員在高強度的燃脂動作和中低強度的恢復階段之間進行切換。這種間歇式訓練不僅能提高心肺功能,更能刺激人體代謝...</P>
                                <button class="apply">立即報名</button>
                            </div>
                        </div>
                    </div>
                    <div class="col col-12 col-md-6 col-lg-6 col-xl-6">
                        <div class="card">
                            <div class="card-head">
                                <h2>週三有氧課程</h2>
                            </div>
                            <div class="card-body">
                                <div class="pic">
                                    <img src="../../assets/img/index/indexcourse.png">
                                </div>
                                <div class="txt">
                                    <h3>
                                        <div>Wendy老師</div><span>NT.3500|六堂</span>
                                    </h3>
                                </div>
                            </div>
                            <div class="card-footer">
                                <P class="content">帶領學員在高強度的燃脂動作和中低強度的恢復階段之間進行切換。這種間歇式訓練不僅能提高心肺功能,更能刺激人體代謝...</P>
                                <button class="apply">立即報名</button>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                </swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>

            </swiper>
            <div class="more">了解更多</div>
        </div>
    </div>



</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../assets/sass/plugin/_swiper.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
};
</script>