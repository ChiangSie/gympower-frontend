<template>
  <!-- 首頁 Banner -->
  <section class="section section-banner">
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
  </section>
  <!-- 下面的 code 可以用在商品列表或是日記列表。 -->
  <!-- <section class="newClass">

    <div class="container">
      <div class="row">
      
        <div class="col-12 col-md-6 col-lg-4 col-xl-3" v-for="card in cardlist" :key="card.id">
          <div class="card">
            <div class="pic">
              <img :src="card.imgSrc" />
            </div>
            <div class="txt">
              <h3>{{ card.title }}</h3>
              <p>{{ card.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  <!-- 課程資訊 -->
  <section class="section section-classinfo">
    <div class="container container-classinfo">
      <h2 class="title">課程資訊</h2>
      <div class="row">
        <div class="col col-12 col-md-6 col-lg-6 col-xl-6">
          <div class="card">
            <div class="card-head">
              <h2>週三有氧課程</h2>
            </div>
            <div class="card-body">
              <div class="pic">
                <img src="https://picsum.photos/300/200/?random=10">
              </div>
              <div class="txt">
                <h3>
                  <div>Wendy老師</div><span>NT.3500|六堂</span>
                </h3>
              </div>
            </div>
            <div class="card-footer">
              <P class="content">帶領學員在高強度的燃脂動作和中低強度的恢復階段之間進行切換。這種間歇式訓練不僅能提高心肺功能,更能刺激人體代謝...</P>
              <button class="apply">立即報名</button>
            </div>
          </div>
        </div>
        <div class="col col-12 col-md-6 col-lg-6 col-xl-6">
          <div class="card">
            <div class="card-head">
              <h2>週三有氧課程</h2>
            </div>
            <div class="card-body">
              <div class="pic">
                <img src="https://picsum.photos/300/200/?random=10">
              </div>
              <div class="txt">
                <h3>
                  <div>Wendy老師</div><span>NT.3500|六堂</span>
                </h3>
              </div>
            </div>
            <div class="card-footer">
              <P class="content">帶領學員在高強度的燃脂動作和中低強度的恢復階段之間進行切換。這種間歇式訓練不僅能提高心肺功能,更能刺激人體代謝...</P>
              <button class="apply">立即報名</button>
            </div>
          </div>
        </div>
        <div class="more">了解更多</div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  data() {
    return {
      cardlist: [
        {
          id: 1,
          imgSrc: 'https://picsum.photos/300/200/?random=10',
          title: 'title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!'
        },
        {
          id: 2,
          imgSrc: 'https://picsum.photos/300/200/?random=10',
          title: '2title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!'
        },
        {
          id: 3,
          imgSrc: 'https://picsum.photos/300/200/?random=10',
          title: '3title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!'
        },
        {
          id: 4,
          imgSrc: 'https://picsum.photos/300/200/?random=10',
          title: '4title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!'
        },
        {
          id: 5,
          imgSrc: 'https://picsum.photos/300/200/?random=10',
          title: '5title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!'
        },
        {
          id: 6,
          imgSrc: 'https://picsum.photos/300/200/?random=10',
          title: '6title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!'
        },
        {
          id: 7,
          imgSrc: 'https://picsum.photos/300/200/?random=10',
          title: '7title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!'
        },
        {
          id: 8,
          imgSrc: 'https://picsum.photos/300/200/?random=10',
          title: '8title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!'
        }
      ]
    }
  }
}
</script>

<!-- lang="sass" -->
<style lang="scss" scoped>
.section-banner {
  .container-banner {
    .banner {
      background-image: url('../assets/img/index-banner.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      border-radius: 10px;

      picture {
        display: inline-flex;
        width: 100%;
        position: relative;

        img {
          object-fit: cover;
          width: 100%;
          vertical-align: top;
          aspect-ratio: 3/1;
          border-radius: 10px;
        }
      }

      .banner-txt {
        margin: 30px 0 30px 20px;
        background-color: rgba($color: #fff, $alpha: .6);
        border-radius: 10px;
        width: fit-content;
        padding: 5% 5% 5% 1%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;


        h2 {
          font-size: clamp(20px, 4vw, 40px);

          .en {
            color: #fff;
          }


        }

        .zh {
          color: #273B4A
        }
      }

      .join {
        width: clamp(150px, 30%, 250px);
        height: 30px;
        border-radius: 10px;
        border: none;
        background-color: #002451;

        p {
          color: #fff;
        }
      }
    }
  }
}

.container-classinfo {
  .title {
    text-align: center;
    margin-bottom: 60px;
    font-weight: bold;
  }

  .row {


    .card {
      margin-bottom: 30px;
      border: 1px solid #000;
      border-radius: 10px;

      .card-head {
        padding: 30px 20px 0 20px;
      }

      .card-body {
        padding: 0 20px;
      }

      h2 {
        margin-bottom: 15px;
        font-weight: bold;
      }

      .txt {
        h3 {
          font-weight: bold;
          display: flex;
          justify-content: space-around
        }
      }

      img {
        width: 100%;
        aspect-ratio: 3 / 1;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 15px;
      }

      h3 {
        margin-bottom: 15px;

      }

      .card-footer {
        border-radius: 0 0 10px 10px;
        width: 100%;
        padding: 20px 20px;
        background-color: #eee;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 20px;


        .content {
          width: 60%;
        }

        .apply {
          width: 10%;
          font-size: clamp(16px, 2.18vw, 28px);
          padding: 10px;
          text-align: center;
          width: 25%;
          border: 1px solid #000;
          border-radius: 10px;
          width: fit-content;
        }

      }
    }

    .more {
      width: 100px;
      height: 40px;
      background-color: #888;
      border-radius: 10px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      margin-left: auto;
      margin-right: 15px;
    }
  }
}
</style>
