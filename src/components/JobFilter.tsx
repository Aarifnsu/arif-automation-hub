"use client";

import { useState } from "react";
import Link from "next/link";
import type { Job } from "@/data/jobs";

interface JobFilterProps {
  jobs: Job[];
  departments: string[];
}

export default function JobFilter({ jobs, departments }: JobFilterProps) {
  const [activeDept, setActiveDept] = useState("All");

  const filtered =
    activeDept === "All"
      ? jobs
      : jobs.filter((j) => j.department === activeDept);

  return (
    <div>
      {/* Department filter buttons */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setActiveDept(dept)}
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer"
            style={
              activeDept === dept
                ? {
                    background: "var(--gradient-blue)",
                    color: "#fff",
                    boxShadow: "0 4px 20px var(--shadow-glow)",
                  }
                : {
                    background: "var(--bg-card)",
                    border: "1px solid var(--card-border)",
                    color: "var(--text-secondary)",
                  }
            }
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Job cards */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((job) => (
            <div
              key={job.slug}
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3
                  className="font-display text-xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {job.title}
                </h3>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full shrink-0 ml-3"
                  style={{
                    background: "rgba(37, 99, 235, 0.1)",
                    color: "var(--electric-blue)",
                  }}
                >
                  {job.department}
                </span>
              </div>

              <div
                className="flex flex-wrap gap-4 text-sm mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {job.type}
                </span>
              </div>

              <p
                className="text-sm leading-relaxed mb-5 line-clamp-2"
                style={{ color: "var(--text-secondary)" }}
              >
                {job.aboutRole}
              </p>

              <Link
                href={`/careers/${job.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-all duration-300"
                style={{ color: "var(--electric-blue)" }}
              >
                Apply Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="text-center py-16 rounded-2xl"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--card-border)",
          }}
        >
          <div className="text-4xl mb-4">🔍</div>
          <h3
            className="font-display text-xl font-bold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            No open roles in this department
          </h3>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Check back soon or send us your resume for future opportunities.
          </p>
        </div>
      )}
    </div>
  );
}
