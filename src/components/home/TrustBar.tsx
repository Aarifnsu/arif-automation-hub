export default function TrustBar() {
  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "15+", label: "Countries Served" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  return (
    <section
      className="section-sm px-4"
      style={{
        background: "var(--trust-bg)",
        borderTop: "1px solid var(--card-border)",
        borderBottom: "1px solid var(--card-border)",
        transition: "background 0.4s, border-color 0.4s",
      }}
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-4 gap-2 md:gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div
              className="font-display text-[22px] sm:text-4xl md:text-5xl font-extrabold leading-none gradient-text"
            >
              {stat.number}
            </div>
            <div
              className="text-[11px] sm:text-sm md:text-[15px] mt-1.5 md:mt-2 leading-tight"
              style={{ color: "var(--text-secondary)" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
