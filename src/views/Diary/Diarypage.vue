<template>
  <Banner :title="'健身日記'" />
  <div class="section section-author">
    <p>{{ abc.id }}</p>
  </div>
  <div class="section section-article"></div>
</template>

<script>
import Banner from "@/component/Banner.vue";
export default {
  props: {
    abc: {
      type: Object,
      required: true,
    },
  },
  components: {
    Banner,
  },
  data() {
    return {
      diaryList: [],
    };
  },
  methods: {
    fetchDiarylist() {
      fetch(`${import.meta.env.BASE_URL}json/diarylist.json`)
        .then((res) => res.json())
        .then((json) => {
          //確認有沒有response
          console.log(json);
          //顯示用
          this.diaryList = json;
        });
    },
  },
  watch: {
    "$route.params.id": {
      handler(newObj) {
        console.log(newObj);
        this.fetchDiarylist();
      },
      deep: true,
    },
  },
  mounted() {
    this.fetchDiarylist();
  },
};
</script>

<style lang="scss" scoped>
p {
  width: 500px;
  background-color: #ff0000;
}
</style>
