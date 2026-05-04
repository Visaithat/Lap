import { ShieldCheck, Zap, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { T } from '@/components/i18n';
import { Eyebrow, StaggerGroup, StaggerItem } from '@/components/ui';

type Value = {
  icon: LucideIcon;
  titleLo: string;
  titleEn: string;
  bodyLo: string;
  bodyEn: string;
};

const VALUES: Value[] = [
  {
    icon: ShieldCheck,
    titleLo: 'ໄວ້ວາງໃຈໄດ້',
    titleEn: 'Trustworthy',
    bodyLo:
      'ບໍລິສັດທີ່ກຳກັບໂດຍ ທະນາຄານແຫ່ງ ສປປ ລາວ ກວ່າ 15 ປີ ດ້ວຍບັນທຶກການຈ່າຍຄ່າສິນທົດແທນທີ່ໝັ້ນຄົງ.',
    bodyEn:
      'Regulated by the Bank of the Lao PDR for 15+ years with a steady record of paying claims.',
  },
  {
    icon: Zap,
    titleLo: 'ໄວວ່ອງ',
    titleEn: 'Fast',
    bodyLo:
      'ສະໜັບສະໜູນສາຍດ່ວນ 1819 ຕະຫລອດ 24 ຊົ່ວໂມງ — ແຈ້ງເຫດ ກວດສອບ ແລະ ຈ່າຍຄ່າສິນທົດແທນຢ່າງວ່ອງໄວ.',
    bodyEn:
      '1819 hotline answers 24/7 — quick reporting, assessment, and claim settlement.',
  },
  {
    icon: MapPin,
    titleLo: 'ບໍລິການທົ່ວປະເທດ',
    titleEn: 'Nationwide reach',
    bodyLo:
      'ມີຄູ່ສັນຍາທະນາຄານ ໂຮງໝໍ ແລະ ສູນບໍລິການລົດໃນທົ່ວ ສປປ ລາວ — ບ່ອນໃດທ່ານໄປ ພວກເຮົາໄປນຳ.',
    bodyEn:
      'Bank, hospital, and service-centre partners across the Lao PDR — wherever you go, we follow.',
  },
];

export function WhyLap() {
  return (
    <section className="lap-section">
      <div className="lap-container">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>
            <T lo="ເຫດຜົນທີ່ເລືອກພວກເຮົາ" en="Why us" />
          </Eyebrow>
          <h2 className="lap-h1 mt-4">
            <T lo="ເປັນຫຍັງຈຶ່ງເລືອກ LAP" en="Why choose LAP" />
          </h2>
        </div>

        <StaggerGroup className="grid gap-6 md:grid-cols-3 md:gap-8" stagger={0.12}>
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <StaggerItem key={v.titleEn} className="relative">
                <span className="bg-lap-primary-700 mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white">
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="lap-h3 mb-2">
                  <T lo={v.titleLo} en={v.titleEn} />
                </h3>
                <p className="text-lap-ink-600 max-w-prose">
                  <T lo={v.bodyLo} en={v.bodyEn} />
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
