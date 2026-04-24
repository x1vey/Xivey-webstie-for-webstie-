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
  badge:       "FOR SERVICE BUSINESSES",
  headline:    ["Your website is telling", "the wrong clients", "to stay."],
  subheadline: "We audit, redesign, and build your website from scratch — no upfront cost. You pay a simple monthly plan that covers everything.",
  primaryCTA:  { label: "Get My Free Audit", href: "#how-it-works" },
  secondaryCTA:{ label: "See Our Work", href: "#work" },
  trustLine:   "NO UPFRONT FEES · YOU OWN YOUR SITE · CANCEL ANYTIME",
};

export const heroToasts = [
  { label: "Custom Design",     desc: "Not templates",            accent: "bg-emerald-500" },
  { label: "Conversion Setup",  desc: "Built to perform",         accent: "bg-amber-500"   },
  { label: "Fast Delivery",     desc: "Days, not months",         accent: "bg-blue-500"    },
  { label: "SSL & Security",    desc: "Enterprise-grade",         accent: "bg-violet-500"  },
  { label: "Mobile-First",      desc: "Looks great everywhere",   accent: "bg-rose-500"    },
  { label: "Lead Capture",      desc: "Forms & CTAs built-in",    accent: "bg-cyan-500"    },
];

export const heroCards = [
  { image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=60&w=600", title: "Landscaping",  top: "12%", left: "6%",  width: "340px", rotate: "-6deg" },
  { image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=60&w=600", title: "Legal Firm",   top: "48%", left: "32%", width: "400px", rotate: "4deg"  },
  { image: "https://images.unsplash.com/photo-1540555700478-4be289aefec9?auto=format&fit=crop&q=60&w=600", title: "Wellness Spa", top: "76%", left: "62%", width: "360px", rotate: "-3deg" },
  { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=600", title: "Consulting",   top: "18%", left: "72%", width: "300px", rotate: "8deg"  },
  { image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=60&w=600", title: "Agency",       top: "62%", left: "8%",  width: "280px", rotate: "5deg"  },
];

// ─── HOW IT WORKS ─────────────────────────────────────────────
export const howItWorks = {
  badge:       "HOW IT WORKS",
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
    body:  "We dig into your current site and identify exactly what's signalling the wrong things to the right people — before we touch a single pixel.",
  },
  {
    step:  "02",
    title: "We Build It Right",
    body:  "Custom design. Your brand. Your story. Structured to guide visitors from curious to convinced — no templates, no drag-and-drop guesswork.",
  },
  {
    step:  "03",
    title: "We Handle Everything After",
    body:  "Hosting, maintenance, security, updates, backups. It's all included in your monthly plan. You run your business. We keep your site sharp.",
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
  headline:    "Everything it needs. Nothing it doesn't.",
  subheadline: "Every page is sequenced to move a visitor toward one action.",
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
    description: "Built specifically for your business and your clients. Not a theme. Not a template.",
    iconColor:   "text-primary",
  },
  {
    category:    "marketing",
    title:       "Conversion Structure",
    description: "Every page is sequenced to move a visitor toward one action — calling, booking, or buying.",
    iconColor:   "text-accent",
  },
  {
    category:    "core",
    title:       "Mobile-First Build",
    description: "Looks and performs exactly right on every device. Always.",
    iconColor:   "text-blue-600",
  },
  {
    category:    "marketing",
    title:       "Lead Capture Built In",
    description: "Forms, calls-to-action, and booking flows — designed to turn visitors into enquiries.",
    iconColor:   "text-indigo-600",
  },
  {
    category:    "security",
    title:       "SSL & Security",
    description: "Enterprise-grade protection. Your site stays safe and trusted by browsers.",
    iconColor:   "text-cyan-600",
  },
  {
    category:    "core",
    title:       "Ongoing Support",
    description: "Need a change? Just message us. Updates and edits are included. No tickets. No waiting.",
    iconColor:   "text-violet-600",
  },
];

// ─── SHOWCASE (INDUSTRIES) ────────────────────────────────────
export const showcaseSection = {
  badge:    "WHO WE BUILD FOR",
  headline: "If your business needs better clients, this is for you.",
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
  badge:    "WHY SITECRAFT",
  headline: "We don't just design websites. We rebuild how your business is perceived.",
  body:     "Most web designers hand you a site and disappear. We start with a full audit, build around your actual conversion goals, and stay on to maintain everything.",
};

export const stickyRevealFeatures = [
  {
    title:       "Audit First",
    description: "We identify exactly what's broken and why it's costing you better clients — before we design a single page.",
    iconBg:      "bg-primary",
  },
  {
    title:       "Conversion-Focused",
    description: "Every layout decision is made to guide your visitors toward one outcome. Not to look impressive. To perform.",
    iconBg:      "bg-amber",
  },
  {
    title:       "Ongoing Partnership",
    description: "We're not a one-time vendor. Hosting, updates, maintenance, and support — all included, every month.",
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
  headline:    "No upfront cost. One simple monthly plan.",
  subheadline: "We sponsor the build. You pay a small monthly fee that covers everything.",
};

export const pricingIncluded = [
  "Custom-designed website — not a template",
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
    badge:       "LIMITED OFFER",
    name:        "Professional",
    monthlyPrice:"$49",
    annualPrice: "$49",
    period:      "/mo",
    cta:         "Build My Website",
    featured:    true,
    featuredLabel:"Locked in forever at this rate",
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
    q: "Is the website really free to build?",
    a: "Yes — we cover the full cost of designing and building your site. You don't pay anything upfront. The monthly plan starts when your site goes live and covers hosting, maintenance, updates, and support.",
  },
  {
    q: "Do I own the website?",
    a: "Yes. The site is yours. Your domain, your content, your asset. If you ever leave, you take it with you. No lock-in.",
  },
  {
    q: "How long does it take to go live?",
    a: "Most sites are live within 7–14 days from the audit. We move fast because we have a clear process — not because we cut corners.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Just message us. Edits, updates, and improvements are included in your monthly plan. There's no separate charge for changes and no support tickets to raise.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no cancellation fees. If you decide to leave, your site remains yours. We'll help you migrate it wherever you want to go.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "We work with service businesses, consultants, coaches, medical and legal professionals, agencies, and local businesses — any business where the website is expected to attract and convert clients.",
  },
  {
    q: "What does the free audit include?",
    a: "We review your current site across four dimensions: visual trust signals, conversion structure, mobile performance, and messaging clarity. You'll receive a clear breakdown of what's working, what's losing you clients, and what we'd fix.",
  },
  {
    q: "Do you provide analytics?",
    a: "Yes. Google Analytics is set up as standard so you can see exactly where visitors come from and what they do on your site. We can also set up conversion tracking to measure enquiries and bookings directly.",
  },
];

// ─── CTA ─────────────────────────────────────────────────────
export const cta = {
  headline:    "Ready to stop losing clients to a website that undersells you?",
  subheadline: "Let us show you what's holding your site back — and how we fix it.",
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
