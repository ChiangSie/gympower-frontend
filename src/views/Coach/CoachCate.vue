<!-- <template>
    <section class="category">
        <h3>{{ title }}</h3>
        <div class="button_list">
            <button class="btn_tag" @click="filter_tag('全部')">全部</button>
            <button class="btn_tag" @click="filter_tag('有氧運動')">有氧運動</button>
            <button class="btn_tag" @click="filter_tag('重量訓練')">重量訓練</button>
            <button class="btn_tag" @click="filter_tag('核心訓練')">核心訓練</button>
            <button class="btn_tag" @click="filter_tag('柔韌性訓練')">柔韌性訓練</button>
            <button class="btn_tag" @click="filter_tag('功能訓練')">功能訓練</button>
            <button class="btn_tag" @click="filter_tag('團體課程')">團體課程</button>
        </div>
        
        <div>
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
    mounted() {//原本是註解掉的
        fetch(`${import.meta.env.BASE_URL}json/c_coach.json`)
            .then((res) => res.json())
            .then((json) => {
                //確認有沒有response
                console.log(json)
                //顯示用
                this.sourceData = json
            })
            // .catch((error) => {
            //     console.error('Error fetching data:', error);
            // });
        // this.filter_tag('有氧運動');
                //原本是註解掉的
    },
    computed: {
        filterList() {
            if (this.currentTag == '') return this.sourceData;
            return this.sourceData.filter((coach) => {
                return coach.tag == this.currentTag
            })
        }
    },
    methods: {
        filter_tag(tagName) {
            this.currentTag = tagName

            // 大概這樣寫
            selectedExpert = []

            if('潛水證照、核心訓練、有氧運動'.includes(tagName)){   // true
                //找到 id ， push 進 selectedExpert
                // selectedExpert = [{},{},{},...]

                return selectedExpert
            }
            // else{  // false (不一定要寫)

            // }用v-for template

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
        margin: 20px 8px;
    }
}

@media screen and (max-width: 768px) {

    .button_list {
        button {
            margin: 8px;
        }
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
-->

<template>
    <section class="category">
        <h3>{{ title }}</h3>
        <div class="button_list">
            <button class="btn_tag" @click="filter_tag('全部')">全部</button>
            <button class="btn_tag" @click="filter_tag('有氧運動')">有氧運動</button>
            <button class="btn_tag" @click="filter_tag('重量訓練')">重量訓練</button>
            <button class="btn_tag" @click="filter_tag('核心訓練')">核心訓練</button>
            <button class="btn_tag" @click="filter_tag('柔韌性訓練')">柔韌性訓練</button>
            <button class="btn_tag" @click="filter_tag('功能訓練')">功能訓練</button>
            <button class="btn_tag" @click="filter_tag('團體課程')">團體課程</button>
        </div>
        
        <div>
            <CoachCard :coaches="filterCoachData" @show-coachInfo="showCoachInfo" />
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
            title: 'GYM力專業教練團隊',
            coachData: [],
            currentTag: '全部',
            selectedCoach: null
        }
    },
    mounted() {
        fetch('/json/c_coach.json')
            .then((res) => res.json())
            .then((json) => {
                this.coachData = json;
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    },
    computed: {
        filterCoachData() {
            if (this.currentTag === '全部') return this.coachData;
            return this.coachData.filter((coach) => coach.tag.includes(this.currentTag));
        }
    },
    methods: {
        filter_tag(tagName) {
            this.currentTag = tagName;
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
        margin: 20px 8px;
    }
}

@media screen and (max-width: 768px) {
    .button_list {
        button {
            margin: 8px;
        }
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
        border: 2.5px solid #002451;
        cursor: pointer;
    }
}
</style>

