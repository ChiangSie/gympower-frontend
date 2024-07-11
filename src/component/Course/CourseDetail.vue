<template>
  <div class="section section-coursedetail">
    <div class="container">
      <div class="image-preview">
        <div class="large-image">
          <img :src="getImageUrl(currentMainImage)" alt="Large Image Preview" />
        </div>
        <div class="thumbnail-list">
          <img
            v-for="(coverImage, index) in matchingImages"
            :key="index"
            :src="getImageUrl(coverImage)"
            :alt="`Thumbnail ${index + 1}`"
            class="thumbnail"
            @click="selectImage(coverImage)"
          />
        </div>
      </div>
      <div class="course-info">
        <h1>{{productInfo.c_name}}</h1>
        <div class="course-price">
          <div class="course-teacher">
            <img :src="getImageUrl(productInfo.coach_img)" class="img-teacher" alt="Teacher Image">
            <h2>{{ productInfo.coach_name }}</h2>
          </div>
          <h2>NT.{{productInfo.c_price}} | {{productInfo.c_course}}堂</h2>
        </div>
        <div class="course-content">
          <p>{{productInfo.c_content}}</p>
        </div>
        <div class="course-btn">
          <CourseSelected :productInfo="productInfo"/>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import CourseSelected from '@/component/Course/CourseSelected.vue';

export default {
  components: {
    CourseSelected
  },
  props: {
    productInfo: {
      type: Object,
      required: true
    },
    imageUrls: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      matchingImages: [],
      currentMainImage: ''
    };
  },
  watch: {
    productInfo: {
      handler(newVal) {
        this.findMatchingImages();
        this.currentMainImage = newVal.c_img;
      },
      deep: true
    }
  },
  created() {
    this.findMatchingImages();
    this.currentMainImage = this.productInfo.c_img;
  },
  methods: {
    selectImage(imageUrl) {
      this.currentMainImage = imageUrl;
    },
    getImageUrl(imageUrl) {
      if (!imageUrl) return ''; // 處理 imageUrl 可能為 undefined 的情況
      return new URL(`/src/assets/img/course/${imageUrl}`, import.meta.url).href;
    },
    findMatchingImages() {
      this.matchingImages = this.imageUrls
        .filter(course => 
          course.c_name === this.productInfo.c_name && 
          course.coach_name === this.productInfo.coach_name
        )
        .map(course => course.c_cover)
        .filter((img, index, self) => self.indexOf(img) === index) // 去重
        .slice(0, 3); // 只取前三張

      // 確保主圖片在匹配圖片中
      if (!this.matchingImages.includes(this.productInfo.c_img)) {
        this.matchingImages.unshift(this.productInfo.c_img);
        if (this.matchingImages.length > 3) {
          this.matchingImages.pop();
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.section-coursedetail{
    .container {
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 2.5rem;
        margin-bottom: .5rem;
        display: flex;
        flex-direction: row
    }
    .image-preview {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3%;
        width: 100%;
    .large-image {
        margin-bottom: 20px;
        width: 100%;
    }
    .large-image img {
        width: 100%;
        height: auto;
        aspect-ratio: 2 / 1.5;
        object-fit: cover;
                border-radius: 10px;

    }
    @media screen and (max-width: 768px) {
        .large-image {
        width: 100%;
    }}
    .thumbnail-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        img{
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
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
        width: 100%;
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
            background-color: #D4EAF7;
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