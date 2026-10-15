"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/data/portfolio";
import MobileCarousel from "@/components/MobileCarousel";

const portfolioImages: Record<string, string> = {
  "🛍️": "/images/shopify-complete-store-solution.webp",
  "🤖": "/images/ai-bot-task-automation-assistant.webp",
  "🌐": "/images/custom-code-development-database.webp",
  "⚙️": "/images/ecommerce-store-automation-workflow.webp",
  "🚗": "/images/ecommerce-store-automation-workflow.webp",
  "👗": "/images/ecommerce-mobile-responsive-sales-growth.webp",
  "🎨": "/images/ui-ux-design-creative-tools.webp",
};

interface PortfolioFilterProps {
  projects: PortfolioProject[];
  categories: { label: string; value: string }[];
}

export default function PortfolioFilter({
  projects,
  categories,
}: PortfolioFilterProps) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer"
            style={{
              background:
                active === cat.value
                  ? "var(--gradient-blue)"
                  : "transparent",
              border:
                active === cat.value
                  ? "1px solid transparent"
                  : "1px solid var(--card-border)",
              color:
                active === cat.value ? "#fff" : "var(--text-secondary)",
              boxShadow:
                active === cat.value
                  ? "0 4px 20px var(--shadow-glow)"
                  : "none",
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Project cards — swipe on mobile, grid on desktop */}
      <MobileCarousel autoScrollMs={3000} key={filtered.map((p) => p.slug).join("|")} desktopClassName="grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <div
            key={project.slug}
            className="rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1 h-full w-full"
            style={{
              background: "var(--bg-card)",
              border: project.liveLink ? "1px solid rgba(34, 197, 94, 0.3)" : "1px solid var(--card-border)",
            }}
          >
            {/* Gradient area with icon */}
            <div
              className="h-40 md:h-48 flex items-center justify-center relative"
              style={{ background: project.gradient }}
            >
              <Image
                src={portfolioImages[project.icon] || "/images/shopify-complete-store-solution.webp"}
                alt={project.title}
                width={200}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Card content */}
            <div className="p-6">
              {/* Tag badge */}
              <span
                className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                style={{
                  background: project.liveLink ? "rgba(34, 197, 94, 0.1)" : "rgba(37, 99, 235, 0.1)",
                  color: project.liveLink ? "rgb(34, 197, 94)" : "var(--electric-blue)",
                  border: project.liveLink ? "1px solid rgba(34, 197, 94, 0.2)" : "1px solid rgba(37, 99, 235, 0.2)",
                }}
              >
                {project.tag} {project.liveLink && "✓ Live"}
              </span>

              {/* Title - clickable if liveLink exists */}
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xl font-bold mb-2 block hover:underline transition-colors duration-300 no-underline cursor-pointer"
                  style={{ color: "rgb(34, 197, 94)" }}
                >
                  {project.title}
                </a>
              ) : (
                <h3
                  className="font-display text-xl font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>
              )}

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.shortDesc}
              </p>

              {/* Links */}
              <div className="flex flex-col gap-2">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold no-underline transition-colors duration-300 hover:underline"
                    style={{ color: "rgb(34, 197, 94)" }}
                  >
                    Visit Live Site →
                  </a>
                )}
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center text-sm font-semibold no-underline transition-colors duration-300"
                  style={{ color: "var(--electric-blue)" }}
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </MobileCarousel>
    </>
  );
}
