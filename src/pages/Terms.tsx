import TopBar from "@/components/TopBar";
import { PageTransition } from "@/components/motion/Motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSiteContent } from "@/contexts/SiteContentContext";

const Terms = () => {
  const { content } = useSiteContent();
  const t = content.terms;

  return (
    <PageTransition><div className="min-h-screen">
      <TopBar />
      <Navbar />

      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-section-alt-foreground mb-4">{t.title}</h1>
          <p className="text-section-alt-foreground/70">Last updated: {t.lastUpdated}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-sm md:prose-base max-w-none">
            {t.content.split("\n").map((line, i) => {
              if (line.startsWith("**") && line.endsWith("**")) {
                return <h3 key={i} className="font-heading text-lg font-bold text-foreground mt-8 mb-3">{line.replace(/\*\*/g, "")}</h3>;
              }
              return line.trim() ? <p key={i} className="text-muted-foreground leading-relaxed mb-3">{line}</p> : null;
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </PageTransition>);
};

export default Terms;
