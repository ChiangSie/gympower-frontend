<template>
     <RouterLink to='/bento/bentopage2' class="btn_link" >
    <section class="bentobox6_info"  @click="handleButtonClick($event)">
        <div :class="['bentobox6_bg', { 'selected': isSelected, 'not-selected': !isSelected && isAnyBentoSelected }]" @click="selectBento(6)">
            <div class="bentobox6_con">
                <div class="bentobox6_txt">
                    <h3>{{ text }}</h3>
                </div>
                <div class="bentobox6_pic">
                    <img :src="six" alt="" />
                </div>
            </div>
        </div>
        
        <!-- <RouterLink to='/bento/bentopage2' class="btn_link" >
            <button class="bentobox_button" @click="handleButtonClick($event)">
                <p>{{ button_txt }}</p>
                <font-awesome-icon :icon="['fas', 'chevron-right']" class="custom_icon" />
            </button>
        </RouterLink> -->
    </section>
        </RouterLink>
</template>



<script>
import { useBentoStore } from '@/stores/bentobox';
import six from '/src/assets/img/bento_box_six.png'
// import { useRouter } from 'vue-router';

import { mapWritableState } from 'pinia';

export default {
    data() {
        return {
            six,
        }
    },
    setup() {
        const bentoStore = useBentoStore();
        // const router = useRouter();

        const selectBento = (id) => {
            bentoStore.setContainerId(id);
        };
        const handleButtonClick = (event) => {
            if (bentoStore.containerId === null || bentoStore.containerId === undefined) {
                event.preventDefault(); // 阻止默认导航行为
                event.stopPropagation(); // 阻止事件冒泡，确保提示框按钮不会触发导航
                alert('請選擇一個便當盒');
            }
        };
        return {
            selectBento,
            text: '滿腹六合一',
            button_txt: '下一步',
            bentoStore,
            handleButtonClick,
            // router,
        };
    },
    computed: {
        isSelected() {
            return this.bentoStore.containerId === 6;
        },
        isAnyBentoSelected() {
            return this.bentoStore.containerId !== null && this.bentoStore.containerId !== undefined;
        },
    },
    methods: {
        parseImg(imgURL) {
            return new URL(`../../../assets/img/${imgURL}`, import.meta.url).href;
        }
    },

}
</script>


<style lang="scss" scoped>


.bentobox6_pic {
    width: 12rem;
    aspect-ratio: 4/3.5;
    margin-right: 250px;
    overflow-clip-margin: content-box;
    overflow: clip;


    img {
        vertical-align: middle;
        width: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        cursor: pointer;
        transition: .3s;
        max-width: 100%; /* 圖片最大寬度 */


        &:hover {
            transform: scale(1.1);
            box-shadow: 5px 10px 10px #B6B7B9;
            opacity: 1;
        }
    }

}

.bentobox6_info {
    display: flex;
    flex-direction: column;
    align-items: center;

}

.bentobox6_bg {
    background: linear-gradient(90deg, #FEEFDA, #D4EAF7, #71c5efa2);
    border-radius: 340px 0 0 340px;
    width: 80%;
    margin-left: auto;
    max-width: 100%;
    /* 防止寬度超出視窗 */
    overflow: hidden;
    /* 隱藏溢出的內容 */
    box-sizing: border-box;
    /* 包括邊框和內距在寬度內 */
    &:hover .bentobox6_txt h3 {
        transform: scale(1.1);
        color: #00377A;
        cursor: pointer;
    }

}

.not-selected {
    opacity: 0.5;
}


@media screen and (max-width: 768px) {
    .bentobox6_bg {
        display: flex;
        flex-direction: column;
        border-radius: 0;
        width: 100%;
    }

    .bentobox6_con {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }

    .bentobox6_pic {
        aspect-ratio: 4 / 3.5;
        margin: auto;
    }

    .bentobox6_txt {
        margin-left: 10%;
        margin-bottom: 40px;
    }

}

.bentobox6_txt {
    display: flex;
    align-items: center;
    margin-right: 10%;

}

h3 {
    font-weight: 600;
    transition: transform 0.3s, color 0.3s;
    text-decoration: none;
  color: #002451;
}

.bentobox6_con {
    display: flex;
    justify-content: flex-end;
    width: 100%; /* 讓內容寬度適應父容器 */

}

.btn_link{
    text-decoration: none;
}
</style>