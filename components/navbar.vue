<script setup lang="ts"></script>

<template>
  <header mb-2 flex justify-between px-4 py-2>
    <div>AST Explorer</div>
    <div flex gap-3>
      <NuxtLink to="https://github.com/lotwt/ast-explorer" target="_blank">
        <div i-carbon-logo-github />
      </NuxtLink>

      <ThemeToggle />
    </div>
  </header>
</template>
