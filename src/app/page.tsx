import { HeroCarousel } from '@/components/sections/HeroCarousel';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ProductsGrid } from '@/components/sections/ProductsGrid';
import { WhyLap } from '@/components/sections/WhyLap';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { CtaBand } from '@/components/sections/CtaBand';
import { Reveal } from '@/components/ui';

export const metadata = { title: 'LAP Insurance — Lanexang Assurance' };

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <Reveal><TrustStrip /></Reveal>
      <section id="products">
        <Reveal><ProductsGrid /></Reveal>
      </section>
      <Reveal><WhyLap /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><CtaBand /></Reveal>
    </>
  );
}
