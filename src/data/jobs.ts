export interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  postedDate: string;
  aboutRole: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
}

export const jobs: Job[] = [
  {
    slug: "shopify-developer",
    title: "Shopify Developer",
    department: "Shopify Development",
    location: "Remote (Worldwide)",
    type: "Full-time",
    postedDate: "2026-10-01",
    aboutRole:
      "We're looking for an experienced Shopify developer to build and customize high-converting stores for our global clients. You'll work directly with our design and SEO teams to deliver premium Shopify solutions.",
    responsibilities: [
      "Build custom Shopify themes from scratch using Liquid, HTML, CSS, and JavaScript",
      "Customize existing themes based on client requirements",
      "Integrate third-party apps and payment gateways",
      "Optimize store performance and page speed",
      "Collaborate with designers to implement pixel-perfect designs",
      "Handle store migrations from WooCommerce, Wix, and other platforms",
    ],
    requirements: [
      "2+ years of Shopify development experience",
      "Strong proficiency in Shopify Liquid templating",
      "Solid HTML, CSS, JavaScript skills",
      "Experience with Shopify APIs and app development",
      "Understanding of e-commerce best practices",
      "Good communication skills in English",
    ],
    niceToHave: [
      "Experience with Shopify Plus",
      "Knowledge of React/Next.js",
      "Familiarity with Figma",
      "SEO optimization experience",
    ],
    benefits: [
      "Competitive salary",
      "Fully remote — work from anywhere",
      "Flexible working hours",
      "Work with international clients",
      "Continuous learning opportunities",
      "Growth into senior/lead roles",
    ],
  },
  {
    slug: "ai-automation-engineer",
    title: "AI & Automation Engineer",
    department: "AI & Automation",
    location: "Remote (Worldwide)",
    type: "Full-time",
    postedDate: "2026-10-01",
    aboutRole:
      "Join our automation team to build intelligent workflow systems using n8n, AI APIs, and custom integrations. You'll design and implement automation solutions that save our clients hours of manual work every day.",
    responsibilities: [
      "Design and build automated workflows using n8n and similar tools",
      "Integrate AI APIs (OpenAI, Claude, etc.) into client workflows",
      "Set up GoHighLevel CRM automation for marketing and sales",
      "Build custom chatbots and AI assistants",
      "Create email and SMS marketing automation sequences",
      "Document and maintain automation systems",
    ],
    requirements: [
      "Experience with workflow automation tools (n8n, Zapier, Make)",
      "Understanding of REST APIs and webhooks",
      "Familiarity with AI/LLM APIs",
      "Problem-solving mindset",
      "Strong English communication",
      "Basic programming skills (JavaScript/Python)",
    ],
    niceToHave: [
      "GoHighLevel experience",
      "Experience building chatbots",
      "Knowledge of CRM systems",
      "Data processing and ETL experience",
    ],
    benefits: [
      "Competitive salary",
      "Fully remote — work from anywhere",
      "Flexible working hours",
      "Work on cutting-edge AI projects",
      "Skill development budget",
      "Team collaboration with global talent",
    ],
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote (Worldwide)",
    type: "Full-time / Part-time",
    postedDate: "2026-10-01",
    aboutRole:
      "We need a creative UI/UX designer who can design beautiful, user-friendly interfaces for web and e-commerce projects. You'll work closely with developers to bring designs to life.",
    responsibilities: [
      "Design UI/UX for web applications, Shopify stores, and landing pages",
      "Create wireframes, mockups, and interactive prototypes in Figma",
      "Develop brand identity systems (logos, color palettes, typography)",
      "Design social media graphics and marketing materials",
      "Conduct user research and usability testing",
      "Maintain and evolve design systems",
    ],
    requirements: [
      "2+ years of UI/UX design experience",
      "Expert-level Figma proficiency",
      "Strong portfolio showcasing web and e-commerce design",
      "Understanding of responsive design principles",
      "Knowledge of design systems and component libraries",
      "Good eye for typography and color",
    ],
    niceToHave: [
      "Experience with Shopify theme design",
      "Motion design / animation skills",
      "Basic HTML/CSS understanding",
      "Illustration skills",
    ],
    benefits: [
      "Competitive salary",
      "Fully remote — work from anywhere",
      "Flexible hours (full-time or part-time)",
      "Creative freedom on projects",
      "Work with diverse international clients",
      "Design tool subscriptions provided",
    ],
  },
  {
    slug: "seo-specialist",
    title: "SEO Specialist",
    department: "SEO & Marketing",
    location: "Remote (Worldwide)",
    type: "Full-time / Contract",
    postedDate: "2026-10-01",
    aboutRole:
      "We're looking for an SEO specialist to help our clients dominate search rankings. You'll handle everything from technical audits to content strategy and link building.",
    responsibilities: [
      "Perform technical SEO audits and implement fixes",
      "Develop and execute keyword research strategies",
      "Optimize on-page SEO (meta tags, content, schema markup)",
      "Build high-quality backlink profiles",
      "Set up and manage Google Analytics and Search Console",
      "Create monthly SEO reports with actionable insights",
    ],
    requirements: [
      "2+ years of hands-on SEO experience",
      "Proficiency with SEO tools (Ahrefs, SEMrush, Screaming Frog)",
      "Understanding of Google's ranking algorithms",
      "Experience with technical SEO and site speed optimization",
      "Strong analytical and reporting skills",
      "Good English communication",
    ],
    niceToHave: [
      "Content writing experience",
      "Experience with Shopify SEO",
      "Google Ads experience",
      "Local SEO knowledge",
    ],
    benefits: [
      "Competitive salary",
      "Fully remote — work from anywhere",
      "Flexible schedule",
      "Access to premium SEO tools",
      "Work on diverse client projects",
      "Performance bonuses",
    ],
  },
];

export const departments = [
  "All",
  "Shopify Development",
  "AI & Automation",
  "Design",
  "SEO & Marketing",
  "CMS Development",
  "Operations",
];
