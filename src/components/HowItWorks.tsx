import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { howItWorks, howItWorksBenefits, howItWorksSteps, howItWorksSocialProof } from "@/content.js";

const benefits = howItWorksBenefits;
const steps = howItWorksSteps;

const HowItWorks = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="how-it-works" ref={ref} className="relative overflow-hidden bg-[#080808]">

      {/* Blend from Hero */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#080808] pointer-events-none z-20" />

      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        <div className="absolute top-0 right-[10%] w-[700px] h-[700px] rounded-full bg-primary/10 blur-[160px]" />
      </motion.div>

      <div className="container relative z-10 py-32 md:py-48">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[10px] font-black text-white/50 border border-white/10 uppercase tracking-[0.3em]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            How It Works
          </div>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — headline + price + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.88] mb-8">
              {howItWorks.headline}<br />
              <span className="text-white/25">{howItWorks.subheadline}</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-md">{howItWorks.body}</p>

            {/* Price callout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-baseline gap-3 bg-white/[0.04] border border-white/10 rounded-2xl px-8 py-5 mb-8"
            >
              <span className="text-white/40 text-lg font-bold line-through">{howItWorks.price.original}</span>
              <span className="text-5xl font-black text-white tracking-tighter">{howItWorks.price.current}</span>
              <span className="text-white/40 text-base">{howItWorks.price.period}</span>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="h-14 rounded-full px-10 text-base font-black bg-white text-black hover:bg-white/90 transition-all shadow-xl active:scale-[0.97]"
                asChild
              >
                <a href={howItWorks.cta.href}>{howItWorks.cta.label} <ArrowRight size={18} className="ml-2" /></a>
              </Button>
            </div>

            {/* Benefits list */}
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex items-center gap-3 text-white/70 text-base"
                >
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-primary" strokeWidth={3} />
                  </span>
                  {b}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — steps */}
          <div className="space-y-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 rounded-3xl p-8 transition-all duration-500 overflow-hidden"
              >
                {/* Big faded number */}
                <span className="absolute right-6 top-4 text-[7rem] font-black leading-none text-white/[0.04] group-hover:text-white/[0.07] transition-colors duration-500 select-none pointer-events-none">
                  {s.step}
                </span>

                <h3 className="text-2xl font-black text-white tracking-tight mb-3 relative z-10">
                  {s.title}
                </h3>
                <p className="text-white/40 text-base leading-relaxed max-w-sm relative z-10">
                  {s.body}
                </p>
              </motion.div>
            ))}

            {/* Social proof nudge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 pt-2 pl-2"
            >
              <div className="flex -space-x-2">
                {howItWorksSocialProof.avatarColors.map((c, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-[#080808]`} />
                ))}
              </div>
              <p className="text-white/30 text-sm">
                <span className="text-white/60 font-bold">{howItWorksSocialProof.count} {howItWorksSocialProof.label}</span>
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
              <Button size="lg" className="w-full h-16 rounded-full bg-white text-black font-black text-base hover:bg-white/90 transition-all shadow-xl active:scale-[0.97]" asChild>
                <a href="#pricing">Build My Website — $19/m <ArrowRight size={18} className="ml-2" /></a>
              </Button>
              <p className="text-center text-white/30 text-xs mt-3 font-medium">Cancel anytime · No strings attached</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
