<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="M3" />

      <nav>

        <RouterLink to="/Aboutus">關於我們</RouterLink>
        <RouterLink to="/News">最新活動</RouterLink>
        <RouterLink to="/Diary">健身日記</RouterLink>
        <RouterLink to="/Course">課程資訊</RouterLink>
        <RouterLink to="/Bento">美味食堂</RouterLink>
        <RouterLink to="/Coach">教練介紹</RouterLink>
        <RouterLink to="/Login">會員登入</RouterLink>
      </nav>
    </div>
  </header>


  <RouterView />
</template>

<script>
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Aboutus from '@/views/Aboutus.vue'
import News from '@/views/News.vue'
import Diary from '@/views/Diary.vue'
import Course from '@/views/Course.vue'
import Bento from '@/views/Bento.vue'
import Coach from '@/views/Coach.vue'
import Login from '@/views/Login.vue'

export default defineComponent({
  components: {
    Aboutus,
    News,
    Diary,
    Course,
    Bento,
    Coach,
    Login
  }
})
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
