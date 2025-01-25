<template>
  <main class="p-3">
    <header
      class="p-3 flex-between-center gap-3 border-bottom-1 border-gray-300">
      <h2 class="text-2xl font-semibold text-gray-900">cart</h2>
      <Button
        icon="pi pi-trash"
        label="Clear"
        size="small"
        severity="secondary" />
    </header>

    <ul>
      <li v-for="item in cartStore.cart" :key="item.id">
        {{ item.name }} - {{ item.quantity }} x {{ item.currency
        }}{{ item.price }}
        <button @click="cartStore.removeFromCart(item.id)">Remove</button>
      </li>
    </ul>
    <p>Total Items: {{ cartStore.totalItems }}</p>
    <p>Total Price: {{ cartStore.totalPrice }}</p>
    <button @click="cartStore.clearCart()">Clear Cart</button>
  </main>
</template>

<script setup>
  // PrimeVue Components
  import Button from "primevue/button";
  // Cart store
  import { useCartStore } from "../store/cart";
  const cartStore = useCartStore();
</script>
