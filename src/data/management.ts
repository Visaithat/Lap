import type { Person } from './board';

/**
 * Executive Management — 3 members.
 * Names + roles sourced from https://lap.com.la/index.php/board-of-director-2/.
 * All three portraits live under `/public/img/management/`.
 */
export const management: Person[] = [
  {
    id: 'phaingaek-thammanam-director',
    initials: 'PT',
    nameLo: 'ທ່ານ ໄພຍະເອກ ທຳມະນາມ',
    nameEn: 'Mr. Phaingaek TAMMANAM',
    roleLo: 'ຜູ້ອຳນວຍການ',
    roleEn: 'Director',
    bioLo:
      'ຜູ້ອຳນວຍການ ບໍລິສັດ ປະກັນໄພລາວ-ຫວຽດ. [ປະຫວັດເພີ່ມເຕີມ — ຢືນຢັນກັບລູກຄ້າ]',
    bioEn:
      'Director of Lao-Viet Insurance (LAP). [more bio — confirm with client]',
    photoSrc: '/img/management/director.png',
  },
  {
    id: 'sommisay-vongkhamsao-deputy',
    initials: 'SV',
    nameLo: 'ທ່ານ ສົມມີໄຊ ວົງຄຳຊາວ',
    nameEn: 'Mr. Sommisay VONGKHAMSAO',
    roleLo: 'ຮອງຜູ້ອຳນວຍການ',
    roleEn: 'Deputy General Director',
    bioLo:
      'ຮອງຜູ້ອຳນວຍການ. [ປະຫວັດເພີ່ມເຕີມ — ຢືນຢັນກັບລູກຄ້າ]',
    bioEn:
      'Deputy General Director. [more bio — confirm with client]',
    photoSrc: '/img/management/deputy-director.png',
  },
  {
    id: 'toulaphone-santisouk-deputy',
    initials: 'TS',
    nameLo: 'ທ່ານ ນາງ ຕຸລາພອນ ສັນຕິສຸກ',
    nameEn: 'Mrs. Toulaphone SANTISOUK',
    roleLo: 'ຮອງຜູ້ອຳນວຍການ',
    roleEn: 'Deputy General Director',
    bioLo:
      'ຮອງຜູ້ອຳນວຍການ. [ປະຫວັດເພີ່ມເຕີມ — ຢືນຢັນກັບລູກຄ້າ]',
    bioEn:
      'Deputy General Director. [more bio — confirm with client]',
    photoSrc: '/img/management/deputy-toulaphone.png',
  },
];
