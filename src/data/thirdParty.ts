/**
 * Third-party liability — AB00 to AB05 packages, main coverage rows
 * (bodily injury group + property damage group), driver coverage rows.
 * Ported verbatim from `lap/products/third-party.html` lines 67-192.
 */

export type ABPackageId =
  | 'AB00'
  | 'AB01'
  | 'AB02'
  | 'AB03'
  | 'AB04'
  | 'AB05';

export type ABPackage = {
  id: ABPackageId;
};

export type ABRow = {
  /** Group-header row spans every column with the section heading. */
  groupLo?: string;
  groupEn?: string;
  itemLo?: string;
  itemEn?: string;
  /** Optional small note below the row label. */
  noteLo?: string;
  noteEn?: string;
  /** Indent flag for sub-rows. */
  indent?: boolean;
  values?: Partial<Record<ABPackageId, string>>;
};

export const abPackages: ABPackage[] = [
  { id: 'AB00' },
  { id: 'AB01' },
  { id: 'AB02' },
  { id: 'AB03' },
  { id: 'AB04' },
  { id: 'AB05' },
];

/** Highlighted (recommended) package — last column gets accent treatment. */
export const abHighlightedPackage: ABPackageId = 'AB05';

export const abMainRows: ABRow[] = [
  {
    groupLo: 'I. ຄວາມເສຍຫາຍດ້ານຮ່າງກາຍ — ສູງສຸດຕໍ່ອຸປະຕິເຫດ',
    groupEn: 'I. Bodily injury — maximum per incident',
  },
  {
    itemLo: 'ສູງສຸດຕໍ່ອຸປະຕິເຫດ',
    itemEn: 'Maximum per incident',
    values: {
      AB00: '125,000,000',
      AB01: '300,000,000',
      AB02: '600,000,000',
      AB03: '800,000,000',
      AB04: '1,000,000,000',
      AB05: '1,200,000,000',
    },
  },
  {
    indent: true,
    itemLo: '1. ເສຍຊີວິດ ຫຼື ພິການຖາວອນ — ສູງສຸດຕໍ່ບຸກຄົນ',
    itemEn: '1. Death or total permanent disability — max per person',
    values: {
      AB00: '15,000,000',
      AB01: '25,000,000',
      AB02: '35,000,000',
      AB03: '50,000,000',
      AB04: '75,000,000',
      AB05: '100,000,000',
    },
  },
  {
    indent: true,
    itemLo: '2. ຄ່າປິ່ນປົວ — ສູງສຸດຕໍ່ບຸກຄົນ',
    itemEn: '2. Medical expenses — max per person',
    values: {
      AB00: '3,000,000',
      AB01: '3,500,000',
      AB02: '4,500,000',
      AB03: '5,000,000',
      AB04: '7,500,000',
      AB05: '10,000,000',
    },
  },
  {
    indent: true,
    itemLo: 'ຄ່າເຂົ້າໂຮງໝໍ',
    itemEn: 'Hospitalisation fee',
    noteLo: 'ໃນກໍລະນີນອນຮັບການ ≥ 24 ຊົ່ວໂມງ',
    noteEn: 'In case of hospitalisation ≥ 24 hours',
    values: {
      AB00: '500,000',
      AB01: '1,000,000',
      AB02: '1,000,000',
      AB03: '1,000,000',
      AB04: '1,000,000',
      AB05: '1,000,000',
    },
  },
  {
    groupLo: 'II. ຄວາມເສຍຫາຍດ້ານວັດຖຸ — ສູງສຸດຕໍ່ອຸປະຕິເຫດ',
    groupEn: 'II. Property damage — maximum per incident',
  },
  {
    itemLo: 'ວົງເງິນຄຸ້ມຄອງຄວາມເສຍຫາຍຊັບສິນ',
    itemEn: 'Property damage cover',
    values: {
      AB00: '6,000,000',
      AB01: '18,000,000',
      AB02: '50,000,000',
      AB03: '50,000,000',
      AB04: '75,000,000',
      AB05: '100,000,000',
    },
  },
  {
    itemLo: 'ການປ້ອງກັນສິດ ແລະ ຊ່ວຍເຫຼືອ — ສູງສຸດຕໍ່ອຸປະຕິເຫດ',
    itemEn: 'Defence and recourse — max per accident',
    values: {
      AB00: '150,000',
      AB01: '150,000',
      AB02: '150,000',
      AB03: '150,000',
      AB04: '150,000',
      AB05: '150,000',
    },
  },
];

export const abDriverRows: ABRow[] = [
  {
    itemLo: '1. ເສຍຊີວິດ ຫຼື ພິການຖາວອນ — ຕໍ່ບຸກຄົນ',
    itemEn: '1. Death or total permanent disability — per person',
    values: {
      AB00: '15,000,000',
      AB01: '25,000,000',
      AB02: '35,000,000',
      AB03: '50,000,000',
      AB04: '75,000,000',
      AB05: '100,000,000',
    },
  },
  {
    itemLo: '2. ຄ່າປິ່ນປົວ — ຕໍ່ບຸກຄົນ',
    itemEn: '2. Medical expenses — per person',
    values: {
      AB00: '3,000,000',
      AB01: '3,500,000',
      AB02: '4,500,000',
      AB03: '5,000,000',
      AB04: '7,500,000',
      AB05: '10,000,000',
    },
  },
];

export const abFootnoteLo =
  'ຫມາຍເຫດ: ຕົວເລກທັງໝົດເປັນ ກີບ (LAK). AB00 ເປັນແພັກເກັດພື້ນຖານທີ່ບັງຄັບຕາມກົດໝາຍ. ຕິດຕໍ່ສາຍດ່ວນ 1819 ສຳລັບໃບສະເໜີລາຄາ.';

export const abFootnoteEn =
  'Note: All amounts in Lao kip (LAK). AB00 is the legally-mandated baseline package. Call 1819 for a quote.';
