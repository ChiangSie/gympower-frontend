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
                <div class="raiting-post" v-for="raitingPost in raitingPosts" :key="raitingPost.id">
                    <div class="container-post">
                        <div class="raiting-member">
                            <div class="raiting-img">
                                <img :src="raitingPost.imgSrc" alt="">
                            </div>
                            <p>{{ raitingPost.member }}</p>
                        </div>
                        <div class="raiting-text">
                            <div class="text-title">
                                <h3>{{ raitingPost.title }}</h3>
                                <p>{{ raitingPost.date }}</p>
                            </div>
                            <p>{{ raitingPost.content }}</p>
                        </div>
                    </div>
                </div>
                <div class="page"><a href="" v-for="n in 5">{{ n }}</a></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            raitingPosts: [
                {
                    id: 1,
                    imgSrc: 'src/assets/img/banner_aboutus.jpg',
                    member: 'windy',
                    title: '週三有氧課程',
                    date: '2023/03/03',
                    content: '李俊輝教練的核心訓練班真的非常棒！他的教學方法既專業又生動，讓我'
                },
                {
                    id: 2,
                    imgSrc: 'src/assets/img/banner_aboutus.jpg',
                    member: 'windy',
                    title: '週三有氧課程',
                    date: '2023/03/03',
                    content: '李俊輝教練的核心訓練班真的非常棒！他的教學方法既專業又生動，讓我學到了很多實用的核心訓練技巧。在訓練過程中，他對每個動作的講解都非常詳細，並且非常注意我們的姿勢和....'
                },
            ]
        }
    }
}

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
                }

                @media screen and (max-width: 768px) {
                    .raiting-member {
                        flex-direction: row;
                        align-items: center;
                        justify-content: start;
                    }
                }

                .raiting-text {
                    background-color: #ff0000;
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
                    background-color: #ff0000;
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