import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product' // Lưu ý: file tên là product.ts thì import ./product

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product], 
}