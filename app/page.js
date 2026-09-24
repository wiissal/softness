import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import SignatureDishes from "@/components/SignatureDishes";
import Atmosphere from "@/components/Atmosphere";
import ReservationCTA from "@/components/ReservationCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <BrandStatement />
        <SignatureDishes />
        <Atmosphere />
        <ReservationCTA />
      </main>

      <Footer />
    </>
  );
}