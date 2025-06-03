"use client";

import Image from "next/image";
import { useState } from "react";

// 商品数据列表，每个对象代表一个手机壳商品
const phoneCases = [
  {
    id: 1,
    name: "Phone Case 1",
    frontImage: "/products/PhoneCase1.JPG", // 默认图片
    hoverImage: "/products/PhoneCase1-1.JPG", // 鼠标悬停时显示的图片
    price: 22.88,
  },
  {
    id: 2,
    name: "Phone Case 2",
    frontImage: "/products/PhoneCase2.JPG",
    hoverImage: "/products/PhoneCase2-1.JPG",
    price: 22.88,
  },
  {
    id: 3,
    name: "Phone Case 3",
    frontImage: "/products/PhoneCase3.JPG",
    hoverImage: "/products/PhoneCase3-1.JPG",
    price: 22.88,
  },
  {
    id: 4,
    name: "Phone Case 4",
    frontImage: "/products/PhoneCase4.JPG",
    hoverImage: "/products/PhoneCase4-1.JPG",
    price: 22.88,
  },
  {
    id: 5,
    name: "Phone Case 5",
    frontImage: "/products/PhoneCase5.JPG",
    hoverImage: "/products/PhoneCase5-1.JPG",
    price: 22.88,
  },
];

// 商品卡片组件
function ProductCard({ product }: { product: (typeof phoneCases)[0] }) {
  const [isHovered, setIsHovered] = useState(false); // 控制是否显示悬停图片

  return (
    <div
      className="w-[240px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[300px]">
        {/* 商品图像区域，默认显示 frontImage，鼠标悬停切换到 hoverImage */}
        <Image
          src={isHovered ? product.hoverImage : product.frontImage}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        {/* 商品名称 */}
        <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
        {/* 商品价格 */}
        <p className="text-sm text-gray-600 mb-2">${product.price.toFixed(2)}</p>
        {/* 现在购买（现在只是按钮样式，不跳转） */}
        <button className="mt-2 text-sm px-3 py-1 rounded-full border hover:bg-black hover:text-white transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}

// 总组件，用于渲染一排横向滑动的商品卡片
export default function PhoneCases() {
  return (
    <section className="px-6 py-10">
      {/* Section 标题 */}
      <h2 className="text-xl font-bold mb-4">Phone Cases（手机壳）</h2>
      {/* 横向滚动容器 */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {/* 渲染每个商品卡片 */}
        {phoneCases.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
