<script setup lang="ts">
interface Props {
    message?: string
}
const props = withDefaults(defineProps<Props>(), {
    message: 'Возникла ошибка при получении данных'
});
</script>
<template>
    <p class="undefined">{{ props.message }}</p>
</template>
<style lang="scss">
.undefined {
    font-size: 22px;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    margin: 20px 0;
}
</style>