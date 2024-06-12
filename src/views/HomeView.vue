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
      <!-- 背景裝飾字 -->
      <h2 class="decorate-txt">COURSES</h2>
      <h2 class="title">課程資訊</h2>
      <div class="row">
        <div class="col col-12 col-md-6 col-lg-6 col-xl-6">
          <div class="card">
            <div class="card-head">
              <h2>週三有氧課程</h2>
            </div>
            <div class="card-body">
              <div class="pic">
                <img src="../assets/img/index/indexcourse.png">
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
                <img src="../assets/img/index/indexcourse.png">
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
  <!-- 餐點 -->
  <section class="section section-bento">
    <div class="container container-bento">
      <h2 class="decorate-txt flex-end">BENTO</h2>
      <h2 class="title">客製化專屬於你的餐盒</h2>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-6 col-xl-6">
          <div class="left">
            <div class="customized">
              <h3>客製餐盒</h3>
              <p>會員專屬客製化餐盒，為你的健康而設計。依據你的運動目標和營養需求精心搭配， 無論是增肌、減脂，還是保持健康體型，我們的餐點都能助你達成健身目標。健康從飲食開始，讓我們陪伴你走向更強壯、更健康的未來。</p>
              <button>開始客製</button>
              <div class="pic-bento">
                <img src="../assets/img/pic-bento.png">
              </div>
            </div>

          </div>
        </div>
        <div class=" col-right col-12 col-md-12 col-lg-6 col-xl-6">
          <div class="right">
            <div class="choose">
              <div class="txt">
                <h4>選擇餐盒大小</h4>
                <p>
                  提供四格和五格兩種尺寸，靈活滿足你的營養需求
                </p>
              </div>
              <div class="pic">
                <img src="../assets/img/index/food1.png">
              </div>
            </div>
            <div class="choose">
              <div class="pic">
                <img src="../assets/img/index/food2.png">
              </div>
              <div class="txt">
                <h4>選擇喜愛菜色</h4>
                <p>
                  豐富多樣的菜色選擇，顛覆您對健康餐的味蕾想像
                </p>
              </div>
            </div>
            <div class="choose">
              <div class="txt">
                <h4>訂製營養熱量</h4>
                <p>
                  清晰標示食材的熱量與營養成分，精準符合您的營養所需
                </p>
              </div>
              <div class="pic">
                <img src="../assets/img/index/food3.png">
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 教練 -->
  <section class="section section-coach">
    <div class="container container-coach">
      <h2 class="decorate-txt">OUR COACH</h2>
      <div class="row">
        <h2>教練介紹</h2>
        <div class=" col col-12 col-md-12 col-lg-12 col-xl-12">
          <div class="pic">
            <img src="../assets/img/index/Ellipse 16.png">
          </div>
          <div class="txt">
            <h3>李俊輝 </h3>
            <p>曾在多家頂尖健身房擔任首席教練，指導過200多位客戶，幫助他們實現顯著的身體改變。</p>
            <ul>
              專業領域 :
              <li>有氧運動與耐力訓練</li>
              <li>核心訓練與穩定性提升</li>
            </ul>
          </div>

        </div>



      </div>
    </div>
  </section>
  <!-- 學員回饋 -->
  <section class="section section-feedback">
    <div class="container container-feedback">
      <h2 class="decorate-txt flex-end">FEEDBACK</h2>
    </div>
  </section>
  <!-- 扭蛋 -->
  <section class="section section-coupon">
    <div class="container container-coupon">
      <h2 class="decorate-txt ">COUPON</h2>
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
  };
}
}

</script>


<!-- lang="sass" -->
<style lang="scss" scoped>
// 背景裝飾文字
// *{
//   font-family: Noto Sans;
// }
.decorate-txt {
  -webkit-text-stroke: .8px #7E7E7E;
  color: #F9F8F7;
  display: flex;
  font-size: clamp(60px, 6.25vw, 80px);
  letter-spacing: 0;
  font-weight: bold;
  justify-content: flex-start;
}

.flex-end {
  justify-content: flex-end;
}

// 首頁 BANNER
.section-banner {
  margin-top: 38.42px;

  .container-banner {

    max-width: unset;

    .banner {
      background-image: url('../assets/img/index-banner.png');
      background-size: 100% 100%;
      // border-radius: 10px;
      .banner-txt {
        margin: 30px 0 30px 20px;
        background-color: rgba($color: #fff, $alpha: .6);
        border-radius: 10px;
        width: fit-content;
        padding: 5% 5% 5% 2%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        h2 {
          font-size: clamp(20px, 3.125vw, 40px);
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
// 課程資訊
.container-classinfo {

  .title {
    text-align: center;
    margin-bottom: 60px;
    font-weight: bold;
  }

  .title {
    text-align: center;
    margin-bottom: 60px;
    font-weight: bold;
  }

  .row {
    .card {
      margin-bottom: 30px;
      background-color: #fff;
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
          justify-content: space-between;
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
        background-color: #D4EAF7;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 20px;


        .content {
          width: 60%;
        }

        .apply {
          color: #fff;
          width: 10%;
          font-size: clamp(16px, 2.18vw, 28px);
          padding: 10px;
          text-align: center;
          width: 25%;
          background-color: #002451;
          border: none;
          border-radius: 10px;
          width: fit-content;
        }

      }
    }

    .more {
      width: 100px;
      height: 40px;
      background-color: #002451;
      border-radius: 10px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      margin-left: auto;
      margin-right: 15px;
    }
  }
}

// 客製餐點
.section-bento {
  .container-bento {
    max-width: 1100px;
    // display: flex;

    .title {
      font-weight: bold;
      text-align: center;
      margin-bottom: 60px;
    }

    .row {
      background-color: #fff;
      border-radius: 10px;
      padding: 2% 1%;
      align-items: center;
      flex-wrap: nowrap;
      justify-content: space-between;
      gap: 40px;

      .left {
        .customized {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;

          h3 {
            font-weight: bold;
          }

          button {
            line-height: 30px;
            width: clamp(100px, 30%, 150px);
            height: 50px;
            border: none;
            background: #002451;
            border-radius: 10px;
            color: #fff;
            font-size: clamp(16px, 1.5625vw, 20px);
          }

          .pic-bento {
            width: 100%;
            text-align: center;
            background-color: #D4EAF7;
            border-radius: 10px;
            // margin-left: -30px;

            img {
              vertical-align: middle;
            }
          }



        }
      }

      .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: clamp(70px, 3.125vw, 40px);


        .choose {
          display: flex;
          align-items: center;
          gap: 5%;
          // justify-content: space-around;

          // justify-content: flex-end;

          .txt {
            h4 {
              font-weight: bold;
            }
          }

          .pic {
            flex-shrink: 0;
            width: 30%;
            border-radius: 50%;
            overflow: hidden;


            img {
              display: block;
              aspect-ratio: 1 / 1;
              width: 100%;
            }
          }
        }
      }
    }

  }
}

// 客製餐點 RWD
@media screen and (max-width:850px) {
  .section-bento {
    .container-bento {
      .row {
        gap: 40px;
        flex-wrap: wrap;
      }

    }
  }
}

.section-coach {
  .container-coach {
    .row {
      justify-content: center;
      background: linear-gradient(62deg, #F0EEE9, #D4EAF7);
      border-radius: 550px 550px 0 0;
      padding: 30px 0;

      h2 {
        font-weight: bold;
      }

      .col {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 60px;

        .pic {
          width: 30%;
          // height: 450px;
          border-radius: 50%;
          overflow: hidden;


          img {
            aspect-ratio: 1/1;
            width: 100%;
            display: block;
          }
        }

        .txt {
          width: 20%;
          display: flex;
          flex-direction: column;
          gap: 20px;

          h3 {
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
