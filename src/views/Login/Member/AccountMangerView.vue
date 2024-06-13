<template>
    <section>
        <h2>帳號管理</h2>
        <hr>
        <div class="main-part">
            <div class="content_prof">
                <h3>個人頭像</h3>
                <div class="person-pic">
                    <div class="pic">
                        <img src="#" alt="user picture">
                    </div>
                <input type="file" name="#" id="#">
                </div>
            </div>
            <hr>
            <div class="content_sec">
                <h3>基本資料</h3>
                <div class="account_detail">
                    <div class="name ks">
                        <h4>姓名</h4>
                        <input type="text">
                    </div>
                    <div class="sex ks">
                        <h4>姓別</h4>
                        <input type="text">
                    </div>
                    <div class="phone ks">
                        <h4>電話號碼</h4>
                        <input type="tel">
                    </div>
                    <div class="or-password ks">
                        <h4>原密碼</h4>
                        <input type="password">
                    </div>
                    <div class="new1-password ks">
                        <h4>新密碼</h4>
                        <input type="password">
                    </div>
                    <div class="new2-password ks">
                        <h4>驗證密碼</h4>
                        <input type="password">
                    </div>
                </div>
            </div>
        </div>
            
        <hr>
        <div class="content_end">
            <button>儲存變更</button><br>
            <span>點擊儲存即同意 GYM力 之會員條款 與客戶隱私權條款</span>
        </div>
    </section>
</template>
<script></script>
<style lang="scss" scoped>
hr{
    width: 100%;
    border-width: 1px;
    border-color: #000000;
}
section{
    width:100%;
    .main-part{
        width: 95%;
        margin: 0 auto;
        .content_prof{
            width: 100%;
            margin: 10px auto 30px;
            .person-pic{
                width: 80%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                margin: 10px auto;
                .pic{
                    width: 80px;
                    aspect-ratio: 1/1;
                    border-radius: 50%;
                    img{
                        width: 100%;
                        aspect-ratio: 1/1;
                        object-fit: cover;
                    }
                }
            }
            input{
                border-radius: 5px;
                border: 1px black solid;
                background-color: transparent;
            }
        }
        .content_sec{
            .account_detail{
                width: 60%;
                margin: 20px auto 40px;
                .ks{
                    display: flex;
                    flex-direction: column;
                    margin: 10px 20px;
                    input{
                        border-radius: 5px;
                        height: 30px;
                    }
                }
            }
        }
    }
    .content_end{
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        button{
            width: 150px;
            height: 35px;
            background-color: whitesmoke;
            border-radius: 10px;
        }
    }

}
</style>