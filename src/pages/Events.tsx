import TopBar from "@/components/TopBar";
import { PageTransition } from "@/components/motion/Motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { Calendar, MapPin, Tag } from "lucide-react";

const Events = () => {
  const { content } = useSiteContent();
  const ev = content.events;

  return (
    <PageTransition><div className="min-h-screen">
      <TopBar />
      <Navbar />

      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-section-alt-foreground mb-4">{ev.title}</h1>
          <p className="text-section-alt-foreground/70 max-w-2xl mx-auto">{ev.description}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {ev.items.map((event, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-secondary/20 text-secondary text-xs font-semibold px-3 py-1 rounded-full">{event.type}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">{event.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </PageTransition>);
};

export default Events;
