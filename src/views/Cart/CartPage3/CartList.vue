<template>
    <section>
        <div class="bento_list">
            <!-- 餐盒、課程選單 -->
            <div class="bento_list_title">
                <div class="bento_cart_select">
                    <span @click="activeCart = 'A'" :class="{ active: activeCart === 'A' }"
                        class="bento_cart_select_bento">
                        {{ bento_select }}
                    </span>
                    <span @click="activeCart = 'B'" :class="{ active: activeCart === 'B' }"
                        class="bento_cart_select_classes">
                        {{ bento_classes }}
                    </span>
                </div>
                <!-- 步驟 -->
                <ul class="bento_list_step">
                    <li class="step active">
                        <div class="circle">{{ circle_num_1 }}</div>
                        <p>{{ circle_num1_con }}</p>
                    </li>
                    <li class="step">
                        <div class="circle">{{ circle_num_2 }}</div>
                        <p>{{ circle_num2_con }}</p>
                    </li>
                    <li class="step">
                        <div class="circle">{{ circle_num_3 }}</div>
                        <p>{{ circle_num3_con }}</p>
                    </li>
                </ul>
            </div>
            <!-- 清單標題 -->
            <div class="bento_list_comfirm">{{ list_title }}</div>
            <div class="bento_list_con">
                <div class="bento_list_detail">
                    <!-- 購物車 A 内容 -->
                    <div v-if="activeCart === 'A'" class="bento_list_item_option">
                        <!-- 垃圾桶按鈕 -->
                        <div class="bento_list_item_clear" @click="clearCart(activeCart)">
                            <button class="bento_list_item_clear_trash">
                                <p>{{ clear_trash }}</p>
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                        <div v-for="(item, index) in cartStore.cartA" :key="item.id"
                            class="bento_list_item_option_cart">
                            <div class="bento_list_item_option_pic">
                                <input type="checkbox" v-model="item.selected" class="item-select">
                                <img :src="parseImg(item.imgSrc)" :alt="item.name">
                            </div>
                            <div class="bento_list_item_option_center">
                                <div class="bento_list_item_option_name">
                                    <p>{{ item.name }}</p>
                                    <button class="bento_list_item_option_btn"
                                        @click="showDetails(item)">查看餐盒明细</button>
                                </div>
                                <div class="bento_list_item_option_qty">
                                    <button class="qty-btn_reduce"
                                        @click="cartStore.decreaseQuantity('A', index)">-</button>
                                    <input type="text" v-model.number="item.quantity"
                                        @change="cartStore.updateQuantity('A', index)" class="quantity-input">
                                    <button class="qty-btn_plus"
                                        @click="cartStore.increaseQuantity('A', index)">+</button>
                                </div>
                                <div class="bento_list_item_option_price">
                                    <span>{{ calculateItemTotal(item) }}</span>
                                </div>
                            </div>
                            <div class="bento_list_item_option_icon">
                                <i class="fa-solid fa-trash-can" @click="cartStore.removeFromCartA(index)"></i>
                            </div>
                        </div>
                    </div>

                    <!-- 購物車 B 内容 -->
                    <div v-if="activeCart === 'B'" class="bento_list_item_option">
                        <!-- 垃圾桶按鈕 -->
                        <div class="bento_list_item_clear" @click="clearCart(activeCart)">
                            <button class="bento_list_item_clear_trash">
                                <p>{{ clear_trash }}</p>
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                        <div v-for="(item, index) in cartStore.cartB" :key="item.id"
                            class="bento_list_item_option_cart">
                            <div class="bento_list_item_option_pic">
                                <input type="checkbox" v-model="item.selected" class="item-select">
                            </div>
                            <div class="bento_list_item_option_center">
                                <div class="bento_list_item_option_name">
                                    <p>{{ item.name }}</p>
                                </div>
                                <div class="bento_list_item_option_qty">
                                    <button class="qty-btn_reduce"
                                        @click="cartStore.decreaseQuantity('B', index)">-</button>
                                    <input type="text" v-model.number="item.quantity"
                                        @change="cartStore.updateQuantity('B', index)" class="quantity-input">
                                    <button class="qty-btn_plus"
                                        @click="cartStore.increaseQuantity('B', index)">+</button>
                                </div>
                                <div class="bento_list_item_option_price">
                                    <span>{{ calculateItemTotal(item) }}</span>
                                </div>
                            </div>
                            <div class="bento_list_item_option_icon">
                                <i class="fa-solid fa-trash-can" @click="cartStore.removeFromCartB(index)"></i>
                            </div>
                        </div>
                    </div>
                    <!-- 右邊訂單資訊 -->
                    <div class="bento_list_info">
                        <div class="bento_list_info_title">{{ order_title }}</div>
                        <div class="bento_list_info_item">
                            <div class="order_subtotal_name">{{ order_subtotal_name }}</div>
                            <div class="order_subtotal_price">
                                {{ activeCart === 'A' ? cartStore.totalAmountA : cartStore.totalAmountB }}
                            </div>
                        </div>
                        <div class="bento_list_info_item_total">
                            <div class="total_name">{{ total_name }}</div>
                            <div class="total_price">{{ total_price }}</div>
                        </div>
                        <RouterLink to='/cart/cartpage4'>
                            <button class="bento_list_info_btn">{{ next_page }}</button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import { ref } from 'vue'
import { useCartStore } from '../../../stores/cartStore'

export default {
    setup() {
        const cartStore = useCartStore()
        const activeCart = ref('A') // 默认显示购物车 A

        return {
            cartStore,
            activeCart,
        }
    },
    data() {
        return {
            bentoOption: [],
            bento_select: ' 餐盒', bento_classes: '課程', circle_num_1: '1', circle_num1_con: '購物清單確認',
            circle_num_2: '2', circle_num2_con: '訂購資訊', circle_num_3: '3', circle_num3_con: '訂單成立',
            list_title: '購物清單確認', list_item_name: '商品名稱', list_item_qty: '數量', list_item_subtotal: '小計',
            clear_trash: '清空購物車', order_title: '訂單資訊', order_subtotal_name: '商品小計',
            order_subtotal_price: '$480', total_name: '合計', total_price: '$480', next_page: '下一步',

        }
    },
    methods: {
        showDetails(item) {
            console.log(`顯示 ${item.name} 的詳細訊息`)
            // 实现显示详细信息的逻辑
        },
        increaseQuantity(item) {
            item.quantity++
        },
       calculateItemTotal(item) {
    return item.price * item.quantity;
  },

        decreaseQuantity(item) {
            if (item.quantity > 1) {
                item.quantity--
            }
        },
        updateQuantity(item) {
            if (item.quantity < 1) {
                item.quantity = 1
            }
        },
        removeItem(item) {
            const index = this.bentoOption.findIndex(i => i.id === item.id)
            if (index !== -1) {
                this.bentoOption.splice(index, 1)
            }
        },
        clearCart() {
            this.bentoOption = []
        },
        parseImg(imgURL) {
            return new URL(`../../../assets/img/${imgURL}`, import.meta.url).href
        },
        clearCart(cartType) {
            if (cartType === 'A') {
                this.cartStore.clearCart('A');
            } else if (cartType === 'B') {
                this.cartStore.clearCart('B');
            }
        },
    }
}

</script>

<style lang="scss" scoped>
/* 外框 */
.bento_list {
    width: 80%;
    height: 30%;
    background: linear-gradient(to right bottom, #FADFBF 0%, #FFF2E2 24%, #E8F8FF 77%, #D4EAF7 100%);
    border-radius: 0 10px 10px 10px;
    backdrop-filter: blur(10px);
    margin: 8rem auto 20%;
    padding: 50px 10px;
    text-align: center;
}

/* 換頁 */
.bento_cart_select {
    display: flex;
    margin-top: -101.4px;
    margin-left: -10px;

    .bento_cart_select_bento,
    .bento_cart_select_classes {
        padding: 10px 20px;
    }

    .bento_cart_select_bento {
        background-color: #FADFBF;
        padding: 18px 40px;
        border-radius: 10px 10px 0 0;
    }

    .bento_cart_select_classes {
        background-color: #DAEEF9;
        padding: 18px 40px;
        border-radius: 10px 10px 0 0;
    }
}


/* 步驟 */
.bento_list_step {
    list-style-type: none;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 6% auto;
    width: 80%;
    justify-content: space-between;

    .step {
        position: relative;
        text-align: center;
        flex: 1;
    }

    .circle {
        width: 50px;
        height: 50px;
        border: 1px solid #002451;
        border-radius: 50%;
        display: inline-block;
        line-height: 50px;
        background-color: white;
        font-weight: small;
        color: #002451;
        font-size: 20px;

    }

    .step p {
        margin-top: 10px;
        font-size: .9em;
    }

    .step.active .circle {
        font-weight: bold;
        border: 3px solid #002451;
        line-height: 47px;

    }

    /* 創建步驟中間的橫線 */
    .step::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #002451;
        top: 25%;
        left: -50%;
        z-index: -1;
    }

    /* 第一個步骤前面没有線 */
    .step:first-child::before {
        content: none;
    }
}

/* 標題-購物清單確認 */
.bento_list_comfirm {
    font-size: 20px;
    font-weight: 600;
    text-align: start;
    padding: 1.6% 1.2%;
}

@media screen and (max-width: 768px) {
    .bento_list_comfirm {
        margin: 16px 0;
    }
}

/* 左右邊的外框 */
.bento_list_con {
    display: flex;
    padding: 0 1.2%;
}

@media screen and (max-width: 768px) {
    .bento_list_con {
        display: flex;
    }
}

/* 左邊 */
.bento_list_detail {
    margin-right: 2%;
    display: flex;
    flex-direction: row;
    justify-content: end;

    /* 欄位名稱 */
    .bento_list_item {
        display: flex;
        justify-content: space-between;
        padding-bottom: 0.8%;
        margin-bottom: 4%;
        border-bottom: 1px solid #000;

        .bento_list_item_con {
            display: flex;
            justify-content: space-between;
            width: 38%;
            margin-right: 6%;
        }

        .bento_list_item_con span {
            padding: 0 10%;
        }
    }


    /* 垃圾桶按鈕 */
    .bento_list_item_clear {
        display: flex;
        justify-content: flex-end;
    }

    .bento_list_item_clear_trash {
        width: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem 1.6%;
        border-radius: 10px;
        border: 1px solid #000;
        background-color: #fff;
        margin-bottom: 12px;
    }

    .bento_list_item_clear_trash p {
        margin-right: 10px;
    }

    .bento_list_item_clear_trash:hover {
        background-color: #002451;
        color: #fff;
        cursor: pointer;
    }

    /* 項目內容 */

    .bento_list_item_option {
        display: flex;
        flex-direction: column;
    }

    @media screen and (min-width: 1024px) {
        .bento_list_item_option {
            width: 70%;
        }
    }

    .bento_list_item_option_cart {
        display: flex;
        justify-content: space-evenly;
        background-color: #fff;
        border-radius: 10px;
        padding: 12px;
        margin-bottom: 4%;
    }

    /* 圖片 */
    .bento_list_item_option_pic {
        display: flex;
        margin-right: 4%;
    }

    .bento_list_item_option_pic img {
        width: 100%;
    }

    input[type="checkbox"].item-select {
        margin-right: 2%;
        margin-left: -2%;
    }

    /* 中間內容 */
    .bento_list_item_option_center {
        width: 80%;
        display: flex;
        justify-content: space-evenly;
    }

    /* 名稱、明細 */
    .bento_list_item_option_name {
        display: flex;
        width: 40%;
        flex-direction: column;
        justify-content: center;
        margin-right: 6%;
    }

    .bento_list_item_option_name p {
        font-weight: 600;
        font-size: 1em;
    }

    .bento_list_item_option_btn {
        background-color: #fff;
        border-radius: 16px;
        border: 1px solid #000;
        padding: 10% 2%;
        margin-top: 10px;
    }

    .bento_list_item_option_btn:hover {
        background-color: #002451;
        color: #fff;
        cursor: pointer;
    }

    /* 數量選擇 */
    .bento_list_item_option_qty {
        display: flex;
        justify-content: center;
        align-items: center;
        ;
        margin-right: 5%;
    }

    /* 按鈕加減 */
    .bento_list_item_option_qty button {
        width: 24%;
        height: 28px;
        border-radius: 10px;
        border: 2px solid #002451;
        background-color: #fff;
        cursor: pointer;
    }

    .bento_list_item_option_qty button:hover {
        background-color: #002451;
        color: #fff;
    }

    .quantity-input {
        width: 30%;
        text-align: center;
        margin: 0 4px;
        border-radius: 10px;
        border: 2px solid #002451;
        padding: 2%;
    }

    /* 價格、icon */
    .bento_list_item_option_price {
        display: flex;
        align-items: center;
        margin-right: 6%;
    }

    .bento_list_item_option_icon {
        display: flex;
        align-items: center;
    }


}

.bento_list_detail {
    width: 100%;
    margin: auto;

    .bento_list_item {
        display: flex;
        margin: 2%;
    }

    .bento_list_item_clear button {
        width: 10rem;
        padding: .5rem;
        margin: 2%;
    }

    .bento_list_item_option_cart {
        margin: 2%;
    }
}


@media screen and (max-width: 768px) {
    .bento_list_detail {
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;

        .bento_list_item {
            border-bottom: none;
            margin-bottom: -8%;
        }

        .bento_list_item_con {
            display: none
        }

        .bento_list_item_clear button {
            width: 40%;
            padding: 1% 1%;
        }

        .bento_list_item_option_cart {
            display: flex;
        }

        .bento_list_item_option_pic {
            padding: 0 2%;
            margin: auto;
        }

        .bento_list_item_option_center {
            margin: auto;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .bento_list_item_option_name {
            width: 70%;
            display: flex;
            justify-content: center;
        }

        .bento_list_item_option_btn {
            padding: 4%;
            margin: 6%;
        }

        .bento_list_item_option_qty {
            width: 100%;
            margin-top: 2%;
        }

        .quantity-input {
            width: 30%;
            padding: 2% 0;

        }

        .bento_list_item_option_qty button {
            width: 14%;
        }

        .bento_list_item_option_price {
            margin-top: 10px;
        }

        .bento_list_item_option_icon {
            width: 8%;
        }

    }
}




/* 右邊 */
.bento_list_info {
    width: 30%;
    background-color: #fff;
    border-radius: 10px;
    border: 1px dashed #000;
}

/* 標題 */
.bento_list_info_title {
    text-align: center;
    padding: 10%;
}

/* 欄位名稱 */
.bento_list_info_item {
    display: flex;
    justify-content: space-between;
    margin: 4% 10% 60% 10%;
}

/* 合計欄位名稱 */
.bento_list_info_item_total {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #000;
    margin: 0 10%;
    padding-top: 4%;
}

/* 下一步按鈕 */
.bento_list_info_btn {
    background-color: #002451;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 8px 10px;
    margin: 10% 0;
    cursor: pointer;
}

@media screen and (max-width: 1280px) {
    .bento_list_info_item {
        margin-bottom: 230px;
    }
}

@media screen and (max-width: 1200px) {
    .bento_list_info_item {
        margin-bottom: 210px;
    }
}

@media screen and (max-width: 1024px) {
    .bento_list_info_item {
        margin-bottom: 190px;
    }
}

@media screen and (max-width: 992px) {

    .bento_list_info_item {
        margin-bottom: 100%;
    }

    .bento_list_info_item_total {
        margin-top: 60%;
    }

    .bento_list_info_btn {
        padding: 4%;
        margin-top: 26%;
    }
}

@media screen and (max-width: 768px) {
    .bento_list_info {
        width: 100%;
        margin-top: 6%;
    }

    .bento_list_info_btn {
        padding: 2%;
        width: 36%;
        margin-bottom: 10%;
    }
}
</style>
