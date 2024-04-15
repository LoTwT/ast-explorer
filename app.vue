<script setup lang="ts">
import { code } from "#imports"

const { isColLayout } = useLayout()
</script>

<template>
  <Navbar />
  <ClientOnly>
    <div
      h-full
      flex
      overflow-hidden
      :class="[isColLayout ? 'flex-row' : 'flex-col']"
    >
      <CodeEditor
        v-model="code"
        flex-1
        :class="[isColLayout ? 'max-w-1/2 h-full' : 'w-full max-h-1/2']"
        :language="language"
      />
      <CodeViewer
        :class="[isColLayout ? 'max-w-1/2 h-full' : 'w-full max-h-1/2']"
        flex-1
        overflow-auto
      />
    </div>
  </ClientOnly>
</template>
