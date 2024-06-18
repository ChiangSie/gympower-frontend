<template>
    <BentoSelect />
    <BentoCate />
    <BentoFood />


</template>

<script>
import BentoSelect from './BentoSelect.vue'
import BentoCate from './BentoCate.vue'
import BentoFood from './BentoFood.vue'




export default {
    components: {
        BentoSelect,
        BentoCate,
        BentoFood,

    }
};
</script>

<style lang="scss" scoped></style>