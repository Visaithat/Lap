import { Shield, Users, Clock, Landmark } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { T } from '@/components/i18n';
import { AnimatedCounter, StaggerGroup, StaggerItem } from '@/components/ui';

type CounterStat = {
  kind: 'counter';
  icon: LucideIcon;
  to: number;
  suffix: string;
  subLo: string;
  subEn: string;
};

type TextStat = {
  kind: 'text';
  icon: LucideIcon;
  headlineLo: string;
  headlineEn: string;
  subLo: string;
  subEn: string;
};

type Stat = CounterStat | TextStat;

const STATS: Stat[] = [
  {
    kind: 'counter',
    icon: Shield,
    to: 15,
    suffix: '+',
    subLo: 'ປີໃນຕະຫຼາດ',
    subEn: 'Years in market',
  },
  {
    kind: 'counter',
    icon: Users,
    to: 50000,
    suffix: '+',
    subLo: 'ລູກຄ້າ',
    subEn: 'Customers',
  },
  {
    kind: 'text',
    icon: Clock,
    headlineLo: '24/7',
    headlineEn: '24/7',
    subLo: 'ບໍລິການ',
    subEn: 'Service',
  },
  {
    kind: 'text',
    icon: Landmark,
    headlineLo: 'ກຳກັບໂດຍ',
    headlineEn: 'Regulated by',
    subLo: 'ທະນາຄານແຫ່ງ ສປປ ລາວ',
    subEn: 'Bank of the Lao PDR',
  },
];

export function TrustStrip() {
  return (
    <section className="border-lap-border border-y bg-white">
      <div className="lap-container py-6 md:py-8">
        <StaggerGroup
          as="ul"
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
          stagger={0.12}
        >
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <StaggerItem
                as="li"
                key={idx}
                className="flex items-start gap-3"
              >
                <span className="bg-lap-primary-50 text-lap-primary-700 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="leading-snug">
                  {stat.kind === 'counter' ? (
                    <AnimatedCounter
                      to={stat.to}
                      suffix={stat.suffix}
                      className="text-lap-ink-900 block text-base font-bold tabular-nums md:text-lg"
                    />
                  ) : (
                    <T
                      as="span"
                      className="text-lap-ink-900 block text-base font-bold tabular-nums md:text-lg"
                      lo={stat.headlineLo}
                      en={stat.headlineEn}
                    />
                  )}
                  <T
                    as="span"
                    className="text-lap-ink-600 block text-sm"
                    lo={stat.subLo}
                    en={stat.subEn}
                  />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
