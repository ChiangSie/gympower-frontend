<template>
    <section class="bentobox_banner">
        <div class="bentobox_bg">
            <div class="bento_title_wrap">
                <RouterLink to='/bento' class="btn_link">
                    <button class="bentobox_button_left">
                        <font-awesome-icon :icon="['fas', 'chevron-left']" class="custom_icon_left" />
                        <p>{{ button_txt_left }}</p>
                    </button>
                </RouterLink>
                <div class="bento_title">
                    <p>{{ subtitle_txt }}</p>
                    <h1>{{ title_txt }}</h1>
                </div>
                <RouterLink to='/bento/bentopage3' class="btn_link">
                    <button class="bentobox_button_right">
                        <p>{{ button_txt_right }}</p>
                        <font-awesome-icon :icon="['fas', 'chevron-right']" class="custom_icon_right" />
                    </button>
                </RouterLink>
            </div>
            <div class="bento_info">
                <div class="bento_pic">
                    <!-- 顯示四格餐盒圖片 -->
                    <div v-if="containerId === 4" class="four_grid_cus_box">
                        <img :src="four" alt="四格餐盒">
                        <div class="grid_container">
                            <div class="grid_item"><img :src="one" alt="四格餐盒第一格"></div>
                            <div class="grid_item"><img :src="one" alt="四格餐盒第二格"></div>
                            <div class="grid_item"><img :src="one" alt="四格餐盒第三格"></div>
                            <div class="grid_item"><img :src="one" alt="四格餐盒第四格"></div>
                        </div>
                    </div>
                    <!-- 顯示六格餐盒圖片 -->
                    <div v-else-if="containerId === 6" class="six_grid_cus_box">
                        <img :src="six" alt="六格餐盒">
                        <div class="grid_container">
                            <div class="grid_item"><img :src="one" alt="六格餐盒第一格"></div>
                            <div class="grid_item"><img :src="one" alt="六格餐盒第二格"></div>
                            <div class="grid_item"><img :src="one" alt="六格餐盒第三格"></div>
                            <div class="grid_item"><img :src="one" alt="六格餐盒第四格"></div>
                            <div class="grid_item"><img :src="one" alt="六格餐盒第五格"></div>
                            <div class="grid_item"><img :src="one" alt="六格餐盒第六格"></div>
                        </div>
                    </div>
                    <p>{{ hint_txt }}</p>
                </div>
                <div class="bento_price">
                    <h3>{{ sum_price }}</h3>
                </div>
            </div>
        </div>
        <div class="wave">
            <img :src="imgSrcWave" alt="" />
        </div>
    </section>
</template>

<script>
import { useBentoStore } from '@/stores/bentobox';
import { RouterLink } from 'vue-router';
import one from '/src/assets/img/boxIn.png'
import four from '/src/assets/img/bento_box_four.png'
import six from '/src/assets/img/bento_box_six.png'

export default {
    components: {
        RouterLink,
        
    },
    data(){
        return{
            one,
            four,
            six
        }
    },

    setup() {
        const bentoStore = useBentoStore();

        return {
            containerId: bentoStore.containerId,
            imgSrcBoxIn: '/src/assets/img/boxIn.png',
            button_txt_right: '下一步',
            button_txt_left: '上一步',
            hint_txt: '*點選格子即可替換商品',
            sum_price: '當前總額 : $',
            title_txt: '選擇餐盒內容',
            subtitle_txt: 'STEP 2',
            imgSrcWave: '/src/assets/img/wave.svg',
        };
    },
    methods: {
        parseImg4(imgURL) {
            return new URL(`../../../assets/img/${imgURL}`, import.meta.url).href;
        },
        parseImg6(imgURL) {
            return new URL(`../../../assets/img/${imgURL}`, import.meta.url).href;
        },
    }

}
</script>

<style lang="scss" scoped>
.bentobox_banner {
    position: relative;
}

.bentobox_bg {
    background: linear-gradient(90deg, #FEEFDA, #D4EAF7);
    height: 115vh;

}

.wave {
    position: absolute;
    top: 70%;
    width: 100%;
    left: 0;
    height: 20vh;
}

@media screen and (max-width: 768px) {
    .bentobox_bg {
        height: 100vh;

    }

    .wave {
        position: absolute;
        top: 85%;
    }
}

.bento_title_wrap {
    display: flex;
    justify-content: space-evenly;
    padding-top: 80px;
}

.bento_title {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btn_link {
    text-decoration: none;
}

.bentobox_button_left {
    display: flex;
    justify-content: center;
    border-bottom: 3px solid #002451;
    width: 100px;
    height: 45px;
    padding: 10px;
    cursor: pointer;
}

.bentobox_button_left p {
    margin-top: 2px;
}

.custom_icon_left {
    margin-right: 8px;
    margin-top: 5px;
}

.bentobox_button_right {
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #002451;
    color: #ffffff;
    border-radius: 10px;
    width: 120px;
    height: 45px;
    cursor: pointer;

}

.custom_icon_right {
    margin-left: 8px;
    margin-top: 5px;
}

@media screen and (max-width: 768px) {

    .bentobox_button_left {
        width: 80px;

        p {
            font-size: 12.5px;
        }

    }

    .bentobox_button_right {
        width: 80px;

        p {
            margin-top: 5px;
            font-size: 12.5px;
        }
    }

    .bento_title h1 {
        font-size: 22px;
    }

}

button {
    border: none;
    background-color: transparent;
}

/* ====================================================== */
/* 餐盒照片替換 */

.bento_pic {
    width: 35%;
    aspect-ratio: 4/3.5;
    position: relative;

    .four_grid_cus_box {
        position: relative;

        .grid_container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            position: absolute;
            top: 20%;
            left: 10%;
            width: 80%;
            height: 60%;
        }

        .grid_item {
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: relative;

        }

        .grid_item img {
            width: 150%;
            height: 150%;
            object-fit: cover;
            object-position: -55px 60%;
        }
    }

    .six_grid_cus_box {
        position: relative;

        .grid_container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            position: absolute;
            top: 20%;
            left: 10%;
            width: 80%;
            height: 60%;
        }

        .grid_item {
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: relative;

        }

        .grid_item img {
            width: 175%;
            height: 180%;
            object-fit: cover;
            object-position: -50px 90%;
        }
    }

    img {
        vertical-align: middle;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
    }

    p {
        text-align: center;
    }
}

.bento_price {
    margin-top: 280px;
    width: 20%;
    font-weight: 600;
}

.bento_info {
    display: flex;
    justify-content: center;
    margin-left: 10%;

}

@media screen and (max-width: 768px) {

    .bento_pic {
        width: 90%;
        aspect-ratio: 4/3.5;
    }

    .bento_info {
        flex-wrap: wrap;
    }

    .bento_price {
        width: 50%;
        margin-top: 40px;
        text-align: center;
    }

}
</style>