<script setup lang="ts">
import SearchForm from "@/components/SearchForm.vue";
import { defineAsyncComponent } from "vue";
import { useMainStore } from "@/store";
import { storeToRefs } from "pinia";
const SearchMovies = defineAsyncComponent(() => import("@/components/SearchMovies.vue"));
const ShowError = defineAsyncComponent(() => import("@/components/UI/ShowError.vue"));
const store = useMainStore();
const {searchData, error, maxPages, page} = storeToRefs(store);
</script>
<template>
    <div class="main__content">
        <div class="container">
            <SearchForm />
            <div class="main__block">
                <SearchMovies :movies="searchData?.films"/>
              </div>
              <ShowError v-if="error"/>
              <ShowError v-if="!searchData?.films.length" message="Ничего не найдено"/>
            <button class="movies__load-more" 
                v-if="maxPages > 1 && page < maxPages" 
                @click="page++;store.setSearhData({type: 'add'})">Загрузить ещё</button>
        </div>
    </div>
</template>
