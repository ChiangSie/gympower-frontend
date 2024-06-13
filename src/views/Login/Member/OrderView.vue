<template>
    <div class="order_page">
        <h2>訂單查詢</h2>
        <hr>
        <div class="order_search" v-for="item in orderlist" :key="item.id">
            <div class="order_card" >
                <table>
                    <tr>
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
                    <tr class="listhidden">
                        <td>品名</td>
                        <td>數量</td>
                        <td>價錢</td>
                        <td>優惠卷使用</td>
                    </tr>
                    <tr v-for="sec in item.detail" :key="sec.no" class="listhidden">
                        <td>{{ sec.name}}</td>
                        <td>{{ sec.amount }}</td>
                        <td>{{ sec.price }}</td>
                        <td>{{ sec.used ? '使用優惠卷' : '未使用優惠卷'}}</td>
                    </tr>
                </table>
            </div>
            <button>查看明細</button>
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return{
            orderlist:[
                {
                    id : 1,
                    serialnumber : 1111111,
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
                    serialnumber : 22222222,
                    date : '2024/07/31',
                    sumprice : 600,
                    type : 0 ,
                    detail : [
                        {
                            no : 1,
                            name : 'aaa',
                            amount : 2,
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
                            used : 1 
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
            ]
        }
    },
    // methods: {
    //     toggleHidden() {
    //         var hiddenTrs = document.querySelectorAll('.listhidden');
    //         hiddenTrs.forEach(function(tr) {
    //         tr.style.display = tr.style.display === 'none'? '' : 'none';
    //         });
    //     }
    // }
}

</script>

<style lang="scss" scoped>
.order_page{
    width: 100%;
    .order_search{
        margin: 30px 0;
        .order_card{
        border-radius: 15px;
        border: 1px solid black;
        overflow: hidden;
        table{
            width: 100%;
            text-align: center;
            tr{
                border: 1px black solid;
                padding: 10px;
                td{
                    border: 1px black solid;
                    padding: 10px;
                    }
                }
            }
        }
        button{
            margin: 10px;
        }
    }
}
</style>