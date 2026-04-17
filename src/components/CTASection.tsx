import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { Reveal } from "@/components/motion/Motion";

const CTASection = () => {
  const { content } = useSiteContent();
  const c = content.cta;

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <Reveal direction="up" className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              {c.title}
            </h2>
            <p className="text-primary-foreground/70 text-sm">
              {c.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${c.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 bg-accent text-accent-foreground rounded-full px-6 py-3 font-medium hover:bg-accent/90 transition-all duration-300 text-sm hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              {c.phone}
            </a>
            <Link to="/contact">
              <Button variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary px-6 text-sm transition-transform duration-300 hover:-translate-y-0.5">
                Contact Us
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
