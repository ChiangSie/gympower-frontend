<template>
    <section class="coach">
        <h1>{{ title }}</h1>
        <div class="coach_banner">
            <img :src="imgSrc" alt="banner" />
        </div>
      
    </section>
</template>

<script>
export default{
    data() {
        return {
            imgSrc:'/src/assets/img/coach.png',
            title: '教練介紹'
        }
    }
}
</script>

<style lang="scss" scoped>
.coach{
    width: 100%;
    margin-top: 67px;
    padding: 3% 12%;
    display: flex;
    justify-content: center;
    position: relative;
        .coach_banner{
        width: 70%;
        aspect-ratio: 2.5/1;
        border-radius: 10px;
        overflow: hidden;
        } 
        img{
        vertical-align: middle;
        width: 100%;
        aspect-ratio: 2.5/1;
        object-fit: cover;   
        }
}

</style>