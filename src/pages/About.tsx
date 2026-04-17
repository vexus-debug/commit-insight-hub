import TopBar from "@/components/TopBar";
import { PageTransition } from "@/components/motion/Motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart, Eye, Users, Award, Target,
  Globe, Lightbulb, HandHeart, CheckCircle, ArrowRight,
} from "lucide-react";
import teamImg from "@/assets/bestojis-team.jpg";
import prostheticImg from "@/assets/bestojis-prosthetic-limb.jpg";
import conferenceWalkImg from "@/assets/bestojis-conference-walk.jpg";
import conferenceTeamImg from "@/assets/bestojis-conference-team.jpg";
import npootsImg from "@/assets/bestojis-npoots.jpg";

const timeline = [
  { year: "2015", title: "Vision Born in the USA", description: "Dr. Ojigini Bestman witnessed the life-changing impact of prosthetic limbs while working with Standing with Hope, a USA-based prosthetic rehabilitation outreach." },
  { year: "2016", title: "Foundation Established", description: "Bestojis (Amalgam) Orthopaedic and Rehabilitation Foundation was founded on January 26, 2016 — the first foundation of its kind in Rivers State." },
  { year: "2017", title: "Officially Registered NGO", description: "Registered as a non-governmental organization on October 23, 2017, under the Civil Action Fund (CAF) Act of 2015." },
  { year: "2018", title: "Dr. Bestman Becomes Executive Director", description: "Dr. Ojigini Bestman assumed the role of Executive Director and Board Chairman, leading the foundation's growth and mission." },
  { year: "2021", title: "CAF Membership Confirmed", description: "Granted CAF membership number CAF/10,000 on May 30, 2021, formalising our standing among Nigeria's recognised non-profits." },
  { year: "2025", title: "Hosting NPOOTS National Conference", description: "Dr. Bestman heads the 4th Annual Scientific Conference of the Nigerian Prosthetic, Orthotic & Orthopaedic Technology Society at UPTH, Port Harcourt (Nov 11–14, 2025)." },
];

const values = [
  { icon: Heart, title: "Compassion", description: "Every prosthetic, orthotic device, and consultation is delivered with genuine care for each patient's dignity." },
  { icon: Lightbulb, title: "Excellence", description: "Pursuing world-class standards in prosthetic, orthotic, and rehabilitation care for Nigerian patients." },
  { icon: HandHeart, title: "Dignity", description: "Restoring independence and self-worth to amputees, children with clubfoot, and the orthopedically handicapped." },
  { icon: Users, title: "Community", description: "Reaching the Niger Delta and beyond through community-based rehabilitation outreaches." },
  { icon: Globe, title: "Inclusivity", description: "Serving every physically disabled person regardless of age, status, or financial means." },
  { icon: Target, title: "Accountability", description: "Transparent stewardship of every donation, partnership, and resource entrusted to us." },
];

const About = () => {
  return (
    <PageTransition><div className="min-h-screen overflow-x-hidden">
      <TopBar />
      <Navbar />

      <PageHero
        title="Restoring Mobility, Restoring Dignity"
        subtitle="About Us"
        description="Since 2016, Bestojis Orthopaedic & Rehabilitation Foundation has been transforming the lives of amputees, children with clubfoot, and persons with physical disabilities across Nigeria."
        image={teamImg}
        ctaLabel="Our Programs"
        ctaLink="/programs"
      />

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Story</span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6 leading-snug">
                  A Foundation Born from Witnessed Transformation
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  Bestojis Orthopaedic and Rehabilitation Foundation — formally known as Amalgam Orthopaedic and Rehabilitation Foundation — is a Nigerian non-governmental, non-profit organization established on January 26, 2016. We were founded with a clear mission: to address the growing challenge of physical disability in Nigerian society by restoring mobility, independence, and dignity.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  Officially registered as an NGO on October 23, 2017, under the Civil Action Fund (CAF) Act of 2015, we hold CAF membership number CAF/10,000. Headquartered in Port Harcourt, Rivers State, we primarily serve the Niger Delta region — with a special focus on children with physical disabilities.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  In Nigeria, only an estimated 9–12% of amputee patients ever receive a prosthetic limb. Bestojis exists to change that statistic — one fitted limb, one corrected clubfoot, one rehabilitated life at a time.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Registered NGO (CAF/10,000)
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    First of its kind in Rivers State
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Internationally Supported
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src={prostheticImg} alt="Custom-made prosthetic limb at Bestojis" className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4]" />
                <img src={conferenceTeamImg} alt="Bestojis team at NPOOTS conference" className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4] mt-8" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">What Drives Us</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">Our Vision & Mission</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="bg-section-alt rounded-3xl p-10 h-full">
                <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-section-alt-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-section-alt-foreground mb-4">Our Vision</h3>
                <p className="text-section-alt-foreground/80 leading-relaxed">
                  To become a state-of-the-art rehabilitation facility — staffed by highly trained and motivated professionals — where physically disabled persons, orthopaedic handicaps, and amputees receive care comparable to the best rehabilitation centres anywhere in the world, ultimately improving the quality of life for all Nigerians.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-card rounded-3xl p-10 border border-border shadow-sm h-full">
                <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide sustainable, affordable and the highest standard of quality services, training, and research in prosthetics, orthotics, and rehabilitation care — delivered in a conducive and secure environment by well-trained, motivated staff who continuously acquire knowledge and skills in disability care.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Journey</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
                Milestones of Impact
              </h2>
              <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
                From a vision born in 2015 to leading Nigeria's national prosthetic and orthotic conversation — every year deepens our commitment.
              </p>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 120}>
                <div className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background z-10 mt-1" />
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-secondary font-heading text-lg font-bold">{item.year}</span>
                    <h3 className="font-heading text-base font-semibold text-foreground mt-1 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Foundation</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-section-alt-foreground mt-2">
                Values That Guide Every Step
              </h2>
              <p className="text-section-alt-foreground/60 mt-3 max-w-lg mx-auto text-sm">
                Our work is anchored in principles that ensure lasting, meaningful impact for every patient and community we serve.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className="bg-card rounded-2xl p-7 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Leadership</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
                The Heart Behind the Mission
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
              <div className="relative">
                <img src={conferenceWalkImg} alt="Dr. Ojigini Bestman, Executive Director of Bestojis" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5]" />
                <div className="absolute -bottom-4 -right-4 bg-secondary rounded-2xl px-6 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-secondary-foreground" />
                    <span className="text-secondary-foreground text-sm font-semibold">NPOOTS 2025 Chair</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Dr. Ojigini Bestman</h3>
                <p className="text-secondary font-semibold text-sm mb-4">Executive Director & Board Chairman</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Also known as Bestman Usamali Ojigini, Dr. Bestman is a licensed medical rehabilitation professional recognized by the Medical Rehabilitation Therapists Board of Nigeria. He specialises in correcting and preventing deformities, restoring mobility, and rehabilitating amputees and the orthopedically handicapped.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  His career spans the Prosthetic and Orthotic Department of the National Orthopaedic Hospital Enugu, Alex Ekwueme Federal University Teaching Hospital Abakaliki, the Orthopaedic Training Centre in Nsawon (Ghana), the National Prosthetic and Orthotic Centre in Accra (Ghana), and Rivers University Teaching Hospital. He currently heads the Prosthetic and Orthotic Unit at the University of Port Harcourt Teaching Hospital (UPTH).
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  In 2025, Dr. Bestman heads the 4th Annual Scientific Conference of the Nigerian Prosthetic, Orthotic & Orthopaedic Technology Society (NPOOTS) — themed "Broadening Prosthetic & Orthotic Services Across Nigeria's Healthcare System: Towards Achieving Universal Health Coverage."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
              <img src={npootsImg} alt="Dr. Bestman with NPOOTS colleagues at the 2025 conference" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5]" />
              <div>
                <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Recognition & Support</span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4 leading-snug">
                  Internationally Recognised, Locally Rooted
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Bestojis has begun attracting international support. Penta Medical Recycling, an organisation based in Port Harcourt, recently sent its inaugural shipment of 43 prosthetic components to the foundation — the beginning of what both parties hope will be a long, productive collaboration.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our leadership's professional standing is further demonstrated by hosting the 4th Annual Scientific Conference of NPOOTS in November 2025 at the University of Port Harcourt Teaching Hospital — featuring webinars, hands-on workshops, and two days of scientific sessions.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Help Us Restore More Lives
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-sm">
              Whether you want to donate a prosthetic component, sponsor a clubfoot correction, or partner with us — every contribution restores mobility and dignity.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/donate">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-sm font-semibold">
                  Donate Now
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 text-sm">
                  Get Involved
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

export default About;
