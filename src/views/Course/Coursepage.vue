<template>
    <CourseDetail/>

    <CourseList/>

    <CourseSelected/>

</template>

<script setup>
import CourseDetail from '../Course/Courseinfo/CourseDetail.vue';
import CourseList from '../Course/Courseinfo/CourseList.vue';
import CourseSelected from './Courseinfo/CourseSelected.vue';

</script>

<script>
export default {
  components: {
    CourseDetail,
    CourseList,
    CourseSelected
    },

    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>