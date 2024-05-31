<script setup>
import Banner from '../component/About/AboutBanner.vue'
import Slogan from '../component/About/AboutSlogan.vue'
import Map from '../component/About/AboutMap.vue'
import Intro from '../component/About/AboutIntroduce.vue'
import Place from '../component/About/AboutPlace.vue'
</script>

<template>
  <Banner />

  <Slogan />

  <Map />

  <Intro />

  <Place />
</template>

<style lang="scss">
section {
  width: 100%;
  padding: 3% 12%;
}
</style>
