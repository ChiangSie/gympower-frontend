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
                        <div class="bento_list_item_option_center">
                            <div class="bento_list_item_option_name">
                                <p>{{ item.name }}</p>
                                <button class="bento_list_item_option_btn">{{ item.details }}</button>
                            </div>
                            <div class="bento_list_item_option_qty">
                                <button class="qty-btn_reduce">-</button>
                                <input type="text" value="1" class="quantity-input">
                                <button class="qty-btn_plus">+</button>
                            </div>
                            <div class="bento_list_item_option_price">
                                <span>{{ item.price }}</span>
                            </div>
                        </div>
                        <div class="bento_list_item_option_icon">
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
                height: 2px;background-color: #002451;
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
        .bento_list_comfirm{
            font-size: 20px;
            font-weight: 600;
            text-align: start;
            padding: 1.6% 1.2%;
        }
        @media screen and (max-width: 768px) {
            .bento_list_comfirm{
                margin: 16px 0 ;
            }
        }
        /* 左右邊的外框 */
        .bento_list_con{
            display: flex;
            padding: 0 1.2%;
        }
        @media screen and (max-width: 768px) {
            .bento_list_con{
                display: flex;
                flex-direction: column;
            }
        }

        /* 左邊 */
        .bento_list_detail{
            width: 70%;
            margin-right: 2%;


            /* 欄位名稱 */
            .bento_list_item{
                display: flex;
                justify-content: space-between;
                padding-bottom: 0.8%;
                margin-bottom: 4%;
                border-bottom: 1px solid #000;

                .bento_list_item_con{
                    display: flex;
                    justify-content: space-between;
                    width: 38%;
                    margin-right: 6%;
                }
                .bento_list_item_con span{
                    padding: 0 10%;
                }   
            }

            /* 垃圾桶按鈕 */
            .bento_list_item_clear{
            display: flex;
            justify-content: flex-end;
            }
            .bento_list_item_clear_trash{
            width: 24%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1% 1.6%;
            border-radius: 10px;
            border: 1px solid #000;
            background-color: #fff;
            margin-bottom: 12px;
            }
            .bento_list_item_clear_trash p {
                margin-right: 10px;
            }
            .bento_list_item_clear_trash:hover{
                background-color: #002451;
                color: #fff;
                cursor: pointer;
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
                margin-right: 4%;
            }
            .bento_list_item_option_pic img{
                width: 100%;
            }
            input[type="checkbox"].item-select {
                margin-right: 2%;
                margin-left: -2%;
            }
            /* 中間內容 */
            .bento_list_item_option_center{
                width: 80%;
                display: flex;
                justify-content: space-evenly;
            }
            /* 名稱、明細 */
            .bento_list_item_option_name{
                display: flex;
                width: 20%;
                flex-direction: column;
                justify-content: center;
                margin-right: 6%;
            }
            .bento_list_item_option_name p {
                font-weight: 600;
                font-size: 1em;
            }
            .bento_list_item_option_btn{
                background-color: #fff;
                border-radius: 16px;
                border: 1px solid #000;
                padding: 10% 2%;
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
                align-items: center;;
                margin-right: 5%;
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
                padding: 2%;
            }
            /* 價格、icon */
            .bento_list_item_option_price{
                display: flex;
                align-items: center;
                margin-right: 6%;
            }
            .bento_list_item_option_icon{
                display: flex;
                align-items: center;
            }


        } //左邊
        @media screen and (max-width: 1200px) {
            .bento_list_detail{
                width:  100%;
                margin-right: 2%;

                .bento_list_item{
                display: flex;
                justify-content: space-between;

                .bento_list_item_con{
                    display: flex;
                    justify-content: flex-start;
                    width: 41%;
                }
                .bento_list_item_con span{
                    padding-right: 27%;
                }   
                }

                .bento_list_item_clear button{
                    width: 28%;
                    margin: 2%;
                }
                .bento_list_item_option_cart{
                    display: no;
                    justify-content: flex-start;
                }
                .bento_list_item_option_pic{
                    width: 20%;
                    margin: 2%;
                }
                input[type="checkbox"].item-select {
                margin-right: 8%;
                margin-left: -2%;
                }

                .bento_list_item_option_center{
                    display: flex;
                    margin: auto 10%;
                    width: 90%;
                }
                .bento_list_item_option_name{
                    display: flex;
                    width: 66%;
                }
                .bento_list_item_option_btn{
                    padding: 6%;
                }
                .bento_list_item_option_qty{
                    width: 80%;
                }
                .quantity-input{
                    width: 30%;
                    padding: 4%;
                }
                .bento_list_item_option_qty button{
                    width: 20%;
                }
                .bento_list_item_option_price{
                    display: flex;
                    margin-left: 10%;
                }
            }
        }

        @media screen and (max-width: 992px) {
            .bento_list_detail{
                width: 100%;
                margin: auto;

                .bento_list_item{
                    display: flex;
                    margin: 2%;
                }
                .bento_list_item_con{
                    width: 10%;
                }
                .bento_list_item_con span{
                    padding: 0;
                }
                .bento_list_item_clear button{
                    width: 30%;
                    margin: 2%;
                }
                .bento_list_item_option_cart{
                    display: flex;
                    margin: 2%;
                }
                .bento_list_item_option_pic{
                    width: 24%;
                    padding: 0 2%;
                    margin: auto;
                }
                .bento_list_item_option_center{
                    margin: auto 2%;
                    width: 80%;
                }
                .bento_list_item_option_name{
                    display: flex;
                    width: 76%;
                }
                .bento_list_item_option_btn{
                    padding: 4%;
                }
                .bento_list_item_option_qty{
                    width: 80%;
                }
                .quantity-input{
                    width: 36%;
                    padding: 4%;
                }
                .bento_list_item_option_qty button{
                    width: 24%;
                }
                .bento_list_item_option_price{
                    margin-left: 8%;
                }
            }
        }

        @media screen and (max-width: 768px) {
            .bento_list_detail{
                width: 100%;
                margin: auto;

                .bento_list_item{
                    border-bottom: none;
                    margin-bottom: -8%;
                }
                .bento_list_item_con{
                    display: none
                }
                .bento_list_item_clear button{
                    width: 40%;
                    padding: 1% 1%;
                }
                .bento_list_item_option_cart{
                    display: flex;
                }
                .bento_list_item_option_pic{
                    width: 60%;
                    padding: 0 2%;
                    margin: auto;
                }
                .bento_list_item_option_center{
                    margin: auto;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .bento_list_item_option_name{
                    width: 70%;
                    display: flex;
                    justify-content: center;
                }
                .bento_list_item_option_btn{
                    padding: 4%;
                    margin: 6%;
                }
                .bento_list_item_option_qty{
                    width: 100%;
                    margin-top: 2%;
                }
                .quantity-input{
                    width: 30%;
                    padding: 2% 0;
                }
                .bento_list_item_option_qty button{
                    width: 14%;
                }
                .bento_list_item_option_price{
                    margin-top: 10px;
                }
                .bento_list_item_option_icon{
                    width: 8%;
                }
                
            }
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

        @media screen and (max-width: 1200px) {
            .bento_list_info_item{
                margin-bottom: 130%;
            }
        }

        @media screen and (max-width: 992px) {
            .bento_list_info_title{
                margin-top: 4%;
            }
            .bento_list_info_item{
                margin-bottom: 100%;
            }
            .bento_list_info_item_total{
                margin-top: 60%;
            }
            .bento_list_info_btn{
                padding: 4%;
                margin-top: 26%;
            }
        }

        @media screen and (max-width: 768px) {
            .bento_list_info{
                width: 100%;
            }
            .bento_list_info_btn{
                margin-bottom: 10%;
            }
        }

        
</style>