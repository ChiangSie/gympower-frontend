<template>
    <div class="section section-coursedetail">
        <div class="container">
        <div class="image-preview">
            <div class="large-image">
                <img :src="selectedImageUrl" alt="Large Image Preview" />
            </div>
            <div class="thumbnail-list">
                <img v-for="(imageUrl, index) in imageUrls" :key="index" :src="imageUrl" alt="Thumbnail"
                    class="thumbnail" @click="selectImage(imageUrl)" />
            </div>
        </div>
        <div class="course-info">
            <h1>{{title}}</h1>
            <div class="course-price">
                <div class="course-teacher">
                    <img :src="teacher.src" class="img-teacher" alt="">
                <h2>{{ teacher.name }}</h2>
                </div>
                <h2>{{courses.price}} | {{courses.course}}</h2>
            </div>
            <div class="course-content">
            <p>{{content}}</p>
            </div>
            <div class="course-btn">
             <CourseSelected />
            </div>
        </div>
        </div>
    </div>
</template>
<script>
</script>

<script>
import CourseSelected from './CourseSelected.vue';

export default {
    components: {
        CourseSelected
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
            title:'週三有氧課程',
            teacher: {
                src: 'src/assets/img/banner_aboutus.jpg',
                name:'windy'
            },
            courses: {
                price: 'NT.3500',
                course:'六堂'
            },
            content:'帶領學員在高強度的燃脂動作和中低強度的恢復階段之間進行切換。這種間歇式訓練不僅能提高心肺功能，更能刺激人體代謝。',
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