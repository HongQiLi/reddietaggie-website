"use client";

// 引入 Next.js 内建的图片组件，用于优化图片加载
import Image from "next/image";

// 定义组件所接收的属性类型（名字、描述、价格、图片链接）
type ProductCardProps = {
  name: string;          // 商品名称
  description: string;   // 商品简介
  price: number;         // 商品价格
  imageUrl: string;      // 商品图片地址
};

// 商品卡片组件
export default function ProductCard({ name, description, price, imageUrl }: ProductCardProps) {
  return (
    // 卡片的整体外框：宽220px，圆角，白底，有阴影，鼠标悬停时阴影增强
    <div className="w-[220px] shrink-0 rounded-xl bg-white shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      
      {/* 图片区域：高度固定为 h-64，使用 Next.js 的 Image 填满整个区域 */}
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}             // 图片地址
          alt={name}                 // 替代文字（无障碍）
          layout="fill"              // 图片填满容器
          objectFit="cover"          // 图片按照比例裁剪填满
          className="hover:scale-105 transition-transform duration-300" // 悬停时轻微放大
        />
      </div>

      {/* 文字信息区域 */}
      <div className="p-4">
        {/* 商品名称 */}
        <h3 className="font-semibold text-sm mb-1">{name}</h3>
        {/* 商品简介 */}
        <p className="text-neutral-500 text-xs">{description}</p>
        {/* 商品价格（保留两位小数） */}
        <p className="font-bold text-sm mt-2">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
