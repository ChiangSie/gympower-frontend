<template>
  <EmptyCart />
  <CheckOutCart />
</template>

<script setup>
import EmptyCart from './Cart/CartPage_1/EmptyCart.vue'
import CheckOutCart from './Cart/CartPage_2/CheckOutCart.vue'
</script>

<style lang="scss" scoped>
.course {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 3% 12%;
  position: relative;

  .banner_course_img {
    width: 70%;
    aspect-ratio: 2.5/1;

    img {
      width: 100%;
      aspect-ratio: 2/1;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }

  h1 {
    transform: translate(0, -50%);
    position: absolute;
    top: 50%;
    left: 20%;
  }
}
</style>