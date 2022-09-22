<script setup lang="ts">
    import { useMainStore } from '@/store';
    import { ref, watchEffect } from 'vue';
    const store = useMainStore();
    const anime = ref(store.$state.anime);
    watchEffect(() => {
        store.anime = anime.value;
    });
</script>
<template>
    <div class="header__items" :class="{active: store.showMobileMenu}">
        <ul class="header__list">
            <li>
                <router-link to="/" class="header__link main__close">Home</router-link>
            </li>
            <li>
                <router-link to="/movies" class="header__link movies__link">Movies</router-link>
            </li>
            <li>
                <select class="header__link movies__link header__select" v-model="anime">
                   <option value="rotate" selected>rotate</option>
                   <option value="deep">deep</option>
                   <option value="opacity">opacity</option>
                </select>
            </li>
        </ul>
        <ul class="header__list header__list-nth2">
            <li>
                <router-link to="/movies" class="header__icon search__link ">
                    <span class="icon-reg"></span>
                </router-link>
            </li>
            <li><a href="#!" class="header__icon icon-reg">
                <!-- <span class="favourite">0</span> -->
            </a></li>
            <li><a href="#!" class="header__icon icon-reg"></a></li>
        </ul>
    </div>
    <a href="#!" class="header__btn" :class="{active: store.showMobileMenu}" @click.prevent="store.setMobileMenu">
        <span class="bars"></span>
    </a>
</template>