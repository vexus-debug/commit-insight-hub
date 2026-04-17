import { Heart, Eye, ShieldCheck, Users, BookOpen, Apple } from "lucide-react";
import outreachImage from "@/assets/bestojis-prosthetic-limb.jpg";
import officeImage from "@/assets/bestojis-npoots.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { Reveal, Stagger, Item } from "@/components/motion/Motion";

const iconMap: Record<string, any> = { Heart, Eye, ShieldCheck, Users, BookOpen, Apple };

const MissionSection = () => {
  const { content } = useSiteContent();
  const m = content.mission;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <Reveal direction="up">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">{m.sectionLabel}</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6 leading-snug">
              {m.title}
            </h2>
            {m.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground mb-4 leading-relaxed text-sm">{p}</p>
            ))}
            <ul className="space-y-3 mb-8">
              {m.bulletPoints.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground text-sm">
                  <span className="w-2 h-2 bg-accent rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 text-sm transition-transform duration-300 hover:-translate-y-0.5">
                Learn More About Us
              </Button>
            </Link>
          </Reveal>
          <Reveal direction="left" delay={0.15} className="grid grid-cols-2 gap-4">
            <img src={outreachImage} alt="Community engagement" className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4] transition-transform duration-500 hover:scale-[1.02]" />
            <img src={officeImage} alt="Partnership meeting" className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4] mt-8 transition-transform duration-500 hover:scale-[1.02]" />
          </Reveal>
        </div>

        <div className="bg-section-alt rounded-3xl p-8 md:p-14">
          <Reveal direction="up" className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">{m.valuesLabel}</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-section-alt-foreground mt-2">
              {m.valuesTitle}
            </h2>
            <p className="text-section-alt-foreground/60 mt-3 max-w-xl mx-auto text-sm">
              {m.valuesSubtitle}
            </p>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {m.values.map((value) => {
              const Icon = iconMap[value.icon] || Heart;
              return (
                <Item key={value.title} className="bg-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="w-11 h-11 bg-accent/15 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </Item>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
