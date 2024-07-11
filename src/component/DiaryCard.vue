<template>
  <section>
    <router-link :to="`/diary/${cardData.id}`">
      <div class="card">
        <div class="pic">
          <img :src="parseImg('cardData.imgSrc')" />
          <div class="box"></div>
          <div class="title">
            <h3>{{ cardData.title }}</h3>
          </div>
        </div>
        <div class="txt">
          <p>{{ cardData.text }}</p>
        </div>
        <div class="date">{{ cardData.date }}</div>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "DiaryCard",
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    parseImg(imgURL) {
      return new URL(`../assets/img/Diary/${imgURL}`, import.meta.url).href;
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

a {
  text-decoration: none;
  color: #000000;
}

.card {
  padding: 10px;
  p {
    margin: 10px;
  }
  .date {
    margin: 10px;
  }
  .pic {
    height: 200px;
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
  .txt {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* 控制顯示的行數 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (max-width: 568px) {
    .title {
      width: 130px !important;
      h3 {
        font-size: 20px;
        white-space: wrap;
        word-break: break-word;
      }
    }
  }
}
</style>
