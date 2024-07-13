<template>
    <RouterLink to='/bento/bentopage2' class="btn_link">
        <section>
            <div :class="['bentobox4_bg', { 'selected': isSelected, 'not-selected': !isSelected && isAnyBentoSelected }]"
                @click="selectBento(4)">
                <div class="bentobox4_pic">
                    <img :src="four" alt="" />
                </div>
                <div class="bentobox4_txt">
                    <h3>{{ text }}</h3>
                </div>
            </div>
        </section>
    </RouterLink>
</template>

<script>
import { useBentoStore } from '@/stores/bentobox';
import four from '/src/assets/img/bento_box_four.png'
import { mapWritableState } from 'pinia';


export default {
    data() {
        return {
            four,
        }
    },
    setup() {
        const bentoStore = useBentoStore();

        const selectBento = (id) => {
            bentoStore.setContainerId(id);
        };
        return {
            selectBento,
            text: '饗食四合一',
            bentoStore,
        };
    },
    computed: {
        isSelected() {
            return this.bentoStore.containerId === 4;
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

};

</script>

<style lang="scss" scoped>
.bentobox4_pic {
    width: 12rem;
    aspect-ratio: 4 / 3.5;
    margin-left: 250px;
    overflow-clip-margin: content-box;
    overflow: clip;

    img {
        vertical-align: middle;
        width: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        cursor: pointer;
        transition: .3s;

        &:hover {
            transform: scale(1.1);
            box-shadow: 5px 10px 10px #B6B7B9;
            opacity: 1;
        }
    }
}

.bentobox4_info {
    display: flex;
    justify-content: flex-start;
    padding: 1rem 0;

    &:hover .bentobox4_txt h3 {
        transform: scale(1.1);
        color: #00377A;
        cursor: pointer;
    }
}

.bentobox4_bg {
    background: linear-gradient(-90deg, #FEEFDA, #D4EAF7, #71c5efa2);
    border-radius: 0 340px 340px 0;
    display: flex;
    justify-content: flex-start;
    width: 80%;
}

.not-selected {
    opacity: 0.5;
}

@media screen and (max-width: 768px) {
    .bentobox4_bg {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        border-radius: 0;

    }

    .bentobox4_pic {
        aspect-ratio: 4 / 3.5;
        margin: auto;
    }

    .bentobox4_txt {
        margin-right: 10%;
        margin-bottom: 40px;
    }
}

.bentobox4_txt {
    display: flex;
    align-items: center;
    margin-left: 10%;
}

.bentobox4_txt h3 {
    font-weight: 600;
    transition: transform 0.3s, color 0.3s;
    color: #002451;

}

.btn_link {
    text-decoration: none;
}
</style>
