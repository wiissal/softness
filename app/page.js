import Image from "next/image";
import { images, dishes } from "@/lib/content";
import Button from "@/components/ui/Button";
import SoftImage from "@/components/ui/SoftImage";
import ImageReveal from "@/components/ui/ImageReveal";

export default function Home() {
  const swatches = [
    { name: "ivory", className: "bg-ivory" },
    { name: "cream", className: "bg-cream" },
    { name: "sand", className: "bg-sand" },
    { name: "linen", className: "bg-linen" },
    { name: "sage-soft", className: "bg-sage-soft" },
    { name: "sage", className: "bg-sage" },
    { name: "olive", className: "bg-olive" },
    { name: "bark", className: "bg-bark" },
    { name: "clay", className: "bg-clay" },
    { name: "ink", className: "bg-ink" },
  ];

  const allImages = [
    ...Object.entries(images).map(([name, src]) => ({ name, src })),
    ...dishes.map((dish) => ({ name: dish.name, src: dish.image })),
  ];

  return (
    <main className="grain min-h-screen bg-cream px-6 py-16 md:px-16">
      <p className="label text-olive">Fresh · Local · Seasonal</p>

      <h1 className="font-display mt-6 text-6xl leading-none md:text-8xl">
        Food made with <em className="text-olive">softness.</em>
      </h1>

      <p className="mt-6 max-w-md text-ink-soft">
        Fresh ingredients, thoughtful cooking and simple moments made to be
        shared.
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <Button href="#test">Reserve a Table</Button>
        <Button href="#test" variant="outline" withArrow>
          Explore Menu
        </Button>
      </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
        {allImages.map((img, i) => (
          <ImageReveal key={img.name} className="aspect-[4/5] rounded-3xl" delay={i * 0.1}>
            <SoftImage src={img.src} alt={img.name} sizes="(min-width: 768px) 33vw, 100vw" />
          </ImageReveal>
        ))}
      </div>
    </main>
  );
}
