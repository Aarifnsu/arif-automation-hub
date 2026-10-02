import Link from "next/link";
import Image from "next/image";

export default function PortfolioSection() {
  const projects = [
    {
      image: "/images/online-store-product-showcase.webp",
      tag: "Shopify",
      title: "Beauty with Thai",
      desc: "Complete Shopify store build with custom theme, product setup, and SEO optimization.",
      gradient: "linear-gradient(135deg, #1e3a5f, #2563eb)",
      href: "/portfolio",
    },
    {
      image: "/images/ecommerce-store-automation-workflow.webp",
      tag: "AI Automation",
      title: "Smart Order Processing",
      desc: "AI-powered workflow automation reducing order processing time by 70%.",
      gradient: "linear-gradient(135deg, #1a2f4a, #06b6d4)",
      href: "/portfolio",
    },
    {
      image: "/images/responsive-web-design-layout.webp",
      tag: "WordPress",
      title: "Chemora Buildtech",
      desc: "Corporate website with modern design, fast loading, and full SEO implementation.",
      gradient: "linear-gradient(135deg, #0f2b3d, #22d3ee)",
      href: "/portfolio",
    },
  ];

  return (
    <section
      className="py-24 px-4"
      style={{
        background: "var(--bg-secondary)",
        transition: "background 0.4s",
      }}
    >
      {/* Section header */}
      <div className="text-center max-w-[640px] mx-auto mb-14">
        <span
          className="inline-block text-[13px] uppercase tracking-[2px] font-semibold mb-3"
          style={{ color: "var(--neon-cyan)" }}
        >
          Our Work
        </span>
        <h2
          className="font-display text-[clamp(28px,4vw,42px)] font-bold leading-[1.2] mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Projects That{" "}
          <span className="gradient-text">Speak for Themselves</span>
        </h2>
        <p
          className="text-base leading-[1.7]"
          style={{ color: "var(--text-secondary)" }}
        >
          Real results for real businesses. Explore our latest work across
          industries.
        </p>
      </div>

      {/* Portfolio grid */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group rounded-[20px] overflow-hidden cursor-pointer transition-all duration-400 hover:-translate-y-2"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--card-border)",
            }}
          >
            {/* Thumbnail */}
            <div
              className="relative w-full h-[200px] overflow-hidden"
              style={{ background: p.gradient }}
            >
              <Image src={p.image} alt={p.title} fill className="object-cover" />
              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[rgba(12,25,41,0.85)]">
                <Link
                  href={p.href}
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white no-underline"
                  style={{ background: "var(--gradient-blue)" }}
                >
                  View Project
                </Link>
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <span
                className="inline-block px-3 py-1 rounded-[20px] text-xs font-medium mb-3"
                style={{
                  background: "rgba(37, 99, 235, 0.1)",
                  border: "1px solid rgba(37, 99, 235, 0.2)",
                  color: "var(--neon-cyan)",
                }}
              >
                {p.tag}
              </span>
              <h3
                className="font-display text-lg font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-[1.6]"
                style={{ color: "var(--text-secondary)" }}
              >
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
