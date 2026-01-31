'use client' // Quan trọng: Để bấm được nút

import { useState, useEffect } from 'react'
import { client } from "@/sanity/lib/client"

export default function Home() {
  const [lang, setLang] = useState('vi') // Mặc định tiếng Việt
  const [products, setProducts] = useState([])

  // Hàm lấy dữ liệu từ Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        _id,
        name_vi, name_en, name_zh, name_ko, name_ja,
        "imageUrl": image.asset->url,
        description
      }`
      const data = await client.fetch(query)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  // Hàm chọn hiển thị tên theo ngôn ngữ
  const getProductName = (p: any) => {
    if (lang === 'en') return p.name_en || p.name_vi
    if (lang === 'zh') return p.name_zh || p.name_vi
    if (lang === 'ko') return p.name_ko || p.name_vi
    if (lang === 'ja') return p.name_ja || p.name_vi
    return p.name_vi
  }

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      {/* Thanh Menu Ngôn Ngữ */}
      <div className="flex justify-end gap-2 mb-8">
        {[
          { id: 'vi', label: 'VI' },
          { id: 'en', label: 'EN' },
          { id: 'zh', label: 'ZH' },
          { id: 'ko', label: 'KO' },
          { id: 'ja', label: 'JA' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setLang(item.id)}
            className={`px-4 py-2 rounded-md font-bold transition ${
              lang === item.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <h1 className="text-3xl font-extrabold text-gray-900 border-b-4 border-blue-600 inline-block mb-10">
        ZINITEK PRECISION
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product: any) => (
          <div key={product._id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <img 
              src={product.imageUrl} 
              alt="Product" 
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-blue-900">
                {getProductName(product)}
              </h3>
              <p className="text-gray-500 mt-2 text-sm line-clamp-3">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}