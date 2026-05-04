import { T } from '@/components/i18n';
import { Eyebrow } from '@/components/ui';
import { cn } from '@/lib/cn';
import { loanClaimCases, loanWorkedExample } from '@/data/loan';

/**
 * "How LAP pays out" — three claim-payout case cards (100% / 50% / 25%)
 * followed by a single worked-example callout. Ported from
 * `lap/products/loan.html` lines 61-96.
 */
export function LoanClaimPayouts() {
  return (
    <section className="lap-section">
      <div className="lap-container">
        <Eyebrow>
          <T lo="ການຈ່າຍຄ່າຄຸ້ມຄອງ" en="Claim payouts" />
        </Eyebrow>
        <h2 className="lap-h1 mt-4 mb-3">
          <T lo="LAP ຈ່າຍຄ່າຄຸ້ມຄອງເທົ່າໃດ?" en="How LAP pays out" />
        </h2>
        <p className="text-lap-ink-600 mb-6 max-w-prose text-base sm:mb-8 sm:text-lg">
          <T
            lo="ຄ່າຄຸ້ມຄອງຄິດໄລ່ຈາກຍອດເງິນກູ້ຄົງເຫລືອໃນວັນທີເກີດເຫດການ. ສາມກໍລະນີຫຼັກ:"
            en="Claims are calculated against the outstanding loan balance on the date of the event. Three scenarios:"
          />
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {loanClaimCases.map((c) => (
            <div
              key={c.id}
              className={cn(
                'lap-card border-t-4 p-5 sm:p-6',
                c.highlightAccent
                  ? 'border-t-lap-accent-500'
                  : 'border-t-lap-primary-700',
              )}
            >
              <span className="text-lap-ink-600 font-mono text-xs">
                CASE {c.id}
              </span>
              <div
                className={cn(
                  'mt-2 mb-3 font-mono text-2xl font-semibold sm:text-3xl',
                  c.highlightAccent
                    ? 'text-lap-ink-900'
                    : 'text-lap-primary-700',
                )}
              >
                {c.pct}
              </div>
              <h3 className="lap-h3 mb-2">
                <T lo={c.titleLo} en={c.titleEn} />
              </h3>
              <p className="text-lap-ink-600 text-sm">
                <T lo={c.bodyLo} en={c.bodyEn} />
              </p>
            </div>
          ))}
        </div>

        <div className="lap-card bg-lap-primary-50/30 border-lap-primary-50 mt-8 p-5 sm:p-6 md:p-8">
          <Eyebrow>
            <T lo="ຕົວຢ່າງ" en="Worked example" />
          </Eyebrow>
          <h3 className="lap-h3 mt-3 mb-4">
            <T lo={loanWorkedExample.titleLo} en={loanWorkedExample.titleEn} />
          </h3>
          <p className="text-lap-ink-700 max-w-prose">
            <T lo={loanWorkedExample.bodyLo} en={loanWorkedExample.bodyEn} />
          </p>
        </div>
      </div>
    </section>
  );
}
