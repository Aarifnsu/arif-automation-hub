export interface TeamMember {
  name: string;
  role: string;
  shortBio: string;
  initials: string;
  gradient: string;
  socials?: { platform: string; url: string }[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Arif",
    role: "Founder & Lead Developer",
    shortBio:
      "Automation engineer and Shopify expert with a passion for building digital solutions that drive real business growth.",
    initials: "A",
    gradient: "linear-gradient(135deg, #2563eb, #06b6d4)",
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "GitHub", url: "#" },
    ],
  },
  {
    name: "Development Team",
    role: "Full-Stack & Shopify Developers",
    shortBio:
      "Expert developers skilled in Next.js, React, Shopify Liquid, WordPress, and custom web applications.",
    initials: "DT",
    gradient: "linear-gradient(135deg, #16a34a, #22c55e)",
  },
  {
    name: "AI & Automation Team",
    role: "Automation Engineers",
    shortBio:
      "Specialists in n8n, GoHighLevel, custom AI agents, and workflow automation systems.",
    initials: "AI",
    gradient: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
  },
  {
    name: "Design Team",
    role: "UI/UX & Brand Designers",
    shortBio:
      "Creative designers crafting beautiful user experiences, brand identities, and marketing materials.",
    initials: "DS",
    gradient: "linear-gradient(135deg, #c026d3, #d946ef)",
  },
  {
    name: "SEO & Marketing Team",
    role: "SEO Specialists & Content Strategists",
    shortBio:
      "Data-driven marketers focused on organic growth, keyword strategy, and performance analytics.",
    initials: "SM",
    gradient: "linear-gradient(135deg, #ea580c, #f97316)",
  },
];
