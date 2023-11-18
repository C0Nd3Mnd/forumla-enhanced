import vue from "@vitejs/plugin-vue";
import { execSync } from "child_process";
import { defineConfig } from "vite";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __COMMIT_HASH__: JSON.stringify(
      execSync("git rev-parse --short HEAD").toString(),
    ),
  },
  plugins: [vue(), vuetify({ autoImport: true })],
});
