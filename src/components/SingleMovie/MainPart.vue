<script setup lang="ts">
import MainTitle from '@/components/UI/MainTitle.vue';
import { SingleMovie } from '@/store/types';
interface Props {
    mainData: SingleMovie | null
}
const props = withDefaults(defineProps<Props>(), {
    mainData: null
});
</script>
<template>
    <div class="solo__img">
        <img :src="mainData?.posterUrlPreview" alt="">
        <a :href="mainData?.webUrl" class="solo__link header__watch" target="_blank">Смотреть фильм</a>
    </div>
    <div class="solo__content">
        <MainTitle :title="mainData?.nameRu || mainData?.nameEn || ''" />
        <ul>
            <li class="solo__countries">Страны: {{mainData?.countries}}</li>
            <li class="solo__countries">Жанры: {{mainData?.genres}}</li>
            <li class="solo__countries">Продолжительность: {{mainData?.filmLength}}</li>
            <li class="solo__countries">Год:{{mainData?.year}}</li>
            <li class="solo__countries">Возрастной рейтинг: {{mainData?.ratingAgeLimits}}</li>
            <li class="solo__countries">Слоган: {{mainData?.slogan}}</li>
            <li class="solo__countries">Описание: {{mainData?.description}}</li>
        </ul>
    </div>
</template>