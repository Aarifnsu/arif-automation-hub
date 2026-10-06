/** "Trusted by" logo marquee — auto-scrolling client / partner logos. */

const logos = [
  { name: "StyleManiacs", text: "StyleManiacs" },
  { name: "Chemora", text: "Chemora" },
  { name: "BeautyWithThai", text: "BeautyWithThai" },
  { name: "Kopeks", text: "Kopeks" },
  { name: "ArifLab", text: "ArifLab" },
  { name: "NextBrand", text: "NextBrand" },
];

function LogoItem({ name, text }: { name: string; text: string }) {
  return (
    <div
      className="flex items-center gap-3 px-8 shrink-0"
      aria-label={name}
    >
      {/* Placeholder logo icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--card-border)",
          boxShadow: "0 2px 8px var(--shadow-color)",
        }}
      >
        <span
          className="font-display font-bold text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          {text.charAt(0)}
        </span>
      </div>
      <span
        className="font-display font-semibold text-base tracking-wide whitespace-nowrap"
        style={{ color: "var(--text-muted)" }}
      >
        {text}
      </span>
    </div>
  );
}

export default function TrustedBySection() {
  return (
    <section
      className="py-12 md:py-16 px-4 overflow-hidden"
      style={{
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--card-border)",
        transition: "background 0.4s, border-color 0.4s",
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <p
          className="text-center text-[12px] uppercase tracking-[3px] font-semibold mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          Trusted by{" "}
          <span className="gradient-text font-bold">10+</span>{" "}
          Global Clients
        </p>

        {/* Marquee container */}
        <div className="relative">
          {/* Fade edges */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10"
            style={{
              background:
                "linear-gradient(to right, var(--bg-secondary), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10"
            style={{
              background:
                "linear-gradient(to left, var(--bg-secondary), transparent)",
            }}
          />

          {/* Scrolling track */}
          <div
            className="flex"
            style={{ animation: "marquee 25s linear infinite" }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos].map((logo, i) => (
              <LogoItem key={`${logo.name}-${i}`} name={logo.name} text={logo.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
