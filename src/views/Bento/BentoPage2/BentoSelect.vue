<template>
    <section class="bentobox_banner">
        <!-- 客製化餐盒內容  -->
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
                <RouterLink :to="{ path: '/bento/bentopage3', query: { selectedImages: selectedFoodImages } }"
                    class="btn_link">
                    <button class="bentobox_button_right">
                        <p>{{ button_txt_right }}</p>
                        <font-awesome-icon :icon="['fas', 'chevron-right']" class="custom_icon_right" />
                    </button>
                </RouterLink>
            </div>
            <div class="bento_info">
                <div class="bento_pic">
                    <div v-if="containerId === 4" class="four_grid_cus_box">
                        <img :src="four" alt="四格餐盒">
                        <div class="grid_container">
                            <div class="grid_item" v-for="(image, index) in selectedFoodImages" :key="index"
                                :class="{ clicked: clickedIndex === index, dimmed: clickedIndex !== index && clickedIndex !== null }"
                                @click="handleClick(index)">
                                <img :src="image || one" :alt="`四格餐盒第${index + 1}格`">
                            </div>
                        </div>
                    </div>
                    <div v-else-if="containerId === 6" class="six_grid_cus_box">
                        <img :src="six" alt="六格餐盒">
                        <div class="grid_container">
                            <div class="grid_item" v-for="(image, index) in selectedFoodImages" :key="index"
                                :class="{ clicked: clickedIndex === index, dimmed: clickedIndex !== index && clickedIndex !== null }"
                                @click="handleClick(index)">
                                <img :src="image || one" :alt="`六格餐盒第${index + 1}格`">
                            </div>
                        </div>
                    </div>
                    <p class="bento_hint">{{ hint_txt }}</p>
                </div>
                <div class="bento_price">
                    <h3>當前總額 : ${{ sum_price }}</h3>
                </div>
            </div>
        </div>
        <div class="wave">
            <img :src="imgSrcWave" alt="" />
        </div>
    </section>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useBentoStore } from '@/stores/bentobox';
import { useFoodStore } from '@/stores/foodStore';
import { useCartListStore } from '@/stores/cart';
import { RouterLink } from 'vue-router';
import one from '/src/assets/img/boxIn.png'
import four from '/src/assets/img/bento_box_four.png'
import six from '/src/assets/img/bento_box_six.png'
import { useReminderAlertStore } from '@/stores/ReminderAlert';


export default {
    components: {
        RouterLink,

    },
    setup() {
        const bentoStore = useBentoStore();
        const foodStore = useFoodStore();
        const cartListStore = useCartListStore();

        const containerId = bentoStore.containerId;
        foodStore.setBoxSize(containerId);

        const selectedFoodImages = computed(() => foodStore.selectedFoodImages);
        const sum_price = computed(() => cartListStore.totalPrice);

        onMounted(() => {
            foodStore.reset();
        });

        const clickedIndex = ref(null);

        const handleClick = (index) => {
            clickedIndex.value = index;
            foodStore.updateSelectedIndex(index);
        };

        return {
            containerId,
            selectedFoodImages,
            sum_price,
            imgSrcBoxIn: '/src/assets/img/boxIn.png',
            button_txt_right: '下一步',
            button_txt_left: '上一步',
            hint_txt: '*點選格子即可加入或替換食材',
            title_txt: '選擇餐盒內容',
            subtitle_txt: 'STEP 2',
            imgSrcWave: '/src/assets/img/wave.svg',
            clickedIndex,
            handleClick,
            one,
            four,
            six,
        };
    }
};
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
    top: 65%;
    width: 100%;
    left: 0;
    height: 10vh;
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
            cursor: pointer;
            transition: opacity 0.3s;
            opacity: 1;

        }

        .grid_item.dimmed {
            filter: brightness(0.5);
        }

        .grid_item.clicked {
            opacity: 1;
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
            cursor: pointer;
            transition: opacity 0.3s;
            opacity: 1;

        }

        .grid_item.dimmed {
            filter: brightness(0.5);
        }

        .grid_item.clicked {
            opacity: 1;
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

.bento_hint {
    font-size: 20px;
    margin-top: -25px;
    font-weight: 600;
    color: #EB9340;
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