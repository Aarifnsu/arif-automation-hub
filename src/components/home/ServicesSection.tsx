"use client";

import Link from "next/link";
import Image from "next/image";
import { serviceCards } from "@/data/services";

const serviceImages: Record<string, string> = {
  "🛍️": "/images/shopify-complete-store-solution.webp",
  "🤖": "/images/ai-bot-task-automation-assistant.webp",
  "💻": "/images/custom-code-development-database.webp",
  "🎨": "/images/ui-ux-design-creative-tools.webp",
  "📊": "/images/seo-analytics-performance-dashboard.webp",
  "📱": "/images/shopify-mobile-app-integration.webp",
};

export default function ServicesSection() {
  return (
    <section
      className="py-24 px-4"
      style={{
        background: "var(--bg-secondary)",
        transition: "background 0.4s",
      }}
    >
      {/* Section header */}
      <div className="text-center max-w-[800px] mx-auto mb-16">
        <span
          className="inline-block text-[13px] uppercase tracking-[2px] font-semibold mb-3"
          style={{ color: "var(--neon-cyan)" }}
        >
          Our Services
        </span>
        <h2
          className="font-display text-[clamp(28px,4vw,42px)] font-bold leading-[1.2] mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Everything You Need to{" "}
          <span className="gradient-text">Dominate Online</span>
        </h2>
        <p
          className="text-base leading-[1.7]"
          style={{ color: "var(--text-secondary)" }}
        >
          From custom Shopify stores to AI-powered automation, we deliver
          end-to-end digital solutions that transform your business.
        </p>
      </div>

      {/* Services grid — 6-column layout on desktop */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6">
        {serviceCards.map((card, i) => (
          <Link
            key={card.title}
            href={card.href}
            className={`group relative overflow-hidden rounded-[20px] p-8 no-underline transition-all duration-400 cursor-pointer
              ${i < 3 ? "xl:col-span-2" : ""}
              ${i === 3 ? "xl:col-start-2 xl:col-span-2" : ""}
              ${i === 4 ? "xl:col-span-2" : ""}
              ${i === 5 ? "xl:col-start-2 xl:col-span-2 2xl:col-start-auto" : ""}
            `}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--card-border)",
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400"
              style={{ background: "var(--gradient-blue)" }}
            />

            <div
              className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-5"
              style={{ background: "rgba(37, 99, 235, 0.1)" }}
            >
              <Image src={serviceImages[card.icon] || "/images/arif-automation-hub-icon-transparent.webp"} alt={card.title} width={48} height={48} className="rounded-lg" />
            </div>

            <h3
              className="font-display text-xl font-semibold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              {card.title}
            </h3>

            <p
              className="text-sm leading-[1.6] mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              {card.description}
            </p>

            <ul className="list-none mb-5">
              {card.features.map((f) => (
                <li
                  key={f}
                  className="text-[13px] py-1 flex items-center gap-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span style={{ color: "var(--neon-cyan)", fontSize: "12px" }}>
                    →
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <span
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-300 group-hover:gap-3"
              style={{ color: "var(--neon-cyan)" }}
            >
              Explore Services →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
