import { createApp } from "vue";
import App from "./App.vue";

// PrimeVue
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

// primeflex
import "primeflex/primeflex.css";
import "primeflex/themes/primeone-light.css";

// primeicons
import "primeicons/primeicons.css";

// styles
import "./styles/main.scss";

// pinia store
import { createPinia } from "pinia";
const pinia = createPinia();

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: ".dark-mode",
      cssLayer: false,
    },
  },
});
app.use(pinia);
app.mount("#app");
