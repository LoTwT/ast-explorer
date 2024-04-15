<script setup lang="ts">
import type * as monaco from "monaco-editor"

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { MonacoEditor } from "#build/components"

defineProps<{
  language: string
}>()
const code = defineModel<string>()

const container = shallowRef<InstanceType<typeof MonacoEditor>>()

const options = computed<monaco.editor.IStandaloneEditorConstructionOptions>(
  () => {
    return {
      automaticLayout: true,
      theme: isDark.value ? "vs-dark" : "vs",
      fontSize: 14,
      tabSize: 2,
      minimap: {
        enabled: false,
      },
    }
  },
)
</script>

<template>
  <MonacoEditor
    ref="container"
    v-model="code"
    :lang="language"
    :options="options"
  >
    <div flex="~ col gap-2" h-full items-center justify-center>
      <div i-ri:loader-2-line animate-spin text-4xl />
      <span text-lg>Loading...</span>
    </div>
  </MonacoEditor>
</template>
