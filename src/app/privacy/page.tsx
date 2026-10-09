import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Arif AI Automation Hub collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us when you:

- Fill out contact forms or request a free audit
- Subscribe to our newsletter
- Engage our services or communicate with us via email
- Apply for job positions through our careers page

The types of information we may collect include your name, email address, phone number, company name, website URL, and any other information you choose to provide.

We also automatically collect certain technical information when you visit our website, including your IP address, browser type, device type, operating system, referring URLs, and pages viewed. This data is collected through cookies and similar technologies.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to:

- Respond to your inquiries and fulfill your requests
- Provide, maintain, and improve our services
- Send you technical notices, updates, and administrative messages
- Send marketing communications (with your consent) about our services, promotions, and events
- Analyze usage patterns to improve our website and services
- Detect, investigate, and prevent fraudulent or unauthorized activities
- Comply with legal obligations

We will never sell your personal information to third parties.`,
  },
  {
    title: "Cookies & Tracking Technologies",
    content: `We use cookies and similar tracking technologies to collect and track information about your browsing activity on our website. These include:

- Essential cookies: Required for the website to function properly
- Analytics cookies: Help us understand how visitors interact with our website (e.g., Google Analytics)
- Preference cookies: Remember your settings and preferences
- Marketing cookies: Used to deliver relevant advertisements

You can control cookie settings through your browser preferences. Disabling certain cookies may limit your ability to use some features of our website.`,
  },
  {
    title: "Third-Party Services",
    content: `We may use third-party services that collect, monitor, and analyze information to improve our services. These may include:

- Google Analytics for website traffic analysis
- Email marketing platforms for newsletter delivery
- Payment processors for transaction handling
- Cloud hosting providers for website and data hosting
- Customer relationship management (CRM) tools

Each third-party service has its own privacy policy governing the use of your information. We encourage you to review their respective privacy policies.`,
  },
  {
    title: "Data Security",
    content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

- Encryption of data in transit using SSL/TLS
- Secure storage of personal data
- Regular security assessments and updates
- Access controls limiting who can view personal information

While we strive to protect your information, no method of electronic storage or transmission is 100% secure. We cannot guarantee absolute security of your data.`,
  },
  {
    title: "Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:

- Access: Request a copy of the personal information we hold about you
- Correction: Request that we correct any inaccurate or incomplete information
- Deletion: Request that we delete your personal information
- Objection: Object to the processing of your personal information
- Portability: Request a copy of your data in a structured, machine-readable format
- Withdrawal of Consent: Withdraw your consent for marketing communications at any time

To exercise any of these rights, please contact us using the information provided below. We will respond to your request within 30 days.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us at:

- Email: arif.frelance@gmail.com
- Website: https://arifautomationhub.com/contact

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden section px-4"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-[1280px] mx-auto relative z-10">
          <h1
            className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Last updated: October 1, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-sm px-4" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-[800px] mx-auto">
          <div
            className="rounded-2xl p-6 md:p-10"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--card-border)",
            }}
          >
            <p
              className="leading-relaxed mb-10"
              style={{ color: "var(--text-secondary)" }}
            >
              At Arif AI Automation Hub, we are committed to protecting your
              privacy and ensuring the security of your personal information.
              This Privacy Policy outlines how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              services.
            </p>

            <div className="space-y-10">
              {sections.map((section, index) => (
                <div key={section.title}>
                  <h2
                    className="font-display text-xl font-bold mb-4"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {index + 1}. {section.title}
                  </h2>
                  <div
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
