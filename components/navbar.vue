<script setup lang="ts">
const { layout } = useLayout()

const changeLayout = (v: EditorLayouts) => {
  layout.value = v
}
</script>

<template>
  <header mb-2 flex justify-between px-4 py-2>
    <div>AST Explorer</div>

    <div flex gap-3>
      <div i-ri-layout-row-line cursor-pointer @click="changeLayout('row')" />
      <div
        i-ri-layout-column-line
        cursor-pointer
        @click="changeLayout('col')"
      />

      <NuxtLink to="https://github.com/lotwt/ast-explorer" target="_blank">
        <div i-carbon-logo-github />
      </NuxtLink>

      <ThemeToggle />
    </div>
  </header>
</template>
