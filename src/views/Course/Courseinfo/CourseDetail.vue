<template>
    <div class="section section-coursedetail">
        <div class="container">
        <div class="image-preview">
            <div class="large-image">
                <img :src="selectedImageUrl" alt="Large Image Preview" />
            </div>
        <div class="thumbnail-list">
            <img v-for="(imageUrl, index) in productInfo.imageUrls"
                :key="index"
                :src="`/src/assets/img/course/${ imageUrl }`"
                alt="Thumbnail"
                class="thumbnail"
                @click="selectImage(imageUrl)">
        </div>
        </div>
        <div class="course-info">
            <h1>{{productInfo.title}}</h1>
            <div class="course-price">
                <div class="course-teacher">
                    <img :src="`src/assets/img/${teacher.src}`" class="img-teacher" alt="">
                <h2>{{ productInfo.teacher }}</h2>
                </div>
                <h2>{{productInfo.price}} | {{productInfo.course}}</h2>
            </div>
            <div class="course-content">
            <p>{{productInfo.description}}</p>
            </div>
            <div class="course-btn">
             <CourseSelected />
            </div>
        </div>
        </div>
    </div>
    {{ productInfo }}
</template>
<script>
import CourseSelected from './CourseSelected.vue';

export default {
    components: {
        CourseSelected
    },
    props: {
        productInfo: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            imageUrls: [
                'src/assets/img/banner_aboutus.jpg',
                'src/assets/img/index/indexcourse.png',
                'src/assets/img/banner_aboutus.jpg',

                // 其他圖片 URL
            ],
            selectedImageUrl: '', // 初始值為空字串
            teacher: {
                src: 'src/assets/img/banner_aboutus.jpg',
                name:'windy'
            },
    };
  },
  created() {
    // 在組件創建時,設置初始顯示的大圖片為第一張圖片
    this.selectedImageUrl = this.imageUrls[0];
  },
    methods: {
        selectImage(imageUrl) {
            this.selectedImageUrl = imageUrl;
        },
    },
};
</script>

<style lang="scss" scoped>
.section-coursedetail{
    .container {
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 80px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: row
    }
    .image-preview {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3%;
    .large-image {
        margin-bottom: 20px;
    }
    .large-image img {
        width: 100%;
        height: auto;
    }
    @media screen and (max-width: 768px) {
        .large-image {
        width: 100%;
    }}
    .thumbnail-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        .thumbnail {
        max-width: 130px;
        margin: 5px;
        cursor: pointer;
    }
    @media screen and (max-width: 768px) {
    .thumbnail {
        max-width: 30%;
    }
    }
     }
    }
    .course-info{
        padding:3% 0;
        .course-price{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
                            padding-bottom: .6rem;  
            .course-teacher{
                display: flex;
                align-items:center;
                gap: 1rem;               
                .img-teacher{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                img{
                    width: 100%;
                }
                }
            }
        }
        .course-content{
            padding: 5%;
            background-color: #ff8a8a;
            border-radius: 10px;
        }
        .course-btn{
            padding-top: 1rem;            

        }
    }
    @media screen and (max-width: 768px) {
        .course-info{
        padding:0 3%;
    }
    }
    @media screen and (max-width: 768px) {
    .container {
        display: flex;
        flex-direction:column;
    }
    
}
}




</style>