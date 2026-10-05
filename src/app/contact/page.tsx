import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Arif Automation Hub. Let's discuss your project and how we can help your business grow with AI-powered solutions.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 md:py-32 lg:py-36 px-4 min-h-[400px] flex items-center"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{
              top: "-150px",
              left: "-100px",
              background: "var(--hero-glow1)",
            }}
          />
        </div>
        <div className="max-w-[1280px] mx-auto text-center relative z-10">
          <h1
            className="font-display text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Have a project in mind? Let&apos;s talk about how we can help your
            business grow with AI-powered solutions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div className="md:col-span-1 lg:col-span-3">
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
              }}
            >
              <Suspense fallback={<div className="py-12 text-center" style={{ color: "var(--text-muted)" }}>Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 lg:col-span-2 space-y-6">
            {/* Email */}
            <div
              className="rounded-2xl p-5 flex items-start gap-4"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(37, 99, 235, 0.1)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--electric-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>Email Us</div>
                <a href="mailto:arif.frelance@gmail.com" className="text-sm font-semibold no-underline" style={{ color: "var(--text-primary)" }}>
                  arif.frelance@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div
              className="rounded-2xl p-5 flex items-start gap-4"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(37, 99, 235, 0.1)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--electric-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>Location</div>
                <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Remote - Worldwide</div>
              </div>
            </div>

            {/* Response Time */}
            <div
              className="rounded-2xl p-5 flex items-start gap-4"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(37, 99, 235, 0.1)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--electric-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>Response Time</div>
                <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Within 24 hours</div>
              </div>
            </div>

            {/* Office Hours */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
              }}
            >
              <h3 className="font-display text-lg font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                Office Hours
              </h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM (GMT+6)" },
                  { day: "Saturday", time: "10:00 AM - 4:00 PM (GMT+6)" },
                  { day: "Sunday", time: "Closed" },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between">
                    <span style={{ color: "var(--text-secondary)" }}>{item.day}</span>
                    <span className="font-semibold" style={{ color: "var(--text-primary)" }}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--card-border)",
              }}
            >
              <h3 className="font-display text-lg font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                Follow Us
              </h3>
              <div className="flex gap-3">
                {[
                  { label: "LinkedIn", href: "https://linkedin.com/company/arifautomationhub", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                  { label: "Facebook", href: "https://facebook.com/arifautomationhub", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { label: "Twitter", href: "https://twitter.com/arifautohub", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(37, 99, 235, 0.1)",
                      color: "var(--electric-blue)",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={social.path}/></svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="rounded-2xl p-6 text-center" style={{ background: "var(--gradient-blue)" }}>
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center" style={{ background: "rgba(255, 255, 255, 0.15)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">Ready to Launch?</h3>
              <p className="text-sm text-white/80">
                Book a free 30-minute consultation and discover how we can transform your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
