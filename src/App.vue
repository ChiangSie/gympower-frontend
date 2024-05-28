<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <header>
    <nav>
      <RouterLink to="/Aboutus">關於我們</RouterLink>
      <!-- <RouterLink to="/News">最新活動</RouterLink>
        <RouterLink to="/Diary">健身日記</RouterLink>
        <RouterLink to="/Course">課程資訊</RouterLink>
        <RouterLink to="/Bento">美味食堂</RouterLink>
        <RouterLink to="/Coach">教練介紹</RouterLink>
        <RouterLink to="/Login">會員登入</RouterLink> -->
    </nav>
  </header>


  <RouterView />
</template>

<script>
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
// import Aboutus from '@/views/Aboutus.vue'
// import News from '@/views/News.vue'
// import Diary from '@/views/Diary.vue'
// import Course from '@/views/Course.vue'
// import Bento from '@/views/Bento.vue'
// import Coach from '@/views/Coach.vue'
// import Login from '@/views/Login.vue'

export default defineComponent({
  components: {
    RouterLink,
    RouterView
    // Aboutus,
    // News,
    // Diary,
    // Course,
    // Bento,
    // Coach,
    // Login
    // 哈
  }
})
</script>
