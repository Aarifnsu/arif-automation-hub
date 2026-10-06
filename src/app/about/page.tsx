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

/** SVG icons keyed by platform name (matches team.ts socials) */
const socialIcons: Record<string, React.ReactNode> = {
  Facebook: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  Instagram: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  Behance: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.609.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.16-1.3.24-2.004.24H0v-14.74h6.938zm-.34 5.97c.6 0 1.09-.16 1.47-.48.38-.31.56-.76.56-1.34 0-.36-.06-.66-.19-.88-.13-.22-.3-.39-.52-.51a2.26 2.26 0 00-.73-.26 3.73 3.73 0 00-.85-.09H3.41v3.56h3.19zm.14 6.24c.32 0 .63-.03.94-.1.31-.07.58-.18.82-.34.24-.16.43-.37.58-.65.15-.27.22-.61.22-1.02 0-.8-.22-1.37-.66-1.7-.44-.33-1.01-.5-1.73-.5H3.41v4.31h3.33zM21.06 18.23c.58.56 1.41.84 2.48.84.77 0 1.44-.19 2-.58.56-.38.91-.81 1.06-1.28h3.5c-.56 1.66-1.41 2.84-2.56 3.56-1.15.72-2.53 1.08-4.14 1.08-1.13 0-2.14-.18-3.05-.55-.9-.37-1.67-.9-2.3-1.58-.63-.69-1.1-1.5-1.44-2.46-.34-.96-.5-2.02-.5-3.18 0-1.12.17-2.15.52-3.1.35-.94.84-1.76 1.48-2.44.64-.68 1.41-1.22 2.3-1.6.9-.38 1.89-.58 2.99-.58 1.24 0 2.33.24 3.26.7.93.48 1.7 1.12 2.3 1.93.6.81 1.04 1.74 1.3 2.79.27 1.05.36 2.16.27 3.33h-10.5c.06 1.22.49 2.07 1.07 2.63zm4.32-8.57c-.47-.49-1.21-.74-2.2-.74-.65 0-1.19.11-1.62.35-.43.23-.78.53-1.06.89-.27.36-.46.76-.56 1.2-.1.43-.16.83-.18 1.2h7c-.12-1.15-.52-2.04-1.38-2.9zM15.91 3h6.3v1.8h-6.3V3z"/></svg>,
  Dribbble: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702C16.86 2.61 14.545 1.62 12 1.62c-.83 0-1.634.1-2.4.285v.15zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/></svg>,
  X: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  YouTube: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  LinkedIn: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  GitHub: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
};

function SocialIcon({ platform }: { platform: string }) {
  return <>{socialIcons[platform] ?? null}</>;
}

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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1120px] mx-auto">
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
                  <div className="flex justify-center gap-2 flex-wrap">
                    {member.socials.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center no-underline transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          background: "var(--bg-card-hover)",
                          border: "1px solid var(--card-border)",
                          color: "var(--text-muted)",
                        }}
                        aria-label={social.platform}
                        title={social.platform}
                      >
                        <SocialIcon platform={social.platform} />
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
