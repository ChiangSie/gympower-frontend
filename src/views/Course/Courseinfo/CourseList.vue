<template>
    <div class="section section-courselist">
         <div class="container">
        <h2>其他課程</h2>
        <div class="image-carousel">
            <button class="prev-button" @click="prevImages" :disabled="isFirstGroup"><</button>
            <div class="image-container">
                <img v-for="(imageUrl, index) in currentImageUrls" :key="index" :src="imageUrl" alt="Current Image"
                    class="carousel-image" />
            </div>
            <button class="next-button" @click="nextImages" :disabled="isLastGroup">></button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imageUrls: [
                'src/assets/img/index/indexcourse.png',
                'src/assets/img/banner_aboutus.jpg',
                'src/assets/img/index/indexcourse.png',
                'src/assets/img/banner_aboutus.jpg',
                'src/assets/img/index/indexcourse.png',
                'src/assets/img/banner_aboutus.jpg',
                'src/assets/img/index/indexcourse.png',
                'src/assets/img/banner_aboutus.jpg',
                'src/assets/img/index/indexcourse.png',
                // 其他圖片 URL
            ],
            currentIndex: 0,
            imagesPerGroup: 3, // 可以根據需求調整
        };
    },
    computed: {
        currentImageUrls() {
            const startIndex = this.currentIndex;
            const endIndex = startIndex + this.imagesPerGroup;
            return this.imageUrls.slice(startIndex, endIndex);
        },
        isFirstGroup() {
            return this.currentIndex === 0;
        },
        isLastGroup() {
            const lastIndex = this.imageUrls.length - this.imagesPerGroup;
            return this.currentIndex >= lastIndex;
        },
    },
    methods: {
        prevImages() {
            if (!this.isFirstGroup) {
                this.currentIndex -= this.imagesPerGroup;
            }
        },
        nextImages() {
            if (!this.isLastGroup) {
                this.currentIndex += this.imagesPerGroup;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.section-courselist{
.container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 5%;
.image-carousel {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 5rem;
    .prev-button{
        position: absolute;
        left: 10px;
        z-index: 2;
    }
    .next-button{
        position: absolute;
        right: 10px;
        z-index: 2;
    }
.image-container {
    width: 60%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    .carousel-image {
    max-width: 50%;
    height: auto;
    margin: 10px;
    img{
        width: 100%;
    }
}
}
}
}

}
@media (max-width: 768px) {
    .carousel-image {
        max-width: 60%;
    }
}

@media (max-width: 480px) {
    .carousel-image {
        max-width: 60%;
    }
}
</style>