<template>
  <div>
    <Title>Cart</Title>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Title = defineAsyncComponent(() => import("../../../components/Title.vue"));
</script>
