<template>
    <section class="bentobox6_info">
        <div class="bentobox6_bg">
            <div class="bentobox6_con">
                <div class="bentobox6_txt">
                    <h3>{{ text }}</h3>
                </div>
                <div class="bentobox6_pic">
                    <img :src="imgSrc" alt="" />
                </div>
            </div>
        </div>
        <RouterLink to='/bento/bentopage2' class="btn_link">
            <button class="bentobox_button">
                <p>{{ button_txt }}</p>
                <font-awesome-icon :icon="['fas', 'chevron-right']" class="custom_icon" />

            </button>
        </RouterLink>
    </section>

</template>

<script>
export default {
    data() {
        return {
            imgSrc: '/src/assets/img/bento_box_six.png',
            text: '滿腹六合一',
            button_txt: '下一步'

        }
    }
}</script>


<style lang="scss" scoped>
.bentobox6_pic {
    width: 30%;
    aspect-ratio: 4/3.5;
    margin-right: 250px;
    overflow-clip-margin: content-box;
    overflow: clip;


    img {
        vertical-align: middle;
        width: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        cursor: pointer;
        transition: .3s;


        &:hover {
            transform: scale(1.1);
            box-shadow: 5px 10px 10px #B6B7B9;
            opacity: 1;
        }
    }

}

.bentobox6_info {
    display: flex;
    flex-direction: column;
    align-items: center;

}

.bentobox6_bg {
    background: linear-gradient(90deg, #FEEFDA, #D4EAF7, #71c5efa2);
    border-radius: 340px 0 0 340px;
    width: 80%;
    margin-left: auto;
    height: 100%;

    &:hover .bentobox6_txt h3 {
        transform: scale(1.1);
        color: #00377A;
        cursor: pointer;

    }

}

@media screen and (max-width: 768px) {
    .bentobox6_bg {
        display: flex;
        flex-direction: column;
        border-radius: 0;
        width: 100%;
    }

    .bentobox6_con {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }

    .bentobox6_pic {
        width: 100%;
        aspect-ratio: 4 / 3.5;
        margin: auto;
    }

    .bentobox6_txt {
        margin-left: 10%;
        margin-bottom: 40px;
    }

}

.bentobox6_txt {
    display: flex;
    align-items: center;
    margin-right: 10%;

}

.bentobox6_txt h3 {
    font-weight: 600;
    transition: transform 0.3s, color 0.3s;
}

.bentobox6_con {
    display: flex;
    justify-content: flex-end;

}

.btn_link {
    text-decoration: none;

    .bentobox_button {
        color: #ffffff;
        background-color: #002451;
        border-radius: 10px;
        padding: 10px;
        width: 120px;
        margin-top: 80px;
        display: flex;
        justify-content: space-evenly;
        cursor: pointer;

        p {
            text-align: center;
        }
    }

    .custom_icon {
        align-self: center;
    }

    button {
        border: none;
    }

}
</style>