<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TNavbar from './components/t-navbar.vue'
</script>

<template>
  <t-navbar></t-navbar>

  <div class="app">
    <RouterView />
  </div>
</template>

<style>
</style>
