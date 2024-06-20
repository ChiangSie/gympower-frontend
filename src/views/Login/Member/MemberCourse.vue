
<template>
    <section>
        <h2>會員課程</h2>
        <hr>
        <FullCalendar />
    </section>
</template>
<script>
import FullCalendar from '/src/component/FullCalender.vue';
export default {
  components: { FullCalendar }
};
</script>
<style lang="scss" scoped>
hr{
    width: 100%;
    border-width: 1px;
    border-color: #000000;
    margin: 10px 0;
}
</style>