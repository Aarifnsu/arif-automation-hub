"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--card-border)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/arif-automation-hub-icon-transparent.webp"
                alt="Arif Automation Hub"
                width={40}
                height={40}
                className="rounded-[10px]"
              />
              <span
                className="font-display font-bold text-xl"
                style={{ color: "var(--text-primary)" }}
              >
                Arif<span className="gradient-text">Automation</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              Empowering businesses with AI-driven automation, stunning web
              solutions, and data-driven growth strategies.
            </p>
            <div className="flex gap-3">
              {[
                { name: "LinkedIn", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { name: "Twitter", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                { name: "GitHub", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
                { name: "Dribbble", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702A9.63 9.63 0 0012 1.8c-.816 0-1.63.086-2.4.252z"/></svg> },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 no-underline hover:-translate-y-0.5"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--card-border)",
                    color: "var(--text-muted)",
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Services
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                "Shopify Solutions",
                "AI & Automation",
                "Web Development",
                "Design & Branding",
                "SEO & Analytics",
                "App Development",
              ].map((item) => (
                <Link
                  key={item}
                  href="/services"
                  className="text-sm no-underline transition-colors duration-200"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--electric-blue)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
                { label: "Free Audit", href: "/free-audit" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm no-underline transition-colors duration-200"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--electric-blue)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                arif.frelance@gmail.com
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Serving Clients Worldwide
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
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
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--card-border)" }}
        >
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Arif Automation Hub. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Sitemap", href: "#" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm no-underline transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--electric-blue)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
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
