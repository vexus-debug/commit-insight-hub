import TopBar from "@/components/TopBar";
import { PageTransition } from "@/components/motion/Motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart, Eye, ShieldCheck, Apple, Shirt, BookOpen,
  MapPin, Users, ArrowRight, CheckCircle, Stethoscope,
} from "lucide-react";
import { useSiteContent } from "@/contexts/SiteContentContext";
import medicalImg from "@/assets/bestojis-prosthetic-walking.jpg";

const iconMap: Record<string, any> = {
  Heart, Eye, ShieldCheck, Apple, Shirt, BookOpen, Stethoscope, Users, MapPin,
};

const Programs = () => {
  const { content } = useSiteContent();
  const p = content.programs;

  return (
    <PageTransition><div className="min-h-screen overflow-x-hidden">
      <TopBar />
      <Navbar />

      <PageHero
        title={p.heroTitle}
        subtitle={p.heroSubtitle}
        description={p.heroDescription}
        image={medicalImg}
        ctaLabel="Get Involved"
        ctaLink="/get-involved"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">{p.overviewLabel}</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">{p.overviewTitle}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.overviewDescription}</p>
            </div>
          </ScrollReveal>

          <div className="space-y-24">
            {p.items.map((program, i) => {
              const IconComp = iconMap[program.icon] || Heart;
              return (
                <ScrollReveal key={program.title || i}>
                  <div className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                    <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                      <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                        <img
                          src={program.image || medicalImg}
                          alt={program.title}
                          className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                          {program.stats.map((s) => (
                            <div key={s.label} className="bg-card/90 backdrop-blur-sm rounded-xl px-4 py-2">
                              <div className="text-lg font-bold text-primary font-heading">{s.value}</div>
                              <div className="text-muted-foreground text-xs">{s.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                          <IconComp className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">{program.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{program.description}</p>
                      <div className="space-y-3 mb-6">
                        {program.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-foreground text-sm">{h}</span>
                          </div>
                        ))}
                      </div>
                      <Link to="/donate">
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 text-sm">
                          Support This Program
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Areas of Impact</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mt-2">Where We Serve</h2>
              <p className="text-primary-foreground/60 mt-3 max-w-lg mx-auto text-sm">Our monthly outreaches span across multiple states in Nigeria, reaching communities that need it most.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {p.locations.map((loc, i) => (
              <ScrollReveal key={loc.state} delay={i * 80}>
                <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:border-secondary/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <h3 className="font-heading text-base font-semibold text-primary-foreground">{loc.state}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {loc.areas.map((area) => (
                      <span key={area} className="bg-primary-foreground/10 text-primary-foreground/70 text-xs px-3 py-1 rounded-full">{area}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Process</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">How Your Donation Creates Impact</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {p.processSteps.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div className="text-center relative">
                  <div className="text-5xl font-heading font-bold text-secondary/20 mb-3">{item.step}</div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground mb-2">{p.ctaTitle}</h2>
                <p className="text-secondary-foreground/70 text-sm">{p.ctaDescription}</p>
              </div>
              <Link to="/donate">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-sm font-semibold">
                  Donate Now
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  </PageTransition>);
};

export default Programs;
