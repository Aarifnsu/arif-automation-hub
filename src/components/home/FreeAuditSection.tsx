import Link from "next/link";

export default function FreeAuditSection() {
  const auditFeatures = [
    {
      iconSvg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: "Performance Analysis",
      desc: "Speed, Core Web Vitals & technical health check",
    },
    {
      iconSvg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      title: "SEO Audit Report",
      desc: "Keyword rankings, on-page SEO & competitor gaps",
    },
    {
      iconSvg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="2" x2="12" y2="6" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
        </svg>
      ),
      title: "Growth Strategy",
      desc: "Custom recommendations & actionable roadmap",
    },
  ];

  return (
    <section
      className="relative section px-4 overflow-hidden"
      style={{
        background: "var(--bg-primary)",
        transition: "background 0.4s",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-[1] max-w-[800px] mx-auto text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-[50px] text-sm font-semibold mb-6"
          style={{
            background: "rgba(6, 182, 212, 0.1)",
            border: "1px solid rgba(6, 182, 212, 0.25)",
            padding: "8px 20px",
            color: "var(--neon-cyan)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
          Limited Time Offer
        </div>

        <h2
          className="font-display text-[clamp(28px,4vw,42px)] font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Get Your{" "}
          <span
            style={{
              background: "var(--gradient-glow)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Free Website Audit
          </span>
        </h2>

        <p
          className="text-[15px] md:text-[17px] leading-[1.7] mb-7 md:mb-10 max-w-[600px] mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Share your website details and our expert team will analyze your
          site&apos;s performance, SEO, and conversion potential — completely
          free. No strings attached.
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-3 gap-2.5 md:gap-5 mb-8 md:mb-10">
          {auditFeatures.map((f) => (
            <div
              key={f.title}
              className="rounded-[14px] p-3 md:p-5 flex flex-col items-center md:items-start text-center md:text-left"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
                transition: "background 0.4s, border-color 0.4s",
              }}
            >
              <div className="mb-2.5" style={{ color: "var(--neon-cyan)" }}>{f.iconSvg}</div>
              <h4
                className="text-[12px] md:text-[15px] font-semibold mb-0 md:mb-1.5 leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                {f.title}
              </h4>
              <p
                className="hidden md:block text-[13px]"
                style={{ color: "var(--text-secondary)" }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/free-audit"
            className="px-8 py-4 rounded-xl text-base font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--gradient-blue)",
              boxShadow: "0 4px 20px var(--shadow-glow)",
            }}
          >
            Get My Free Audit →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "transparent",
              border: "1px solid var(--card-border)",
              color: "var(--text-primary)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
