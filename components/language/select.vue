<script setup lang="ts">
function changeLanguage(lang: Language) {
  language.value = lang
}

const LANGUAGES: Record<
  Language,
  {
    id: string
    label: string
    icon: string
  }
> = {
  javascript: {
    id: "javascript",
    label: "JavaScript",
    icon: "i-vscode-icons-file-type-js-official",
  },
  typescript: {
    id: "typescript",
    label: "TypeScript",
    icon: "i-vscode-icons-file-type-typescript-official",
  },
  tsx: {
    id: "tsx",
    label: "TSX",
    icon: "i-vscode-icons-file-type-typescript-official",
  },
  // not so well supported lang...
  bash: {
    id: "bash",
    label: "Bash(beta)",
    icon: "i-vscode-icons-file-type-shell",
  },
  c: {
    id: "c",
    label: "C",
    icon: "i-vscode-icons-file-type-c",
  },
  csharp: {
    id: "csharp",
    label: "C#",
    icon: "i-vscode-icons-file-type-csharp",
  },
  cpp: {
    id: "cpp",
    label: "C++",
    icon: "i-vscode-icons-file-type-cpp",
  },
  dart: {
    id: "dart",
    label: "Dart",
    icon: "i-vscode-icons-file-type-dartlang",
  },
  elixir: {
    id: "elixir",
    label: "Elixir",
    icon: "i-vscode-icons-file-type-elixir",
  },
  go: {
    id: "go",
    label: "Go",
    icon: "i-vscode-icons-file-type-go",
  },
  html: {
    id: "html",
    label: "HTML",
    icon: "i-vscode-icons-file-type-html",
  },
  java: {
    id: "java",
    label: "Java",
    icon: "i-vscode-icons-file-type-java",
  },
  json: {
    id: "json",
    label: "JSON",
    icon: "i-vscode-icons-file-type-json",
  },
  kotlin: {
    id: "kotlin",
    label: "Kotlin",
    icon: "i-vscode-icons-file-type-kotlin",
  },
  php: {
    id: "php",
    label: "PHP(alpha)",
    icon: "i-vscode-icons-file-type-php",
  },
  python: {
    id: "python",
    label: "Python",
    icon: "i-vscode-icons-file-type-python",
  },
  ruby: {
    id: "ruby",
    label: "Ruby",
    icon: "i-vscode-icons-file-type-ruby",
  },
  rust: {
    id: "rust",
    label: "Rust",
    icon: "i-vscode-icons-file-type-rust",
  },
  scala: {
    id: "scala",
    label: "Scala",
    icon: "i-vscode-icons-file-type-scala",
  },
  swift: {
    id: "swift",
    label: "Swift",
    icon: "i-vscode-icons-file-type-swift",
  },
}
</script>

<template>
  <ClientOnly>
    <VMenu :class="{ dark: isDark }" flex items-center>
      <button flex="~ gap-1" items-center>
        <div size-5 :class="LANGUAGES[language].icon" />
        <span>{{ LANGUAGES[language].label }}</span>
      </button>
      <template #popper>
        <div class="max-h-120">
          <DropdownItem
            v-for="(lang, id) in LANGUAGES"
            :key="id"
            :icon="lang.icon"
            :text="lang.label"
            :checked="language === id"
            @click="changeLanguage(id)"
          />
        </div>
      </template>
    </VMenu>
  </ClientOnly>
</template>
