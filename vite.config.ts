import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.json",
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "DynamicForm",
      fileName: "index"
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-hook-form",
        "react-icons"
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});