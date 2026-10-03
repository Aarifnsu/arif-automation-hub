export default function WhyUsSection() {
  const features = [
    {
      iconSvg: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: "Lightning Fast Delivery",
      desc: "We don't waste time. Our streamlined process delivers your project faster without compromising quality.",
    },
    {
      iconSvg: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      title: "Results-Driven Approach",
      desc: "Every pixel, every line of code is designed to drive conversions, engagement, and real business growth.",
    },
    {
      iconSvg: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Dedicated Support",
      desc: "24/7 communication, regular updates, and a dedicated team that treats your business like their own.",
    },
    {
      iconSvg: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      ),
      title: "AI-First Thinking",
      desc: "We integrate AI tools from day one — smarter workflows, automated tasks, and data-driven decisions.",
    },
    {
      iconSvg: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Global Experience",
      desc: "Serving clients across USA, Canada, Europe, and Asia with localized understanding and global standards.",
    },
    {
      iconSvg: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      ),
      title: "Transparent Pricing",
      desc: "No hidden fees, no surprises. Clear project scopes and honest pricing from the very first conversation.",
    },
  ];

  return (
    <section
      className="py-24 px-4"
      style={{
        background: "var(--bg-primary)",
        transition: "background 0.4s",
      }}
    >
      {/* Section header */}
      <div className="text-center max-w-[800px] mx-auto mb-16">
        <span
          className="inline-block text-[13px] uppercase tracking-[2px] font-semibold mb-3"
          style={{ color: "var(--neon-cyan)" }}
        >
          Why Choose Us
        </span>
        <h2
          className="font-display text-[clamp(28px,4vw,42px)] font-bold leading-[1.2] mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Built Different.{" "}
          <span className="gradient-text">Deliver Better.</span>
        </h2>
        <p
          className="text-base leading-[1.7]"
          style={{ color: "var(--text-secondary)" }}
        >
          We combine technical expertise with creative thinking to deliver
          solutions that actually move the needle.
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-[20px] p-9 text-center transition-all duration-300 hover:-translate-y-1.5"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--card-border)",
            }}
          >
            <div
              className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(6, 182, 212, 0.1)", color: "var(--neon-cyan)" }}
            >
              {f.iconSvg}
            </div>
            <h3
              className="font-display text-lg font-semibold mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              {f.title}
            </h3>
            <p
              className="text-sm leading-[1.7]"
              style={{ color: "var(--text-secondary)" }}
            >
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
