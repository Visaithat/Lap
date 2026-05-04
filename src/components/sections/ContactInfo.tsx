import type { ReactNode } from 'react';
import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Card, Pill } from '@/components/ui';
import { T } from '@/components/i18n';

const HEAD_OFFICE_MAPS_URL =
  'https://www.google.com/maps/@17.9748583,102.6225562,18.18z?hl=lo&entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D';

/**
 * Left-column tiles on the contact page: Address, Phone, Email, Hours.
 * Each value is rendered as a tappable anchor (`tel:`, `mailto:`, Maps URL)
 * so it works on mobile and assistive tech.
 */
export function ContactInfo() {
  return (
    <div className="space-y-5">
      <InfoCard
        icon={MapPin}
        labelLo="ສຳນັກງານໃຫຍ່"
        labelEn="Head office"
      >
        <p className="text-lap-ink-600 text-sm leading-relaxed">
          <T
            lo="ຊັ້ນ 2, ອາຄານທະນາຄານ MBL, ຖະໜົນ ໄກສອນ ພົມວິຫານ, ບ້ານ ໂພນໄຊ, ເມືອງ ສີສັດຕະນາກ, ນະຄອນຫລວງວຽງຈັນ"
            en="Level 2, MBL Bank Building, Kaisone Phomvihane Rd, Phonsai Village, Sisattanak District, Vientiane"
          />
        </p>
        <a
          href={HEAD_OFFICE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-lap-primary-50 text-lap-primary-700 hover:bg-lap-primary-100 mt-4 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors"
        >
          <MapPin className="h-4 w-4" aria-hidden />
          <T lo="ເບິ່ງໃນ Google Maps" en="View on Google Maps" />
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      </InfoCard>

      <InfoCard icon={Phone} labelLo="ໂທ" labelEn="Phone">
        <ul className="space-y-1.5 text-sm">
          <li>
            <a
              href="tel:0309029999"
              className="hover:text-lap-primary-700 font-semibold tabular-nums transition-colors"
            >
              030 902 9999
            </a>
          </li>
          <li>
            <a
              href="tel:02098556666"
              className="hover:text-lap-primary-700 font-semibold tabular-nums transition-colors"
            >
              020 9855 6666
            </a>
          </li>
          <li className="border-lap-border mt-2 flex items-center gap-2 border-t pt-2">
            <Pill className="bg-lap-danger-600/10 text-lap-danger-600 border-lap-danger-600/30">
              24/7
            </Pill>
            <a
              href="tel:1819"
              className="text-lap-danger-600 font-bold tabular-nums"
              aria-label="Emergency hotline 1819"
            >
              1819
            </a>
          </li>
        </ul>
      </InfoCard>

      <InfoCard icon={Mail} labelLo="ອີເມວ" labelEn="Email">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=Contract@lap.com.la"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lap-primary-700 text-sm font-semibold hover:underline"
        >
          Contract@lap.com.la
        </a>
      </InfoCard>

      <InfoCard icon={Clock} labelLo="ເວລາເຮັດວຽກ" labelEn="Office hours">
        <p className="text-lap-ink-600 text-sm leading-relaxed">
          <T
            lo="ຈັນ – ສຸກ · 08:30 – 17:00"
            en="Mon – Fri · 08:30 – 17:00"
          />
          <br />
          <T
            lo="ສາຍດ່ວນ 1819 ເປີດ 24 ຊົ່ວໂມງ ທຸກວັນ"
            en="1819 hotline available 24/7"
          />
        </p>
      </InfoCard>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  labelLo,
  labelEn,
  children,
}: {
  icon: LucideIcon;
  labelLo: string;
  labelEn: string;
  children: ReactNode;
}) {
  return (
    <Card className="p-6">
      <span className="bg-lap-primary-50 text-lap-primary-700 mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="lap-h3 mb-2">
        <T lo={labelLo} en={labelEn} />
      </h3>
      {children}
    </Card>
  );
}
