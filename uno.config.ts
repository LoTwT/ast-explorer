import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss"

export default defineConfig({
  shortcuts: {
    "border-base": "border-$c-border",
    "border-bg-base": "border-$c-bg-base",
    "bg-base": "bg-$c-bg-base",
    "text-base": "text-$c-text-base",
  },
  presets: [
    presetUno({
      dark: {
        dark: ".dark-mode",
      },
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: {
          name: "Noto Sans SC",
          weights: [400, 700],
        },
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
