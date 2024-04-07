export const isDark = computed(() => {
  const colorMode = useColorMode()
  return colorMode.preference === "dark"
})
