"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed z-50 flex items-center justify-center cursor-pointer border-none transition-all duration-300"
      style={{
        bottom: "14px",
        right: "14px",
        width: "32px",
        height: "32px",
        borderRadius: "8px",
        fontSize: "14px",
        background: "var(--gradient-blue)",
        color: "#ffffff",
        opacity: visible ? 0.8 : 0,
        pointerEvents: visible ? "auto" : "none",
        boxShadow: "0 2px 8px var(--shadow-glow)",
      }}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
