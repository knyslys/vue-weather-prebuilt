import { createApp } from "vue";
import App from "./App.vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import TheFooter from "./layout/TheFooter.vue";
const app = createApp(App);
app.use(autoAnimatePlugin);
app.component("the-footer", TheFooter);
app.mount("#app");

// app.component("the-search", TheSearch);
