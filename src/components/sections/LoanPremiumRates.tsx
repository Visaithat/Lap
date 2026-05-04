import { Banknote, Globe, UserCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { T } from '@/components/i18n';
import { Eyebrow } from '@/components/ui';
import {
  loanEligibilityCards,
  loanRateNoteEn,
  loanRateNoteLo,
  loanRateRows,
  type LoanEligibilityIcon,
} from '@/data/loan';

const iconMap: Record<LoanEligibilityIcon, LucideIcon> = {
  'user-check': UserCheck,
  globe: Globe,
  banknote: Banknote,
};

/**
 * "Premium rates" — 4-row rate table (10–50M ... 201–800M) plus 3 eligibility
 * cards. Ported from `lap/products/loan.html` lines 99-146.
 */
export function LoanPremiumRates() {
  return (
    <section className="lap-section bg-white">
      <div className="lap-container">
        <Eyebrow>
          <T lo="ຕາຕະລາງຄ່າເບ້ຍ" en="Premium rates" />
        </Eyebrow>
        <h2 className="lap-h1 mt-4 mb-3">
          <T lo="ອັດຕາຄ່າເບ້ຍປະກັນໄພ" en="Premium rates" />
        </h2>
        <p className="text-lap-ink-600 mb-6 max-w-prose text-base sm:mb-8 sm:text-lg">
          <T
            lo="ຄ່າເບ້ຍຄິດໄລ່ຈາກວົງເງິນກູ້ ຫຼື ວົງເງິນຄ້ຳປະກັນຕໍ່ປີ. ຍິ່ງວົງເງິນສູງ ອັດຕາຍິ່ງສະເພາະ."
            en="Premium is calculated as a percentage of the loan amount or guarantee amount per year. The higher the loan, the lower the rate."
          />
        </p>

        <div className="lap-card max-w-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="bg-lap-primary-700 text-white">
                  <th className="w-12 px-3 py-3 text-left font-mono font-semibold sm:w-16 sm:px-5 sm:py-4">
                    ລ/ດ
                  </th>
                  <th className="px-3 py-3 text-left font-semibold sm:px-5 sm:py-4">
                    <T
                      lo="ວົງເງິນຄ້ຳປະກັນ (ກີບ)"
                      en="Guarantee amount (LAK)"
                    />
                  </th>
                  <th className="px-3 py-3 text-right font-semibold sm:px-5 sm:py-4">
                    <T lo="ອັດຕາຄ່າເບ້ຍ" en="Premium rate" />
                  </th>
                </tr>
              </thead>
              <tbody className="divide-lap-border divide-y">
                {loanRateRows.map((row) => (
                  <tr key={row.idx}>
                    <td className="text-lap-ink-600 px-3 py-3 font-mono sm:px-5 sm:py-4">
                      {row.idx}
                    </td>
                    <td className="px-3 py-3 font-mono sm:px-5 sm:py-4">
                      <T lo={row.rangeLo} en={row.rangeEn} />
                    </td>
                    <td className="text-lap-primary-700 px-3 py-3 text-right font-mono font-semibold sm:px-5 sm:py-4">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-lap-ink-600 mt-6 max-w-prose text-xs">
          <T lo={loanRateNoteLo} en={loanRateNoteEn} />
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {loanEligibilityCards.map((card) => {
            const Icon = iconMap[card.iconKey];
            return (
              <div key={card.iconKey} className="lap-card p-5 sm:p-6">
                <span className="bg-lap-primary-50 text-lap-primary-700 mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="lap-h3 mb-2">
                  <T lo={card.titleLo} en={card.titleEn} />
                </h3>
                <p className="text-lap-ink-600 text-sm">
                  <T lo={card.bodyLo} en={card.bodyEn} />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
