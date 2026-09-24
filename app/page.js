import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import SignatureDishes from "@/components/SignatureDishes";
import Atmosphere from "@/components/Atmosphere";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <BrandStatement />
        <SignatureDishes />
        <Atmosphere />  
        {/* Placeholder until the reservation section is built */}
        <section id="reserve" className="bg-ivory px-5 py-24 sm:px-8 lg:px-12">
          <h2 className="font-display text-4xl">Reservation section coming next</h2>
        </section>
      </main>
    </>
  );
}