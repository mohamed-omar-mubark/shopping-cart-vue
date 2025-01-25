import { defineStore } from "pinia";
export const useProductsStore = defineStore("products", {
  state: () => ({
    productsList: [
      {
        id: 1,
        name: "Mixed Nuts Berries Pack",
        price: 12.99,
        currency: "$",
        image: "/products/product-1.webp",
      },
      {
        id: 2,
        name: "Organic Fresh Strawberries",
        price: 9.99,
        currency: "$",
        image: "/products/product-2.webp",
      },
      {
        id: 3,
        name: "Fresh Organic Bananas",
        price: 5.99,
        currency: "$",
        image: "/products/product-3.webp",
      },
      {
        id: 4,
        name: "Organic Avocado Ripe",
        price: 3.99,
        currency: "$",
        image: "/products/product-4.webp",
      },
    ],
  }),

  getters: {
    products: (state) => state.productsList,
  },

  actions: {},
});
