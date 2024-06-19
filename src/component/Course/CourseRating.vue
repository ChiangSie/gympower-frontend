<template>
  <div class="section section-raiting">
    <div class="container container-raiting">
      <div class="raiting-title">
        <h2>課程評價</h2>
      </div>
      <div class="raiting-container">
        <div class="raiting-filie">
          <select v-model="raitingFilie">
            <option disabled value="">以日期先後順序排列</option>
            <option v-for="filie in filies" :key="filie" :value="filie">{{ filie }}</option>
          </select>
        </div>
        <div class="raiting-post" v-for="ratingPost in ratingPosts" :key="ratingPost.id">
          <div class="container-post">
            <div class="raiting-member">
              <div class="raiting-img">
                <img :src="ratingPost.image" alt="">
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
        <div class="page"><a href="" v-for="n in 5" :key="n">{{ n }}</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ratingPosts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      raitingFilie: '',
      filies: ['Date Ascending', 'Date Descending'] // 其他排序選項
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
        }

        .raiting-post {
            padding: 1rem 0;

            .container-post {
                display: flex;
                flex-direction: row;
                padding: .5rem;
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
        }
    }
}
</style>