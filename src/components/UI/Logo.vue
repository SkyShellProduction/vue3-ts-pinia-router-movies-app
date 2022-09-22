<script setup lang="ts">
</script>
<template>
    <router-link to="/" class="logo"> 
        <span class="logo__span">m</span> box 
    </router-link>
</template>
<style lang="scss">
.logo {
    display: flex;
    align-items: center;
    font-weight: 800;
    font-size: 40px;
    color: #ffffff;
    &__span {
        text-transform: uppercase;
        display: block;
        margin-right: 14px;
        position: relative;
        background: #000;
        padding: 10px 12px;
        z-index: 1;
        &::before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            margin: 4px;
            top: 0;
            right: 0;
            bottom: 0;
            border-radius: 14px;
            background: inherit;
            z-index: -1;
        }

        &::after {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            border-radius: 14px;
            z-index: -2;
            background: linear-gradient(132.88deg, #326cff 3.44%, #26fff2 100%);
        }
    }
}
</style>