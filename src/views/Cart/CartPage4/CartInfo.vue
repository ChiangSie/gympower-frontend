<template>
    <section class="bento_list">
        <div class="bento_list_title">
            <div class="bento_cart_select">
                <span class="bento_cart_select_bento" :class="{ active: activeCart === 'A' }"
                    @click="activeCart = 'A'">餐盒</span>
                <span class="bento_cart_select_classes" :class="{ active: activeCart === 'B' }"
                    @click="activeCart = 'B'">課程</span>
            </div>
            <!-- 步驟 -->
            <ul class="bento_list_step">
                <li class="step" :class="{ active: activeCart === 'A' }">
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
                        <input v-model="phone" type="tel" name="phone" pattern="[0-9]{10}" maxlength="10" minlength="10"
                            class="styled-input" placeholder="請輸入您的手機號碼" @input="filterNonNumeric">
                    </div>
                    <!-- 電子信箱 -->
                    <div class="bento_list_form-group">
                        <label for="email">電&nbsp;子&nbsp;信&nbsp;箱&nbsp;：</label>
                        <input v-model="email" type="email" name="email" class="styled-input" placeholder="請輸入您的電子信箱">
                    </div>
                    <!-- 付款方式 -->
                    <div class="bento_list_form-group">
                        <label for="payment">付&nbsp;款&nbsp;方&nbsp;式&nbsp;：</label>&nbsp;
                        <input v-model="pay" type="radio" name="pay" value="現金">現金&nbsp;&nbsp;
                        <input v-model="pay" type="radio" name="pay" value="信用卡">信用卡&nbsp;&nbsp;
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
                </div>
            </div>
            <!-- 右邊訂單資訊 -->
            <div class="bento_list_info">
                <CartSummary :activeCart="activeCart" :totalName="total_name" />
                <RouterLink to='/cart/cartpage5'>
                    <button class="bento_list_info_btn">{{ next_page }}</button>
                </RouterLink>
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
import CartSummary from '../../../component/selectedItems2.vue'; // 確保路徑正確


export default {
    components: {
        CartSummary
    },

    data() {
        return {
            activeCart: 'A',
            bento_select: '餐盒',
            bento_classes: '課程',
            circle_num1_con: '購物清單',
            circle_num_2: 2,
            circle_num2_con: '付款資訊',
            circle_num_3: 3,
            circle_num3_con: '完成訂單',
            list_title: '清單確認',
            buyer_info: '購買人資訊',
            same_info: '同訂購人資料',
            name: '',
            phone: '',
            email: '',
            pay: '',
            pickup: '',
            cart_list: '訂購清單',
            order_subtotal_name: '小計',
            order_subtotal_price: 0,
            discount_name: '折扣',
            discount_price: 0,
            total_name: '總計',
            total_price: 0,
            Previous: '上一步',
            next_page: '下一步',
        }
    },
    methods: {
        filterNonNumeric(event) {
            event.target.value = event.target.value.replace(/\D/g, '');
        },
        validateAndProceed() {
            if (!this.name || !this.phone || !this.email || !this.pay || !this.pickup) {
                Swal.fire('提示', '請填寫所有必填欄位', 'warning');
                return;
            }
            // 執行下一步操作
            // 可以導航到另一個頁面或執行其他操作
        },
        buildQuery() {
            const query = {
                name: this.name,
                phone: this.phone,
                email: this.email,
                pay: this.pay,
                pickup: this.pickup,
            };
            return { name: 'cart', query };
        }
    }
}
</script>

<style lang="scss" scoped>
.bento_cart_select span {
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ccc;
}

.bento_cart_select span.active {
    background-color: #002451;
    color: #fff;
}

/* 外框 */
.bento_list {
    width: 80%;
    height: 30%;
    background: linear-gradient(to right bottom, #FADFBF 0%, #FFF2E2 24%, #E8F8FF 77%, #D4EAF7 100%);
    border-radius: 0 10px 10px 10px;
    backdrop-filter: blur(10px);
    margin: 10rem auto 20%;
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
    padding-bottom: 1rem;
    border-bottom: 1px solid #000;
    width: 100%;
    justify-content: space-between;
}

.bento_list_item_buyer {
    margin-right: 20%;
}

// 填單明細外框
.bento_list_item_option {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 1rem;
}

.bento_list_form-group {
    margin: 1rem 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
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
    width: 100%;
    height: 36px;
    padding: 5px;
}

.styled-input:focus {
    outline: none;
    border-color: #002451;
    box-shadow: 0 0 5px #002451;
}


.bento_list_form-group #pickup {
    border-radius: 4px;
    padding: 16px;
    width: 100%;
}

@media screen and (max-width: 768px) {
    .bento_list_con {
        display: flex;
        flex-direction: column;
    }

    .bento_list_detail {
        width: 100%;
        margin-top: 4%;
    }

    .bento_list_item {
        display: flex;
        border-bottom: 1px solid #000;
    }


    .bento_list_form-group label {
        display: none;
    }

    .styled-input {
        border-radius: 4px;
        border: 1.2px solid #707070;
        width: 100%;
        height: 36px;
        padding: 5px;
    }

    #styled-input_name {
        margin: auto;
    }


}


/* 右邊 */

.bento_list_info {
    width: 30%;
    background-color: #fff;
    border-radius: 10px;
    border: 1px dashed #000;
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
    width: 25%;
    padding: 6px 10px;
    margin: 10% 0 14% 0;
    cursor: pointer;
}


/* 上一步、同意條款 */
.bento_list_item_rule {
    display: flex;
    justify-content: space-evenly;
    margin: 60px 0 30px 0;
    word-break: keep-all;
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