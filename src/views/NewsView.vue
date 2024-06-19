<script setup>
import Banner from '@/views/News/NewsBanner.vue';
import NewsClass from './News/NewsClass.vue'
import NewsDiary from './News/NewsDiary.vue'
import HomeCoupon from '@/views/Home/HomeCoupon.vue';
</script>

<template>
  
  <Banner :title="'最新消息'" :imgSrc="'src/assets/img/banner_aboutus.jpg'"/>
  <NewsClass />
  <NewsDiary />
  <HomeCoupon />
</template>

<style scoped>
body{

}
</style>