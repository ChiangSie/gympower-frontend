<template>
    <section v-if="food" class="lightbox">

        <div class="nutrition_list">
            <div class="close_btn" @click="closeNutritionInfo">
                <i class="fa-regular fa-circle-xmark"></i>
            </div>
            <div class="nutrition_info">
                <h3>品名 :{{ food.ItemName }}</h3>
                <h4>熱量 :{{ food.calories }} kcal</h4>
                <h4>蛋白質 :{{ food.protein }} g</h4>
                <h4>醣類 :{{ food.carbohydrate }} g</h4>
                <h4>脂肪 :{{ food.fat }} g</h4>
            </div>
            <div class="add_btn" @click="addToCart">
                <button>{{ button }}</button>
            </div>
        </div>

    </section>
</template>

<script>
import { useCartStore } from '@/stores/cart';
export default {
    props: {
        food: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            button: '加入'
        };
    },
    methods: {
        addToCart() {
            const cartStore = useCartStore();
            cartStore.addItem(this.food);
            console.log(`${this.food.ItemName} added to cart`);
            this.$emit('close');
        },
        closeNutritionInfo() {
            this.$emit('close');
        }
    }
};
</script>


<style lang="scss" scoped>
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.nutrition_list {
    border: 1px solid #000000;
    height: 500px;
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    background-color: #fff;

    .nutrition_info {
        width: 75%;
        text-align: center;
    }

    h4 {
        border-bottom: 1px dashed #000;
        padding: 15px;
    }

    h3 {
        border-bottom: 1px dashed #000;
        padding: 15px;
        font-weight: 600;
        font-size: 26px;
    }

    .close_btn {
        font-size: 30px;
        cursor: pointer;
        color: #002451;
        margin-left: 70%;
        margin-top: 5%;
    }

    .add_btn {

        margin: 5% 0px;

        button {
            width: 130px;
            height: 40px;
            border-radius: 10px;
            background-color: #002451;
            color: #fff;
            cursor: pointer;
            font-size: 16px;
            border: none;
        }
    }

}

.nutrition_list {
    border: 1px solid #000000;
    border-radius: 10px;
    height: 500px;
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    background-color: #fff;

    .nutrition_info {
        width: 75%;
        text-align: center;
    }

    h4 {
        border-bottom: 1px dashed #000;
        padding: 15px;
    }

    h3 {
        border-bottom: 1px dashed #000;
        padding: 15px;
        font-weight: 600;
        font-size: 26px;
    }

    .close_btn {
        font-size: 30px;
        cursor: pointer;
        color: #002451;
        margin-left: 70%;
        margin-top: 5%;
    }

    .add_btn {

        margin: 5% 0px;

        button {
            width: 130px;
            height: 40px;
            border-radius: 10px;
            background-color: #002451;
            color: #fff;
            cursor: pointer;
            font-size: 16px;
            border: none;
        }
    }

}
</style>
