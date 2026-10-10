import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, guides, and updates on AI automation, Shopify development, SEO, and digital growth strategies from Arif AI Automation Hub.",
};

const blogPosts = [
  {
    slug: "how-ai-automation-is-transforming-shopify-stores-in-2025",
    title: "How AI Automation Is Transforming Shopify Stores in 2026",
    excerpt:
      "Discover how AI-powered tools like custom chatbots, automated workflows, and smart product recommendations are helping Shopify store owners boost revenue and save hours every week.",
    category: "AI Automation",
    categoryColor: "#2563eb",
    date: "October 10, 2026",
    readTime: "5 min read",
    gradient: "linear-gradient(135deg, #2563eb, #06b6d4)",
  },
  {
    slug: "ai-and-business-automation-transforming-operations-in-2025",
    title: "AI & Business Automation: Transforming Operations in 2026",
    excerpt:
      "Master AI automation with GoHighLevel, custom AI agents, CRM automation, chatbots, and workflow automation to streamline your business operations and scale without burnout.",
    category: "AI Automation",
    categoryColor: "#2563eb",
    date: "October 10, 2026",
    readTime: "9 min read",
    gradient: "linear-gradient(135deg, #2563eb, #3b82f6)",
  },
  {
    slug: "shopify-solutions-scaling-ecommerce-in-2025",
    title: "Shopify Solutions: Scaling E-commerce in 2026",
    excerpt:
      "Build high-converting Shopify stores with custom development, theme customization, app integration, and performance optimization to maximize revenue and customer satisfaction.",
    category: "Shopify",
    categoryColor: "#16a34a",
    date: "October 10, 2026",
    readTime: "7 min read",
    gradient: "linear-gradient(135deg, #16a34a, #22c55e)",
  },
  {
    slug: "web-app-development-building-digital-solutions-in-2025",
    title: "Web & App Development: Building Digital Solutions in 2026",
    excerpt:
      "From WordPress to React.js, Laravel to Node.js APIs, and full-stack solutions — learn how modern web and app development transforms your business.",
    category: "Web Development",
    categoryColor: "#0891b2",
    date: "October 10, 2026",
    readTime: "8 min read",
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
  },
  {
    slug: "design-and-branding-creating-visual-impact-in-2025",
    title: "Design & Branding: Creating Visual Impact in 2026",
    excerpt:
      "Build a compelling brand identity with professional logo design, UI/UX design, social media graphics, and print materials that stand out and convert.",
    category: "Design",
    categoryColor: "#c026d3",
    date: "October 10, 2026",
    readTime: "7 min read",
    gradient: "linear-gradient(135deg, #c026d3, #d946ef)",
  },
  {
    slug: "seo-and-analytics-mastering-visibility-in-2025",
    title: "SEO & Analytics: Mastering Visibility in 2026",
    excerpt:
      "Master search engine optimization with technical SEO, keyword research, on-page optimization, analytics setup, and performance tracking for sustainable growth.",
    category: "SEO",
    categoryColor: "#ea580c",
    date: "October 10, 2026",
    readTime: "7 min read",
    gradient: "linear-gradient(135deg, #ea580c, #f97316)",
  },
  {
    slug: "app-development-building-scalable-mobile-solutions-in-2025",
    title: "App Development: Building Scalable Mobile Solutions in 2026",
    excerpt:
      "Develop iOS and Android apps with professional design, cross-platform solutions, and long-term maintenance for sustained performance and growth.",
    category: "App Development",
    categoryColor: "#7c3aed",
    date: "October 10, 2026",
    readTime: "8 min read",
    gradient: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
  },
];

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

      {/* Blog Posts */}
      <section className="section px-4" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--card-border)",
                  boxShadow: "0 4px 20px var(--shadow-color)",
                }}
              >
                {/* Gradient banner */}
                <div
                  className="h-3 w-full"
                  style={{ background: post.gradient }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: `${post.categoryColor}18`,
                        color: post.categoryColor,
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {post.readTime}
                    </span>
                  </div>
                  <h2
                    className="font-display text-lg font-bold leading-snug mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {post.date}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold no-underline transition-colors duration-200"
                      style={{ color: "var(--electric-blue)" }}
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
