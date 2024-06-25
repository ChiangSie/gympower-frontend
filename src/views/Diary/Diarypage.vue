<template>
  <Banner :title="'健身日記'" />
  <div class="section section-author">
    {{ diaryContent.id }}
  </div>
  <div class="section section-article"></div>
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
};
</script>

<style lang="scss" scoped>
p {
  width: 500px;
  background-color: #ff0000;
}
</style>
