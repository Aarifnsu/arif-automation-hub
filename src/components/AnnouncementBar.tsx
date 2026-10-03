"use client";

import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div
      className="relative overflow-hidden z-[100]"
      style={{
        background: "linear-gradient(90deg, #2563eb, #06b6d4, #2563eb)",
        backgroundSize: "200% 100%",
        animation: "shimmer 3s ease infinite",
        padding: "10px 16px",
      }}
    >
      {/* Desktop — static centered */}
      <div className="hidden md:flex items-center justify-center gap-4">
        <p className="font-medium text-white text-sm">
          🚀 Transform Your Business with AI-Powered Solutions
        </p>
        <Link
          href="/contact"
          className="px-4 py-1 rounded-full text-xs font-semibold text-white no-underline transition-all duration-300 hover:bg-white/30"
          style={{
            background: "var(--bar-btn-bg)",
            border: "1px solid var(--bar-btn-border)",
            backdropFilter: "blur(4px)",
          }}
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile — scrolling marquee */}
      <div className="md:hidden flex whitespace-nowrap overflow-hidden">
        <div
          className="flex items-center gap-6 animate-marquee"
          style={{ animation: "marquee 18s linear infinite" }}
        >
          <span className="font-medium text-white text-sm">
            🚀 Transform Your Business with AI-Powered Solutions
          </span>
          <Link
            href="/contact"
            className="px-4 py-1 rounded-full text-xs font-semibold text-white no-underline shrink-0"
            style={{
              background: "var(--bar-btn-bg)",
              border: "1px solid var(--bar-btn-border)",
              backdropFilter: "blur(4px)",
            }}
          >
            Contact Us
          </Link>
          <Link
            href="/free-audit"
            className="px-4 py-1 rounded-full text-xs font-semibold no-underline shrink-0"
            style={{
              background: "#ffffff",
              color: "#0c1929",
            }}
          >
            Free Audit →
          </Link>

          {/* Duplicate for seamless loop */}
          <span className="font-medium text-white text-sm">
            🚀 Transform Your Business with AI-Powered Solutions
          </span>
          <Link
            href="/contact"
            className="px-4 py-1 rounded-full text-xs font-semibold text-white no-underline shrink-0"
            style={{
              background: "var(--bar-btn-bg)",
              border: "1px solid var(--bar-btn-border)",
              backdropFilter: "blur(4px)",
            }}
          >
            Contact Us
          </Link>
          <Link
            href="/free-audit"
            className="px-4 py-1 rounded-full text-xs font-semibold no-underline shrink-0"
            style={{
              background: "#ffffff",
              color: "#0c1929",
            }}
          >
            Free Audit →
          </Link>
        </div>
      </div>
    </div>
  );
}
