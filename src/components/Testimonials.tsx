import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonialsSection, testimonials as testimonialsData } from "@/content.js";

const testimonials = testimonialsData;

const Testimonials = () => {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-background">
      <div className="container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 scroll-reveal">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-coral/8 px-5 py-2 text-[10px] font-black text-coral mb-6 border border-coral/15 uppercase tracking-[0.2em]">
              {testimonialsSection.badge}
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.9]">
              Trusted by <br /> <span className="text-coral italic">real businesses.</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-sm font-medium">
            {testimonialsSection.body}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="anomaat-box p-10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="text-amber fill-amber" />
                  ))}
                </div>
                <p className="text-lg text-foreground leading-relaxed font-medium mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <div className={`w-11 h-11 rounded-2xl ${t.iconBg} flex items-center justify-center text-white text-xs font-black shadow-md`}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-black text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
