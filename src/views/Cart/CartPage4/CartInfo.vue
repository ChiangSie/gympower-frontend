<template>
    <section class="bento_list">
        <div class="bento_list_title">
            <div class="bento_cart_select">
                <span class="bento_cart_select_bento">{{ bento_select }}</span>
                <span class="bento_cart_select_classes">{{ bento_classes }}</span>
            </div>
            <!-- 步驟 -->
            <ul class="bento_list_step">
                <li class="step active">
                    <div class="circle">
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <p>{{ circle_num1_con }}</p>
                </li>
                <li class="step second">
                    <div class="circle" id="circle_2">{{ circle_num_2 }}</div>
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
                    <div class="bento_list_item_mem">
                        <input type="checkbox" class="item-select">
                        <span>{{ same_info }}</span>
                    </div>
                </div>
                <!-- 訂單選項 -->
                <!-- 外框 -->
                <div class="bento_list_item_option">
                    <!-- 姓名 -->
                    <div class="bento_list_form-group">
                        <label for="name">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名&nbsp;：</label>
                        <input v-model="name" type="text" name="name" class="styled-input" id="styled-input_name"
                            placeholder="請輸入您的姓名">
                    </div>
                    <!-- 手機 -->
                    <div class="bento_list_form-group">
                        <label for="phone">手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;機&nbsp;：</label>
                        <input v-model="phone" type="number" name="phone" class="styled-input" placeholder="請輸入您的手機號碼">
                    </div>
                    <!-- 電子信箱 -->
                    <div class="bento_list_form-group">
                        <label for="email">電&nbsp;子&nbsp;信&nbsp;箱&nbsp;：</label>
                        <input v-model="email" type="email" name="email" class="styled-input" placeholder="請輸入您的電子信箱">
                    </div>
                    <!-- 付款方式 -->
                    <div class="bento_list_form-group">
                        <label for="payment">付&nbsp;款&nbsp;方&nbsp;式&nbsp;：</label>
                        <input v-model="pay" type="radio" name="pay" value="現金">現金
                        <input v-model="pay" type="radio" name="pay" value="信用卡">信用卡
                        <input v-model="pay" type="radio" name="pay" value="行動支付">行動支付
                    </div>
                    <!-- 取貨據點 -->
                    <div class="bento_list_form-group">
                        <label for="pickup">取&nbsp;貨&nbsp;據&nbsp;點&nbsp;：</label>
                        <select v-model="pickup" id="pickup" name="pickup">
                            <option value="">請選擇</option>
                            <option value="台北大安店">台北大安店</option>
                            <option value="新北板橋店">新北板橋店</option>
                            <option value="台中中港店">台中中港店</option>
                            <option value="臺南府城店">臺南府城店</option>
                            <option value="高雄小港店">高雄小港店</option>
                            <option value="基隆中正店">基隆中正店</option>
                            <option value="桃園中原店">桃園中原店</option>
                            <option value="新竹科技園區店">新竹科技園區店</option>
                            <option value="苗栗苗栗店">苗栗苗栗店</option>
                            <option value="彰化員林店">彰化員林店</option>
                            <option value="南投埔里店">南投埔里店</option>
                            <option value="雲林斗六店">雲林斗六店</option>
                            <option value="嘉義嘉義市店">嘉義嘉義市店</option>
                            <option value="嘉義縣民雄店">嘉義縣民雄店</option>
                            <option value="屏東屏東大學店">屏東屏東大學店</option>
                            <option value="宜蘭羅東店">宜蘭羅東店</option>
                            <option value="花蓮東華大學店">花蓮東華大學店</option>
                            <option value="台東縣鐵花村店">台東縣鐵花村店</option>
                            <option value="澎湖縣馬公店">澎湖縣馬公店</option>
                            <option value="金門縣中山店">金門縣中山店</option>
                            <option value="連江縣lienchiang_country">連江縣lienchiang_country</option>
                        </select>
                    </div>
                    <!-- 使用優惠券 -->
                    <div class="bento_list_form-group">
                        <label for="coupon">使用優惠卷：</label>
                        <input v-model="coupon" type="text" name="coupon" class="styled-input" placeholder="請選擇折扣代碼">
                    </div>
                </div>
            </div>

            <!-- 右邊訂單資訊 -->
            <div class="bento_list_info">
                <!-- 頭部標題 -->
                <div class="bento_list_info_up">{{ cart_list }}</div>
                <!-- 中間項目 -->
                <div class="bento_list_info_center_type">
                    <div class="bento_list_info_center_type_con" v-for="item in ShoppingDetails" :key="item.id">
                        <div class="bento_list_info_center_type_con_pic">
                            <img :src="parseImg(item.imgSrc)" alt="">
                        </div>
                        <div class="bento_list_info_center_type_con_name">
                            <span>{{ item.name }}</span>
                            <span>${{ item.price }}</span>
                        </div>
                        <div class="bento_list_info_center_type_con_qty">
                            <span>x{{ item.qty }}</span>
                        </div>
                    </div>
                </div>
                <!-- 中間項目小計 -->
                <div class="bento_list_info_center_total">
                    <div class="bento_list_info_center_total_price">
                        <span>{{ order_subtotal_name }}</span>
                        <span>${{ order_subtotal_price }}</span>
                    </div>
                    <div class="bento_list_info_center_total_coupon">
                        <span>{{ discount_name }}</span>
                        <span class="coupon_price">${{ discount_price }}</span>
                    </div>
                </div>
                <!-- 尾部總計、下一步 -->
                <div class="bento_list_info_down">
                    <div class="bento_list_info_item_total">
                        <span>{{ total_name }}</span>
                        <span>${{ total_price }}</span>
                    </div>
                    <button @click="validateAndProceed" class="bento_list_info_btn">下一頁</button>
                    <!-- <RouterLink :to="buildQuery">
                        <button class="bento_list_info_btn">下一頁</button>
                    </RouterLink> -->
                </div>
            </div>
        </div>
        <!--服務條款 、 上一步 -->
        <div class="bento_list_item_rule">
            <RouterLink to='/cart' class="bento_list_item_rule_up">
                <i class="fa-solid fa-angle-left"></i>
                <span>{{ Previous }}</span>
            </RouterLink>
        </div>
    </section>
</template>


<script>
import Swal from 'sweetalert2';
export default {
    data() {
        return {
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

            name: sessionStorage.getItem('name') || '',
            phone: sessionStorage.getItem('phone') || '',
            email: sessionStorage.getItem('email') || '',
            pay: sessionStorage.getItem('pay') || '',
            pickup: sessionStorage.getItem('pickup') || '',
            coupon: sessionStorage.getItem('coupon') || '',

            cart_list: '購物車明細',
            order_subtotal_name: '商品小計',
            discount_name: '優惠卷',
            discount_price_value: -40, // 原始折扣值
            total_name: '合計',
            next_page: '下一步',
            Previous: '上一步',
            rule: '我已閱讀並同意網站的',
            rule_serve: '服務條款',
            rule_and: '與',
            rule_return: '退換貨規則',
            ShoppingDetails: [{
                id: 1,
                name: '饗食四合一',
                price: 120,
                imgSrc: 'bento_box_four.png',
                qty: 1,
            }]
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
        buildQuery() {
            return {
                path: '/cart/cartpage5',
                query: {
                    name: this.name,
                    phone: this.phone,
                    email: this.email,
                    pay: this.pay,
                    pickup: this.pickup,
                    coupon: this.coupon
                }
            };
        }
    },
    watch: {
        name(value) {
            sessionStorage.setItem('name', value);
        },
        phone(value) {
            sessionStorage.setItem('phone', value);
        },
        email(value) {
            sessionStorage.setItem('email', value);
        },
        pay(value) {
            sessionStorage.setItem('pay', value);
        },
        pickup(value) {
            sessionStorage.setItem('pickup', value);
        },
        coupon(value) {
            sessionStorage.setItem('coupon', value);
        }
    },
    mounted() {
        const [navigationEntry] = performance.getEntriesByType('navigation');
        if (navigationEntry && navigationEntry.type === 'reload') {
            // 页面刷新
            sessionStorage.removeItem('name');
            sessionStorage.removeItem('phone');
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('pay');
            sessionStorage.removeItem('pickup');
            sessionStorage.removeItem('coupon');
        }
    },
    methods: {
        parseImg(imgURL) {
            return new URL(`../../../assets/img/${imgURL}`, import.meta.url).href;
        },
        validateAndProceed() {
            if (!this.name) {
                this.showAlert('請輸入您的姓名');
            } else if (!this.phone) {
                this.showAlert('請輸入您的手機號碼');
            } else if (!this.email) {
                this.showAlert('請輸入您的電子信箱');
            } else if (!this.pay) {
                this.showAlert('請選擇付款方式');
            } else if (!this.pickup) {
                this.showAlert('請選擇取貨據點');
            } else {
                this.$router.push(this.buildQuery);
            }
        },
        showAlert(message) {
            Swal.fire({
                icon: 'warning',
                title: '提示',
                text: message,
                confirmButtonText: '確定'
            });
        }
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
    margin: 26% auto 20%;
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
    font-weight: bold;
    border: 3px solid #002451;
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
}

/* 左邊 */
.bento_list_detail {
    width: 70%;
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
    margin-bottom: 6%;
}

//input前的名稱
// .bento_list_form-group label {
//     width: 100%;
//     text-align: right;
//     margin-right: 10px;
// }

// input框
.styled-input {
    border-radius: 4px;
    border: 1.2px solid #707070;
    width: 400px;
    height: 36px;
    padding: 5px;
}

.styled-input:focus {
    outline: none;
    border-color: #002451;
    box-shadow: 0 0 5px #002451;
}

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

    .bento_list_detail {
        margin-top: 4%;
    }

    .bento_list_item {
        display: flex;
        width: 140%;
        margin-bottom: 10%;
        border-bottom: 1px solid #000;
    }

    .bento_list_item_option {
        width: 140%;
    }

    .bento_list_form-group label {
        display: none;
    }

    .styled-input {
        border-radius: 4px;
        border: 1.2px solid #707070;
        width: 330px;
        height: 36px;
        padding: 5px;
    }

    #styled-input_name {
        margin: auto;
    }

    .bento_list_form-group #pickup {
        width: 340px;
    }

}






/* 右邊 */
.bento_list_info {
    width: 30%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    border: 1px dashed #000;
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
}

.bento_list_info_center_type_con_name span {
    margin: 4px 0;
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

/* 尾部總計、下一步 */
.bento_list_info_item_total {
    border-top: 1px solid #000;
    margin: 6px 30px 20px 30px;
    display: flex;
    justify-content: space-between
}

.bento_list_info_item_total span {
    margin-top: 8%;
}

.bento_list_info_btn {
    background-color: #002451;
    color: #fff;
    border: none;
    border-radius: 10px;
    width: 40%;
    padding: 6px 10px;
    margin: 2% 0 14% 0;
    cursor: pointer;
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

.bento_list_item_rule_agree .rule_serve a,
.rule_return a {
    color: #000;
    letter-spacing: .6px;
}

@media screen and (max-width: 768px) {
    .bento_list_info {
        width: 98%;
    }

    .bento_list_item_rule_up {
        width: 20%;
        display: flex;
        align-items: center;
    }

    .bento_list_info_btn {
        padding: 2%;
        width: 36%;
        margin-bottom: 10%;
    }
}
</style>