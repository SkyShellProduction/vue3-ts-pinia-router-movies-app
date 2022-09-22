<script setup lang="ts">
import "@/assets/styles/main.scss";
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import { useMainStore } from "./store";
import Preloader from "./components/UI/Preloader.vue";
const store = useMainStore();
store.setMainData();
</script>
<template>
    <Preloader v-if="store.$state.loading"/>
    <Header />
    <main class="main">
        <router-view v-slot="{Component}">
            <transition :name="store.$state.anime" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </main>
    <Footer />
</template>
<style lang="scss">
    .rotate{
        &-enter-active, &-leave-active{
            transition: 0.4s linear;
        }
        &-enter-from, &-leave-to{
            opacity: 0;
            scale: 1.2;
            rotate: 15deg;
        }
    }
    .deep{
        &-enter-active,&-leave-active {
            transition: 0.4s linear;
        }
        &-enter-from, &-leave-to{
            transform-origin: center;
            transform: scale(0.5);
            opacity: 0;
        }
    }
    .opacity{
        &-enter-active,&-leave-active {
            transition: 0.4s linear;
        }
        &-enter-from, &-leave-to{
            filter: blur(20px) saturate(0%);
            opacity: 0;
        }
    }
    a.router-link-exact-active:not(.logo){
        color: aqua;
        opacity: 1;
    }
</style>