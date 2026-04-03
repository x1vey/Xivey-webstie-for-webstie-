import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { exampleSites } from "@/examples.js";
import { useRef, useState, useEffect } from "react";

const previewSites = exampleSites.slice(0, 6);

// Only renders the iframe once the card enters the viewport
const LazyIframe = ({ url, title }: { url: string; title: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setLoaded(true); observer.disconnect(); } },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none bg-[#111]">
      {loaded && (
        <iframe
          src={url}
          title={title}
          className="border-0"
          style={{ width: "200%", height: "200%", transform: "scale(0.5)", transformOrigin: "top left", pointerEvents: "none" }}
          scrolling="no"
        />
      )}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-white/60 animate-spin" />
        </div>
      )}
    </div>
  );
};

const ExamplesShowcase = () => {
  return (
    <section className="py-24 md:py-32 bg-surface-alt overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-foreground">
            Websites we've built.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real sites for real service businesses — designed, built, and maintained by SiteCraft.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {previewSites.map((site, i) => (
            <motion.a
              key={site.title}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
              className={`group relative block rounded-xl overflow-hidden border border-border bg-card ${
                i === 0 || i === 3 ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <LazyIframe url={site.url} title={site.title} />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Label on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex items-end justify-between translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div>
                  <span className="text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider">{site.category}</span>
                  <h3 className="text-lg md:text-xl font-bold text-primary-foreground mt-1">{site.title}</h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center">
                  <ExternalLink size={16} className="text-primary-foreground" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="rounded-md px-8 text-base gap-2 active:scale-[0.98] transition-transform font-medium border-border hover:bg-muted" asChild>
            <Link to="/examples">See More Examples <ArrowRight size={18} /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExamplesShowcase;
