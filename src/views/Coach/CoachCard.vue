<template>
    <div class="card-container">
        <div class="row">
            <div class="col-6 col-md-4 col-lg-4 col-xl-3" v-for="coach in coaches" :key="coach.id">
                <div class="card">
                    <img :src="parseImg(coach.coach_img)" alt="教練照片" class="card-image" />
                    <h3>{{ coach.coach_name }}</h3>
                    <!-- <p>教練簡介：{{ coach.expertise }}</p> -->
                    <!-- <p class="rating">
                        <span class="stars">⭐⭐⭐⭐⭐</span>
                        <span>({{ coach.rating }}顆星)</span>
                    </p> -->
                    <button class="details-button" @click="showCoachInfo(coach)">詳情介紹</button>
                </div>
            </div>
        </div>
    </div>
    <div v-if="selectedCoach" class="lightbox" @click.self="closeCoachInfo">
        <div class="lightbox-content">
            <CoachInfo :coach="selectedCoach" @close="closeCoachInfo" />
        </div>
    </div>
</template>

<script>
import CoachInfo from './CoachInfo.vue';

export default {
    components: {
        CoachInfo
    },
    props: {
        coaches: {
            type: Array,
            default: () => [],
        }
    },
    data() {
        return {
            selectedCoach: null,
            coachData: []
        };
    },
    computed: {
        coaches() {
            return this.coachData;
        }
    },
    methods: {
        showCoachInfo(coach) {
            this.selectedCoach = coach;
            document.body.style.overflow = 'hidden';
        },
        closeCoachInfo() {
            this.selectedCoach = null;
            document.body.style.overflow = 'auto';
        },
        parseImg(imgURL) {
            return new URL(`/src/assets/img/c_coach/${imgURL}`, import.meta.url).href;
        }
    },
    created() {
        let url = "http://localhost/api/get_coach.php";
        fetch(url)
            .then(response => response.json())
            .then(result => {
                if (result.code === 200) {
                    this.coachData = result.data.list.map(item => ({
                        ...item,
                        coach_rcm: parseInt(item.coach_rcm)
                    }));
                } else {
                    console.error('API返回錯誤:', result.msg);
                }
            })
            .catch(error => {
                console.error('獲取數據時出錯:', error);
            });
    },
}
</script>

<style lang="scss" scoped>
* {
    text-decoration: none;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background-color: #F9F8F7;
    justify-content: center;
}

.row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    gap: 16px;
}

.card {
    width: 260px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 30px 0 30px;
}

.card-image {
    width: 100%;
    border-radius: 8px;
    // height: 300px;
}

.rating {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
}

.stars {
    color: gold;
}

.details-button {
    background-color: #21c4ff;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 8px 16px;
    cursor: pointer;
    margin-top: 16px;
}

.details-button a {
    color: #fff;
}

.details-button:hover {
    background-color: #1aa1d6;

}
</style>
