export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  gradient: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  pricing: {
    label: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  shopify: {
    slug: "shopify",
    title: "Shopify Solutions",
    tagline: "Build Your Dream Store with Shopify",
    icon: "🛍️",
    gradient: "linear-gradient(135deg, #16a34a, #22c55e)",
    description:
      "We build high-converting, visually stunning Shopify stores that turn visitors into loyal customers. From custom themes to app integrations, we handle everything.",
    features: [
      {
        title: "Custom Store Development",
        description:
          "Fully custom Shopify stores built from scratch with unique designs tailored to your brand identity.",
        icon: "🏗️",
      },
      {
        title: "Theme Customization",
        description:
          "Expert modifications to existing Shopify themes — pixel-perfect adjustments that match your vision.",
        icon: "🎨",
      },
      {
        title: "App Integration",
        description:
          "Seamless integration of payment gateways, shipping providers, analytics tools, and marketing apps.",
        icon: "🔗",
      },
      {
        title: "Migration & Setup",
        description:
          "Smooth migrations from WooCommerce, Wix, Magento, or any platform to Shopify without data loss.",
        icon: "🚀",
      },
      {
        title: "Performance Optimization",
        description:
          "Speed optimization, image compression, code cleanup — achieve 95+ PageSpeed scores consistently.",
        icon: "⚡",
      },
      {
        title: "Shopify Plus",
        description:
          "Enterprise-level Shopify Plus solutions for high-volume stores with advanced customization needs.",
        icon: "💎",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "We analyze your brand, target audience, competitors, and business goals to plan the perfect store.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "Our designers create mockups and prototypes that align with your brand and maximize conversions.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "We build your store using Shopify Liquid, custom CSS/JS, and integrate all required apps and features.",
      },
      {
        step: "04",
        title: "Launch & Support",
        description:
          "After thorough testing, we launch your store and provide ongoing support and optimization.",
      },
    ],
    pricing: [
      {
        label: "Starter",
        price: "$499",
        description: "Perfect for small businesses starting online",
        features: [
          "Theme customization",
          "Up to 20 products setup",
          "Payment gateway integration",
          "Mobile responsive design",
          "Basic SEO setup",
          "1 week delivery",
        ],
      },
      {
        label: "Professional",
        price: "$1,499",
        description: "For growing brands that need more",
        features: [
          "Custom Shopify theme",
          "Up to 100 products setup",
          "Advanced app integrations",
          "Custom product pages",
          "SEO optimization",
          "2 weeks delivery",
          "30-day support",
        ],
        popular: true,
      },
      {
        label: "Enterprise",
        price: "$3,999+",
        description: "Full-scale Shopify Plus solutions",
        features: [
          "Fully custom development",
          "Unlimited products",
          "Custom checkout flow",
          "API integrations",
          "Multi-currency setup",
          "4 weeks delivery",
          "90-day support",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does it take to build a Shopify store?",
        answer:
          "Depending on complexity, a basic store takes 1-2 weeks, custom stores 2-4 weeks, and enterprise solutions 4-8 weeks.",
      },
      {
        question: "Can you migrate my existing store to Shopify?",
        answer:
          "Yes! We handle migrations from WooCommerce, Wix, Magento, BigCommerce, and other platforms with zero data loss.",
      },
      {
        question: "Do you provide ongoing support after launch?",
        answer:
          "Absolutely. All our plans include post-launch support. We also offer monthly maintenance packages.",
      },
      {
        question: "Will my Shopify store be SEO-friendly?",
        answer:
          "Yes, we implement SEO best practices including meta tags, structured data, page speed optimization, and clean URLs.",
      },
    ],
  },

  "ai-automation": {
    slug: "ai-automation",
    title: "AI & Business Automation",
    tagline: "Automate Smarter, Grow Faster",
    icon: "🤖",
    gradient: "linear-gradient(135deg, #2563eb, #3b82f6)",
    description:
      "Transform your business operations with intelligent automation. We build custom AI agents, CRM workflows, and automation systems that save hours of manual work every day.",
    features: [
      {
        title: "GoHighLevel Setup",
        description:
          "Complete GoHighLevel CRM setup including funnels, automation workflows, and pipeline management.",
        icon: "🎯",
      },
      {
        title: "Custom AI Agents",
        description:
          "Intelligent AI chatbots and virtual assistants that handle customer queries, bookings, and support 24/7.",
        icon: "🤖",
      },
      {
        title: "CRM Automation",
        description:
          "Automated lead nurturing, follow-ups, appointment scheduling, and customer relationship management.",
        icon: "📋",
      },
      {
        title: "Workflow Automation",
        description:
          "End-to-end workflow automation using n8n, Zapier, and custom integrations to eliminate manual tasks.",
        icon: "⚙️",
      },
      {
        title: "Chatbot Development",
        description:
          "AI-powered chatbots for websites, WhatsApp, Facebook Messenger, and other communication channels.",
        icon: "💬",
      },
      {
        title: "Email & SMS Automation",
        description:
          "Automated marketing sequences, drip campaigns, and transactional messaging across email and SMS.",
        icon: "📧",
      },
    ],
    process: [
      {
        step: "01",
        title: "Analysis",
        description:
          "We audit your current workflows, identify bottlenecks, and map out automation opportunities.",
      },
      {
        step: "02",
        title: "Strategy",
        description:
          "We design a custom automation strategy with ROI projections and implementation timeline.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Our team builds, tests, and refines your automation workflows with thorough quality checks.",
      },
      {
        step: "04",
        title: "Optimize",
        description:
          "We monitor performance, gather data, and continuously optimize your automation for better results.",
      },
    ],
    pricing: [
      {
        label: "Starter",
        price: "$799",
        description: "Basic automation setup for small teams",
        features: [
          "GoHighLevel CRM setup",
          "3 automation workflows",
          "Basic chatbot setup",
          "Email sequence (5 emails)",
          "Training documentation",
          "2 weeks delivery",
        ],
      },
      {
        label: "Growth",
        price: "$2,499",
        description: "Comprehensive automation for growing businesses",
        features: [
          "Full CRM + pipeline setup",
          "10 automation workflows",
          "AI chatbot (multi-channel)",
          "Email + SMS campaigns",
          "Custom integrations",
          "3 weeks delivery",
          "30-day support",
        ],
        popular: true,
      },
      {
        label: "Enterprise",
        price: "$5,999+",
        description: "End-to-end AI automation suite",
        features: [
          "Custom AI agent development",
          "Unlimited workflows",
          "Multi-platform integration",
          "Advanced analytics dashboard",
          "Team training sessions",
          "6 weeks delivery",
          "90-day support",
        ],
      },
    ],
    faqs: [
      {
        question: "What is GoHighLevel and do I need it?",
        answer:
          "GoHighLevel is an all-in-one CRM and marketing platform. It's ideal for agencies and businesses that need lead management, email/SMS marketing, and appointment scheduling in one place.",
      },
      {
        question: "Can your AI chatbots integrate with my existing systems?",
        answer:
          "Yes, we integrate chatbots with your website, CRM, payment systems, and communication channels like WhatsApp and Messenger.",
      },
      {
        question: "How much time can automation save my business?",
        answer:
          "Most clients save 15-30 hours per week on average. Tasks like lead follow-ups, appointment scheduling, and customer support are fully automated.",
      },
      {
        question: "Do I need technical knowledge to manage the automations?",
        answer:
          "No. We build user-friendly systems and provide complete training. Most dashboards are as simple as drag-and-drop.",
      },
    ],
  },

  "web-development": {
    slug: "web-development",
    title: "Web & CMS Development",
    tagline: "Websites That Perform and Convert",
    icon: "💻",
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
    description:
      "From WordPress to custom web applications, we build fast, scalable, and SEO-optimized websites that drive real business results.",
    features: [
      {
        title: "WordPress Development",
        description:
          "Custom WordPress websites with premium themes, plugins, and advanced functionality.",
        icon: "🌐",
      },
      {
        title: "Custom CMS Solutions",
        description:
          "Tailored content management systems that give you full control over your website content.",
        icon: "📝",
      },
      {
        title: "Landing Pages",
        description:
          "High-converting landing pages designed for marketing campaigns, product launches, and lead generation.",
        icon: "🎯",
      },
      {
        title: "Web Applications",
        description:
          "Full-stack web applications built with React, Next.js, Node.js, and modern technologies.",
        icon: "🚀",
      },
      {
        title: "API Development",
        description:
          "RESTful and GraphQL API development for seamless integration between your business systems.",
        icon: "🔌",
      },
      {
        title: "Maintenance & Support",
        description:
          "Ongoing website maintenance, security updates, performance monitoring, and technical support.",
        icon: "🛡️",
      },
    ],
    process: [
      {
        step: "01",
        title: "Requirements",
        description:
          "We gather your requirements, analyze your target audience, and define the project scope.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "Our designers create wireframes and visual designs that align with your brand identity.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "We build your website using clean, efficient code with a focus on performance and accessibility.",
      },
      {
        step: "04",
        title: "Testing & Launch",
        description:
          "Thorough cross-browser testing, performance optimization, and smooth deployment.",
      },
    ],
    pricing: [
      {
        label: "Basic",
        price: "$599",
        description: "Simple business website",
        features: [
          "5-page WordPress site",
          "Responsive design",
          "Contact form",
          "Basic SEO setup",
          "Speed optimization",
          "1 week delivery",
        ],
      },
      {
        label: "Business",
        price: "$1,999",
        description: "Full-featured business website",
        features: [
          "10+ page custom website",
          "Custom design",
          "Blog setup",
          "Advanced SEO",
          "Analytics integration",
          "2-3 weeks delivery",
          "30-day support",
        ],
        popular: true,
      },
      {
        label: "Custom",
        price: "$4,999+",
        description: "Custom web application",
        features: [
          "Full-stack development",
          "Custom features & APIs",
          "Database integration",
          "User authentication",
          "Admin dashboard",
          "4-8 weeks delivery",
          "90-day support",
        ],
      },
    ],
    faqs: [
      {
        question: "Which CMS platform do you recommend?",
        answer:
          "It depends on your needs. WordPress is great for content-heavy sites, Shopify for e-commerce, and custom solutions (Next.js/React) for complex web applications.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Absolutely. All our websites are built with a mobile-first approach, ensuring perfect display on all devices.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes! We offer complete website redesigns while preserving your SEO rankings and migrating all existing content.",
      },
      {
        question: "Do you provide website hosting?",
        answer:
          "We help you choose and set up the best hosting solution for your needs, whether it's shared hosting, VPS, or cloud hosting.",
      },
    ],
  },

  "design-branding": {
    slug: "design-branding",
    title: "Design & Branding",
    tagline: "Designs That Tell Your Story",
    icon: "🎨",
    gradient: "linear-gradient(135deg, #c026d3, #d946ef)",
    description:
      "From brand identity to UI/UX design, we create visually stunning designs that communicate your brand message and captivate your audience.",
    features: [
      {
        title: "Brand Identity Design",
        description:
          "Complete brand identity systems including logos, color palettes, typography, and brand guidelines.",
        icon: "✨",
      },
      {
        title: "UI/UX Design",
        description:
          "User-centered interface designs that are intuitive, accessible, and optimized for conversions.",
        icon: "📱",
      },
      {
        title: "Logo & Visual Design",
        description:
          "Memorable logos and visual assets that make your brand instantly recognizable.",
        icon: "🎯",
      },
      {
        title: "Social Media Graphics",
        description:
          "Scroll-stopping social media templates, posts, stories, and ad creatives for all platforms.",
        icon: "📸",
      },
      {
        title: "Print & Packaging",
        description:
          "Business cards, brochures, packaging design, and other print materials that leave an impression.",
        icon: "📦",
      },
      {
        title: "Presentation Design",
        description:
          "Professional pitch decks, investor presentations, and corporate slide templates.",
        icon: "📊",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brief",
        description:
          "We understand your brand vision, target audience, competitors, and design preferences.",
      },
      {
        step: "02",
        title: "Concept",
        description:
          "Our designers create multiple design concepts and mood boards for your review.",
      },
      {
        step: "03",
        title: "Refine",
        description:
          "Based on your feedback, we refine the chosen concept to perfection with unlimited revisions.",
      },
      {
        step: "04",
        title: "Deliver",
        description:
          "We deliver all final files in multiple formats with a comprehensive brand guidelines document.",
      },
    ],
    pricing: [
      {
        label: "Essentials",
        price: "$399",
        description: "Core brand design package",
        features: [
          "Logo design (3 concepts)",
          "Color palette",
          "Typography selection",
          "Business card design",
          "Social media templates (3)",
          "1 week delivery",
        ],
      },
      {
        label: "Premium",
        price: "$1,299",
        description: "Complete brand identity",
        features: [
          "Logo + full brand identity",
          "Brand guidelines document",
          "Social media kit (10 templates)",
          "Presentation template",
          "Stationery design",
          "2 weeks delivery",
          "Unlimited revisions",
        ],
        popular: true,
      },
      {
        label: "Enterprise",
        price: "$3,499+",
        description: "Full-scale brand system",
        features: [
          "Complete brand overhaul",
          "UI/UX design system",
          "Marketing collateral suite",
          "Animated logo",
          "Brand strategy consulting",
          "4 weeks delivery",
          "60-day support",
        ],
      },
    ],
    faqs: [
      {
        question: "How many logo concepts will I receive?",
        answer:
          "We typically provide 3-5 unique logo concepts. You choose your favorite, and we refine it with unlimited revisions until you're 100% satisfied.",
      },
      {
        question: "What file formats will I receive?",
        answer:
          "You'll receive your designs in all necessary formats — PNG, SVG, PDF, AI, EPS, and PSD — suitable for web, print, and social media.",
      },
      {
        question: "Can you work with our existing brand guidelines?",
        answer:
          "Of course! We can extend and enhance your existing brand identity or create new materials that align with your current guidelines.",
      },
      {
        question: "Do you offer ongoing design support?",
        answer:
          "Yes, we offer monthly retainer packages for ongoing design needs like social media graphics, marketing materials, and ad creatives.",
      },
    ],
  },

  "seo-analytics": {
    slug: "seo-analytics",
    title: "SEO & Analytics",
    tagline: "Rank Higher, Grow Faster",
    icon: "📊",
    gradient: "linear-gradient(135deg, #ea580c, #f97316)",
    description:
      "Data-driven SEO strategies that boost your search rankings, drive organic traffic, and provide actionable insights for sustainable business growth.",
    features: [
      {
        title: "Technical SEO Audit",
        description:
          "Comprehensive site audits covering crawlability, indexation, site speed, schema markup, and more.",
        icon: "🔍",
      },
      {
        title: "Keyword Research",
        description:
          "In-depth keyword analysis to identify high-value opportunities your competitors are missing.",
        icon: "🎯",
      },
      {
        title: "On-Page Optimization",
        description:
          "Optimization of meta tags, headings, content structure, internal linking, and schema markup.",
        icon: "📝",
      },
      {
        title: "Link Building",
        description:
          "Strategic backlink acquisition through outreach, guest posting, and digital PR campaigns.",
        icon: "🔗",
      },
      {
        title: "Analytics Setup",
        description:
          "Google Analytics 4, Search Console, and custom dashboard setup for data-driven decision making.",
        icon: "📈",
      },
      {
        title: "Performance Tracking",
        description:
          "Monthly reporting with rankings, traffic data, conversion metrics, and actionable recommendations.",
        icon: "📊",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description:
          "We perform a comprehensive SEO audit to identify issues, opportunities, and quick wins.",
      },
      {
        step: "02",
        title: "Strategy",
        description:
          "We create a customized SEO strategy with target keywords, content plan, and link building roadmap.",
      },
      {
        step: "03",
        title: "Execute",
        description:
          "Our team implements on-page optimizations, creates content, and builds high-quality backlinks.",
      },
      {
        step: "04",
        title: "Report",
        description:
          "Monthly performance reports with rankings, traffic growth, and strategic recommendations.",
      },
    ],
    pricing: [
      {
        label: "SEO Audit",
        price: "$299",
        description: "One-time comprehensive audit",
        features: [
          "Technical SEO audit",
          "Keyword gap analysis",
          "Competitor analysis",
          "Site speed report",
          "Action plan with priorities",
          "5-day delivery",
        ],
      },
      {
        label: "Monthly SEO",
        price: "$999/mo",
        description: "Ongoing SEO management",
        features: [
          "On-page optimization",
          "Content optimization (4 pages)",
          "Link building (5-10 links/mo)",
          "Monthly rankings report",
          "Google Analytics monitoring",
          "Dedicated SEO manager",
        ],
        popular: true,
      },
      {
        label: "Growth Plan",
        price: "$2,499/mo",
        description: "Aggressive SEO growth strategy",
        features: [
          "Full SEO management",
          "Content creation (8 articles)",
          "Link building (15-25 links/mo)",
          "Local SEO optimization",
          "Conversion rate optimization",
          "Weekly reporting",
          "Priority support",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does it take to see SEO results?",
        answer:
          "SEO is a long-term strategy. You'll typically see initial improvements in 2-3 months, with significant results in 4-6 months. Competitive keywords may take 6-12 months.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer:
          "No ethical SEO agency can guarantee specific rankings as Google's algorithm is constantly evolving. However, we guarantee proven strategies that consistently deliver results.",
      },
      {
        question: "Which SEO tools do you use?",
        answer:
          "We use industry-leading tools including Ahrefs, SEMrush, Screaming Frog, Google Search Console, and Google Analytics for comprehensive SEO management.",
      },
      {
        question: "Can you help with local SEO?",
        answer:
          "Yes! We offer local SEO services including Google Business Profile optimization, local citations, review management, and local keyword targeting.",
      },
    ],
  },

  "app-development": {
    slug: "app-development",
    title: "App Development",
    tagline: "Apps That Users Love",
    icon: "📱",
    gradient: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
    description:
      "We build native and cross-platform mobile applications that deliver exceptional user experiences, from concept to App Store launch.",
    features: [
      {
        title: "Android Development",
        description:
          "Native Android apps built with Kotlin and Java for optimal performance on all Android devices.",
        icon: "🤖",
      },
      {
        title: "iOS Development",
        description:
          "Native iOS apps built with Swift for iPhone and iPad with smooth, intuitive user experiences.",
        icon: "🍎",
      },
      {
        title: "Cross-Platform Apps",
        description:
          "React Native and Flutter apps that work beautifully on both iOS and Android from a single codebase.",
        icon: "🔄",
      },
      {
        title: "App UI/UX Design",
        description:
          "User-centered mobile app designs with intuitive navigation, smooth animations, and modern aesthetics.",
        icon: "🎨",
      },
      {
        title: "API & Backend",
        description:
          "Scalable backend systems and APIs to power your mobile app with real-time data and cloud services.",
        icon: "☁️",
      },
      {
        title: "App Maintenance",
        description:
          "Ongoing app updates, bug fixes, performance optimization, and feature enhancements.",
        icon: "🔧",
      },
    ],
    process: [
      {
        step: "01",
        title: "Ideation",
        description:
          "We define your app's purpose, features, target users, and create a detailed project roadmap.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "Our designers create wireframes, prototypes, and high-fidelity UI designs for your approval.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "Our developers build your app with clean code, thorough testing, and iterative feedback loops.",
      },
      {
        step: "04",
        title: "Launch",
        description:
          "We handle App Store/Play Store submission, launch marketing, and provide ongoing support.",
      },
    ],
    pricing: [
      {
        label: "MVP",
        price: "$4,999",
        description: "Minimum viable product launch",
        features: [
          "Core features (up to 5 screens)",
          "Basic UI design",
          "User authentication",
          "API integration",
          "App Store submission",
          "6-8 weeks delivery",
        ],
      },
      {
        label: "Standard",
        price: "$12,999",
        description: "Full-featured mobile app",
        features: [
          "Up to 15 screens",
          "Custom UI/UX design",
          "Push notifications",
          "Payment integration",
          "Admin panel",
          "10-14 weeks delivery",
          "60-day support",
        ],
        popular: true,
      },
      {
        label: "Enterprise",
        price: "$25,000+",
        description: "Complex enterprise application",
        features: [
          "Unlimited screens",
          "Advanced features",
          "Real-time features",
          "Multi-language support",
          "Analytics dashboard",
          "16-24 weeks delivery",
          "6-month support",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I build a native or cross-platform app?",
        answer:
          "Cross-platform (React Native/Flutter) is cost-effective for most apps. Native development is recommended for apps requiring maximum performance, complex animations, or heavy device-specific features.",
      },
      {
        question: "How long does it take to build a mobile app?",
        answer:
          "An MVP typically takes 6-8 weeks, a standard app 10-14 weeks, and complex enterprise apps 16-24 weeks depending on features and complexity.",
      },
      {
        question: "Do you handle App Store and Play Store submission?",
        answer:
          "Yes, we handle the entire submission process including app store optimization (ASO), screenshots, descriptions, and compliance with store guidelines.",
      },
      {
        question: "Can you integrate my app with existing systems?",
        answer:
          "Absolutely. We integrate with CRMs, payment gateways, analytics platforms, social media APIs, and any third-party services your business uses.",
      },
    ],
  },
};
