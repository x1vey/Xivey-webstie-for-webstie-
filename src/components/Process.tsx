import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { title: "$0 to start",       sub: "No upfront cost",        bg: "bg-emerald-500",  icon: "💸" },
  { title: "24hr delivery",     sub: "Live overnight",         bg: "bg-blue-500",     icon: "⚡" },
  { title: "Custom design",     sub: "Your brand",             bg: "bg-violet-500",   icon: "🎨" },
  { title: "SEO built-in",      sub: "Rank on Google",         bg: "bg-amber-500",    icon: "🔍" },
  { title: "A/B testing",       sub: "Optimise funnels",       bg: "bg-rose-500",     icon: "🧪" },
  { title: "Ongoing support",   sub: "Updates at $0",          bg: "bg-cyan-500",     icon: "🔧" },
  { title: "Done for you",      sub: "Zero effort",            bg: "bg-primary",      icon: "🚀" },
];

const steps = [
  {
    n: "01",
    title: "Apply in 5 min",
    body: "Answer a few questions about your business. No tech skills needed.",
    bg: "bg-gradient-to-br from-[hsl(252_85%_60%)] to-[hsl(270_75%_60%)]",
    shadow: "shadow-[0_20px_60px_-12px_hsl(252_85%_60%/0.4)]",
  },
  {
    n: "02",
    title: "We build overnight",
    body: "Custom site, your branding, your copy — built while you sleep.",
    bg: "bg-gradient-to-br from-[hsl(172_80%_45%)] to-[hsl(185_75%_42%)]",
    shadow: "shadow-[0_20px_60px_-12px_hsl(172_80%_45%/0.4)]",
  },
  {
    n: "03",
    title: "Wake up to a live site",
    body: "Domain connected, analytics live, ready to convert customers.",
    bg: "bg-gradient-to-br from-[hsl(340_82%_62%)] to-[hsl(38_95%_55%)]",
    shadow: "shadow-[0_20px_60px_-12px_hsl(340_82%_62%/0.4)]",
  },
];

const Process = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY     = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#f8f7ff]">

      {/* Subtle colour wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] rounded-full bg-accent/8 blur-[100px]" />
      </div>

      {/* Parallax dot grid */}
      <motion.div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ y: bgY }}>
        <div className="w-full h-[130%] -mt-[15%]" style={{
          backgroundImage: "radial-gradient(circle, hsl(252 85% 60%) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
      </motion.div>

      <div className="container relative z-10 py-28 md:py-40">
        <motion.div style={{ y: contentY }}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-black text-primary border border-primary/20 bg-primary/5 uppercase tracking-[0.3em]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            How It Works
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-start mb-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-foreground leading-[0.88] mb-6">
              Everything.<br />
              <span className="text-foreground/30">For $49/mo.</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-sm">
              Agencies charge thousands. We deliver the same — custom-built, live in 24 hours — for less than a Netflix subscription.
            </p>

            {/* Price callout */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-baseline gap-3 rounded-2xl px-8 py-5 mb-10 bg-gradient-to-br from-primary to-[hsl(270_75%_60%)] shadow-[0_16px_48px_-8px_hsl(252_85%_60%/0.35)]"
            >
              <span className="text-white/40 text-lg font-bold line-through">$3,000+</span>
              <span className="text-5xl font-black text-white tracking-tighter">$49</span>
              <span className="text-white/50 text-base">/month</span>
            </motion.div>

            <Button
              size="lg"
              className="h-14 rounded-full px-10 text-base font-black bg-primary text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 active:scale-[0.97]"
              asChild
            >
              <a href="#pricing">Start Today — $0 Upfront <ArrowRight size={18} className="ml-2" /></a>
            </Button>
          </motion.div>

          {/* RIGHT — step cards */}
          <div className="space-y-5 lg:pt-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.14 }}
                className={`group relative ${s.bg} ${s.shadow} rounded-3xl p-8 overflow-hidden transition-transform duration-500 hover:-translate-y-1`}
              >
                <span className="absolute right-5 top-2 text-[6rem] font-black leading-none text-white/10 select-none pointer-events-none">
                  {s.n}
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight mb-2 relative z-10">{s.title}</h3>
                <p className="text-white/65 text-base leading-relaxed max-w-xs relative z-10">{s.body}</p>
              </motion.div>
            ))}

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 pt-2 pl-2"
            >
              <div className="flex -space-x-2">
                {["bg-emerald-400","bg-blue-400","bg-rose-400","bg-amber-400"].map((c, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-[#f8f7ff]`} />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                <span className="text-foreground font-bold">100+ businesses</span> already live
              </p>
            </motion.div>
          </div>

        </div>

        {/* Benefits — full-width horizontal strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`${b.bg} text-white rounded-2xl px-6 py-4 flex items-center gap-3 hover:scale-[1.08] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-default`}
              >
                <span className="text-3xl">{b.icon}</span>
                <div>
                  <p className="text-base font-black leading-tight">{b.title}</p>
                  <p className="text-xs text-white/70 leading-tight">{b.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Process;
