<template>
    <section class="bento_list">
        <div class="bento_list_title">
            <h3>饗食四合一</h3>
        </div>
        <div class="bento_list_detail">
            <div class="bento_list_con">
                <!-- 餐盒內容含名稱、份量、卡路里 -->
                <div class="bento_list_pic">
                    <img src="../../../assets/img/1.png" alt="">
                </div>
                <div class="bento_list_text">
                    <div class="bento_list_con_name">炸春捲</div>
                    <div class="bento_list_con_qty">x2</div>
                    <div class="bento_list_con_heat">190kcal</div>
                </div>
            </div>
            <div class="bento_list_con">
                <div class="bento_list_pic">
                    <img src="../../../assets/img/2.png" alt="">
                </div>
                <div class="bento_list_text">
                    <div class="bento_list_con_name">炸春捲</div>
                    <div class="bento_list_con_qty">x2</div>
                    <div class="bento_list_con_heat">190kcal</div>
                </div>
            </div>
            <div class="bento_list_con">
                <div class="bento_list_pic">
                    <img src="../../../assets/img/3.png" alt="">
                </div>
                <div class="bento_list_text">
                    <div class="bento_list_con_name">炸春捲</div>
                    <div class="bento_list_con_qty">x2</div>
                    <div class="bento_list_con_heat">190kcal</div>
                </div>
            </div>
            <div class="bento_list_con">
                <div class="bento_list_pic">
                    <img src="../../../assets/img/4.png" alt="">
                </div>
                <div class="bento_list_text">
                    <div class="bento_list_con_name">炸春捲</div>
                    <div class="bento_list_con_qty">x2</div>
                    <div class="bento_list_con_heat">190kcal</div>
                </div>
            </div>
            <div class="bento_list_total">
                <p>總熱量: 484kcal</p>
            </div>
        </div>
    </section>
</template>

<script></script>

<style lang="scss" scoped>
    .bento_list {
            width: 50%;
            height: 30%;
            background: linear-gradient(to right, #f0f0f0, #d0e0f0);
            border-radius: 10px;
            backdrop-filter: blur(10px);
            margin: 50px auto;
            padding: 10px;
            text-align: center;
            position: relative;
        }

        .bento_list_title{
            background-color: #71C4EF;
            color: #fff;
            border-radius: 50px;
            padding: 0 60px;
            display: inline-block;
            position: absolute;
            transform: translate(-50%, -50%);
        }
        .bento_list_title h3{
            font-size:18px;
        }

        /* ====================================================== */
        /* 餐盒內容含名稱、份量、卡路里 */
        
        .bento_list_detail{
            padding: 18px 30px;
            
        }
        .bento_list_con{
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            padding: 1.2%;
            border-bottom: 1px dashed #000;
        }
        .bento_list_pic{
            width: 22%;
            display: flex;
            justify-content: center;
        }
        .bento_list_pic img{
            width: 100%;
        }
        .bento_list_text{
            width: 70%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
        .bento_list_total{
            width: 88%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-bottom: 3%;
        }
        .bento_list_total p{
            font-weight: 600;
        }
</style>