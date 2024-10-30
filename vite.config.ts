import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import path from "path";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [{ enforce: "pre", ...mdx() }, react(), nodePolyfills()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
