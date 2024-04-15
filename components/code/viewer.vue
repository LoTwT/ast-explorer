<script setup lang="ts">
import { dumpASTNodes } from "ag-wasm"
import { code } from "#imports"

const { init, setupParser } = useAgWasm()

await init()

const root = ref<DumpNode>()
const showFullTree = ref(false)

watch(
  () => language.value,
  async () => {
    await setupParser(language.value)
    root.value = dumpASTNodes(code.value)
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
  { immediate: true },
)

const enterViewer = () => {
  cursorPostion.value = null
}

const leaveViewer = () => {
  highlights.value = []
}
</script>

<template>
  <div flex flex-col overflow-hidden>
    <div mb-2 flex px-4>
      <label for="showFullTree" flex items-center justify-center>
        <input
          id="showFullTree"
          v-model="showFullTree"
          size-4
          type="checkbox"
        />
        <span ml-2>Show Full Tree</span>
      </label>
    </div>

    <div v-if="root" flex-1 overflow-auto pb-8 pr-4>
      <TreeNode
        :node="root"
        :show-unnamed="showFullTree"
        :cursor-position="cursorPostion"
        @mouseenter="enterViewer"
        @mouseleave="leaveViewer"
      />
    </div>
    <div v-else>no data</div>
  </div>
</template>
