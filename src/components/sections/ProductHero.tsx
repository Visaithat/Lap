import Link from 'next/link';
import { Banknote, Car, Download, Phone, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { T } from '@/components/i18n';
import { Pill } from '@/components/ui';
import type { ProductPageMeta, ProductSlug } from '@/data/productPages';

const iconForSlug: Record<ProductSlug, LucideIcon> = {
  eco: Car,
  loan: Banknote,
  'third-party': ShieldCheck,
};

type ProductHeroProps = {
  meta: ProductPageMeta;
};

/**
 * Page hero for the three product pages: pill badge, h1, intro paragraph,
 * two CTAs (download form + tel hotline), and a large product icon
 * inside an aspect-locked tinted square on the right.
 *
 * Server component — pure rendering, no interactivity beyond plain links.
 */
export function ProductHero({ meta }: ProductHeroProps) {
  const Icon = iconForSlug[meta.slug];
  return (
    <section className="py-8 sm:py-10 md:py-16">
      <div className="lap-container grid items-center gap-8 sm:gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Pill className="mb-4 sm:mb-5" icon={<Icon className="h-3.5 w-3.5" aria-hidden />}>
            <T lo={meta.badgeLo} en={meta.badgeEn} />
          </Pill>
          <h1 className="lap-h1 mb-4 sm:mb-5">
            <T lo={meta.titleLo} en={meta.titleEn} />
          </h1>
          <p className="text-lap-ink-600 max-w-prose text-base sm:text-lg">
            <T lo={meta.introLo} en={meta.introEn} />
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
            <Link href="/downloads" className="lap-btn lap-btn-primary">
              <T lo="ດາວໂຫລດແບບຟອມ" en="Download form" />
              <Download className="h-4 w-4" aria-hidden />
            </Link>
            <a href="tel:0309029999" className="lap-btn lap-btn-secondary">
              <Phone className="h-4 w-4" aria-hidden />
              030 902 9999
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="bg-lap-primary-50 mx-auto flex aspect-[4/5] max-w-[260px] items-center justify-center rounded-[28px] p-6 sm:max-w-[320px] sm:p-8 lg:max-w-none">
            <Icon
              className="text-lap-primary-700 h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
              strokeWidth={1.25}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
