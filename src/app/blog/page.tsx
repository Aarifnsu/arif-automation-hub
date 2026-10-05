import type { Metadata } from "next";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, guides, and updates on AI automation, Shopify development, SEO, and digital growth strategies from Arif Automation Hub.",
};

const topics = [
  "AI Automation",
  "Shopify Tips",
  "SEO Strategies",
  "Web Development",
  "Business Growth",
  "Design Trends",
  "Case Studies",
  "Industry News",
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden section-hero px-4"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{
              top: "-150px",
              right: "-100px",
              background: "var(--hero-glow1)",
            }}
          />
        </div>
        <div className="max-w-[1280px] mx-auto text-center relative z-10">
          <h1
            className="font-display text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Our <span className="gradient-text">Blog</span>
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Insights, guides, and updates on AI automation, Shopify development,
            SEO, and digital growth strategies.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section px-4" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-[800px] mx-auto text-center">
          <div
            className="rounded-2xl p-10 md:p-14"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--card-border)",
            }}
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(37, 99, 235, 0.1)" }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--electric-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </div>

            <h2
              className="font-display text-3xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Coming <span className="gradient-text">Soon</span>
            </h2>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              We&apos;re working on amazing content about AI automation, Shopify
              best practices, SEO strategies, and more. Subscribe to be the
              first to know when we publish.
            </p>

            <NewsletterSignup />
          </div>

          {/* Topics Preview */}
          <div className="mt-12">
            <p
              className="text-sm font-semibold uppercase tracking-wider mb-5"
              style={{ color: "var(--text-muted)" }}
            >
              Topics we&apos;ll cover
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--card-border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
