import wasm from "vite-plugin-wasm"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@unocss/nuxt", "@nuxtjs/color-mode"],

  css: ["@unocss/reset/tailwind.css", "~/assets/main.css"],

  vite: {
    plugins: [wasm()],
  },

  colorMode: {
    storageKey: "vueuse-color-scheme",
  },
})
