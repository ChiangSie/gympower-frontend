
<template>
    <section class="discount_page">
        <h2>專屬折扣</h2>
        <hr>
        <div class="dis_part">
            <div class="dis_button">
                <button @click="showall">全部</button>
                <button @click="fl(0)">未使用</button>
                <button @click="fl(1)">已使用</button>
            </div>
            <hr>
            <div class="dis_card_area">
                <DiscountCard v-for="item in showlist" :key="item.id" :disdata="item"/>
            </div>
        </div>
    </section>
</template>


<script>
import DiscountCard from '@/component/DiscountCard.vue'
export default{
    components:{
        DiscountCard
    },
    data(){
        return{
            discountlist:[
                {
                    id:1,
                    disnum1:90,
                    disnum2:9,
                    distime1: '2024/01/01',
                    distime2: '2024/1/31',
                    used:0
                },
                {
                    id:2,
                    disnum1:80,
                    disnum2:8,
                    distime1: '2024/02/01',
                    distime2: '2024/02/28',
                    used:1
                },
                {
                    id:3,
                    disnum1:90,
                    disnum2:9,
                    distime1:'2024/07/01',
                    distime2:'2024/07/31',
                    used:0
                },
                {
                    id:4,
                    disnum1:90,
                    disnum2:9,
                    distime1:'2024/05/01',
                    distime2:'2024/05/31',
                    used:1
                },
                {
                    id:5,
                    disnum1:90,
                    disnum2:9,
                    distime1:'2024/05/01',
                    distime2:'2024/05/31',
                    used:0
                }
            ],
            showlist:[],
        }
    },
    mounted(){
        this.showall();
    },
    methods: {
        showall(){
            this.showlist = this.discountlist;
        },
        fl(used){
            this.showlist = this.discountlist.filter(item => {
                return item.used === used ;
            })
        }
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
.discount_page{
    width: 100%;
    .dis_part{
        width: 90%;
        margin: 15px auto;
        border: 1.5px solid black;
        border-radius: 15px;
        .dis_button{
            width: 100%;
            padding: 0 20px;
            button{
            width: fit-content;
            margin: 10px;
            background-color: transparent;
            }
        }
        .dis_card_area{
            width: 95%;
            margin: auto;
        }
    }
}
</style>