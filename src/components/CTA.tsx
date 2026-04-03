import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cta } from "@/content.js";

const CTA = () => {
  return (
    <section className="py-48 md:py-72 relative overflow-hidden bg-foreground">
      {/* Immersive background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="text-6xl md:text-[9rem] font-black tracking-tighter text-background leading-[0.85] mb-12 uppercase italic">
              {cta.headline.split(" ").slice(0, 2).join(" ")} <br /> <span className="text-primary not-italic">{cta.headline.split(" ").slice(2).join(" ")}</span>
            </h2>
            <p className="text-2xl md:text-4xl text-background/60 font-medium mb-16 tracking-tight max-w-2xl mx-auto leading-tight">
              {cta.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="h-20 px-12 rounded-full text-xl bg-primary text-primary-foreground hover:scale-105 active:scale-95 transition-all font-black uppercase tracking-widest" asChild>
                <a href={cta.primaryCTA.href}>{cta.primaryCTA.label} <ArrowRight size={24} className="ml-2" /></a>
              </Button>
              <Button size="lg" variant="outline" className="h-20 px-12 rounded-full text-xl border-2 border-background/20 text-background hover:bg-background hover:text-foreground transition-all font-black uppercase tracking-widest" asChild>
                <a href={cta.secondaryCTA.href}>{cta.secondaryCTA.label}</a>
              </Button>
            </div>
            <div className="mt-20 pt-20 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-8 opacity-40">
              {cta.footnotes.map((note) => (
                <p key={note} className="text-sm font-bold uppercase tracking-widest text-background leading-none italic">{note}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
