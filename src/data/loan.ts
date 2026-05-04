/**
 * Loan-insurance specific data — claim payouts (3 cases + worked example)
 * and premium rates (rate table + eligibility cards). Ported verbatim from
 * `lap/products/loan.html` lines 67-144.
 */

export type LoanClaimCase = {
  id: '01' | '02' | '03';
  pct: string;
  /** When true, top border uses accent yellow instead of primary blue. */
  highlightAccent?: boolean;
  titleLo: string;
  titleEn: string;
  bodyLo: string;
  bodyEn: string;
};

export type LoanRateRow = {
  idx: number;
  rangeLo: string;
  rangeEn: string;
  rate: string;
};

export type LoanEligibilityIcon = 'user-check' | 'globe' | 'banknote';

export type LoanEligibilityCard = {
  iconKey: LoanEligibilityIcon;
  titleLo: string;
  titleEn: string;
  bodyLo: string;
  bodyEn: string;
};

export const loanClaimCases: LoanClaimCase[] = [
  {
    id: '01',
    pct: '100%',
    titleLo: 'ການເສຍຊີວິດ ຫຼື ພິການຈາກອຸປະຕິເຫດ',
    titleEn: 'Death or disability from accident',
    bodyLo: 'LAP ຈ່າຍ 100% ຂອງຍອດເງິນກູ້ຄົງເຫລືອໃນວັນເກີດເຫດ.',
    bodyEn: 'LAP pays 100% of the outstanding loan balance on the date of the event.',
  },
  {
    id: '02',
    pct: '50%',
    titleLo: 'ເສຍຊີວິດຈາກພະຍາດ — ເຈັບປ່ວຍ ມະເຮັງ ຫົວໃຈ',
    titleEn: 'Death from illness — sickness, cancer, heart',
    bodyLo: 'LAP ຈ່າຍ 50% ຂອງຍອດເງິນກູ້ຄົງເຫລືອ.',
    bodyEn: 'LAP pays 50% of the outstanding loan balance.',
  },
  {
    id: '03',
    pct: '25%',
    highlightAccent: true,
    titleLo: 'ກໍລະນີຜູ້ຄ້ຳປະກັນກໍ່ຖືກພະຍາດດຽວກັນ',
    titleEn: 'If the co-borrower has the same illness',
    bodyLo: 'LAP ຈ່າຍ 25% ຂອງຍອດເງິນກູ້ຄົງເຫລືອ.',
    bodyEn: 'LAP pays 25% of the outstanding loan balance.',
  },
];

export const loanWorkedExample = {
  titleLo: 'ກູ້ 100 ລ້ານ ກີບ — ຄ່າເບ້ຍ 360,000 ກີບ/ປີ',
  titleEn: '100M kip loan — 360,000 kip/year premium',
  bodyLo:
    'ຖ້າຜູ້ກູ້ເສຍຊີວິດຈາກອຸປະຕິເຫດ LAP ຊຳລະເງິນ 100 ລ້ານ ກີບ ໃຫ້ທະນາຄານ. ຖ້າເສຍຊີວິດຈາກພະຍາດທີ່ຄຸ້ມຄອງ LAP ຊຳລະເງິນ 50 ລ້ານ ກີບ. ຄອບຄົວບໍ່ຕ້ອງຮັບພາລະທາງການເງິນ.',
  bodyEn:
    'If the borrower dies in an accident, LAP pays 100M kip to the bank. If from a covered illness, LAP pays 50M kip. The family carries no remaining debt.',
};

export const loanRateRows: LoanRateRow[] = [
  { idx: 1, rangeLo: '10 – 50 ລ້ານ', rangeEn: '10 – 50M', rate: '0.30%' },
  { idx: 2, rangeLo: '51 – 100 ລ້ານ', rangeEn: '51 – 100M', rate: '0.35%' },
  { idx: 3, rangeLo: '101 – 200 ລ້ານ', rangeEn: '101 – 200M', rate: '0.40%' },
  { idx: 4, rangeLo: '201 – 800 ລ້ານ', rangeEn: '201 – 800M', rate: '0.45%' },
];

export const loanRateNoteLo =
  'ຫມາຍເຫດ: ວົງເງິນຄ້ຳປະກັນຕ້ອງເທົ່າກັບວົງເງິນກູ້ ຫຼື ເທົ່າກັບຍອດເງິນທີ່ຄ້າງເໝືອນ. ໄລຍະເວລາຂອງການຄຸ້ມຄອງ ເທົ່າກັບໄລຍະເວລາກູ້ຢືມ. ມີສ່ວນລົດເພີ່ມສຳລັບລູກຄ້າທີ່ຕໍ່ປະກັນກັບ LAP ຫຼາຍກວ່າ 1 ປີ.';

export const loanRateNoteEn =
  'Note: The guarantee amount must equal the loan amount or the outstanding balance. Cover lasts as long as the loan term. Discounts apply for customers renewing with LAP for more than one year.';

export const loanEligibilityCards: LoanEligibilityCard[] = [
  {
    iconKey: 'user-check',
    titleLo: 'ອາຍຸ 18 – 65 ປີ',
    titleEn: 'Age 18 – 65',
    bodyLo: 'ມີລູກຄ້າທີ່ກູ້ໃນ ສ.ປ.ປ. ລາວ. ສືບຕໍ່ຄຸ້ມຄອງສູງສຸດເຖິງອາຍຸ 66 ປີ.',
    bodyEn: 'Open to borrowers in Lao PDR. Cover continues up to age 66.',
  },
  {
    iconKey: 'globe',
    titleLo: 'ພົນລະເມືອງລາວ ແລະ ຕ່າງປະເທດ',
    titleEn: 'Lao & foreign nationals',
    bodyLo:
      'ທີ່ກຳລັງສຶກສາ ຫຼື ດຳລົງຊີວິດໃນ ສ.ປ.ປ. ລາວ ທີ່ສາມາດຕອບສະໜອງເງື່ອນໄຂການກູ້ຢືມ.',
    bodyEn: 'Studying or living in Lao PDR who meet the loan eligibility criteria.',
  },
  {
    iconKey: 'banknote',
    titleLo: 'ຄ່າປິ່ນປົວເພີ່ມເຕີມ',
    titleEn: 'Additional medical benefit',
    bodyLo: 'LAP ຈ່າຍຄ່າປິ່ນປົວສູງສຸດ 1,000,000 ກີບ ໃຫ້ແກ່ຄອບຄົວຜູ້ຄ້ຳປະກັນ.',
    bodyEn: "LAP pays up to 1,000,000 kip in medical expenses to the borrower's family.",
  },
];
