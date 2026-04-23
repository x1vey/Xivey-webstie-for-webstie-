import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { pricingSection, pricingIncluded, pricingPlans } from "@/content.js";

const included = pricingIncluded;

const Pricing = () => {

  return (
    <section id="pricing" className="py-24 md:py-48 relative overflow-hidden bg-background">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-6">
              {pricingSection.headline.split(".")[0]}. <br /> <span className="text-primary italic">{pricingSection.headline.split(".")[1].trim()}</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {pricingSection.subheadline}
            </p>
          </motion.div>

          {/* Toggle removed — single plan */}
        </div>

        <div className="grid md:grid-cols-2 border-t border-l border-border max-w-4xl mx-auto">
          {/* Featured Plan — $49 crossed out, $19/month for life */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 border-r border-b border-border flex flex-col justify-between bg-foreground text-background group z-20 relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-[10px] font-black tracking-[0.2em] uppercase">
              Limited Offer
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">{pricingPlans[1].badge}</p>
              <h3 className="text-4xl font-black text-background mb-4">{pricingPlans[1].name}</h3>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-black text-background/40 line-through">$49</span>
                <span className="text-7xl font-black tracking-tighter text-background">$19</span>
                <span className="text-xl font-bold text-background/60">/mo</span>
              </div>
              <p className="text-sm font-bold text-primary mb-8">For life — locked in forever</p>
              <ul className="space-y-4 mb-12">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-bold text-background/70">
                    <Check size={16} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Button size="lg" className="w-full h-16 rounded-full bg-primary text-primary-foreground hover:scale-[1.02] transition-transform font-black text-lg">
              Build My Website
            </Button>
            <p className="text-center text-background/40 text-xs mt-3">Cancel anytime · No strings attached</p>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 border-r border-b border-border flex flex-col justify-between group"
          >
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-8">{pricingPlans[2].badge}</p>
              <h3 className="text-4xl font-black text-foreground mb-4">{pricingPlans[2].name}</h3>
              <p className="text-xl text-muted-foreground mb-8">{pricingPlans[2].description}</p>
              <div className="text-5xl font-black tracking-tighter text-foreground mb-12">{pricingPlans[2].price}</div>
              <p className="text-sm font-bold text-muted-foreground leading-relaxed">{pricingPlans[2].body}</p>
            </div>
            <Button variant="outline" size="lg" className="w-full h-16 rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-all font-black text-lg">
              {pricingPlans[2].cta}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
