<script setup lang="ts">
interface Props {
    title?: string;
}
const props = withDefaults(defineProps<Props>(), {
    title: "",
});
</script>
<template>
    <h2 class="trend__tv-title">
        {{ title }} <span class="icon-reg"></span>
    </h2>
</template>
<style lang="scss">
.trend__tv-title {
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 28px;
    margin-bottom: 40px;
    color: #FFF;
    text-transform: capitalize;
    &.solo__title{
        span{
            display: none;
        }
    }
    &.solo__title2{
        width: 100%;
    }
}

</style>