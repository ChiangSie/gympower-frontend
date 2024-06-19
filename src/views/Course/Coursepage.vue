<template>
  <div id="app">
    <CourseDetail :productInfo="productInfo" />
    <CourseList :imageUrls="imageUrls" />
    <CourseRating :ratingPosts="ratingPosts" />
    <hr>
  </div>
</template>

<script>
import CourseDetail from '@/component/Course/CourseDetail.vue';
import CourseList from '@/component/Course/CourseList.vue';
import CourseRating from '@/component/Course/CourseRating.vue';

export default {
  components: {
    CourseDetail,
    CourseList,
    CourseRating
  },
  data() {
    return {
      productInfo: {},
        ratingPosts: [],
      imageUrls: [],
    };
  },
    methods: {
    fetchRating() {
      fetch(`${import.meta.env.BASE_URL}json/c_member.json`)
        .then(res => res.json())
        .then(json => {
          console.log(json);
          this.ratingPosts = json;
        })
        .catch((error) => {
          console.log(`error: ${error}`);
        });
    },
    fetchProduct() {
      fetch(`${import.meta.env.BASE_URL}json/course.json`)
        .then(res => res.json())
        .then(json => {
          console.log(json);
          this.imageUrls = json;
          const sortedData = json.sort((a, b) => b.rating - a.rating);
          this.imageUrls = sortedData;
        });
    },
    fetchInfo() {
      fetch(`${import.meta.env.BASE_URL}json/course.json`)
        .then(res => res.json())
        .then(json => {
          // 確認有沒有response
          this.productInfo = json.find(item => {
            return item.id == this.$route.params.id;
          });
        })
        .catch((error) => {
          console.log(`error: ${error}`);
        });
    }
  },
  watch: {
    '$route.params.id': {
      handler(newObj) {
        console.log(newObj);
        this.fetchInfo();
      },
      deep: true
    }
  },
  mounted() {
    this.fetchInfo();
    this.fetchProduct();
    this.fetchRating();
  }
};
</script>

<style lang="scss" scoped></style>