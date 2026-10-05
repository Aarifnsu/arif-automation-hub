import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { serviceCards } from "@/data/services";
import MobileCarousel from "@/components/MobileCarousel";

const serviceImages: Record<string, string> = {
  "🛍️": "/images/shopify-complete-store-solution.webp",
  "🤖": "/images/ai-bot-task-automation-assistant.webp",
  "💻": "/images/custom-code-development-database.webp",
  "🎨": "/images/ui-ux-design-creative-tools.webp",
  "📊": "/images/seo-analytics-performance-dashboard.webp",
  "📱": "/images/shopify-mobile-app-integration.webp",
};

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our full range of digital services — Shopify development, AI automation, web development, design, SEO, and app development.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-12 md:py-20 px-4"
        style={{ background: "var(--bg-primary)", transition: "background 0.4s" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
            style={{
              top: "-200px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "var(--hero-glow1)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto text-center">
          <span
            className="inline-block text-[13px] uppercase tracking-[2px] font-semibold mb-4"
            style={{ color: "var(--neon-cyan)" }}
          >
            What We Do
          </span>
          <h1
            className="font-display text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Our <span className="gradient-text">Services</span>
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            End-to-end digital solutions to build, automate, and scale your
            business. From Shopify stores to AI-powered automation, we deliver
            results that matter.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="py-12 md:py-20 px-4"
        style={{ background: "var(--bg-secondary)", transition: "background 0.4s" }}
      >
        <div className="max-w-[1280px] mx-auto">
        <MobileCarousel desktopClassName="grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 h-full w-full"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
                boxShadow: "0 4px 24px var(--shadow-color)",
              }}
            >
              <div className="w-12 h-12 mb-5 relative rounded-lg overflow-hidden">
                <Image
                  src={serviceImages[card.icon] || "/images/shopify-complete-store-solution.webp"}
                  alt={card.title}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3
                className="font-display text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {card.title}
              </h3>

              <p
                className="text-[15px] leading-[1.7] mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                {card.description}
              </p>

              <ul className="space-y-2 mb-8">
                {card.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span style={{ color: "var(--neon-cyan)" }}>&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={card.href}
                className="inline-flex items-center gap-1 text-sm font-semibold no-underline transition-colors duration-200"
                style={{ color: "var(--electric-blue)" }}
              >
                Learn More
                <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">
                  &rarr;
                </span>
              </Link>
            </div>
          ))}
        </MobileCarousel>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-12 md:py-20 px-4"
        style={{ background: "var(--bg-primary)", transition: "background 0.4s" }}
      >
        <div
          className="max-w-[800px] mx-auto text-center rounded-2xl p-12 md:p-16"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--card-border)",
            boxShadow: "0 8px 40px var(--shadow-color)",
          }}
        >
          <h2
            className="font-display text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Not Sure Where to <span className="gradient-text">Start?</span>
          </h2>
          <p
            className="text-base leading-[1.7] mb-8 max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Get a free, no-obligation audit of your website or business
            processes. We will identify opportunities and recommend the best path
            forward.
          </p>
          <Link
            href="/free-audit"
            className="inline-block px-10 py-4 rounded-xl text-base font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--gradient-blue)",
              boxShadow: "0 4px 20px var(--shadow-glow)",
            }}
          >
            Get Free Audit &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
