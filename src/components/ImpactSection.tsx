import { CheckCircle } from "lucide-react";
import groupImg from "@/assets/bestojis-prosthetic-walking.jpg";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { Reveal, Stagger, Item } from "@/components/motion/Motion";

const ImpactSection = () => {
  const { content } = useSiteContent();
  const imp = content.impact;

  return (
    <section className="py-20" style={{ backgroundColor: 'hsl(var(--surface-dark))' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal direction="right" className="rounded-2xl overflow-hidden relative">
            <img src={groupImg} alt="Bestojis Orthopaedic & Rehabilitation Foundation amputees regaining mobility with prosthetic limbs" className="w-full object-cover aspect-[4/3] transition-transform duration-700 hover:scale-105" />
            <div className="absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur-sm rounded-xl p-4">
              <p className="text-primary-foreground text-xs font-medium">"{imp.quote}"</p>
              <p className="text-accent text-xs mt-1">— {imp.quoteAuthor}</p>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">{imp.sectionLabel}</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mt-2 mb-4 leading-snug">
              {imp.title}
            </h2>
            <p className="text-primary-foreground/60 mb-8 leading-relaxed text-sm">{imp.description}</p>

            <Stagger className="grid grid-cols-2 gap-6 mb-8" stagger={0.1}>
              {imp.stats.map((stat) => (
                <Item key={stat.label} className="border-l-2 border-secondary pl-4">
                  <div className="text-2xl font-bold text-secondary font-heading">{stat.value}</div>
                  <div className="text-primary-foreground/50 text-xs mt-1">{stat.label}</div>
                </Item>
              ))}
            </Stagger>

            <Stagger className="space-y-3" stagger={0.06}>
              {imp.highlights.map((item) => (
                <Item key={item} className="flex items-start gap-2 text-primary-foreground/70 text-sm">
                  <CheckCircle className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  {item}
                </Item>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
