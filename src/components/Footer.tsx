import { brand, footerLinks } from "@/content.js";

const Footer = () => {
  return (
    <footer className="bg-surface-dark text-primary-foreground py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
      <div className="container relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-bold text-primary-foreground">{brand.name}</span>
            <p className="mt-3 text-primary-foreground/50 max-w-sm leading-relaxed">{brand.description}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground/70">Product</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/40">
              {footerLinks.product.map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-primary-foreground transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground/70">Company</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/40">
              {footerLinks.company.map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-primary-foreground transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-10">
          <p className="font-display text-[12vw] md:text-[10vw] font-extrabold leading-none text-primary-foreground/5 select-none tracking-tight">
            {brand.name}
          </p>
          <p className="mt-4 text-sm text-primary-foreground/30">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
