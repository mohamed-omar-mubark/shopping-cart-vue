import { defineStore } from "pinia";
export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
  }),

  getters: {
    cart: (state) => state.cartItems,
  },

  actions: {},
});
