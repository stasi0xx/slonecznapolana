import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Description } from "./components/Description";
import { AmenitiesGrid } from "./components/AmenitiesGrid";
import { ScrubbingText } from "./components/ScrubbingText";
import { Gallery } from "./components/Gallery";
import { Reviews } from "./components/Reviews";
import { BookingCta } from "./components/BookingCta";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-clip w-full max-w-full bg-forest">
      <Nav />
      <Hero />
      <Marquee />
      <BookingCta />
      <Description />
      <AmenitiesGrid />
      <ScrubbingText />
      <Gallery />
      <Reviews />
      <BookingCta />
      <Footer />
    </main>
  );
}
