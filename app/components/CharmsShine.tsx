"use client"; // 告诉 Next.js 这是客户端组件，支持交互效果（如鼠标悬停）

import Image from "next/image"; // 导入 Next.js 的图片组件，自动优化图片加载
import { useState } from "react"; // React 的 Hook，用来管理局部状态（如是否悬停）

// 创建一个饰品商品数组（每个对象代表一个商品）
const charmsShine = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1, // 每个商品的唯一编号（1~4）
  name: `Charm ${i + 1}`, // 商品名称（例如：Charm 1）
  frontImage: `/products/charm${i + 1}.JPG`, // 默认显示的图片路径
  hoverImage: `/products/charm${i + 1}-1.JPG`, // 鼠标悬停时替换的图片路径
  price: 22.88, // 商品价格
}));

// 单个商品卡片组件
function ProductCard({ product }: { product: (typeof charmsShine)[0] }) {
  const [isHovered, setIsHovered] = useState(false); // 控制是否正在悬停（true/false）

  return (
    <div
      className="w-[240px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
      onMouseEnter={() => setIsHovered(true)}  // 鼠标进入时切换成悬停图
      onMouseLeave={() => setIsHovered(false)} // 鼠标离开时恢复默认图
    >
      {/* 商品图片区域 */}
      <div className="relative w-full h-[300px]">
        <Image
          src={isHovered ? product.hoverImage : product.frontImage} // 判断当前显示哪张图
          alt={product.name} // SEO 和辅助功能用的图片说明
          fill // 让图片自动填满容器
          className="object-cover" // 保持图片比例不变
        />
      </div>
      {/* 商品详情区域 */}
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1">{product.name}</h3> {/* 显示商品名 */}
        <p className="text-sm text-gray-600 mb-2">${product.price.toFixed(2)}</p> {/* 显示价格 */}
        <button className="mt-2 text-sm px-3 py-1 rounded-full border hover:bg-black hover:text-white transition">
          Buy Now {/* 点击按钮，目前无跳转 */}
        </button>
      </div>
    </div>
  );
}

// 导出整个「饰品与闪闪小物」商品列表组件
export default function CharmsShine() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-xl font-bold mb-4">Charms & Shine（饰品与闪闪小物）</h2> {/* 分类标题 */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide"> {/* 横向滑动容器 */}
        {charmsShine.map((product) => (
          <ProductCard key={product.id} product={product} /> // 渲染每个商品
        ))}
      </div>
    </section>
  );
}
