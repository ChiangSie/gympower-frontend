<template>
    <div class="card-container">
        <div class="row">
            <div class="col-6 col-md-4 col-lg-4 col-xl-3" v-for="food in foods" :key="food.id">
                <div class="card">
                    <div class="price_tag">
                        <h4>${{ food.price }}</h4>
                    </div>
                    <div class="card_details">
                        <img :src="parseImg(food.image)" alt="食物照片" class="card-image" @click="selectFoodImage(food)" />
                        <button class="details_button" @click="addToCartAndShowNutrition(food)">
                            營養成分
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="selectedFood" class="lightbox" @click.self="closeNutritionInfo">
            <div class="lightbox-content">
                <NutritionFacts :food="selectedFood" @close="closeNutritionInfo" />
            </div>
        </div>
    </div>
</template>

<script>
import NutritionFacts from './NutritionFacts.vue';
import { useFoodStore } from '@/stores/foodStore';
// import { useCartStore } from '@/stores/cartStore'; // 如果有用到 cartStore，取消註釋並引入

export default {
    components: {
        NutritionFacts
    },
    props: {
        foods: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            selectedFood: null
        };
    },
    methods: {
        showNutrition(food) {
            this.selectedFood = food;
            document.body.style.overflow = 'hidden';
        },
        closeNutritionInfo() {
            this.selectedFood = null;
            document.body.style.overflow = 'auto';
        },
        addToCartAndShowNutrition(food) {
            // const cartStore = useCartStore(); // 如果有用到 cartStore，取消註釋
            // cartStore.addItem(food); // 如果有用到 cartStore，取消註釋
            this.showNutrition(food);
            console.log(`${food.ItemName} added to cart`); // 如果有用到 cartStore，取消註釋
        },
        parseImg(imgURL) {
            return new URL(`/src/assets/img/${imgURL}`, import.meta.url).href;
        },
        selectFoodImage(food) {
            const foodStore = useFoodStore();
            const selectedIndex = foodStore.selectedIndex;
            if (selectedIndex !== null) {
                foodStore.updateSelectedFoodImage(this.parseImg(food.image), food.price, selectedIndex);
            } else {
                console.log('No grid slot selected');
            }
        }
    },
    mounted() {
        const foodStore = useFoodStore();
        foodStore.setFoods(this.foods); // 確保 foods 正確設置到 store 中
    }
};
</script>

<style lang="scss" scoped>
.card {
    position: relative;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background-color: transparent;
    justify-content: center;
    padding-top: 60px;
}

.row {
    display: flex;
    flex-wrap: wrap;
    width: 85%;
    justify-content: center;
}

.card_details {
    width: 240px;
    padding: 16px;
    text-align: center;
    margin: 30px 0 30px;
}

.card_details img {
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 8px;
    margin-top: 20px;
    cursor: pointer;
}

.card-image {
    width: 100%;
    aspect-ratio: 4 / 3.5;
}

@media screen and (max-width: 768px) {
    .card_details {
        width: 200px;
    }

    .card_details img {
        width: 100%;
        aspect-ratio: 4 / 3.5;
    }
}

.price_tag {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: linear-gradient(135deg, #FEEFDA, #F0EEE9, #8FBFE0);
    position: absolute;
    top: -30px;

    h4 {
        text-align: center;
        padding-top: 18px;
    }
}

@media screen and (max-width: 768px) {
    .price_tag {
        width: 55px;
        height: 55px;
    }
}

.details_button {
    background-color: #71C4EF;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 8px 16px;
    cursor: pointer;
    margin-top: 16px;
}

.details_button a {
    color: #fff;
    text-decoration: none;
}

.details_button:hover {
    background-color: #1aa1d6;
}
</style>

