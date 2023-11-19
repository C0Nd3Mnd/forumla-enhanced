import "@fontsource/roboto";
import { createPinia } from "pinia";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import "vuetify/styles";
import App from "./App.vue";
import "./assets/global.css";

const app = createApp(App);

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#8BA6B8",
          secondary: "#2f4456",
          accent: "#f2f6f8",
        },
      },
    },
  },
});

const pinia = createPinia();

app.use(vuetify);
app.use(pinia);

app.mount("#app");
