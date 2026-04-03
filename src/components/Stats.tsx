import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { stats } from "@/content.js";

function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2 }: { value: number; suffix?: string; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, (duration * 1000) / steps);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const display = Number.isInteger(value) ? Math.floor(count) : count.toFixed(1);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

const Stats = () => {
  return (
    <section className="relative py-24 md:py-48 overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }} />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="p-12 md:p-16 border-r border-b border-border hover:bg-surface-alt transition-colors duration-500 group"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className={`w-2 h-2 rounded-full ${stat.color.replace('text-', 'bg-')} mb-8 group-hover:scale-150 transition-transform`} />
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                    {stat.label}
                  </p>
                </div>
                <p className={`text-5xl md:text-7xl font-black tracking-tighter ${stat.color}`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
