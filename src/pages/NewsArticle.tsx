import { useParams, Link } from "react-router-dom";
import { PageTransition } from "@/components/motion/Motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { content } = useSiteContent();
  const story = content.news.stories.find((s) => s.slug === slug);

  if (!story) {
    return (
      <PageTransition><div className="min-h-screen">
        <TopBar />
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Story Not Found</h1>
          <p className="text-muted-foreground mb-8">The story you're looking for doesn't exist.</p>
          <Link to="/news">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Button>
          </Link>
        </div>
        <Footer />
      </div></PageTransition>
    );
  }

  return (
    <PageTransition><div className="min-h-screen">
      <TopBar />
      <Navbar />

      {story.image && (
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
        </div>
      )}

      <article className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/news" className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to News & Stories
          </Link>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            <span>{story.date}</span>
          </div>

          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            {story.title}
          </h1>

          <div className="prose prose-sm md:prose-base max-w-none text-foreground">
            {story.content.split("\n").map((paragraph, i) => (
              paragraph.trim() ? (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              ) : null
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  </PageTransition>);
};

export default NewsArticle;
