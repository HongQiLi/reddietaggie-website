"use client";

import Image from "next/image";
import { useState } from "react";

// 商品数据（滑雪灵感好物）
const snowdayPicks = [
  {
    id: 1,
    name: "Snow Pick 1",
    frontImage: "/products/snow1.JPG",
    hoverImage: "/products/snow1-1.JPG",
    price: 22.88,
  },
  {
    id: 2,
    name: "Snow Pick 2",
    frontImage: "/products/snow2.JPG",
    hoverImage: "/products/snow2-1.JPG",
    price: 22.88,
  },
  {
    id: 3,
    name: "Snow Pick 3",
    frontImage: "/products/snow3.JPG",
    hoverImage: "/products/snow3-1.JPG",
    price: 22.88,
  },
  {
    id: 4,
    name: "Snow Pick 4",
    frontImage: "/products/snow4.JPG",
    hoverImage: "/products/snow4-1.JPG",
    price: 22.88,
  },
  {
    id: 5,
    name: "Snow Pick 5",
    frontImage: "/products/snow5.JPG",
    hoverImage: "/products/snow5-1.JPG",
    price: 22.88,
  },
  {
    id: 6,
    name: "Snow Pick 6",
    frontImage: "/products/snow6.JPG",
    hoverImage: "/products/snow6-1.JPG",
    price: 22.88,
  },
];

// 单个商品卡片组件
function ProductCard({ product }: { product: (typeof snowdayPicks)[0] }) {
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

// 总组件
export default function SnowdayPicks() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-xl font-bold mb-4">Snowday Picks（滑雪灵感好物）</h2>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {snowdayPicks.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
