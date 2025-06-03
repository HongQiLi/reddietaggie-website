"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all z-50 ${
        show ? "bg-white shadow-md py-4" : "py-2"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 text-sm text-neutral-700 flex justify-between items-center">
        <span className="font-bold text-lg">Reddie Taggie</span>
        <div className="space-x-4">
          <a href="#shop" className="hover:underline">
            Shop
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
