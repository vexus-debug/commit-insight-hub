import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaLabel?: string;
  ctaLink?: string;
}

const PageHero = ({ title, subtitle, description, image, ctaLabel, ctaLink }: Props) => {
  const reduce = useReducedMotion();
  const fadeUp = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: 'easeOut' },
        };

  return (
    <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          initial={reduce ? {} : { scale: 1.08 }}
          animate={reduce ? {} : { scale: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      <div className="relative container mx-auto px-4">
        <motion.span
          className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider"
          {...fadeUp(0)}
        >
          {subtitle}
        </motion.span>
        <motion.h1
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight max-w-3xl"
          {...fadeUp(0.1)}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mb-6 leading-relaxed"
          {...fadeUp(0.2)}
        >
          {description}
        </motion.p>
        {ctaLabel && ctaLink && (
          <motion.div {...fadeUp(0.3)}>
            <Link to={ctaLink}>
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-7 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5">
                {ctaLabel}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
