<template>
  <header :class="$route.name">
    <nav>
      <RouterLink to="/" @click="closeNav">
        <picture>
          <img src="../assets/img/logo.svg" />
        </picture>
      </RouterLink>

      <div class="link header-link">
        <div class="none">
          <RouterLink to="/about" @click="closeNav">關於我們</RouterLink>
          <RouterLink to="/news" @click="closeNav">最新消息</RouterLink>
          <RouterLink to="/diary" @click="closeNav">健身日記</RouterLink>
          <RouterLink to="/course" @click="closeNav">課程資訊</RouterLink>
          <RouterLink to="/bento" @click="closeNav">美味食堂</RouterLink>
          <RouterLink to="/coach" @click="closeNav">教練介紹</RouterLink>
        </div>
        <div class="d-nav">
          <RouterLink to="/about">關於我們</RouterLink>
          <RouterLink to="/news">最新消息</RouterLink>
          <RouterLink to="/diary">健身日記</RouterLink>
          <RouterLink to="/course">課程資訊</RouterLink>
          <RouterLink to="/bento">美味食堂</RouterLink>
          <RouterLink to="/coach">教練介紹</RouterLink>
        </div>

        <RouterLink to="/login" @click="closeNav">
          <span class="material-symbols-outlined"> person </span>
        </RouterLink>
        <RouterLink to="/asidecart" @click="closeNav">
          <span class="material-symbols-outlined"> shopping_cart </span>
        </RouterLink>
        <div class="hb" id="hb" @click="showNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    showNav() {
      const none = document.querySelector(".none");
      if (none.style.opacity == 0) {
        none.style.pointerEvents = "auto";
        none.style.opacity = "1";
      } else {
        none.style.pointerEvents = "none";
        none.style.opacity = "0";
      }
    },
    closeNav() {
      const none = document.querySelector(".none");
      none.style.pointerEvents = "none";
      none.style.opacity = "0";
    },
  },
};
</script>
