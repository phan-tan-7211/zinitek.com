import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Sản phẩm',
  type: 'document',
  fields: [
    defineField({name: 'name_vi', title: 'Tên (VI)', type: 'string'}),
    defineField({name: 'name_en', title: 'Tên (EN)', type: 'string'}),
    defineField({name: 'name_zh', title: 'Tên (ZH)', type: 'string'}),
    defineField({name: 'name_ko', title: 'Tên (KO)', type: 'string'}),
    defineField({name: 'name_ja', title: 'Tên (JA)', type: 'string'}),
    defineField({name: 'image', title: 'Hình ảnh', type: 'image', options: {hotspot: true}}),
    defineField({name: 'slug', title: 'Đường dẫn (Slug)', type: 'slug', options: {source: 'name_vi'}}),
  ],
})