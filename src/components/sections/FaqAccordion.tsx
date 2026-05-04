import { T } from '@/components/i18n';
import { Accordion, Eyebrow } from '@/components/ui';
import type { AccordionItem } from '@/components/ui';
import type { FaqItem } from '@/data/productPages';

type FaqAccordionProps = {
  items: FaqItem[];
};

/**
 * Bilingual FAQ section. Wraps the Wave-1 Radix-backed `Accordion`
 * primitive — we don't hand-roll the disclosure state.
 *
 * The outer section is a server component; the `Accordion` itself is
 * a client component, so React tree-shakes the boundary correctly.
 */
export function FaqAccordion({ items }: FaqAccordionProps) {
  const accordionItems: AccordionItem[] = items.map((faq, idx) => ({
    value: `faq-${idx}`,
    title: <T lo={faq.qLo} en={faq.qEn} />,
    content: <T lo={faq.aLo} en={faq.aEn} />,
  }));

  return (
    <section className="lap-section">
      <div className="lap-container">
        <Eyebrow>
          <T lo="ຄຳຖາມທີ່ຖືກຖາມເລື້ອຍ" en="FAQ" />
        </Eyebrow>
        <h2 className="lap-h1 mt-4 mb-10">
          <T lo="ຄຳຖາມທີ່ຖືກຖາມເລື້ອຍ" en="Frequently asked" />
        </h2>
        <div className="max-w-3xl">
          <Accordion items={accordionItems} />
        </div>
      </div>
    </section>
  );
}
