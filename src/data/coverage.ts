/**
 * ECO 5-tier coverage data for the vehicle-insurance product page.
 * Ported verbatim from `lap/products/eco.html`. All monetary values
 * are in Lao kip (LAK).
 */

export type CoverageTier = {
  id: string;
  labelLo: string;
  labelEn: string;
};

export type CoverageRow = {
  /** When set, this row renders as a coloured group header spanning all
   *  tier columns (Section I, II, III). The `values` field is ignored. */
  groupLo?: string;
  groupEn?: string;
  /** Row label (Lao). Sub-rows in the source are prefixed with an em-dash. */
  itemLo?: string;
  itemEn?: string;
  /** Optional muted detail line shown beneath the main label. */
  noteLo?: string;
  noteEn?: string;
  /** Indent flag for sub-rows (the source uses pl-9). */
  indent?: boolean;
  /** Tier-keyed primary values, e.g. { 'eco-1': '600,000,000' }. */
  values?: Record<string, string>;
  /** Optional small footnote per cell (e.g. excess "1,000,000"). */
  subValues?: Record<string, string>;
};

export const coverageTiers: CoverageTier[] = [
  { id: 'eco-1', labelLo: 'ECO 1', labelEn: 'ECO 1' },
  { id: 'eco-2', labelLo: 'ECO 2', labelEn: 'ECO 2' },
  { id: 'eco-3', labelLo: 'ECO 3', labelEn: 'ECO 3' },
  { id: 'eco-4', labelLo: 'ECO 4', labelEn: 'ECO 4' },
  { id: 'eco-5', labelLo: 'ECO 5', labelEn: 'ECO 5' },
];

export const coverageRows: CoverageRow[] = [
  // ── Section I ────────────────────────────────────────────────
  {
    groupLo: 'I. ການຄຸ້ມຄອງຄວາມຮັບຜິດຊອບຕໍ່ບຸກຄົນທີ່ສາມ (AB)',
    groupEn: 'I. Coverage for third-party liability (AB)',
  },
  {
    itemLo: '1.1 ຄວາມເສຍຫາຍດ້ານຮ່າງກາຍ',
    itemEn: '1.1 Bodily injury',
    noteLo: 'ສູງສຸດຕໍ່ອຸປະຕິເຫດ',
    noteEn: 'Maximum per accident',
    values: {
      'eco-1': '600,000,000',
      'eco-2': '600,000,000',
      'eco-3': '600,000,000',
      'eco-4': '1,000,000,000',
      'eco-5': '1,200,000,000',
    },
  },
  {
    indent: true,
    itemLo: '– ເສຍຊີວິດ ຫຼື ພິການຖາວອນ',
    itemEn: '– Death or total permanent disability',
    noteLo: 'ສູງສຸດຕໍ່ບຸກຄົນ',
    noteEn: 'Maximum per person',
    values: {
      'eco-1': '40,000,000',
      'eco-2': '40,000,000',
      'eco-3': '40,000,000',
      'eco-4': '75,000,000',
      'eco-5': '100,000,000',
    },
  },
  {
    indent: true,
    itemLo: '– ຄ່າປິ່ນປົວ / ຄ່າລົບເຂົ້າໂຮງໝໍ',
    itemEn: '– Medical expenses / hospitalisation',
    noteLo: 'ສູງສຸດຕໍ່ບຸກຄົນ • ໃນ 24 ຊົ່ວໂມງ',
    noteEn: 'Per person • within 24 hours',
    values: {
      'eco-1': '4,500,000',
      'eco-2': '4,500,000',
      'eco-3': '4,500,000',
      'eco-4': '7,500,000',
      'eco-5': '10,000,000',
    },
    subValues: {
      'eco-1': '1,000,000',
      'eco-2': '1,000,000',
      'eco-3': '1,000,000',
      'eco-4': '1,000,000',
      'eco-5': '1,000,000',
    },
  },
  {
    itemLo: '1.2 ຄວາມເສຍຫາຍດ້ານວັດຖຸ',
    itemEn: '1.2 Material damage',
    noteLo: 'ສູງສຸດຕໍ່ອຸປະຕິເຫດ • ການປົກປ້ອງສິດ',
    noteEn: 'Per accident • defence & recourse',
    values: {
      'eco-1': '50,000,000',
      'eco-2': '50,000,000',
      'eco-3': '50,000,000',
      'eco-4': '75,000,000',
      'eco-5': '100,000,000',
    },
    subValues: {
      'eco-1': '150,000',
      'eco-2': '150,000',
      'eco-3': '150,000',
      'eco-4': '150,000',
      'eco-5': '150,000',
    },
  },

  // ── Section II ───────────────────────────────────────────────
  {
    groupLo: 'II. ຄຸ້ມກັບຜູ້ຂັບຂີ່ / ຜູ້ໂດຍສານ (I)',
    groupEn: 'II. Coverage for driver / passenger (I)',
  },
  {
    itemLo: '– ເສຍຊີວິດ ຫຼື ພິການຖາວອນ (ສູງສຸດຕໍ່ບຸກຄົນ)',
    itemEn: '– Death or total permanent disability (per person)',
    values: {
      'eco-1': '50,000,000',
      'eco-2': '50,000,000',
      'eco-3': '50,000,000',
      'eco-4': '50,000,000',
      'eco-5': '50,000,000',
    },
  },
  {
    itemLo: '– ຄ່າປິ່ນປົວ (ສູງສຸດຕໍ່ບຸກຄົນ)',
    itemEn: '– Medical expenses (per person)',
    values: {
      'eco-1': '5,000,000',
      'eco-2': '5,000,000',
      'eco-3': '5,000,000',
      'eco-4': '5,000,000',
      'eco-5': '5,000,000',
    },
  },

  // ── Section III ──────────────────────────────────────────────
  {
    groupLo: 'III. ຄວາມເສຍຫາຍຂອງລົດເອງ',
    groupEn: 'III. Coverage for own damage',
  },
  {
    itemLo: '– ຊົນກັບຍານພາຫະນະອື່ນ / ລັກພາທັງໝົດ',
    itemEn: '– Collision with other vehicles / full theft',
    noteLo: 'ສູງສຸດຕໍ່ປີ',
    noteEn: 'Maximum per year',
    values: {
      'eco-1': '30,000,000',
      'eco-2': '40,000,000',
      'eco-3': '50,000,000',
      'eco-4': '60,000,000',
      'eco-5': '70,000,000',
    },
  },
  {
    itemLo: '– ຄ່າລາກ / ຍ້າຍສຳລັບລົດ ສູງສຸດຕໍ່ປີ',
    itemEn: '– Hoisting & towing cost, max per year',
    values: {
      'eco-1': '6,000,000',
      'eco-2': '8,000,000',
      'eco-3': '10,000,000',
      'eco-4': '10,000,000',
      'eco-5': '10,000,000',
    },
  },
];

/**
 * Annual-premium cards rendered beneath the coverage table.
 * Ported from `lap/products/eco.html` lines 180–206.
 * Highlighted tier (ECO 5) is the "recommended" tier in the source.
 */
export type PremiumCard = {
  id: string;
  titleLo: string;
  titleEn: string;
  subtitleLo: string;
  subtitleEn: string;
  premiums: Record<string, string>;
  highlightedTier: string;
};

export const premiumCards: PremiumCard[] = [
  {
    id: 'standard',
    titleLo: 'ມູນຄ່າລົດ < 80,000 USD',
    titleEn: 'Vehicle value < 80,000 USD',
    subtitleLo: 'ສຳລັບລົດທົ່ວໄປ',
    subtitleEn: 'For most cars',
    premiums: {
      'eco-1': '2,500,000',
      'eco-2': '3,000,000',
      'eco-3': '3,500,000',
      'eco-4': '4,200,000',
      'eco-5': '5,400,000',
    },
    highlightedTier: 'eco-5',
  },
  {
    id: 'premium',
    titleLo: 'ມູນຄ່າລົດ ≥ 80,000 USD ແລະ ລົດ EV',
    titleEn: 'Vehicle value ≥ 80,000 USD & EVs',
    subtitleLo: 'ສຳລັບລົດຫລູ ແລະ ລົດໄຟຟ້າ',
    subtitleEn: 'For luxury cars and electric vehicles',
    premiums: {
      'eco-1': '2,700,000',
      'eco-2': '3,300,000',
      'eco-3': '3,900,000',
      'eco-4': '4,600,000',
      'eco-5': '5,900,000',
    },
    highlightedTier: 'eco-5',
  },
];
