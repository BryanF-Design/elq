import { Hero } from "@/components/hero/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { About } from "@/components/sections/about";
import { Marquee } from "@/components/sections/marquee";
import { Services } from "@/components/sections/services";
import { WhyElq } from "@/components/sections/why-elq";
import { Process } from "@/components/sections/process";
import { Frequency } from "@/components/sections/frequency";
import { BeforeAfter } from "@/components/sections/before-after";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <TrustBar />
      <About />
      <Marquee />
      <Services />
      <WhyElq />
      <Process />
      <Frequency />
      <BeforeAfter />
      <Gallery />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
}
