<template>
  <div class="card">
    <div class="card-head">
      <h2>{{ cardData.title }}</h2>
    </div>
    <div class="card-body">
      <div class="pic">
        <img :src="parseImg(cardData.imgSrc)" :alt="cardData.title">
        <p>{{ cardData.sort }}</p>
      </div>
      <div class="txt">
        <h3>
          <div>{{ cardData.teacher }}</div><span>NT.{{ cardData.price }} | {{ cardData.course }}堂</span>
        </h3>
      </div>
    </div>
    <div class="card-footer">
      <div class="content">
        <p>{{ cardData.description }}</p>
      </div>
      <router-link :to="`/course/${cardData.id}`">
        <button class="apply">立即報名</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  mounted() { 
     parseImg(); 
  },
  methods: {
        parseImg(imgURL) {
      return new URL(`../assets/img/course/${imgURL}`, import.meta.url).href;
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #000000;
}

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

  .pic {
    position: relative;

    img {
      width: 100%;
      aspect-ratio: 3 / 1;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 15px;
    }

    p {
      position: absolute;
      right: 10px;
      top: 15px;
      padding: 10px 20px;
      background-color: #ffffff;
      border-radius: 10px;
      color: #000000;
    }
  }

  h3 {
    margin-bottom: 15px;
    flex-wrap: wrap;
  }

  .card-footer {
    border-radius: 0 0 10px 10px;
    width: 100%;
    padding: 20px 20px;
    background-color: #D4EAF7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    .content {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      /* 控制顯示的行數 */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .apply {
      color: #fff;
      font-size: clamp(16px, 2.18vw, 28px);
      padding: 10px 20px;
      background-color: #002451;
      border: none;
      border-radius: 10px;
      width: fit-content;
      white-space: nowrap;
    }
  }
}
</style>