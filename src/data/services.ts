export interface ServiceCategory {
  title: string;
  gradient: string;
  badge?: string;
  links: { label: string; href: string }[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Shopify Solutions",
    gradient: "linear-gradient(135deg, #16a34a, #22c55e)",
    links: [
      { label: "Custom Store Development", href: "/services/shopify" },
      { label: "Theme Customization", href: "/services/shopify" },
      { label: "App Integration", href: "/services/shopify" },
      { label: "Migration & Setup", href: "/services/shopify" },
      { label: "Performance Optimization", href: "/services/shopify" },
      { label: "Virtual Assistant", href: "/services/shopify" },
      { label: "Product Recharge", href: "/services/shopify" },
      { label: "Custom Section", href: "/services/shopify" },
      { label: "Amazon Product App Connection", href: "/services/shopify" },
      { label: "Conversion Rate Optimization", href: "/services/shopify" },
      { label: "A/B Testing & Analytics", href: "/services/shopify" },
      { label: "Shopify SEO", href: "/services/shopify" },
    ],
  },
  {
    title: "AI & Business Automation",
    gradient: "linear-gradient(135deg, #2563eb, #3b82f6)",
    badge: "Upcoming",
    links: [
      { label: "GoHighLevel Setup", href: "/services/ai-automation" },
      { label: "Custom AI Agents", href: "/services/ai-automation" },
      { label: "CRM Automation", href: "/services/ai-automation" },
      { label: "Workflow Automation", href: "/services/ai-automation" },
      { label: "Chatbot Development", href: "/services/ai-automation" },
      { label: "Custom AI Model Training", href: "/services/ai-automation" },
      { label: "RAG System Development", href: "/services/ai-automation" },
      { label: "LangChain & LangGraph", href: "/services/ai-automation" },
      { label: "Generative AI Integration", href: "/services/ai-automation" },
    ],
  },
  {
    title: "Web & App Development",
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
    links: [
      { label: "WordPress Development", href: "/services/web-development" },
      { label: "Custom CMS Solutions", href: "/services/web-development" },
      { label: "Landing Pages", href: "/services/web-development" },
      { label: "React.js / Next.js Apps", href: "/services/web-development" },
      { label: "Node.js & Express APIs", href: "/services/web-development" },
      { label: "PHP & Laravel Development", href: "/services/web-development" },
      { label: "REST API Development", href: "/services/web-development" },
      { label: "Payment Gateway Integration", href: "/services/web-development" },
      { label: "Full Stack Solutions", href: "/services/web-development" },
    ],
  },
  {
    title: "Design & Branding",
    gradient: "linear-gradient(135deg, #c026d3, #d946ef)",
    links: [
      { label: "Brand Identity Design", href: "/services/design-branding" },
      { label: "UI/UX Design", href: "/services/design-branding" },
      { label: "Logo & Visual Design", href: "/services/design-branding" },
      { label: "Social Media Graphics", href: "/services/design-branding" },
      { label: "Print & Packaging", href: "/services/design-branding" },
    ],
  },
  {
    title: "SEO & Analytics",
    gradient: "linear-gradient(135deg, #ea580c, #f97316)",
    links: [
      { label: "Technical SEO Audit", href: "/services/seo-analytics" },
      { label: "Keyword Research", href: "/services/seo-analytics" },
      { label: "On-Page Optimization", href: "/services/seo-analytics" },
      { label: "Analytics Setup", href: "/services/seo-analytics" },
      { label: "Performance Tracking", href: "/services/seo-analytics" },
    ],
  },
  {
    title: "App Development",
    gradient: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
    links: [
      { label: "Android Development", href: "/services/app-development" },
      { label: "iOS Development", href: "/services/app-development" },
      { label: "Cross-Platform Apps", href: "/services/app-development" },
      { label: "App UI/UX Design", href: "/services/app-development" },
      { label: "App Maintenance", href: "/services/app-development" },
    ],
  },
];

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  badge?: string;
}

export const serviceCards: ServiceCard[] = [
  {
    icon: "🛍️",
    title: "Shopify Solutions",
    description:
      "Custom Shopify stores that convert visitors into loyal customers with stunning designs and seamless functionality.",
    features: [
      "Custom Theme Development",
      "App Integration & Setup",
      "Store Migration",
      "Performance Optimization",
    ],
    href: "/services/shopify",
  },
  {
    icon: "🤖",
    title: "AI & Business Automation",
    description:
      "Streamline operations with intelligent automation, custom AI agents, RAG systems, and CRM integrations that work 24/7.",
    features: [
      "Custom AI Agents & Chatbots",
      "RAG System Development",
      "CRM & Workflow Automation",
      "Generative AI Integration",
    ],
    href: "/services/ai-automation",
    badge: "Upcoming · Future Trend",
  },
  {
    icon: "💻",
    title: "Web & App Development",
    description:
      "Full-stack web solutions from WordPress to React/Next.js apps, PHP/Laravel backends, and REST APIs — built for performance and scalability.",
    features: [
      "WordPress & CMS Development",
      "React.js / Next.js Apps",
      "PHP & Laravel Backend",
      "REST API Development",
    ],
    href: "/services/web-development",
  },
  {
    icon: "🎨",
    title: "Design & Branding",
    description:
      "Eye-catching brand identities and UI/UX designs that make your business stand out from the competition.",
    features: [
      "Brand Identity Design",
      "UI/UX Design",
      "Logo Design",
      "Social Media Graphics",
    ],
    href: "/services/design-branding",
  },
  {
    icon: "📊",
    title: "SEO & Analytics",
    description:
      "Data-driven SEO strategies and analytics setup to boost your online visibility and track growth.",
    features: [
      "Technical SEO Audit",
      "Keyword Research",
      "On-Page Optimization",
      "Analytics Setup",
    ],
    href: "/services/seo-analytics",
  },
  {
    icon: "📱",
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences on every device.",
    features: [
      "Android Development",
      "iOS Development",
      "Cross-Platform Apps",
      "App UI/UX Design",
    ],
    href: "/services/app-development",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasMega: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
