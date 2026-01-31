import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Sản phẩm',
  type: 'document',
  fields: [
    defineField({ name: 'name_vi', title: 'Tên (Tiếng Việt)', type: 'string' }),
    defineField({ name: 'name_en', title: 'Tên (English)', type: 'string' }),
    defineField({ name: 'name_zh', title: 'Tên (中文)', type: 'string' }),
    defineField({ name: 'name_ko', title: 'Tên (한국어)', type: 'string' }),
    defineField({ name: 'name_ja', title: 'Tên (日本語)', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Đường dẫn (Slug)',
      type: 'slug',
      options: { source: 'name_vi' }
    }),
    defineField({
      name: 'image',
      title: 'Hình ảnh sản phẩm',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({ name: 'description', title: 'Mô tả ngắn', type: 'text' })
  ]
})