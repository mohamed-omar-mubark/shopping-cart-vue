<template>
  <div>
    <Title>Cart</Title>

    <div v-for="(item, index) in displayCart" :key="index">
      <div v-if="item.inStock">
        <div>{{ item.name }}</div>
        <div>{{ item.currency }} {{ item.price }}</div>
        <div>{{ item.qty }}</div>
      </div>
      <div v-else>
        {{ `Item ${item.name} was in stock when you added in the cart but now it is out of stock` }}
      </div>
      <Button @click="removeItem(item.id)">Remove</Button>
    </div>

    <div>Totel: {{ total }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted } from "vue";
import { useCartStore } from "../../../stores/cart";
import { storeToRefs } from "pinia";
import type { DisplayCart } from "../../../types/interfaces";

const Title = defineAsyncComponent(
  () => import(/*webpackChunkName:"title"*/ "../../../components/Title.vue")
);
const Button = defineAsyncComponent(
  () => import(/*webpackChunkName:"button"*/ "../../../components/Button.vue")
);

const cartStore = useCartStore();
const { cart, displayCart } = storeToRefs(cartStore);

onMounted(() => {
  cartStore.loadCartInstance();
  cartStore.displayCartLoad();
});

// computed total
const total = computed(() => {
  let sum = (displayCart.value as DisplayCart[]).reduce((initialSum: number, item: DisplayCart) => {
    if (item.inStock) initialSum = initialSum + item.price * item.qty;
    return initialSum;
  }, 0);

  return sum;
});

// remove item from cart
function removeItem(id: number) {
  cartStore.removeFromCart(id);
}
</script>
