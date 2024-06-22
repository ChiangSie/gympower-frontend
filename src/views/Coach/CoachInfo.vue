<template>
    <section v-if="coach" class="lightbox">
        <div class="coach_list">
            <div class="close_btn" @click="closeCoachInfo">
                <i class="fa-regular fa-circle-xmark"></i>
            </div>
            <h3>{{ coach.coach_name }}</h3>
            <div class="coach_detail">
                <div class="img_preview">
                    <div class="large_img">
                        <img :src="largeImgSrc" alt="教練照片" class="card-image" />
                    </div>
                    <div class="thumbnail_list">
                        <img :src="thumbnailPic2" alt="教練照片" class="card-image"
                            @click="changeLargeImg(thumbnailPic2)" />
                        <img :src="thumbnailPic3" alt="教練照片" class="card-image"
                            @click="changeLargeImg(thumbnailPic3)" />
                        <img :src="thumbnailPic4" alt="教練照片" class="card-image"
                            @click="changeLargeImg(thumbnailPic4)" />
                    </div>
                </div>
                <div class="coach_info">
                    <div class="rating">
                        <span class="stars">⭐⭐⭐⭐⭐</span>
                        <span>({{ coach.rating }}顆星)</span>
                    </div>
                    <p><span class="custom_p">簡介：</span><br>{{ coach.intro }}</p>
                    <p><span class="custom_p">專業領域：</span><br>•{{ coach.expertise }}</p>
                    <p><span class="custom_p">經驗：</span><br>{{ coach.experience }}</p>
                    <p><span class="custom_p">專業資格或證照：</span><br>• {{ coach.qualifications }}<br>• {{ coach.licenses }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import thumbnailPic2 from '/src/assets/img/coach_info/thumbnail_pic_2.jpg'
import thumbnailPic3 from '/src/assets/img/coach_info/thumbnail_pic_3.jpg'
import thumbnailPic4 from '/src/assets/img/coach_info/thumbnail_pic_4.png'

export default {
    props: {
        coach: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            thumbnailPic2,
            thumbnailPic3,
            thumbnailPic4,
            largeImgSrc: thumbnailPic2
        };
    },
    methods: {

        closeCoachInfo() {
            this.$emit('close');
        },
        changeLargeImg(src) {
            this.largeImgSrc = src;
        }
    }
};
</script>


<style lang="scss" scoped>
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.coach_list {
    border: 1px solid #000000;
    height: 85%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    background-color: #fff;

    .coach_detail {
        display: flex;
        justify-content: space-around;
        height: 85%;
    }

    h3 {
        border-bottom: 1px dashed #000;
        font-weight: 600;
        font-size: 26px;
    }

    .close_btn {
        font-size: 30px;
        cursor: pointer;
        color: #002451;
        margin-left: 90%;
        margin-top: 1%;
    }

    .img_preview {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;



        .large_img {
            width: 150%;
            height: 30%;
            aspect-ratio: 4 / 3.5;
            margin-right: -70px;
            margin-bottom: 100px;



            img {
                width: 100%;
                height: 42vh;
                object-fit: cover;
                object-position: 50% 50%;
                cursor: pointer;
                border-radius: 10px;
            }
        }

        .thumbnail_list {
            display: flex;
            justify-content: space-between;
            gap: 15px;
            width: 50%;
            height: 15%;
            aspect-ratio: 4 / 3.5;
            margin-right: 80px;


            img {
                vertical-align: middle;
                width: 100%;
                height: 11vh;
                object-fit: cover;
                object-position: 50% 50%;
                cursor: pointer;
                border-radius: 10px;

            }


        }

    }

    .coach_info {
        margin-top: 1%;
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p {
            width: 100%;
            margin: 8px 0;
            text-align: start;


            .custom_p {
                font-size: 18px;
                font-weight: 600;
            }
        }


        .rating {

            margin-left: auto;

            .stars {
                margin-right: 5px;
            }
        }
    }

}
</style>
