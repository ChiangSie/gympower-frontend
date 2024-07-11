<template>
    <section class="order_page">
        <h2>訂單查詢</h2>
        <hr>
        <div class="pagination">
            <button @click="currentPage = 1"><i class="fa-solid fa-angles-left"></i></button>
            <button @click="prevPage"><i class="fa-solid fa-arrow-left"></i></button>
            <button v-for="n in totalPages" @click="currentPage = n" :key="n.n">{{ n }}</button>
            <button @click="nextPage"><i class="fa-solid fa-arrow-right"></i></button>
            <button @click="currentPage = totalPages"><i class="fa-solid fa-angles-right"></i></button>
        </div>
        <div class="order_search" v-for="item in paginatedOrderDataList" :key="item.id">
            <div class="order_card" >
                <table>
                    <tr class="tr_first">
                        <td>訂單編號</td>
                        <td>訂單日期</td>
                        <td>訂單總價</td>
                        <td>訂單狀態</td>
                    </tr>
                    <tr>
                        <td>{{ item.bento_id}}</td> 
                        <td>{{ item.bento_date }}</td>
                        <td>$ {{ item.bento_total }}</td>
                        <td>{{ item.bento_status ?  '已取餐' : '未取餐' }}</td>
                    </tr>
                    <tr class="tr_first tr_second" >
                        <td>內容</td>
                    </tr>
                    <tr class="tr_second">
                        <td>{{ item.bento_con1}}</td>
                    </tr>
                </table>
            </div>
            <button @click="showtr($event)"><i class="fa-solid fa-circle-info"></i> 查看明細</button>
        </div>
        
    </section>
</template>


<script>
export default{
    data(){
        return{
            bentolist:[
            ],
            currentPage: 1,
            pageSize: 3,
            totalPages: 0 ,
        }
    },
    computed: {
        paginatedOrderDataList() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            console.log(`Paginated list:`, this.bentolist.slice(start, end));
            return this.bentolist.slice(start, end);
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
        showtr(event) {
            const button = event.target;
            const trSeconds = button.parentNode.querySelectorAll('.tr_second');
            trSeconds.forEach(tr => {
            tr.style.display = tr.style.display === 'none' ? 'table-row' : 'none';
        });
        },
        fetchData() {
            fetch(`${import.meta.env.VITE_PHP_URL}get_bento.php`, {
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
                    this.bentolist = json.data.list.map((item) => ({
                        ...item,
                        bento_id: parseInt(item.bento_id),
                        bento_status: parseInt(item.bento_status)
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
        this.totalPages = Math.ceil(this.bentolist.length / this.pageSize);
        this.fetchData()
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
.order_page{
    width: 100%;
    .order_search{
        margin: 20px 0;
        .order_card{
        border-radius: 15px;
        border: 2px solid black;
        overflow: hidden;
        table{
            width: 100%;
            text-align: center;
            tr{
                border: 1px black solid;
                padding: 10px;
                td{
                    width: 25%;
                    border: .5px black solid;
                    padding: 10px;
                    }
                }
            }
            .tr_first{
            background-color: #d4eaf7;
            }
            .tr_second{
                width: 100%;
                display: none;
            }
        }
        button{
            width: fit-content;
            height: 25px;
            border: 0px;
            background-color: transparent;
            margin:2px;
        }
    }
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
}
</style>