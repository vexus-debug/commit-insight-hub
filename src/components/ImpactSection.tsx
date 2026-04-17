import { CheckCircle } from "lucide-react";
import groupImg from "@/assets/bestojis-prosthetic-walking.jpg";
import { useSiteContent } from "@/contexts/SiteContentContext";

const ImpactSection = () => {
  const { content } = useSiteContent();
  const imp = content.impact;

  return (
    <section className="py-20" style={{ backgroundColor: 'hsl(var(--surface-dark))' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="rounded-2xl overflow-hidden relative">
            <img src={groupImg} alt="Bestojis Orthopaedic & Rehabilitation Foundation amputees regaining mobility with prosthetic limbs" className="w-full object-cover aspect-[4/3]" />
            <div className="absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur-sm rounded-xl p-4">
              <p className="text-primary-foreground text-xs font-medium">"{imp.quote}"</p>
              <p className="text-accent text-xs mt-1">— {imp.quoteAuthor}</p>
            </div>
          </div>
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">{imp.sectionLabel}</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mt-2 mb-4 leading-snug">
              {imp.title}
            </h2>
            <p className="text-primary-foreground/60 mb-8 leading-relaxed text-sm">{imp.description}</p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {imp.stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-secondary pl-4">
                  <div className="text-2xl font-bold text-secondary font-heading">{stat.value}</div>
                  <div className="text-primary-foreground/50 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <ul className="space-y-3">
              {imp.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-primary-foreground/70 text-sm">
                  <CheckCircle className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
