import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Zap, Clock, Shield, Palette, BarChart3 } from "lucide-react";
import { useRef } from "react";
import { hero, heroToasts, heroCards } from "@/content.js";

const iconMap: Record<string, React.ElementType> = { Search, Zap, Clock, Shield, Palette, BarChart3 };
const iconKeys = ["Search", "Zap", "Clock", "Shield", "Palette", "BarChart3"];
const toasts = heroToasts.map((t: { label: string; desc: string; accent: string }, i: number) => ({
  ...t,
  icon: iconMap[iconKeys[i]],
}));
const cards = heroCards;

const hideOnError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const card = e.currentTarget.parentElement;
  if (card) card.style.display = "none";
};

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const fade    = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const stripY  = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] flex items-center overflow-hidden bg-[#080808]">

      {/* Scrolling card strip — parallax layer */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        style={{ y: stripY, willChange: "transform" }}
      >
        <motion.div
          className="absolute top-0 left-0 w-[200vw] h-full flex"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
        >
          {[0, 1].map((half) => (
            <div key={half} className="relative w-[100vw] h-full flex-shrink-0">
              {cards.map((card: { image: string; title: string; top: string; left: string; width: string; rotate: string }, i: number) => (
                <div
                  key={`${half}-${i}`}
                  className="absolute rounded-[20px] overflow-hidden border border-white/10"
                  style={{ top: card.top, left: card.left, width: card.width, transform: `rotate(${card.rotate})`, aspectRatio: "16/10" }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding={i === 0 ? "sync" : "async"}
                    className="w-full h-full object-cover opacity-40"
                    onError={hideOnError}
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Gradient overlay — ensures text is always readable */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 80% at 30% 50%, rgba(8,8,8,0.85) 40%, rgba(8,8,8,0.4) 100%)" }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
            <motion.div className="w-full" style={{ y: textY, opacity: fade }}>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[10px] font-black text-white/60 mb-8 border border-white/15 uppercase tracking-[0.3em]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {hero.badge}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.88] text-white mb-6"
              >
                {hero.headline[0]}<br />
                {hero.headline[1]}<br />
                <span className="text-primary italic">{hero.headline[2]}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-lg md:text-xl max-w-lg leading-relaxed text-white/65 mb-10"
              >
                {hero.subheadline}
              </motion.p>

            </motion.div>

            {/* Buttons outside fade wrapper — always visible */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4 w-full relative z-30"
            >
              <Button size="lg" className="h-14 rounded-full px-10 text-base font-black bg-white text-black hover:bg-white/90 transition-all shadow-xl active:scale-[0.97]" asChild>
                <a href={hero.primaryCTA.href}>{hero.primaryCTA.label} <ArrowRight size={18} className="ml-2" /></a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 rounded-full px-8 text-base font-bold border-2 border-white/30 text-white hover:bg-white/10 transition-all" asChild>
                <a href={hero.secondaryCTA.href}>Build My Website</a>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-4 text-xs text-white/35 font-medium tracking-wide"
            >
              {hero.trustLine}
            </motion.p>
          </div>

          {/* Right — toast cards */}
          <motion.div
            className="lg:col-span-5 relative z-10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-3">
              {toasts.map((toast: { label: string; desc: string; accent: string; icon: React.ElementType }, i: number) => (
                <motion.div
                  key={toast.label}
                  animate={{ y: [0, i % 2 === 0 ? -5 : -8, 0] }}
                  transition={{ duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                  className="bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/[0.11] transition-colors duration-300"
                >
                  <div className={`w-9 h-9 rounded-xl ${toast.accent} flex items-center justify-center flex-shrink-0`}>
                    <toast.icon size={16} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-black text-white truncate">{toast.label}</p>
                    <p className="text-[11px] text-white/45 truncate">{toast.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
