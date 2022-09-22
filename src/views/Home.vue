<script setup lang="ts">
  import HeaderContent from '@/components/common/HeaderContent.vue';
  import { defineAsyncComponent } from 'vue';
  import { useMainStore } from '@/store';
  import { storeToRefs } from 'pinia';
  const ShowError = defineAsyncComponent(() => import('@/components/UI/ShowError.vue'));
  const TopMovies = defineAsyncComponent(() => import('@/components/TopMovies.vue'));
  const PopularGenres = defineAsyncComponent(() => import('@/components/PopularGenres.vue'));
  const CommingSoon = defineAsyncComponent(() => import('@/components/CommingSoon.vue'));
  const RegisterNow = defineAsyncComponent(() => import('@/components/RegisterNow.vue'));
  const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  const curDate = `${months[new Date().getMonth()]} ${new Date().getFullYear()}`;
  const {mainData, headerData, error} = storeToRefs(useMainStore());
</script>
<template>
  <div class="home">
    <HeaderContent :data="headerData" />
    <TopMovies title="Trending TV Shows" :movies="mainData.top?.films" v-if="!error" />
    <ShowError v-else />
    <PopularGenres />
    <TopMovies :title="`awaited movies of ${curDate}`" :movies="mainData.awaited?.releases"
      v-if="!error" />
    <ShowError v-else />
    <CommingSoon />
    <RegisterNow />
  </div>
</template>
