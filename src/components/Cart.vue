<template>
  <main class="p-3">
    <header class="p-3 border-bottom-1 border-gray-300">
      <h1 class="text-2xl font-semibold text-gray-900">Cart</h1>
    </header>

    <section
      v-if="cartStore.cart.length > 0"
      class="products-list p-3 flex flex-column gap-3">
      <div
        v-for="item in cartStore.cart"
        :key="item.id"
        class="product flex-start-center gap-3 border-bottom-1 border-gray-300">
        <div
          class="product-image border-1 border-bottom-none border-gray-300 border-round-top-lg overflow-hidden">
          <img :src="item.image" :alt="item.name" width="180" />
        </div>
        <div class="product-details flex-grow-1 flex-between-start gap-3">
          <div class="flex flex-column gap-3">
            <span class="text-lg font-medium text-gray-900">
              {{ item.name }}
            </span>
            <span class="text-base font-medium text-gray-700">
              {{ item.currency + item.price }} |
              <span class="text-green-500">In Stock</span>
            </span>

            <div class="mt-3 flex-start-center gap-2 w-fit">
              <Button
                icon="pi pi-minus"
                severity="secondary"
                @click="decreaseQuantity(item.id)" />

              <InputNumber
                class="max-w-5rem border-white"
                v-model="item.quantity"
                :min="1"
                fluid />

              <Button
                icon="pi pi-plus"
                severity="secondary"
                @click="increaseQuantity(item.id)" />
            </div>
          </div>

          <div class="flex flex-column gap-3">
            <span class="text-xl font-semibold text-gray-900">
              {{ item.currency + (item.price * item.quantity).toFixed(2) }}
            </span>
            <Button
              label="Remove"
              icon="pi pi-trash"
              size="small"
              severity="danger"
              @click="cartStore.removeFromCart(item.id)" />
          </div>
        </div>
      </div>
    </section>

    <footer
      v-if="cartStore.cart.length > 0"
      class="p-3 border-top-1 border-gray-300">
      <div class="flex-between-start">
        <div class="flex flex-column gap-3">
          <span class="text-xl font-semibold text-gray-900">
            Total Items: {{ cartStore.totalItems }}
          </span>
          <span class="text-xl font-semibold text-gray-900">
            Total Price: {{ cartStore.totalPrice }}
          </span>
        </div>

        <Button
          label="Clear Cart"
          icon="pi pi-trash"
          size="small"
          severity="danger"
          @click="cartStore.clearCart()" />
      </div>
    </footer>

    <div v-else class="flex-center h-10rem">
      <span class="text-lg font-medium text-gray-700">
        Your cart is empty
      </span>
    </div>
  </main>
</template>

<script setup>
  // PrimeVue Components
  import Button from "primevue/button";
  import InputNumber from "primevue/inputnumber";
  // Cart store
  import { useCartStore } from "../store/cart";
  const cartStore = useCartStore();

  // Quantity logic
  const increaseQuantity = (productId) => {
    const item = cartStore.cart.find((p) => p.id === productId);
    if (item) item.quantity++;
  };

  const decreaseQuantity = (productId) => {
    const item = cartStore.cart.find((p) => p.id === productId);
    if (item && item.quantity > 1) item.quantity--;
  };
</script>
