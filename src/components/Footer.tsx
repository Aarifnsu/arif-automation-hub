"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PaymentPolicy from "./PaymentPolicy";
import { marketplaces } from "@/data/marketplaces";

const serviceLinks = [
  { label: "Shopify Solutions", href: "/services/shopify" },
  { label: "AI & Automation", href: "/services/ai-automation" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Design & Branding", href: "/services/design-branding" },
  { label: "SEO & Analytics", href: "/services/seo-analytics" },
  { label: "App Development", href: "/services/app-development" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Free Audit", href: "/free-audit" },
];

const socials = [
  { name: "LinkedIn", href: "#", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { name: "Twitter", href: "#", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { name: "GitHub", href: "#", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
      style={{
        background: open ? "rgba(37, 99, 235, 0.28)" : "rgba(37, 99, 235, 0.16)",
        border: "1.5px solid rgba(37, 99, 235, 0.45)",
        color: "var(--electric-blue)",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </span>
  );
}

/** Column that is always open on md+, collapsible on mobile */
function FooterColumn({
  title,
  id,
  open,
  onToggle,
  children,
}: {
  title: string;
  id: string;
  open: boolean;
  onToggle: (id: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="md:border-0 border-b md:pb-0 pb-3"
      style={{ borderColor: "var(--card-border)" }}
    >
      <button
        type="button"
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between md:pointer-events-none bg-transparent border-none cursor-pointer text-left py-3 md:py-0 md:mb-4"
        aria-expanded={open}
        aria-controls={`footer-${id}`}
      >
        <h4
          className="font-semibold text-sm uppercase tracking-wider"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h4>
        <span style={{ color: "var(--text-muted)" }}>
          <Chevron open={open} />
        </span>
      </button>
      <div
        id={`footer-${id}`}
        className={`${open ? "block" : "hidden"} md:block pb-2 md:pb-0`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const [openCol, setOpenCol] = useState<string | null>(null);
  const toggle = (id: string) => setOpenCol((cur) => (cur === id ? null : id));

  const linkStyle = { color: "var(--text-secondary)" } as const;
  const hoverIn = (e: React.MouseEvent<HTMLAnchorElement>) =>
    (e.currentTarget.style.color = "var(--electric-blue)");
  const hoverOut = (e: React.MouseEvent<HTMLAnchorElement>) =>
    (e.currentTarget.style.color = "var(--text-secondary)");

  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--card-border)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {/* Brand — always visible */}
          <div className="mb-2 md:mb-0">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/arif-automation-hub-icon-transparent.webp"
                alt="Arif AI Automation Hub"
                width={40}
                height={40}
                className="rounded-[10px]"
              />
              <span
                className="font-display font-bold text-xl"
                style={{ color: "var(--text-primary)" }}
              >
                Arif <span className="gradient-text">AI Automation Hub</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              Empowering businesses with AI-driven automation, stunning web
              solutions, and data-driven growth strategies.
            </p>
            <div className="flex gap-3 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 no-underline hover:-translate-y-0.5"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--card-border)",
                    color: "var(--text-muted)",
                  }}
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Marketplace badges */}
            <div className="mt-5">
              <div
                className="text-[11px] uppercase tracking-wider font-semibold mb-2"
                style={{ color: "var(--text-muted)" }}
              >
                Also hire us on
              </div>
              <div className="flex gap-2 flex-wrap">
                {marketplaces.map((m) => (
                  <a
                    key={m.name}
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--card-border)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                    {m.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <FooterColumn title="Services" id="services" open={openCol === "services"} onToggle={toggle}>
            <div className="flex flex-col gap-2.5">
              {serviceLinks.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm no-underline transition-colors duration-200" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                  {item.label}
                </Link>
              ))}
            </div>
          </FooterColumn>

          {/* Company */}
          <FooterColumn title="Company" id="company" open={openCol === "company"} onToggle={toggle}>
            <div className="flex flex-col gap-2.5">
              {companyLinks.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm no-underline transition-colors duration-200" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                  {item.label}
                </Link>
              ))}
            </div>
          </FooterColumn>

          {/* Contact */}
          <FooterColumn title="Get in Touch" id="contact" open={openCol === "contact"} onToggle={toggle}>
            <div className="flex flex-col gap-3">
              <a href="mailto:arif.frelance@gmail.com" className="flex items-center gap-2 text-sm no-underline" style={linkStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                arif.frelance@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm" style={linkStyle}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Serving Clients Worldwide
              </div>
              <div className="flex items-center gap-2 text-sm" style={linkStyle}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Response within 24 hours
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-4 px-5 py-2.5 rounded-xl text-sm font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--gradient-blue)",
                boxShadow: "0 4px 15px var(--shadow-glow)",
              }}
            >
              Start a Project →
            </Link>
          </FooterColumn>
        </div>

        {/* Payment policy — compact */}
        <div className="mt-8 md:mt-12">
          <PaymentPolicy variant="compact" />
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 md:mt-10 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-center md:text-left"
          style={{ borderTop: "1px solid var(--card-border)" }}
        >
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Arif AI Automation Hub. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm no-underline transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={hoverIn}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
