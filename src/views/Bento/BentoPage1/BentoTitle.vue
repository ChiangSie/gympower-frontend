<template>
    <section class="bento_title">
        <p>{{ subtitle_txt }}</p>
        <h1>{{ title_txt }}</h1>
    </section>
</template>

<script>
export default {
    data() {
        return {
            title_txt: '選擇餐盒規格',
            subtitle_txt: 'STEP 1'
        }
    }
}
</script>

<style lang="scss" scoped>
h1 {
    display: flex;
    justify-content: center;
}

p {
    display: flex;
    justify-content: center;
}

.bento_title {
    padding-top: 100px;
}
</style>