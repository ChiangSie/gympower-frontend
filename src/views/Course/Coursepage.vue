<template>
  <div id="app">
    <CourseDetail :productInfo="productInfo" :imageUrls="imageUrls"/>
    <CourseList :imageUrls="imageUrls" />
    <CourseRating :ratingPosts="ratingPosts" :productInfo="productInfo" />
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
        productInfo: [],
        ratingPosts: [],
        imageUrls: [],
    };
  },
    methods: {
      fetchRating() {
            let url = `${import.meta.env.VITE_PHP_URL}get_course_rating.php`;

   fetch(url)
  .then(res => res.json())
  .then(result => {
                if (result.code === 200) {
                    this.ratingPosts = result.data.list.map(item => ({
                        ...item,
                        ev_id: parseInt(item.ev_id)
                    }));
                } else {
                    console.error('API返回錯誤:', result.msg);
              }
                
            })
            .catch(error => {
                console.error('獲取數據時出錯:', error);
            });
    },
        fetchData() {
      let url = `${import.meta.env.VITE_PHP_URL}get_course_con.php`;

      fetch(url)
        .then(res => res.json())
        .then(result => {
          if (result.code === 200) {
            const data = result.data.list.map(item => ({
              ...item,
              c_id: parseInt(item.c_id)
            }));
            
            this.imageUrls = data.sort((a, b) => b.c_rating - a.c_rating).slice(0, 9);

            // 根據路由參數設置特定產品信息
            this.productInfo = data.find(item => item.c_id == this.$route.params.id);

            if (!this.productInfo) {
              console.log(`Product with ID ${this.$route.params.id} not found.`);
            }
          } else {
            console.error('API返回錯誤:', result.msg);
          }
        })
        .catch(error => {
          console.error('獲取數據時出錯:', error);
        });
    }
  },
  watch: {
    '$route.params.id': {
      handler() {
        this.fetchData();
      },
      immediate: true
    }
  },
  mounted() {
    this.fetchRating();
    this.fetchData();
  }
};
</script>