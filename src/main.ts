import { createApp } from "vue";
import App from "./App.vue";

// Plugins
import { registerPlugins } from "@/plugins";

import "./assets/app.scss";

const app = createApp(App);

// Register plugins
registerPlugins(app);

app.mount("#app");
