<script setup lang="ts">
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
      <Suspense>
        <div
          :class="[
            isColLayout
              ? 'max-w-1/2 h-full flex-col'
              : 'w-full max-h-1/2 flex-row',
          ]"
          flex
          flex-1
        >
          <CodeEditor
            flex-1
            :class="{
              'w-1/2': showQuery && !isColLayout,
              'h-1/2': showQuery && isColLayout,
            }"
          />
          <CodeQuery v-if="showQuery" flex-1 />
        </div>
        <template #fallback>Editor Loading...</template>
      </Suspense>

      <Suspense>
        <CodeViewer
          :class="[isColLayout ? 'max-w-1/2 h-full' : 'w-full max-h-1/2']"
          flex-1
          overflow-auto
        />
        <template #fallback>Viewer Loading...</template>
      </Suspense>
    </div>

    <template #fallback>
      <div m-auto>Loading...</div>
    </template>
  </ClientOnly>
</template>
