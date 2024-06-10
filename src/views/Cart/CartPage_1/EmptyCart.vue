<template>
    <section>
        <div class="cart_card">
            <div class="close_btn">
                <i class="fa-regular fa-circle-xmark"></i>
            </div>
            <div class="cart_navbar">
                <div class="cart_title">
                    <h4>{{ cart_title }}</h4>
                </div>
                <div class="cart_tag">
                    <div class="cart_tag1">
                        <p>{{ cart_tag1 }}</p>
                    </div>
                    <div class="cart_tag2">
                        <p>{{ cart_tag2 }}</p>
                    </div>
                </div>
            </div>
            <div class="cart_content">
                <div class="shop_cart_check"></div>
                <h4>{{ cart_content }}</h4>
            </div>
            <div class="cart_footer">
                <span class="underline"></span>
                <button class="delete_btn">{{ delete_btn }}</button>
                <div class="cart_sum">
                    <p>{{ sum_title }}</p>
                    <p>{{ sum_price }}</p>
                </div>
                <button class="cart_btn">{{ cart_btn }}</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            cart_title: '購物車',
            cart_tag1: '餐盒',
            cart_tag2: '課程',
            cart_content: '購物車還是空的哦！',
            delete_btn: '刪除多個',
            cart_btn: '前往結帳',
            sum_title: '小計',
            sum_price: '$ 0',
        }
    }
}
</script>

<style lang="scss" scoped>
/* ====================================================== */
/* 購物車tag標籤 */

.cart_card {
    padding-top: 4%;
    background-color: #ffffff;
    border: 2px solid #000000;
    border-radius: 0 0 5px 5px;
    width: 30%;
    margin-left: auto;
}

.close_btn {
    font-size: 25px;
    cursor: pointer;
    color: #002451;
    margin-bottom: 25px;

    i {
        margin-left: 89%;
    }
}

.cart_navbar {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #000000;
    width: 85%;
    margin: auto;
}

.cart_title h4 {
    font-weight: 600;
}

.cart_tag {
    display: flex;
    justify-content: center;
    margin-top: 5px;

}

.cart_tag1 {
    background-color: #71C4EF;
    width: 60px;
    border-radius: 5px 5px 0 0;
    height: 35px;
    cursor: pointer;

    p {
        color: #fff;
        text-align: center;
        padding-top: 7px;

    }
}

.cart_tag2 {
    background-color: #D4EAF7;
    width: 60px;
    border-radius: 5px 5px 0 0;
    height: 35px;
    cursor: pointer;

    p {
        color: #000000;
        text-align: center;
        padding-top: 7px;

    }
}

@media screen and (max-width: 768px) {

    .cart_card {
        padding-top: 12%;
        border: none;
        width: 100%;
    }
}

/* ====================================================== */
/* 購物車內容 */

.cart_content {
    text-align: center;
    height: 45vh;
    padding: 25% 0;

    h4 {
        padding-top: 10px;
        font-size: 20px;
    }

}

@media screen and (max-width: 768px) {
    .cart_content {
        padding: 20% 0;
    }

    .cart_title h4 {
        font-size: 24px;
    }
}

.shop_cart_check {
    background-image: url('@/assets/img/shopping_cart_check.svg');
    width: 60px;
    height: 60px;
    margin: auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
}

/* ====================================================== */
/* 購物車結帳區塊 */

.underline {
    border-bottom: 2px solid #000000;
    display: block;
    width: 85%;
    margin: auto;
}

.delete_btn {
    background-color: #71C4EF;
    border: none;
    width: 100px;
    height: 30px;
    border-radius: 50px;
    color: white;
    padding: 4px 16px;
    cursor: pointer;
    margin-top: 16px;
    margin-left: 25px;
}

.cart_sum {
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: auto;
    margin-top: 16px;

    p {
        font-size: 18px;
    }
}

.cart_btn {
    background-color: #002451;
    border: none;
    width: 100%;
    height: 30px;
    color: white;
    padding: 4px 16px;
    cursor: pointer;
    margin-top: 16px;
}

@media screen and (max-width: 768px) {
    .cart_btn {
        height: 40px;
    }

}
</style>