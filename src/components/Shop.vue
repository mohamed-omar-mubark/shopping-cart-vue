<template>
  <main class="p-3">
    <header class="p-3 border-bottom-1 border-gray-300">
      <h1 class="text-2xl font-semibold text-gray-900">Shop</h1>
    </header>

    <section class="products-list p-3 flex flex-column gap-3">
      <div
        v-for="product in productsStore.products"
        :key="product.id"
        class="product flex-start-center gap-3 border-bottom-1 border-gray-300">
        <div
          class="product-image border-1 border-bottom-none border-gray-300 border-round-top-lg overflow-hidden">
          <img :src="product.image" :alt="product.name" width="180" />
        </div>
        <div class="product-details flex-grow-1 flex-between-start gap-3">
          <div class="flex flex-column gap-3">
            <span class="text-lg font-medium text-gray-900">
              {{ product.name }}
            </span>
            <span class="text-base font-medium text-gray-700">
              {{ product.currency + product.price }} |
              <span class="text-green-500">In Stock</span>
            </span>

            <div class="mt-3 flex-start-center gap-2 w-fit">
              <Button
                icon="pi pi-minus"
                severity="secondary"
                @click="decreaseQuantity(product.id)" />

              <InputNumber
                class="max-w-5rem border-white"
                v-model="product.quantity"
                :min="1"
                fluid />

              <Button
                icon="pi pi-plus"
                severity="secondary"
                @click="increaseQuantity(product.id)" />
            </div>
          </div>

          <div class="flex flex-column gap-3">
            <span class="text-xl font-semibold text-gray-900">
              {{
                product.currency + (product.price * product.quantity).toFixed(2)
              }}
            </span>
            <Button
              label="Add to Cart"
              icon="pi pi-shopping-cart"
              size="small"
              @click="addToCart(product)" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
  import { onMounted } from "vue";
  // PrimeVue Components
  import Button from "primevue/button";
  import InputNumber from "primevue/inputnumber";
  // Products store
  import { useProductsStore } from "../store/products";
  const productsStore = useProductsStore();
  // Cart store
  import { useCartStore } from "../store/cart";
  const cartStore = useCartStore();

  // Initialize quantity for each product
  onMounted(() => {
    productsStore.products.forEach((product) => {
      product.quantity = product.quantity || 1;
    });
  });

  // Quantity logic
  const increaseQuantity = (productId) => {
    const product = productsStore.products.find((p) => p.id === productId);
    if (product) product.quantity++;
  };

  const decreaseQuantity = (productId) => {
    const product = productsStore.products.find((p) => p.id === productId);
    if (product && product.quantity > 1) product.quantity--;
  };

  // Add to cart logic
  const addToCart = (product) => {
    cartStore.addToCart({
      ...product,
      quantity: product.quantity,
    });
  };
</script>
