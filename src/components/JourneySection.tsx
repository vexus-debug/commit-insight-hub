import { useEffect, useRef, useState } from "react";
import { Footprints, Stethoscope, Accessibility, Users2, Sparkles, ArrowRight } from "lucide-react";
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
  },
];

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.2) {
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
  const stepNumber = String(index + 1).padStart(2, "0");

  return (
    <div ref={ref} className="relative">
      {/* Timeline dot */}
      <div
        className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-10 w-12 h-12 rounded-full items-center justify-center z-10 transition-all duration-700 ring-8 ring-background ${
          visible
            ? "bg-gradient-to-br from-primary to-accent scale-100 shadow-lg shadow-primary/30"
            : "bg-muted scale-75"
        }`}
      >
        <step.icon
          className={`h-5 w-5 transition-colors duration-700 ${
            visible ? "text-primary-foreground" : "text-muted-foreground"
          }`}
        />
      </div>

      <div
        className={`grid md:grid-cols-2 gap-8 md:gap-20 items-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Text side */}
        <div className={`${isEven ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12"}`}>
          <div className={`flex items-center gap-3 mb-4 ${isEven ? "md:justify-end" : ""}`}>
            <span className="font-heading text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent leading-none">
              {stepNumber}
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <step.icon className="h-4 w-4 md:hidden" />
              {step.label}
            </span>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight tracking-tight">
            {step.title}
          </h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
            {step.description}
          </p>
          <div
            className={`inline-flex items-baseline gap-3 rounded-2xl px-5 py-3 bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/20 backdrop-blur-sm ${
              isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            <span className="text-3xl font-bold font-heading bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
              {step.stat}
            </span>
            <span className="text-muted-foreground text-xs max-w-[160px] text-left">
              {step.statLabel}
            </span>
          </div>
        </div>

        {/* Image side */}
        <div className={`${isEven ? "" : "md:order-1"}`}>
          <div className="relative group">
            {/* Decorative offset frame */}
            <div
              className={`absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700`}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50">
              <img
                src={step.image}
                alt={step.title}
                className="w-full object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />
              {/* Floating badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-md text-xs font-semibold text-foreground shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Step {stepNumber}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const JourneySection = () => {
  return (
    <section className="journey-section py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />
      <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="h-3.5 w-3.5" />
            The Journey
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-5 mb-5 tracking-tight leading-[1.1]">
            From Compassion to{" "}
            <span className="bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Every act of care is a step in a larger story. Follow our journey —
            from identifying the need to creating lasting change in communities
            across Nigeria.
          </p>
        </div>

        {/* Vertical timeline line */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-24 md:space-y-32 relative">
            {steps.map((step, i) => (
              <StepCard key={step.label} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 md:mt-32 text-center relative">
          <div className="max-w-xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-accent/5 to-transparent border border-border/50 backdrop-blur-sm">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-accent" />
              <span className="text-muted-foreground text-sm">
                Be part of the next chapter
              </span>
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
              Your support writes the next story.
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/donate">
                <Button className="group bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 rounded-full px-8 text-sm font-semibold shadow-lg shadow-primary/20">
                  Donate Now
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button
                  variant="outline"
                  className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-8 text-sm backdrop-blur-sm"
                >
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
