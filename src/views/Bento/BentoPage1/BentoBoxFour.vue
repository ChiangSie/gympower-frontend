<template>
    <section class="bentobox4_info">
        <div class="bentobox4_pic">
            <img :src="imgSrc" alt="" />
        </div>
        <div class="bentobox4_txt">
            <h3>{{ text }}</h3>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            imgSrc: '/src/assets/img/bento_box_four.png',
            text: '饗食四合一'

        }
    }
}</script>

<style lang="scss" scoped>
.bentobox4_pic {
    width: 30%;
    aspect-ratio: 2/1;

    img {
        vertical-align: middle;
        width: 100%;
        object-fit: cover;
        object-position: 50% 50%;
    }

}

.bentobox4_info {
    display: flex;
    justify-content: space-evenly;
}

.bentobox4_txt {
    display: flex;
    align-items: center;

}
</style>