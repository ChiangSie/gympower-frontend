<template>
    <section class="bentobox_banner">
        <div class="bentobox_bg">
            <div class="bento_title_wrap">
                <RouterLink to='/bento/bentopage2' class="btn_link">
                    <button class="bentobox_button_left">
                        <font-awesome-icon :icon="['fas', 'chevron-left']" class="custom_icon_left" />
                        <p>{{ button_txt_left }}</p>
                    </button>
                </RouterLink>
                <div class="bento_title">
                    <p>{{ subtitle_txt }}</p>
                    <h1>{{ title_txt }}</h1>
                </div>
                <RouterLink to='/bento/bentopage4' class="btn_link">
                    <button class="bentobox_button_right" @click="addToCartA">
                        <p>{{ button_txt_right }}</p>
                        <font-awesome-icon :icon="['fas', 'chevron-right']" class="custom_icon_right" />
                    </button>
                </RouterLink>
            </div>
            <div class="bento_info">
                <div class="bento_pic">
                    <!-- 顯示四格餐盒圖片 -->
                    <div v-if="containerId === 4" class="four_grid_cus_box">
                        <img :src="parseImg4('bento_box_four.png')" alt="四格餐盒">
                        <div class="grid_container">
                            <div class="grid_item" v-for="(image, index) in selectedFoodImages" :key="index"
                                :class="{ clicked: clickedIndex === index, dimmed: clickedIndex !== index && clickedIndex !== null }"
                                @click="handleClick(index)">
                                <img :src="image || one" :alt="`四格餐盒第${index + 1}格`">
                            </div>
                        </div>
                    </div>
                    <!-- 顯示六格餐盒圖片 -->
                    <div v-else-if="containerId === 6" class="six_grid_cus_box">
                        <img :src="parseImg6('bento_box_six.png')" alt="六格餐盒">
                        <div class="grid_container">
                            <div class="grid_item" v-for="(image, index) in selectedFoodImages" :key="index"
                                :class="{ clicked: clickedIndex === index, dimmed: clickedIndex !== index && clickedIndex !== null }"
                                @click="handleClick(index)">
                                <img :src="image || one" :alt="`六格餐盒第${index + 1}格`">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wave">
            <img :src="imgSrcWave" alt="" />
        </div>
    </section>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useBentoStore } from '@/stores/bentobox';
import { useCartListStore } from '@/stores/cart';
import { useCartStore } from '@/stores/cartStore';
import { useFoodStore } from '@/stores/foodStore';
import html2canvas from 'html2canvas';

export default {
    setup() {
        const router = useRouter();
        const route = useRoute();
        const bentoStore = useBentoStore();
        const cartStore = useCartListStore();
        const shopCartStore = useCartStore();
        const foodStore = useFoodStore();

        const selectedFoodImages = ref(route.query.selectedImages || []);
        const containerId = computed(() => bentoStore.containerId);
        const clickedIndex = ref(null);

        const button_txt_left = '上一步';
        const button_txt_right = '確認';
        const title_txt = '確認餐點明細';
        const subtitle_txt = 'STEP 3';
        const imgSrcWave = '/src/assets/img/wave.svg';

        const parseImg = (imgURL) => {
            return new URL(`../../../assets/img/${imgURL}`, import.meta.url).href;
        };

        const handleClick = (index) => {
            clickedIndex.value = index;
        };

        const addToCartA = async () => {
            if (!cartStore.items || !Array.isArray(cartStore.items) || cartStore.items.length === 0) {
                console.error('購物車內容為空或不是有效的陣列');
                return;
            }

            const bentoBoxElement = document.querySelector('.bento_pic');
            const options = { scale: 1 };

            try {
                const canvas = await html2canvas(bentoBoxElement, options);
                const compositeImage = canvas.toDataURL();

                const products = selectedFoodImages.value.map((image, index) => {
                    const food = cartStore.items[index];
                    if (!food || !food.ItemName) {
                        console.error(`索引 ${index} 的食材未定義或缺少 ItemName`);
                        return null;
                    }
                    return {
                        name: containerId.value === 4 ? '饗食四合一' : '滿腹六合一',
                        quantity: food.qty,
                        image: compositeImage,
                        // selected: false,
                        // showDetails: false,
                        foods: selectedFoodImages.value,
                        price: food.price,
                        totalPrice: food.price * food.qty
                    };
                }).filter(product => product !== null);

                products.forEach(product => {
                    shopCartStore.addToCartA(product);
                });

                console.log('已添加到購物車的產品:', products);
                router.push('/bento/bentopage4');
            } catch (error) {
                console.error('生成圖片或添加到購物車時發生錯誤:', error);
            }
        };

        return {
            containerId,
            button_txt_right,
            button_txt_left,
            title_txt,
            subtitle_txt,
            imgSrcWave,
            selectedFoodImages,
            clickedIndex,
            addToCartA,
            parseImg4: parseImg,
            parseImg6: parseImg,
            handleClick
        };
    }
}
</script>



<style lang="scss" scoped>
.bentobox_banner {
    position: relative;
}

.bentobox_bg {
    background: linear-gradient(90deg, #FEEFDA, #D4EAF7);
    height: 95vh;

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
        height: 80vh;

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

.btn_link {
    text-decoration: none;
}

.bento_title {
    display: flex;
    flex-direction: column;
    align-items: center;
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
            object-position: -60px 62%;
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
            object-position: -55px 90%;
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