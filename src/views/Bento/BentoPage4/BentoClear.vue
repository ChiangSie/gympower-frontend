<template>
    <section>
        <div class="bento_list_wrap">
            <div class="bento_list">
                <div class="bento_clear_pic">
                    <img src="../../../assets/img/bento.png" alt="">
                </div>
                <div class="bento_clear_txt">
                    <p>客製便當盒成功</p>
                    <span>商品已添加至購物車內!</span>
                </div>
                <div class="bento_clear_txt_1">
                    <p>客製便當盒成功</p>
                    <span>商品已添加至購物車內!</span>
                </div>
                <div class="bento_clear_button">
                    <button class="button_cart">前往購物車</button>
                    <button class="button_shopping">繼續購物</button>
                </div>
                <div class="bento_clear_button_1">
                    <button class="button_cart_1" @click="goToCart">前往購物車</button>
                    <button class="button_shopping_1" @click="continueShopping">繼續購物</button>
                </div>
                <div class="blurred_box"></div>
            </div>

        </div>
    </section>
</template>

<script>
import { useRouter } from 'vue-router';
import { useBentoStore } from '@/stores/bentobox';
import { useCartListStore } from '@/stores/cart';
import { useFoodStore } from '@/stores/foodStore';


export default {
    name: 'BentoClear',
    setup() {
        const router = useRouter();
        const bentoStore = useBentoStore();
        const cartStore = useCartListStore();
        const foodStore = useFoodStore();

        const goToCart = () => {
            router.push('/asidecart');
        };

        const continueShopping = () => {
            bentoStore.$reset();
            cartStore.$reset();
            foodStore.$reset();
            router.push('/bento');
        };

        return {
            goToCart,
            continueShopping
        };
    }
};
</script>

<style lang="scss" scoped>
/* 外框 */
.bento_list {
    width: 30%;
    height: 30%;
    background: linear-gradient(to right, #F0EEE9, #D4EAF7);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    margin: 10% auto;
    padding: 50px 10px;
    text-align: center;
    position: relative;
    z-index: 5;

}

@media screen and (max-width: 768px) {
    .bento_list {
        width: 75%;
        margin-top: 25%;
    }
}

/* --------------------------------------------- */
/* 圖片 */
.bento_clear_pic {
    width: 24%;
    position: absolute;
    top: 10%;
    transform: translate(150%, -90%);
    z-index: 5;
}

.bento_clear_pic img {
    width: 100%;
}

/* --------------------------------------------- */
/* 文字 */
.bento_clear_txt {
    padding: 30px;
}

.bento_clear_txt_1 {
    padding: 30px;
    position: absolute;
    top: 50px;
    left: 60px;
    z-index: 5;
}

.bento_clear_txt_1 p {
    font-size: 24px;
    margin-bottom: 4%;
    font-weight: 600;
}

.bento_clear_txt_1 span {
    font-size: 16px;
}

.bento_clear_txt p {
    font-size: 24px;
    margin-bottom: 4%;
    color: #B8B8B8;
}

.bento_clear_txt span {
    font-size: 16px;
    color: #B8B8B8;
}

/* --------------------------------------------- */
/* 按鈕 */
.bento_clear_button {
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
}

.bento_clear_button_1 {
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
    z-index: 5;
    position: absolute;
    top: 170px;
    left: 0px;
    width: 100%;

    a.router-link-exact-active {
        text-decoration: none;
        border: none;
        display: block;
    }

}

.bento_clear_button .button_cart,
.button_shopping {
    width: 40%;
    padding: 10px;
    cursor: pointer;
}

.bento_clear_button_1 .button_cart_1,
.button_shopping_1 {
    width: 40%;
    padding: 10px;
    cursor: pointer;
}

.bento_clear_button .button_cart {
    font-size: 16px;
    color: #0024515d;
    border: 2px solid #0024515d;
    background-color: transparent;
    border-radius: 10px;
}

.bento_clear_button_1 .button_cart_1 {
    font-size: 16px;
    font-weight: 600;
    color: #002451;
    border: 2px solid #002451;
    background-color: transparent;
    border-radius: 10px;
    cursor: pointer;

}

.bento_clear_button .button_shopping {
    font-size: 16px;
    color: #fff;
    background-color: #0024515d;
    border: 2px solid #0024515d;
    border-radius: 10px;
}

.bento_clear_button_1 .button_shopping_1 {
    font-size: 16px;
    color: #fff;
    background-color: #002451;
    border: 2px solid #002451;
    border-radius: 10px;
    cursor: pointer;
}

/* --------------------------------------------- */
/* glass effect */

.bento_list_wrap {
    position: relative;
    z-index: 1;
}

.blurred_box {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    z-index: 1;

}
</style>
