<template>
    <div class="section section-courselist">
        <div class="container">
            <h2>其他課程</h2>
            <div class="image-carousel">
                <button class="prev-button" @click="prevImages" :disabled="isFirstGroup"><</button>
                <router-link class="image-container" v-for="(image, index) in displayedImages" :key="index" :to="`/course/${image.c_id}`">
                    <img :src="getImageUrl(image.c_img)" :alt="image.c_name"
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
        filteredImageUrls() {
            return this.filterUniqueImages(this.imageUrls);
        },
        displayedImages() {
            return this.filteredImageUrls.slice(this.currentIndex, this.currentIndex + this.imagesPerGroup);
        },
        isFirstGroup() {
            return this.currentIndex === 0;
        },
        isLastGroup() {
            return this.currentIndex + this.imagesPerGroup >= this.filteredImageUrls.length;
        }
    },
    methods: {
        filterUniqueImages(images) {
            const seen = new Set();
            return images.filter(image => {
                const key = `${image.c_name}-${image.coach_name}`;
                if (seen.has(key)) {
                    return false;
                }
                seen.add(key);
                return true;
            });
        },
        prevImages() {
            if (this.currentIndex > 0) {
                this.currentIndex = Math.max(0, this.currentIndex - this.imagesPerGroup);
            }
        },
        nextImages() {
            if (this.currentIndex + this.imagesPerGroup < this.filteredImageUrls.length) {
                this.currentIndex = Math.min(
                    this.filteredImageUrls.length - this.imagesPerGroup,
                    this.currentIndex + this.imagesPerGroup
                );
            }
        },
        getImageUrl(imgSrc) {
            if (typeof imgSrc === 'string') {
                return new URL(`../../assets/img/course/${imgSrc}`, import.meta.url).href;
            }
            return imgSrc; // 如果已經是完整的 URL，直接返回
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
        background: linear-gradient(90deg, #F8F7F6, rgba(255, 255, 255, 0));       
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
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), #F8F7F6);
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
    border-radius: 10px;
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