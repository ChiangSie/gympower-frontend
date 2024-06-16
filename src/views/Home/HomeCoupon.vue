<template>
    <!-- 扭蛋 -->
    <section class="section section-coupon">
        <h2 class="decorate-txt ">COUPON</h2>
        <div class="container container-coupon">
            <h2 class="title">轉扭蛋,抽好禮</h2>
            <div class="row">
                <div class="col col-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="pic">
                        <img src="../../assets/img/index/coupon.png">
                    </div>
                </div>
                <div class="col col-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="describe">
                        <ul>
                            <p class="title">活動日期:</p>
                            <li>2024年6月1日 - 2024年6月30日</li>
                        </ul>
                        <ul>
                            <p class="title">參加對象:</p>
                            <li>所有現有會員和新註冊會員</li>
                        </ul>
                        <ul>
                            <p class="title">優惠內容:</p>
                            <li>5%折扣券: 在下一次購買會員套餐時享受5%的折扣。</li>
                            <li>10%折扣券: 在下一次購買會員套餐時享受10%的折扣。</li>
                            <li>
                                20%折扣券: 在下一次購買會員套餐時享受20%的折扣。</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-coupon {
    .container-coupon {
        max-width: 800px;

        >.title {
            font-weight: bold;
            text-align: center;
            margin-bottom: 60px;

        }

        .row {
            align-items: flex-end;

            .col {
                .pic {
                    >img {
                        width: 100%;
                    }
                }

                ul {
                    >.title {
                        font-weight: bold;
                    }

                    margin-bottom: 50px;
                }

                ul:last-child {
                    list-style: disc;
                    list-style-position: inside;
                }
            }
        }
    }
}

@media screen and (max-width:768px) {
    .col {

        .pic {
            width: 50%;
            margin: auto;
        }

        .describe {
            width: 70%;
            margin: auto;
        }

    }
}
</style>