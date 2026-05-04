import { T } from '@/components/i18n';
import { Eyebrow, StaggerGroup, StaggerItem } from '@/components/ui';
import { cn } from '@/lib/cn';

type Step = {
  num: '01' | '02' | '03';
  titleLo: string;
  titleEn: string;
  bodyLo: string;
  bodyEn: string;
};

const STEPS: Step[] = [
  {
    num: '01',
    titleLo: 'ເລືອກຜະລິດຕະພັນ',
    titleEn: 'Choose a product',
    bodyLo: 'ເລືອກຄວາມຄຸ້ມຄອງທີ່ເໝາະກັບຄວາມຕ້ອງການຂອງທ່ານ.',
    bodyEn: 'Pick the cover that fits your needs.',
  },
  {
    num: '02',
    titleLo: 'ກຣອກແບບຟອມ',
    titleEn: 'Submit a form',
    bodyLo: 'ດາວໂຫລດແບບຟອມ ຫຼື ກຣອກໂດຍຕົວແທນຂອງພວກເຮົາ.',
    bodyEn: 'Download the form or fill it in with our agent.',
  },
  {
    num: '03',
    titleLo: 'ຮັບການຄຸ້ມຄອງ',
    titleEn: 'Get covered',
    bodyLo: 'ກົມທະບຽນຮັບປະກັນພາຍໃນ 24 ຊົ່ວໂມງ.',
    bodyEn: 'Policy issued within 24 hours.',
  },
];

export function HowItWorks() {
  return (
    <section className="lap-section bg-white">
      <div className="lap-container">
        <div className="grid items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>
              <T lo="ວິທີສະໝັກ" en="How it works" />
            </Eyebrow>
            <h2 className="lap-h1 mt-4">
              <T lo="ສາມຂັ້ນຕອນ ງ່າຍດາຍ" en="Three simple steps" />
            </h2>
            <p className="text-lap-ink-600 mt-3 max-w-prose">
              <T
                lo="ບໍ່ມີຄຳສັບກົດໝາຍຍາກໆ ບໍ່ມີການລໍຖ້າດົນ — ເລີ່ມຕົ້ນໃນວັນດຽວ."
                en="No legal jargon, no waiting — start the same day."
              />
            </p>
          </div>
          <StaggerGroup
            as="ul"
            className="relative grid gap-6 sm:grid-cols-3 md:col-span-8 md:mt-10"
            stagger={0.14}
          >
            {/* Connector hairline rule between steps on sm+ */}
            <div
              aria-hidden
              className="bg-lap-border absolute top-5 right-[6%] left-[6%] hidden h-px sm:block"
            />

            {STEPS.map((step, i) => {
              const isLast = i === STEPS.length - 1;
              return (
                <StaggerItem as="li" key={step.num} className="relative">
                  <span
                    className={cn(
                      'relative inline-flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-semibold',
                      isLast
                        ? 'bg-lap-primary-700 text-white'
                        : 'border-lap-border text-lap-primary-700 border bg-white',
                    )}
                  >
                    {step.num}
                  </span>
                  <h3 className="lap-h3 mt-5 mb-1">
                    <T lo={step.titleLo} en={step.titleEn} />
                  </h3>
                  <p className="text-lap-ink-600 text-sm">
                    <T lo={step.bodyLo} en={step.bodyEn} />
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
