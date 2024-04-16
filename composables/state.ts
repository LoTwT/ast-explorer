import type { Nullable } from "@ayingott/sucrose"

export const code = ref("const one = 1")
export const language = ref<Language>("javascript")
export const query = ref("")

export const cursorPostion = ref<Nullable<Pos>>(null)
export const highlights = ref<Nullable<number[][]>>(null)

export const showQuery = ref(false)
