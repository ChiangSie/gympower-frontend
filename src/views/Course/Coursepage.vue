<template>
    <CourseDetail :productInfo="productInfo"/>

    <CourseList />

    <CourseRating />
{{productInfo}}
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
    methods: {
        fetchProduct() {
            fetch("../../../public/json/course.json")
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    this.responseData = json;
                    const sortedData = json.sort((a, b) => b.rating - a.rating);
                    this.displayData = sortedData;
                });
        },
         fetchInfo(){
            fetch("../../../public/json/course.json")
            .then(res => res.json())
            .then(json => {
                // 確認有沒有response
                this.productInfo = json.find(item =>
                {
                return item.id == this.$route.params.id
                })
            })
            .catch((error) => {
                console.log(`error: ${error}`);
            })
        }
    },
    data() {
        return {
           productInfo: {},
        }
    },
    watch: {
        '$route.params.id': {
            handler(newObj) { // newObj會是更動後的參數 
                console.log(newObj);
                this.fetchInfo()
            },
            deep: true
        }
    },
    mounted() {
        this.fetchInfo()
        this.fetchProduct()
    }
}
</script>

<style lang="scss" scoped></style>