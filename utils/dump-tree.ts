export interface Pos {
  row: number
  column: number
}

/** stub wasm DumpNode */
export interface DumpNode {
  field: string | undefined
  kind: string
  start: Pos
  end: Pos
  isNamed: boolean
  children: DumpNode[]
}
