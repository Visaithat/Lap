import { T } from '@/components/i18n';
import { Breadcrumb } from '@/components/layout';
import {
  CoverageTable,
  FaqAccordion,
  HowToApply,
  Personas,
  PremiumCards,
  ProductHero,
  RelatedProducts,
  WhatsCovered,
} from '@/components/sections';
import { Reveal } from '@/components/ui';
import { productPages } from '@/data/productPages';

const slug = 'eco' as const;
const meta = productPages[slug];

export const metadata = { title: meta.titleEn };

export default function EcoPage() {
  return (
    <>
      <div className="lap-container pt-6 pb-2">
        <Breadcrumb
          items={[
            { label: <T lo="ໜ້າຫຼັກ" en="Home" />, href: '/' },
            { label: <T lo="ຜະລິດຕະພັນ" en="Products" />, href: '/#products' },
            { label: <T lo={meta.titleLo} en={meta.titleEn} /> },
          ]}
        />
      </div>
      <ProductHero meta={meta} />
      <Reveal>
        <WhatsCovered
          items={meta.whatsCovered}
          headingLo={meta.whatsCoveredHeadingLo}
          headingEn={meta.whatsCoveredHeadingEn}
        />
      </Reveal>
      <Reveal><CoverageTable /></Reveal>
      <Reveal><PremiumCards /></Reveal>
      <Reveal><Personas items={meta.personas} /></Reveal>
      <Reveal><HowToApply steps={meta.howToApply} /></Reveal>
      <Reveal><FaqAccordion items={meta.faqs} /></Reveal>
      <Reveal><RelatedProducts current={slug} /></Reveal>
    </>
  );
}
