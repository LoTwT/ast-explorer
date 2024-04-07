<script setup lang="ts">
import { dumpASTNodes } from "ag-wasm"
import { code } from "#imports"

const { init, setupParser } = useAgWasm()

await init()

const root = ref<DumpNode>()

watch(
  () => language.value,
  async () => {
    await setupParser(language.value)
  },
  {
    immediate: true,
  },
)

watch(
  () => code.value,
  () => {
    root.value = dumpASTNodes(code.value)
  },
  // { immediate: true },
)
</script>

<template>
  <TreeNode
    v-if="root"
    :node="root"
    :show-unnamed="true"
    :cursor-position="{
      row: 0,
      column: 0,
    }"
  />
  <div v-else>no data</div>
</template>
