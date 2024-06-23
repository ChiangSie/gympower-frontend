<script setup></script>

<template>
  <section class="section section-coach">
    <h2 class="decorate-txt">OUR COACH</h2>
    <div class="container container-coach">
      <h2 class="title">教練介紹</h2>
      <div class="row">
        <div class="col col-12 col-md-6 col-lg-6 col-xl-6">
          <div class="pic">
            <img src="../../assets/img/index/coachCard_6-removebg.png"/>
          </div>
        </div>
        <div class="col col-12 col-md-6 col-lg-6 col-xl-6">
          <div class="txt">
            <span>
              <h3>李恩智 教練</h3>
            </span>
            <p>曾在多家頂尖健身房擔任首席教練，指導過200多位客戶，幫助他們實現顯著的身體改變。</p>
            <ul>專業領域 :
                <li>◆ 有氧運動與耐力訓練</li>
                <li>◆ 核心訓練與穩定性提升</li>
                <li>◆ 幫助學員找回健康體態</li>
            </ul>
            <button><a href="#">閱讀更多</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.section-coach {
  .container-coach {
    .title {
      font-weight: bold;
      text-align: center;
      margin-bottom: 60px;
    }

    .row {
      margin: auto;
      justify-content: center;
      align-items: center;
      background: linear-gradient(62deg, #f0eee9, #d4eaf7);
      border-radius: 550px 550px 0 0;

      .col {
        > .pic {
          margin: auto;
          width: 60%;
          overflow: hidden;

          img {
            aspect-ratio: 1/1;
            width: 100%;
            display: block;
          }
        }

        .txt {
          width: 65%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
          display: blockS;
          h3{
            font-size: 24px;
            p{
              font-size: 18px;
            }
          }
          button:hover {
            transition: 0.5s;
            scale: 1.2;
          }
          button {
            cursor: pointer;
            width: 100px;
            height: 32px;
            border-radius: 10px;
            background-color: #002451;
            color: #fff;
            border: none;
            a{
              text-decoration: none;
              color: #fff;
              &:hover{
                color: #c0defa;
              }
            }
          }
          h3 {
            font-weight: bold;
          }
          p{
            font-size: 15px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .section-coach {
    .container-coach {
      .row {
        .col {
          padding: 10px;

          .txt {
            margin: auto;
            width: 60%;

            h3,
            ul {
              line-height: 1.5;
              text-align: center;
            }

            button {
              margin: auto;
            }
          }
        }
      }
    }
  }
}
</style>
