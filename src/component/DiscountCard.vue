<template>
    <div class="card">
        <div class="card_left">
            <span>90%</span>
        </div>
        <div class="card_right">
            <span>9折-折價劵 (僅可用於單品項目)</span>
            <span>使用期限 : 2024/05/20 ~ 2024/08/31</span>
        </div>
    </div>
</template>
<script></script>
<style lang="scss" scoped>
.card{
    width: 80%;
    height: 70px;
    margin: 10px auto;
    border: 1px solid black;
    border-radius: 15px;
    display: flex;
    .card_left{
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card_right{
        width: 70%;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
    }
}
</style>