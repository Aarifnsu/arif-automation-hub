import type { Metadata } from "next";
import Link from "next/link";
import { jobs } from "@/data/jobs";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return { title: "Job Not Found" };
  return {
    title: `${job.title} - Careers`,
    description: job.aboutRole,
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-12 md:py-20 px-4"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{
              top: "-200px",
              left: "-100px",
              background: "var(--hero-glow1)",
            }}
          />
        </div>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm font-semibold no-underline mb-8 transition-colors duration-300"
            style={{ color: "var(--electric-blue)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Careers
          </Link>

          <h1
            className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-5"
            style={{ color: "var(--text-primary)" }}
          >
            {job.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm" style={{ color: "var(--text-muted)" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold"
              style={{
                background: "rgba(37, 99, 235, 0.1)",
                color: "var(--electric-blue)",
              }}
            >
              {job.department}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {job.type}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Posted {new Date(job.postedDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-18 px-4" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* About the Role */}
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
              }}
            >
              <h2
                className="font-display text-2xl font-bold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                About the Role
              </h2>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {job.aboutRole}
              </p>
            </div>

            {/* Responsibilities */}
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
              }}
            >
              <h2
                className="font-display text-2xl font-bold mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="var(--electric-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span style={{ color: "var(--text-secondary)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
              }}
            >
              <h2
                className="font-display text-2xl font-bold mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                Requirements
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="var(--electric-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span style={{ color: "var(--text-secondary)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nice to Have */}
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
              }}
            >
              <h2
                className="font-display text-2xl font-bold mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                Nice to Have
              </h2>
              <ul className="space-y-3">
                {job.niceToHave.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <span style={{ color: "var(--text-secondary)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2
                className="font-display text-2xl font-bold mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {job.benefits.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl p-4 flex items-center gap-3"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(37, 99, 235, 0.1)" }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="var(--electric-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Apply CTA */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
              }}
            >
              <h2
                className="font-display text-2xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Ready to Apply?
              </h2>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                Send us your application and let&apos;s build something great together.
              </p>
              <Link
                href={`/contact?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                className="inline-block px-8 py-4 rounded-xl text-base font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "var(--gradient-blue)",
                  boxShadow: "0 4px 20px var(--shadow-glow)",
                }}
              >
                Apply Now →
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div
              className="rounded-2xl p-6 sticky top-[96px] xl:top-[112px]"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
              }}
            >
              <h3
                className="font-display text-lg font-bold mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                Job Summary
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Department", value: job.department },
                  { label: "Location", value: job.location },
                  { label: "Job Type", value: job.type },
                  {
                    label: "Posted",
                    value: new Date(job.postedDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }),
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="pb-4"
                    style={{ borderBottom: "1px solid var(--card-border)" }}
                  >
                    <div
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={`/contact?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                className="block w-full mt-6 px-6 py-3.5 rounded-xl text-center text-sm font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "var(--gradient-blue)",
                  boxShadow: "0 4px 20px var(--shadow-glow)",
                }}
              >
                Apply for This Role →
              </Link>

              <Link
                href="/careers"
                className="block w-full mt-3 px-6 py-3.5 rounded-xl text-center text-sm font-semibold no-underline transition-all duration-300"
                style={{
                  background: "transparent",
                  border: "1px solid var(--card-border)",
                  color: "var(--text-primary)",
                }}
              >
                View All Positions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
