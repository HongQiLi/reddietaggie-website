"use client"; // 前端组件（不是纯后端渲染）

import Image from "next/image"; // 从 Next.js 导入优化过的图片组件
import { useState } from "react"; // 引入 React 的状态管理 hook
import { ChevronRight, ChevronLeft } from "lucide-react"; // 导入左右箭头图标

// 构造一个包含 4 个饰品商品的数据列表
const charmItems = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1, // 每个商品的唯一编号（从 1 到 4）
  name: `Charm ${i + 1}`, // 商品名称
  frontImage: `/products/charm${i + 1}.JPG`, // 默认图片
  hoverImage: `/products/charm${i + 1}-1.JPG`, // 鼠标悬停时的图片
  price: 22.88, // 商品价格
}));

// 商品卡片组件（单个商品展示）
function ProductCard({ product }: { product: (typeof charmItems)[0] }) {
  const [isHovered, setIsHovered] = useState(false); // 控制是否显示悬停图片

  return (
    <div
      className="w-[240px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
      onMouseEnter={() => setIsHovered(true)} // 鼠标进入时显示悬停图
      onMouseLeave={() => setIsHovered(false)} // 鼠标离开恢复默认图
    >
      <div className="relative w-full h-[300px]">
        <Image
          src={isHovered ? product.hoverImage : product.frontImage} // 根据悬停状态切换图片
          alt={product.name} // 图片 alt 文本有助于 SEO 和无障碍
          fill // 让 Image 自动填满容器
          className="object-cover" // 保持图片比例
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1">{product.name}</h3> {/* 商品名称 */}
        <p className="text-sm text-gray-600 mb-2">${product.price.toFixed(2)}</p> {/* 商品价格 */}
        <button className="mt-2 text-sm px-3 py-1 rounded-full border hover:bg-black hover:text-white transition">
          Buy Now {/* 现在购买按钮（暂不跳转） */}
        </button>
      </div>
    </div>
  );
}

// 商品列表组件，初始展示 5 个，点击箭头按钮滑动浏览
export default function CharmsShine() {
  const [startIndex, setStartIndex] = useState(0); // 当前起始索引
  const visibleCount = 3; // 每次展示的商品数

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCount < charmItems.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const visibleItems = charmItems.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="px-6 py-10">
      <h2 className="text-xl font-bold mb-4">Charms & Shine（饰品与闪闪小物）</h2> {/* 模块标题 */}
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
          {visibleItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {startIndex + visibleCount < charmItems.length && (
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
