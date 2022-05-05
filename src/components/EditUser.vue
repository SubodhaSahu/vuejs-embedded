<script setup lang="ts">
import { ref } from 'vue';
const msg  = ref('Edit the User');
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>