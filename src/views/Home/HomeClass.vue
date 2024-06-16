<script setup></script>
<template>
  <section class="section section-classinfo">
    <!-- 背景裝飾字 -->
    <h2 class="decorate-txt">COURSES</h2>
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
                <img src="../../assets/img/index/indexcourse.png">
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
                <img src="../../assets/img/index/indexcourse.png">
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

<script></script>

<style lang="scss" scoped>
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
</style>