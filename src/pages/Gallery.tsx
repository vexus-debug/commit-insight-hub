import TopBar from "@/components/TopBar";
import { PageTransition } from "@/components/motion/Motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useState } from "react";
import { X } from "lucide-react";

import img1 from "@/assets/bestojis-prosthetic-limb.jpg";
import img2 from "@/assets/bestojis-prosthetic-walking.jpg";
import img3 from "@/assets/bestojis-clubfoot-1.jpg";
import img4 from "@/assets/bestojis-clubfoot-2.jpg";
import img5 from "@/assets/bestojis-team.jpg";
import img6 from "@/assets/bestojis-conference-team.jpg";
import img7 from "@/assets/bestojis-conference-walk.jpg";
import img8 from "@/assets/bestojis-npoots.jpg";

const categories = ["All", "Prosthetics & Orthotics", "Clubfoot & Rehabilitation", "Team & Conferences"] as const;

type Category = (typeof categories)[number];

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: Category[];
}

const allImages: GalleryImage[] = [
  { src: img1, alt: "Bestojis prosthetist holding a finished prosthetic limb", caption: "Custom-Made Prosthetic Limb", category: ["Prosthetics & Orthotics", "Team & Conferences"] },
  { src: img2, alt: "Amputees walking with prosthetic limbs at NPOOTS 2025", caption: "Restoring Mobility — NPOOTS 2025", category: ["Prosthetics & Orthotics"] },
  { src: img3, alt: "Child before and after clubfoot correction", caption: "Clubfoot Correction — Before & After", category: ["Clubfoot & Rehabilitation"] },
  { src: img4, alt: "Young patient before and after rehabilitation", caption: "Rehabilitation Journey — Before & After", category: ["Clubfoot & Rehabilitation"] },
  { src: img5, alt: "Bestojis Orthopaedic & Rehabilitation Foundation team", caption: "Our Dedicated Team", category: ["Team & Conferences"] },
  { src: img6, alt: "Dr. Bestman with the Bestojis team at a conference", caption: "Bestojis Team at NPOOTS Conference", category: ["Team & Conferences"] },
  { src: img7, alt: "Dr. Bestman walking at the 4th NPOOTS Annual Scientific Conference", caption: "4th NPOOTS Annual Scientific Conference", category: ["Team & Conferences"] },
  { src: img8, alt: "Dr. Bestman with colleagues at NPOOTS 2025", caption: "Nigerian Prosthetic, Orthotic & Orthopaedic Technology Society", category: ["Team & Conferences"] },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "All"
    ? allImages
    : allImages.filter((img) => img.category.includes(activeFilter as Category));

  return (
    <PageTransition><div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <PageHero
        title="Our Gallery"
        subtitle="Gallery"
        description="See Bestojis Orthopaedic & Rehabilitation Foundation in action — restoring mobility, dignity, and hope through prosthetic, orthotic, and rehabilitation care across Nigeria."
        image={img2}
      />

      <section className="py-16 bg-background flex-1">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <div
                key={img.caption + i}
                className="break-inside-avoid rounded-2xl overflow-hidden relative group cursor-pointer bg-card shadow-sm hover:shadow-lg transition-shadow duration-300"
                onClick={() => setLightboxIndex(allImages.indexOf(img))}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-primary-foreground text-sm font-semibold">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No photos in this category yet.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-4xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={allImages[lightboxIndex].src}
              alt={allImages[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-primary-foreground text-center mt-3 text-sm font-medium">
              {allImages[lightboxIndex].caption}
            </p>
            <div className="flex justify-center gap-4 mt-3">
              <button
                className="text-primary-foreground/70 hover:text-primary-foreground text-sm px-4 py-1 rounded-full border border-primary-foreground/20"
                onClick={() => setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : allImages.length - 1)}
              >
                ← Previous
              </button>
              <button
                className="text-primary-foreground/70 hover:text-primary-foreground text-sm px-4 py-1 rounded-full border border-primary-foreground/20"
                onClick={() => setLightboxIndex(lightboxIndex < allImages.length - 1 ? lightboxIndex + 1 : 0)}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  </PageTransition>);
};

export default Gallery;
