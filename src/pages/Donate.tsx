import TopBar from "@/components/TopBar";
import { PageTransition } from "@/components/motion/Motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Building2, CreditCard, User } from "lucide-react";
import { useSiteContent } from "@/contexts/SiteContentContext";

const Donate = () => {
  const { content } = useSiteContent();
  const d = content.donate;

  return (
    <PageTransition><div className="min-h-screen">
      <TopBar />
      <Navbar />

      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-section-alt-foreground mb-4">
            {d.title}
          </h1>
          <p className="text-section-alt-foreground/70 max-w-2xl mx-auto">
            {d.description}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Bank Transfer Card */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Bank Transfer</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Make a direct bank transfer to support our programs. All donations go directly to community healthcare and empowerment.
            </p>
            <div className="bg-muted/50 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Bank Name</p>
                  <p className="text-foreground font-medium text-lg">{d.bankName}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Account Name</p>
                  <p className="text-foreground font-medium text-lg">{d.accountName}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CreditCard className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Account Number</p>
                  <p className="text-foreground font-medium text-lg font-mono tracking-wider">{d.accountNumber}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border text-center">
            <Heart className="h-12 w-12 text-secondary mx-auto mb-6" />
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{d.cardTitle}</h2>
            <p className="text-muted-foreground mb-8">{d.cardDescription}</p>
            <div className="space-y-4 text-left bg-muted/50 rounded-xl p-6 mb-8">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Email:</span> {d.contactEmail}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Partnerships:</span> {d.partnershipEmail}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Phone:</span> {d.phone}
              </p>
            </div>
            <a href={`mailto:${d.contactEmail}`}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3">
                Contact Us to Donate
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </PageTransition>);
};

export default Donate;
