import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing your use of Arif Automation Hub's services and website.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing or using the Arif Automation Hub website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, users, and clients who access or use our website and services. We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the services following any changes constitutes acceptance of those changes.`,
  },
  {
    title: "Services",
    content: `Arif Automation Hub provides digital agency services including but not limited to:

- Shopify store development and customization
- AI and business automation solutions
- Web and mobile application development
- UI/UX design and branding
- SEO and analytics services
- CRM setup and automation

The specific scope, deliverables, and timeline for each project will be outlined in a separate service agreement or proposal provided to the client before work begins. We reserve the right to refuse service to anyone for any reason at any time.`,
  },
  {
    title: "Payment Terms",
    content: `Payment terms will be outlined in individual project proposals or service agreements. General payment terms include:

- A deposit may be required before work begins, typically 30-50% of the total project cost
- Remaining payments are due upon completion of agreed milestones or project delivery
- Invoices are due within 14 days of issuance unless otherwise agreed
- Late payments may incur additional fees
- All prices are quoted in USD unless otherwise specified

We accept payments via bank transfer, PayPal, Wise, and other methods as agreed upon. Refund policies are determined on a per-project basis and will be outlined in the service agreement.`,
  },
  {
    title: "Intellectual Property",
    content: `Upon full payment, the client receives ownership of all custom work product created specifically for their project, including designs, code, and content, unless otherwise specified in the service agreement.

Arif Automation Hub retains the right to:

- Use generic, non-client-specific code, components, and tools across projects
- Showcase completed work in our portfolio (unless a non-disclosure agreement is in place)
- Use third-party tools, libraries, and frameworks subject to their respective licenses

All pre-existing intellectual property, proprietary tools, frameworks, and methodologies remain the property of Arif Automation Hub.`,
  },
  {
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by law, Arif Automation Hub shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:

- Your use or inability to use our services
- Any errors, bugs, or interruptions in delivered work
- Loss of data, revenue, or profits
- Third-party service outages or failures
- Unauthorized access to your data

Our total liability for any claim arising from our services shall not exceed the total amount paid by you for the specific service giving rise to the claim. We provide our services on an "as is" basis and make no warranties, express or implied.`,
  },
  {
    title: "Client Responsibilities",
    content: `As a client of Arif Automation Hub, you agree to:

- Provide accurate and complete information required for your project
- Provide timely feedback and approvals to avoid project delays
- Ensure you have the legal right to use any content, images, or materials you provide
- Maintain the confidentiality of any login credentials or access we share
- Not use our services for any unlawful or prohibited purpose

Delays caused by the client in providing required materials, feedback, or approvals may result in adjusted timelines and potentially additional costs.`,
  },
  {
    title: "Termination",
    content: `Either party may terminate the service agreement under the following conditions:

- With written notice as specified in the service agreement
- Immediately if the other party materially breaches these terms
- By mutual written agreement

Upon termination:

- The client shall pay for all work completed up to the date of termination
- Any non-refundable deposits will not be returned
- Arif Automation Hub will deliver all completed work product to the client
- Any confidential information must be returned or destroyed by both parties`,
  },
  {
    title: "Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with applicable international commercial law principles. Any disputes arising from these terms or our services shall be resolved through good-faith negotiation first, and if necessary, through binding arbitration.

By using our services, you consent to the exclusive jurisdiction of the applicable courts for any disputes that cannot be resolved through arbitration.`,
  },
  {
    title: "Contact",
    content: `If you have any questions about these Terms of Service, please contact us at:

- Email: hello@arifautomationhub.com
- Website: https://arifautomationhub.com/contact

These terms were last updated on October 1, 2026.`,
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-16 md:py-20 px-4"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-[1280px] mx-auto relative z-10">
          <h1
            className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Terms of Service
          </h1>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Last updated: October 1, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4" style={{ background: "var(--bg-secondary)" }}>
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
              Welcome to Arif Automation Hub. These Terms of Service govern your
              use of our website and services. Please read them carefully before
              engaging our services.
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
