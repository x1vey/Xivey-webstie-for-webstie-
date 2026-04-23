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
  { label: "Features",     href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing",      href: "#pricing" },
  { label: "FAQ",          href: "#faq" },
];

export const navCTA = { label: "Get My Free Audit", href: "#how-it-works" };

// ─── HERO ────────────────────────────────────────────────────
export const hero = {
  badge:       "No upfront fees · Cancel anytime · Fully owned by you",
  headline:    ["Custom websites", "for growing", "businesses."],
  subheadline: "We audit, redesign, and build your website from scratch — so it looks professional, loads fast, and turns visitors into customers. You only pay a small monthly care plan.",
  primaryCTA:  { label: "Get My Free Website Audit", href: "#how-it-works" },
  secondaryCTA:{ label: "View Pricing", href: "#pricing" },
  trustLine:   "No upfront fees · Cancel anytime · Fully owned by you",
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
  headline:    "Simple 3-step process.",
  subheadline: "Go live in days, not months.",
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
    title: "Submit your website",
    body:  "Tell us about your business and current site. We take it from there.",
  },
  {
    step:  "02",
    title: "We audit and plan",
    body:  "We identify what is broken and exactly how to fix it.",
  },
  {
    step:  "03",
    title: "We rebuild it",
    body:  "You get a clean, fast, conversion-focused website. Go live in days, not months.",
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
  headline:    "Everything you need. Nothing you don't.",
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
    description: "Not a template. A website built specifically for your business, your brand, and your customers.",
    iconColor:   "text-primary",
  },
  {
    category:    "marketing",
    title:       "SEO-Ready Structure",
    description: "On-page SEO, meta tags, and Google Business integration so customers can find you.",
    iconColor:   "text-accent",
  },
  {
    category:    "core",
    title:       "Mobile-First Pages",
    description: "Fast-loading, responsive design that looks great on every device.",
    iconColor:   "text-blue-600",
  },
  {
    category:    "marketing",
    title:       "Lead Capture Built-In",
    description: "Forms, CTAs, and booking integrations set up so visitors become customers.",
    iconColor:   "text-indigo-600",
  },
  {
    category:    "security",
    title:       "SSL & Security",
    description: "Free SSL certificate and security monitoring so your site stays safe.",
    iconColor:   "text-cyan-600",
  },
  {
    category:    "core",
    title:       "Ongoing Support",
    description: "Need a change? Just message us. Updates, edits, and improvements are all included.",
    iconColor:   "text-violet-600",
  },
];

// ─── SHOWCASE (INDUSTRIES) ────────────────────────────────────
export const showcaseSection = {
  badge:    "Real Work",
  headline: "Websites we've built.",
};

export const industries = [
  {
    id:          "coaching",
    label:       "Coaches & Consultants",
    title:       "Coaches & Consultants",
    description: "Landing pages that convert cold leads into high-ticket clients.",
    color:       "bg-primary",
  },
  {
    id:          "practitioners",
    label:       "Service Businesses",
    title:       "Service Businesses",
    description: "HVAC, plumbing, cleaning, landscaping — sites built for local leads.",
    color:       "bg-accent",
  },
  {
    id:          "home-services",
    label:       "Agencies",
    title:       "Agencies",
    description: "Case-study focused designs for creative and marketing agencies.",
    color:       "bg-indigo-600",
  },
  {
    id:          "legal",
    label:       "Legal & Advisory",
    title:       "Legal & Advisory",
    description: "Professional layouts designed for law firms and consultants.",
    color:       "bg-blue-600",
  },
  {
    id:          "medical",
    label:       "Healthcare",
    title:       "Medical Practices",
    description: "Trust-focused sites for clinics, dentists, and health practitioners.",
    color:       "bg-cyan-600",
  },
  {
    id:          "advisory",
    label:       "Local Businesses",
    title:       "Local Businesses",
    description: "If your website needs to bring in customers — this is for you.",
    color:       "bg-violet-600",
  },
];

// ─── STICKY REVEAL (WHY US) ───────────────────────────────────
export const stickyReveal = {
  badge:    "Why Us",
  headline: "We handle everything.",
  body:     "We don't just design websites. We rebuild your entire online presence so it actually works for your business.",
};

export const stickyRevealFeatures = [
  {
    title:       "Audit First",
    description: "We start by identifying exactly what is broken on your current site and why it is not converting visitors into customers.",
    iconBg:      "bg-primary",
  },
  {
    title:       "Conversion-Focused Build",
    description: "Every page is structured to guide visitors toward taking action — calling, booking, or buying.",
    iconBg:      "bg-amber",
  },
  {
    title:       "Ongoing Care Included",
    description: "Hosting, maintenance, updates, backups, security, and support — all included in your monthly plan.",
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
  headline:    "No upfront cost. Simple monthly plan.",
  subheadline: "We sponsor the website build. You only pay a small monthly care plan that covers everything.",
};

export const pricingIncluded = [
  "Custom-designed website",
  "Your own domain name",
  "Hosting & SSL certificate",
  "Maintenance & backups",
  "Security monitoring",
  "Ongoing updates & edits",
  "Mobile-responsive design",
  "Lead capture forms",
  "Google Analytics setup",
];

export const pricingPlans = [
  {
    id:          "standard",
    badge:       "Care Plan",
    name:        "Standard",
    monthlyPrice:"$19",
    annualPrice: "$19",
    period:      "/mo",
    cta:         "Get My Free Audit",
    featured:    false,
  },
  {
    id:          "professional",
    badge:       "Care Plan + Growth",
    name:        "Professional",
    monthlyPrice:"$49",
    annualPrice: "$49",
    period:      "/mo",
    cta:         "Get My Free Audit",
    featured:    true,
    featuredLabel:"Most Popular",
  },
  {
    id:          "enterprise",
    badge:       "Multi-Location",
    name:        "Enterprise",
    price:       "Custom",
    description: "For businesses with multiple locations.",
    body:        "Dedicated project manager, multiple sites, advanced integrations and specialized SEO for each location.",
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
    q: "Is the website really free?",
    a: "Yes. We cover the build cost entirely. You only pay a small monthly care plan that includes hosting, maintenance, updates, backups, security, and ongoing support.",
  },
  {
    q: "Do I own the website?",
    a: "Yes. It is fully yours. If you ever want to move it elsewhere, you can — no lock-in.",
  },
  {
    q: "How long does it take?",
    a: "Typically a few days to a couple of weeks depending on complexity. We will always give you a clear timeline upfront.",
  },
  {
    q: "What if I need changes?",
    a: "Just send us a message. Ongoing updates and edits are included in your monthly plan.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No lock-in, no long-term contracts. Cancel whenever you want.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "Coaches, consultants, service businesses, agencies, and local businesses. If your website needs to bring in customers, we are a great fit.",
  },
  {
    q: "What does the free audit include?",
    a: "We review your current website and identify exactly what is holding it back — slow load times, unclear messaging, missing CTAs, poor mobile experience, and more. Then we show you how to fix it.",
  },
  {
    q: "Do you provide analytics?",
    a: "Yes. We set up Google Analytics so you can track visitors, traffic sources, and how your site is performing.",
  },
];

// ─── CTA ─────────────────────────────────────────────────────
export const cta = {
  headline:    "Ready to upgrade your website?",
  subheadline: "Let us show you what is holding your site back — and how to fix it.",
  primaryCTA:  { label: "Get My Free Website Audit", href: "#how-it-works" },
  secondaryCTA:{ label: "View Pricing",              href: "#pricing"      },
  footnotes:   ["No Upfront Fees", "Fully Owned By You", "Cancel Anytime"],
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
