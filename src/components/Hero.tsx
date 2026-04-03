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
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade  = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] flex items-center overflow-hidden bg-[#080808] selection:bg-primary selection:text-white">

      {/* Background card strip — GPU composited */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ willChange: "transform" }}>
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
                    // Eagerly load first card in each half, lazy the rest
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding={i === 0 ? "sync" : "async"}
                    fetchPriority={i === 0 && half === 0 ? "high" : "low"}
                    className="w-full h-full object-cover"
                    onError={hideOnError}
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
        <div className="absolute top-[15%] left-[25%] w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px] opacity-50 mix-blend-screen pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
            <motion.div className="mix-blend-difference w-full" style={{ y: textY, opacity: fade }}>
              <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[10px] font-black text-white/70 mb-8 border border-white/20 uppercase tracking-[0.3em]">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {hero.badge}
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[9rem] font-black tracking-tighter leading-[0.85] text-white">
                {hero.headline[0]}<br />{hero.headline[1]}<br />
                <span className="italic underline decoration-white/30 underline-offset-[10px]">{hero.headline[2]}</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl max-w-md leading-relaxed text-white/55">
                {hero.subheadline}
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start mt-10 relative z-30">
              <Button size="lg" className="h-14 rounded-full px-10 text-base font-black bg-white text-black hover:bg-white/90 transition-all shadow-xl active:scale-[0.97]" asChild>
                <a href={hero.primaryCTA.href}>{hero.primaryCTA.label} <ArrowRight size={18} className="ml-2" /></a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 rounded-full px-8 text-base font-bold border-2 border-white bg-white text-black hover:bg-white/90 transition-all" asChild>
                <a href={hero.secondaryCTA.href}>{hero.secondaryCTA.label}</a>
              </Button>
            </div>
          </div>

          <motion.div
            className="lg:col-span-5 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 gap-3">
              {toasts.map((toast: { label: string; desc: string; accent: string; icon: React.ElementType }, i: number) => (
                <motion.div
                  key={toast.label}
                  animate={{ y: [0, i % 2 === 0 ? -5 : -8, 0] }}
                  transition={{ duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                  className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/[0.09] transition-colors duration-300"
                >
                  <div className={`w-9 h-9 rounded-xl ${toast.accent} flex items-center justify-center flex-shrink-0`}>
                    <toast.icon size={16} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-black text-white truncate">{toast.label}</p>
                    <p className="text-[11px] text-white/40 truncate">{toast.desc}</p>
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
