<template>
  <section class=""></section>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Button = defineAsyncComponent(() => import("./Button.vue"));

interface Product {
  imageSrc: string;
  imageAlt: string;
  href: string;
  name: string;
  color: string;
  price: number;
  currency: string;
}
</script>
