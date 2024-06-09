<template>
    <section class="category">
        <div class="button" v-for="btn in option" :key="btn.btn">
            <div>
                <a href="#" class="button_link">{{ btn.btn }}
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            option: [
                {
                    btn: '主食'
                },
                {
                    btn: '炸物'
                },
                {
                    btn: '肉類'
                },
                {
                    btn: '蔬菜類'
                },
                {
                    btn: '海鮮類'
                },
                {
                    btn: '蛋豆類'
                }
            ]
        }
    }
};
</script>
<style>
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

.button {
    display: inline-block;
    margin: 0 8px 0;
}

.button_link {
    display: inline-block;
    margin-top: 16px;
    padding: 6px 16px;
    border: 3px solid #71C4EF;
    background-color: #F9F8F7;
    color: #71C4EF;
    width: 120px;
    height: 40px;
    border-radius: 30px;
}

.button_link:hover {
    background-color: #71C4EF;
    color: #ffffff;
}
</style>