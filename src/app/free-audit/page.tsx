import type { Metadata } from "next";
import AuditForm from "@/components/AuditForm";
import PaymentPolicy from "@/components/PaymentPolicy";

export const metadata: Metadata = {
  title: "Free Website Audit",
  description:
    "Get a free comprehensive website audit covering performance, SEO, and growth strategy. Discover hidden issues and get actionable recommendations.",
};

const auditFeatures = [
  {
    iconPath: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
    title: "Performance Analysis",
    description:
      "We analyze your website's load speed, Core Web Vitals, mobile responsiveness, and server performance to identify bottlenecks slowing down your site.",
    items: [
      "Page speed scores (mobile & desktop)",
      "Core Web Vitals assessment",
      "Server response time analysis",
      "Image & asset optimization review",
    ],
  },
  {
    iconPath: "M11 11m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0M21 21l-4.35-4.35",
    title: "SEO Audit",
    description:
      "A deep dive into your on-page and technical SEO, identifying issues that prevent your site from ranking higher on search engines.",
    items: [
      "Meta tags & structured data review",
      "Keyword opportunity analysis",
      "Backlink profile overview",
      "Technical SEO health check",
    ],
  },
  {
    iconPath: "M12 20V10M18 20V4M6 20V16",
    title: "Growth Strategy",
    description:
      "Based on our findings, we create a prioritized action plan with quick wins and long-term strategies to maximize your website's potential.",
    items: [
      "Conversion rate improvement tips",
      "User experience recommendations",
      "Competitive advantage opportunities",
      "Priority-ranked action items",
    ],
  },
];

export default function FreeAuditPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden section-hero px-4"
        style={{ background: "var(--bg-primary)" }}
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
          <div
            className="inline-flex items-center gap-2 rounded-full text-sm font-semibold mb-6"
            style={{
              background: "rgba(37, 99, 235, 0.08)",
              border: "1px solid rgba(37, 99, 235, 0.2)",
              padding: "8px 20px",
              color: "var(--electric-blue)",
            }}
          >
            100% Free - No Strings Attached
          </div>
          <h1
            className="font-display text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Get Your Free{" "}
            <span className="gradient-text">Website Audit</span>
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Discover hidden issues hurting your website&apos;s performance, SEO,
            and conversions. Get a detailed report with actionable
            recommendations.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="section px-4" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-[1280px] mx-auto">
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-center mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            What&apos;s <span className="gradient-text">Included</span>
          </h2>
          <p
            className="text-center text-lg section-head max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Our comprehensive audit covers three critical areas of your online
            presence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {auditFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(37, 99, 235, 0.1)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--electric-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={feature.iconPath}/></svg>
                </div>
                <h3
                  className="font-display text-xl font-bold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="var(--electric-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      <span style={{ color: "var(--text-muted)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Form */}
      <section className="section px-4" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-[800px] mx-auto">
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-center mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Request Your <span className="gradient-text">Free Audit</span>
          </h2>
          <p
            className="text-center text-lg mb-10"
            style={{ color: "var(--text-secondary)" }}
          >
            Fill out the form below and we&apos;ll send you a detailed report
            within 48 hours.
          </p>

          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--card-border)",
            }}
          >
            <AuditForm />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section px-4" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-[1280px] mx-auto text-center">
          <p
            className="font-display text-xl font-bold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Trusted by <span className="gradient-text">50+ Businesses</span>{" "}
            Worldwide
          </p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Join hundreds of businesses who have improved their online presence
            with our audit insights.
          </p>
          <div
            className="flex flex-wrap justify-center gap-10 mt-8 pt-8"
            style={{ borderTop: "1px solid var(--card-border)" }}
          >
            {[
              { number: "500+", label: "Audits Completed" },
              { number: "92%", label: "Client Satisfaction" },
              { number: "3x", label: "Avg. Traffic Increase" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold gradient-text">
                  {stat.number}
                </div>
                <div className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PaymentPolicy />
    </>
  );
}
