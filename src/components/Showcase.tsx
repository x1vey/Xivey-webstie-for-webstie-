import { motion } from "framer-motion";
import { GraduationCap, Brain, Wrench, Scale, Stethoscope, Briefcase } from "lucide-react";
import { showcaseSection, industries as industriesData, brand } from "@/content.js";

const iconMap: Record<string, React.ElementType> = { GraduationCap, Brain, Wrench, Scale, Stethoscope, Briefcase };
const iconKeys = ["GraduationCap", "Brain", "Wrench", "Scale", "Stethoscope", "Briefcase"];
const industries = industriesData.map((ind, i) => ({ ...ind, icon: iconMap[iconKeys[i]], textColor: ind.color.replace("bg-", "text-") }));

const Showcase = () => {
  return (
    <section className="py-24 md:py-48 relative overflow-hidden bg-background">
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-md bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-6 border border-primary/20 uppercase tracking-widest">
              {showcaseSection.badge}
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8">
              Made with <br /> <span className="text-primary">{brand.name}.</span>
            </h2>
          </motion.div>
        </div>

        {/* Squarespace-style 3D Grid Wall */}
        <div className="relative h-[800px] md:h-[1000px] perspective-[2000px]">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-12 origin-center"
            style={{
              rotateX: 15,
              rotateY: -10,
              rotateZ: 5,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {industries.map((industry, i) => (
              <motion.div
                key={industry.id}
                whileHover={{ 
                  scale: 1.05, 
                  translateY: -20,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0 40px 80px -20px rgba(0,0,0,0.15)"
                }}
                className={`group relative bg-white border border-border p-10 rounded-2xl shadow-xl transition-all duration-500 flex flex-col justify-between h-[450px] ${
                  i % 2 === 0 ? "mt-0" : "mt-24"
                }`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-xl ${industry.color} flex items-center justify-center mb-8 shadow-lg shadow-black/5`}>
                    <industry.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4 leading-none">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {industry.description}
                  </p>
                </div>
                
                <div className="pt-8 border-t border-border/50">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Explore Template</span>
                </div>

                {/* Subtle Layered UI Elements (Squarespace vibe) */}
                <div className="absolute -top-4 -right-4 w-24 h-10 bg-black text-white text-[10px] font-bold flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl">
                   LIVE SITE
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Grain Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
