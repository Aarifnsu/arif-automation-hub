import type { Metadata } from "next";
import PaymentPolicy from "@/components/PaymentPolicy";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing your use of Arif AI Automation Hub's services and website.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing or using the Arif AI Automation Hub website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, users, and clients who access or use our website and services. We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the services following any changes constitutes acceptance of those changes.`,
  },
  {
    title: "Services",
    content: `Arif AI Automation Hub provides digital services including but not limited to:

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
    content: `We do not publish fixed prices because every project is different. Our payment process is simple and fully transparent:

- No hidden charges — the price is agreed only after a free audit and a final meeting where we understand your project, scope, and requirements in detail
- Nothing is charged before that final meeting
- Once agreed, the price is fixed in writing; no extra costs are added without your prior approval
- Payment is accepted only through supported bank transfer, and an official money receipt is issued for every payment
- Milestone or deposit arrangements, if any, are agreed with you in writing before work begins
- All prices are quoted in USD unless otherwise specified

Important: this website does not process any payments. We never use third-party payment links, agents, or intermediaries. The only other verified way to hire us is through our official marketplace profiles (Upwork, SEOClerk), where payment is handled by that platform's own secure system. If anyone asks you to pay on our behalf through any other channel, it is not us — please contact us directly to verify. Refund policies are determined on a per-project basis and will be outlined in the service agreement.`,
  },
  {
    title: "Intellectual Property",
    content: `Upon full payment, the client receives ownership of all custom work product created specifically for their project, including designs, code, and content, unless otherwise specified in the service agreement.

Arif AI Automation Hub retains the right to:

- Use generic, non-client-specific code, components, and tools across projects
- Showcase completed work in our portfolio (unless a non-disclosure agreement is in place)
- Use third-party tools, libraries, and frameworks subject to their respective licenses

All pre-existing intellectual property, proprietary tools, frameworks, and methodologies remain the property of Arif AI Automation Hub.`,
  },
  {
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by law, Arif AI Automation Hub shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:

- Your use or inability to use our services
- Any errors, bugs, or interruptions in delivered work
- Loss of data, revenue, or profits
- Third-party service outages or failures
- Unauthorized access to your data

Our total liability for any claim arising from our services shall not exceed the total amount paid by you for the specific service giving rise to the claim. We provide our services on an "as is" basis and make no warranties, express or implied.`,
  },
  {
    title: "Client Responsibilities",
    content: `As a client of Arif AI Automation Hub, you agree to:

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
- Arif AI Automation Hub will deliver all completed work product to the client
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

- Email: arif.frelance@gmail.com
- Website: https://arifautomationhub.com/contact

These terms were last updated on October 1, 2026.`,
  },
];

export default function TermsPage() {
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
            Terms of Service
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
              Welcome to Arif AI Automation Hub. These Terms of Service govern your
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

      <PaymentPolicy />
    </>
  );
}
