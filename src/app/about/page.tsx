import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/data/team";
import { marketplaces } from "@/data/marketplaces";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Arif Automation Hub — our mission, team, and values driving AI-powered business solutions worldwide.",
};

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "50+", label: "Happy Clients" },
  { number: "15+", label: "Countries Served" },
  { number: "99%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: "innovation",
    title: "Innovation",
    desc: "We stay ahead of technology trends, leveraging AI and automation to deliver cutting-edge solutions that give your business a competitive advantage.",
  },
  {
    icon: "quality",
    title: "Quality",
    desc: "Every project meets the highest standards of design, performance, and functionality. We never cut corners on code quality or user experience.",
  },
  {
    icon: "transparency",
    title: "Transparency",
    desc: "Clear communication, honest timelines, and straightforward pricing. You always know exactly where your project stands and what comes next.",
  },
  {
    icon: "results",
    title: "Results",
    desc: "We measure success by your success. Every decision we make is driven by data and focused on delivering measurable business outcomes.",
  },
];

function ValueIcon({ type }: { type: string }) {
  const props = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "var(--electric-blue)", strokeWidth: "2", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (type) {
    case "innovation":
      return <svg {...props}><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2v1"/><path d="M12 7a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.4V17h-4v-2.6A4.5 4.5 0 0 1 8 11a4 4 0 0 1 4-4z"/></svg>;
    case "quality":
      return <svg {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
    case "transparency":
      return <svg {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case "results":
      return <svg {...props}><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>;
    default:
      return null;
  }
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden section-hero px-4"
        style={{
          background: "var(--bg-primary)",
          transition: "background 0.4s",
        }}
      >
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

        <div className="max-w-[1280px] mx-auto text-center relative z-10">
          <span
            className="inline-block text-[13px] uppercase tracking-[2px] font-semibold mb-3"
            style={{ color: "var(--neon-cyan)" }}
          >
            Who We Are
          </span>
          <h1
            className="font-display text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            About <span className="gradient-text">Arif Automation Hub</span>
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            We are a global digital services team specializing in AI automation,
            Shopify development, web solutions, and brand design. Our mission is
            to help businesses automate, scale, and thrive in the digital
            economy.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="section px-4"
        style={{
          background: "var(--bg-secondary)",
          transition: "background 0.4s",
        }}
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div
            className="rounded-2xl p-8 md:p-10 transition-all duration-400"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--card-border)",
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(37, 99, 235, 0.1)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--electric-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <h3
              className="font-display text-2xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Our Mission
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              To empower businesses of all sizes with intelligent automation and
              world-class digital solutions. We bridge the gap between
              technology and business growth, making AI-powered tools accessible
              and actionable for every entrepreneur.
            </p>
          </div>

          {/* Vision */}
          <div
            className="rounded-2xl p-8 md:p-10 transition-all duration-400"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--card-border)",
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(37, 99, 235, 0.1)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--electric-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
            </div>
            <h3
              className="font-display text-2xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Our Vision
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              To become the go-to digital services partner for businesses seeking
              AI-driven growth solutions. We envision a future where every
              business, regardless of size or location, can leverage the power
              of automation to compete on a global stage.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        className="section-sm px-4"
        style={{
          background: "var(--bg-primary)",
          transition: "background 0.4s",
        }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div
            className="rounded-2xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--card-border)",
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text">
                  {stat.number}
                </div>
                <div
                  className="text-sm mt-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Our Team
            </span>
            <h2
              className="font-display text-[clamp(28px,4vw,42px)] font-bold leading-[1.2] mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Meet the <span className="gradient-text">Experts</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              A dedicated team of developers, designers, and automation
              specialists delivering world-class results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[960px] mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl p-8 text-center transition-all duration-400 hover:-translate-y-1"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--card-border)",
                }}
              >
                {/* Photo or gradient circle with initials */}
                {member.photo ? (
                  <div
                    className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-5"
                    style={{
                      border: "3px solid var(--card-border)",
                      boxShadow: "0 6px 20px var(--shadow-glow)",
                      background: member.gradient,
                    }}
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: member.gradient }}
                  >
                    <span className="text-white font-display font-bold text-xl">
                      {member.initials}
                    </span>
                  </div>
                )}

                <h3
                  className="font-display text-lg font-bold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {member.name}
                </h3>
                <div
                  className="text-sm font-semibold mb-3"
                  style={{ color: "var(--electric-blue)" }}
                >
                  {member.role}
                </div>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {member.shortBio}
                </p>

                {/* Social links */}
                {member.socials && member.socials.length > 0 && (
                  <div className="flex justify-center gap-3">
                    {member.socials.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        className="px-4 py-1.5 rounded-full text-xs font-semibold no-underline transition-all duration-300"
                        style={{
                          background: "rgba(37, 99, 235, 0.1)",
                          color: "var(--electric-blue)",
                          border: "1px solid rgba(37, 99, 235, 0.2)",
                        }}
                      >
                        {social.platform}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Marketplace profiles */}
          <div className="mt-10 md:mt-14 text-center">
            <div
              className="text-[12px] uppercase tracking-[2px] font-semibold mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Also available on
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {marketplaces.map((m) => (
                <a
                  key={m.name}
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl no-underline transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--card-border)",
                    boxShadow: "0 2px 10px var(--shadow-color)",
                  }}
                >
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(34, 197, 94, 0.12)" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                  </span>
                  <span className="text-left">
                    <span
                      className="block text-sm font-bold leading-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {m.name}
                    </span>
                    <span
                      className="block text-[11px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {m.label}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="section px-4"
        style={{
          background: "var(--bg-primary)",
          transition: "background 0.4s",
        }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center section-head">
            <span
              className="inline-block text-[13px] uppercase tracking-[2px] font-semibold mb-3"
              style={{ color: "var(--neon-cyan)" }}
            >
              What Drives Us
            </span>
            <h2
              className="font-display text-[clamp(28px,4vw,42px)] font-bold leading-[1.2]"
              style={{ color: "var(--text-primary)" }}
            >
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl p-7 text-center transition-all duration-400 hover:-translate-y-1"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(37, 99, 235, 0.1)" }}>
                  <ValueIcon type={value.icon} />
                </div>
                <h3
                  className="font-display text-lg font-bold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section px-4"
        style={{
          background: "var(--bg-secondary)",
          transition: "background 0.4s",
        }}
      >
        <div className="max-w-[800px] mx-auto text-center">
          <h2
            className="font-display text-[clamp(28px,4vw,42px)] font-bold leading-[1.2] mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Together</span>
          </h2>
          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Whether you need a Shopify store, AI automation, or a complete
            digital transformation, we are here to help you succeed.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-xl text-base font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--gradient-blue)",
              boxShadow: "0 4px 20px var(--shadow-glow)",
            }}
          >
            Get Started →
          </Link>
        </div>
      </section>
    </>
  );
}
