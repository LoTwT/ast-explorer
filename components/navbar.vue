<script setup lang="ts">
const { layout } = useLayout()

const changeLayout = (v: EditorLayouts) => {
  layout.value = v
}
</script>

<template>
  <header mb-2 flex items-center justify-between px-4 py-2>
    <div flex items-center>
      <h1 mr-4 font-bold>AST Explorer</h1>

      <LanguageSelect />
    </div>

    <div flex items-center gap-3>
      <div
        i-ri-layout-row-line
        size-5
        cursor-pointer
        @click="changeLayout('row')"
      />
      <div
        i-ri-layout-column-line
        size-5
        cursor-pointer
        @click="changeLayout('col')"
      />

      <NuxtLink to="https://github.com/lotwt/ast-explorer" target="_blank">
        <div i-carbon-logo-github size-5 />
      </NuxtLink>

      <ThemeToggle />
    </div>
  </header>
</template>
