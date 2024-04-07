<script setup lang="ts">
import { code } from "#imports"
</script>

<template>
  <CodeEditor v-model="code" flex-1 :language="language" />
</template>
