"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden section-hero px-4"
      style={{ background: "var(--bg-primary)", transition: "background 0.4s" }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            top: "-200px",
            right: "-100px",
            background: "var(--hero-glow1)",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{
            bottom: "-100px",
            left: "-50px",
            background: "var(--hero-glow2)",
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        {/* Text */}
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full text-sm font-semibold mb-6"
            style={{
              background: "rgba(37, 99, 235, 0.08)",
              border: "1px solid rgba(37, 99, 235, 0.2)",
              padding: "8px 20px",
              color: "var(--electric-blue)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "#22c55e",
                animation: "pulse-glow 2s ease-in-out infinite",
              }}
            />
            AI Automation Hub
          </div>

          <h1
            className="font-display text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-4 md:mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Build. Automate.
            <br />
            <span className="gradient-text">Scale Your Business.</span>
          </h1>

          <p
            className="text-base md:text-xl leading-relaxed mb-6 md:mb-8 max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            We craft high-converting Shopify stores, build AI-powered automation
            systems, and deliver stunning web experiences that drive real growth
            for businesses worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 section-head">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl text-base font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 text-center"
              style={{
                background: "var(--gradient-blue)",
                boxShadow: "0 4px 20px var(--shadow-glow)",
              }}
            >
              Get Started →
            </Link>
            <Link
              href="/free-audit"
              className="px-8 py-4 rounded-xl text-base font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5 text-center"
              style={{
                background: "transparent",
                border: "1px solid var(--card-border)",
                color: "var(--text-primary)",
              }}
            >
              Free Website Audit
            </Link>
          </div>

          <div
            className="flex flex-nowrap overflow-x-auto gap-5 md:gap-10 pt-6 md:pt-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ borderTop: "1px solid var(--card-border)" }}
          >
            {[
              { number: "150+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "15+", label: "Countries Served" },
            ].map((stat) => (
              <div key={stat.label} className="shrink-0">
                <div className="font-display text-2xl md:text-3xl font-bold gradient-text">
                  {stat.number}
                </div>
                <div
                  className="text-xs md:text-sm mt-0.5 whitespace-nowrap"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard visual */}
        <div className="relative hidden lg:flex justify-center items-center">
          <div className="relative w-full max-w-[480px]">
            <div
              className="rounded-[20px] p-7 transition-all duration-400"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
                boxShadow: "0 40px 80px var(--shadow-color)",
              }}
            >
              {/* Window dots */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                {[
                  { label: "Revenue", value: "$48.2K", change: "↑ 24.5%" },
                  { label: "Conversions", value: "3,847", change: "↑ 18.2%" },
                  { label: "Traffic", value: "127K", change: "↑ 32.1%" },
                  { label: "Orders", value: "2,156", change: "↑ 15.8%" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl p-4 transition-all duration-400"
                    style={{
                      background: "rgba(37, 99, 235, 0.06)",
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    <div
                      className="text-xs uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {m.label}
                    </div>
                    <div
                      className="font-display text-2xl font-bold mt-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {m.value}
                    </div>
                    <div className="text-xs mt-1 text-green-500">
                      {m.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="flex items-end gap-2 h-20 py-3">
                {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      background:
                        i % 2 === 0
                          ? "var(--electric-blue)"
                          : "var(--neon-cyan)",
                      opacity: i % 2 === 0 ? 1 : 0.7,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating tags */}
            {[
              {
                label: "Store Live",
                color: "#22c55e",
                pos: { top: "-10px", right: "-20px" },
                delay: "0s",
              },
              {
                label: "AI Active",
                color: "#2563eb",
                pos: { bottom: "60px", left: "-30px" },
                delay: "2s",
              },
              {
                label: "+340% Growth",
                color: "#06b6d4",
                pos: { bottom: "-10px", right: "20px" },
                delay: "4s",
              },
            ].map((tag) => (
              <div
                key={tag.label}
                className="absolute flex items-center gap-2 rounded-xl text-[13px] font-medium"
                style={{
                  ...tag.pos,
                  background: "var(--bg-card)",
                  border: "1px solid var(--card-border)",
                  padding: "10px 18px",
                  color: "var(--text-primary)",
                  boxShadow: "0 10px 40px var(--shadow-color)",
                  animation: `float 6s ease-in-out infinite`,
                  animationDelay: tag.delay,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: tag.color }}
                />
                {tag.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
