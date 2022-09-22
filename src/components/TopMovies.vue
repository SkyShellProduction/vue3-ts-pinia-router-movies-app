<script setup lang="ts">
import MainTitle from '@/components/UI/MainTitle.vue';
import {Swiper, SwiperSlide} from "swiper/vue";
import {Films} from '@/store/types';
import 'swiper/css';

const props = defineProps<{
  title: string
  movies?: Films[]
}>();

const breakpoints = {
    1440: {
        slidesPerView: 6,
    },
    1200: {
        slidesPerView: 5,
    },
    960: {
        slidesPerView: 4,
    },
    720: {
        slidesPerView: 3,
    },
    500: {
        slidesPerView: 2,
    },
}
</script>
<template>
    <div class="trend__tv">
        <div class="container">
            <MainTitle :title="title"/>
            <Swiper :loop="true" :space-between="27" :breakpoints="breakpoints" class="trend__tv-slider">
                <SwiperSlide v-for="movie in movies" :key="movie.filmId">
                    <router-link class="movie__item" :to="`/movies/${movie.filmId}`">
                        <img :src="movie.posterUrlPreview" alt="" loading="lazy">
                    </router-link>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>