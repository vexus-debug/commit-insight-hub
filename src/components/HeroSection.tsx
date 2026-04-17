import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/bestojis-prosthetic-walking.jpg";
import { ChevronRight, Heart, Users, Globe, HandHeart } from "lucide-react";
import { useSiteContent } from "@/contexts/SiteContentContext";

const iconMap: Record<string, any> = { Users, Globe, Heart, HandHeart };

const HeroSection = () => {
  const { content } = useSiteContent();
  const h = content.hero;

  return (
    <section className="relative min-h-[100vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={h.image || heroImage}
          alt={`${content.siteName} medical outreach`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="h-4 w-4 text-accent fill-accent" />
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
              {h.badge}
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-[1.1]">
            {h.titleLine1}
            <br />
            <span className="text-accent">{h.titleLine2}</span>
          </h1>

          <p className="text-primary-foreground/75 text-base md:text-lg max-w-md mb-10 leading-relaxed font-body">
            {h.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <Link to="/donate">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3.5 text-sm font-bold shadow-lg shadow-primary/30 ring-1 ring-primary-foreground/10">
                <HandHeart className="mr-2 h-4 w-4" />
                Donate Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full px-8 py-3.5 text-sm font-semibold backdrop-blur-sm">
                Our Mission
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {h.stats.map((stat, i) => {
              const defaultIcons = [Users, Globe, Heart, HandHeart];
              const Icon = defaultIcons[i] || Heart;
              return (
                <div key={stat.label} className="text-center bg-primary-foreground/5 backdrop-blur-md rounded-xl px-3 py-4 border border-primary-foreground/10">
                  <Icon className="h-4 w-4 text-accent mx-auto mb-1.5" />
                  <div className="text-lg font-bold text-primary-foreground font-heading">{stat.value}</div>
                  <div className="text-primary-foreground/50 text-[10px] mt-0.5 uppercase tracking-wider">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
