<template>
  <div class="navbar">
    <router-link to="/">Главная страница</router-link>
    <router-link to="/second-page">Вторая страница</router-link>
    <router-link to="/third-page">Третья страница</router-link>
    <router-link to="/fourth-page">Четвертая страница</router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.navbar {
  height: 50px;
  background: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  gap: 30px;
}
</style>
