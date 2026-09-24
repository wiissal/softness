import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import SignatureDishes from "@/components/SignatureDishes";
import SoftImage from "@/components/ui/SoftImage";
import ImageReveal from "@/components/ui/ImageReveal";
import Button from "@/components/ui/Button";
import { images, dishes } from "@/lib/content";


export default function Home() {
  const allImages = [
    ...Object.entries(images).map(([name, src]) => ({ name, src })),
    ...dishes.map((dish) => ({ name: dish.name, src: dish.image })),
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <BrandStatement />
      <SignatureDishes/>

      <main className="grain bg-cream px-6 pb-32 pt-40 md:px-16">
       

        <section id="menu" className="mt-24 grid gap-6 md:grid-cols-3">
          {allImages.map((img, i) => (
            <ImageReveal key={img.name} className="aspect-[4/5] rounded-3xl" delay={i * 0.1}>
              <SoftImage src={img.src} alt={img.name} sizes="(min-width: 768px) 33vw, 100vw" />
            </ImageReveal>
          ))}
        </section>

        <section id="about" className="mt-24 max-w-lg">
          <h2 className="font-display text-4xl">About placeholder</h2>
          <p className="mt-4 text-ink-soft">
            This section exists so the navigation links have somewhere to scroll to.
          </p>
        </section>

        <section id="reserve" className="mt-24 max-w-lg pb-24">
          <h2 className="font-display text-4xl">Reserve placeholder</h2>
        </section>
      </main>
    </>
  );
}