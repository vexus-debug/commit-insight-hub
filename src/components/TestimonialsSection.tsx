import { Star } from "lucide-react";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { Reveal, Stagger, Item } from "@/components/motion/Motion";

const TestimonialsSection = () => {
  const { content } = useSiteContent();
  const t = content.testimonials;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Reveal direction="up" className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t.sectionLabel}</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
            {t.title}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
            {t.subtitle}
          </p>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-6" stagger={0.1}>
          {t.items.map((item) => (
            <Item key={item.name} className="bg-card rounded-2xl p-6 shadow-sm border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{item.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">
                    {item.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.role}</div>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default TestimonialsSection;
