import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Marquee } from "./Marquee";
import { About } from "./About";
import { Arsenal } from "./Arsenal";
import { Journey } from "./Journey";
import { Works } from "./Works";
import { Design } from "./Design";
import { CTA } from "./CTA";
import { Footer } from "./Footer";

export function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Arsenal />
      <Journey />
      <Works />
      <Design />
      <CTA />
      <Footer />
    </main>
  );
}