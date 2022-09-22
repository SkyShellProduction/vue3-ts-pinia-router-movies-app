<script setup lang="ts">
    import MainTitle from '@/components/UI/MainTitle.vue';
    import { useGenresStore } from '@/store/genresData';
    const genres = useGenresStore();
</script>
<template>
    <div class="popular__genres">
            <div class="container">
                <MainTitle title="Popular Genres"/>
                <div class="popular__genres-grid">
                    <div class="popular__genres-item" v-for="item in genres.genresData" :key="item.name">
                        <img :src="item.img" alt="">
                        <span class="popular__genres-span">{{item.name}}</span>
                    </div>
                </div>
            </div>
        </div>
</template>