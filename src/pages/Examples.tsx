import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { exampleSites } from "@/examples.js";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef, useState, useEffect } from "react";

const heightClasses = [
  "row-span-2", "row-span-1", "row-span-1",
  "row-span-2", "row-span-1", "row-span-1",
  "row-span-1", "row-span-2", "row-span-1",
  "row-span-1", "row-span-2", "row-span-1",
];

const LazyIframe = ({ url, title }: { url: string; title: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setLoaded(true); observer.disconnect(); } },
      { rootMargin: "300px" }
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

const Examples = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="container">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 mb-8 text-muted-foreground"
            asChild
          >
            <Link to="/">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </Button>

          <div className="max-w-2xl mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.04em] leading-[1.1] text-foreground">
              Our work speaks
              <br />
              <span className="text-primary">for itself.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Browse websites we've designed and built for service businesses across every industry. Each one is fully hosted, maintained, and optimized by SiteCraft.
            </p>
          </div>
        </div>
      </section>

      {/* Masonry-style grid */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px] gap-4">
            {exampleSites.map((site, i) => (
              <motion.a
                key={site.title}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: (i % 6) * 0.06,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className={`group relative block rounded-xl overflow-hidden border border-border bg-card cursor-pointer ${
                  heightClasses[i % heightClasses.length]
                }`}
              >
              <LazyIframe url={site.url} title={site.title} />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div>
                    <span className="inline-block text-[11px] font-bold text-primary-foreground/60 uppercase tracking-widest mb-1">
                      {site.category}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-primary-foreground leading-tight">
                      {site.title}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink size={16} className="text-primary-foreground" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Examples;
