export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "They transformed our outdated website into a high-converting Shopify store. Sales increased 200% in the first month. Absolutely incredible team!",
      initials: "JM",
      name: "James Mitchell",
      role: "CEO, TechVentures USA",
    },
    {
      quote:
        "The AI chatbot they built handles 80% of our customer queries automatically. Our support team can now focus on complex issues. Game changer!",
      initials: "SK",
      name: "Sarah Klein",
      role: "COO, Nordic Commerce",
    },
    {
      quote:
        "Professional, fast, and incredibly talented. They delivered our complete brand redesign and new website in just 3 weeks. Highly recommended!",
      initials: "RL",
      name: "Robert Lee",
      role: "Founder, CanadaFresh Co.",
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
          Testimonials
        </span>
        <h2
          className="font-display text-[clamp(28px,4vw,42px)] font-bold leading-[1.2] mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          What Our <span className="gradient-text">Clients Say</span>
        </h2>
        <p
          className="text-base leading-[1.7]"
          style={{ color: "var(--text-secondary)" }}
        >
          Don&apos;t just take our word for it — hear from the businesses
          we&apos;ve helped grow.
        </p>
      </div>

      {/* Testimonial cards */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--card-border)",
            }}
          >
            {/* Stars */}
            <div
              className="text-base mb-4 tracking-[2px]"
              style={{ color: "#f59e0b" }}
            >
              ★★★★★
            </div>

            <blockquote
              className="text-[15px] italic leading-[1.7] mb-5"
              style={{ color: "var(--text-secondary)" }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-base text-white"
                style={{ background: "var(--gradient-blue)" }}
              >
                {t.initials}
              </div>
              <div>
                <div
                  className="font-semibold text-[15px]"
                  style={{ color: "var(--text-primary)" }}
                >
                  {t.name}
                </div>
                <div
                  className="text-[13px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
