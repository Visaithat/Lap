import { T } from '@/components/i18n';
import { Breadcrumb } from '@/components/layout';
import {
  FaqAccordion,
  HowToApply,
  Personas,
  ProductHero,
  RelatedProducts,
  ThirdPartyCoverageTable,
  WhatsCovered,
} from '@/components/sections';
import { Reveal } from '@/components/ui';
import { productPages } from '@/data/productPages';

const slug = 'third-party' as const;
const meta = productPages[slug];

export const metadata = { title: meta.titleEn };

export default function ThirdPartyPage() {
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
      <Reveal><ThirdPartyCoverageTable /></Reveal>
      <Reveal><Personas items={meta.personas} /></Reveal>
      <Reveal><HowToApply steps={meta.howToApply} /></Reveal>
      <Reveal><FaqAccordion items={meta.faqs} /></Reveal>
      <Reveal><RelatedProducts current={slug} /></Reveal>
    </>
  );
}
