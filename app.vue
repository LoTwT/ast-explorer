<script setup lang="ts">
import { code } from "#imports"
</script>

<template>
  <Navbar />
  <ClientOnly>
    <div h-full flex overflow-hidden>
      <CodeEditor v-model="code" flex-1 :language="language" />
      <CodeViewer flex-1 overflow-auto />
    </div>
  </ClientOnly>
</template>
