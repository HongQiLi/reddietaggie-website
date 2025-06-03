"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true); // 初始显示
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 向下滚动超过 50px 且继续向下 → 隐藏导航栏
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShow(false);
      } else {
        // 向上滚动 or 回到顶部 → 显示导航栏
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0 bg-white shadow-md" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-lg font-bold">Reddie Taggie</span>
        <nav className="space-x-4 text-sm">
          <a href="#shop" className="hover:underline">Shop</a>
          <a href="#story" className="hover:underline">Our Story</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </div>
  );
}
