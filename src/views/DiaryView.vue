<template>
  <Banner />

  <div class="section section-search">
    <div class="container container-search">
      <div class="search">
        <p>健身交換日記</p>
        <input class="search-input" type="text">
        <button class="search-btn">+ 新增</button>
      </div>
      <div class="page"><a href="" v-for="n in 5">{{ n }}</a></div>
    </div>
    <div class="section section-diary">
      <div class="container container-diary">
        <div class="row">
          <div class="col-6 col-md-4 col-lg-4 col-xl-3" v-for="card in cardlist" :key="card.id">
            <a href="">
              <div class="card">
                <div class="pic">
                  <img :src="card.imgSrc" />
                  <div class="box"></div>
                  <div class="title">
                    <h3>{{ card.title }}</h3>
                  </div>
                </div>
                <div class="txt">
                  <p>{{ card.text }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script setup>
import Banner from './Diary/Banner.vue';
</script>

<script>
export default {
  data() {
    return {
      cardlist: [
        {
          id: 1,
          imgSrc: 'https://picsum.photos/300/350/?random=10',
          title: '健康飲食健身者的營養指南',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!'
        },
        {
          id: 2,
          imgSrc: 'https://picsum.photos/300/350/?random=10',
          title: '高效訓練打造完美體態',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!'
        },
        {
          id: 3,
          imgSrc: 'https://picsum.photos/300/350/?random=10',
          title: '3title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!'
        },
        {
          id: 4,
          imgSrc: 'https://picsum.photos/300/350/?random=10',
          title: '4title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!'
        },
        {
          id: 4,
          imgSrc: 'https://picsum.photos/300/350/?random=10',
          title: '4title',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quisvoluptatibus a!'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.section {
  background-color: #F9F8F7;
}

img {
  width: 100%;
}

a {
  text-decoration: none;
  color: #000000;
}

.container {
  width: 100%;
  max-width: 1200px;
  padding-bottom: 1%;
}

.container-search {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;

  .search {
    display: flex;
    align-items: center;
    gap: 10px;

    .search-input {
      padding: 10px 10px 10px 35px;
      border: solid .1px #b4def2;
      color: #fff;
      border-radius: 35px;
      background-color: #b4def2;
      outline: none;
    }

    .search-btn {
      padding: 10px 15px;
      border: solid .1px #ffffff;
      background-color: #002451;
      color: #fff;
      border-radius: 35px;
    }
  }

  .page {
    align-self: center;

    a {
      margin: 0 .3rem;
      padding: .3rem .5rem;
      background-color: #002451;
      color: #fff;
      border-radius: 50%;
      align-self: center;
    }
  }
}

.container-diary {
  .card {
    .pic {
      position: relative;
      border-radius: 10px;

      img {
        border-radius: 10px;
      }

      .title {
        position: absolute;
        width: 200px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 3;
      }

      .box {
        position: absolute;
        width: 100%;
        height: 150px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fffeee9d;
      }
    }

  }
}
</style>