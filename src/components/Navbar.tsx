import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, navLinks, navCTA } from "@/content.js";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl">
      <div className="rounded-full bg-background/80 backdrop-blur-2xl border border-border/60 shadow-lg shadow-foreground/[0.03] px-6 py-2.5 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-black tracking-tight text-foreground">
          {brand.name}
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <Button className="rounded-full px-6 font-black shadow-sm h-9 text-xs uppercase tracking-wider" size="sm" asChild>
            <a href={navCTA.href}>{navCTA.label}</a>
          </Button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden mt-2 rounded-3xl bg-background/95 backdrop-blur-2xl border border-border shadow-2xl p-5 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
          <Button className="rounded-full w-full font-black shadow-sm" size="sm" asChild>
            <a href={navCTA.href}>{navCTA.label}</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
