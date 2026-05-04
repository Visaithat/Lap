export type Person = {
  id: string;
  initials: string;
  nameLo: string;
  nameEn: string;
  roleLo: string;
  roleEn: string;
  bioLo: string;
  bioEn: string;
  /** Optional portrait. Leave undefined to show the placeholder/initials tile. */
  photoSrc?: string;
};

/**
 * Board of Directors — 5 members.
 * Names + roles sourced from https://lap.com.la/index.php/executive-of-directors/.
 * Portraits live under `/public/img/board/` (copied from the client's folder).
 */
export const board: Person[] = [
  {
    id: 'sengduangdao-sitphaxay',
    initials: 'SS',
    nameLo: 'ທ່ານ ນາງ ແສງດວງດາວ ສິດພະໄຊ',
    nameEn: 'Mrs. Sengduangdao SITPHAXAY',
    roleLo: 'ປະທານສະພາ',
    roleEn: 'Chairman',
    bioLo:
      'ປະທານສະພາບໍລິຫານ ບໍລິສັດ ປະກັນໄພລ້ານຊ້າງ.',
    bioEn:
      'Chairman of the Board, Lanexang Assurance (LAP).',
    photoSrc: '/img/board/chairman.png',
  },
  {
    id: 'phadone-insaveang',
    initials: 'PI',
    nameLo: 'ທ່ານ ປອ ຜາດອນ ອິນສະແຫວງ',
    nameEn: 'Mr. Ph.D Phadone INSAVEANG',
    roleLo: 'ຮອງປະທານ',
    roleEn: 'Vice Chairman',
    bioLo:
      'ຮອງປະທານສະພາບໍລິຫານ.',
    bioEn:
      'Vice Chairman of the Board.',
    photoSrc: '/img/board/vice-chairman.png',
  },
  {
    id: 'phaingaek-thammanam',
    initials: 'PT',
    nameLo: 'ທ່ານ ໄພຍະເອກ ທຳມະນາມ',
    nameEn: 'Mr. Phaingaek THAMMANAM',
    roleLo: 'ກຳມະການ ທັງເປັນຜູ້ອຳນວຍການ',
    roleEn: 'Board Member & General Director',
    bioLo:
      'ກຳມະການ ແລະ ຜູ້ອຳນວຍການໃຫຍ່ ບໍລິສັດ ປະກັນໄພລ້ານຊ້າງ.',
    bioEn:
      'Board Member and General Director of Lanexang Assurance (LAP).',
    photoSrc: '/img/board/director-general.png',
  },
  {
    id: 'toulaphone-santisouk',
    initials: 'TS',
    nameLo: 'ທ່ານ ນາງ ຕຸລາພອນ ສັນຕິສຸກ',
    nameEn: 'Mrs. Toulaphone SANTISOUK',
    roleLo: 'ກຳມະການ',
    roleEn: 'Board Member',
    bioLo:
      'ກຳມະການສະພາບໍລິຫານ.',
    bioEn:
      'Board Member.',
    photoSrc: '/img/board/member-toulaphone.png',
  },
  {
    id: 'somchid-hongvichid',
    initials: 'SH',
    nameLo: 'ທ່ານ ປອ ສົມຈິດ ຫົງວິຈິດ',
    nameEn: 'Mr. Ph.D Somchid HONGVICHID',
    roleLo: 'ກຳມະການ ອິດສະຫຼະ',
    roleEn: 'Independent Board Member',
    bioLo:
      'ກຳມະການ ອິດສະຫຼະ.',
    bioEn:
      'Independent Board Member.',
    photoSrc: '/img/board/member-somchid.png',
  },
];
