/**
 * Bilingual metadata for the three product pages: ECO vehicle insurance,
 * loan insurance, and third-party liability insurance.
 *
 * Copy ported from `lap/products/{eco,loan,third-party}.html`.
 */

export type ProductSlug = 'eco' | 'loan' | 'third-party';

export type BilingualBlock = {
  titleLo: string;
  titleEn: string;
  descLo: string;
  descEn: string;
};

export type FaqItem = {
  qLo: string;
  qEn: string;
  aLo: string;
  aEn: string;
};

export type HowToApplyStep = {
  num: '01' | '02' | '03';
  titleLo: string;
  titleEn: string;
  bodyLo: string;
  bodyEn: string;
};

export type ProductPageMeta = {
  slug: ProductSlug;
  badgeLo: string;
  badgeEn: string;
  titleLo: string;
  titleEn: string;
  introLo: string;
  introEn: string;
  whatsCovered: BilingualBlock[];
  /** Override the default "Comprehensive cover" heading for the WhatsCovered block. */
  whatsCoveredHeadingLo?: string;
  whatsCoveredHeadingEn?: string;
  personas: BilingualBlock[];
  howToApply: HowToApplyStep[];
  faqs: FaqItem[];
  related: ProductSlug[];
  /** True only for ECO — the only product with the 5-tier coverage table. */
  hasCoverageTable?: boolean;
};

export const productPages: Record<ProductSlug, ProductPageMeta> = {
  eco: {
    slug: 'eco',
    badgeLo: 'Eco / ຍານພາຫະນະ',
    badgeEn: 'Eco / Vehicle',
    titleLo: 'ປະກັນໄພລົດ ສຳລັບທຸກການເດີນທາງ',
    titleEn: 'Vehicle insurance for every journey',
    introLo:
      'ປົກປ້ອງລົດຂອງທ່ານຈາກອຸບັດເຫດ ຄ່າສ້ອມແປງ ການລັກພາຕົວ ແລະ ຄວາມເສຍຫາຍຕໍ່ບຸກຄົນທີ່ສາມ. ດ້ວຍສາຍດ່ວນ 24 ຊົ່ວໂມງ ແລະ ເຄືອຂ່າຍສູນບໍລິການທົ່ວປະເທດ.',
    introEn:
      'Cover your car against accidents, repair costs, theft, and third-party damage. Backed by a 24-hour hotline and a nationwide service-centre network.',
    hasCoverageTable: true,
    whatsCovered: [
      {
        titleLo: 'ຄວາມເສຍຫາຍຈາກອຸບັດເຫດ',
        titleEn: 'Accident damage',
        descLo: 'ຄ່າສ້ອມແປງລົດຂອງທ່ານພາຍຫລັງເຫດ.',
        descEn: 'Repair costs for your vehicle after a crash.',
      },
      {
        titleLo: 'ການລັກພາຕົວ ແລະ ໂຈນລັກ',
        titleEn: 'Theft & burglary',
        descLo: 'ການເສຍຫາຍຫລື ສູນເສຍລົດທັງໝົດ.',
        descEn: 'Total or partial loss of the vehicle.',
      },
      {
        titleLo: 'ຄວາມຮັບຜິດຊອບຕໍ່ບຸກຄົນທີ່ສາມ',
        titleEn: 'Third-party liability',
        descLo: 'ຄຸ້ມຄອງຊີວິດ ແລະ ຊັບສິນຂອງບຸກຄົນອື່ນ.',
        descEn: 'Cover for harm to other people or property.',
      },
      {
        titleLo: 'ໄພທຳມະຊາດ',
        titleEn: 'Natural disasters',
        descLo: 'ນ້ຳຖ້ວມ ລົມພາຍຸ ແລະ ດິນໂຄ່ນ.',
        descEn: 'Floods, storms, and landslides.',
      },
      {
        titleLo: 'ບໍລິການລາກລົດ',
        titleEn: 'Towing service',
        descLo: 'ບໍລິການລາກຟຣີໄປສູ່ສູນບໍລິການທີ່ໃກ້ສຸດ.',
        descEn: 'Free towing to the nearest service centre.',
      },
      {
        titleLo: 'ຄ່າປິ່ນປົວຂອງຜູ້ຂັບ',
        titleEn: 'Driver medical',
        descLo: 'ຄ່າຮັກສາໂຮງໝໍສຳລັບຜູ້ຂັບ ແລະ ຜູ້ໂດຍສານ.',
        descEn: 'Hospital costs for driver and passengers.',
      },
    ],
    personas: [
      {
        titleLo: 'ເຈົ້າຂອງລົດສ່ວນຕົວ',
        titleEn: 'Private car owners',
        descLo: 'ຄຸ້ມຄອງລົດປະຈຳວັນຂອງທ່ານ ແລະ ຄອບຄົວ.',
        descEn: 'Cover your everyday car and family.',
      },
      {
        titleLo: 'ທຸລະກິດຂະໜາດນ້ອຍ',
        titleEn: 'Small businesses',
        descLo: 'ລົດເຄື່ອນທີ່ ແລະ ລົດຂົນສົ່ງສິນຄ້າ.',
        descEn: 'Mobile fleets and delivery vehicles.',
      },
      {
        titleLo: 'ກອງລົດບໍລິສັດ',
        titleEn: 'Corporate fleets',
        descLo: 'ແພັກເກັດຄຸ້ມຄອງສຳລັບກອງລົດຂະໜາດໃຫຍ່.',
        descEn: 'Bulk policies for large fleets.',
      },
    ],
    howToApply: [
      {
        num: '01',
        titleLo: 'ດາວໂຫລດແບບຟອມ',
        titleEn: 'Download form',
        bodyLo: 'ຮັບແບບຟອມ PDF ຈາກໜ້າດາວໂຫລດ.',
        bodyEn: 'Get the PDF form from Downloads.',
      },
      {
        num: '02',
        titleLo: 'ສົ່ງເອກະສານ',
        titleEn: 'Submit documents',
        bodyLo: 'ສົ່ງແບບຟອມພ້ອມໃບອະນຸຍາດຂັບຂີ່ ແລະ ໃບທະບຽນລົດ.',
        bodyEn: "Send the form with your driver's licence and registration.",
      },
      {
        num: '03',
        titleLo: 'ຮັບກົມທະບຽນ',
        titleEn: 'Get policy',
        bodyLo: 'ກົມທະບຽນຮັບປະກັນພາຍໃນ 24 ຊົ່ວໂມງ.',
        bodyEn: 'Policy issued within 24 hours.',
      },
    ],
    faqs: [
      {
        qLo: 'ຂ້ອຍຕ້ອງມີໃບຂັບຂີ່ບໍ່?',
        qEn: "Do I need a driver's licence?",
        aLo: 'ແມ່ນແລ້ວ — ໃບຂັບຂີ່ທີ່ຍັງໃຊ້ໄດ້ແມ່ນຈຳເປັນສຳລັບການອອກກົມທະບຽນ.',
        aEn: "Yes — a valid driver's licence is required to issue the policy.",
      },
      {
        qLo: 'ຄ່າປະກັນໄພຄິດໄລ່ແນວໃດ?',
        qEn: 'How is the premium calculated?',
        aLo: 'ຂຶ້ນກັບປະເພດລົດ ອາຍຸ ຄ່າຕະຫລາດ ແລະ ປະຫວັດການຂັບຂີ່.',
        aEn: 'Based on vehicle type, age, market value, and driving history.',
      },
      {
        qLo: 'ຂ້ອຍຄວນເຮັດຫຍັງເມື່ອເກີດອຸບັດເຫດ?',
        qEn: 'What should I do after an accident?',
        aLo: 'ໂທສາຍດ່ວນ 1819 ທັນທີ. ທີມງານຈະແນະນຳແລະຈັດການຕໍ່ໃຫ້.',
        aEn: 'Call 1819 immediately. Our team will guide you through the next steps.',
      },
      {
        qLo: 'ຂ້ອຍສາມາດຕໍ່ກົມທະບຽນອອນລາຍໄດ້ບໍ?',
        qEn: 'Can I renew online?',
        aLo: 'ປະຈຸບັນແມ່ນຕໍ່ຜ່ານສາຂາ ຫຼື ຕົວແທນ. ການຕໍ່ອອນລາຍຈະມາໃນອານາຄົດ.',
        aEn: 'Currently via branch or agent. Online renewal is on the roadmap.',
      },
    ],
    related: ['loan', 'third-party'],
  },

  loan: {
    slug: 'loan',
    badgeLo: 'ປະກັນໄພເງິນກູ້',
    badgeEn: 'Loan',
    titleLo: 'ປົກປ້ອງເງິນກູ້ຂອງທ່ານ ແລະ ຄອບຄົວ',
    titleEn: 'Protect your loan and your family',
    introLo:
      'ຫຼັງເຫດການທີ່ບໍ່ຄາດຄິດ — ການເສຍຊີວິດ ຫຼື ພິການ — ປະກັນໄພນີ້ຈະຊ່ວຍຊຳລະເງິນກູ້ຄົງເຫຼືອ ເພື່ອບໍ່ໃຫ້ຄອບຄົວຂອງທ່ານຮັບພາລະທາງການເງິນ.',
    introEn:
      "If something unexpected happens — death or disability — this policy clears the outstanding loan so your family isn't left with the debt.",
    whatsCoveredHeadingLo: 'ຄວາມຄຸ້ມຄອງຂອງປະກັນໄພເງິນກູ້',
    whatsCoveredHeadingEn: 'What loan insurance covers',
    whatsCovered: [
      {
        titleLo: 'ຊຳລະເງິນກູ້ຄົງເຫຼືອ',
        titleEn: 'Pay off remaining loan',
        descLo: 'ໃນກໍລະນີຜູ້ກູ້ເສຍຊີວິດ.',
        descEn: 'In case the borrower passes away.',
      },
      {
        titleLo: 'ຄວາມພິການຖາວອນ',
        titleEn: 'Permanent disability',
        descLo: 'ຄຸ້ມຄອງເມື່ອຜູ້ກູ້ບໍ່ສາມາດເຮັດວຽກໄດ້ຖາວອນ.',
        descEn: 'When the borrower can no longer work.',
      },
      {
        titleLo: 'ການເຈັບປ່ວຍຮ້າຍແຮງ',
        titleEn: 'Critical illness',
        descLo: 'ຄຸ້ມຄອງຄ່າຜ່ອນເງິນກູ້ໃນຊ່ວງປິ່ນປົວ.',
        descEn: 'Loan repayment cover during treatment.',
      },
      {
        titleLo: 'ການວ່າງງານ',
        titleEn: 'Loss of income',
        descLo: 'ຄ່າຜ່ອນສູງສຸດ 6 ເດືອນ.',
        descEn: 'Up to 6 months of repayments.',
      },
    ],
    personas: [
      {
        titleLo: 'ຜູ້ກູ້ເງິນເຮືອນ',
        titleEn: 'Home borrowers',
        descLo: 'ປົກປ້ອງເຮືອນຂອງທ່ານ ແລະ ຄອບຄົວ.',
        descEn: 'Protect your home and family.',
      },
      {
        titleLo: 'ຜູ້ປະກອບການ',
        titleEn: 'Entrepreneurs',
        descLo: 'ປົກປ້ອງສິນເຊື່ອທຸລະກິດ.',
        descEn: 'Cover your business credit.',
      },
      {
        titleLo: 'ກູ້ຮ່ວມ',
        titleEn: 'Co-borrowers',
        descLo: 'ຄຸ້ມຄອງທັງສອງຜູ້ກູ້.',
        descEn: 'Cover for both borrowers.',
      },
    ],
    howToApply: [
      {
        num: '01',
        titleLo: 'ປຶກສາທະນາຄານ',
        titleEn: 'Talk to your bank',
        bodyLo: 'ພວກເຮົາເປັນຄູ່ຮ່ວມຂອງທະນາຄານຫຼາຍແຫ່ງ.',
        bodyEn: 'We partner with major Lao banks.',
      },
      {
        num: '02',
        titleLo: 'ຍື່ນແບບຟອມ',
        titleEn: 'Submit form',
        bodyLo: 'ກຣອກພ້ອມສັນຍາເງິນກູ້.',
        bodyEn: 'Submit with your loan agreement.',
      },
      {
        num: '03',
        titleLo: 'ກົມທະບຽນເລີ່ມຄຸ້ມຄອງ',
        titleEn: 'Cover begins',
        bodyLo: 'ຄຸ້ມຄອງຕາມໄລຍະຂອງເງິນກູ້.',
        bodyEn: 'Cover lasts the loan term.',
      },
    ],
    faqs: [
      {
        qLo: 'ຄ່າປະກັນໄພລວມຢູ່ໃນຄ່າຜ່ອນບໍ?',
        qEn: 'Is the premium part of my repayment?',
        aLo: 'ສາມາດເຮັດໄດ້ — ຫລາຍທະນາຄານລວມຄ່າປະກັນໄພເຂົ້າເງິນຜ່ອນລາຍເດືອນ.',
        aEn: 'Possible — many banks include the premium in the monthly repayment.',
      },
      {
        qLo: 'ຫຼັງເງິນກູ້ໝົດ ປະກັນໄພຊ້ຳເຮັດແນວໃດ?',
        qEn: 'What happens after the loan is paid off?',
        aLo: 'ກົມທະບຽນຈະປິດ. ບໍ່ມີຄ່າທຳນຽມໃນການຍົກເລີກ.',
        aEn: 'The policy closes. No cancellation fee.',
      },
      {
        qLo: 'ຕ້ອງກວດສຸຂະພາບບໍ?',
        qEn: 'Do I need a medical exam?',
        aLo: 'ຂຶ້ນກັບຈຳນວນເງິນກູ້ ແລະ ອາຍຸ — ສ່ວນຫຼາຍບໍ່ຈຳເປັນ.',
        aEn: 'Depends on loan size and age — usually not required.',
      },
      {
        qLo: 'ໄລຍະຄຸ້ມຄອງດົນປານໃດ?',
        qEn: 'How long does cover last?',
        aLo: 'ເທົ່າກັບໄລຍະເງິນກູ້ — ຄຸ້ມຄອງຈົນກວ່າເງິນກູ້ຈະໝົດ.',
        aEn: 'For the life of the loan — until the loan is fully repaid.',
      },
    ],
    related: ['eco', 'third-party'],
  },

  'third-party': {
    slug: 'third-party',
    badgeLo: 'ບັງຄັບຕາມກົດໝາຍ',
    badgeEn: 'Mandatory',
    titleLo: 'ປະກັນໄພຄວາມຮັບຜິດຊອບຕໍ່ບຸກຄົນທີ່ສາມ',
    titleEn: 'Third-party liability insurance',
    introLo:
      'ຕາມກົດໝາຍຂອງ ສປປ ລາວ ເຈົ້າຂອງຍານພາຫະນະທຸກທ່ານຕ້ອງມີປະກັນໄພບຸກຄົນທີ່ສາມ. ກົມທະບຽນຄຸ້ມຄອງຄ່າຮັບຜິດຊອບຕໍ່ຄົນອື່ນ ແລະ ຊັບສິນຂອງເຂົາ.',
    introEn:
      'Lao law requires every vehicle owner to carry third-party insurance. The policy covers liability for harm to other people and their property.',
    whatsCoveredHeadingLo: 'ຄວາມຄຸ້ມຄອງພື້ນຖານ',
    whatsCoveredHeadingEn: 'Core cover',
    whatsCovered: [
      {
        titleLo: 'ການເສຍຊີວິດ ຫຼື ບາດເຈັບຂອງບຸກຄົນທີ່ສາມ',
        titleEn: 'Death or injury of third parties',
        descLo: 'ຄ່າຮັກສາ ແລະ ຄ່າທົດແທນຕາມກົດໝາຍ.',
        descEn: 'Medical and legal compensation.',
      },
      {
        titleLo: 'ຄວາມເສຍຫາຍຊັບສິນ',
        titleEn: 'Property damage',
        descLo: 'ຍານພາຫະນະ ແລະ ຊັບສິນຂອງຄົນອື່ນ.',
        descEn: 'Other vehicles and property.',
      },
      {
        titleLo: 'ຄ່າທະນາຍຄວາມ',
        titleEn: 'Legal fees',
        descLo: 'ການປ້ອງກັນສິດທິໃນສານ.',
        descEn: 'Defence in court if needed.',
      },
      {
        titleLo: 'ການຊ່ວຍເຫລືອໃນເຫດ',
        titleEn: 'Roadside assistance',
        descLo: 'ສາຍດ່ວນ 1819 ຕະຫລອດ 24 ຊົ່ວໂມງ.',
        descEn: '1819 hotline answers 24/7.',
      },
    ],
    personas: [
      {
        titleLo: 'ຜູ້ຂັບລົດຈັກ',
        titleEn: 'Motorbike riders',
        descLo: 'ຄຸ້ມຄອງພື້ນຖານສຳລັບລົດຈັກທຸກປະເພດ.',
        descEn: 'Basic cover for all motorbikes.',
      },
      {
        titleLo: 'ຜູ້ຂັບລົດໃຫຍ່',
        titleEn: 'Car drivers',
        descLo: 'ບັງຄັບສຳລັບຍານພາຫະນະທຸກປະເພດ.',
        descEn: 'Mandatory for all cars.',
      },
      {
        titleLo: 'ລົດບັນທຸກ',
        titleEn: 'Trucks & buses',
        descLo: 'ຄຸ້ມຄອງສູງສຳລັບຍານພາຫະນະຂະໜາດໃຫຍ່.',
        descEn: 'Higher cover limits for large vehicles.',
      },
    ],
    howToApply: [
      {
        num: '01',
        titleLo: 'ກະກຽມເອກະສານ',
        titleEn: 'Prepare documents',
        bodyLo: 'ໃບທະບຽນລົດ ແລະ ໃບຂັບຂີ່.',
        bodyEn: 'Vehicle registration and licence.',
      },
      {
        num: '02',
        titleLo: 'ສົ່ງແບບຟອມ',
        titleEn: 'Submit form',
        bodyLo: 'ທີ່ສາຂາໃດກໍ່ໄດ້.',
        bodyEn: 'At any LAP branch.',
      },
      {
        num: '03',
        titleLo: 'ຮັບໃບປະກັນ',
        titleEn: 'Get certificate',
        bodyLo: 'ໃບປະກັນພ້ອມໃຊ້ໃນວັນດຽວ.',
        bodyEn: 'Certificate ready same-day.',
      },
    ],
    faqs: [
      {
        qLo: 'ມັນຄຸ້ມຄອງລົດຂອງຂ້ອຍດ້ວຍບໍ?',
        qEn: 'Does this cover my own car?',
        aLo: 'ບໍ່ — ກົມທະບຽນບຸກຄົນທີ່ສາມຄຸ້ມຄອງສະເພາະຄົນ ແລະ ຊັບສິນຂອງບຸກຄົນອື່ນເທົ່ານັ້ນ. ສຳລັບລົດຂອງທ່ານເອງ ໃຫ້ເພີ່ມປະກັນໄພລົດ.',
        aEn: 'No — third-party only covers others. For your own car, add Vehicle Insurance.',
      },
      {
        qLo: 'ໄລຍະຄຸ້ມຄອງດົນປານໃດ?',
        qEn: 'How long is the cover?',
        aLo: 'ມາດຕະຖານ 1 ປີ — ຕໍ່ໄດ້ທຸກປີ.',
        aEn: 'Standard 12 months — renew annually.',
      },
      {
        qLo: 'ມັນບັງຄັບຕາມກົດໝາຍບໍ?',
        qEn: 'Is it required by law?',
        aLo: 'ແມ່ນແລ້ວ — ເຈົ້າຂອງຍານພາຫະນະທຸກທ່ານຕ້ອງມີ.',
        aEn: 'Yes — every vehicle owner must carry it.',
      },
      {
        qLo: 'ຂ້ອຍສາມາດຮັບໃບປະກັນໃນວັນດຽວໄດ້ບໍ?',
        qEn: 'Can I get the certificate same-day?',
        aLo: 'ໄດ້ — ໃບປະກັນພ້ອມໃຊ້ໃນວັນທີ່ສະໝັກ.',
        aEn: 'Yes — the certificate is ready the day you apply.',
      },
    ],
    related: ['eco', 'loan'],
  },
};
