"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 页面往下滑超过 50px 时，显示导航栏
      setShow(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
