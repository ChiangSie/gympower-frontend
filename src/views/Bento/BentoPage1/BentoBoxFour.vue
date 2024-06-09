<template>
    <section class="bentobox4_info">
        <div class="bentobox4_bg">
            <div class="bentobox4_pic">
                <img :src="imgSrc" alt="" />
            </div>
            <div class="bentobox4_txt">
                <h3>{{ text }}</h3>
            </div>
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
}
</script>

<style lang="scss" scoped>
.bentobox4_pic {
    width: 30%;
    aspect-ratio: 4 / 3.5;
    margin-left: 250px;
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

.bentobox4_info {
    display: flex;
    justify-content: flex-start;


    &:hover .bentobox4_txt h3 {
        transform: scale(1.1);
        color: #00377A;
        cursor: pointer;
    }
}

.bentobox4_bg {
    background: linear-gradient(-90deg, #FEEFDA, #D4EAF7, #71c5efa2);
    border-radius: 0 340px 340px 0;
    display: flex;
    justify-content: flex-start;
    width: 80%;
    height: 100%;
}

@media screen and (max-width: 768px) {
    .bentobox4_bg {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        border-radius: 0;

    }

    .bentobox4_pic {
        width: 100%;
        aspect-ratio: 4 / 3.5;
        margin: auto;
    }

    .bentobox4_txt {
        margin-right: 10%;
        margin-bottom: 40px;
    }
}

.bentobox4_txt {
    display: flex;
    align-items: center;
    margin-left: 10%;
}

.bentobox4_txt h3 {
    font-weight: 600;
    transition: transform 0.3s, color 0.3s;
}
</style>
