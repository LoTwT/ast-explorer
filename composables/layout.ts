export type EditorLayouts = "row" | "col"

export const useLayout = () => {
  const storageLayout = useLocalStorage<EditorLayouts>(
    "ayingott-ast-explorer-layout",
    "col",
  )

  const isColLayout = computed(() => storageLayout.value === "col")

  return {
    isColLayout,
    layout: storageLayout,
  }
}
