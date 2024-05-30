<template>
  <section class="section section-banner">
    <div class="container container-banner">
      <div class="row">
        <div class="banner col-12 col-md-12 col-lg-12 col-xl-12">

          <div class="banner-txt">
            <h2>CHALLENGE<br>YOUR<br>LIMITS<br><span>挑戰極限<br>
                加入我們，開啟您的專業健身之旅</span></h2>
            <button class="join">
              <p>加入GYM力</p>
            </button>
          </div>

          <div class="slide-button">
            <button></button>
            <button></button>
            <button></button>
          </div>

        </div>
      </div>
    </div>
  </section>
  <section class="newClass">
    <div class="container">
      <div class="row">
        <!-- 用 v-for 改寫 -->
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card">
            <div class="pic"><img src="https://picsum.photos/300/200/?random=10" /></div>
            <div class="txt">
              <h3>title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quis
                voluptatibus a!
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card">
            <div class="pic"><img src="https://picsum.photos/300/200/?random=10" /></div>
            <div class="txt">
              <h3>title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quis
                voluptatibus a!
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card">
            <div class="pic"><img src="https://picsum.photos/300/200/?random=10" /></div>
            <div class="txt">
              <h3>title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quis
                voluptatibus a!
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card">
            <div class="pic"><img src="https://picsum.photos/300/200/?random=10" /></div>
            <div class="txt">
              <h3>title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quis
                voluptatibus a!
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card">
            <div class="pic"><img src="https://picsum.photos/300/200/?random=10" /></div>
            <div class="txt">
              <h3>title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quis
                voluptatibus a!
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card">
            <div class="pic"><img src="https://picsum.photos/300/200/?random=10" /></div>
            <div class="txt">
              <h3>title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quis
                voluptatibus a!
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card">
            <div class="pic"><img src="https://picsum.photos/300/200/?random=10" /></div>
            <div class="txt">
              <h3>title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quis
                voluptatibus a!
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card">
            <div class="pic"><img src="https://picsum.photos/300/200/?random=10" /></div>
            <div class="txt">
              <h3>title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quis
                voluptatibus a!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<!-- lang="sass" -->
<style lang="scss">
.section-banner {
  .container-banner {
    .banner {

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
        // width: 100%;
        padding: 5%;
        background-image: url("https://picsum.photos/300/200/?random=10");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;

        h2 {
          font-size: clamp(20px, 4vw, 40px);
        }
      }



      .join {
        width: clamp(150px, 30%, 250px);
        height: 30px;
        border-radius: 10px;
        border: none;
      }

      h2>span {
        font-size: clamp(16px, 4vw, 35px);
        color: aliceblue;
      }
    }

    .slide-button {
      margin: 20px;
      display: flex;
      gap: 20px;
      justify-content: center;

      button {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: none;
      }
    }

  }
}

section {
  padding: 30px 0;
  margin-bottom: 30px;
}

.newClass .card {
  text-align: center;
}
</style>
