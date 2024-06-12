<template>
    <section>
        <div class="bento_list">
        <!-- 餐盒、課程選單 -->
        <div class="bento_list_title">
            <div class="bento_cart_select">
                <span class="bento_cart_select_bento">{{ bento_select }}</span>
                <span class="bento_cart_select_classes">{{ bento_classes }}</span>
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
            <!-- 左邊清單確認 -->
            <div class="bento_list_detail">
                <!-- 欄位名稱 -->
                <div class="bento_list_item">
                    <div class="bento_list_item_name">{{ list_item_name }}</div>
                    <div class="bento_list_item_con">
                        <span>{{ list_item_qty }}</span>
                        <span>{{ list_item_subtotal }}</span>
                    </div>
                </div>
                <!-- 垃圾桶按鈕 -->
                <div class="bento_list_item_clear">
                    <button class="bento_list_item_clear_trash">
                        <p>{{ clear_trash }}</p>
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
                <!-- 訂單選項 --> 
                <!-- 外框 -->
                <div class="bento_list_item_option">
                    <!-- 第一個項目 -->
                    <div class="bento_list_item_option_cart" v-for="item in bentoOption" :key="item.id">
                        <div class="bento_list_item_option_pic">
                            <input type="checkbox" class="item-select">
                            <img :src="item.imgSrc" :alt="item.name">
                        </div>
                        <div class="bento_list_item_option_name">
                            <p>{{ item.name }}</p>
                            <button class="bento_list_item_option_btn">{{ item.details }}</button>
                        </div>
                        <div class="bento_list_item_option_qty">
                            <button class="qty-btn_reduce">-</button>
                            <input type="number" value="1" class="quantity-input">
                            <button class="qty-btn_plus">+</button>
                        </div>
                        <div class="bento_list_item_option_price_icon">
                            <span>{{ item.price }}</span>
                            <i class="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 右邊訂單資訊 -->
            <div class="bento_list_info">
                <div class="bento_list_info_title">{{ order_title }}</div>
                <div class="bento_list_info_item">
                    <div class="order_subtotal_name">{{ order_subtotal_name }}</div>
                    <div class="order_subtotal_price">{{ order_subtotal_price }}</div>
                </div>
                <div class="bento_list_info_item_total">
                    <div class="total_name">{{ total_name }}</div>
                    <div class="total_price">{{ total_price }}</div>
                </div>
                <button class="bento_list_info_btn">{{ next_page }}</button>
            </div>
        </div>
    </div>
    </section>
    
</template>

<script>
    export default {
    data() {
        return {
            bento_select: '餐盒',
            bento_classes: '課程',
            circle_num_1: '1',
            circle_num1_con: '購物清單確認',
            circle_num_2: '2',
            circle_num2_con: '訂購資訊',
            circle_num_3: '3',
            circle_num3_con: '訂單成立',
            list_title: '購物清單確認',
            list_item_name: '商品名稱',
            list_item_qty: '數量',
            list_item_subtotal: '小計',
            clear_trash: '清空購物車', 
            order_title: '訂單資訊',
            order_subtotal_name: '商品小計',
            order_subtotal_price: '$480',
            total_name: '合計',
            total_price: '$480',
            next_page: '下一步',
            bentoOption: [{
                id: 1,
                name: '饗食四合一',
                details: '查看餐盒明細',
                price: '$120',
                imgSrc: '/src/assets/img/bento_box_four.png',
            },
            {
                id: 2,
                name: '滿腹六合一',
                details: '查看餐盒明細',
                price: '$200',
                imgSrc: '/src/assets/img/bento_box_six.png',
            },]
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
            margin: 10% auto;
            padding: 50px 10px;
            text-align: center;
        }

        /* 換頁 */
        .bento_cart_select{
            display: flex;
            margin-top: -101.4px;
            margin-left: -10px;
        }
        .bento_cart_select_bento, .bento_cart_select_classes{
            padding: 10px 20px;
        }
        .bento_cart_select_bento{
            background-color: #FADFBF;
            padding: 18px 40px;
            border-radius: 10px 10px 0 0;
        }
        .bento_cart_select_classes{
            background-color: #DAEEF9;
            padding: 18px 40px;
            border-radius: 10px 10px 0 0;
        }


        /* 步驟 */
        .bento_list_step{
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
        .step p {
            margin-top: 10px;
            font-size: 16px;
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
            height: 2px;background-color: #002451;
            top: 25%;
            left: -50%;
            z-index: -1;
        }
        /* 第一個步骤前面没有線 */
        .step:first-child::before {
            content: none; 
        }

        /* 標題-購物清單確認 */
        .bento_list_comfirm{
            font-size: 20px;
            font-weight: 600;
            text-align: start;
            padding: 1.6% 1.2%;
        }
        /* 左右邊的外框 */
        .bento_list_con{
            display: flex;
            padding: 0 1.2%;
        }

        /* 左邊 */
        .bento_list_detail{
            width: 70%;
            margin-right: 2%;
        }
        /* 欄位名稱 */
        .bento_list_item{
            display: flex;
            justify-content: space-between;
            padding-bottom: 0.8%;
            margin-bottom: 4%;
            border-bottom: 1px solid #000;
        }
        .bento_list_item_name{
            width: 36%;
            text-align: left;
        }
        .bento_list_item_con{
            width: 52%;
        }
        .bento_list_item_con span{
            margin: 0 18%;
        }
        /* 垃圾桶按鈕 */
        .bento_list_item_clear{
            display: flex;
            justify-content: flex-end
        }
        .bento_list_item_clear_trash{
            width: 24%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 4px 20px;
            border-radius: 10px;
            border: 1px solid #000;
            background-color: #fff;
            margin-bottom: 12px;
        }
        .bento_list_item_clear_trash:hover{
            background-color: #002451;
            color: #fff;
            cursor: pointer;
        }
        .bento_list_item_clear_trash p {
            margin-right: 10px;
        }
        /* 項目內容 */
        .bento_list_item_option{
            display: flex;
            flex-direction: column;
        }
        .bento_list_item_option_cart{
            display: flex;
            justify-content: space-evenly;
            background-color: #fff;
            border-radius: 10px;
            padding: 12px;
            margin-bottom: 4%;
        }
        /* 圖片 */
        .bento_list_item_option_pic{
            display: flex;
            width: 16%;
            margin-right: 24px;
        }
        .bento_list_item_option_pic img{
            width: 100%;
        }
        input[type="checkbox"].item-select {
            margin-right: 20px;
            margin-left: -12px;
        }
        
        /* 名稱、明細 */
        .bento_list_item_option_name{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .bento_list_item_option_btn{
            background-color: #fff;
            border-radius: 16px;
            border: 1px solid #000;
            padding: 6px 10px;
            margin-top: 10px;
        }
        .bento_list_item_option_btn:hover{
            background-color: #002451;
            color: #fff;
            cursor: pointer;
        }
        /* 數量選擇 */
        .bento_list_item_option_qty{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        /* 按鈕加減 */
        .bento_list_item_option_qty button{
            width: 12%;
            height: 28px;
            border-radius: 10px;
            border: 2px solid #002451;
            background-color: #fff;
            cursor: pointer;
        }
        .bento_list_item_option_qty button:hover{
            background-color: #002451;
            color: #fff;
        }
        .quantity-input{
            width: 30%;
            height: 24%;
            text-align: center;
            margin: 0 4px;
            border-radius: 10px;
            border: 2px solid #002451;
        }
         /* 價格、icon */
        .bento_list_item_option_price_icon{
            display: flex;
            align-items: center;
            margin-right: 6%;
        }
        .bento_list_item_option_price_icon span{
            margin-right: 74%;
            margin-left: 20%;
        }
        
        /* 右邊 */
        .bento_list_info{
            width: 30%;
            background-color: #fff;
            border-radius: 10px;
            border: 1px dashed #000;
        }
        /* 標題 */
        .bento_list_info_title{
            text-align: center;
            padding: 4%;
        }
        /* 欄位名稱 */
        .bento_list_info_item{
            display: flex;
            justify-content: space-between;
            margin: 4% 10% 60% 10%;
        }
        /* 合計欄位名稱 */
        .bento_list_info_item_total{
            display: flex;
            justify-content: space-between;
            border-top: 1px solid #000;
            margin: 0 10%;
            padding-top: 4%;
        }
        /* 下一步按鈕 */
        .bento_list_info_btn{
            background-color: #002451;
            color: #fff;
            border: none;
            border-radius: 10px;
            width: 40%;
            padding: 8px 10px;
            margin-top: 16%;
            cursor: pointer;
        }
</style>