import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Ventures } from "@/components/sections/Ventures";
import { Founder } from "@/components/sections/Founder";
import { Achievements } from "@/components/sections/Achievements";
import { Gallery } from "@/components/sections/Gallery";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="about" aria-label="About">
        <About />
      </section>
      <section id="ventures" aria-label="Ventures">
        <Ventures />
      </section>
      <section id="founder" aria-label="Founder">
        <Founder />
      </section>
      <section id="achievements" aria-label="Achievements">
        <Achievements />
      </section>
      <section id="gallery" aria-label="Gallery">
        <Gallery />
      </section>
      <CTA />
      <section id="contact" aria-label="Contact">
        <Contact />
      </section>
    </>
  );
}
