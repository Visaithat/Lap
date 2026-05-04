import type { LucideIcon } from 'lucide-react';
import {
  Car,
  HeartPulse,
  Plane,
  Flame,
  HardHat,
  ShieldCheck,
} from 'lucide-react';

export type Product = {
  slug: string;
  href: string;
  icon: LucideIcon;
  titleLo: string;
  titleEn: string;
  blurbLo: string;
  blurbEn: string;
};

/**
 * The 6 homepage product cards. Hrefs mirror the source `lap/index.html`
 * grid — most cards point at `/products/eco` because the static site
 * only ships dedicated detail pages for `eco`, `loan`, and `third-party`.
 * Health / Travel / Fire / Construction reuse `eco` as a graceful fallback.
 */
export const products: Product[] = [
  {
    slug: 'vehicle',
    href: '/products/eco',
    icon: Car,
    titleLo: 'ປະກັນໄພລົດ',
    titleEn: 'Vehicle Insurance',
    blurbLo: 'ປົກປ້ອງຍານພາຫະນະຂອງທ່ານຈາກອຸບັດເຫດ ຄ່າສ້ອມແປງ ແລະ ການລັກພາຕົວ.',
    blurbEn: 'Cover your vehicle against accidents, repairs, and theft.',
  },
  {
    slug: 'health',
    href: '/products/eco',
    icon: HeartPulse,
    titleLo: 'ປະກັນໄພສຸຂະພາບ',
    titleEn: 'Health Insurance',
    blurbLo:
      'ຄ່າຮັກສາໂຮງໝໍ ກວດສຸຂະພາບ ແລະ ຢາ — ດ້ວຍເຄືອຂ່າຍຄູ່ສັນຍາທົ່ວປະເທດ.',
    blurbEn:
      'Hospital, check-ups, and medication — through partner clinics nationwide.',
  },
  {
    slug: 'travel',
    href: '/products/eco',
    icon: Plane,
    titleLo: 'ປະກັນໄພການເດີນທາງ',
    titleEn: 'Travel Insurance',
    blurbLo:
      'ຄຸ້ມຄອງທ່ານໃນທຸກບ່ອນທີ່ທ່ານໄປ — ສຳພາລະ ການເຈັບປ່ວຍ ແລະ ການຍົກເລີກ.',
    blurbEn: 'Cover wherever you go — luggage, illness, and trip cancellations.',
  },
  {
    slug: 'fire',
    href: '/products/eco',
    icon: Flame,
    titleLo: 'ປະກັນໄພອັກຄີໄພ',
    titleEn: 'Fire Insurance',
    blurbLo: 'ປົກປ້ອງເຮືອນ ຮ້ານຄ້າ ແລະ ໂຮງງານຈາກໄຟໄໝ້ ແລະ ໄພທໍາມະຊາດ.',
    blurbEn:
      'Protect homes, shops, and factories from fire and natural disasters.',
  },
  {
    slug: 'construction',
    href: '/products/eco',
    icon: HardHat,
    titleLo: 'ປະກັນໄພການກໍ່ສ້າງ',
    titleEn: 'Construction Insurance',
    blurbLo:
      'ຄຸ້ມຄອງໂຄງການກໍ່ສ້າງ ຄ່າແຮງງານ ແລະ ຄວາມຮັບຜິດຊອບຂອງເຈົ້າຂອງ.',
    blurbEn: 'Cover construction projects, labour, and owner liability.',
  },
  {
    slug: 'third-party',
    href: '/products/third-party',
    icon: ShieldCheck,
    titleLo: 'ປະກັນໄພບຸກຄົນທີ່ສາມ',
    titleEn: 'Third-Party Insurance',
    blurbLo:
      'ຄ່າຮັບຜິດຊອບຕໍ່ບຸກຄົນທີ່ສາມ ສຳລັບເຈົ້າຂອງຍານພາຫະນະທຸກທ່ານ.',
    blurbEn: 'Liability cover for third parties — required for vehicle owners.',
  },
];
