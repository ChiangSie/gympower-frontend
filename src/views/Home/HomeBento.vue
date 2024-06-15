<script setup></script>

<template>
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
              <button><a href="#">開始客製</a></button>
              <div class="pic-bento">
                <img src="../../assets/img/pic-bento.png">
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
                <img src="../../assets/img/index/food1.png">
              </div>
            </div>
            <div class="choose">
              <div class="pic">
                <img src="../../assets/img/index/food2.png">
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
                <img src="../../assets/img/index/food3.png">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
*{
  text-decoration: none;
}
// 背景裝飾文字
.decorate-txt {
  -webkit-text-stroke: .8px #7E7E7E;
  color: #F9F8F7;
  display: flex;
  font-size: clamp(60px, 6.25vw, 80px);
  letter-spacing: 0;
  font-weight: bold;
  justify-content: flex-start;
}
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
            font-size: clamp(16px, 1.5625vw, 20px);
            a{
              color: #fff;
            }
            &:hover a{
              color:#aaa;
            }
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
          gap: 5%;

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
.customized_btn{

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
</style>