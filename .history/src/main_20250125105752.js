import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
// primeflex
import "primeflex/primeflex.css";
import "primeflex/themes/primeone-light.css";
// primeicons
import "primeicons/primeicons.css";
import "./style.css";

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
app.mount("#app");
