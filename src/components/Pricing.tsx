import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";
import { pricingSection, pricingIncluded, pricingPlans } from "@/content.js";

const included = pricingIncluded;

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

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

          {/* Toggle */}
          <div className="flex items-center gap-4 bg-surface-alt p-1.5 rounded-full border border-border">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
                billingCycle === "monthly" ? "bg-foreground text-background shadow-lg" : "text-foreground/40 hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
                billingCycle === "annual" ? "bg-foreground text-background shadow-lg" : "text-foreground/40 hover:text-foreground"
              }`}
            >
              Annual (Save 15%)
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {/* Monthly/Main Plan */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 border-r border-b border-border flex flex-col justify-between group"
          >
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">{pricingPlans[0].badge}</p>
              <h3 className="text-4xl font-black text-foreground mb-4">{pricingPlans[0].name}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-7xl font-black tracking-tighter text-foreground">
                  {billingCycle === "monthly" ? pricingPlans[0].monthlyPrice : pricingPlans[0].annualPrice}
                </span>
                <span className="text-xl font-bold text-muted-foreground">{pricingPlans[0].period}</span>
              </div>
              <ul className="space-y-4 mb-12">
                {included.slice(0, 8).map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-bold text-foreground/70 group-hover:text-foreground transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Button size="lg" className="w-full h-16 rounded-full bg-foreground text-background hover:scale-[1.02] transition-transform font-black text-lg">
              {pricingPlans[0].cta}
            </Button>
          </motion.div>

          {/* Featured Plan */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 border-r border-b border-border flex flex-col justify-between bg-foreground text-background group z-20 relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-[10px] font-black tracking-[0.2em] uppercase">
              Most Popular
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">{pricingPlans[1].badge}</p>
              <h3 className="text-4xl font-black text-background mb-4">{pricingPlans[1].name}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-7xl font-black tracking-tighter text-background">
                  {billingCycle === "monthly" ? pricingPlans[1].monthlyPrice : pricingPlans[1].annualPrice}
                </span>
                <span className="text-xl font-bold text-background/60">{pricingPlans[1].period}</span>
              </div>
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
              {pricingPlans[1].cta}
            </Button>
          </motion.div>

          {/* Custom Plan */}
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
