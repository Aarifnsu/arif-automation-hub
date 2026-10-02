export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "We learn your business, goals, audience, and competitors to build the right strategy.",
    },
    {
      num: "02",
      title: "Design",
      desc: "Pixel-perfect mockups and prototypes that bring your vision to life before writing a single line of code.",
    },
    {
      num: "03",
      title: "Develop",
      desc: "Clean, optimized code built for speed, security, and scalability. Every feature tested thoroughly.",
    },
    {
      num: "04",
      title: "Launch & Grow",
      desc: "Go live with confidence. Ongoing support, analytics, and optimization to keep growing.",
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
      <div className="text-center max-w-[640px] mx-auto mb-14">
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
          From Idea to{" "}
          <span className="gradient-text">Launch in 4 Steps</span>
        </h2>
        <p
          className="text-base leading-[1.7]"
          style={{ color: "var(--text-secondary)" }}
        >
          A proven process that delivers results every time.
        </p>
      </div>

      {/* Steps */}
      <div className="relative max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Connecting line (desktop only) */}
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

        {steps.map((s) => (
          <div key={s.num} className="relative text-center">
            <div
              className="w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center font-display text-[28px] font-bold relative z-[2]"
              style={{
                background: "var(--bg-card)",
                border: "2px solid var(--card-border)",
                color: "var(--electric-blue)",
                transition: "background 0.4s, border-color 0.4s",
              }}
            >
              {s.num}
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
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
