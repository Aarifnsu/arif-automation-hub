import type { Metadata } from "next";
import Link from "next/link";
import { portfolioProjects, portfolioCategories } from "@/data/portfolio";
import PortfolioFilter from "@/components/PortfolioFilter";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Explore our portfolio of Shopify stores, AI automation systems, websites, and branding projects delivered for clients worldwide.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 md:py-28 px-4"
        style={{
          background: "var(--bg-primary)",
          transition: "background 0.4s",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
            style={{
              top: "-200px",
              right: "-100px",
              background: "var(--hero-glow1)",
            }}
          />
        </div>

        <div className="max-w-[1280px] mx-auto text-center relative z-10">
          <span
            className="inline-block text-[13px] uppercase tracking-[2px] font-semibold mb-3"
            style={{ color: "var(--neon-cyan)" }}
          >
            Our Work
          </span>
          <h1
            className="font-display text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Real projects. Real results. Explore how we have helped businesses
            worldwide grow with AI automation, stunning Shopify stores, and
            high-performance websites.
          </p>
        </div>
      </section>

      {/* Portfolio Grid with Filter */}
      <section
        className="py-20 px-4"
        style={{
          background: "var(--bg-secondary)",
          transition: "background 0.4s",
        }}
      >
        <div className="max-w-[1280px] mx-auto">
          <PortfolioFilter
            projects={portfolioProjects}
            categories={portfolioCategories}
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-20 px-4"
        style={{
          background: "var(--bg-primary)",
          transition: "background 0.4s",
        }}
      >
        <div className="max-w-[800px] mx-auto text-center">
          <h2
            className="font-display text-[clamp(28px,4vw,42px)] font-bold leading-[1.2] mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Ready to Build Something{" "}
            <span className="gradient-text">Amazing?</span>
          </h2>
          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Let us turn your vision into reality. Get a free consultation and
            discover how we can help your business grow.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-xl text-base font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--gradient-blue)",
              boxShadow: "0 4px 20px var(--shadow-glow)",
            }}
          >
            Start Your Project →
          </Link>
        </div>
      </section>
    </>
  );
}
