"use client";

import Image from "next/image";
import { useState } from "react";

// 商品数据列表，每个对象代表一个饰品商品
const charms = [
  {
    id: 1,
    name: "Charm 1",
    frontImage: "/products/charm1.JPG",
    hoverImage: "/products/charm1-1.JPG",
    price: 22.88,
  },
  {
    id: 2,
    name: "Charm 2",
    frontImage: "/products/charm2.JPG",
    hoverImage: "/products/charm2-1.JPG",
    price: 22.88,
  },
  {
    id: 3,
    name: "Charm 3",
    frontImage: "/products/charm3.JPG",
    hoverImage: "/products/charm3-1.JPG",
    price: 22.88,
  },
  {
    id: 4,
    name: "Charm 4",
    frontImage: "/products/charm4.JPG",
    hoverImage: "/products/charm4-1.JPG",
    price: 22.88,
  },
  {
    id: 5,
    name: "Charm 5",
    frontImage: "/products/charm5.JPG",
    hoverImage: "/products/charm5-1.JPG",
    price: 22.88,
  },
];

// 商品卡片组件（带悬停图像切换）
function ProductCard({ product }: { product: (typeof charms)[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-[240px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[300px]">
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

// 页面展示横向滚动商品
export default function CharmsShine() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-xl font-bold mb-4">Charms & Shine（饰品与闪闪小物）</h2>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {charms.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
