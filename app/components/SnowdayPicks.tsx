// app/components/SnowdayPicks.tsx
"use client"; // 声明这是客户端组件，支持交互功能如鼠标悬停

import Image from "next/image"; // 导入 Next.js 内置图片组件，用于自动图片优化
import { useState } from "react"; // React 的 Hook，用于添加交互状态（如是否悬停）

// 定义滑雪好物商品数组
const snowdayPicks = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1, // 商品编号（从1到4）
  name: `Snowday Pick ${i + 1}`, // 商品名称，例如 Snowday Pick 1
  frontImage: `/products/snow${i + 1}.JPG`, // 默认图片路径
  hoverImage: `/products/snow${i + 1}-1.JPG`, // 鼠标悬停时显示的图片路径
  price: 22.88, // 商品价格
}));

// 单个商品卡片组件
function ProductCard({ product }: { product: (typeof charmsShine)[0] }) {
  const [isHovered, setIsHovered] = useState(false); // 控制当前卡片是否被鼠标悬停

  return (
    <div
      className="w-[240px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
      onMouseEnter={() => setIsHovered(true)}  // 当鼠标进入时设为悬停状态
      onMouseLeave={() => setIsHovered(false)} // 当鼠标离开时取消悬停状态
    >
      {/* 图片区域：高度300px，宽度自适应 */}
      <div className="relative w-full h-[300px]">
        <Image
          src={isHovered ? product.hoverImage : product.frontImage} // 根据悬停状态切换图片
          alt={product.name} // 提供图片的说明信息
          fill // 图片填满整个区域
          className="object-cover" // 保持图像比例裁剪填充
        />
      </div>
      {/* 商品名称与价格区域 */}
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1">{product.name}</h3> {/* 商品名称 */}
        <p className="text-sm text-gray-600 mb-2">${product.price.toFixed(2)}</p> {/* 商品价格 */}
        <button className="mt-2 text-sm px-3 py-1 rounded-full border hover:bg-black hover:text-white transition">
          Buy Now {/* 点击按钮（目前仅显示按钮样式） */}
        </button>
      </div>
    </div>
  );
}

// 总组件：滑雪好物横向滑动展示区块
export default function SnowdayPicks() {
  return (
    <section className="px-6 py-10">
      {/* 分类标题 */}
      <h2 className="text-xl font-bold mb-4">Snowday Picks（滑雪好物）</h2>
      {/* 横向滑动容器 */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {snowdayPicks.map((product) => (
          <ProductCard key={product.id} product={product} /> // 渲染每一个商品卡片
        ))}
      </div>
    </section>
  );
}
