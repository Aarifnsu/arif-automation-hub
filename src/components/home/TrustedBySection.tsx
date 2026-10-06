/** "Trusted by" logo marquee — auto-scrolling client / partner logos. */

import type { ReactNode } from "react";

interface LogoEntry {
  name: string;
  icon: ReactNode;
  wordmark: string;
}

const logos: LogoEntry[] = [
  {
    name: "StyleManiacs",
    wordmark: "StyleManiacs",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
        <path d="M12 20c0-4 8-4 8-8a4 4 0 0 0-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Chemora",
    wordmark: "Chemora",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="20" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M12 14h8M12 18h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="9" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "BeautyWithThai",
    wordmark: "BeautyWithThai",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M16 6c-3 0-6 2-6 5 0 4 6 6 6 12 0-6 6-8 6-12 0-3-3-5-6-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 26h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Kopeks",
    wordmark: "Kopeks",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <polygon points="16,4 28,12 28,24 16,28 4,24 4,12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <polygon points="16,10 22,14 22,22 16,24 10,22 10,14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "NovaTech",
    wordmark: "NovaTech",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M6 26V6l10 20L26 6v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "CloudSync",
    wordmark: "CloudSync",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M8 22a6 6 0 0 1-.5-12A8 8 0 0 1 23 12h1a5 5 0 0 1 0 10H8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M16 18v-6m-3 3l3-3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Zenith",
    wordmark: "Zenith",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M6 8h20L6 24h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Axion",
    wordmark: "Axion",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M16 6v20M6 16h20" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
];

function LogoItem({ entry }: { entry: LogoEntry }) {
  return (
    <div
      className="flex items-center gap-3 px-6 md:px-10 shrink-0"
      aria-label={entry.name}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--card-border)",
          boxShadow: "0 2px 10px var(--shadow-color)",
          color: "var(--text-muted)",
        }}
      >
        {entry.icon}
      </div>
      <span
        className="font-display font-semibold text-[15px] md:text-base tracking-wide whitespace-nowrap"
        style={{ color: "var(--text-muted)" }}
      >
        {entry.wordmark}
      </span>
    </div>
  );
}

export default function TrustedBySection() {
  return (
    <section
      className="py-12 md:py-16 px-4 overflow-hidden"
      style={{
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--card-border)",
        transition: "background 0.4s, border-color 0.4s",
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <p
          className="text-center text-[12px] uppercase tracking-[3px] font-semibold mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          Trusted by{" "}
          <span className="gradient-text font-bold">10+</span>{" "}
          Global Clients
        </p>

        {/* Marquee container */}
        <div className="relative">
          {/* Fade edges */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 z-10"
            style={{
              background:
                "linear-gradient(to right, var(--bg-secondary), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 z-10"
            style={{
              background:
                "linear-gradient(to left, var(--bg-secondary), transparent)",
            }}
          />

          {/* Scrolling track */}
          <div
            className="flex items-center"
            style={{ animation: "marquee 30s linear infinite" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <LogoItem key={`${logo.name}-${i}`} entry={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
