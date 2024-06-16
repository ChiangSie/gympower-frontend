<script></script>


<template>
    <!-- 學員回饋 -->
    <section class="section section-feedback">
        <h2 class="decorate-txt flex-end">FEEDBACK</h2>
        <div class="container container-feedback">
            <h2 class="title">學員回饋</h2>
            <div class="row">
                <div class="col col-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="card">
                        <div class="coach">
                            <div class="pic">
                                <img src="../../assets/img/index/coach.png">
                            </div>
                            <div class="name">
                                <p>林佳穎</p>
                            </div>
                        </div>
                        <div class="course">
                            <div class="course-title">
                                <div class="course-name">
                                    <p>課程： 核心訓練班</p>
                                </div>
                                <div class="course-date">
                                    <p>2024/04/16</p>
                                </div>
                            </div>
                            <div class="course-describe">
                                <p>李俊輝教練的核心訓練班真的非常棒！他的教學方法既專業又生動，在訓練過程中，他對每個動作的講解都非常詳細，並且非常注意我們的姿勢和安全，確保每個人都能正確地完成動作。上完幾次課後，我明顯感受到核心肌群的力量和穩定性都有所提升。唯一的小缺點是，有時候...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="card">
                        <div class="coach">
                            <div class="pic">
                                <img src="../../assets/img/index/coach2.png">
                            </div>
                            <div class="name">
                                <p>林佳穎</p>
                            </div>
                        </div>
                        <div class="course">
                            <div class="course-title">
                                <div class="course-name">
                                    <p>課程：核心訓練班</p>
                                </div>
                                <div class="course-date">
                                    <p>2024/04/16</p>
                                </div>
                            </div>
                            <div class="course-describe">
                                <p>李俊輝教練的核心訓練班真的非常棒！他的教學方法既專業又生動，在訓練過程中，他對每個動作的講解都非常詳細，並且非常注意我們的姿勢和安全，確保每個人都能正確地完成動作。上完幾次課後，我明顯感受到核心肌群的力量和穩定性都有所提升。唯一的小缺點是，有時候...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.section-feedback {
    .container-feedback {
        max-width: 1100px;

        .title {
            font-weight: bold;
            text-align: center;
            margin-bottom: 60px;

        }

        .row {
            .col {
                .card {
                    border-radius: 10px;
                    padding: 20px;
                    background: linear-gradient(62deg, #F0EEE9, #D4EAF7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;

                    .coach {
                        width: 30%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 15px;

                        .pic {
                            border-radius: 50%;
                            overflow: hidden;

                            >img {
                                width: 100%;
                                aspect-ratio: 1/1;
                                display: block;
                            }
                        }
                    }

                    .course {
                        width: 70%;
                        display: flex;
                        flex-direction: column;
                        gap: 20px;

                        .course-title {
                            display: flex;
                            align-items: center;
                            justify-content: space-around;
                        }
                    }
                }
            }
        }
    }
}
</style>
