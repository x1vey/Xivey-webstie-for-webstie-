import { motion } from "framer-motion";
import { marqueeLogos } from "@/content.js";

const trustLogos = marqueeLogos;

const Marquee = () => {
  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="container px-0 relative">
        <div className="flex select-none">
          <motion.div 
            className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...trustLogos, ...trustLogos].map((logo, i) => (
              <span 
                key={i} 
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground/[0.04] hover:text-primary/30 transition-colors duration-500 cursor-default uppercase italic"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Fade overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
};

export default Marquee;
