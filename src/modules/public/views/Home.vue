<template>
  <main>
    <div class="flex justify-between items-center">
      <Title>Products</Title>
      <router-link :to="{ name: 'Cart' }">
        <Button>Cart</Button>
      </router-link>
    </div>

    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import products from "../../../../products.json";

const Title = defineAsyncComponent(
  () => import(/*webpackChunkName*/ "../../../components/Title.vue")
);

const ProductCard = defineAsyncComponent(
  () => import(/*webpackChunkName*/ "../../../components/ProductCard.vue")
);

const Button = defineAsyncComponent(
  () => import(/*webpackChunkName*/ "../../../components/Button.vue")
);
</script>
