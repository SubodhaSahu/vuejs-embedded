<script setup lang="ts">
</script>

<template>
  <div class="container-fluid">
    <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
    <div class="row align-items-start">
       <router-view/>
  </div>
  </div>
</template>

<style>
@import '@/assets/base.css';

</style>
