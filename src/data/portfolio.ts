export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  tag: string;
  icon: string;
  gradient: string;
  shortDesc: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
  liveLink?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "beauty-with-thai",
    title: "Beauty with Thai",
    category: "shopify",
    tag: "Shopify",
    icon: "🛍️",
    gradient: "linear-gradient(135deg, #1e3a5f, #2563eb)",
    shortDesc:
      "Complete Shopify store build with custom theme, product setup, and SEO optimization.",
    challenge:
      "The client needed a premium skincare store that could handle international orders with fast loading times and high conversion rates.",
    solution:
      "We built a fully custom Shopify store with optimized product pages, integrated payment gateways, and a mobile-first responsive design.",
    results: [
      "200% increase in conversion rate",
      "Sub-2 second page load time",
      "95+ Google PageSpeed score",
      "50% reduction in cart abandonment",
    ],
    technologies: ["Shopify", "Liquid", "Custom Theme", "SEO"],
    testimonial: {
      quote:
        "They transformed our outdated website into a high-converting Shopify store. Sales increased 200% in the first month.",
      name: "James Mitchell",
      role: "CEO, TechVentures USA",
    },
    liveLink: "https://www.beautywiththai.com/",
  },
  {
    slug: "chemora-buildtech",
    title: "Chemora Buildtech",
    category: "cms",
    tag: "WordPress",
    icon: "🌐",
    gradient: "linear-gradient(135deg, #0f2b3d, #22d3ee)",
    shortDesc:
      "Corporate website with modern design, fast loading, and full SEO implementation.",
    challenge:
      "The construction company needed a professional website that showcased their projects and generated leads.",
    solution:
      "We built a modern WordPress site with custom design, project gallery, contact forms, and full SEO optimization.",
    results: [
      "300% increase in organic traffic",
      "40+ leads per month from website",
      "Professional brand presence established",
      "Top 3 Google ranking for local keywords",
    ],
    technologies: ["WordPress", "Custom Theme", "SEO", "Analytics"],
    testimonial: {
      quote:
        "Professional, fast, and incredibly talented. They delivered our complete brand redesign and new website in just 3 weeks.",
      name: "Robert Lee",
      role: "Founder, CanadaFresh Co.",
    },
    liveLink: "https://chemorabuildtech.com/",
  },
  {
    slug: "kdm-motors-import",
    title: "KDM Motors Import",
    category: "cms",
    tag: "WordPress",
    icon: "🚗",
    gradient: "linear-gradient(135deg, #1e1b4b, #7c3aed)",
    shortDesc:
      "Automotive import business website with inventory showcase and lead generation system.",
    challenge:
      "The automotive company needed a professional online presence to showcase their vehicle inventory and generate leads.",
    solution:
      "Built a WordPress site with inventory management, vehicle gallery, contact forms, and lead tracking system.",
    results: [
      "Professional vehicle showcase",
      "Lead generation system implemented",
      "Mobile-responsive design",
      "Customer inquiry management streamlined",
    ],
    technologies: ["WordPress", "Custom Theme", "Contact Forms", "SEO"],
    liveLink: "https://kdmmotorsimport.com/",
  },
  {
    slug: "oumali-pecare",
    title: "Oumali Pecare",
    category: "shopify",
    tag: "Shopify",
    icon: "👗",
    gradient: "linear-gradient(135deg, #1a1a2e, #e94560)",
    shortDesc:
      "Premium skincare and wellness store with custom Shopify design and customer experience optimization.",
    challenge:
      "The brand needed a professional e-commerce presence that matched their premium product quality.",
    solution:
      "Custom Shopify store with elegant product pages, integrated payment systems, and full SEO optimization.",
    results: [
      "Professional online store launched",
      "Mobile-optimized checkout experience",
      "Google PageSpeed score 90+",
      "Streamlined customer purchase flow",
    ],
    technologies: ["Shopify", "Custom Theme", "Payment Integration", "SEO"],
    liveLink: "https://www.oumalipecare.com/",
  },
];

export const portfolioCategories = [
  { label: "All", value: "all" },
  { label: "Shopify", value: "shopify" },
  { label: "CMS / WordPress", value: "cms" },
];
