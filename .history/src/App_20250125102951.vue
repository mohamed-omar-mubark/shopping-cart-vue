<template>
  <h1>hello</h1>
</template>

<script setup>
  import { ref } from "vue";

  const theme = ref("light-theme");

  const toggleTheme = () => {
    theme.value = theme.value === "light-theme" ? "dark-theme" : "light-theme";
  };
</script>

<style scoped>
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
  }
</style>
