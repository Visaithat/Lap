import type { LucideIcon } from 'lucide-react';
import { FileText, Briefcase } from 'lucide-react';

export type DownloadItem = {
  id: string;
  icon: LucideIcon;
  /** Tinted square background swatch token suffix, e.g. `danger`, `primary`. */
  tone: 'danger' | 'primary';
  titleLo: string;
  titleEn: string;
  descLo: string;
  descEn: string;
  /** Caption shown in monospaced text, e.g. "PDF · 350 KB · LAP-APP-LO". */
  meta: string;
  href: string;
};

export type DownloadGroupData = {
  id: string;
  groupLo: string;
  groupEn: string;
  items: DownloadItem[];
};

/**
 * Real PDFs bundled in /public/downloads/, sourced from lap.com.la's
 * application-form and insurance-info pages.
 */
export const downloadGroups: DownloadGroupData[] = [
  {
    id: 'application-forms',
    groupLo: 'ແບບຟອມສະໝັກ',
    groupEn: 'Application forms',
    items: [
      {
        id: 'application',
        icon: FileText,
        tone: 'danger',
        titleLo: 'ແບບຟອມສະໝັກ LANEXANG',
        titleEn: 'LANEXANG application form',
        descLo: 'ຟອມສະໝັກປະກັນໄພທົ່ວໄປ ຂອງບໍລິສັດ ລ້ານຊ້າງປະກັນໄພ.',
        descEn: 'General insurance application form for Lanexang Assurance.',
        meta: 'PDF · 350 KB · LAP-APP-LO',
        href: '/downloads/lap-application-form-lo.pdf',
      },
      {
        id: 'careers',
        icon: Briefcase,
        tone: 'danger',
        titleLo: 'ລາຍລະອຽດການຮັບສະໝັກພະນັກງານ',
        titleEn: 'Job recruitment details',
        descLo: 'ລາຍລະອຽດຕຳແໜ່ງທີ່ເປີດຮັບສະໝັກ ແລະ ເງື່ອນໄຂການສະໝັກ.',
        descEn: 'Open positions and application requirements.',
        meta: 'PDF · 265 KB · LAP-CAREERS',
        href: '/downloads/lap-careers-recruitment.pdf',
      },
    ],
  },
  {
    id: 'policy-wordings',
    groupLo: 'ເງື່ອນໄຂປະກັນໄພ',
    groupEn: 'Policy wordings',
    items: [
      {
        id: 'motor-wording-lo',
        icon: FileText,
        tone: 'primary',
        titleLo: 'ເງື່ອນໄຂປະກັນໄພລົດ (ພາສາລາວ)',
        titleEn: 'Motor insurance wording (Lao)',
        descLo: 'ເງື່ອນໄຂ ແລະ ຂໍ້ກຳນົດສຳລັບກົມທະບຽນປະກັນໄພລົດ ສະບັບພາສາລາວ.',
        descEn: 'Full terms and conditions for motor insurance — Lao edition.',
        meta: 'PDF · 5.0 MB · MV-WORDING-LO',
        href: '/downloads/lap-motor-wording-lo.pdf',
      },
      {
        id: 'motor-wording-en',
        icon: FileText,
        tone: 'primary',
        titleLo: 'ເງື່ອນໄຂປະກັນໄພລົດ (ພາສາອັງກິດ)',
        titleEn: 'Motor insurance wording (English)',
        descLo: 'ເງື່ອນໄຂ ແລະ ຂໍ້ກຳນົດສຳລັບກົມທະບຽນປະກັນໄພລົດ ສະບັບພາສາອັງກິດ.',
        descEn: 'Full terms and conditions for motor insurance — English edition.',
        meta: 'PDF · 1.5 MB · MV-WORDING-EN',
        href: '/downloads/lap-motor-wording-en.pdf',
      },
    ],
  },
];
