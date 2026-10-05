import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceDetails } from "@/data/serviceDetails";
import FAQAccordion from "@/components/FAQAccordion";
import PaymentPolicy from "@/components/PaymentPolicy";

const serviceImages: Record<string, string> = {
  "🛍️": "/images/shopify-complete-store-solution.webp",
  "🤖": "/images/ai-bot-task-automation-assistant.webp",
  "💻": "/images/custom-code-development-database.webp",
  "🎨": "/images/ui-ux-design-creative-tools.webp",
  "📊": "/images/seo-analytics-performance-dashboard.webp",
  "📱": "/images/shopify-mobile-app-integration.webp",
};

const slugs = Object.keys(serviceDetails);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails[slug];
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden section px-4"
        style={{
          background: "var(--bg-primary)",
          transition: "background 0.4s",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
            style={{
              top: "-150px",
              right: "-100px",
              background: service.gradient,
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium no-underline mb-8 transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
          >
            &larr; All Services
          </Link>

          <div className="flex items-start gap-6 flex-wrap">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden relative"
              style={{
                background: service.gradient,
              }}
            >
              <Image
                src={serviceImages[service.icon] || "/images/shopify-complete-store-solution.webp"}
                alt={service.title}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h1
                className="font-display text-4xl md:text-5xl font-extrabold leading-[1.1] mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {service.title}
              </h1>
              <p
                className="text-xl font-medium mb-4"
                style={{ color: "var(--electric-blue)" }}
              >
                {service.tagline}
              </p>
              <p
                className="text-lg leading-relaxed max-w-2xl"
                style={{ color: "var(--text-secondary)" }}
              >
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section
        className="section px-4"
        style={{
          background: "var(--bg-secondary)",
          transition: "background 0.4s",
        }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center section-head">
            <span
              className="inline-block text-[13px] uppercase tracking-[2px] font-semibold mb-3"
              style={{ color: "var(--neon-cyan)" }}
            >
              What We Offer
            </span>
            <h2
              className="font-display text-[clamp(28px,4vw,42px)] font-bold leading-[1.2]"
              style={{ color: "var(--text-primary)" }}
            >
              Features & <span className="gradient-text">Capabilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feat) => (
              <div
                key={feat.title}
                className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--card-border)",
                  boxShadow: "0 4px 24px var(--shadow-color)",
                }}
              >
                <div className="w-10 h-10 mb-4 rounded-lg flex items-center justify-center" style={{ background: "rgba(37, 99, 235, 0.1)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--electric-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3
                  className="font-display text-lg font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {feat.title}
                </h3>
                <p
                  className="text-[14px] leading-[1.7]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="section px-4"
        style={{
          background: "var(--bg-primary)",
          transition: "background 0.4s",
        }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[800px] mx-auto section-head">
            <span
              className="inline-block text-[13px] uppercase tracking-[2px] font-semibold mb-3"
              style={{ color: "var(--neon-cyan)" }}
            >
              Our Process
            </span>
            <h2
              className="font-display text-[clamp(28px,4vw,42px)] font-bold leading-[1.2] mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              How We <span className="gradient-text">Work</span>
            </h2>
            <p
              className="text-base leading-[1.7]"
              style={{ color: "var(--text-secondary)" }}
            >
              A proven process tailored to deliver the best results for your
              project.
            </p>
          </div>

          <div className="relative max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Connecting line */}
            <div
              className="hidden lg:block absolute h-[2px] opacity-30"
              style={{
                top: "40px",
                left: "60px",
                right: "60px",
                background:
                  "linear-gradient(90deg, var(--electric-blue), var(--neon-cyan))",
              }}
            />

            {service.process.map((s) => (
              <div key={s.step} className="relative text-center">
                <div
                  className="w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center font-display text-[28px] font-bold relative z-[2]"
                  style={{
                    background: "var(--bg-card)",
                    border: "2px solid var(--card-border)",
                    color: "var(--electric-blue)",
                    transition: "background 0.4s, border-color 0.4s",
                  }}
                >
                  {s.step}
                </div>
                <h3
                  className="font-display text-base font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[13px] leading-[1.6]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent payment policy (replaces public price tiers) */}
      <PaymentPolicy />

      {/* FAQ */}
      <section
        className="section px-4"
        style={{
          background: "var(--bg-primary)",
          transition: "background 0.4s",
        }}
      >
        <div className="max-w-[720px] mx-auto">
          <div className="text-center section-head">
            <span
              className="inline-block text-[13px] uppercase tracking-[2px] font-semibold mb-3"
              style={{ color: "var(--neon-cyan)" }}
            >
              FAQ
            </span>
            <h2
              className="font-display text-[clamp(28px,4vw,42px)] font-bold leading-[1.2]"
              style={{ color: "var(--text-primary)" }}
            >
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="section px-4"
        style={{
          background: "var(--bg-secondary)",
          transition: "background 0.4s",
        }}
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
            Ready to Get <span className="gradient-text">Started?</span>
          </h2>
          <p
            className="text-base leading-[1.7] mb-8 max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Let&apos;s discuss your project and find the perfect solution for
            your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-xl text-base font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 text-center"
              style={{
                background: "var(--gradient-blue)",
                boxShadow: "0 4px 20px var(--shadow-glow)",
              }}
            >
              Contact Us &rarr;
            </Link>
            <Link
              href="/free-audit"
              className="px-10 py-4 rounded-xl text-base font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5 text-center"
              style={{
                background: "transparent",
                border: "1px solid var(--card-border)",
                color: "var(--text-primary)",
              }}
            >
              Get Free Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
