<script setup>
import Banner from '@/views/News/NewsBanner.vue';
import HomeClass from '@/views/Home/HomeClass.vue'
// import NewsClass from './News/NewsClass.vue'
import NewsDiary from './News/NewsDiary.vue'
import HomeCoupon from '@/views/Home/HomeCoupon.vue';
</script>

<template>
  
  <Banner :title="'最新消息'" :imgSrc="'/src/assets/img/banner/banner_6.jpg'"/>
  <HomeClass/>
  <NewsDiary />
  <HomeCoupon />
</template>

<style scoped>

</style>