<script setup lang="ts">
  import MainInput from '@/components/UI/MainInput.vue';
  import { useMainStore } from '@/store';
  const store = useMainStore();
  function send(){
    store.type = '';
    store.setSearhData({type: 'new'});
  }
</script>
<template>
    <form class="form__main" @submit.prevent="send">
        <MainInput type="text" v-model="store.search"/>
        <button class="icon-reg"></button>
    </form>
</template>