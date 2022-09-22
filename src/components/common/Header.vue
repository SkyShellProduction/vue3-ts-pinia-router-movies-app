<script setup lang="ts">
    import Logo from '@/components/UI/Logo.vue';
    import HeaderNav from '@/components/common/HeaderNav.vue';
    import { useMainStore } from '@/store';
    const store = useMainStore();
</script>
<template>
    <header class="header">
        <div class="navigate">
            <div class="container">
                <nav class="header__nav">
                    <Logo />
                    <HeaderNav />
                </nav>
            </div>
        </div>
        <div class="header__abs" :class="{active: store.showMobileMenu}" @click="store.setMobileMenu"></div>
    </header>
</template>