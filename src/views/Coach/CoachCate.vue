<template>
    <section class="category">
        <h3>{{ title }}</h3>
        <div class="button_list">
            <button class="btn_tag" @click="filter_tag('有氧運動')">有氧運動</button>
            <button class="btn_tag" @click="filter_tag('重量訓練')">重量訓練</button>
            <button class="btn_tag" @click="filter_tag('核心訓練')">核心訓練</button>
            <button class="btn_tag" @click="filter_tag('柔韌性訓練')">柔韌性訓練</button>
            <button class="btn_tag" @click="filter_tag('功能訓練')">功能訓練</button>
            <button class="btn_tag" @click="filter_tag('團體課程')">團體課程</button>
        </div>
        <div v-if="sourceData.length === 0">Loading...</div>
        <div v-else>
            <CoachCard :coaches="filterList" @show-coachInfo="showCoachInfo" />
        </div>
    </section>
</template>

<script>
import CoachCard from './CoachCard.vue'

export default {
    components: {
        CoachCard
    },
    data() {
        return {
            title: '',
            sourceData: [],
            currentTag: '',
            selectedFood: null
        }
    },
    mounted() {
        fetch(`${import.meta.env.BASE_URL}json/c_coach.json`)
            .then((res) => res.json())
            .then((json) => {
                //確認有沒有response
                console.log(json)
                //顯示用
                this.sourceData = json
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    },
    computed: {
        filterList() {
            if (this.currentTag == '') return this.sourceData
            return this.sourceData.filter((coach) => {
                return coach.tag == this.currentTag
            })
        }
    },
    methods: {
        filter_tag(tagName) {
            this.currentTag = tagName
        },
        showCoachInfo(coach) {
            this.selectedCoach = coach;
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
}

.button_list {
    button {
        display: inline-block;
        margin: 0 8px 0;
    }
}


.btn_tag {
    display: inline-block;
    margin-top: 16px;
    padding: 8px 16px;
    border: 2px solid #71C4EF;
    background-color: #F9F8F7;
    color: #71C4EF;
    border-radius: 50px;
    width: 120px;

    &:hover {
        background-color: #71C4EF;
        color: #fff;
        cursor: pointer;
    }
}
</style>