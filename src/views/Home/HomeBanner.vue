<script setup></script>

<template>
    <div class="banner_section">
        <div class="banner_img">
            <img src="/src/assets/img/shaking.jpg" alt="">
        </div>
        <div class="banner_title">
            <h2>CHALLENGE <br>
            YOUR<br> 
            LIMIT<br>
        </h2>
        </div>
    </div>
</template>

<script></script>

<style lang="scss" scoped>

.banner_section{
    margin-top: 67px;
    width: 100%;
    aspect-ratio: 2/1;
    position: relative;
    .banner_img{
        width: 100%;
        img{
            width: 100%;
            aspect-ratio: 2/1;
            object-fit: cover;
            object-position: 50% 50%;
        }
    }
    .banner_title{
        width: 100%;
        aspect-ratio: 2/1;
        position: absolute;
        z-index: 5;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        h2{
            color: azure;

        }
    }
}
</style>