import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import meetingImg from "@/assets/bestojis-conference-team.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/contexts/SiteContentContext";

const FAQSection = () => {
  const { content } = useSiteContent();
  const f = content.faq;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">{f.sectionLabel}</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4 leading-snug">
              {f.title}
            </h2>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              {f.description}
            </p>
            <Accordion type="single" collapsible className="w-full">
              {f.items.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-medium text-foreground text-sm hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-6">
              <Link to="/contact">
                <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm">
                  Have More Questions? Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-4 sticky top-24">
            <img src={meetingImg} alt="Team meeting and planning" className="w-full object-cover rounded-2xl aspect-[4/3]" />
            <div className="bg-section-alt rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold text-section-alt-foreground mb-2">{f.supportTitle}</h3>
              <p className="text-section-alt-foreground/70 text-sm mb-3">
                {f.supportDescription} <span className="font-semibold text-accent">{f.supportPhone}</span> or email us for immediate assistance.
              </p>
              <a href={`mailto:${f.supportEmail}`} className="text-accent text-sm font-medium hover:underline">
                {f.supportEmail} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
