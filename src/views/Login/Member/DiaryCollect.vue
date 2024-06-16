<template>
    <section class="diarycollectpage">
        <h2>日記收藏</h2>
        <hr>
        <div class="pagination">
            <button @click="currentPage = 1"><i class="fa-solid fa-angles-left"></i></button>
            <button @click="prevPage"><i class="fa-solid fa-arrow-left"></i></button>
            <button v-for="n in totalPages" @click="currentPage = n" :key="n.n">{{ n }}</button>
            <button @click="nextPage"><i class="fa-solid fa-arrow-right"></i></button>
            <button @click="currentPage = totalPages"><i class="fa-solid fa-angles-right"></i></button>
        </div>

        <div class="diarycollectcard" v-for="item in paginateddiarylist" :key="item.id">
            <span class="linetitle"> <span>{{ item.date }}</span> <span>{{ item.author }}</span> </span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
            <h4>{{ item.detail }}</h4>
            <div class="list_part">
                <li v-for="item2 in item.detailcontent" :key="item2.no">{{ item2.content }}</li>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    data(){
        return{
            currentPage: 1,
            pageSize: 2,
            totalPages: 0 ,
            diarylist:[
                {
                    id:1,
                    date:"2024/05/31",
                    author:"Sam",
                    title:"健康飲食：健身者的營養指南",
                    content:"在健身的過程中，飲食扮演著至關重要的角色。以下是一些關於如何通過飲食來支持健身目標的建議。",
                    detail:"平衡飲食",
                    detailcontent:[
                        {
                            no:1,
                            content:"蛋白質是肌肉修復和增長的基石。健身者應該攝取足夠的蛋白質來源，如雞肉、魚、蛋、豆類和乳製品......"
                        },
                        {
                            no:2,
                            content:"蛋白質是肌肉修復和增長的基石。健身者應該攝取足夠的蛋白質來源，如雞肉、魚、蛋、豆類和乳製品......"
                        },
                    ]
                },
                {
                    id: 2,
                    date: "2024/05/31",
                    author: "Timmy",
                    title: "健康飲食：健身者的營養指南",
                    content: "在健身的過程中，飲食扮演著至關重要的角色。以下是一些關於如何通過飲食來支持健身目標的建議。",
                    detail: "平衡飲食",
                    detailcontent:[
                        {
                            no:1,
                            content:"蛋白質是肌肉修復和增長的基石。健身者應該攝取足夠的蛋白質來源，如雞肉、魚、蛋、豆類和乳製品......"
                        },
                        {
                            no:2,
                            content:"蛋白質是肌肉修復和增長的基石。健身者應該攝取足夠的蛋白質來源，如雞肉、魚、蛋、豆類和乳製品......"
                        },
                    ]
                },
                {
                    id: 3,
                    date: "2024/05/31",
                    author: "Timmy",
                    title: "健康飲食：健身者的營養指南",
                    content: "在健身的過程中，飲食扮演著至關重要的角色。以下是一些關於如何通過飲食來支持健身目標的建議。",
                    detail: "平衡飲食",
                    detailcontent:[
                        {
                            no:1,
                            content:"蛋白質是肌肉修復和增長的基石。健身者應該攝取足夠的蛋白質來源，如雞肉、魚、蛋、豆類和乳製品......"
                        },
                        {
                            no:2,
                            content:"蛋白質是肌肉修復和增長的基石。健身者應該攝取足夠的蛋白質來源，如雞肉、魚、蛋、豆類和乳製品......"
                        },
                    ]
                },
            ]
        }
    },
    computed: {
        paginateddiarylist() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.diarylist.slice(start, end);
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
        }
    },
    mounted() {
        this.totalPages = Math.ceil(this.diarylist.length / this.pageSize);
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
    .diarycollectcard{
        width: 100%;
        border-radius: 15px;
        border: 1px solid black;
        padding: 35px;
        margin: 20px 0;
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
            width: 60%;
            font-size: 14px;
        }
        h4{
            margin: 10px 0;
        }
        .list_part{
            width: 95%;
            margin: auto;
            li{
            list-style: none;
            margin: 5px 0;
        }
        }
    }
}
</style>