<script setup lang="ts">
import { query } from "#imports"

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { MonacoEditor } from "#build/components"

const container = shallowRef<InstanceType<typeof MonacoEditor>>()
</script>

<template>
  <div>
    <div ml-8 h-6>Query</div>
    <MonacoEditor
      ref="container"
      v-model="query"
      lang="plaintext"
      class="h-[calc(100%-1.5rem)]"
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
  </div>
</template>
