<template>
    <section class="diarycollectpage">
        <h2>日記收藏</h2>
        <hr>
        <div class="pagination" v-if="totalPages > 1">
            <button @click="currentPage = 1" :disabled="currentPage === 1"><i class="fa-solid fa-angles-left"></i></button>
            <button @click="prevPage" :disabled="currentPage === 1"><i class="fa-solid fa-arrow-left"></i></button>
            <button v-for="n in displayedPageNumbers" :key="n" @click="currentPage = n" :class="{ active: currentPage === n }">{{ n }}</button>
            <button @click="nextPage" :disabled="currentPage === totalPages"><i class="fa-solid fa-arrow-right"></i></button>
            <button @click="currentPage = totalPages" :disabled="currentPage === totalPages"><i class="fa-solid fa-angles-right"></i></button>
        </div>

        <div class="fullcard" v-for="item in paginateddiarylist" :key="item.dm_id">
            <div class="diarycollectcard">
                <span class="linetitle"><span>{{ item.mem_name }}</span></span>
                <h3>{{ item.dm_name }}</h3>
                <p>{{ item.dm_content }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 1,
            pageSize: 2,
            totalPages: 0,
            diarylist: []
        }
    },
    computed: {
        paginateddiarylist() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.diarylist.slice(start, end);
        },
        displayedPageNumbers() {
            const range = 2; // 顯示當前頁面前後各兩個頁碼
            let start = Math.max(1, this.currentPage - range);
            let end = Math.min(this.totalPages, this.currentPage + range);

            if (start > 1) {
                start = Math.max(1, end - range * 2);
            }
            if (end < this.totalPages) {
                end = Math.min(this.totalPages, start + range * 2);
            }

            return Array.from({length: end - start + 1}, (_, i) => start + i);
        }
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        fetchData() {
            fetch(`${import.meta.env.VITE_PHP_URL}get_diary.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                return res.json()
            })
            .then((json) => {
                if (json.code === 200) {
                    this.diarylist = json.data.list.map((item) => ({
                        ...item,
                        dm_id: parseInt(item.dm_id),
                        dm_status: parseInt(item.dm_status)
                    }))
                    this.totalPages = Math.ceil(this.diarylist.length / this.pageSize);
                } else {
                    console.error('API返回錯誤:', json.msg)
                }
            })
            .catch((error) => {
                console.error('獲取數據時出錯:', error)
            })
        },
    },
    mounted() {
        this.fetchData();
    }
}
</script>

<style lang="scss" scoped>
hr{
    width: 100%;
    border-width: 1px;
    border-color: #000000;
    margin: 10px 0;
}
.diarycollectpage{
    width: 100%;
    .pagination{
        display: flex;
        justify-content: flex-end;
        padding: 0 ;
        button{
            width: fit-content;
            height: 30px;
            margin:  0 5px ;
            border: 0px;
            background-color: transparent;
        }
    }
    .fullcard{
        border-radius: 15px;
        border: 1.5px solid black;
        background-color: #d4eaf7;
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        align-items: end;
        .diarycollectcard{
            width: 100%;
            height: fit-content;
            overflow: hidden;
            padding: 35px;
            .linetitle{
                display: flex;
                justify-content: space-between;
                span{
                    font-size: 18px;
                    }
                }
                h3{
                    margin: 15px 0 ;
                }
                p{
                    width: 100%;
                    font-size: 14px;
                }
            }
        }
        button{
            margin: 25px ;
            border: none;
            background-color: transparent;
        }
    }
</style>