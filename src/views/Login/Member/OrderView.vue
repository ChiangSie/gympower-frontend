<template>
    <div class="order_page">
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
                        <td>{{ item.serialnumber}}</td> 
                        <td>{{ item.date }}</td>
                        <td>$ {{ item.sumprice }}</td>
                        <td>{{ item.type ?  '已取餐' : '未取餐' }}</td>
                    </tr>
                    <tr class="tr_first tr_second" >
                        <td>品名</td>
                        <td>數量</td>
                        <td>價錢</td>
                        <td>優惠卷使用</td>
                    </tr>
                    <tr v-for="sec in item.detail" :key="sec.no" class="tr_second">
                        <td>{{ sec.name}}</td>
                        <td>{{ sec.amount }}</td>
                        <td>{{ sec.price }}</td>
                        <td>{{ sec.used ? '使用優惠卷' : '未使用優惠卷'}}</td>
                    </tr>
                </table>
            </div>
            <button @click="showtr($event)"><i class="fa-solid fa-circle-info"></i> 查看明細</button>
        </div>
        
    </div>
</template>


<script>
export default{
    data(){
        return{
            orderDataList:[
                {
                    id : 1,
                    serialnumber : '1111111',
                    date : '2024/05/31',
                    sumprice : 450,
                    type : 0 ,
                    detail : [
                        {
                            no : 1,
                            name : 'aaa',
                            amount : 2,
                            price : 150,
                            used : 0
                        },
                        {
                            no : 2,
                            name : 'bbb',
                            amount : 1,
                            price : 200,
                            used : 1
                        },
                        {
                            no : 3,
                            name : 'ccc',
                            amount : 1,
                            price : 100,
                            used : 0
                        }
                    ]
                },
                {
                    id : 2,
                    serialnumber : '22222222',
                    date : '2024/07/31',
                    sumprice : 600,
                    type : 0 ,
                    detail : [
                        {
                            no : 1,
                            name : 'aaa',
                            amount : 1,
                            price : 200,
                            used : 1
                        },
                        {
                            no : 2,
                            name : 'bbb',
                            amount : 1,
                            price : 200,
                            used : 0
                        },
                        {
                            no : 3,
                            name : 'ccc',
                            amount : 1,
                            price : 100,
                            used : 0
                        },
                        {
                            no : 4,
                            name : 'ddd',
                            amount : 1,
                            price : 100,
                            used : 0
                        }
                    ]
                },
                {
                    id : 3,
                    serialnumber : '333',
                    date : '2024/07/31',
                    sumprice : 600,
                    type : 0 ,
                    detail : [
                        {
                            no : 1,
                            name : 'aaa',
                            amount : 1,
                            price : 200,
                            used : 1
                        },
                        {
                            no : 2,
                            name : 'bbb',
                            amount : 1,
                            price : 200,
                            used : 0
                        },
                        {
                            no : 3,
                            name : 'ccc',
                            amount : 1,
                            price : 100,
                            used : 0
                        },
                        {
                            no : 4,
                            name : 'ddd',
                            amount : 1,
                            price : 100,
                            used : 0
                        }
                    ]
                },
                {
                    id : 4,
                    serialnumber : '44444',
                    date : '2024/07/31',
                    sumprice : 600,
                    type : 0 ,
                    detail : [
                        {
                            no : 1,
                            name : 'aaa',
                            amount : 1,
                            price : 200,
                            used : 1
                        },
                        {
                            no : 2,
                            name : 'bbb',
                            amount : 1,
                            price : 200,
                            used : 0
                        },
                    ]
                },
                {
                    id : 5,
                    serialnumber : '55555',
                    date : '2024/07/31',
                    sumprice : 600,
                    type : 0 ,
                    detail : [
                        {
                            no : 1,
                            name : 'aaa',
                            amount : 1,
                            price : 200,
                            used : 1
                        },
                        {
                            no : 2,
                            name : 'bbb',
                            amount : 1,
                            price : 200,
                            used : 0
                        },
                    ]
                },
                {
                    id : 6,
                    serialnumber : '666666',
                    date : '2024/07/31',
                    sumprice : 600,
                    type : 0 ,
                    detail : [
                        {
                            no : 1,
                            name : 'aaa',
                            amount : 1,
                            price : 200,
                            used : 1
                        },
                        {
                            no : 2,
                            name : 'bbb',
                            amount : 1,
                            price : 200,
                            used : 0
                        },
                    ]
                },
                {
                    id : 7,
                    serialnumber : '777777777777',
                    date : '2024/07/31',
                    sumprice : 600,
                    type : 0 ,
                    detail : [
                        {
                            no : 1,
                            name : 'aaa',
                            amount : 1,
                            price : 200,
                            used : 1
                        },
                        {
                            no : 2,
                            name : 'bbb',
                            amount : 1,
                            price : 200,
                            used : 0
                        },
                    ]
                },
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
            console.log(`Paginated list:`, this.orderDataList.slice(start, end));
            return this.orderDataList.slice(start, end);
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
        }
    },
    mounted() {
        this.totalPages = Math.ceil(this.orderDataList.length / this.pageSize);
    }
}
</script>



<style lang="scss" scoped>
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