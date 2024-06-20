<template>
    <div class="section section-courselist">
        <div class="container">
            <h2>其他課程</h2>
            <div class="image-carousel">
                <button class="prev-button" @click="prevImages" :disabled="isFirstGroup"><</button>
                <router-link class="image-container" v-for="(imageUrl, index) in displayedImageUrls" :key="index" :to="`/course/${imageUrl.id}`">
                    <img  :src="getImageUrl(imageUrl.imgSrc)" alt="Current Image"
                        class="carousel-image" />
                </router-link>
                <button class="next-button" @click="nextImages" :disabled="isLastGroup">></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageUrls: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            currentIndex: 0,
            imagesPerGroup: 3 // 可以根據需求調整
        };
    },
    computed: {
        displayedImageUrls() {
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
        }
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
        getImageUrl(imageUrl) {
            return new URL(`/src/assets/img/course/${imageUrl}`, import.meta.url).href;
        }
    }
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
    gap: 1rem;
    .prev-button{
        position: absolute;
        left: 0;
        z-index: 2;
        font-size: 2rem;
        height: 100%;
        width: 4rem;
        background: linear-gradient(90deg, #ffffff, rgba(255, 255, 255, 0));       
        border: none;
        border-radius: 10px;
    }
    .next-button{
        position: absolute;
        right: 0;
        font-size: 2rem;
        z-index: 2;
        height: 100%;
        width: 4rem;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), #ffffff);
        border: none;
        border-radius: 10px;
    }
.image-container {
    width: 60%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    .carousel-image {
    aspect-ratio: 1.5/1.2;
    width: 100%;
    height: auto;
    margin: 10px;
    img{
        width: 100%;
         object-fit: contain; 
    }
}
}
}
}

}

</style>