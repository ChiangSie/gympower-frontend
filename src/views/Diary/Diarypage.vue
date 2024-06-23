<template>
  <Banner :title="'健身日記'" />
  <div class="section section-author"></div>
  <p>12</p>
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
    return {};
  },
};
</script>

<style lang="scss" scoped>
p {
  width: 500px;
  background-color: #ff0000;
}
</style>
