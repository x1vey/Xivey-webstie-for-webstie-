import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { faqSection, faqs as faqsData } from "@/content.js";

const faqs = faqsData;

const FAQ = () => {
  return (
    <section id="faq" className="py-32 md:py-48 bg-surface-alt">
      <div className="container max-w-4xl">
        <div className="mb-20 scroll-reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet/8 px-5 py-2 text-[10px] font-black text-violet mb-6 border border-violet/15 uppercase tracking-[0.2em]">
            {faqSection.badge}
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.9]">
            {faqSection.headline.split(" ")[0]} <span className="text-violet italic">{faqSection.headline.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground font-medium">{faqSection.body}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="anomaat-box px-8 data-[state=open]:border-primary/30 transition-colors !rounded-[24px]"
            >
              <AccordionTrigger className="text-left text-lg font-black text-foreground hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
