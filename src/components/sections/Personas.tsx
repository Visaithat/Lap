import { T } from '@/components/i18n';
import { Card, Eyebrow, StaggerGroup, StaggerItem } from '@/components/ui';
import type { BilingualBlock } from '@/data/productPages';

type PersonasProps = {
  items: BilingualBlock[];
};

/**
 * Three-card "Who it's for" grid shared by all three product pages.
 * The eyebrow and h2 copy is identical across all three source pages.
 */
export function Personas({ items }: PersonasProps) {
  return (
    <section className="lap-section">
      <div className="lap-container">
        <Eyebrow>
          <T lo="ເໝາະສຳລັບໃຜ" en="Who it's for" />
        </Eyebrow>
        <h2 className="lap-h1 mt-4 mb-10">
          <T lo="ເໝາະສຳລັບໃຜ" en="Who it's for" />
        </h2>
        <StaggerGroup className="grid gap-5 md:grid-cols-3" stagger={0.1}>
          {items.map((it, i) => (
            <StaggerItem key={i}>
              <Card className="h-full p-6">
                <h3 className="lap-h3 mb-2">
                  <T lo={it.titleLo} en={it.titleEn} />
                </h3>
                <p className="text-lap-ink-600 text-sm">
                  <T lo={it.descLo} en={it.descEn} />
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
