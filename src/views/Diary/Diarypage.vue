<template>
  <Banner  />
  <div class="section section-article">
    <div class="container">
      <div class="date">
        <p>
          {{ diaryContent.date }}
        </p>
      </div>
      <div class="author">
        <p>{{ diaryContent.author }}</p>
      </div>
      <div class="title">
        <div class="text">
          <p>{{ diaryContent.title }}</p>
        </div>
        <div class="movement">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <i class="fa-regular fa-heart"></i>
          <i class="fa-regular fa-thumbs-up"></i>
        </div>
      </div>
      <div class="line"></div>
      <div class="subtitle">
        <p>
          {{ diaryContent.subtitle }}
        </p>
      </div>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-6 col-xl-6">
          <div class="content">
            <p>
              {{ diaryContent.text }}
            </p>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-6 col-xl-6">
          <div class="pic">
            <img :src="parseImg(diaryContent.imgSrc)" alt="" />
          </div>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import Banner from "@/component/Banner.vue";
export default {
  name: "DiaryPage",
  // props: {
  //   diary: {
  //     type: Object,
  //     required: true,
  //   },
  // },
  components: {
    Banner,
  },
  data() {
    return {
      diaryContent: {},
    };
  },
  mounted() {
    fetch(`${import.meta.env.BASE_URL}json/diarylist.json`)
      .then((res) => res.json())
      .then((json) => {
        //確認有沒有response
        console.log(json);
        //顯示用
        this.diaryContent = json.find((item) => {
          return item.id == this.$route.params.id;
        });
      });
  },
  methods: {
    parseImg(imgURL) {
      return new URL(`../../assets/img/Diary/${imgURL}`, import.meta.url).href;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 900px;
  .date {
    font-size: 16px;
  }
  .author {
    margin: 5px 0;
    font-weight: bold;
    p {
      font-size: 20px;
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    P {
      font-size: 22px;
    }
    .text {
      font-weight: bold;
    }
    .movement {
      display: flex;
      gap: 10px;
    }
  }
  .subtitle {
    width: 50%;
    margin: 10px 0;
    p {
      font-size: 16px;
      font-weight: 600;
    }
  }
  .line {
    border-bottom: 1px solid #000;
    margin: 10px 0;
  }
  .row {
    align-items: center;
    .pic {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        // border-radius: 10px;
      }
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
@media screen and (max-width: 992px) {
  .container {
    .subtitle {
      width: 100%;
    }
    .row {
      .content {
        padding: 20px 0 30px 0;
      }
    }
  }
}
</style>
