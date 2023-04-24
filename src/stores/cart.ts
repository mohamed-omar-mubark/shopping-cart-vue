import { defineStore } from "pinia";
import { v4 as uuid4 } from "uuid";
import type { Cart, Product } from "../types/interfaces";

interface State {
  cart: Cart | {};
}

const useCartStore = defineStore("cart", {
  state: () => ({ cart: {} } as State),

  getters: {},

  actions: {
    // load cart instance
    loadCartInstance() {
      const cs = localStorage.getItem("cart");
      if (!cs) this.cart = {};
      else this.cart = JSON.parse(cs);
    },

    // add product to cart
    addToCart(product: Product) {
      const cs = localStorage.getItem("cart");

      let isAdded = false;

      if (!cs)
        this.cart = {
          cid: uuid4(),
          products: [product]
        };
      else {
        const cartLocalStorage = JSON.parse(cs);
        cartLocalStorage.products = cartLocalStorage.products.map((ci: Product) => {
          if (ci.id == product.id) {
            isAdded = true;
            return { id: ci.id, qty: ci.qty + 1 };
          }

          return { id: ci.id, qty: ci.qty };
        });

        if (!isAdded) cartLocalStorage.products.push({ id: product.id, qty: product.qty });

        this.cart = cartLocalStorage;
      }

      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    // remove product from cart
    removeFromCart(id: number) {
      (this.cart as Cart).products = (this.cart as Cart).products.filter((ci) => ci.id != id);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    }
  }
});
