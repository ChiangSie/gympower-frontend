<script setup></script>

<template>
      <section class="section section-coach">
    <div class="container container-coach">
      <h2 class="decorate-txt">OUR COACH</h2>
      <h2>教練介紹</h2>
      <div class="row">
        <div class=" col col-12 col-md-6 col-lg-6 col-xl-6">
          <div class="pic">
            <img src="../assets/img/index/Ellipse 16.png">
          </div>
        </div>
        <div class=" col col-12 col-md-6 col-lg-6 col-xl-6">

          <div class="txt">
            <h3>李俊輝 </h3>
            <p>曾在多家頂尖健身房擔任首席教練，指導過200多位客戶，幫助他們實現顯著的身體改變。</p>
            <ul>
              專業領域 :
              <li>有氧運動與耐力訓練</li>
              <li>核心訓練與穩定性提升</li>
            </ul>
            <button>閱讀更多</button>
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
    h2 {
      font-weight: bold;
      text-align: center;
    }

    .row {
      margin: auto;
      justify-content: center;
      align-items: center;
      background: linear-gradient(62deg, #F0EEE9, #D4EAF7);
      border-radius: 550px 550px 0 0;
      padding: 30px 0;



      .col {

        >.pic {
          margin: auto;
          // justify-self: end;
          width: 60%;
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
          width: 40%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;

          button {
            width: 100px;
            height: 40px;
            border-radius: 10px;
            background-color: #002451;
            color: #fff;
            border: none;
          }

          h3 {
            font-weight: bold;
          }
        }
      }
    }
  }
}

@media screen and (max-width:768px) {
  .section-coach {
    .container-coach {
      .row {
        .col {
          padding: 10px;

          .txt {
            margin: auto;
            width: 60%;

            button {
              align-self: flex-end;
            }
          }
        }
      }
    }
  }
}
</style>