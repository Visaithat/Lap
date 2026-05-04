export type OrgNode = {
  id: string;
  titleLo: string;
  titleEn: string;
  /** Optional sub-label rendered under the title (e.g. "3 teams"). */
  subtitleLo?: string;
  subtitleEn?: string;
  childrenIds?: string[];
};

/**
 * Org tree from `lap/about/org-chart.html`.
 * Root → CEO → 5 departments. The source file flags this as
 * "[placeholder structure — confirm with client]" — surface that banner
 * on the page itself.
 *
 * `childrenIds` reference other entries by `id`. Render is recursive.
 */
export const orgChart: OrgNode[] = [
  {
    id: 'board',
    titleLo: 'ສະພາບໍລິຫານ',
    titleEn: 'Board of Directors',
    subtitleLo: 'ຜູ້ກຳກັບ',
    subtitleEn: 'Governance',
    childrenIds: ['ceo'],
  },
  {
    id: 'ceo',
    titleLo: 'ຜູ້ອຳນວຍການໃຫຍ່',
    titleEn: 'General Director',
    subtitleLo: 'CEO',
    subtitleEn: 'CEO',
    childrenIds: ['sales', 'underwriting', 'claims', 'finance', 'customer-care'],
  },
  {
    id: 'sales',
    titleLo: 'ການຂາຍ',
    titleEn: 'Sales',
    subtitleLo: '3 ທີມ',
    subtitleEn: '3 teams',
  },
  {
    id: 'underwriting',
    titleLo: 'ການຮັບປະກັນໄພ',
    titleEn: 'Underwriting',
    subtitleLo: '2 ທີມ',
    subtitleEn: '2 teams',
  },
  {
    id: 'claims',
    titleLo: 'ສິນທົດແທນ',
    titleEn: 'Claims',
    subtitleLo: '2 ທີມ',
    subtitleEn: '2 teams',
  },
  {
    id: 'finance',
    titleLo: 'ການເງິນ',
    titleEn: 'Finance',
    subtitleLo: '1 ທີມ',
    subtitleEn: '1 team',
  },
  {
    id: 'customer-care',
    titleLo: 'ບໍລິການລູກຄ້າ',
    titleEn: 'Customer Care',
    subtitleLo: '2 ທີມ',
    subtitleEn: '2 teams',
  },
];

export const orgChartRootId = 'board';
