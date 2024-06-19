<template>
    <section class="category">
        <div class="button_list">
            <button class="btn_tag" @click="filter_tag('')">全部</button>
            <button class="btn_tag" @click="filter_tag('主食')">主食</button>
            <button class="btn_tag" @click="filter_tag('肉類')">肉類</button>
            <button class="btn_tag" @click="filter_tag('蔬菜類')">蔬菜類</button>
            <button class="btn_tag" @click="filter_tag('海鮮類')">海鮮類</button>
            <button class="btn_tag" @click="filter_tag('蛋豆類')">蛋豆類</button>
        </div>
        <div v-if="sourceData.length === 0">Loading...</div>
        <div v-else>
            <!-- <div v-for="food in sourceData" :key="food.id" :food="food">{{ sourceData }}</div> -->
            <!-- <BentoFood >
                {{sourceData }}
            </BentoFood> -->
            <BentoFood :foods="filterList" @show-nutrition="showNutrition" />
        </div>
    </section>
</template>

<script>
import BentoFood from './BentoFood.vue'


export default {
    components: {
        BentoFood
    },
    data() {
        return {
            sourceData: [],
            currentTag: '',

        }
    },
    mounted() {
        fetch(`${import.meta.env.BASE_URL}json/bento.json`)
            .then((res) => res.json())
            .then((json) => {
                //確認有沒有response
                console.log(json)
                //顯示用
                this.sourceData = json
            })
    },
    computed: {
        filterList() {
            if (this.currentTag == '') return this.sourceData
            return this.sourceData.filter((food) => {
                return food.tag == this.currentTag
            })
        }
    },
    methods: {
        clear() {
            //     this.sourceData = this.foods;
        },
        filter_tag(tagName) {
            this.currentTag = tagName
            // this.sourceData = this.foods.filter(food => {
            //     return food.tag === tagName;
            // });
        }
    }
}

</script>

<style lang="scss" scoped>
* {
    text-decoration: none;
}

.category {
    text-align: center;
    padding-top: 20px;
}

@media screen and (min-width: 1130px) {
    .category {
        padding-top: 50px;
    }
}

.button_list {
    display: inline-block;
    margin: 0 8px 0;
}

.btn_tag {
    display: inline-block;
    margin: 16px 16px;
    padding: 6px 16px;
    border: 3px solid #71c4ef;
    background-color: #f9f8f7;
    color: #71c4ef;
    width: 120px;
    height: 40px;
    border-radius: 30px;
}

.btn_tag:hover {
    background-color: #71c4ef;
    color: #ffffff;
    cursor: pointer;
}
</style>
