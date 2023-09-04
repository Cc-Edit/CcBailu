export interface AttributeItem {
  type: string
  props?: Record<string, any>
  mapping?: Record<string, any>
}
export interface ComponentConfig {
  stickyRows: number[]
  attributes: AttributeItem[][]
}