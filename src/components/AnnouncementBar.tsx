"use client";

import Link from "next/link";

function BarItems({ hidden = false }: { hidden?: boolean }) {
  return (
    <span aria-hidden={hidden} className="flex items-center shrink-0 pr-24">
      <span className="font-semibold text-white text-sm">
        Welcome to Arif AI Automation Hub
      </span>
      <span className="font-medium text-white text-sm ml-24">
        AI-Powered Digital Services · Automate · Grow · Scale
      </span>
      <Link
        href="/contact"
        className="ml-24 px-4 py-1 rounded-full text-xs font-semibold text-white no-underline shrink-0"
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
        className="ml-6 px-4 py-1 rounded-full text-xs font-semibold no-underline shrink-0"
        style={{
          background: "linear-gradient(135deg, #dbeafe, #cffafe)",
          color: "#0c1929",
        }}
      >
        Free Audit →
      </Link>
    </span>
  );
}

export default function AnnouncementBar() {
  return (
    <div
      className="relative overflow-hidden z-[100]"
      style={{
        background: "linear-gradient(90deg, #2563eb, #06b6d4, #2563eb)",
        backgroundSize: "200% 100%",
        animation: "shimmer 3s ease infinite",
        padding: "10px 0",
      }}
    >
      {/* Scrolling marquee — all screen sizes. Content duplicated for a seamless loop. */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div
          className="flex items-center"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          <BarItems />
          <BarItems hidden />
        </div>
      </div>
    </div>
  );
}
