import { Download } from 'lucide-react';
import { Card, StaggerGroup, StaggerItem } from '@/components/ui';
import { T } from '@/components/i18n';
import { cn } from '@/lib/cn';
import type { DownloadGroupData, DownloadItem } from '@/data/downloads';

const toneClass: Record<DownloadItem['tone'], string> = {
  danger: 'bg-lap-danger-600/10 text-lap-danger-600',
  primary: 'bg-lap-primary-50 text-lap-primary-700',
};

/**
 * Renders a single download group: a section heading followed by a
 * responsive grid of download cards. Each card lifts on hover via
 * `lap-card-interactive`.
 */
export function DownloadGroup({ data }: { data: DownloadGroupData }) {
  return (
    <section aria-labelledby={`group-${data.id}`}>
      <h2 id={`group-${data.id}`} className="lap-h2 mb-5">
        <T lo={data.groupLo} en={data.groupEn} />
      </h2>
      <StaggerGroup
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        stagger={0.07}
      >
        {data.items.map((item) => {
          const Icon = item.icon;
          return (
            <StaggerItem key={item.id}>
              <Card interactive className="h-full p-5">
                <a
                  href={item.href}
                  download
                  className="flex items-start gap-4 outline-none"
                  aria-label={`Download ${item.titleEn}`}
                >
                  <span
                    className={cn(
                      'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl',
                      toneClass[item.tone],
                    )}
                  >
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lap-ink-900 mb-1 font-semibold leading-snug">
                      <T lo={item.titleLo} en={item.titleEn} />
                    </h3>
                    <p className="text-lap-ink-600 mb-2 text-sm leading-relaxed">
                      <T lo={item.descLo} en={item.descEn} />
                    </p>
                    <span className="text-lap-ink-400 font-mono text-xs">
                      {item.meta}
                    </span>
                  </div>
                  <Download
                    className="text-lap-primary-700 mt-1 h-5 w-5 shrink-0"
                    aria-hidden
                  />
                </a>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
