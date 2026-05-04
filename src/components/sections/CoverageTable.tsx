import { T } from '@/components/i18n';
import { Eyebrow } from '@/components/ui';
import {
  coverageRows,
  coverageTiers,
  type CoverageRow,
} from '@/data/coverage';
import { cn } from '@/lib/cn';

/**
 * Five-tier ECO coverage comparison table. Rendered only on the
 * `/products/eco` page (drives the `hasCoverageTable` flag).
 *
 * Mobile: the table itself is wrapped in `overflow-x-auto` so it
 * scrolls horizontally; the surrounding card clips visually but the
 * inner div lets the user pan to see all five tiers.
 *
 * The right-most column (ECO 5) is highlighted as the recommended
 * tier — header cell uses the accent yellow, body cells get a tinted
 * background.
 */
export function CoverageTable() {
  const lastTierId = coverageTiers[coverageTiers.length - 1].id;
  return (
    <section className="lap-section">
      <div className="lap-container">
        <Eyebrow>
          <T lo="ຕາຕະລາງຄຸ້ມຄອງ" en="Coverage table" />
        </Eyebrow>
        <h2 className="lap-h1 mt-4 mb-3">
          <T lo="5 ແພັກເກັດ ECO" en="Five ECO packages" />
        </h2>
        <p className="text-lap-ink-600 mb-6 max-w-prose text-base sm:mb-8 sm:text-lg">
          <T
            lo="ເລືອກລະດັບຄວາມຄຸ້ມຄອງທີ່ເໝາະກັບລົດ ແລະ ງົບປະມານຂອງທ່ານ. ຕົວເລກທັງໝົດເປັນ ກີບ (LAK)."
            en="Pick the level of cover that fits your vehicle and budget. All amounts in Lao kip (LAK)."
          />
        </p>
        <p className="text-lap-ink-400 mb-2 text-xs sm:hidden">
          <T
            lo="↔ ເລື່ອນຊ້າຍ-ຂວາເພື່ອເບິ່ງທັງໝົດ"
            en="↔ Scroll horizontally to see all tiers"
          />
        </p>
        <div className="lap-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-xs sm:min-w-[900px] sm:text-sm">
              <thead>
                <tr className="bg-lap-primary-700 text-white">
                  <th className="min-w-[160px] px-3 py-3 text-left font-semibold sm:w-[34%] sm:px-5 sm:py-4">
                    <T lo="ລາຍລະອຽດການຄຸ້ມຄອງ" en="Coverage details" />
                  </th>
                  {coverageTiers.map((tier) => (
                    <th
                      key={tier.id}
                      className={cn(
                        'px-2.5 py-3 text-right font-mono font-semibold sm:px-4 sm:py-4',
                        tier.id === lastTierId &&
                          'bg-lap-accent-500/90 text-lap-ink-900',
                      )}
                    >
                      <T lo={tier.labelLo} en={tier.labelEn} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-lap-border divide-y">
                {coverageRows.map((row, idx) => (
                  <Row key={idx} row={row} highlightTierId={lastTierId} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-lap-ink-600 mt-6 text-xs">
          <T
            lo="ຫມາຍເຫດ: ຕົວເລກທັງໝົດເປັນ ກີບ (LAK). ຕິດຕໍ່ສາຍດ່ວນ 1819 ຫຼື 030 902 9999 ສຳລັບໃບສະເໜີລາຄາລາຍລະອຽດ."
            en="Note: All amounts in Lao kip (LAK). Call 1819 or 030 902 9999 for a detailed quote."
          />
        </p>
      </div>
    </section>
  );
}

function Row({
  row,
  highlightTierId,
}: {
  row: CoverageRow;
  highlightTierId: string;
}) {
  // Group-header row: spans every column, no values rendered.
  if (row.groupLo && row.groupEn) {
    return (
      <tr className="bg-lap-primary-50">
        <td
          colSpan={1 + coverageTiers.length}
          className="text-lap-primary-700 px-3 py-2.5 font-semibold sm:px-5 sm:py-3"
        >
          <T lo={row.groupLo} en={row.groupEn} />
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td className={cn('px-3 py-2.5 align-top sm:px-5 sm:py-3', row.indent && 'pl-6 sm:pl-9')}>
        <span className="text-lap-ink-900 block font-medium">
          <T lo={row.itemLo ?? ''} en={row.itemEn ?? ''} />
        </span>
        {row.noteLo && row.noteEn && (
          <span className="text-lap-ink-600 mt-0.5 block text-[11px] sm:text-xs">
            <T lo={row.noteLo} en={row.noteEn} />
          </span>
        )}
      </td>
      {coverageTiers.map((tier) => {
        const value = row.values?.[tier.id] ?? '';
        const sub = row.subValues?.[tier.id];
        return (
          <td
            key={tier.id}
            className={cn(
              'px-2.5 py-2.5 text-right font-mono sm:px-4 sm:py-3',
              tier.id === highlightTierId && 'bg-lap-accent-500/10',
            )}
          >
            {value}
            {sub && (
              <span className="text-lap-ink-400 block text-[11px] sm:text-xs">{sub}</span>
            )}
          </td>
        );
      })}
    </tr>
  );
}
