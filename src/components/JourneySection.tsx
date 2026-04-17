import { useEffect, useRef, useState } from "react";
import { Footprints, Stethoscope, Accessibility, Users2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import prostheticImg from "@/assets/bestojis-prosthetic-walking.jpg";
import conferenceImg from "@/assets/bestojis-conference-team.jpg";
import clubfootImg from "@/assets/bestojis-clubfoot-1.jpg";
import teamImg from "@/assets/bestojis-team.jpg";

const steps = [
  {
    icon: Footprints,
    label: "Clubfoot Care",
    title: "Free Clubfoot Treatment for Every Child",
    description:
      "Many Nigerian children are born with clubfoot but never receive treatment due to cost or distance. Through the Ponseti method, we provide free corrective care so every child can take their first steps with confidence.",
    image: clubfootImg,
    stat: "100%",
    statLabel: "free treatment for children with clubfoot",
    accent: "accent" as const,
  },
  {
    icon: Accessibility,
    label: "Prosthetic Limbs",
    title: "Restoring Mobility, Restoring Dignity",
    description:
      "For amputees who once relied on others for everything, a prosthetic limb is a return to independence. We fit and fund custom prostheses so people can walk, work, and provide for their families again.",
    image: prostheticImg,
    stat: "Custom",
    statLabel: "fitted prostheses funded for those in need",
    accent: "accent" as const,
  },
  {
    icon: Stethoscope,
    label: "Medical Outreach",
    title: "Bringing Healthcare to the Underserved",
    description:
      "Our volunteer medical teams travel to communities across Nigeria delivering free consultations, screenings, medications, and follow-up care — meeting people exactly where they are.",
    image: teamImg,
    stat: "Multiple",
    statLabel: "outreaches delivered across Nigerian communities",
    accent: "accent" as const,
  },
  {
    icon: Users2,
    label: "Advocacy & Conferences",
    title: "Raising Voices, Changing Systems",
    description:
      "Through annual conferences, awareness walks, and partnerships, we champion the rights of people living with physical disabilities and push for a more inclusive Nigeria.",
    image: conferenceImg,
    stat: "Annual",
    statLabel: "conferences uniting families, professionals & advocates",
    accent: "accent" as const,
  },
];

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.25) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

const StepCard = ({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, 0.15);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Timeline connector */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border" />

      {/* Timeline dot */}
      <div
        className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-12 w-10 h-10 rounded-full items-center justify-center z-10 transition-all duration-700 ring-4 ${
          visible
            ? "bg-primary scale-100 ring-accent/30"
            : "bg-muted scale-75 ring-transparent"
        }`}
      >
        <step.icon
          className={`h-5 w-5 transition-colors duration-700 ${
            visible ? "text-primary-foreground" : "text-muted-foreground"
          }`}
        />
      </div>

      <div
        className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Text side */}
        <div className={`${isEven ? "md:pr-16" : "md:order-2 md:pl-16"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-3 text-accent">
            <step.icon className="h-4 w-4 md:hidden" />
            {step.label}
          </span>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4 leading-snug">
            {step.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {step.description}
          </p>
          <div className="inline-flex items-baseline gap-2 rounded-xl px-5 py-3 bg-accent/10">
            <span className="text-2xl font-bold font-heading text-accent">
              {step.stat}
            </span>
            <span className="text-muted-foreground text-xs">
              {step.statLabel}
            </span>
          </div>
        </div>

        {/* Image side */}
        <div className={`${isEven ? "" : "md:order-1"}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={step.image}
              alt={step.title}
              className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

const JourneySection = () => {
  return (
    <section className="journey-section py-24 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            The Journey
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
            From Compassion to Transformation
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Every act of care is a step in a larger story. Follow our journey —
            from identifying the need to creating lasting change in communities
            across Nigeria.
          </p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {steps.map((step, i) => (
            <StepCard key={step.label} step={step} index={i} />
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-muted-foreground text-sm">
              Be part of the next chapter
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/donate">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-sm font-semibold">
                Donate Now
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 text-sm"
              >
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
