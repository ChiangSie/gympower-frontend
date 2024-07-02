<!-- <template>
    <section class="member">
        <aside>
            <div class="member_pic">
                <img v-bind:src="selfieUrl" alt="">
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
        height: fit-content;
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
            padding: 15px 0;
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
        padding: 30px 50px;
    }
}
</style> -->

<template>
    <section class="member">
        <aside v-if="!isMobile">
            <ul>
                <router-link to="/AccountMangerView">帳號管理</router-link>
                <hr>
                <router-link to="/MemberCourse">會員課程</router-link>
                <hr>
                <router-link to="/OrderView">訂單查詢</router-link>
                <hr>
                <router-link to="/DiaryCollect">日記收藏</router-link>
            </ul>
        </aside>
        <div v-else class="mobile-menu">
            <select @change="navigate">
                <option value="">選擇功能</option>
                <option value="/AccountMangerView">帳號管理</option>
                <option value="/MemberCourse">會員課程</option>
                <option value="/OrderView">訂單查詢</option>
                <option value="/DiaryCollect">日記收藏</option>
            </select>
        </div>
        <main>
            <RouterView />
        </main>
    </section>
</template>

<script>
import { defineComponent } from 'vue'
import { RouterView, useRouter } from 'vue-router'

export default defineComponent({
    components: {
        RouterView
    },
    data() {
        return {
            isMobile: false
        }
    },
    mounted() {
        this.checkScreenWidth();
        window.addEventListener('resize', this.checkScreenWidth);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkScreenWidth);
    },
    methods: {
        checkScreenWidth() {
            this.isMobile = window.innerWidth <= 768;
        },
        navigate(event) {
            const value = event.target.value;
            if (value) {
                this.$router.push(value);
            }
        }
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
        height: fit-content;
        border: 1.5px solid black;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 17px;
        background-color: #FEEFDA;
        font-weight: 600;
        
        ul {
            margin-top: 17px;
            padding: 15px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            
            
            a {
                text-decoration: none;
                color: #002451;
                font-size:22px;
                &:hover{
                color: #000;
                }
        
            }
        }
    }

    .mobile-menu {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 15px;

        select {
            width: 100%;
            padding: 10px;
            border: 1.5px solid black;
            border-radius: 15px;
        }
    }

    main {
        width: calc(80% - 15px);
        border: 1.5px solid black;
        border-radius: 10px;
        padding: 20px 50px;
        background-color:
    }
}

@media (max-width: 768px) {
    .member {
        flex-direction: column;
        padding: 3% 5%;
        aside, main {
            width: 100%;
            border-radius: 15px;
        }
        main {
            padding: 20px 20px;
        }
    }
}


</style>


