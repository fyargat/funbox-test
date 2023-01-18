import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/funbox-test/",
  plugins: [react()],
  resolve: {
    alias: {
      "/images": "src/assets/images",
    },
  },
});
