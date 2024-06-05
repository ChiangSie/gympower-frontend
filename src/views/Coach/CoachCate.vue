<template>
    <section class="category">
        <h3>{{ title }}</h3>
        <div class="button" v-for="btn in option" :key="btn.btn">
            <div>
                <a href="#" class="button-link">{{ btn.btn }}
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
    return {
        title: '專業陣容',
        option: [
        { 
            btn: '有氧運動' 
        },
        { 
            btn: '重量訓練' 
        },
        { 
            btn: '核心訓練' 
        },
        { 
            btn: '柔韌性訓練' 
        },
        { 
            btn: '功能訓練' 
        },
        { 
            btn: '團體課程' 
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
}
.button{
    display: inline-block;
    margin: 0 8px 0;
}
.button-link {
    display: inline-block;
    margin-top: 16px;
    padding: 8px 16px;
    border: 1px solid #71C4EF;
    background-color: #F9F8F7;
    color: #71C4EF;
    border-radius: 5%;
}
</style>