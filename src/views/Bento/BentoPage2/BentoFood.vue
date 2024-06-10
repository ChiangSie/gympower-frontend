<template>
    <div class="card-container">
        <div class="row">
            <div class="col-6 col-md-4 col-lg-4 col-xl-3" v-for="food in foods" :key="food.id">
                <div class="card">
                    <div class="price_tag">
                        <h4>{{ food.price }}</h4>
                    </div>
                    <div class="card_details">
                        <img :src="food.image" alt="食物照片" class="card-image" />
                        <button class="details_button"><a href="#">營養成分</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            foods: [
                {
                    id: '1',
                    price: '$20',
                    image: '/src/assets/img/food_1.png'
                },
                {
                    id: '2',
                    price: '$40',
                    image: '/src/assets/img/food_2.png'
                },
                {
                    id: '3',
                    price: '$50',
                    image: '/src/assets/img/food_3.png'
                },
                {
                    id: '4',
                    price: '$30',
                    image: '/src/assets/img/food_4.png'
                },
                {
                    id: '5',
                    price: '$20',
                    image: '/src/assets/img/food_5.png'
                },
                {
                    id: '6',
                    price: '$50',
                    image: '/src/assets/img/food_6.png'
                },
                {
                    id: '7',
                    price: '$40',
                    image: '/src/assets/img/food_7.png'
                },
                {
                    id: '8',
                    price: '$30',
                    image: '/src/assets/img/food_8.png'
                },

            ]
        };
    }
};
</script>

<style>
.card {
    position: relative;

}

.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background-color: #F9F8F7;
    justify-content: center;
    padding-top: 60px;

}

.row {
    display: flex;
    flex-wrap: wrap;
    width: 85%;
    justify-content: center;
}

.card_details {
    width: 240px;
    padding: 16px;
    text-align: center;
    margin: 30px 0 30px;
    /* border: 1px solid #ccc; */

}

/* ====================================================== */
/* 食物照片 */

.card_details img {
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 8px;
    margin-top: 20px;
    cursor: pointer;
}

.card-image {
    width: 100%;
    aspect-ratio: 4 / 3.5;
}

@media screen and (max-width: 768px) {
    .card_details {
        width: 200px;
    }

    .card_details img {
        width: 100%;
        aspect-ratio: 4 / 3.5;
    }
}

/* ====================================================== */
/* 價格標籤 */
.price_tag {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: linear-gradient(135deg, #FEEFDA, #F0EEE9, #8FBFE0);
    position: absolute;
    top: -30px;


    h4 {
        text-align: center;
        padding-top: 15px;
    }
}

@media screen and (max-width: 768px) {

    .price_tag {
        width: 55px;
        height: 55px;
    }

}

.details_button {
    background-color: #71C4EF;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 8px 16px;
    cursor: pointer;
    margin-top: 16px;
}

.details_button a {
    color: #fff;
}

.details_button:hover {
    background-color: #1aa1d6;

}
</style>
