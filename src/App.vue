<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <header>
    <nav>
      <RouterLink to="/AboutusView">關於我們</RouterLink>
      <RouterLink to="/NewsView">最新活動</RouterLink>
      <RouterLink to="/DiaryView">健身日記</RouterLink>
      <RouterLink to="/CourseView">課程資訊</RouterLink>
      <RouterLink to="/BentoView">美味食堂</RouterLink>
      <RouterLink to="/CoachView">教練介紹</RouterLink>
      <RouterLink to="/LoginView">會員登入</RouterLink>
    </nav>
  </header>


  <RouterView />
</template>

<script>
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
  components: {
    RouterLink,
    RouterView
  }
})
</script>
