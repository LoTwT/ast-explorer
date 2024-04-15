import type { Nullable } from "@ayingott/sucrose"

export const code = ref("const one = 1")
export const language = ref<Language>("javascript")

export const cursorPostion = ref<Nullable<Pos>>(null)
export const highlights = ref<Nullable<number[][]>>(null)
