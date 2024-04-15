// import wasm from "vite-plugin-wasm"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@unocss/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-monaco-editor",
    "@vueuse/nuxt",
  ],

  css: ["@unocss/reset/tailwind.css", "~/assets/main.css"],

  vite: {
    plugins: [
      // wasm()
    ],

    optimizeDeps: {
      include: ["ag-wasm > web-tree-sitter-wasm-bindgen"],
      exclude: ["ag-wasm"],
    },
  },

  colorMode: {
    storageKey: "vueuse-color-scheme",
  },
})
