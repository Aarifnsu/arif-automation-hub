"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, serviceCategories } from "@/data/services";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarServicesOpen, setSidebarServicesOpen] = useState(false);
  const pathname = usePathname();
  const megaRef = useRef<HTMLLIElement>(null);
  const megaPanelRef = useRef<HTMLDivElement>(null);
  const megaTimeout = useRef<NodeJS.Timeout | null>(null);

  // Close mega menu on route change
  useEffect(() => {
    setMegaOpen(false);
    setSidebarOpen(false);
  }, [pathname]);

  // Close mega menu on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const t = e.target as Node;
      const inTrigger = megaRef.current?.contains(t);
      const inPanel = megaPanelRef.current?.contains(t);
      if (!inTrigger && !inPanel) setMegaOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMegaEnter = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

  return (
    <>
      <nav
        className="sticky top-0 z-[99] transition-all duration-400"
        style={{
          background: "var(--nav-bg)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--card-border)",
        }}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[80px] xl:h-[96px] px-4 xl:px-5 gap-3 relative">
          {/* Mobile burger */}
          <button
            className="hidden max-md:flex flex-col gap-[5px] bg-transparent border-none cursor-pointer absolute left-4 z-10"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-[22px] h-[2px] rounded transition-all duration-300"
              style={{
                background: "var(--text-primary)",
                transform: sidebarOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
              }}
            />
            <span
              className="block w-[22px] h-[2px] rounded transition-all duration-300"
              style={{
                background: "var(--text-primary)",
                opacity: sidebarOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-[22px] h-[2px] rounded transition-all duration-300"
              style={{
                background: "var(--text-primary)",
                transform: sidebarOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "none",
              }}
            />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 no-underline max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2"
          >
            <Image
              src="/images/arif-automation-hub-icon-transparent.webp"
              alt="Arif Automation Hub"
              width={80}
              height={80}
              className="rounded-[14px] w-[60px] h-[60px] md:w-[64px] md:h-[64px] xl:w-[80px] xl:h-[80px]"
              style={{
                boxShadow: "var(--logo-glow)",
                background: "var(--logo-bg)",
              }}
            />
          </Link>

          {/* Desktop menu */}
          <ul className="flex items-center justify-center gap-1.5 lg:gap-2 xl:gap-4 list-none max-md:hidden flex-1 min-w-0 xl:flex-none xl:absolute xl:left-1/2 xl:-translate-x-1/2">
            {navLinks.map((link) =>
              link.hasMega ? (
                <li
                  key={link.label}
                  className="relative"
                  ref={megaRef}
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                >
                  <button
                    className="flex items-center gap-1 xl:gap-1.5 cursor-pointer transition-colors duration-200 text-[12px] xl:text-[13px] font-semibold px-3 lg:px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-full whitespace-nowrap"
                    style={{
                      color: megaOpen ? "var(--electric-blue)" : "var(--text-secondary)",
                      background: megaOpen ? "var(--nav-pill-active-bg)" : "var(--bg-card)",
                      border: `1px solid ${megaOpen ? "var(--electric-blue)" : "var(--card-border)"}`,
                      boxShadow: "0 2px 10px var(--shadow-color)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--electric-blue)";
                      e.currentTarget.style.color = "var(--electric-blue)";
                      e.currentTarget.style.background = "var(--nav-pill-active-bg)";
                    }}
                    onMouseLeave={(e) => {
                      if (megaOpen) return;
                      e.currentTarget.style.borderColor = "var(--card-border)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.background = "var(--bg-card)";
                    }}
                    onClick={() => setMegaOpen(!megaOpen)}
                  >
                    {link.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="no-underline text-[12px] xl:text-[13px] font-semibold px-3 lg:px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap"
                    style={{
                      color:
                        pathname === link.href
                          ? "var(--electric-blue)"
                          : "var(--text-secondary)",
                      background: pathname === link.href ? "var(--nav-pill-active-bg)" : "var(--bg-card)",
                      border: pathname === link.href ? "1px solid var(--electric-blue)" : "1px solid var(--card-border)",
                      boxShadow: "0 2px 10px var(--shadow-color)",
                    }}
                    onMouseEnter={(e) => {
                      if (pathname !== link.href) {
                        e.currentTarget.style.borderColor = "var(--electric-blue)";
                        e.currentTarget.style.color = "var(--electric-blue)";
                        e.currentTarget.style.background = "var(--nav-pill-active-bg)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (pathname !== link.href) {
                        e.currentTarget.style.borderColor = "var(--card-border)";
                        e.currentTarget.style.color = "var(--text-secondary)";
                        e.currentTarget.style.background = "var(--bg-card)";
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

                {/* Mega Menu */}
                <div
                  ref={megaPanelRef}
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                  className="absolute top-full left-1/2 rounded-2xl shadow-xl transition-all duration-300 overflow-hidden max-md:hidden"
                  style={{
                    width: "min(780px, calc(100vw - 2rem))",
                    padding: megaOpen ? "20px" : "0",
                    background: "var(--bg-card)",
                    border: megaOpen
                      ? "1px solid var(--card-border)"
                      : "none",
                    opacity: megaOpen ? 1 : 0,
                    visibility: megaOpen ? "visible" : "hidden",
                    transform: `translateX(-50%) ${megaOpen ? "translateY(0)" : "translateY(-10px)"}`,
                    maxHeight: megaOpen ? "600px" : "0",
                  }}
                >
                  <div
                    className="grid"
                    style={{
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "12px",
                    }}
                  >
                    {serviceCategories.map((cat, i) => (
                      <div key={i}>
                        <h4
                          className="text-white text-xs font-bold rounded-lg uppercase tracking-wider"
                          style={{
                            background: cat.gradient,
                            padding: "7px 14px",
                            marginBottom: "6px",
                          }}
                        >
                          {cat.title}
                        </h4>
                        <div className="flex flex-col">
                          {cat.links.map((subLink, j) => (
                            <Link
                              key={j}
                              href={subLink.href}
                              className="no-underline rounded-md transition-all duration-200 flex items-center"
                              style={{
                                color: "var(--text-secondary)",
                                padding: "5px 10px 5px 12px",
                                fontSize: "13.5px",
                                lineHeight: "1.3",
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.color =
                                  "var(--electric-blue)")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.color =
                                  "var(--text-secondary)")
                              }
                            >
                              <span
                                className="mr-1.5"
                                style={{
                                  fontWeight: 900,
                                  fontSize: "16px",
                                }}
                              >
                                →
                              </span>
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-4 pt-3 flex items-center justify-between"
                    style={{ borderTop: "1px solid var(--card-border)" }}
                  >
                    <span
                      className="text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Need help choosing?
                    </span>
                    <Link
                      href="/free-audit"
                      className="text-sm font-semibold no-underline transition-opacity hover:opacity-80"
                      style={{ color: "var(--electric-blue)" }}
                    >
                      Get a Free Audit →
                    </Link>
                  </div>
                </div>

          {/* Desktop right side */}
          <div className="flex items-center gap-2 xl:gap-3 max-md:hidden shrink-0">
            <ThemeToggle />
            <Link
              href="/free-audit"
              className="px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl text-[12px] xl:text-[13px] font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              style={{
                background: "var(--gradient-blue)",
                boxShadow: "0 4px 15px var(--shadow-glow)",
              }}
            >
              Free Audit
            </Link>
          </div>

          {/* Mobile theme toggle */}
          <div className="hidden max-md:flex absolute right-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-[97] md:hidden"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className="fixed top-0 left-0 h-full z-[98] transition-transform duration-300 overflow-y-auto md:hidden"
        style={{
          width: "280px",
          background: "var(--bg-card)",
          borderRight: "1px solid var(--card-border)",
          transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <div className="p-5">
          {/* Sidebar header */}
          <div
            className="flex items-center gap-2.5 pb-4 mb-4"
            style={{ borderBottom: "1px solid var(--card-border)" }}
          >
            <Image
              src="/images/arif-automation-hub-icon-transparent.webp"
              alt="Arif Automation Hub"
              width={64}
              height={64}
              className="rounded-[14px]"
              style={{
                boxShadow: "var(--logo-glow)",
                background: "var(--logo-bg)",
              }}
            />
          </div>

          {/* Sidebar links */}
          <div className="flex flex-col gap-0.5">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div key={link.label}>
                  <button
                    className="w-full flex items-center justify-between bg-transparent border-none cursor-pointer text-left rounded-lg transition-colors duration-200"
                    style={{
                      color: "var(--text-primary)",
                      padding: "10px 12px",
                      fontSize: "15px",
                      fontWeight: 500,
                    }}
                    onClick={() =>
                      setSidebarServicesOpen(!sidebarServicesOpen)
                    }
                  >
                    Services
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform duration-300 ${sidebarServicesOpen ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {sidebarServicesOpen && (
                    <div className="ml-2 mt-1">
                      {serviceCategories.map((cat, i) => (
                        <div key={i} className="mb-2">
                          <h4
                            className="text-white text-[11px] font-bold rounded-md uppercase tracking-wider"
                            style={{
                              background: cat.gradient,
                              padding: "5px 10px",
                              marginBottom: "3px",
                            }}
                          >
                            {cat.title}
                          </h4>
                          {cat.links.map((subLink, j) => (
                            <Link
                              key={j}
                              href={subLink.href}
                              className="no-underline block rounded transition-colors duration-200"
                              style={{
                                color: "var(--text-secondary)",
                                padding: "4px 8px 4px 10px",
                                fontSize: "13px",
                                lineHeight: "1.3",
                              }}
                              onClick={() => setSidebarOpen(false)}
                            >
                              <span
                                style={{
                                  fontWeight: 900,
                                  fontSize: "14px",
                                  marginRight: "5px",
                                }}
                              >
                                →
                              </span>
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="no-underline rounded-lg transition-colors duration-200"
                  style={{
                    color:
                      pathname === link.href
                        ? "var(--electric-blue)"
                        : "var(--text-primary)",
                    padding: "10px 12px",
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                  onClick={() => setSidebarOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          {/* Sidebar CTA */}
          <div className="mt-6">
            <Link
              href="/free-audit"
              className="block text-center py-3 rounded-xl text-sm font-semibold text-white no-underline"
              style={{ background: "var(--gradient-blue)" }}
              onClick={() => setSidebarOpen(false)}
            >
              Get Free Audit →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
