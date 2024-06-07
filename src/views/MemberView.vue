<template>
    <section class="member">
        <aside>
            <div class="member_pic">
                <img src="" alt="">
            </div>
            <ul>
                <a href="#">帳號管理</a>
                <hr>
                <a href="#">專屬折扣</a>
                <hr>
                <a href="#">會員課程</a>
                <hr>
                <a href="#">訂單查詢</a>
                <hr>
                <a href="#">日記收藏</a>
            </ul>
        </aside>
    </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.member {
    display: flex;
    width: 100%;
    padding: 3% 12%;
    margin-top: 55px;
    aside {
        width: 25%;
        .member_pic{
            width: 60%;
            aspect-ratio: 1/1;
            border-radius: 50%;
            img{
                width: 100%;
                aspect-ratio: 1/1;
                object-fit: cover;
                object-position: 50% 50%;
            }
        }
        ul{
            padding: 0;
            display: flex;
            flex-direction: column;
        }
    }
}
</style>