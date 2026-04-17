import TopBar from "@/components/TopBar";
import { PageTransition } from "@/components/motion/Motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import {
  Users, HandHeart, CalendarDays, Stethoscope, Heart, Eye,
  ArrowRight, CheckCircle, Globe, Award, Clock, MapPin,
  Building, GraduationCap, Megaphone,
} from "lucide-react";
import groupImg from "@/assets/bestojis-team.jpg";
import pairImg from "@/assets/bestojis-prosthetic-limb.jpg";
import meetingImg from "@/assets/bestojis-conference-team.jpg";

const volunteerRoles = [
  {
    icon: Stethoscope,
    title: "Medical Volunteers",
    description: "Doctors, nurses, pharmacists, and lab technicians who provide free consultations, screenings, and treatment during monthly outreaches.",
    commitment: "1-2 days/month",
  },
  {
    icon: Eye,
    title: "Vision Care Specialists",
    description: "Optometrists and ophthalmologists who conduct eye examinations, prescribe corrective lenses, and identify conditions needing specialist care.",
    commitment: "1 day/month",
  },
  {
    icon: Users,
    title: "Community Mobilizers",
    description: "Help organize logistics, crowd management, registration, and community engagement at outreach events across Nigerian states.",
    commitment: "Flexible",
  },
  {
    icon: Megaphone,
    title: "Media & Communications",
    description: "Photographers, videographers, writers, and social media managers who document our impact and amplify our mission to the world.",
    commitment: "Remote / Flexible",
  },
];



const partnershipTiers = [
  {
    icon: Heart,
    title: "Community Partner",
    description: "Local organizations, churches, and community leaders who help us identify areas of need and mobilize communities for outreach events.",
    benefits: ["Event co-hosting", "Community reach", "Local impact reports"],
  },
  {
    icon: Building,
    title: "Institutional Partner",
    description: "Universities, hospitals, and government agencies that collaborate on screening programs, research, and large-scale health interventions.",
    benefits: ["Joint programs", "Research collaboration", "CSR alignment"],
  },
  {
    icon: Globe,
    title: "Corporate Sponsor",
    description: "Companies and foundations that provide financial support, supplies, or professional expertise to expand our programs and reach.",
    benefits: ["Brand visibility", "Impact reporting", "Tax-deductible giving"],
  },
];

const upcomingEvents = [
  {
    title: "Monthly Medical Outreach — Lagos",
    date: "First Saturday of every month",
    location: "Idimu, Lagos State",
    type: "Outreach",
  },
  {
    title: "Cancer Screening Drive",
    date: "Quarterly",
    location: "Multiple locations",
    type: "Screening",
  },
  {
    title: "Vision Restoration Campaign",
    date: "Bi-monthly",
    location: "Ogun & Edo States",
    type: "Eye Care",
  },
  {
    title: "Community Welfare Distribution",
    date: "Monthly",
    location: "Abuja & surroundings",
    type: "Welfare",
  },
];

const GetInvolved = () => {
  return (
    <PageTransition><div className="min-h-screen overflow-x-hidden">
      <TopBar />
      <Navbar />

      <PageHero
        title="Be the Change a Community Needs"
        subtitle="Get Involved"
        description="Your time, skills, and generosity can transform lives. Whether you volunteer, partner, or donate — every contribution creates ripples of lasting impact."
        image={groupImg}
        ctaLabel="Donate Now"
        ctaLink="/donate"
      />

      {/* Ways to Get Involved — Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Make a Difference</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                Three Ways to Create Impact
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No matter your background or expertise, there's a meaningful way for you to join our mission.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "Volunteer",
                description: "Join our monthly outreaches as a medical professional or general volunteer. Share your skills where they're needed most.",
                cta: "See Roles",
                link: "#volunteer-roles",
              },
              {
                icon: HandHeart,
                title: "Partner With Us",
                description: "Organizations and institutions can collaborate on programs, sponsor outreaches, and amplify our collective reach.",
                cta: "Explore Partnerships",
                link: "#partnerships",
              },
              {
                icon: CalendarDays,
                title: "Attend Events",
                description: "Participate in awareness campaigns, fundraisers, and community events. See our work firsthand and be part of the movement.",
                cta: "View Events",
                link: "#events",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">{item.description}</p>
                  <a href={item.link}>
                    <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm">
                      {item.cta}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section id="volunteer-roles" className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <div>
                <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Volunteer</span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                  Your Skills Can Save Lives
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  We welcome medical professionals and general supporters from all backgrounds. Our monthly outreaches depend on passionate volunteers who show up with purpose.
                </p>
                <div className="space-y-6">
                  {volunteerRoles.map((role) => (
                    <div key={role.title} className="flex gap-4">
                      <div className="w-11 h-11 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0">
                        <role.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-heading text-base font-semibold text-foreground">{role.title}</h3>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {role.commitment}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{role.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="relative">
                <img src={pairImg} alt="Volunteers in action" className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5]" />
                <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-5 shadow-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">No Experience?</div>
                      <div className="text-xs text-muted-foreground">Training provided for all roles</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section id="partnerships" className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Partnerships</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
                Stronger Together
              </h2>
              <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
                We partner with local organizations, universities, government bodies, and corporations to expand our impact and reach.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partnershipTiers.map((tier, i) => (
              <ScrollReveal key={tier.title} delay={i * 100}>
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm h-full">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-5">
                    <tier.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{tier.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{tier.description}</p>
                  <div className="space-y-2">
                    {tier.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={300}>
            <div className="text-center mt-10">
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-sm font-semibold">
                  Become a Partner
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Events</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-section-alt-foreground mt-2">
                Upcoming Outreaches & Events
              </h2>
              <p className="text-section-alt-foreground/60 mt-3 max-w-lg mx-auto text-sm">
                Join us at our next event and experience the impact firsthand.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingEvents.map((event, i) => (
              <ScrollReveal key={event.title} delay={i * 80}>
                <div className="bg-card rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-secondary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{event.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Sign Up Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
            <ScrollReveal>
              <div>
                <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Join Us</span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                  Ready to Make an Impact?
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Fill out the form and our team will reach out to discuss how you can contribute — whether as a volunteer, partner, or supporter.
                </p>
                <img src={meetingImg} alt="Team collaboration" className="rounded-2xl shadow-lg w-full object-cover aspect-[16/9]" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Express Your Interest</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Full Name" className="rounded-lg" />
                    <Input placeholder="Email Address" type="email" className="rounded-lg" />
                  </div>
                  <Input placeholder="Phone Number" type="tel" className="rounded-lg" />
                  <select className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground">
                    <option value="">How would you like to help?</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="partner">Partner / Sponsor</option>
                    <option value="donate">Donate</option>
                    <option value="event">Attend an Event</option>
                    <option value="other">Other</option>
                  </select>
                  <Textarea placeholder="Tell us about your skills, interests, or how you'd like to contribute..." rows={4} className="rounded-lg" />
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-sm font-semibold">
                    Submit Interest
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </PageTransition>);
};

export default GetInvolved;
