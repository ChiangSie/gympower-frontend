<!-- <template>
  <div class="section section-banner">
    <div class="container container-banner">
        <div class="banner-title">
          <div class="banner-img">
            <img :src="imgSrc" alt="banner" />
          <h1>{{ title }}</h1>
          </div>
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
   props: {
    title: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    }
  },
  data() {
    return {
   
    }
  }
}
</script>

<style lang="scss" scoped>
.section{
background-color: #f9f8f7;
    // background-image: url(http://www.transparenttextures.com/patterns/bedge-grunge.png);
}
.container-banner {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 80px;
  justify-content: center;
  
  .banner-title{
    flex: 1;
    width: 100%;
    text-align: center;
    align-self: center;
  }
  @media screen and (max-width: 768px) {
    .banner-title{
      position: absolute;
      width: 100%;
      color: #fff;
    }
  }
  .banner-img{
    width: 70%;
    aspect-ratio: 2.5/1;
    border-radius: 10px;
    overflow: hidden;
    img {
      vertical-align: middle;
      width: 100%;
      aspect-ratio: 2.5/1;
      object-fit: cover;
  }
  }
  @media screen and (max-width: 768px) {
    .banner-img{
      width: 100%;
    }
  }
}
@media screen and (max-width: 768px) {
  .container-banner {
    padding-top: 70px;
  }
}
</style> -->




<template>
  <section class="banner">
    <div class="banner_aboutus_img">
      <img :src=" parseImg('banner_8.jpg')" alt="banner" />
    </div>
    <h1>{{ title }}</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: '最新消息'
    }
  },
    methods: {
     parseImg(imgURL) {
      return new URL(`../../assets/img/banner/${imgURL}`, import.meta.url).href;
    },
    }
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  margin-top: 40px;
  position: relative;

  .banner_aboutus_img {
    width: calc(100% - 60px); 
    height: 450px; 
    overflow: hidden;
    border-radius: 10px; 
    margin: 30px; 
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px; 
    }
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(255, 255, 255); 
    font-size: clamp(24px, 5vw, 40px); 
    text-align: center;
    text-shadow: 1px 1px 3px black, 5px 3px 0 #71C4EF; 
  }
}

@media (max-width: 768px) {
  .banner_aboutus_img {
    width: 100%;
    height: auto; 
    margin: 0; 
  }

  .banner h1 {
    font-size: clamp(24px, 4vw, 35px); 
  }
}
</style>
