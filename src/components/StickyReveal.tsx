import { motion } from "framer-motion";
import { Shield, Zap, TrendingUp } from "lucide-react";
import { stickyReveal, stickyRevealFeatures } from "@/content.js";

const iconMap: Record<string, React.ElementType> = { Shield, Zap, TrendingUp };
const iconKeys = ["Shield", "Zap", "TrendingUp"];
const features = stickyRevealFeatures.map((f, i) => ({ ...f, icon: iconMap[iconKeys[i]] }));

const StickyReveal = () => {
  return (
    <section className="py-32 md:py-48 bg-background overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-16 md:items-start">
          {/* Left Column - Sticky */}
          <div className="md:w-1/2 md:sticky md:top-48">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-5 py-2 text-[10px] font-black text-primary mb-8 border border-primary/15 uppercase tracking-[0.2em]">
                {stickyReveal.badge}
              </span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-foreground mb-8">
                {stickyReveal.headline.split(" ").slice(0, -1).join(" ")} <br /> <span className="text-primary italic">{stickyReveal.headline.split(" ").slice(-1)[0]}</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-sm font-medium">
                {stickyReveal.body}
              </p>
            </motion.div>
          </div>

          {/* Right Column - Scrolling Cards */}
          <div className="md:w-1/2 space-y-8 pb-48">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="anomaat-box-dark p-12 md:p-16 flex flex-col justify-end min-h-[450px] group"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black tracking-tight text-background mb-6 leading-none">
                  {feature.title}
                </h3>
                <p className="text-lg text-background/60 leading-relaxed max-w-md group-hover:text-background/80 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyReveal;
