import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Search, Server, Wrench, BarChart3, FileText, Shield, Zap } from "lucide-react";
import { featuresSection, featureCategories, features as featuresData } from "@/content.js";

const iconMap: Record<string, React.ElementType> = { Globe, Search, Server, Wrench, BarChart3, FileText, Shield, Zap };

const features = featuresData.map((f) => ({
  ...f,
  icon: iconMap[f.title === "Your Own Domain" ? "Globe" : f.title === "Basic SEO Setup" ? "Search" : f.title === "Reliable Hosting" ? "Server" : f.title === "Analytics Dashboard" ? "BarChart3" : f.title === "SSL & Security" ? "Shield" : "Zap"],
}));

const Features = () => {
  const [activeTab, setActiveTab] = useState("core");

  return (
    <section id="features" className="py-24 md:py-48 relative overflow-hidden bg-background">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6">
              {featuresSection.headline.split(" ").slice(0, 2).join(" ")} <br /> <span className="text-accent underline decoration-accent/20">{featuresSection.headline.split(" ").slice(2).join(" ")}</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {featuresSection.subheadline}
            </p>
          </motion.div>

          {/* Squarespace Pill Selector Segment */}
          <div className="flex flex-wrap gap-2">
            {featureCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeTab === cat.id
                    ? "bg-foreground text-background border-foreground shadow-xl scale-105"
                    : "bg-background text-foreground border-border hover:border-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {features
              .filter((f) => f.category === activeTab)
              .map((f) => (
                <motion.div
                  key={f.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="bg-white border-2 border-border p-10 rounded-2xl hover:border-foreground transition-colors group h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 flex items-center justify-center mb-8">
                      <f.icon size={32} className={f.iconColor} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {f.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">Included</span>
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
