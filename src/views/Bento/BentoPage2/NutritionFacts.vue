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
import 'sweetalert2/dist/sweetalert2.min.css';
import { computed } from 'vue';
import Swal from 'sweetalert2';
import { useCartStore } from '@/stores/cart';
import { useBentoStore } from '@/stores/bentobox';
import { useReminderAlertStore } from '@/stores/ReminderAlert';


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
    computed: {
        remainingSlots() {
            const cartStore = useCartStore();
            const bentoStore = useBentoStore();
            const maxSlots = bentoStore.containerId;
            return maxSlots - cartStore.bentoList.length;
        }
    },
    methods: {
        addToCart() {
            if (this.remainingSlots > 0) {
                const cartStore = useCartStore();
                cartStore.addItem(this.food);
                console.log(`${this.food.ItemName} added to cart`);
                this.$emit('close');
                Swal.fire({
                    icon: 'success',
                    title: '成功加入食材到您的餐盒！',
                    text: `剩餘${this.remainingSlots}格空格`,
                    customClass: {
                        container: 'sweetalert-container',
                        popup: 'sweetalert-popup',
                        title: 'sweetalert-title',
                        confirmButton: 'sweetalert-confirm-button'
                    }
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: '餐盒已滿，無法再加入任何項目囉!',
                    customClass: {
                        container: 'sweetalert-container',
                        popup: 'sweetalert-popup',
                        title: 'sweetalert-title',
                        confirmButton: 'sweetalert-confirm-button'
                    }
                });
            }
        }, closeNutritionInfo() {
            this.$emit('close');
        }
    },
    watch: {
        remainingSlots() {
            this.button = this.remainingSlots > 0 ? '加入' : '餐盒已滿';
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

.sweetalert-container {
    font-family: 'Arial', sans-serif;
}

.sweetalert-popup {
    background-color: #f2f2f2;
    border-radius: 8px;
}

.sweetalert-title {
    color: #EB9340;
    font-size: 20px;
    font-weight: bold;
}

.sweetalert-confirm-button {
    background-color: #002451;
    color: white;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
}
</style>
