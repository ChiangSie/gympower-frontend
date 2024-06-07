<template>
    <section class="bento_list">
        <div class="bento_clear_pic">
            <img src="../../../assets/img/bento.png" alt="">
        </div>
        <div class="bento_clear_txt">
            <p>客製便當盒成功</p>
            <span>商品已添加至購物車內!</span>
        </div>
        <div class="bento_clear_button">
            <button class="button_cart">前往購物車</button>
            <button class="button_shopping">繼續購物</button>
        </div>
    </section>
</template>

<script></script>

<style lang="scss" scoped>
    /* 外框 */
    .bento_list {
            width: 40%;
            height: 30%;
            background: linear-gradient(to right, #F0EEE9, #D4EAF7);
            border-radius: 10px;
            backdrop-filter: blur(10px);
            margin: 10% auto;
            padding: 50px 10px;
            text-align: center;
            position: relative;
        }

        /* --------------------------------------------- */
        /* 圖片 */
        .bento_clear_pic{
            width: 24%;
            position: absolute;
            transform: translate(150%, -90%);
        }
        .bento_clear_pic img{
            width: 100%;
        }

        /* --------------------------------------------- */
        /* 文字 */
        .bento_clear_txt{
            padding: 30px;
        }
        .bento_clear_txt p{
            font-size: 24px;
            margin-bottom: 4%;
        }
        .bento_clear_txt span{
            font-size: 16px;
        }

        /* --------------------------------------------- */
        /* 按鈕 */
        .bento_clear_button{
            display: flex;
            justify-content: space-evenly;
            margin-top: 50px;
        }
        .bento_clear_button .button_cart, .button_shopping{
            width: 30%;
            padding: 10px;
        }
        .bento_clear_button .button_cart{
            font-size: 16px;
            color: #002451;
            border: 2px solid #002451;
            background-color: transparent;
            border-radius: 10px;
        }
        .bento_clear_button .button_shopping{
            font-size: 16px;
            color: #fff;
            background-color: #002451;
            border: 2px solid #002451;
            border-radius: 10px;
        }
</style>