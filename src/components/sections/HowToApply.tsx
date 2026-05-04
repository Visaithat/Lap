import { T } from '@/components/i18n';
import { Eyebrow, StaggerGroup, StaggerItem } from '@/components/ui';
import { cn } from '@/lib/cn';

export type HowToApplyStep = {
  num: '01' | '02' | '03';
  titleLo: string;
  titleEn: string;
  bodyLo: string;
  bodyEn: string;
};

type HowToApplyProps = {
  steps: HowToApplyStep[];
};

/**
 * Three-step "How to apply" block shared by all three product pages.
 * Each page passes its own step copy because the wording in the source
 * HTML is page-specific.
 */
export function HowToApply({ steps }: HowToApplyProps) {
  return (
    <section className="lap-section bg-white">
      <div className="lap-container">
        <Eyebrow>
          <T lo="ວິທີສະໝັກ" en="How to apply" />
        </Eyebrow>
        <h2 className="lap-h1 mt-4 mb-12">
          <T lo="ສາມຂັ້ນຕອນ" en="Three steps" />
        </h2>
        <StaggerGroup
          as="ol"
          className="relative grid gap-6 sm:grid-cols-3"
          stagger={0.14}
        >
          <div
            aria-hidden
            className="bg-lap-border absolute top-5 right-[6%] left-[6%] hidden h-px sm:block"
          />
          {steps.map((s, i) => (
            <StaggerItem as="li" key={s.num}>
              <span
                className={cn(
                  'relative inline-flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-semibold',
                  i === steps.length - 1
                    ? 'bg-lap-primary-700 text-white'
                    : 'border-lap-border text-lap-primary-700 border bg-white',
                )}
              >
                {s.num}
              </span>
              <h3 className="lap-h3 mt-5 mb-1">
                <T lo={s.titleLo} en={s.titleEn} />
              </h3>
              <p className="text-lap-ink-600 text-sm">
                <T lo={s.bodyLo} en={s.bodyEn} />
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
