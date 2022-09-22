<script setup lang="ts">
    import MainTitle from '@/components/UI/MainTitle.vue';
    import {Facts} from '@/store/types';
    const props = defineProps<{
        facts: Facts | null
    }>();
</script>
<template>
    <ul class="solo__facts">
        <MainTitle title="Интересные факты"/>
        <li class="solo__facts" v-for="(item, i) in facts?.items" v-html="`${i+1}. ${item.text}`"></li>
    </ul>
</template>