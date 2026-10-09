export interface TeamMember {
  name: string;
  role: string;
  shortBio: string;
  initials: string;
  gradient: string;
  photo?: string;
  socials?: { platform: string; url: string }[];
}

// Active team shown on the About page.
export const teamMembers: TeamMember[] = [
  {
    name: "Arif",
    role: "Founder",
    shortBio:
      "Automation engineer and Shopify expert driving real business growth.",
    initials: "A",
    gradient: "linear-gradient(135deg, #2563eb, #06b6d4)",
    photo: "/images/arif-automation-hub-founder-portrait-transparent.webp",
    socials: [
      { platform: "YouTube", url: "https://www.youtube.com/@arif-nsu" },
      { platform: "GitHub", url: "#" },
      { platform: "LinkedIn", url: "#" },
    ],
  },
  {
    name: "Sifat Hossain",
    role: "Co-founder",
    shortBio:
      "Full Stack & Shopify Developer building fast, scalable stores and apps.",
    initials: "SH",
    gradient: "linear-gradient(135deg, #16a34a, #22c55e)",
    photo: "/images/team-sifat-hossain.webp",
    socials: [
      { platform: "GitHub", url: "https://github.com/devSifatAhmed" },
      { platform: "YouTube", url: "https://www.youtube.com/@DevSifat" },
    ],
  },
  {
    name: "Arman Hossain",
    role: "Graphic & Motion Designer | Visual Artist | AI Specialist",
    shortBio:
      "5+ years crafting brand identities, motion graphics, and AI visual content.",
    initials: "AH",
    gradient: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
    photo: "/images/team-arman-hossain.webp",
    socials: [
      { platform: "Behance", url: "https://www.behance.net/armangrafix" },
      { platform: "Dribbble", url: "https://dribbble.com/armangrafix" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/armangrafix/" },
    ],
  },
  {
    name: "Talimul Islam Utsha",
    role: "AI Specialist",
    shortBio:
      "Data scientist building RAG systems and AI agents with LangChain & LangGraph.",
    initials: "TU",
    gradient: "linear-gradient(135deg, #e11d48, #f43f5e)",
    photo: "/images/team-talimul-islam-utsha.webp",
    socials: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/talimul-islam-utsha/" },
    ],
  },
  {
    name: "Dorjoy Das",
    role: "PHP & Laravel Expert | API & Server Specialist",
    shortBio:
      "Backend specialist building scalable APIs, server infrastructure, and e-commerce systems with PHP & Laravel.",
    initials: "DD",
    gradient: "linear-gradient(135deg, #0891b2, #0e7490)",
    photo: "/images/team-dorjoy-das.webp",
    socials: [
      { platform: "GitHub", url: "https://github.com/durjoyd390" },
    ],
  },
  {
    name: "Ashikur Rahman Provat",
    role: "MERN Stack & JavaScript Developer",
    shortBio:
      "Full stack developer specializing in React, Node.js, Express, and Next.js — building fast, modern web applications.",
    initials: "AP",
    gradient: "linear-gradient(135deg, #059669, #10b981)",
    photo: "/images/team-ashikur-provat.webp",
    socials: [
      { platform: "GitHub", url: "https://github.com/DProvat" },
    ],
  },
];

// Hidden for now — will be re-enabled as the team grows.
export const hiddenTeamMembers: TeamMember[] = [
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
