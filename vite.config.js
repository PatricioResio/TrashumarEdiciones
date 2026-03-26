import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("node_modules/@mui") || id.includes("node_modules/@emotion")) {
            return "mui-vendor";
          }

          if (id.includes("node_modules/firebase") || id.includes("node_modules/@firebase")) {
            return "firebase-vendor";
          }
          if (
            id.includes("node_modules/leaflet") ||
            id.includes("node_modules/react-leaflet") ||
            id.includes("node_modules/@googlemaps")
          ) {
            return "maps-vendor";
          }

          if (id.includes("node_modules/swiper")) {
            return "swiper-vendor";
          }

          if (
            id.includes("node_modules/@fortawesome") ||
            id.includes("node_modules/react-icons")
          ) {
            return "icons-vendor";
          }

          if (
            id.includes("node_modules/formik") ||
            id.includes("node_modules/yup") ||
            id.includes("node_modules/match-sorter") ||
            id.includes("node_modules/localforage")
          ) {
            return "utils-vendor";
          }
        },
      },
    },
  },
});