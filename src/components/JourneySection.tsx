import { Footprints, Stethoscope, Accessibility, Users2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import prostheticImg from "@/assets/bestojis-prosthetic-walking.jpg";
import conferenceImg from "@/assets/bestojis-conference-team.jpg";
import clubfootImg from "@/assets/bestojis-clubfoot-1.jpg";
import teamImg from "@/assets/bestojis-team.jpg";
import { Reveal } from "@/components/motion/Motion";

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

const StepCard = ({ step, index }: { step: (typeof steps)[number]; index: number }) => {
  const isEven = index % 2 === 0;
  const stepNumber = String(index + 1).padStart(2, "0");
  const Icon = step.icon;

  return (
    <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
      <Reveal direction={isEven ? "right" : "left"} className={`md:col-span-7 ${isEven ? "" : "md:order-2"}`}>
        <div className="relative overflow-hidden rounded-lg border border-border bg-muted">
          <img
            src={step.image}
            alt={step.title}
            className="w-full object-cover aspect-[16/10] transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
        </div>
      </Reveal>

      <Reveal direction={isEven ? "left" : "right"} delay={0.1} className={`md:col-span-5 ${isEven ? "" : "md:order-1"}`}>
        <div className="flex items-center gap-4 mb-5">
          <span className="font-heading text-sm font-semibold text-muted-foreground tabular-nums tracking-wider">
            {stepNumber} / 04
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border text-foreground">
            <Icon className="h-4 w-4" strokeWidth={1.75} />
          </span>
        </div>

        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent mb-3">
          {step.label}
        </p>

        <h3 className="font-heading text-2xl md:text-[1.75rem] font-semibold text-foreground mb-4 leading-tight tracking-tight">
          {step.title}
        </h3>

        <p className="text-muted-foreground text-[0.95rem] leading-relaxed mb-6">
          {step.description}
        </p>

        <div className="flex items-baseline gap-3 pt-5 border-t border-border">
          <span className="font-heading text-2xl font-semibold text-foreground">
            {step.stat}
          </span>
          <span className="text-muted-foreground text-sm">
            {step.statLabel}
          </span>
        </div>
      </Reveal>
    </article>
  );
};

const JourneySection = () => {
  return (
    <section className="journey-section py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal direction="up" className="max-w-2xl mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            The Journey
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-[1.15] mb-5">
            From compassion to transformation.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Every act of care is a step in a larger story. Follow our work — from
            identifying the need to creating lasting change in communities across
            Nigeria.
          </p>
        </Reveal>

        <div className="space-y-20 md:space-y-28">
          {steps.map((step, i) => (
            <StepCard key={step.label} step={step} index={i} />
          ))}
        </div>

        <Reveal direction="up" className="mt-24 md:mt-32 pt-12 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-2">
              Be part of the next chapter.
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Your support writes the next story of impact.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/donate">
              <Button className="group bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-6 h-11 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5">
                Donate
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button
                variant="outline"
                className="rounded-md border-border text-foreground hover:bg-muted px-6 h-11 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get Involved
              </Button>
            </Link>
          </div>
        </Reveal>
        </div>
    </section>
  );
};

export default JourneySection;
