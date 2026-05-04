import { T } from '@/components/i18n';
import { Eyebrow } from '@/components/ui';
import { cn } from '@/lib/cn';
import { coverageTiers, premiumCards } from '@/data/coverage';

export function PremiumCards() {
  return (
    <div className="lap-container -mt-2 pb-2">
      <div className="grid gap-5 md:grid-cols-2">
        {premiumCards.map((card) => (
          <div key={card.id} className="lap-card p-5 sm:p-6">
            <Eyebrow>
              <T lo="ຄ່າເບ້ຍປະກັນໄພຕໍ່ປີ" en="Annual premium" />
            </Eyebrow>
            <h3 className="lap-h3 mt-3 mb-1">
              <T lo={card.titleLo} en={card.titleEn} />
            </h3>
            <p className="text-lap-ink-600 mb-5 text-sm">
              <T lo={card.subtitleLo} en={card.subtitleEn} />
            </p>
            <dl className="grid grid-cols-3 gap-2 text-center sm:grid-cols-5">
              {coverageTiers.map((tier) => {
                const highlighted = tier.id === card.highlightedTier;
                return (
                  <div
                    key={tier.id}
                    className={cn(
                      'rounded-lg py-1',
                      highlighted && 'bg-lap-accent-500/15',
                    )}
                  >
                    <dt
                      className={cn(
                        'font-mono text-[11px] sm:text-xs',
                        highlighted ? 'text-lap-ink-700' : 'text-lap-ink-600',
                      )}
                    >
                      {tier.labelEn}
                    </dt>
                    <dd className="text-lap-ink-900 mt-1 font-mono text-xs font-semibold sm:text-sm">
                      {card.premiums[tier.id]}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        ))}
      </div>
      <p className="text-lap-ink-600 mt-6 text-xs">
        <T
          lo="ຫມາຍເຫດ: ຕົວເລກທັງໝົດເປັນ ກີບ (LAK). ຕິດຕໍ່ສາຍດ່ວນ 1819 ຫຼື 030 902 9999 ສຳລັບໃບສະເໜີລາຄາລາຍລະອຽດ."
          en="Note: All amounts in Lao kip (LAK). Call 1819 or 030 902 9999 for a detailed quote."
        />
      </p>
    </div>
  );
}
