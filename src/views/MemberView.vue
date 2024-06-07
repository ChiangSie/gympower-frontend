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
        <main>

        </main>
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
    column-gap: 15px;
    aside {
        width: 20%;
        border: 1.5px solid black;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 17px;
        .member_pic{
            width: 50%;
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
            margin-top: 17px;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            a{
                text-decoration: none;
            }
        }
    }
    main{
        width: calc(80% - 15px);
        border: 1.5px solid black;
        border-radius: 15px;
    }
}
</style>