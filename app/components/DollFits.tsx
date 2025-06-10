"use client";

import Image from "next/image";
import { useState } from "react";

// 🧸 商品数据数组：每一个对象表示一个娃娃穿搭商品
const dollFits = [
  {
    id: 1,
    name: "Doll Fit 1",
    frontImage: "/products/doll1.JPG",       // 默认图
    hoverImage: "/products/doll1-1.JPG",     // 鼠标悬停图
    price: 22.88,
  },
  {
    id: 2,
    name: "Doll Fit 2",
    frontImage: "/products/doll2.JPG",
    hoverImage: "/products/doll2-1.JPG",
    price: 22.88,
  },
  {
    id: 3,
    name: "Doll Fit 3",
    frontImage: "/products/doll3.JPG",
    hoverImage: "/products/doll3-1.JPG",
    price: 22.88,
  },
  {
    id: 4,
    name: "Doll Fit 4",
    frontImage: "/products/doll4.JPG",
    hoverImage: "/products/doll4-1.JPG",
    price: 22.88,
  },
  {
    id: 5,
    name: "Doll Fit 5",
    frontImage: "/products/doll5.JPG",
    hoverImage: "/products/doll5-1.JPG",
    price: 22.88,
  },
];

// 🌟 商品卡片组件
function ProductCard({ product }: { product: (typeof dollFits)[0] }) {
  const [isHovered, setIsHovered] = useState(false); // 控制悬停状态

  return (
    <div
      className="w-[240px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[300px]">
        {/* 图片切换：根据是否悬停切换图片 */}
        <Image
          src={isHovered ? product.hoverImage : product.frontImage}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">${product.price.toFixed(2)}</p>
        <button className="mt-2 text-sm px-3 py-1 rounded-full border hover:bg-black hover:text-white transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}

// 🧩 整体组件：展示所有商品卡
export default function DollFits() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-xl font-bold mb-4">Doll Fits（娃娃穿搭）</h2>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {dollFits.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
