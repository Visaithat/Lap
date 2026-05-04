import { CheckCircle2 } from 'lucide-react';
import { T } from '@/components/i18n';
import { Eyebrow, StaggerGroup, StaggerItem } from '@/components/ui';
import type { BilingualBlock } from '@/data/productPages';

type WhatsCoveredProps = {
  items: BilingualBlock[];
  /** Section H2 — defaults to "Comprehensive cover" / Lao equivalent. */
  headingLo?: string;
  headingEn?: string;
};

/**
 * Two-column "What's covered" check-list shared by all three product pages.
 * The default heading copy matches the eco page; loan and third-party
 * pages override via props to match their own source HTML.
 */
export function WhatsCovered({
  items,
  headingLo = 'ຄວາມຄຸ້ມຄອງຄອບຄຸມຫຼາຍດ້ານ',
  headingEn = 'Comprehensive cover',
}: WhatsCoveredProps) {
  return (
    <section className="lap-section bg-white">
      <div className="lap-container">
        <Eyebrow>
          <T lo="ສິ່ງທີ່ຄຸ້ມຄອງ" en="What's covered" />
        </Eyebrow>
        <h2 className="lap-h1 mt-4 mb-10">
          <T lo={headingLo} en={headingEn} />
        </h2>
        <StaggerGroup
          as="ul"
          className="grid max-w-4xl gap-5 md:grid-cols-2"
          stagger={0.07}
        >
          {items.map((it, i) => (
            <StaggerItem
              as="li"
              key={i}
              className="bg-lap-primary-50/40 border-lap-primary-50 flex gap-4 rounded-2xl border p-5"
            >
              <CheckCircle2
                className="text-lap-primary-700 mt-0.5 h-6 w-6 shrink-0"
                aria-hidden
              />
              <div>
                <span className="text-lap-ink-900 mb-1 block font-semibold">
                  <T lo={it.titleLo} en={it.titleEn} />
                </span>
                <span className="text-lap-ink-600 text-sm">
                  <T lo={it.descLo} en={it.descEn} />
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
