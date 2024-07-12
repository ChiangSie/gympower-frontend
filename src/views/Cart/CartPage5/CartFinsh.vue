<template>
    <section>
        <div class="bento_list">
            <div class="bento_list_title">
                <div class="bento_cart_select">
                    <span class="bento_cart_select_bento" :class="{ active: activeCart === 'A' }"
                        @click="selectCart('A')">
                        餐盒
                    </span>
                    <span class="bento_cart_select_classes" :class="{ active: activeCart === 'B' }"
                        @click="selectCart('B')">
                        課程
                    </span>
                </div>
                <!-- 步驟 -->
                <ul class="bento_list_step">
                    <li class="step active">
                        <div class="circle" id="circle_1">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <p>{{ circle_num1_con }}</p>
                    </li>
                    <li class="step second">
                        <div class="circle">
                            <i class="fa-solid fa-check"></i>
                        </div>
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
                <!-- 左邊清單確認 -->
                <div class="bento_list_detail">
                    <!-- 欄位名稱 -->
                    <div class="bento_list_item">
                        <div class="bento_list_item_buyer">{{ buyer_info }}</div>
                    </div>
                    <!-- 訂單選項 -->
                    <!-- 外框 -->
                    <div class="bento_list_item_option">
                        <!-- 姓名 -->
                        <div class="bento_list_form-group">
                            <label for="name">姓名：</label>
                            <span>{{ $route.query.name }}</span>
                        </div>
                        <!-- 手機 -->
                        <div class="bento_list_form-group">
                            <label for="phone">手機：</label>
                            <span>{{ $route.query.phone }}</span>
                        </div>
                        <!-- 手機 -->
                        <div class="bento_list_form-group">
                            <label for="email">電子信箱：</label>
                            <span>{{ $route.query.email }}</span>
                        </div>
                        <!-- 付款方式 -->
                        <div class="bento_list_form-group">
                            <label for="payment">付款方式：</label>
                            <span>{{ $route.query.pay }}</span>
                        </div>
                        <!-- 取貨據點 -->
                        <div class="bento_list_form-group">
                            <label for="pickup">取貨據點：</label>
                            <span>{{ $route.query.pickup }}</span>
                        </div>
                    </div>
                </div>
                <!-- 右邊訂單資訊 -->
                <div class="bento_list_info">
                    <CartSummary :activeCart="activeCart" :totalName="total_name" />
                    <button class="bento_list_info_btn" @click="finishOrder">{{ next_page }}</button>
                    <div class="bento_list_item_rule_agree">
                    <input type="checkbox" class="item-rule" v-model="isChecked">
                    <span>{{ rule }}</span>
                    <br>
                    <a href="/Homelightbox" class="rule_serve">{{ rule_serve }}</a>。
                    <!-- <span>{{ rule_and }}</span>
                    <span class="rule_return"><a href="#">{{ rule_return }}</a></span> -->
                </div>
                </div>
                
            </div>

            <div class="bento_list_item_rule">
                <!-- 上一步 -->
                <RouterLink to='/cart/cartpage4' class="bento_list_item_rule_up">
                    <i class="fa-solid fa-angle-left"></i>
                    <span>{{ Previous }}</span>
                </RouterLink>
                
            </div>
            <!-- 完成圖案 -->
            <div class="overlay">
                <div class="confirmation-box">
                    <div class="icon"><i class="fa-solid fa-check"></i></div>
                    <div class="message">{{ order_finsh }}</div>
                    <div class="sub-message">{{ check_oreder }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Swal from 'sweetalert2';
import CartSummary from '../../../component/selectedItems3.vue'; // 確保路徑正確
import { useCartStore } from '@/stores/cartStore';

export default {
    components: {
        CartSummary
    },

    data() {
        return {
            activeCart: 'A', // 初始化選擇的值
            bento_select: '餐盒',
            bento_classes: '課程',
            circle_num1_con: '購物清單確認',
            circle_num_2: '2',
            circle_num2_con: '訂購資訊',
            circle_num_3: '3',
            circle_num3_con: '訂單成立',
            list_title: '購物清單確認',
            buyer_info: '購買人資訊',
            same_info: '同會員資料',
            cart_list: '購物車明細',
            order_subtotal_name: '商品小計',
            discount_name: '優惠卷',
            discount_price_value: -40, // 原始折扣值
            total_name: '合計',
            next_page: '結帳',
            Previous: '上一步',
            rule: '我已閱讀並同意網站的',
            rule_serve: '服務條款',
            // rule_and: '與',
            // rule_return: '退換貨規則',
            order_finsh: '訂單完成 !',
            check_oreder: '請至會員專區查看訂單',
            isChecked: false,
        }
    },
    computed: {
        order_subtotal_price() {
            return this.ShoppingDetails.reduce((total, item) => {
                return total + item.price * item.qty;
            }, 0);
        },
        discount_price() {
            return this.discount_price_value;
        },
        total_price() {
            return this.order_subtotal_price + this.discount_price_value;
        },
    },
    methods: {
        selectCart(cartType) {
            this.activeCart = cartType;
        },
        finishOrder() {
            if (!this.isChecked) {
                this.showAlert('請先勾選已閱讀規則');
            } else {
                this.showAlertCart();
                this.clearCart();
            }
        },
        showAlert(message) {
            Swal.fire({
                icon: 'warning',
                title: '提示',
                text: message,
                confirmButtonText: '確定'
            });
        },
        showAlertCart() {
            Swal.fire({
                position: "center",
                html: `
                    <div class="confirmation-box">
                        <div class="icon"><i class="fa-solid fa-check"></i></div>
                        <div class="message">${this.order_finsh}</div>
                        <div class="sub-message">${this.check_oreder}</div>
                    </div>
                `,
                showConfirmButton: false,
                timer: 1200,
            })
        },
        clearCart() {
            const cartStore = useCartStore();
            cartStore.clearCart(this.activeCart);
        },
        parseImg(imgURL) {
            return new URL(`../../../assets/img/${imgURL}`, import.meta.url).href;
        }
    },
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
    margin: 10% auto;
    padding: 50px 10px;
    text-align: center;
}

.bento_list_title {
    .bento_cart_select span.active {
        background-color: #002451;
        color: #fff;
    }
}

/* 換頁 */
.bento_cart_select {
    display: flex;
    margin-top: -101.4px;
    margin-left: -10px;

}

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

/* 步驟 */
.bento_list_step {
    list-style-type: none;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 6% auto;
    width: 80%;
    justify-content: space-between;
}

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

#circle_2 {
    line-height: 48px;
}

.step p {
    margin-top: 10px;
    font-size: .9em;
}

.step.active .circle {
    background-color: #002451;
    color: white;
}

.step.second .circle {
    background-color: #002451;
    color: white;
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

/* 標題-購物清單確認 */
.bento_list_comfirm {
    font-size: 20px;
    font-weight: 600;
    text-align: start;
    padding: 1.6% 1.2%;
}

/* 左右邊的外框 */
.bento_list_con {
    display: flex;
    padding: 0 1.2%;
    margin-left: 3%;
}

/* 左邊 */
.bento_list_detail {
    width: 60%;
    margin-right: 2%;
    padding: 2%;
}

/* 欄位名稱 */
.bento_list_item {
    display: flex;
    padding-bottom: 1.8%;
    border-bottom: 1px solid #000;
    width: 100%;
}

.bento_list_item_buyer {
    margin-right: 20%;
}

// 填單明細外框
.bento_list_item_option {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.bento_list_form-group {
    margin: 5% 0;
}

//input前的名稱
// .bento_list_form-group label {
//     width: 100%;
//     text-align: right;
//     margin-right: 10px;
// }

// input框
// .styled-input {
//     border-radius: 4px;
//     border: 1.2px solid #707070;
//     width: 400px;
//     height: 36px;
//     padding: 5px;
// }

// .styled-input:focus {
//     outline: none;
//     border-color: #002451;
//     box-shadow: 0 0 5px #002451;
// }
// 姓名那列往下移不貼線
#styled-input_name {
    margin-top: 30px;
}

.bento_list_form-group #pickup {
    border-radius: 4px;
    padding: 16px;
    width: 410px;
}

@media screen and (max-width: 768px) {
    .bento_list_con {
        display: flex;
        flex-direction: column;
    }

    .bento_list_item {
        margin-top: 1rem;
        width: 100%;
    }

    .bento_list_item_option {
        margin-top: 1rem;
    }

    .bento_list_detail {
        width: 100%;
        margin-right: 2%;
        padding: 2%;
    }
}





/* 右邊 */
.bento_list_info {
    width: 30%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    border: 1px dashed #000;

    button {
        align-self: center;
    }
}

.bento_list_info_title {
    padding: 0 0 6% 0;
}


/* 頭部標題 */
.bento_list_info_up {
    margin: 30px 30px 20px 30px;
    text-align: left;
    padding-bottom: 12px;
    border-bottom: 1px solid #000;
}

.bento_list_info_center_type {
    display: flex;
    flex-direction: column;
}

/* 中間項目 */
.bento_list_info_center_type_con {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed #000;
    margin: 0 28px;
    padding-bottom: 6px;
    width: 80%;
}

/* 中間項目圖片 */
.bento_list_info_center_type_con_pic {
    line-height: .6;
    width: 24%;
}

.bento_list_info_center_type_con_pic img {
    width: 100%;
}

/* 中間項目名稱 */
.bento_list_info_center_type_con_name {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-right: 40px;
    width: 50%;
}

.bento_list_info_center_type_con_name span {
    margin: 4px 0;
    font-size: 1em;
}

/* 中間項目小計 */
.bento_list_info_center_total {
    display: flex;
    flex-direction: column;
    margin: 200px 30px 0 30px;
}

.bento_list_info_center_total_price,
.bento_list_info_center_total_coupon {
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
}

.bento_list_info_center_total_price span {
    display: inline-block;
    text-align: left;
}

.coupon_price {
    color: red;
    font-weight: 400;
}

/* 尾部總計、結帳 */
.bento_list_info_item_total {
    border-top: 1px solid #000;
    margin: 6px 30px 20px 30px;
    display: flex;
    justify-content: space-between;
}

.bento_list_info_item_total span {
    margin-top: 8%;
}

.bento_list_info_btn {
    background-color: #002451;
    color: #fff;
    border: none;
    border-radius: 10px;
    width: 25%;
    height: 35px;
    padding: 6px 10px;
    margin: 10% 0 14% 0;
    cursor: pointer;
}

@media screen and (max-width: 992px) {
    .bento_list_info_center_type_con {
        width: 70%;
    }

    .bento_list_info_center_type_con_name span {
        width: 196%;
        font-size: .8em;
        margin-left: 16%;
    }

    .bento_list_info_center_type_con_pic {
        width: 40%;
    }
}

@media screen and (max-width: 768px) {

    .bento_list {
        margin-top: 23%;

    }

    .bento_list_info {
        margin: auto;
    }

    .bento_list_info_center_type_con {
        width: 84%;
    }
}




/* 上一步、同意條款 */
.bento_list_item_rule {
    display: flex;
    justify-content: space-evenly;
    margin: 60px 0 30px 0;
    
}

.bento_list_item_rule_up {
    width: 8%;
    display: flex;
    justify-content: space-around;
    border-bottom: 1.5px solid #002451;
    text-decoration: none;
    color: #002451;
    font-weight: 600;
}

.bento_list_item_rule_up:hover {
    cursor: pointer;
}
.bento_list_item_rule_agree {
    padding-bottom: 2rem;
}
.bento_list_item_rule_agree .rule_serve a{
    color: #000;
    border-bottom: 1px solid blue;
    // letter-spacing: -1px;
}

@media screen and (max-width: 992px) {
    .bento_list_item_rule {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
    }

    .bento_list_item_rule_up {
        width: 12%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10% 0 0 44%;
    }
}

@media screen and (max-width: 768px) {
    .bento_list_info {
        width: 98%;
    }

    .bento_list_item_rule {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
    }

    .bento_list_item_rule_up {
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10% 0 0 38%;
    }

    .bento_list_info_btn {
        padding: 2%;
        width: 36%;
        margin-bottom: 10%;
    }
}


/* 完成跳窗 */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 6;
    display: none;
}

.confirmation-box {
    background: linear-gradient(to right bottom, #FADFBF 0%, #FFF2E2 24%, #E8F8FF 77%, #D4EAF7 100%);
    padding: 120px 120px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
}

.confirmation-box .icon {
    width: 200px;
    height: 200px;
    line-height: 2.6;
    font-size: 80px;
    background-color: #002451;
    border-radius: 100px;
    margin-bottom: 20px;
    color: #fff
}

.confirmation-box .message {
    font-size: 18px;
    font-weight: 800;
    color: #000000;
    margin-bottom: 10px;
}

.confirmation-box .sub-message {
    font-size: 16px;
    color: #000000;
    letter-spacing: 1.2px;
}
</style>