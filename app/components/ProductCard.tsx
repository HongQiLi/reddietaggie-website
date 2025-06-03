// components/ProductCard.tsx
"use client"; // 开启客户端渲染模式

import Image from "next/image"; // 用于加载优化过的图片

type ProductCardProps = {
  title: string;        // 商品标题
  price: string;        // 商品价格
  imageUrl: string;     // 商品图片地址
};

export default function ProductCard({ title, price, imageUrl }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-72 hover:shadow-lg transition">
      <div className="relative w-full h-60 rounded-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"          // 图片会填满容器
          objectFit="cover"     // 保持图片比例裁剪
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">${price}</p>
      </div>
    </div>
  );
}
