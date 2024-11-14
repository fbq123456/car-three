import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
  plugins: [],
  server: {
    host: "0.0.0.0"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  base: "./"
})
