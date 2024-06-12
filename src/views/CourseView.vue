<template>
  <Banner :title="'課程資訊'" :imgSrc="'src/assets/img/banner_aboutus.jpg'" />

  <div class="section section-course">
    <div class="container">
      <div class="section section-sort">
        <div class="btn-sort">
          <button @click="clear">
            <h3>全部課程</h3>
          </button>
          <button @click="filter(1)">
            <h3>有氧課程</h3>
          </button>
          <button @click="filter(2)">
            <h3>重訓課程</h3>
          </button>
          <button @click="filter(3)">
            <h3>瑜珈課程</h3>
          </button>
        </div>
      </div>

      <div class="section section-classinfo">
        <div class="container">
          <div class="displayList" v-if="displayList.length === 0">
            <h3 class="txt">目前未開課</h3>
          </div>
          <div v-else>
            <Classinfo v-for="course in displayList" :key="course.id" :cardData="course" />
            <div class="page"><a href="" v-for="n in 5">{{ n }}</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Banner from '../component/Banner.vue';
import Classinfo from '../component/Classinfo.vue';
</script>

<script>

export default {
  components: {
    Banner,
    Classinfo,
  },
  data() {
    return {
      courses: [
        {
          id: 1,
          title: '週三有氧課程',
          imgSrc: 'src/assets/img/index/indexcourse.png',
          teacher: 'Wendy老師',
          price: 'NT.3500|六堂',
          description: '帶領學員在高強度的燃脂動作和中低強度的恢復階段之間進行切換。這種間歇式訓練不僅能提高心肺功能,更能刺激人體代謝',
          sort: '有氧課程',
          type: 1
        },
        {
          id: 2,
          title: '週五重訓課程',
          imgSrc: 'src/assets/img/index/indexcourse.png',
          teacher: 'John老師',
          price: 'NT.4000|八堂',
          description: '重訓課程旨在提高肌肉力量和耐力,通過使用啞鈴、杠鈴和機器等器材進行訓練',
          sort: '重訓課程',
          type: 2
        },
        {
          id: 3,
          title: '週日重訓課程',
          imgSrc: 'src/assets/img/index/indexcourse.png',
          teacher: 'John老師',
          price: 'NT.4000|八堂',
          description: '重訓課程旨在提高肌肉力量和耐力,通過使用啞鈴、杠鈴和機器等器材進行訓練',
          sort: '重訓課程',
          type: 2
        }
        // 添加其他課程數據...
      ],
      displayList: [],
    }
  },
  mounted() {
    this.clear();
  },
  methods: {
    clear() {
      this.displayList = this.courses
    },
    parseImg(file) {
      return new URL(`../assets/img/${file}`, import.meta.url).href
    },
    filter(type) {
      this.displayList = this.courses.filter(course => {
        return course.type === type;
      })
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
}

.section-course {
  .section-sort {
    width: 20%;
    position: -webkit-sticky;
    position: sticky;
    top: 100px;
    height: 60vh;
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
  @media screen and (max-width: 768px) {
      .btn-sort h3{
        font-size: 16px;
        white-space: wrap;
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
}
</style>
