<template>
  <div class="">
    <p>
      {{ props.product.name }}
    </p>
    <p>{{ props.product.currency }} {{ props.product.price }}</p>
    <Button @click="addToCart">Add to cart</Button>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted } from "vue";
import { useCartStore } from "../stores/cart";
import { storeToRefs } from "pinia";

const Button = defineAsyncComponent(() => import(/*webpackChunkName:"button"*/ "./Button.vue"));

interface Product {
  id: number;
  imageSrc: string;
  imageAlt: string;
  href: string;
  name: string;
  color: string;
  price: number;
  currency: string;
}

const props = defineProps<{
  product: Product;
}>();

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

onMounted(() => {
  cartStore.loadCartInstance();
});

function addToCart() {
  cartStore.addToCart({ id: props.product.id, qty: 1 });
  console.log("cart: ", cart.value);
}
</script>
