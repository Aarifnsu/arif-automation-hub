"use client";

import { useState } from "react";

const helpOptions = [
  { id: "speed", label: "Speed & Performance" },
  { id: "seo", label: "SEO & Rankings" },
  { id: "design", label: "Design & UX" },
  { id: "conversion", label: "Conversion Optimization" },
  { id: "other", label: "Other" },
];

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    helpWith: [] as string[],
  });

  const toggleHelp = (id: string) => {
    setForm((prev) => ({
      ...prev,
      helpWith: prev.helpWith.includes(id)
        ? prev.helpWith.filter((h) => h !== id)
        : [...prev.helpWith, id],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Audit request submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">&#10003;</div>
        <h3
          className="font-display text-2xl font-bold mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Audit Request Received!
        </h3>
        <p style={{ color: "var(--text-secondary)" }}>
          We&apos;ll analyze your website and send you a detailed report within
          48 hours. Check your email!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          className="block text-sm font-semibold mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          Full Name *
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          placeholder="John Doe"
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--card-border)",
            color: "var(--text-primary)",
          }}
        />
      </div>

      <div>
        <label
          className="block text-sm font-semibold mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          Email Address *
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          placeholder="john@example.com"
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--card-border)",
            color: "var(--text-primary)",
          }}
        />
      </div>

      <div>
        <label
          className="block text-sm font-semibold mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          Website URL *
        </label>
        <input
          type="url"
          required
          value={form.website}
          onChange={(e) => setForm((p) => ({ ...p, website: e.target.value }))}
          placeholder="https://yourwebsite.com"
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--card-border)",
            color: "var(--text-primary)",
          }}
        />
      </div>

      <div>
        <label
          className="block text-sm font-semibold mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          What do you need help with?
        </label>
        <div className="flex flex-wrap gap-3">
          {helpOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => toggleHelp(opt.id)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
              style={
                form.helpWith.includes(opt.id)
                  ? {
                      background: "var(--gradient-blue)",
                      color: "#fff",
                      border: "1px solid transparent",
                    }
                  : {
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--card-border)",
                      color: "var(--text-secondary)",
                    }
              }
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-8 py-4 rounded-xl text-base font-semibold text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
        style={{
          background: "var(--gradient-blue)",
          boxShadow: "0 4px 20px var(--shadow-glow)",
          border: "none",
        }}
      >
        Get My Free Audit →
      </button>
    </form>
  );
}
