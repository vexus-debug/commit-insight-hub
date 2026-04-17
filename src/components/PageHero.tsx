import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaLabel?: string;
  ctaLink?: string;
}

const PageHero = ({ title, subtitle, description, image, ctaLabel, ctaLink }: Props) => {
  return (
    <section className="relative min-h-[60vh] flex items-end pb-16">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      <div className="relative container mx-auto px-4">
        <span className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
          {subtitle}
        </span>
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight max-w-3xl">
          {title}
        </h1>
        <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mb-6 leading-relaxed">
          {description}
        </p>
        {ctaLabel && ctaLink && (
          <Link to={ctaLink}>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-7 py-3 text-sm font-semibold">
              {ctaLabel}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default PageHero;
