import Link from "next/link";
import { marketplaces } from "@/data/marketplaces";

/**
 * Transparent Payment Policy.
 *  - variant="full"    → standalone section (service pages, contact, free audit)
 *  - variant="compact" → small highlighted card (footer, sidebars)
 */
export default function PaymentPolicy({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  if (variant === "compact") {
    return (
      <div
        className="rounded-xl p-4"
        style={{
          background: "rgba(34, 197, 94, 0.08)",
          border: "1px solid rgba(34, 197, 94, 0.3)",
        }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <ShieldIcon />
          <span
            className="text-[13px] font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            No Hidden Charges
          </span>
        </div>
        <p
          className="text-xs leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Price is fixed only after a free audit and a final meeting. Payment
          by bank transfer with an official receipt. This website never
          processes payments.{" "}
          <Link
            href="/terms#payment-policy"
            className="font-semibold no-underline"
            style={{ color: "var(--electric-blue)" }}
          >
            Read our payment policy →
          </Link>
        </p>
      </div>
    );
  }

  const steps = [
    {
      n: "01",
      title: "Free Audit & Discovery",
      desc: "We first understand your project, scope, and requirements in detail — completely free, no commitment.",
    },
    {
      n: "02",
      title: "Final Meeting, Fixed Price",
      desc: "After the audit and a final discussion we agree on a clear scope and a fixed price. Nothing is charged before this meeting.",
    },
    {
      n: "03",
      title: "Bank Transfer + Official Receipt",
      desc: "Payment is made only through supported bank transfer, and every payment comes with an official money receipt.",
    },
  ];

  return (
    <section
      id="payment-policy"
      className="py-14 md:py-20 px-4"
      style={{
        background: "var(--bg-secondary)",
        transition: "background 0.4s",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div
          className="rounded-[20px] p-6 md:p-10"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--card-border)",
          }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-8">
            <div
              className="inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-[13px] font-bold"
              style={{
                background: "rgba(34, 197, 94, 0.12)",
                border: "1px solid rgba(34, 197, 94, 0.35)",
                color: "#16a34a",
              }}
            >
              <ShieldIcon />
              No Hidden Charges · No Payment Before the Final Meeting
            </div>
          </div>

          <h2
            className="font-display text-[clamp(24px,3.2vw,34px)] font-bold leading-[1.2] mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Transparent Pricing.{" "}
            <span className="gradient-text">Zero Surprises.</span>
          </h2>
          <p
            className="text-[15px] leading-[1.7] mb-8 max-w-[720px]"
            style={{ color: "var(--text-secondary)" }}
          >
            We don&apos;t publish fixed price tags because every project is
            different. Instead, we keep the process simple and fully
            transparent:
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl p-5"
                style={{
                  background: "rgba(37, 99, 235, 0.06)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <div
                  className="font-display text-sm font-bold mb-2"
                  style={{ color: "var(--neon-cyan)" }}
                >
                  {s.n}
                </div>
                <h3
                  className="font-display text-base font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[13.5px] leading-[1.65]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Warning */}
          <div
            className="rounded-2xl p-5 flex gap-3"
            style={{
              background: "rgba(245, 158, 11, 0.08)",
              border: "1px solid rgba(245, 158, 11, 0.35)",
            }}
          >
            <span className="shrink-0 mt-0.5" style={{ color: "#f59e0b" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </span>
            <div>
              <div
                className="text-sm font-bold mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                Please note — this website does not process any payments.
              </div>
              <p
                className="text-[13.5px] leading-[1.65]"
                style={{ color: "var(--text-secondary)" }}
              >
                We never use third-party payment links, agents, or
                intermediaries. The only other verified way to hire us is
                through our official marketplace profiles (
                {marketplaces.map((m, i) => (
                  <span key={m.name}>
                    <a
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold no-underline"
                      style={{ color: "var(--electric-blue)" }}
                    >
                      {m.name}
                    </a>
                    {i < marketplaces.length - 1 ? ", " : ""}
                  </span>
                ))}
                ), where payment is handled by that platform&apos;s own secure
                system. If anyone asks you to pay on our behalf through any
                other channel, it is not us —{" "}
                <Link
                  href="/contact"
                  className="font-semibold no-underline"
                  style={{ color: "var(--electric-blue)" }}
                >
                  contact us directly to verify
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#16a34a" }}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
