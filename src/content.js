// ============================================================
// SITE CONTENT — edit all copy, images, links and data here
// ============================================================

// ─── BRAND ───────────────────────────────────────────────────
export const brand = {
  name: "SiteCraft",
  tagline: "We build. We host. We maintain. You grow.",
  description: "We build. We host. We maintain. You grow.",
};

// ─── NAVBAR ──────────────────────────────────────────────────
export const navLinks = [
  { label: "Work",         href: "#work" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing",      href: "#pricing" },
  { label: "FAQ",          href: "#faq" },
];

export const navCTA = { label: "Get a Free Audit →", href: "#how-it-works" };

// ─── HERO ────────────────────────────────────────────────────
export const hero = {
  badge:       "NO UPFRONT FEES · YOU OWN YOUR SITE · CANCEL ANYTIME",
  eyebrow:     "FOR SERVICE BUSINESSES",
  headline:    ["Your website is", "telling the wrong", "clients to hire you."],
  subheadline: "We rebuild it so the right ones stay.",
  body:        "We audit, redesign, and build your website from scratch — no upfront cost. You pay a simple monthly plan that covers everything.",
  primaryCTA:  { label: "Get My Free Audit →", href: "#how-it-works" },
  secondaryCTA:{ label: "See Our Work", href: "#work" },
  trustLine:   "NO UPFRONT FEES · YOU OWN YOUR SITE · CANCEL ANYTIME",
};

export const heroToasts = [
  { label: "Free Audit",        desc: "We find what's broken",    accent: "bg-emerald-500" },
  { label: "Custom Design",     desc: "Not templates",            accent: "bg-amber-500"   },
  { label: "Fast Delivery",     desc: "Days, not months",         accent: "bg-blue-500"    },
  { label: "SSL & Security",    desc: "Enterprise-grade",         accent: "bg-violet-500"  },
  { label: "Mobile-First",      desc: "Looks great everywhere",   accent: "bg-rose-500"    },
  { label: "Lead Capture",      desc: "Forms & CTAs built-in",    accent: "bg-cyan-500"    },
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
  headline:    "Three steps. Live in days.",
  subheadline: "A simple, transparent process to get your new site live.",
  body:        "No tech knowledge needed. No upfront cost. We handle everything so you can focus on running your business.",
  price:       { original: "$3,000+", current: "$19", period: "/month" },
  cta:         { label: "Get My Free Website Audit", href: "#how-it-works" },
};

export const howItWorksBenefits = [
  "Custom-designed website — not a template",
  "Zero upfront cost",
  "Mobile-first, fast-loading pages",
  "SEO-ready structure",
  "Clear call-to-action setup",
  "Lead capture system built-in",
  "Ongoing support and edits included",
  "All done for you — zero effort on your end",
];

export const howItWorksSteps = [
  {
    step:  "01",
    title: "We Audit First",
    body:  "We identify exactly what's signalling the wrong things — before we touch a single pixel.",
  },
  {
    step:  "02",
    title: "We Build It Right",
    body:  "Custom design. Your brand. Your story. Structured to move visitors from curious to convinced.",
  },
  {
    step:  "03",
    title: "We Handle Everything After",
    body:  "Hosting, maintenance, security, updates, backups — all included. You run your business. We keep your site sharp.",
  },
];

export const howItWorksSocialProof = {
  count: "100+",
  label: "businesses already live",
  avatarColors: ["bg-emerald-500", "bg-blue-500", "bg-rose-500", "bg-amber-500"],
};

// ─── WHY IT MATTERS (STATS SECTION) ───────────────────────────
export const statsSection = {
  headline: "Perception is your first salesperson. And most websites fire them on day one.",
  subheadline: "Premium clients decide in seconds. Before they read a word, they've formed an opinion about your prices, your professionalism, and whether you're worth their time. If your website looks cheap — they assume your service is too.",
};

export const stats = [
  { value: 100,  suffix: "+",  label: "Websites Built",      color: "text-primary" },
  { value: 99.9, suffix: "%",  label: "Uptime Guarantee",    color: "text-accent"  },
  { value: 24,   suffix: "hr", label: "Average Build Time",  color: "text-coral"   },
  { value: 0,    suffix: "",   prefix: "$", label: "Continuous Support", color: "text-violet" },
];

// ─── FEATURES ────────────────────────────────────────────────
export const featuresSection = {
  headline:    "Everything it needs. Nothing it doesn't.",
  subheadline: "Built to look good. Built to convert.",
};

export const featureCategories = [
  { id: "core",      label: "Core Platform"  },
  { id: "marketing", label: "Growth & SEO"   },
  { id: "security",  label: "Security & Trust" },
];

export const features = [
  {
    category:    "core",
    title:       "Custom Design",
    description: "Built for your business. Not a theme. Not a template.",
    iconColor:   "text-primary",
  },
  {
    category:    "marketing",
    title:       "Conversion Structure",
    description: "Every page guides visitors toward one action.",
    iconColor:   "text-accent",
  },
  {
    category:    "core",
    title:       "Mobile-First Build",
    description: "Looks right on every device. Always.",
    iconColor:   "text-blue-600",
  },
  {
    category:    "security",
    title:       "SSL & Security",
    description: "Enterprise-grade. Safe and browser-trusted.",
    iconColor:   "text-cyan-600",
  },
  {
    category:    "marketing",
    title:       "Lead Capture",
    description: "Forms and booking flows built to convert.",
    iconColor:   "text-indigo-600",
  },
  {
    category:    "core",
    title:       "Ongoing Support",
    description: "Updates and edits included. Just message us.",
    iconColor:   "text-violet-600",
  },
];

// ─── SHOWCASE (INDUSTRIES) ────────────────────────────────────
export const showcaseSection = {
  badge:    "Who We Build For",
  headline: "If your business needs better clients, this is for you.",
};

export const industries = [
  {
    id:          "coaching",
    label:       "Coaches & Consultants",
    title:       "Coaches & Consultants",
    description: "Convert cold visitors into high-ticket enquiries.",
    color:       "bg-primary",
  },
  {
    id:          "practitioners",
    label:       "Service Businesses",
    title:       "Service Businesses",
    description: "HVAC, plumbing, cleaning, trades — built for local leads.",
    color:       "bg-accent",
  },
  {
    id:          "legal",
    label:       "Legal & Advisory",
    title:       "Legal & Advisory",
    description: "Communicate expertise before a word is read.",
    color:       "bg-blue-600",
  },
  {
    id:          "medical",
    label:       "Healthcare",
    title:       "Medical Practices",
    description: "Trust-focused design for clinics and health practitioners.",
    color:       "bg-cyan-600",
  },
  {
    id:          "agencies",
    label:       "Agencies",
    title:       "Agencies",
    description: "Let your work speak.",
    color:       "bg-indigo-600",
  },
  {
    id:          "local",
    label:       "Local Businesses",
    title:       "Local Businesses",
    description: "If your site needs to bring in customers, this is it.",
    color:       "bg-violet-600",
  },
];

// ─── STICKY REVEAL (WHY US) ───────────────────────────────────
export const stickyReveal = {
  badge:    "Why SiteCraft",
  headline: "We don't just build websites. We rebuild how your business is perceived.",
  body:     "Most designers hand you a site and disappear. We audit first, build around your conversion goals, and stay on to maintain everything.",
};

export const stickyRevealFeatures = [
  {
    title:       "Audit First",
    description: "We find what's costing you better clients before we design anything.",
    iconBg:      "bg-primary",
  },
  {
    title:       "Conversion-Focused",
    description: "Every decision is made to perform, not just impress.",
    iconBg:      "bg-amber",
  },
  {
    title:       "Ongoing Partnership",
    description: "Hosting, updates, support — included every month.",
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
];

// ─── TESTIMONIALS ─────────────────────────────────────────────
export const testimonialsSection = {
  badge:    "Real Stories",
  headline: "Trusted by real business owners.",
  body:     "Real websites for real businesses — designed to perform.",
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
  headline:    "No upfront cost. One simple monthly plan.",
  subheadline: "We sponsor the build. You pay a monthly fee that covers everything.",
};

export const pricingIncluded = [
  "Custom-designed website",
  "Your own domain",
  "Hosting & SSL",
  "Maintenance & backups",
  "Security monitoring",
  "Ongoing updates & edits",
  "Mobile-responsive design",
  "Lead capture forms",
  "Google Analytics",
];

export const pricingPlans = [
  {
    id:          "standard",
    badge:       "Standard",
    name:        "Standard",
    monthlyPrice:"$19",
    annualPrice: "$19",
    period:      "/mo",
    cta:         "Get My Free Audit",
    featured:    false,
  },
  {
    id:          "professional",
    badge:       "LIMITED OFFER",
    name:        "Professional",
    monthlyPrice:"$19",
    annualPrice: "$19",
    period:      "/mo",
    cta:         "Build My Website →",
    featured:    true,
    featuredLabel:"locked in forever",
    microcopy:   "Cancel anytime. No contracts. No hidden fees."
  },
  {
    id:          "enterprise",
    badge:       "Multi-location businesses",
    name:        "Enterprise",
    price:       "Custom",
    description: "Multiple sites, dedicated project manager, advanced integrations, and SEO per location.",
    body:        "Multiple sites, dedicated project manager, advanced integrations, and SEO per location.",
    cta:         "Contact Us",
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
    q: "Is the build really free?",
    a: "Yes. We cover the full design and build cost. You pay nothing upfront — the monthly plan starts when your site goes live.",
  },
  {
    q: "Do I own the website?",
    a: "Yes. Your domain, your content, your asset. If you leave, you take it with you.",
  },
  {
    q: "How long until I'm live?",
    a: "Most sites go live within 7–14 days from the audit.",
  },
  {
    q: "What if I need changes?",
    a: "Just message us. Updates and edits are included — no tickets, no extra charges.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no cancellation fees. Your site stays yours regardless.",
  },
  {
    q: "What businesses do you work with?",
    a: "Service businesses, consultants, coaches, medical and legal professionals, agencies, and local businesses — anyone whose website should be converting clients but isn't.",
  },
  {
    q: "What does the free audit cover?",
    a: "Visual trust signals, conversion structure, mobile performance, and messaging clarity. You'll get a clear breakdown of what's working and what to fix first.",
  },
  {
    q: "Do you set up analytics?",
    a: "Yes. Google Analytics is standard. We can also set up conversion tracking for enquiries and bookings.",
  },
];

// ─── CTA ─────────────────────────────────────────────────────
export const cta = {
  headline:    "Ready to stop losing clients to a website that undersells you?",
  subheadline: "Let us show you what's holding it back — and how we fix it.",
  primaryCTA:  { label: "Get My Free Audit →", href: "#how-it-works" },
  secondaryCTA:{ label: "See Pricing",              href: "#pricing"      },
  footnotes:   ["NO UPFRONT FEES", "FULLY OWNED BY YOU", "CANCEL ANYTIME"],
};

// ─── MARQUEE ─────────────────────────────────────────────────
export const marqueeLogos = [
  "COACHES", "CONSULTANTS", "HVAC", "PLUMBERS", "LAW FIRMS",
  "DENTISTS", "FITNESS", "CLEANING CO", "REAL ESTATE", "AGENCIES",
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
