<template>
    <CourseDetail />

    <CourseList />

    <CourseRating />

</template>

<script setup>
import CourseDetail from '../Course/Courseinfo/CourseDetail.vue';
import CourseList from '../Course/Courseinfo/CourseList.vue';
import CourseRating from './Courseinfo/CourseRating.vue';

</script>

<script>
export default {
    components: {
        CourseDetail,
        CourseList,
        CourseRating
    },

    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped></style>