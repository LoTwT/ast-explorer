import initAg, {
  initializeTreeSitter,
  setupParser as setupAgParser,
} from "ag-wasm"

const parserPaths = {
  javascript: "tree-sitter-javascript.wasm",
  typescript: "tree-sitter-typescript.wasm",
  tsx: "tree-sitter-tsx.wasm",
  // not so well supported lang...
  bash: "tree-sitter-bash.wasm",
  c: "tree-sitter-c.wasm",
  csharp: "tree-sitter-c_sharp.wasm",
  cpp: "tree-sitter-cpp.wasm",
  dart: "tree-sitter-dart.wasm",
  elixir: "tree-sitter-elixir.wasm",
  go: "tree-sitter-go.wasm",
  html: "tree-sitter-html.wasm",
  java: "tree-sitter-java.wasm",
  json: "tree-sitter-json.wasm",
  kotlin: "tree-sitter-kotlin.wasm",
  php: "tree-sitter-php.wasm",
  python: "tree-sitter-python.wasm",
  ruby: "tree-sitter-ruby.wasm",
  rust: "tree-sitter-rust.wasm",
  scala: "tree-sitter-scala.wasm",
  swift: "tree-sitter-swift.wasm",
}

export type Language = keyof typeof parserPaths

export const useAgWasm = () => {
  const init = async () => {
    await initAg()
    await initializeTreeSitter()
    await setupParser(language.value)
  }

  const setupParser = async (lang: Language) => {
    const path = parserPaths[lang]
    await setupAgParser(lang, path)
  }

  return { init, setupParser }
}
