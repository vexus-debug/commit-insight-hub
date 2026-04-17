import { Link } from "react-router-dom";
import { PageTransition } from "@/components/motion/Motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSiteContent } from "@/contexts/SiteContentContext";

const News = () => {
  const { content } = useSiteContent();
  const { news } = content;

  return (
    <PageTransition><div className="min-h-screen">
      <TopBar />
      <Navbar />

      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-section-alt-foreground mb-4">{news.title}</h1>
          <p className="text-section-alt-foreground/70 max-w-2xl mx-auto">{news.description}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {news.stories.map((story) => (
              <Link
                key={story.slug || story.title}
                to={`/news/${story.slug}`}
                className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow group"
              >
                {story.image && (
                  <img src={story.image} alt={story.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                )}
                {!story.image && (
                  <div className="w-full h-48 bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">No image</span>
                  </div>
                )}
                <div className="p-6">
                  <span className="text-xs text-secondary font-medium">{story.date}</span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mt-2 mb-3">{story.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{story.excerpt}</p>
                  <span className="text-primary text-sm font-medium group-hover:underline">Continue Reading →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </PageTransition>);
};

export default News;
