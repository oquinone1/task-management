import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  test: {
    environment: "jsdom", // Necessary to simulate a browser-like environment
    globals: true, // Allows using global test functions like "describe", "it", etc.
    setupFiles: "./src/setupTests.js", // Path to the setup file for Jest matchers
  },
});
