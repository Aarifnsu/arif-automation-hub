"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { serviceCards } from "@/data/services";

const FORM_ENDPOINT =
  "https://formsubmit.co/ajax/15f404213a793c0c10041d40364f3c9f";

const budgetRanges = [
  "Under $500",
  "$500 - $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    const subject = searchParams.get("subject");
    if (subject) {
      setForm((prev) => ({
        ...prev,
        message: subject.startsWith("Application:")
          ? `Hi, I'd like to apply for the ${subject.replace("Application: ", "")} position. Please find my resume attached.`
          : subject,
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || "-",
          service: form.service || "-",
          budget: form.budget || "-",
          message: form.message,
          source: "Arif Automation Hub website (arif-automation-hub.pages.dev/contact)",
          _subject: `New inquiry — Arif Automation Hub — ${form.name}`,
          _replyto: form.email,
          _template: "table",
          _captcha: "false",
          _autoresponse:
            "Thank you for reaching out to Arif Automation Hub! We have received your message and our team will contact you soon, usually within 24 hours.",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) !== "true") {
        throw new Error(data.message || "Request failed");
      }
      setSubmitted(true);
    } catch {
      setError(
        "Sorry, your message could not be sent. Please try again or email us directly at arif.frelance@gmail.com."
      );
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">&#10003;</div>
        <h3
          className="font-display text-2xl font-bold mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Message Sent!
        </h3>
        <p style={{ color: "var(--text-secondary)" }}>
          Thank you for reaching out. We&apos;ll get back to you within 24
          hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
          }}
          className="mt-6 px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300"
          style={{
            background: "var(--gradient-blue)",
            color: "#fff",
            border: "none",
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <>
      <h2
        className="font-display text-2xl font-bold mb-6"
        style={{ color: "var(--text-primary)" }}
      >
        Send Us a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
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
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--card-border)",
                color: "var(--text-primary)",
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
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
              Service Needed
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 cursor-pointer"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--card-border)",
                color: form.service ? "var(--text-primary)" : "var(--text-muted)",
              }}
            >
              <option value="">Select a service</option>
              {serviceCards.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Something else">Something else</option>
            </select>
          </div>
        </div>

        <div>
          <label
            className="block text-sm font-semibold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Budget Range
          </label>
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 cursor-pointer"
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--card-border)",
              color: form.budget ? "var(--text-primary)" : "var(--text-muted)",
            }}
          >
            <option value="">Select budget range</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            className="block text-sm font-semibold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Your Message *
          </label>
          <textarea
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us about your project..."
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 resize-vertical"
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--card-border)",
              color: "var(--text-primary)",
            }}
          />
        </div>

        {error && (
          <p role="alert" className="text-sm" style={{ color: "#f87171" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={sending}
          className="w-full px-8 py-4 rounded-xl text-base font-semibold text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-wait"
          style={{
            background: "var(--gradient-blue)",
            boxShadow: "0 4px 20px var(--shadow-glow)",
            border: "none",
          }}
        >
          {sending ? "Sending..." : "Send Message →"}
        </button>
      </form>
    </>
  );
}
