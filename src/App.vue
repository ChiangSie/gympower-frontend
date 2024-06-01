<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->
<template>
  <MainHeader />
  <RouterView />
  <ProductList />
  <MainFooter />
</template>

<script>
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import MainHeader from '@/component/MainHeader.vue'
import MainFooter from '@/component/MainFooter.vue'

export default defineComponent({
  components: {
    RouterView,
    MainHeader,
    MainFooter
  }
})
</script>
