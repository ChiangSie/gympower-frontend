<template>
    <section v-if="coach" class="lightbox" @click.self="closeCoachInfo">
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
                    <p><span class="custom_p">專長：</span><br>{{ coach.expertise }}</p>
                    <p><span class="custom_p">教練介紹：</span><br>{{ coach.intro }}</p>
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
    position: relative;
    border: 1px solid #000;
    height: 90%;
    width: 60%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    overflow: hidden;

    .close_btn {
        position: absolute;
        top: 10px; 
        right: 20px; 
        font-size: 30px;
        cursor: pointer;
        color: #002451;
        background-color: #fff;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h3 {
        font-weight: 600;
        font-size: 22px;
        margin-bottom: 20px;
        border-bottom: dotted;
    }

    .coach_detail {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }

    .img_preview {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 45%;
        height: 100%;

        .large_img {
            margin-bottom: 10px;
            img {
                width: 100%;
                height: auto;
                max-height: 50vh;
                object-fit: cover;
            }
        }

        .thumbnail_list {
            display: flex;
            justify-content: center;
            gap: 13px;
            width: 100%;
            img {
                width: 70px;
                height: 70px;
                object-fit: cover;
                cursor: pointer;
            }
        }
    }

    .coach_info {
        width: 50%;
        height: 100%;
        overflow-y: auto;
        p {
            font-size: 14px;
            margin-bottom: 30px;
            text-align: left;
            .custom_p {
                font-size: 18px;
                font-weight: 600;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .coach_list {
        width: 90%;
        .coach_detail {
            flex-direction: column;
            align-items: center;
        }
        .img_preview {
            width: 100%;
            .large_img img {
                width: 100%;
                max-height: 30vh;
            }
            .thumbnail_list img {
                width: 60px;
                height: 60px;
            }
        }
        .coach_info {
            width: 100%;
            text-align: center;
        }
    }
}
</style>
