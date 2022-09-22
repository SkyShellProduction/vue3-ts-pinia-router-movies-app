<script setup lang="ts">
import MainPart from '@/components/SingleMovie/MainPart.vue';
import { defineAsyncComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMainStore } from '@/store';
import { storeToRefs } from 'pinia';
const Facts = defineAsyncComponent(() => import('@/components/SingleMovie/Facts.vue'));
const Frames = defineAsyncComponent(() => import('@/components/SingleMovie/Frames.vue'));
const Reviews = defineAsyncComponent(() => import('@/components/SingleMovie/Reviews.vue'));
const ShowError = defineAsyncComponent(() => import('@/components/UI/ShowError.vue'));
const route = useRoute();
const store = useMainStore();
const { singleMovie, facts, frames, reviews, error} = storeToRefs(store);
if(isNaN(+route.params.id)) useRouter().push('/');
store.setSingleMovie(+route.params.id);
</script>
<template>
  <div class="main__content">
    <div class="container">
      <div class="main__solo" v-if="!error">
        <MainPart :mainData="singleMovie"/>
        <Facts :facts="facts"/>
        <Frames :frames="frames"/>
        <Reviews :reviews="reviews"/>
      </div>
      <ShowError v-else/>
    </div>
  </div>
</template>
