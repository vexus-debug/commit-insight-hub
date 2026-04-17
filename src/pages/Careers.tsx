import TopBar from "@/components/TopBar";
import { PageTransition } from "@/components/motion/Motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { MapPin, Clock, CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const { content } = useSiteContent();
  const c = content.careers;

  return (
    <PageTransition><div className="min-h-screen">
      <TopBar />
      <Navbar />

      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-section-alt-foreground mb-4">{c.title}</h1>
          <p className="text-section-alt-foreground/70 max-w-2xl mx-auto">{c.description}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {c.items.map((job, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-primary" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-primary" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Requirements</p>
                  {job.requirements.map((req, ri) => (
                    <div key={ri} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{req}</span>
                    </div>
                  ))}
                </div>
                <a href={`mailto:${c.contactEmail}?subject=Application: ${job.title}`}>
                  <Button variant="outline" className="rounded-full gap-2">
                    <Mail className="h-4 w-4" />
                    Apply Now
                  </Button>
                </a>
              </div>
            ))}
          </div>

          {c.items.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No open positions at the moment. Check back later!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  </PageTransition>);
};

export default Careers;
