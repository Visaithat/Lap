import { T } from '@/components/i18n';
import { Eyebrow } from '@/components/ui';
import { cn } from '@/lib/cn';
import {
  abDriverRows,
  abFootnoteEn,
  abFootnoteLo,
  abHighlightedPackage,
  abMainRows,
  abPackages,
  type ABRow,
} from '@/data/thirdParty';

/**
 * Third-party AB00–AB05 coverage tables. The main table covers bodily
 * injury and property damage groups; the driver table sits beneath as a
 * subsection. Ported from `lap/products/third-party.html` lines 61-194.
 */
export function ThirdPartyCoverageTable() {
  return (
    <section className="lap-section">
      <div className="lap-container">
        <Eyebrow>
          <T lo="ຕາຕະລາງຄຸ້ມຄອງ" en="Coverage table" />
        </Eyebrow>
        <h2 className="lap-h1 mt-4 mb-3">
          <T lo="6 ທາງເລືອກ AB00 – AB05" en="Six options AB00 – AB05" />
        </h2>
        <p className="text-lap-ink-600 mb-6 max-w-prose text-base sm:mb-8 sm:text-lg">
          <T
            lo="ເລືອກລະດັບວົງເງິນຄຸ້ມຄອງສຳລັບຄວາມຮັບຜິດຊອບຕໍ່ບຸກຄົນທີ່ສາມ. ຕົວເລກທັງໝົດເປັນ ກີບ (LAK)."
            en="Choose your level of third-party liability cover. All amounts in Lao kip (LAK)."
          />
        </p>

        <p className="text-lap-ink-400 mb-2 text-xs sm:hidden">
          <T
            lo="↔ ເລື່ອນຊ້າຍ-ຂວາເພື່ອເບິ່ງທຸກແພັກເກັດ"
            en="↔ Scroll horizontally to see all packages"
          />
        </p>
        <ABTable rows={abMainRows} />

        <h3 className="lap-h3 mt-10 mb-3">
          <T
            lo="ການຄຸ້ມຄອງຜູ້ຂັບຂີ່ (ລົດ 4 ລໍ້)"
            en="Coverage for driver (4-wheel vehicles)"
          />
        </h3>
        <p className="text-lap-ink-600 mb-4 text-sm">
          <T
            lo="ວົງເງິນຄຸ້ມຄອງສຳລັບຜູ້ຂັບຂີ່ — ເທົ່າກັນກັບວົງເງິນຄຸ້ມຄອງດ້ານຮ່າງກາຍຂອງບຸກຄົນທີ່ສາມ."
            en="Driver coverage matches third-party bodily-injury limits."
          />
        </p>
        <p className="text-lap-ink-400 mb-2 text-xs sm:hidden">
          <T
            lo="↔ ເລື່ອນຊ້າຍ-ຂວາເພື່ອເບິ່ງທຸກແພັກເກັດ"
            en="↔ Scroll horizontally to see all packages"
          />
        </p>
        <ABTable rows={abDriverRows} />

        <p className="text-lap-ink-600 mt-6 text-xs">
          <T lo={abFootnoteLo} en={abFootnoteEn} />
        </p>
      </div>
    </section>
  );
}

function ABTable({ rows }: { rows: ABRow[] }) {
  return (
    <div className="lap-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-xs sm:min-w-[900px] sm:text-sm">
          <thead>
            <tr className="bg-lap-accent-500 text-lap-ink-900">
              <th className="min-w-[150px] px-3 py-3 text-left font-semibold sm:w-[32%] sm:px-5 sm:py-4">
                <T lo="ການຄຸ້ມຄອງ" en="Coverage" />
              </th>
              {abPackages.map((p) => (
                <th
                  key={p.id}
                  className={cn(
                    'px-2 py-2.5 text-right font-mono font-semibold sm:px-3 sm:py-4',
                    p.id === abHighlightedPackage &&
                      'bg-lap-primary-700 text-white',
                  )}
                >
                  {p.id}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-lap-border divide-y">
            {rows.map((row, idx) => (
              <Row key={idx} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Row({ row }: { row: ABRow }) {
  if (row.groupLo && row.groupEn) {
    return (
      <tr className="bg-lap-primary-50/40">
        <td
          colSpan={1 + abPackages.length}
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
        <span className="text-lap-ink-900 block">
          <T lo={row.itemLo ?? ''} en={row.itemEn ?? ''} />
        </span>
        {row.noteLo && row.noteEn && (
          <span className="text-lap-ink-600 mt-0.5 block text-[11px] sm:text-xs">
            <T lo={row.noteLo} en={row.noteEn} />
          </span>
        )}
      </td>
      {abPackages.map((p) => (
        <td
          key={p.id}
          className={cn(
            'px-2 py-2.5 text-right font-mono sm:px-3 sm:py-3',
            p.id === abHighlightedPackage && 'bg-lap-primary-50',
          )}
        >
          {row.values?.[p.id] ?? ''}
        </td>
      ))}
    </tr>
  );
}
