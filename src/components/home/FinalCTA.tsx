import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      className="py-12 md:py-20 px-4 text-center"
      style={{
        background:
          "linear-gradient(180deg, var(--bg-secondary), var(--bg-primary))",
        transition: "background 0.4s",
      }}
    >
      <div className="max-w-[800px] mx-auto">
        <h2
          className="font-display text-[clamp(28px,4vw,44px)] font-extrabold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Ready to{" "}
          <span className="gradient-text">Transform Your Business?</span>
        </h2>

        <p
          className="text-[15px] md:text-[17px] leading-[1.7] mb-7 md:mb-9"
          style={{ color: "var(--text-secondary)" }}
        >
          Let&apos;s build something amazing together. Whether you need a new
          store, AI automation, or a complete digital makeover — we&apos;ve got
          you covered.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl text-base font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--gradient-blue)",
              boxShadow: "0 4px 20px var(--shadow-glow)",
            }}
          >
            Start Your Project →
          </Link>
          <Link
            href="/free-audit"
            className="px-8 py-4 rounded-xl text-base font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "transparent",
              border: "1px solid var(--card-border)",
              color: "var(--text-primary)",
            }}
          >
            Get Free Audit First
          </Link>
        </div>
      </div>
    </section>
  );
}
