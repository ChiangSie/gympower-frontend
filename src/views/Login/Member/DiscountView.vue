<template>
    <section>
        <h2>專屬折扣</h2>
        <hr>
        <div class="dis_part">
            <button @click="fl(1)">全部</button>
            <button @click="fl(2)">已使用</button>
            <button @click="fl(3)">未使用/已失效</button>
            <hr style="margin: 0;">
            <div class="dis_card_area">
                <DiscountCard/>
            </div>
        </div>
    </section>
</template>
<script setup>
import DiscountCard from '@/component/DiscountCard.vue'
</script>
<style lang="scss" scoped>
hr{
    width: 100%;
    border-width: 1px;
    border-color: #000000;
}
section{
    width: 100%;
    .dis_part{
        width: 90%;
        margin: 15px auto;
        border: 1px solid black;
        border-radius: 15px;
        button{
            width: fit-content;
            margin: 10px;
        }
        .dis_card_area{
            width: 95%;
            margin: auto;
        }
    }
}
</style>