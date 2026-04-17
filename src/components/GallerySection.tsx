import img1 from "@/assets/bestojis-prosthetic-limb.jpg";
import img2 from "@/assets/bestojis-team.jpg";
import img3 from "@/assets/bestojis-clubfoot-1.jpg";
import img4 from "@/assets/bestojis-clubfoot-2.jpg";
import img5 from "@/assets/bestojis-prosthetic-walking.jpg";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { Reveal, Stagger, Item } from "@/components/motion/Motion";

const defaultImages = [
  { src: img1, alt: "Bestojis prosthetist holding a custom-made prosthetic limb", caption: "Custom Prosthetic Limb" },
  { src: img2, alt: "Bestojis Orthopaedic & Rehabilitation Foundation team", caption: "Our Team" },
  { src: img3, alt: "Child before and after clubfoot correction at Bestojis", caption: "Clubfoot Correction" },
  { src: img4, alt: "Young patient before and after Bestojis rehabilitation", caption: "Rehabilitation Journey" },
  { src: img5, alt: "Amputees walking with prosthetic limbs at NPOOTS conference", caption: "Restoring Mobility" },
];

const GallerySection = () => {
  const { content } = useSiteContent();
  const gs = content.gallerySection;

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <Reveal direction="up" className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">{gs.sectionLabel}</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
            {gs.title}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
            {gs.subtitle}
          </p>
        </Reveal>
        <Stagger className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" stagger={0.07}>
          {defaultImages.map((img, i) => (
            <Item
              key={i}
              className={`rounded-2xl overflow-hidden relative group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-primary-foreground text-sm font-medium">{img.caption}</span>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default GallerySection;
