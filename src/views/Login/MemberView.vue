<template>
    <section class="member">
        <aside v-if="!isMobile">
            <ul>
                <router-link to="/AccountMangerView">帳號管理</router-link>
                <hr/>
                <router-link to="/MemberCourse">會員課程</router-link>
                <hr/>
                <router-link to="/OrderView">訂單查詢</router-link>
                <hr/>
                <router-link to="/DiaryCollect">日記收藏</router-link>
                <hr/>
                <span class="sign-out" @click="signOut">登出</span>
            </ul>
        </aside>
        <div v-else class="mobile-menu">
            <select @change="navigate">
                <option value="">選擇功能</option>
                <option value="/AccountMangerView"><router-link to="/AccountMangerView">帳號管理</router-link></option>
                <option value="/MemberCourse"><router-link to="/MemberCourse">會員課程</router-link></option>
                <option value="/OrderView"><router-link to="/OrderView">訂單查詢</router-link></option>
                <option value="/DiaryCollect"><router-link to="/DiaryCollect">日記收藏</router-link></option>
                <option value="#"><span class="sign-out" @click="signOut">登出</span></option>
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
import { useMemStore } from '/src/stores/mem.js'
import { mapState } from 'pinia'

export default defineComponent({
    components: {
        RouterView
    },
    setup() {
        const router = useRouter()
        const memStore = useMemStore()

        return {
            router,
            memStore
        }
    },
    data() {
        return {
            isMobile: false
        }
    },
    computed: {
        ...mapState(useMemStore, ['currentUser'])
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
            if (value === 'signout') {
                this.signOut();
            } else if (value) {
                this.router.push(value);
            }
        },
        signOut() {
            this.memStore.clearCurrentUser() // 清除 store 中的用戶數據
            this.router.push('/') // 導航到首頁
        }
    }
})
</script>

<style lang="scss" scoped>
.sign-out{
    border: none;
    background-color: transparent;
                span{
                    color: #002451;
                font-size:22px;
                &:hover{
                color: #000;
                }
                }
}
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
            border-radius: 10px;
            background-color: #fff;
        }
    }

    main {
        width: calc(80% - 15px);
        border: 1.5px solid black;
        border-radius: 10px;
        padding: 20px 50px;
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


