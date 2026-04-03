// ============================================================
// SITE CONTENT — edit all copy, images, links and data here
// ============================================================

// ─── BRAND ───────────────────────────────────────────────────
export const brand = {
  name: "SiteCraft",
  tagline: "Professional websites for service businesses at a fraction of the cost.",
  description: "We build it. We host it. We maintain it. You run your business.",
};

// ─── NAVBAR ──────────────────────────────────────────────────
export const navLinks = [
  { label: "Features",     href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing",      href: "#pricing" },
  { label: "FAQ",          href: "#faq" },
];

export const navCTA = { label: "Get Started", href: "#pricing" };

// ─── HERO ────────────────────────────────────────────────────
export const hero = {
  badge:       "Zero Setup Cost · Full Ownership",
  headline:    ["Premium", "websites.", "$0 down."],
  subheadline: "Custom build, hosting, and maintenance for one monthly price. No upfront fees.",
  primaryCTA:  { label: "Build My Site", href: "#how-it-works" },
  secondaryCTA:{ label: "View Pricing",  href: "#pricing" },
};

export const heroToasts = [
  { label: "SEO Optimised",     desc: "Page 1 on Google",         accent: "bg-emerald-500" },
  { label: "Lightning Fast",    desc: "Sub-second load times",    accent: "bg-amber-500"   },
  { label: "24hr Delivery",     desc: "Live in one business day", accent: "bg-blue-500"    },
  { label: "SSL & Security",    desc: "Enterprise-grade",         accent: "bg-violet-500"  },
  { label: "Custom Design",     desc: "Tailored to your brand",   accent: "bg-rose-500"    },
  { label: "Analytics Built-in",desc: "Track every visitor",      accent: "bg-cyan-500"    },
];

export const heroCards = [
  { image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=60&w=600", title: "Landscaping",  top: "12%", left: "6%",  width: "340px", rotate: "-6deg" },
  { image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=60&w=600", title: "Legal Firm",   top: "48%", left: "32%", width: "400px", rotate: "4deg"  },
  { image: "https://images.unsplash.com/photo-1540555700478-4be289aefec9?auto=format&fit=crop&q=60&w=600", title: "Wellness Spa", top: "76%", left: "62%", width: "360px", rotate: "-3deg" },
  { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=600", title: "Tech Agency",  top: "18%", left: "72%", width: "300px", rotate: "8deg"  },
  { image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=60&w=600", title: "Agency",       top: "62%", left: "8%",  width: "280px", rotate: "5deg"  },
];

// ─── HOW IT WORKS ─────────────────────────────────────────────
export const howItWorks = {
  badge:       "How It Works",
  headline:    "Everything you need.",
  subheadline: "Nothing you don't.",
  body:        "Agencies charge £3,000–£10,000 for this. We deliver the same result — custom-built, live in 24 hours — for just $49/month.",
  price:       { original: "$3,000+", current: "$49", period: "/month" },
  cta:         { label: "Get My Site — $0 Today", href: "#pricing" },
};

export const howItWorksBenefits = [
  "Custom-designed website, built in 24 hours",
  "Zero upfront cost — $0 to get started",
  "SEO-optimised from day one",
  "SSL, hosting & maintenance included",
  "Unlimited special offer updates",
  "A/B testing for funnels",
  "Continuous support & adjustments",
  "All done for you — zero effort on your end",
];

export const howItWorksSteps = [
  {
    step:  "01",
    title: "Apply in 5 minutes",
    body:  "Tell us about your business. No tech knowledge needed. Just answer a few questions and we take it from there.",
  },
  {
    step:  "02",
    title: "We build it overnight",
    body:  "Custom design, your branding, your copy. A professional site built while you sleep.",
  },
  {
    step:  "03",
    title: "Go live in 24 hours",
    body:  "We deploy, you wake up to a live website ready to convert.",
  },
];

export const howItWorksSocialProof = {
  count: "100+",
  label: "businesses already live",
  avatarColors: ["bg-emerald-500", "bg-blue-500", "bg-rose-500", "bg-amber-500"],
};

// ─── STATS ───────────────────────────────────────────────────
export const stats = [
  { value: 100,  suffix: "+",  label: "Websites Built",      color: "text-primary" },
  { value: 99.9, suffix: "%",  label: "Uptime Guarantee",    color: "text-accent"  },
  { value: 24,   suffix: "hr", label: "Average Build Time",  color: "text-coral"   },
  { value: 0,    suffix: "",   prefix: "$", label: "Continuous Support", color: "text-violet" },
];

// ─── FEATURES ────────────────────────────────────────────────
export const featuresSection = {
  headline:    "Grow your business.",
  subheadline: "Every tool you need to launch, manage, and scale your service business, built into one seamless experience.",
};

export const featureCategories = [
  { id: "core",      label: "Core Platform"  },
  { id: "marketing", label: "Growth & SEO"   },
  { id: "security",  label: "Security & Trust" },
];

export const features = [
  {
    category:    "core",
    title:       "Your Own Domain",
    description: "Custom domain matching your brand. We handle DNS, SSL, and technical setup.",
    iconColor:   "text-primary",
  },
  {
    category:    "marketing",
    title:       "Basic SEO Setup",
    description: "On-page SEO, meta tags, and Google Business integration for local discovery.",
    iconColor:   "text-accent",
  },
  {
    category:    "core",
    title:       "Reliable Hosting",
    description: "Enterprise-grade hosting with 99.9% uptime and automatic backups.",
    iconColor:   "text-blue-600",
  },
  {
    category:    "marketing",
    title:       "Analytics Dashboard",
    description: "Full Google Analytics configuration to track your growth.",
    iconColor:   "text-indigo-600",
  },
  {
    category:    "security",
    title:       "SSL & Security",
    description: "Free SSL certificate and malware monitoring for safe browsing.",
    iconColor:   "text-cyan-600",
  },
  {
    category:    "core",
    title:       "Performance First",
    description: "Compressed images and minified code for lightning-fast speeds.",
    iconColor:   "text-violet-600",
  },
];

// ─── SHOWCASE (INDUSTRIES) ────────────────────────────────────
export const showcaseSection = {
  badge:    "Built For Scale",
  headline: "Made with SiteCraft.",
};

export const industries = [
  {
    id:          "coaching",
    label:       "Professional Coaching",
    title:       "Coaches & Mentors",
    description: "Launch your program with landing pages that convert cold leads into high-ticket clients.",
    color:       "bg-primary",
  },
  {
    id:          "practitioners",
    label:       "Wellness",
    title:       "Practitioners & Clinics",
    description: "Stunning portfolio sites for health practitioners with HIPAA-ready booking flows.",
    color:       "bg-accent",
  },
  {
    id:          "home-services",
    label:       "Service Business",
    title:       "Service Professionals",
    description: "HVAC, Plumbing & Electrical sites built for high-volume local leads.",
    color:       "bg-indigo-600",
  },
  {
    id:          "legal",
    label:       "Consulting",
    title:       "Legal & Advisory",
    description: "Project authority with minimalist layouts designed for high-end boutique firms.",
    color:       "bg-blue-600",
  },
  {
    id:          "medical",
    label:       "Healthcare",
    title:       "Medical Practices",
    description: "Multi-provider directories and patient resource portals built for trust.",
    color:       "bg-cyan-600",
  },
  {
    id:          "advisory",
    label:       "B2B Services",
    title:       "Specialized Agencies",
    description: "Case-study focused designs for creative, technical and marketing consultants.",
    color:       "bg-violet-600",
  },
];

// ─── STICKY REVEAL (WHY US) ───────────────────────────────────
export const stickyReveal = {
  badge:    "Why Us",
  headline: "Built to last.",
  body:     "We don't just build websites; we build business tools that scale with you. No technical debt, no performance bottlenecks.",
};

export const stickyRevealFeatures = [
  {
    title:       "Enterprise Grade Infrastructure",
    description: "We host your site on global edge networks with 99.99% uptime. Your site is always fast, no matter where your customers are.",
    iconBg:      "bg-primary",
  },
  {
    title:       "Conversion-Focused UX",
    description: "Every pixel is optimized to turn visitors into paying customers. From mobile-first design to one-click booking forms.",
    iconBg:      "bg-amber",
  },
  {
    title:       "Organic SEO Dominance",
    description: "Our sites are built for Google. Automatic XML sitemaps, structured data, and minified assets for maximum visibility.",
    iconBg:      "bg-accent",
  },
];

// ─── EXAMPLE SITES ───────────────────────────────────────────
/** @typedef {{ title: string, category: string, image: string, url: string }} ExampleSite */
export const exampleSites = [
  { title: "Arbor & Co. Landscaping",  category: "Landscaping",   image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",    url: "#" },
  { title: "Mitchell Plumbing",        category: "Plumbing",      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",    url: "#" },
  { title: "Bright Clean Co.",         category: "Cleaning",      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",       url: "#" },
  { title: "Chen Legal Group",         category: "Legal",         image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",    url: "#" },
  { title: "Summit HVAC Services",     category: "HVAC",          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",    url: "#" },
  { title: "Wellness Medical Clinic",  category: "Medical",       image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",    url: "#" },
  { title: "Peak Consulting",          category: "Consulting",    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",    url: "#" },
  { title: "GreenEdge Lawn Care",      category: "Lawn Care",     image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",       url: "#" },
  { title: "Precision Electric",       category: "Electrical",    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",    url: "#" },
  { title: "Coastal Real Estate",      category: "Real Estate",   image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",    url: "#" },
  { title: "TrueNorth Accounting",     category: "Accounting",    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",       url: "#" },
  { title: "Serenity Day Spa",         category: "Spa & Wellness",image: "https://images.unsplash.com/photo-1540555700478-4be289fbec6e?w=800&q=80",    url: "#" },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────
export const testimonialsSection = {
  badge:    "Real Stories",
  headline: "Trusted by real businesses.",
  body:     "Hundreds of service professionals trust us with their online presence.",
};

export const testimonials = [
  {
    name:   "Sarah Mitchell",
    role:   "Owner, Mitchell Plumbing",
    quote:  "I was paying $3,000 for a website that was outdated within a year. SiteCraft gave me a better site for $49/month and they handle all the updates. It's a no-brainer.",
    iconBg: "bg-coral",
  },
  {
    name:   "David Chen",
    role:   "Founder, Chen Legal Group",
    quote:  "As a lawyer, I needed a professional web presence fast. SiteCraft built my site in a week — it looks like I spent $10k on it. My clients are impressed.",
    iconBg: "bg-primary",
  },
  {
    name:   "Maria Gonzalez",
    role:   "CEO, Bright Clean Co.",
    quote:  "The best part? I don't have to worry about hosting, updates, or security. I just focus on my cleaning business and SiteCraft handles the rest.",
    iconBg: "bg-accent",
  },
];

// ─── PRICING ─────────────────────────────────────────────────
export const pricingSection = {
  headline:    "Simple. Transparent.",
  subheadline: "$0 down, everything included, cancel anytime. No hidden fees or surprise billings.",
};

export const pricingIncluded = [
  "Custom-designed website",
  "Your own domain name",
  "Hosting & SSL certificate",
  "Basic SEO setup",
  "Google Analytics",
  "Ongoing maintenance & changes",
  "Mobile-responsive design",
  "Contact form integration",
  "Performance optimization",
];

export const pricingPlans = [
  {
    id:          "standard",
    badge:       "Base Platform",
    name:        "Standard",
    monthlyPrice:"$49",
    period:      "$49/mo",
    cta:         "Get Started",
    featured:    false,
  },
  {
    id:          "professional",
    badge:       "Everything + Strategy",
    name:        "Professional",
    annualPrice: "$499",
    period:      "/year",
    cta:         "Go Pro Now",
    featured:    true,
    featuredLabel:"Most Popular",
  },
  {
    id:          "enterprise",
    badge:       "Scale & Expand",
    name:        "Enterprise",
    price:       "Custom",
    description: "For multi-location service businesses.",
    body:        "Dedicated project manager, advanced integrations, and specialized SEO campaigns for each location.",
    cta:         "Contact Sales",
    featured:    false,
  },
];

// ─── FAQ ─────────────────────────────────────────────────────
export const faqSection = {
  badge:    "Answers",
  headline: "Got questions?",
  body:     "Everything you need to know before getting started.",
};

export const faqs = [
  {
    q: "Is the website build really free?",
    a: "Yes — 100%. We design and build your website at absolutely no cost. You only pay the monthly subscription which covers hosting, and maintenance. There are no setup fees or hidden charges.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "We specialize in service-based businesses — HVAC, plumbing, legal, medical, consulting, landscaping, cleaning, real estate, and more. If you provide a service to local or national customers, we're a great fit.",
  },
  {
    q: "How can we capture leads?",
    a: "We will add and connect your forms and booking pages in your website.",
  },
  {
    q: "Do you provide analytics?",
    a: "Yes, we can connect Google Analytics so you can track visitors and see how your website is performing.",
  },
  {
    q: "What if I need changes to my website?",
    a: "Just send us a message. Updates like text, images, business hours, or promotions are all included in your plan. Most requests are completed within 24–48 business hours. For larger updates like new pages or major redesigns, we’ll always confirm scope and pricing upfront.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. There are no long-term contracts. If you cancel, your website stays live through the end of your billing period.",
  },
  {
    q: "How long does it take to build my website?",
    a: "Your website is typically ready within 24 hours. You can then review and request changes—we handle revisions quickly, and for larger updates, we’ll confirm timelines upfront before launch.",
  },
  {
    q: "What's included in the SEO setup?",
    a: "We take care of the SEO basics so your website is ready to be found on Google.",
  },
];

// ─── CTA ─────────────────────────────────────────────────────
export const cta = {
  headline:    "Ready to launch?",
  subheadline: "Join the elite businesses who've already transformed their presence.",
  primaryCTA:  { label: "Start My Build",   href: "#pricing"      },
  secondaryCTA:{ label: "Process Details",  href: "#how-it-works" },
  footnotes:   ["No Commitment Required", "$0 Initial Investment", "Cancel Anytime"],
};

// ─── MARQUEE ─────────────────────────────────────────────────
export const marqueeLogos = [
  "PLUMBERS INC", "SALON PRO", "ELITE HVAC", "LAW CARE", "DENTAL WEB",
  "COFFEE CO", "FITNESS PLUS", "SPA RETREAT", "AUTO REPAIR", "PET CARE",
];

// ─── FOOTER ──────────────────────────────────────────────────
export const footerLinks = {
  product: [
    { label: "Features",     href: "#features"     },
    { label: "Pricing",      href: "#pricing"      },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ",          href: "#faq"          },
  ],
  company: [
    { label: "About",           href: "#" },
    { label: "Contact",         href: "#" },
    { label: "Privacy Policy",  href: "#" },
    { label: "Terms of Service",href: "#" },
  ],
};
