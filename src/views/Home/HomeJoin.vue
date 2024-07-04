<!-- <script setup></script>

<template>
  <section class="content">
    <h2>一起獲得健康與美味的雙重享受!</h2>
    <p>
      無論你是健身新手還是經驗豐富的健身愛好者，我們的專業教練團隊將為您量身定制專屬健身計劃，幫助你達到最佳狀態，並且提供每日新鮮的健康餐盒，讓你在健身的同時享受美味、營養均衡的餐食。告別高熱量便當，每一餐都是最健康的選擇！加入課程即可抽取優惠券，享受更多驚喜折扣和福利。每次參加課程都是一次贏得優惠的機會，讓你的健身之旅充滿期待!
    </p>

    <router-link to="/login">
      <button><span class="cta">加入GYM力</span></button>
    </router-link>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.content {
  padding: 40px 20px;
  text-align: center;
  background: #fff;
}

.content h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

.content p {
  font-size: 1em;
  margin-bottom: 40px;
}

button:hover {
  color: #aaa;
  scale: 1.2;
  transition: 0.5s;
}
button {
  cursor: pointer;
  color: #fff;
  font-size: clamp(14px, 2.18vw, 18px);
  padding: 8px 10px;
  text-align: center;
  width: 25%;
  background-color: #002451;
  border: none;
  border-radius: 10px;
  width: fit-content;
  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      color: #c0defa;
    }
  }
}
</style>

-->
<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  gsap.fromTo(
    '.cta-button',
    { scale: 1 },
    {
      scale: 1.2,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    }
  );
});
</script>

<template>
  <section class="content">
    <h2>一起獲得健康與美味的雙重享受!</h2>
    <p>
      無論你是健身新手還是經驗豐富的健身愛好者，我們的專業教練團隊將為您量身定制專屬健身計劃，幫助你達到最佳狀態，並且提供每日客製化新鮮餐盒，讓您在健身的同時享受美味和營養均衡的餐食。告別高熱量便當，每一餐都是最健康的選擇！加入課程即可抽取優惠券，享受更多驚喜折扣和福利。每次參加課程都是一次贏得優惠的機會，讓你的健身之旅充滿期待!
    </p>

    <router-link to="/login">
      <button class="cta-button"><span class="cta">加入GYM力</span></button>
    </router-link>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.content {
  padding: 40px 20px;
  text-align: center;
  background: #fff;

  h2 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  p {
    font-size: 1em;
    margin-bottom: 40px;
  }
}

button {
  cursor: pointer;
  color: #fff;
  font-size: clamp(14px, 2.18vw, 18px);
  padding: 8px 10px;
  text-align: center;
  width: 25%;
  background-color: #002451;
  border: none;
  border-radius: 10px;
  width: fit-content;
  transition: 0.5s;

  &:hover {
    color: #aaa;
    scale: 1.2;
  }

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #c0defa;
    }
  }
}

@media (max-width: 768px) {
  .content {
    h2 {
      font-size: 1.5em;
    }

    p {
      font-size: 0.875em;
      color: #646464;
    }
  }

  button {
    font-size: clamp(12px, 2vw, 16px);
  }
}
</style>


