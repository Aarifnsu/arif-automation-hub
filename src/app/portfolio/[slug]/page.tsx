import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/data/portfolio";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.shortDesc,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden section-hero px-4"
        style={{ background: project.gradient, transition: "background 0.4s" }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div
            className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
            style={{ top: "-200px", right: "-100px", background: "#fff" }}
          />
        </div>

        <div className="max-w-[1280px] mx-auto text-center relative z-10">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              color: "#fff",
              border: "1px solid rgba(255, 255, 255, 0.25)",
            }}
          >
            {project.tag}
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-4 text-white">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-white/80">
            {project.shortDesc}
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section
        className="section px-4"
        style={{
          background: "var(--bg-primary)",
          transition: "background 0.4s",
        }}
      >
        <div className="max-w-[800px] mx-auto">
          <span
            className="inline-block text-[13px] uppercase tracking-[2px] font-semibold mb-3"
            style={{ color: "var(--neon-cyan)" }}
          >
            The Challenge
          </span>
          <h2
            className="font-display text-[clamp(28px,4vw,36px)] font-bold leading-[1.2] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            What They Needed
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.challenge}
          </p>
        </div>
      </section>

      {/* Solution */}
      <section
        className="section px-4"
        style={{
          background: "var(--bg-secondary)",
          transition: "background 0.4s",
        }}
      >
        <div className="max-w-[800px] mx-auto">
          <span
            className="inline-block text-[13px] uppercase tracking-[2px] font-semibold mb-3"
            style={{ color: "var(--neon-cyan)" }}
          >
            Our Solution
          </span>
          <h2
            className="font-display text-[clamp(28px,4vw,36px)] font-bold leading-[1.2] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            How We Delivered
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.solution}
          </p>
        </div>
      </section>

      {/* Results */}
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
              Results
            </span>
            <h2
              className="font-display text-[clamp(28px,4vw,36px)] font-bold leading-[1.2]"
              style={{ color: "var(--text-primary)" }}
            >
              The <span className="gradient-text">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[960px] mx-auto">
            {project.results.map((result, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 text-center transition-all duration-400"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--card-border)",
                  boxShadow: "0 4px 20px var(--shadow-color)",
                }}
              >
                <div
                  className="font-display text-lg font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section
        className="section px-4"
        style={{
          background: "var(--bg-secondary)",
          transition: "background 0.4s",
        }}
      >
        <div className="max-w-[800px] mx-auto text-center">
          <span
            className="inline-block text-[13px] uppercase tracking-[2px] font-semibold mb-3"
            style={{ color: "var(--neon-cyan)" }}
          >
            Tech Stack
          </span>
          <h2
            className="font-display text-[clamp(28px,4vw,36px)] font-bold leading-[1.2] mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            Technologies Used
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 rounded-full text-sm font-semibold"
                style={{
                  background: "rgba(37, 99, 235, 0.1)",
                  color: "var(--electric-blue)",
                  border: "1px solid rgba(37, 99, 235, 0.2)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section
          className="section px-4"
          style={{
            background: "var(--bg-primary)",
            transition: "background 0.4s",
          }}
        >
          <div className="max-w-[800px] mx-auto text-center">
            <div
              className="rounded-2xl p-10 md:p-14"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div
                className="text-4xl mb-6"
                style={{ color: "var(--electric-blue)" }}
              >
                &ldquo;
              </div>
              <blockquote
                className="text-lg md:text-xl leading-relaxed italic mb-8"
                style={{ color: "var(--text-primary)" }}
              >
                {project.testimonial.quote}
              </blockquote>
              <div>
                <div
                  className="font-display font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.testimonial.name}
                </div>
                <div
                  className="text-sm mt-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.testimonial.role}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
            Ready to Get Similar{" "}
            <span className="gradient-text">Results?</span>
          </h2>
          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Let us build something amazing for your business. Start with a free
            consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl text-base font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 text-center"
              style={{
                background: "var(--gradient-blue)",
                boxShadow: "0 4px 20px var(--shadow-glow)",
              }}
            >
              Start Your Project →
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-xl text-base font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5 text-center"
              style={{
                background: "transparent",
                border: "1px solid var(--card-border)",
                color: "var(--text-primary)",
              }}
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
