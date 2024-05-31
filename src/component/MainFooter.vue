<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          link: "/diary",
          title: "常見問題"
        },
        {
          id: 2,
          link: "/course",
          title: "聯絡我們"
        },
        {
          id: 3,
          link: "/bento",
          title: "服務條款"
        },
        {
          id: 4,
          link: "/coach",
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
              <img src="https://picsum.photos/300/200/?random=10" />
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
