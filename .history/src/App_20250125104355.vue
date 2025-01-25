<template>
  <div class="container">
    <Header />
  </div>
</template>

<script setup>
  import Header from "./components/Header.vue";
  import { ref } from "vue";

  const theme = ref("light-theme");

  const toggleTheme = () => {
    theme.value = theme.value === "light-theme" ? "dark-theme" : "light-theme";
  };
</script>
