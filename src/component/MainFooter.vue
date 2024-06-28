<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          link: "/news",
          title: "最新消息"
        },
        {
          id: 2,
          link: "/about",
          title: "關於我們"
        },
        {
          id: 3,
          link: "/Homelightbox",
          title: "服務條款"
        },
        {
          id: 4,
          link: "/Homelightbox",
          title: "隱私權政策"
        },
      ]
    }
  },
}
</script>
<template>
  <footer>
    <div class="main">
      <div class="m-footer">
        <div class="social">
          <RouterLink to="/">
            <picture>
              <img src="../assets/img/logo.svg" />
            </picture>
          </RouterLink>
          <div class="socialmedia">
            <span><i class="fa-brands fa-twitter"></i></span>
            <span><i class="fa-brands fa-instagram"></i></span>
            <span><i class="fa-brands fa-facebook"></i></span>
          </div>
        </div>
        <ul>
          <li>服務電話 | 03- 21651118</li>
          <li>營業時間 | 9:00 - 21:00</li>
          <li>總部地址 | 320 桃園市中壢區復興路46號9樓</li>
        </ul>
      </div>
      <div class="link footer-link">
        <RouterLink v-for="link in links" :key="link.id" :to="link.link">{{ link.title }}</RouterLink>
      </div>
    </div>
    <div class="privacy">
      <p>
        本網站為緯育TibaMe_前端工程師班學員專題成果作品，本平台僅供學習、展示之用。
        若有抵觸有關著作權或有第三人主張侵害智慧財產權等情事，均由學員負法律上責任，緯育公司概不負責。若有侵權疑慮，您可以私訊緯育TiBaMe，後續會由專人協助處理。
      </p>
    </div>
  </footer>
</template>
