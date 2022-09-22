<script setup lang="ts">
import { computed } from '@vue/reactivity';
interface Props {
    modelValue?: string | number
}
const props = withDefaults(defineProps<Props>(), {
    modelValue: ''
});
const emits = defineEmits(['update:modelValue']);
const message = computed({
    get: () => props.modelValue,
    set: value => emits('update:modelValue', value)
})
</script>
<template>
    <input v-bind="$attrs" placeholder="search something?" class="movies__input" v-model="message">
</template>
<style lang="scss">
.movies__input {
    display: block;
    font-size: 18px;
    border-radius: 15px;
    width: 100%;
    padding: 5px 15px;

    &::placeholder {
        color: crimson;
        text-transform: capitalize;
    }
}
</style>