<script setup lang="ts">
import { code } from "#imports"
import type * as Monaco from "monaco-editor"

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { MonacoEditor } from "#build/components"

const monaco = useMonaco()!
// monaco editor ref
const container = shallowRef<InstanceType<typeof MonacoEditor>>()

onMounted(() => highlight())

let decorationsCollection:
  | Monaco.editor.IEditorDecorationsCollection
  | undefined

function highlight() {
  decorationsCollection?.clear()

  const editor: Monaco.editor.IStandaloneCodeEditor | undefined = toRaw(
    container.value?.$editor,
  )
  if (!editor) return

  decorationsCollection = editor.createDecorationsCollection(
    highlights.value?.map(transformHighlight) || [],
  )
}

// do highlight
watch(
  [() => highlights.value, () => container.value?.$editor],
  () => {
    highlight()
  },
  {
    immediate: true,
    flush: "post",
  },
)

watch(
  () => container.value?.$editor,
  (v) => {
    if (v) {
      container.value!.$editor?.onDidChangeCursorPosition((e) => {
        const { position } = e
        cursorPostion.value = {
          row: position.lineNumber - 1,
          column: position.column - 1,
        }
      })
    }
  },
  {
    immediate: true,
  },
)

function transformHighlight(match: number[]) {
  const [sr, sc, er, ec] = match
  return {
    range: new monaco.Range(sr + 1, sc + 1, er + 1, ec + 1),
    options: {
      inlineClassName: "monaco-highlight-span",
    },
  }
}
</script>

<template>
  <MonacoEditor
    ref="container"
    v-model="code"
    :lang="language"
    :options="{
      automaticLayout: true,
      theme: isDark ? 'vs-dark' : 'vs',
      fontSize: 14,
      tabSize: 2,
      minimap: {
        enabled: false,
      },
    }"
  >
    <div flex="~ col gap-2" h-full items-center justify-center>
      <div i-ri:loader-2-line animate-spin text-4xl />
      <span text-lg>Loading...</span>
    </div>
  </MonacoEditor>
</template>

<style>
.monaco-highlight-span {
  border-bottom: 1px dashed var(--brand-color);
  background-color: var(--theme-highlight4);
}
</style>
