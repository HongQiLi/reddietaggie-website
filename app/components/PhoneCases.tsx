"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

// 构造包含 5 个商品数据（你之后可以扩展更多）
const phoneCases = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  name: `Phone Case ${i + 1}`,
  frontImage: `/products/PhoneCase${i + 1}.JPG`,
  hoverImage: `/products/PhoneCase${i + 1}-1.JPG`,
  price: 22.88,
}));

// 单个商品卡片组件
function ProductCard({ product }: { product: (typeof phoneCases)[0] }) {
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

// 总组件
export default function PhoneCases() {
  const [startIndex, setStartIndex] = useState(0); // 当前展示起点
  const visibleCount = 5; // 一次展示 5 个商品

  const handleNext = () => {
    if (startIndex + visibleCount < phoneCases.length) {
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
      <h2 className="text-xl font-bold mb-4">Phone Cases（手机壳）</h2>
      <div className="relative">
        <div className="flex items-center">
          {startIndex > 0 && (
            <button
              className="z-10 bg-white p-2 rounded-full shadow-md hover:bg-neutral-200"
              onClick={handlePrev}
            >
              <ChevronLeft size={20} />
            </button>
          )}

          <div className="flex overflow-hidden gap-6 w-full justify-center">
            {phoneCases
              .slice(startIndex, startIndex + visibleCount)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          {startIndex + visibleCount < phoneCases.length && (
            <button
              className="z-10 bg-white p-2 rounded-full shadow-md hover:bg-neutral-200"
              onClick={handleNext}
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
