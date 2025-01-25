import { defineStore } from "pinia";
export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
  }),

  getters: {
    // Get all items in the cart
    cart: (state) => state.cartItems,

    // Calculate the total number of items in the cart
    totalItems: (state) => {
      return state.cartItems.reduce((total, item) => total + item.quantity, 0);
    },

    // Calculate the total price of all items in the cart
    totalPrice: (state) => {
      return state.cartItems
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2); // Round to 2 decimal places
    },
  },

  actions: {
    // Add a product to the cart
    addToCart(product) {
      const existingItem = this.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        // If the product already exists in the cart, update its quantity
        existingItem.quantity += product.quantity;
      } else {
        // If the product is not in the cart, add it
        this.cartItems.push({ ...product });
      }
    },

    // Remove a product from the cart by its ID
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    },

    // Update the quantity of a product in the cart
    updateQuantity(productId, newQuantity) {
      const item = this.cartItems.find((item) => item.id === productId);
      if (item) {
        item.quantity = newQuantity;
      }
    },

    // Clear all items from the cart
    clearCart() {
      this.cartItems = [];
    },
  },
});
