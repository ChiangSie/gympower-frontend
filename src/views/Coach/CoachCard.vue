<template>
    <div class="card-container">
    <div class="row">
        <div class="col-6 col-md-4 col-lg-4 col-xl-3" v-for="coach in coaches" :key="coach.id">
        <div class="card">
            <img :src="coach.image" alt="教練照片" class="card-image" />
            <h3>{{ coach.name }}</h3>
            <p>{{ coach.expertise }}</p>
            <p class="rating">
            <span class="stars">⭐⭐⭐⭐⭐</span>
            <span>({{ coach.rating }}顆星)</span>
            </p>
            <button class="details-button"><a href="#">詳情介紹</a></button>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
        coaches: [
        {
            id: '1',
            name: '李俊輝',
            expertise: '專業領域：核心訓練、有氧運動',
            rating: '4.8',
            image: '/src/assets/img/coach.png'
        },
        {
            id: '2',
            name: '李俊英',
            expertise: '專業領域：核心訓練、有氧運動',
            rating: '4.8',
            image: '/src/assets/img/coach.png'
        },
        {
            id: '3',
            name: '李俊英',
            expertise: '專業領域：核心訓練、有氧運動',
            rating: '4.8',
            image: '/src/assets/img/coach.png'
        },
        {
            id: '4',
            name: '李俊英',
            expertise: '專業領域：核心訓練、有氧運動',
            rating: '4.8',
            image: '/src/assets/img/coach.png'
        },
        {
            id: '5',
            name: '李俊英',
            expertise: '專業領域：核心訓練、有氧運動',
            rating: '4.8',
            image: '/src/assets/img/coach.png'
        },
        {
            id: '6',
            name: '李俊英',
            expertise: '專業領域：核心訓練、有氧運動',
            rating: '4.8',
            image: '/src/assets/img/coach.png'
        },

        ]
    };
    }
};
</script>

<style lang="scss" scoped>
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
.details-button a{
        color: #fff;
    }
.details-button:hover {
    background-color: #1aa1d6;
    
}

</style>
