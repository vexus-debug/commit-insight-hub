import TopBar from "@/components/TopBar";
import { PageTransition } from "@/components/motion/Motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Phone, Mail } from "lucide-react";

const FAQPage = () => {
  const { content } = useSiteContent();
  const f = content.faq;

  return (
    <PageTransition><div className="min-h-screen">
      <TopBar />
      <Navbar />

      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">{f.sectionLabel}</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-section-alt-foreground mt-2 mb-4">{f.title}</h1>
          <p className="text-section-alt-foreground/70 max-w-2xl mx-auto">{f.description}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {f.items.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-2xl border border-border px-6 shadow-sm">
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pl-8 pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 bg-card rounded-2xl border border-border p-8 text-center">
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">{f.supportTitle}</h2>
            <p className="text-muted-foreground text-sm mb-6">{f.supportDescription}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${f.supportPhone}`} className="flex items-center gap-2 text-primary font-medium text-sm hover:underline">
                <Phone className="h-4 w-4" />
                {f.supportPhone}
              </a>
              <a href={`mailto:${f.supportEmail}`} className="flex items-center gap-2 text-primary font-medium text-sm hover:underline">
                <Mail className="h-4 w-4" />
                {f.supportEmail}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </PageTransition>);
};

export default FAQPage;
