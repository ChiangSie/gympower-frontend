<template>
    <section class="banner">
        <div class="banner_aboutus_img">
            <img :src="parseImg('banner_5.jpg')" alt="banner" />
        </div>
        <h1>{{ title }}</h1>
    </section>
</template>

<script>
export default {
    data() {
        return {
            title: '課程資訊'
        }
    },
    methods: {
     parseImg(imgURL) {
      return new URL(`../../assets/img/banner/${imgURL}`, import.meta.url).href;
    },
    }
}
</script>

<style lang="scss" scoped>
.banner {
    width: 100%;
    margin-top: 40px;
    position: relative;

    .banner_aboutus_img {
        width: calc(100% - 60px);
        height: 450px;
        overflow: hidden;
        border-radius: 10px;
        margin: 30px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }

    h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgb(255, 255, 255);
        font-size: clamp(24px, 5vw, 40px);
        text-align: center;
        text-shadow:
            1px 1px 3px black,
            5px 3px 0 #71c4ef;
    }
}

@media (max-width: 768px) {
    .banner_aboutus_img {
        width: 100%;
        height: auto;
        margin: 0;
    }

    .banner h1 {
        font-size: clamp(24px, 4vw, 35px);
    }
}
</style>
