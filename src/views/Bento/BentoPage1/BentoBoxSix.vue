<template>
    <section class="bentobox6_info">
        <div class="bentobox6_con">
            <div class="bentobox6_txt">
                <h3>{{ text }}</h3>
            </div>
            <div class="bentobox6_pic">
                <img :src="imgSrc" alt="" />
            </div>
        </div>
        <div class="bentobox_button">
            <p>{{ button_txt }}</p>
        </div>
    </section>

</template>

<script>
export default {
    data() {
        return {
            imgSrc: '/src/assets/img/bento_box_six.png',
            text: '滿腹六合一',
            button_txt: '下一步 >'

        }
    }
}</script>

<style lang="scss" scoped>
.bentobox6_pic {
    width: 30%;
    aspect-ratio: 2/1;
    margin-right: 10%;

    img {
        vertical-align: middle;
        width: 100%;
        object-fit: cover;
        object-position: 50% 50%;
    }

}

.bentobox6_info {
    display: flex;
    flex-direction: column;
    align-items: center
}

.bentobox6_txt {
    display: flex;
    align-items: center;
    margin-right: 10%;

}

.bentobox6_con {
    display: flex;
    justify-content: flex-end;

}

.bentobox_button {
    color: #ffffff;
    background-color: #002451;
    border-radius: 10px;
    padding: 10px;
    width: 10%;
}

.bentobox_button p {
    text-align: center;
}
</style>