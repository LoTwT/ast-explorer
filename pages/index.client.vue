<script setup lang="ts">
import { code } from "#imports"
</script>

<template>
  <div min-h-0 flex="~ gap-x-4">
    <CodeEditor v-model="code" flex-1 :language="language" />
    <CodeViewer flex-1 />
  </div>
</template>
