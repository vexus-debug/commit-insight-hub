import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import medicalImg from "@/assets/bestojis-prosthetic-walking.jpg";
import meetingImg from "@/assets/bestojis-conference-team.jpg";
import officeImg from "@/assets/bestojis-npoots.jpg";
import groupImg from "@/assets/bestojis-team.jpg";

const programs = [
  {
    title: "Free Medical Care",
    description: "General consultations, deworming, treatment for malaria, diabetes, and hypertension delivered through monthly community outreaches.",
    image: medicalImg,
    beneficiaries: "10,000+",
    goal: "$8,000 goal",
    raised: "$6,300 raised",
    progress: 78,
  },
  {
    title: "Cancer Screening & Awareness",
    description: "Prostate and breast cancer awareness and screening delivered in partnership with leading Nigerian universities and hospitals.",
    image: meetingImg,
    beneficiaries: "5,500+",
    goal: "$7,000 goal",
    raised: "$3,500 raised",
    progress: 50,
  },
  {
    title: "Vision Restoration Program",
    description: "Comprehensive eye examinations, specialist treatment, and distribution of free reading glasses to restore sight and independence.",
    image: officeImg,
    beneficiaries: "8,200+",
    goal: "$6,000 goal",
    raised: "$5,100 raised",
    progress: 85,
  },
  {
    title: "Community Welfare & Empowerment",
    description: "Nutritional support, free clothing, household items, and vocational skill training to build self-sufficiency in communities.",
    image: groupImg,
    beneficiaries: "12,400+",
    goal: "$10,000 goal",
    raised: "$3,500 raised",
    progress: 35,
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-4">
          <div>
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Programs</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 leading-snug">
              Your Donation Can
              <br />
              Change a Life Today
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Every contribution directly supports underprivileged communities with care, compassion, and sustainable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div key={program.title} className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="grid sm:grid-cols-2">
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <div className="text-xs text-muted-foreground mb-1">
                      {program.raised} of {program.goal}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3 text-destructive" />
                        {program.beneficiaries} Beneficiaries
                      </span>
                      <span className="font-medium">{program.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mb-4">
                      <div className="bg-secondary rounded-full h-2 transition-all duration-500" style={{ width: `${program.progress}%` }} />
                    </div>
                    <Link to="/donate">
                      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-xs px-5">
                        Donate Now
                      </Button>
                    </Link>
                  </div>
                </div>
                <div>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover min-h-[220px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/programs">
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              View All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
