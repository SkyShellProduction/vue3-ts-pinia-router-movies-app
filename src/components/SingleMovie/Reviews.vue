<script setup lang="ts">
    import MainTitle from '@/components/UI/MainTitle.vue';
    import {Reviews} from '@/store/types';
    const props = defineProps<{
        reviews: Reviews | null
    }>();
</script>
<template>
    <div class="solo__reviews">
        <MainTitle title="Отзывы" />
        <div class="review__item" v-for="rev in reviews?.items" :key="rev.kinopoiskId">
            <span>{{rev.author}}</span>
            <p class="review__descr">{{rev.description}}</p>
        </div>
    </div>
</template>