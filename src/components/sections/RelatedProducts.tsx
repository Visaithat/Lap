import Link from 'next/link';
import { ArrowRight, Banknote, Car, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { T } from '@/components/i18n';
import { Card, Eyebrow } from '@/components/ui';
import { productPages, type ProductSlug } from '@/data/productPages';

const iconForSlug: Record<ProductSlug, LucideIcon> = {
  eco: Car,
  loan: Banknote,
  'third-party': ShieldCheck,
};

const shortBlurb: Record<ProductSlug, { lo: string; en: string }> = {
  eco: { lo: 'ປົກປ້ອງຍານພາຫະນະ.', en: 'Cover your vehicle.' },
  loan: { lo: 'ປົກປ້ອງເງິນກູ້ຂອງທ່ານ.', en: 'Protect your loan obligations.' },
  'third-party': {
    lo: 'ຄ່າຮັບຜິດຊອບຕໍ່ບຸກຄົນທີ່ສາມ.',
    en: 'Liability for third parties.',
  },
};

const shortTitle: Record<ProductSlug, { lo: string; en: string }> = {
  eco: { lo: 'ປະກັນໄພລົດ', en: 'Vehicle Insurance' },
  loan: { lo: 'ປະກັນໄພເງິນກູ້', en: 'Loan Insurance' },
  'third-party': { lo: 'ປະກັນໄພບຸກຄົນທີ່ສາມ', en: 'Third-Party' },
};

type RelatedProductsProps = {
  current: ProductSlug;
};

/**
 * Two-card "Related products" section. Renders the OTHER two product
 * slugs (i.e. excludes the current one) so each product page links
 * to its siblings.
 */
export function RelatedProducts({ current }: RelatedProductsProps) {
  const others = productPages[current].related;
  return (
    <section className="lap-section bg-white">
      <div className="lap-container">
        <Eyebrow>
          <T lo="ຜະລິດຕະພັນທີ່ກ່ຽວຂ້ອງ" en="Related" />
        </Eyebrow>
        <h2 className="lap-h1 mt-4 mb-10">
          <T lo="ຜະລິດຕະພັນທີ່ກ່ຽວຂ້ອງ" en="Related products" />
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {others.map((slug) => {
            const Icon = iconForSlug[slug];
            return (
              <Link
                key={slug}
                href={`/products/${slug}`}
                className="block focus:outline-none"
              >
                <Card interactive className="block p-6">
                  <span className="bg-lap-primary-50 text-lap-primary-700 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="lap-h3 mb-2">
                    <T lo={shortTitle[slug].lo} en={shortTitle[slug].en} />
                  </h3>
                  <p className="text-lap-ink-600 mb-5 text-sm">
                    <T lo={shortBlurb[slug].lo} en={shortBlurb[slug].en} />
                  </p>
                  <span className="text-lap-primary-700 inline-flex items-center gap-1.5 text-sm font-semibold">
                    <T lo="ເບິ່ງລາຍລະອຽດ" en="See details" />
                    <ArrowRight
                      className="lap-arrow h-4 w-4"
                      aria-hidden
                    />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
