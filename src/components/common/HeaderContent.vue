<script setup lang="ts">
    import {SingleMovie} from '@/store/types';
    const headerBg = require('@/assets/images/hero.png');
    interface Props {
        data: SingleMovie | null
        }
    const props = withDefaults(defineProps<Props>(), {
        data: null
    });
</script>
<template>
    <div class="header__content" :style="{backgroundImage: `url(${headerBg})`}">
        <div class="container">
            <div class="header__text">
                <h1 class="header__title">{{data?.nameRu || data?.nameEn}}</h1>
                <div class="header__balls">
                    <span class="header__year">{{data?.year}}</span>
                    <span class="logo__span header__rating  header__year ">{{data?.ratingAgeLimits}}+</span>
                    <div class="header__stars header__year"><span class="icon-solid"></span><strong>{{data?.ratingKinopoisk}}</strong></div>
                </div>
                <p class="header__descr">
                    {{data?.description}}
                </p>
                <div class="header__buttons">
                    <a :href="data?.webUrl" class="header__watch" target="_blank"><span class="icon-solid"></span>watch</a>
                    <router-link :to="`/movies/${data?.kinopoiskId}`" 
                        class="header__more header__watch movie__item">More information</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.header__content {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>