<template>
  <Banner :title="'健身日記'" />
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
        <div class="col-6 col-md-6 col-lg-6 col-xl-6">
          <div class="content">
            <p>
              {{ diaryContent.text }}
            </p>
          </div>
        </div>
        <div class="col-6 col-md-6 col-lg-6 col-xl-6">
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
  .author {
    margin: 5px 0;
    font-weight: bold;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    margin: 10px 10px;
  }
  .line {
    border-bottom: 1px solid #000;
    margin: 10px 0;
  }
  .row {
    .pic {
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
  }
}
</style>
