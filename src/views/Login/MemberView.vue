<template>
    <section class="member">
        <aside>
            <div class="member_pic">
                <img src="" alt="">
            </div>
            <ul>
                <router-link to="/AccountMangerView">帳號管理</router-link>
                <hr>
                <router-link to="/DiscountView">專屬折扣</router-link>
                <hr>
                <router-link to="/MemberCourse">會員課程</router-link>
                <hr>
                <router-link to="/OrderView">訂單查詢</router-link>
                <hr>
                <router-link to="/DiaryCollect">日記收藏</router-link>

            </ul>
        </aside>
        <main>
            <RouterView />
        </main>
    </section>
</template>

<script>
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  components: {
    RouterView
  }
})
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
        height: 500px;
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
        padding: 30px 55px;
    }
}
</style>