"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setSubscribed(true);
    setEmail("");
  };

  if (subscribed) {
    return (
      <div
        className="rounded-xl p-5"
        style={{
          background: "rgba(34, 197, 94, 0.1)",
          border: "1px solid rgba(34, 197, 94, 0.3)",
        }}
      >
        <p className="text-sm font-semibold" style={{ color: "#22c55e" }}>
          You&apos;re subscribed! We&apos;ll notify you when new articles go
          live.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-300"
        style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--card-border)",
          color: "var(--text-primary)",
        }}
      />
      <button
        type="submit"
        className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5 shrink-0"
        style={{
          background: "var(--gradient-blue)",
          boxShadow: "0 4px 20px var(--shadow-glow)",
          border: "none",
        }}
      >
        Subscribe
      </button>
    </form>
  );
}
