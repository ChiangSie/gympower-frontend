<template>
    <section class="bentobox_banner">
        <div class="bentobox_bg">
            <div class="bento_title_wrap">
                <RouterLink to='/bento/bentopage2' class="btn_link">
                    <button class="bentobox_button_left">
                        <font-awesome-icon :icon="['fas', 'chevron-left']" class="custom_icon_left" />
                        <p>{{ button_txt_left }}</p>
                    </button>
                </RouterLink>
                <div class="bento_title">
                    <p>{{ subtitle_txt }}</p>
                    <h1>{{ title_txt }}</h1>
                </div>
                <RouterLink to='/bento/bentopage4' class="btn_link">
                    <button class="bentobox_button_right">
                        <p>{{ button_txt_right }}</p>
                        <font-awesome-icon :icon="['fas', 'chevron-right']" class="custom_icon_right" />
                    </button>
                </RouterLink>
            </div>
            <div class="bento_info">
                <div class="bento_pic">
                    <img :src="imgSrc" alt="" />
                </div>
            </div>
        </div>
        <div class="wave">
            <img :src="imgSrcWave" alt="" />
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            imgSrc: '/src/assets/img/bento_box_four.png',
            button_txt_right: '下一步',
            button_txt_left: '上一步',
            title_txt: '確認餐點明細',
            subtitle_txt: 'STEP 3',
            imgSrcWave: '/src/assets/img/wave.svg'
        }
    }
}
</script>

<style lang="scss" scoped>
.bentobox_banner {
    position: relative;
}

.bentobox_bg {
    background: linear-gradient(90deg, #FEEFDA, #D4EAF7);
    height: 95vh;

}

.wave {
    position: absolute;
    top: 70%;
    width: 100%;
    left: 0;
    height: 20vh;
}

@media screen and (max-width: 768px) {
    .bentobox_bg {
        height: 80vh;

    }

    .wave {
        position: absolute;
        top: 85%;
    }
}

.bento_title_wrap {
    display: flex;
    justify-content: space-evenly;
    padding-top: 80px;
}

.btn_link {
    text-decoration: none;
}

.bento_title {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bentobox_button_left {
    display: flex;
    justify-content: center;
    border-bottom: 3px solid #002451;
    width: 100px;
    height: 45px;
    padding: 10px;
    cursor: pointer;
}

.bentobox_button_left p {
    margin-top: 2px;
}

.custom_icon_left {
    margin-right: 8px;
    margin-top: 5px;
}

.bentobox_button_right {
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #002451;
    color: #ffffff;
    border-radius: 10px;
    width: 120px;
    height: 45px;
    cursor: pointer;

}

.custom_icon_right {
    margin-left: 8px;
    margin-top: 5px;
}

@media screen and (max-width: 768px) {

    .bentobox_button_left {
        width: 80px;

        p {
            font-size: 12.5px;
        }

    }

    .bentobox_button_right {
        width: 80px;

        p {
            margin-top: 5px;
            font-size: 12.5px;
        }
    }

    .bento_title h1 {
        font-size: 22px;
    }

}

button {
    border: none;
    background-color: transparent;
}

/* ====================================================== */
/* 餐盒照片替換 */
.bento_pic {
    width: 35%;
    aspect-ratio: 4/3.5;


    img {
        vertical-align: middle;
        width: 100%;
        object-fit: cover;
        object-position: 50% 50%;
    }

    p {
        text-align: center;
    }

}

.bento_price {
    margin-top: 280px;
    width: 20%;
    font-weight: 600;
}

.bento_info {
    display: flex;
    justify-content: center;

}

@media screen and (max-width: 768px) {

    .bento_pic {
        width: 90%;
        aspect-ratio: 4/3.5;
    }

    .bento_info {
        flex-wrap: wrap;
    }

    .bento_price {
        width: 50%;
        margin-top: 40px;
        text-align: center;
    }

}
</style>