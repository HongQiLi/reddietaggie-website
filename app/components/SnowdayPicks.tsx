"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 模拟滑雪好物数据（图片文件已上传至 public/products）
const snowItems = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  name: `Snowday Pick ${i + 1}`,
  frontImage: `/products/snow${i + 1}.JPG`, // 默认图片
  hoverImage: `/products/snow${i + 1}-1.JPG`, // 鼠标悬停图片（如果没有也可以用 frontImage）
  price: 22.88,
}));

// 商品卡片组件
function ProductCard({ product }: { product: (typeof snowItems)[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-[240px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
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

// 总组件（可左右滑动）
export default function SnowdayPicks() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3; // 一次展示 3 个商品

  const handleNext = () => {
    if (startIndex + visibleCount < snowItems.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="px-6 py-10">
      <h2 className="text-xl font-bold mb-4">Snowday Picks（滑雪好物）</h2>
      <div className="relative flex items-center">
        {startIndex > 0 && (
          <button
            className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-neutral-200"
            onClick={handlePrev}
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <div className="flex gap-6 overflow-hidden w-full justify-center">
          {snowItems.slice(startIndex, startIndex + visibleCount).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {startIndex + visibleCount < snowItems.length && (
          <button
            className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-neutral-200"
            onClick={handleNext}
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </section>
  );
}
