<template>
  <div :class="theme" class="wrapper">
    <div class="container">
      <h1>hello</h1>
      <button @click="toggleTheme">Toggle Theme</button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const theme = ref("light-theme");

  const toggleTheme = () => {
    theme.value = theme.value === "light-theme" ? "dark-theme" : "light-theme";
  };
</script>

<style scoped>
  .wrapper {
    height: 100vh;
  }
</style>
