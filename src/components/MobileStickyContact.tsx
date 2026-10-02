"use client";

import Link from "next/link";

export default function MobileStickyContact() {
  return (
    <Link
      href="/contact"
      className="fixed z-50 hidden max-md:flex items-center gap-1 no-underline transition-all duration-300"
      style={{
        bottom: "54px",
        right: "10px",
        background: "transparent",
        color: "var(--electric-blue)",
        padding: "8px 14px",
        fontSize: "13px",
        fontWeight: 600,
        borderRadius: "20px",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      Contact Us
    </Link>
  );
}
