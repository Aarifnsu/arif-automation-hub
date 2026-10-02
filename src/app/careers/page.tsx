import type { Metadata } from "next";
import Link from "next/link";
import { jobs, departments } from "@/data/jobs";
import JobFilter from "@/components/JobFilter";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Arif Automation Hub and build the future of AI-powered business solutions. Explore open roles in development, design, SEO, and automation.",
};

const benefits = [
  {
    icon: "remote",
    title: "Remote Work",
    description:
      "Work from anywhere in the world. We believe great talent isn't limited by geography.",
  },
  {
    icon: "growth",
    title: "Growth",
    description:
      "Continuous learning opportunities with access to courses, conferences, and mentorship programs.",
  },
  {
    icon: "innovation",
    title: "Innovation",
    description:
      "Work with cutting-edge AI tools and technologies. We stay ahead of the curve so you grow with us.",
  },
  {
    icon: "team",
    title: "Global Team",
    description:
      "Collaborate with talented professionals from 15+ countries on projects that make a real impact.",
  },
];

function BenefitIcon({ type }: { type: string }) {
  const props = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "var(--electric-blue)", strokeWidth: "2", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (type) {
    case "remote":
      return <svg {...props}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
    case "growth":
      return <svg {...props}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>;
    case "innovation":
      return <svg {...props}><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2v1"/><path d="M12 7a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.4V17h-4v-2.6A4.5 4.5 0 0 1 8 11a4 4 0 0 1 4-4z"/></svg>;
    case "team":
      return <svg {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    default:
      return null;
  }
}

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 md:py-28 px-4"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{
              top: "-150px",
              right: "-100px",
              background: "var(--hero-glow1)",
            }}
          />
        </div>
        <div className="max-w-[1280px] mx-auto text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 rounded-full text-sm font-semibold mb-6"
            style={{
              background: "rgba(37, 99, 235, 0.08)",
              border: "1px solid rgba(37, 99, 235, 0.2)",
              padding: "8px 20px",
              color: "var(--electric-blue)",
            }}
          >
            We&apos;re Hiring
          </div>
          <h1
            className="font-display text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Join Our <span className="gradient-text">Team</span>
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Build the future of AI-powered business solutions with a global,
            remote-first team that values innovation, growth, and real impact.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section
        className="py-20 px-4"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-[1280px] mx-auto">
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-center mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Why Work <span className="gradient-text">With Us</span>
          </h2>
          <p
            className="text-center text-lg mb-14 max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            We offer more than just a job. Join a team where your work matters
            and your growth is a priority.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto" style={{ background: "rgba(37, 99, 235, 0.1)" }}>
                  <BenefitIcon type={b.icon} />
                </div>
                <h3
                  className="font-display text-lg font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-[1280px] mx-auto">
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-center mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Open <span className="gradient-text">Positions</span>
          </h2>
          <p
            className="text-center text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Find the role that fits your skills and passion. All positions are
            fully remote.
          </p>
          <JobFilter jobs={jobs} departments={departments} />
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-4"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div
          className="max-w-[800px] mx-auto text-center rounded-2xl p-10 md:p-14"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--card-border)",
          }}
        >
          <h2
            className="font-display text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Don&apos;t See a Role That Fits?
          </h2>
          <p
            className="text-lg mb-8 max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            We&apos;re always looking for talented people. Send us your resume
            and we&apos;ll reach out when there&apos;s a match.
          </p>
          <Link
            href="/contact?subject=General+Application"
            className="inline-block px-8 py-4 rounded-xl text-base font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--gradient-blue)",
              boxShadow: "0 4px 20px var(--shadow-glow)",
            }}
          >
            Send Your Resume →
          </Link>
        </div>
      </section>
    </>
  );
}
