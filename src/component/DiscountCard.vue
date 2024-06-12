<template>
    <div class="card">
        <div class="card_left">
            <span>{{disdata.disnum1}}%</span>
        </div>
        <div class="card_right">
            <span>{{disdata.disnum2}}折-折價劵 (僅可用於單品項目)</span>
            <span>使用期限 : {{ disdata.distime1 }} - {{ disdata.distime2 }}</span>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        disdata:{
            type:Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
.card{
    width: 80%;
    padding: 25px 0;
    margin: 20px auto;
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