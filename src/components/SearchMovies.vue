<script setup lang="ts">
import { useRouter } from 'vue-router';
import {Films} from '@/store/types';

const props = defineProps<{
  movies?: Films[]
}>()
const router = useRouter();
</script>
<template>
    <div class="some__item" v-for="item in movies" 
        :key="item.filmId" 
        @click="router.push(`/movies/${item.filmId}`)">
        <div class="some__img">
            <img :src="item.posterUrlPreview" alt="" loading="lazy">
            <span class="some__rating">{{item.rating}}</span>
        </div>
        <h3 class="some__title">{{item.nameRu || item.nameEn}}</h3>
    </div>
</template>