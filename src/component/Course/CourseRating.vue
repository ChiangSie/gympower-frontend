<template>
  <div class="section section-raiting">
    <div class="container container-raiting">
      <div class="raiting-title">
        <h2>課程評價</h2>
      </div>
      <div class="raiting-container">
        <div class="raiting-filie">
          <select class="filie" v-model="raitingFilie">
            <option disabled value="">以日期先後順序排列</option>
            <option v-for="filie in filies" :key="filie" :value="filie">{{ filie }}</option>
          </select>
        </div>
        <div class="raiting-post" v-for="ratingPost in paginatedPosts" :key="ratingPost.id">
          <div class="container-post">
            <div class="raiting-member">
              <div class="raiting-img">
                <img :src="parseImg(ratingPost.image)" alt="">
              </div>
              <p>{{ ratingPost.member }}</p>
            </div>
            <div class="raiting-text">
              <div class="text-title">
                <h3>{{ ratingPost.title }}</h3>
                <p>{{ ratingPost.date }}</p>
              </div>
              <p>{{ ratingPost.describe }}</p>
            </div>
          </div>
        </div>
        <div class="page">
          <a href="#" v-for="n in totalPages" :key="n" @click.prevent="currentPage = n"
            :class="{ 'active-page': currentPage === n }">{{ n }}</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    productInfo: {
      type: Object,
      required: true
    },
    ratingPosts: {
      type: Array,
      required: true
    }
  },
  methods: {
        parseImg(imgURL) {
      return new URL(`../assets/img/course/${imgURL}`, import.meta.url).href;
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredPosts.length / this.itemsPerPage);
    },
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredPosts.slice(start, end);
    },
    filteredPosts() {
      return this.ratingPosts.filter(post => post.title === this.productInfo.title);
    }
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 3,
      raitingFilie: '',
      filies: ['Date Ascending', 'Date Descending']
    };
  }
};
</script>

<style lang="scss" scoped>
.section-raiting {
  .container-raiting {
    max-width: 1200px;

    .raiting-title {
      padding: 1.5rem 0;
      text-align: center;
    }

    .raiting-filie {
      text-align: end;
      padding-bottom: 1rem;

      .filie {
        padding: 5px 10px;
        height: 40px;
        line-height: 30px;
        border-radius: 5px;

        option {
          font-size: 18px;
        }

        select:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }
      }
    }

    .raiting-post {
      padding: 1rem 0;

      .container-post {
        display: flex;
        flex-direction: row;
        padding: .5rem 0;
        gap: 1rem;

        .raiting-member {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;

          .raiting-img {
            padding: .3rem;

            img {
              width: 80px;
              height: 80px;
              border-radius: 50%;
            }

            @media screen and (max-width: 768px) {
              img {
                width: 50px;
                height: 50px;
              }
            }
          }

          @media screen and (max-width: 768px) {
            .raiting-img {
              padding-left: 3%;
            }
          }
        }

        @media screen and (max-width: 768px) {
          .raiting-member {
            flex-direction: row;
            align-items: center;
            justify-content: start;
          }
        }

        .raiting-text {
          background-color: #D4EAF7;
          border-radius: 10px;
          padding: 3%;
          width: 100%;

          .text-title {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
        }
      }

      @media screen and (max-width: 768px) {
        .container-post {
          flex-direction: column;
          gap: 0;
          background-color: #D4EAF7;
          border-radius: 10px;
          padding: 3%;

        }
      }
    }

    @media screen and (min-width: 768px) {
      .raiting-post {
        padding: 0;
      }
    }

    .page {
      text-align: center;

      a {
        text-decoration: none;
        margin: 0 0.3rem;
        padding: 0.3rem 0.5rem;
        background-color: #999;
        color: #fff;
        border-radius: 50%;
        align-self: center;
      }

      .active-page {
        background-color: #002451;
      }
    }
  }
}
</style>