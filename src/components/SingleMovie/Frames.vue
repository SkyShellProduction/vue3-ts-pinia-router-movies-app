<script setup lang="ts">
    import MainTitle from '@/components/UI/MainTitle.vue';
    import {Frames} from '@/store/types';
    const props = defineProps<{
        frames: Frames | null
    }>();
</script>
<template>
    <MainTitle title="Кадры из фильма" class="solo__title2"/>
    <div class="solo__images">
        <img :src="img.previewUrl" alt="" loading="lazy" v-for="img in frames?.items" :key="img.imageUrl">
    </div>
</template>