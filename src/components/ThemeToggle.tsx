"use client";

import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center rounded-full cursor-pointer transition-all duration-300 border-none ${className}`}
      style={{
        width: "56px",
        height: "28px",
        background: "var(--toggle-bg)",
      }}
      aria-label="Toggle theme"
    >
      <span
        className="absolute text-sm"
        style={{ left: "6px", top: "50%", transform: "translateY(-50%)" }}
      >
        ☀️
      </span>
      <span
        className="absolute text-sm"
        style={{
          right: "6px",
          top: "50%",
          transform: "translateY(-50%)",
          filter: "grayscale(1) brightness(0.35)",
        }}
      >
        🌙
      </span>
      <span
        className="absolute rounded-full transition-all duration-300"
        style={{
          width: "22px",
          height: "22px",
          background: "#ffffff",
          top: "3px",
          left: theme === "dark" ? "31px" : "3px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        }}
      />
    </button>
  );
}
