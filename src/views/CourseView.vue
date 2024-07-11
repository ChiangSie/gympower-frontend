<template>
  <Banner />

  <div class="section section-course">
    <!-- Dropdown for smaller screens -->
    <div v-if="isMobile" class="mobile-dropdown-wrapper">
      <select v-model="selectedOption" @change="handleSelectChange" class="mobile-dropdown">
        <option value="all">全部課程</option>
        <option value="有氧">有氧課程</option>
        <option value="伸展">伸展課程</option>
        <option value="瑜珈">瑜珈課程</option>
        <option value="皮拉提斯">皮拉提斯</option>
        <option value="綜合">綜合課程</option>
        <option value="重訓">重訓課程</option>
      </select>
    </div>
    
    <div class="container">
      <!-- Buttons for larger screens -->
      <div class="section-sort" v-if="!isMobile">
        <div class="btn-sort">
          <button @click="clear">
            <h3>全部課程</h3>
          </button>
          <button @click="filter('有氧')">
            <h3>有氧課程</h3>
          </button>
          <button @click="filter('伸展')">
            <h3>伸展課程</h3>
          </button>
          <button @click="filter('瑜珈')">
            <h3>瑜珈課程</h3>
          </button>
          <button @click="filter('皮拉提斯')">
            <h3>皮拉提斯</h3>
          </button>
          <button @click="filter('綜合')">
            <h3>綜合課程</h3>
          </button>
          <button @click="filter('重訓')">
            <h3>重訓課程</h3>
          </button>
        </div>
      </div>

      <div class="section section-classinfo">
        <div class="container">
          <div class="displayList" v-if="displayList.length === 0">
            <h3 class="txt">目前未開課</h3>
          </div>
          <div v-else>
            <Classinfo v-for="course in paginatedPosts" :key="course.id" :cardData="course" />

            <div class="page">
              <a href="#" v-for="n in totalPages" :key="n" @click.prevent="currentPage = n"
                :class="{ 'active-page': currentPage === n }">{{ n }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Classinfo from '@/component/Classinfo.vue';
import Banner from './Course/CourseBanner.vue';

export default {
  components: {
    Banner,
    Classinfo,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 3,
      courses: [],
      displayList: [],
      selectedOption: 'all',
      isMobile: false,
    }
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
    this.clear();
    this.fetchProduct();
     
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    fetchProduct() {
        let url = `${import.meta.env.VITE_PHP_URL}get_course_con.php`;
fetch(url)
    .then(response => response.json())
    .then(result => {
        if (result.code === 200) {
            // 使用 Map 去重， c_star 和 c_name 相同的组合(以時間篩選)
            const uniqueCoursesMap = new Map();
            result.data.list.forEach(item => {
                const processedItem = { ...item, c_id: parseInt(item.c_id) };
                const key = `${item.c_star}-${item.c_name}-${item.coach_id}`; //  c_star 和 c_name 相同的组合
                if (!uniqueCoursesMap.has(key)) {
                    uniqueCoursesMap.set(key, processedItem);
                }
            });

            const uniqueCourses = Array.from(uniqueCoursesMap.values());

            // 更新 displayList 和 courses
            this.displayList = uniqueCourses;
            this.courses = uniqueCourses;
        } else {
            console.error('API返回錯誤:', result.msg);
        }
    })
    .catch(error => {
        console.error('獲取數據時出錯:', error);
    });
    },
    clear() {
      this.displayList = this.courses;
      this.currentPage = 1;
    },
    parseImg(imgURL) {
      return new URL(`../../../assets/img/course/${imgURL}`, import.meta.url).href;
    },
    filter(type) {
      this.displayList = this.courses.filter(course => course.c_class === type);
      this.currentPage = 1;
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth < 768;
    },
    handleSelectChange() {
      if (this.selectedOption === 'all') {
        this.clear();
      } else {
        this.filter(this.selectedOption);
      }
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.displayList.length / this.itemsPerPage);
    },
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.displayList.slice(start, end);
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background-color: #F9F8F7;
  padding-top: 10px;

  .container {
    width: 100%;
    max-width: 1200px;
    padding-bottom: 1%;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .mobile-dropdown-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    padding: 0 10px;

    .mobile-dropdown {
      width: 100%;
      max-width: 400px;
      padding: 8px;
      font-size: 14px;
      border-radius: 5px;
      border: 1px solid #ccc;
      background: #fff;
    }
  }
}

.section-course {
  .section-sort {
    width: 20%;
    position: -webkit-sticky;
    position: sticky;
    top: 100px;
    height: 34rem;
    outline: 1px solid;
    border-radius: 10px;

    .btn-sort {
      padding-top: 10%;
      display: flex;
      flex-direction: column;

      button {
        border: none;
        background: none;
        padding: 10px 20px;
        color: #333;
        transition: all 0.3s ease;
        white-space: nowrap;
      }

      /* 按鈕選取後的樣式 */
      button:focus,
      button:active {
        outline: none;
        position: relative;
      }

      button:focus::before,
      button:active::before {
        content: "";
        position: absolute;
        left: 10%;
        /* 調整左側偏移量 */
        top: 50%;
        transform: translateY(-50%);
        width: 5px;
        height: 30px;
        background-color: #333;
        /* 調整box顏色 */
      }
    }
  }

  .section-classinfo {
    width: 80%;

    .container {
      flex-direction: column;

      .txt {
        display: inline-block;
        text-align: center;
        align-content: center;
        width: 100%;
        height: 200px;
        background-color: #fff;
        border-radius: 10px;
      }
    }

    .page {
      text-align: center;
      padding-bottom: 2rem;

      a {
        margin: 0 .3rem;
        padding: .3rem .5rem;
        background-color: #002451;
        color: #fff;
        border-radius: 50%;
        text-decoration: none;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .section-sort {
      display: none;
    }
  }
}
</style>
