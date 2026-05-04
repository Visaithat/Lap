import type { LucideIcon } from 'lucide-react';
import { Calendar, FileSignature, Sparkles, Compass } from 'lucide-react';

export type Milestone = {
  id: string;
  dateLo: string;
  dateEn: string;
  titleLo: string;
  titleEn: string;
  bodyLo: string;
  bodyEn: string;
  icon: LucideIcon;
  /** Highlight as the latest / featured entry. */
  accent?: boolean;
  photoSrc?: string;
};

/**
 * Milestones sourced word-for-word from
 * https://lap.com.la/index.php/history-lap/. The Lao copy mirrors the
 * three sections of the source page (Phase 1 Founding, Phase 2 Ownership
 * Change, Phase 3 Vision); the English copy is a direct translation.
 * The 15 Aug 2025 handover is marked `accent: true` so Timeline tints
 * the pill with `bg-lap-accent-500/20`.
 */
export const milestones: Milestone[] = [
  {
    id: 'founded-2010',
    dateLo: '11 ຕຸລາ 2010',
    dateEn: '11 Oct 2010',
    titleLo: 'ໄລຍະເລີ່ມຕົ້ນ ແລະ ການດໍາເນີນງານ',
    titleEn: 'Founding & early operations',
    bodyLo:
      'ບໍລິສັດ ລ້ານຊ້າງປະກັນໄພ ມະຫາຊົນ — Lanexang Assurance Public Company (LAP) ໄດ້ສ້າງຕັ້ງຂຶ້ນໃນວັນທີ 11 ຕຸລາ 2010 ໂດຍການຮ່ວມທຶນລະຫວ່າງ ທະນາຄານພັດທະນາລາວ (LDB) ແລະ ບໍລິສັດ ຮຸ້ນສ່ວນປະກັນໄພ ໄປສະນີ (PTI). LAP ໄດ້ຮັບອະນຸຍາດດໍາເນີນທຸລະກິດປະກັນໄພຮູບແບບ "ປະກັນໄພທົ່ວໄປ" — ຜະລິດຕະພັນທີ່ຈຳໜ່າຍສາມາດຕອບສະໜອງການຄຸ້ມກັນຄວາມສ່ຽງແກ່ຜູ້ເອົາປະກັນປະເພດບຸກຄົນທົ່ວໄປ, ຫົວໜ່ວຍທຸລະກິດ, ອົງການຈັດຕັ້ງ ແລະ ໂຄງການລົງທຶນຂະໜາດຕ່າງໆ.',
    bodyEn:
      'Lanexang Assurance Public Company (LAP) was incorporated on 11 October 2010 as a joint venture between Lao Development Bank (LDB) and the Post & Telecommunication Insurance Joint-Stock Corporation (PTI). The company was licensed to operate "general insurance" — a product line covering individual policyholders, business units, organisations, and investment projects across every scale.',
    icon: Calendar,
  },
  {
    id: 'share-transfer-2025',
    dateLo: '20 ມີນາ 2025',
    dateEn: '20 Mar 2025',
    titleLo: 'ພິທີເຊັນສັນຍາ ຊື້-ຂາຍຮຸ້ນ',
    titleEn: 'Share-purchase signing ceremony',
    bodyLo:
      'ຈັດພິທີເຊັນສັນຍາ ການຊື້-ຂາຍ ຮຸ້ນຂອງ ບໍລິສັດ ລ້ານຊ້າງປະກັນໄພ ມະຫາຊົນ ລະຫວ່າງ ທະນາຄານພັດທະນາລາວ (LDB) ແລະ ບໍລິສັດ ຮຸ້ນສ່ວນປະກັນໄພ ໄປສະນີ (PTI) ກັບ ບໍລິສັດ ອາວີ ອິນເວດສເມັ້ນ ຈຳກັດ (ARVY) — ໂດຍ ARVY ໄດ້ຊື້ຮຸ້ນຂອງ LAP ທັງໝົດ 100%, ເປີດໜ້າປະຫວັດໃໝ່ຂອງບໍລິສັດ.',
    bodyEn:
      'A share-purchase signing ceremony was held to transfer LAP equity from Lao Development Bank (LDB) and PTI Insurance to ARVY Investment Co., Ltd. ARVY acquired 100% of LAP\'s shares — opening a new chapter for the company under fresh ownership.',
    icon: FileSignature,
    photoSrc: '/img/history/share-transfer-2025-03.jpg',
  },
  {
    id: 'handover-2025',
    dateLo: '15 ສິງຫາ 2025',
    dateEn: '15 Aug 2025',
    titleLo: 'ມອບ-ຮັບໜ້າທີ່ບໍລິຫານງານ',
    titleEn: 'Management handover',
    bodyLo:
      'ສຳເລັດການມອບ-ຮັບໜ້າທີ່ໃນການບໍລິຫານ ບໍລິສັດ ລ້ານຊ້າງປະກັນໄພ ມະຫາຊົນ ລະຫວ່າງ ຄະນະບໍລິຫານງານຊຸດເກົ່າ (LDB ແລະ PTI) ກັບ ຄະນະບໍລິຫານງານຊຸດໃໝ່ (ARVY) — ເລີ່ມຍຸກໃໝ່ຂອງ LAP ພາຍໃຕ້ການນຳຂອງ ARVY Investment.',
    bodyEn:
      'The management handover between LAP\'s former board (LDB and PTI) and the new board (ARVY) was formally completed — beginning a new era for the company under ARVY Investment\'s leadership.',
    icon: Sparkles,
    accent: true,
    photoSrc: '/img/history/handover-2025-08.jpg',
  },
  {
    id: 'vision-onward',
    dateLo: '2025 ແລະ ຕໍ່ໄປ',
    dateEn: '2025 onward',
    titleLo: 'ວິໄສທັດ',
    titleEn: 'Vision',
    bodyLo:
      'ເປັນຜູ້ນໍາດ້ານການປະກັນໄພທີ່ໄດ້ຮັບຄວາມເຊື້ອໝັ້ນສູງໃນສັງຄົມລາວ, ສະໜອງຜະລິດຕະພັນທີ່ເໝາະສົມກັບຄວາມຕ້ອງການລູກຄ້າທຸກປະເພດ ດ້ວຍບໍລິການທີ່ທັນສະໄໝ, ມີຄວາມເຂັ້ມແຂງດ້ານການເງິນ ສາມາດຮັບປະກັນຄວາມສ່ຽງຫຼາຍລະດັບ, ຄຽງຄູ່ສັງຄົມລາວ ກ້າວສູ່ການຈົດທະບຽນໃນຕະຫຼາດຫຼັກຊັບ.',
    bodyEn:
      'To become the most trusted insurance leader in Lao society — offering products suited to every customer need, delivering modern service, holding the financial strength to underwrite risks at every level, and walking alongside the country toward a future listing on the stock exchange.',
    icon: Compass,
  },
];
