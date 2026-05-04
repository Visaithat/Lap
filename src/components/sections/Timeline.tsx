import Image from 'next/image';
import { T } from '@/components/i18n';
import { Pill } from '@/components/ui';
import { cn } from '@/lib/cn';
import type { Milestone } from '@/data/timeline';

type TimelineProps = {
  milestones: Milestone[];
};

/**
 * Vertical timeline. Mobile: single rail at left (`left-4`), each
 * milestone stacks below its predecessor. `md+`: alternating left/right
 * pattern around a centre rail (`md:left-1/2`).
 *
 * Server component — no client state needed.
 */
export function Timeline({ milestones }: TimelineProps) {
  return (
    <ol className="relative mx-auto max-w-4xl">
      {/* Vertical rail */}
      <div
        aria-hidden
        className="bg-lap-border absolute top-2 bottom-2 left-4 w-px md:left-1/2"
      />
      {milestones.map((m, idx) => {
        const Icon = m.icon;
        const isLeft = idx % 2 === 0; // even index sits on the left at md+
        return (
          <li
            key={m.id}
            className={cn(
              'relative pl-12 md:grid md:grid-cols-2 md:gap-10 md:pl-0',
              idx < milestones.length - 1 && 'mb-12',
            )}
          >
            {/* Heading column */}
            <div
              className={cn(
                'relative',
                isLeft ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12',
              )}
            >
              {/* Dot */}
              <span
                aria-hidden
                className={cn(
                  'border-lap-surface-50 absolute top-1 h-4 w-4 rounded-full border-4',
                  m.accent ? 'bg-lap-accent-500' : 'bg-lap-primary-700',
                  'left-[-2.25rem]',
                  isLeft
                    ? 'md:right-[-0.5rem] md:left-auto'
                    : 'md:left-[-0.5rem]',
                )}
              />
              <Pill
                className={cn(
                  'mb-3 inline-flex',
                  m.accent &&
                    'bg-lap-accent-500/20 text-lap-accent-600 border-lap-accent-500/30',
                )}
                icon={<Icon className="h-3.5 w-3.5" aria-hidden />}
              >
                <T lo={m.dateLo} en={m.dateEn} />
              </Pill>
              <h2 className="lap-h2 mb-2">
                <T lo={m.titleLo} en={m.titleEn} />
              </h2>
            </div>
            {/* Body column */}
            <div
              className={cn(
                'mt-2 md:mt-0',
                isLeft
                  ? 'md:pl-12'
                  : 'md:order-1 md:pr-12 md:text-right',
              )}
            >
              {m.photoSrc && (
                <div className="border-lap-border mb-4 overflow-hidden rounded-2xl border shadow-[0_10px_30px_-10px_rgba(2,144,218,0.25)]">
                  <Image
                    src={m.photoSrc}
                    alt={`${m.titleEn} — ${m.dateEn}`}
                    width={1200}
                    height={800}
                    sizes="(min-width: 768px) 480px, 90vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              )}
              <p className="text-lap-ink-600">
                <T lo={m.bodyLo} en={m.bodyEn} />
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
