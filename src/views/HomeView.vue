<template>
  <!-- 首頁 Banner -->

  <!-- 首頁banner 暫時註解一下 -->
  <!-- <section class="section section-banner">
    <div class="container container-banner">
      <div class="row">
        <div class="banner col-12 col-md-12 col-lg-12 col-xl-12">
          <div class="banner-txt">
            <h2>
              CHALLENGE<br />
              <span class="en">
                YOUR<br />
                LIMITS
              </span>
            </h2>
            <span class="zh">
              <p>挑戰極限</p>
              <p>加入我們,開啟您的專業健身之旅</p>
            </span>
            <button class="join">
              <p>加入GYM力</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  <!-- <div class="navbar">
        <div class="logo">
            <a href="#"><img src="../assets/img/small logo.png" alt=""></a>
        </div>
        <ul>
            <li><a href="#">關於我們</a></li>
            <li><a href="#">最新消息</a></li>
            <li><a href="#">健身日記</a></li>
            <li><a href="#">課程資訊</a></li>
            <li><a href="#">美味食堂</a></li>
            <li><a href="#">教練介紹</a></li>
        </ul>
        <div class="cta-container">
            <a href="#" class="cta">購物車</a>
            <a href="#" class="cta">登入</a>
        </div>
        <div class="menu-toggle">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div> -->
  <!-- <header class="header">
        <h2>CHALLENGE <br>
            YOUR<br> 
            LIMIT<br>
          </h2> -->
  <!-- <img src="../assets/img/shaking.jpg" alt=""> -->
  <!-- <p>挑戰你的極限。</p>
    </header> -->
  <!-- <section class="content">
        <h2>一起獲得健康與美味的雙重享受!</h2>
        <p>無論你是健身新手還是經驗豐富的健身愛好者，我們的專業教練團隊將為您量身定制專屬健身計劃，幫助你達到最佳狀態，並且提供每日新鮮的健康餐盒，讓你在健身的同時享受美味、營養均衡的餐食。告別高熱量便當，每一餐都是最健康的選擇！加入課程即可抽取優惠券，享受更多驚喜折扣和福利。每次參加課程都是一次贏得優惠的機會，讓你的健身之旅充滿期待!</p>
        <a href="#" class="cta">加入GYM力</a>
    </section> -->

  <HomeBanner />

  <HomeJoin />

  <HomeClass />

  <HomeBento />

  <HomeCoach />

  <HomeFeedback />

  <HomeCoupon />
  <GoogleLogin />
</template>

<script setup>
import HomeBanner from "@/views/Home/HomeBanner.vue";
import HomeJoin from "@/views/Home/HomeJoin.vue";
import HomeClass from "@/views/Home/HomeClass.vue";
import HomeBento from "@/views/Home/HomeBento.vue";
import HomeCoach from "@/views/Home/HomeCoach.vue";
import HomeFeedback from "@/views/Home/HomeFeedback.vue";
import HomeCoupon from "@/views/Home/HomeCoupon.vue";
import GoogleLogin from "@/views/Home/GoogleLogin.vue";
</script>
<script>
export default {
  components: {
    HomeBanner,
    HomeJoin,
    HomeClass,
    HomeBento,
    HomeCoach,
    HomeFeedback,
    HomeCoupon,
    GoogleLogin,
  },
  data() {
    return {
      cardlist: [
        {
          id: 1,
          imgSrc: "https://picsum.photos/300/200/?random=10",
          title: "title",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!",
        },
        {
          id: 2,
          imgSrc: "https://picsum.photos/300/200/?random=10",
          title: "2title",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!",
        },
        {
          id: 3,
          imgSrc: "https://picsum.photos/300/200/?random=10",
          title: "3title",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!",
        },
        {
          id: 4,
          imgSrc: "https://picsum.photos/300/200/?random=10",
          title: "4title",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!",
        },
        {
          id: 5,
          imgSrc: "https://picsum.photos/300/200/?random=10",
          title: "5title",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!",
        },
        {
          id: 6,
          imgSrc: "https://picsum.photos/300/200/?random=10",
          title: "6title",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!",
        },
        {
          id: 7,
          imgSrc: "https://picsum.photos/300/200/?random=10",
          title: "7title",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!",
        },
        {
          id: 8,
          imgSrc: "https://picsum.photos/300/200/?random=10",
          title: "8title",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!",
        },
      ],
    };
  },
  mounted() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (menuToggle && navbar) {
      menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
      });

      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    } else {
      console.error("menu-toggle or navbar elements not found");
    }
  },
};
</script>

<!-- lang="sass" -->
<style lang="scss">
// 這個不用加 scoped 不然會吃不到
.decorate-txt {
  -webkit-text-stroke: 0.8px #7e7e7e;
  color: #f9f8f7;
  display: flex;
  font-size: clamp(60px, 6.25vw, 80px);
  letter-spacing: 0;
  font-weight: bold;
  justify-content: flex-start;
  margin-left: 5%;
}

.flex-end {
  justify-content: flex-end;
  margin-right: 5%;
}
</style>
<style lang="scss" scoped>
// test
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  color: #333;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  position: fixed;
  width: 100%;
  z-index: 2;
  background: none;
  transition: background-color 0.3s;
}

.navbar.scrolled {
  background-color: rgba(255, 255, 255, 0.8);
}

.navbar ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar ul li {
  margin-left: 20px;
}

.navbar ul li a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: color 0.3s;
}

.navbar.scrolled ul li a {
  color: #333;
}

.navbar .cta {
  background-color: #002451;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-left: 10px;
  transition: background-color 0.3s, color 0.3s;
}

.navbar .cta-container {
  display: flex;
  align-items: center;
}

.navbar .cta-container .cta:hover {
  background-color: #fff;
  color: #002451;
  border: 3px solid #002451;
}

.header {
  text-align: center;
  padding: 120px 20px 80px;
  position: relative;
  background: url("img/shaking.jpg") no-repeat center center;
  background-size: cover;
  color: #fff;
  width: 100%;
  height: 100vh;
}

.header h2 {
  font-size: 4em;
  margin: 50px 0;
}

.header p {
  font-size: 1.2em;
  margin-bottom: 40px;
}

.logo img {
  width: 110px;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.menu-toggle div {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 4px 0;
}

@media (max-width: 768px) {
  .navbar ul {
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 60px;
    left: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .navbar ul li {
    margin: 10px 0;
    text-align: center;
  }

  .menu-toggle {
    display: flex;
    margin-left: 10px;
  }

  .navbar .cta-container {
    margin-left: auto;
    margin-right: 10px;
  }

  .navbar.active ul {
    display: flex;
  }
}

// 首頁 BANNER
// 暫時註解一下
// .section-banner {
//   margin-top: 38.42px;

//   .container-banner {

//     max-width: unset;

//     .banner {
//       background-image: url('../assets/img/index-banner.png');
//       background-size: 100% 100%;
//       // border-radius: 10px;
//       .banner-txt {
//         margin: 30px 0 30px 20px;
//         background-color: rgba($color: #fff, $alpha: .6);
//         border-radius: 10px;
//         width: fit-content;
//         padding: 5% 5% 5% 2%;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         gap: 20px;
//         h2 {
//           font-size: clamp(20px, 3.125vw, 40px);
//           .en {
//             color: #fff;
//           }
//         }
//         .zh {
//           color: #273B4A
//         }
//       }
//       .join {
//         width: clamp(150px, 30%, 250px);
//         height: 30px;
//         border-radius: 10px;
//         border: none;
//         background-color: #002451;
//         p {
//           color: #fff;
//         }
//       }
//     }
//   }
// }
</style>
