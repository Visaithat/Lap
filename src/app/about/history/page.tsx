import { Breadcrumb } from '@/components/layout';
import { Eyebrow, Reveal } from '@/components/ui';
import { T } from '@/components/i18n';
import { Timeline } from '@/components/sections/Timeline';
import { milestones } from '@/data/timeline';

export default function HistoryPage() {
  return (
    <>
      <div className="lap-container pt-6 pb-2">
        <Breadcrumb
          items={[
            { label: <T lo="ໜ້າຫຼັກ" en="Home" />, href: '/' },
            { label: <T lo="ປະຫວັດບໍລິສັດ" en="Company History" /> },
          ]}
        />
      </div>
      <section className="py-10 md:py-16">
        <div className="lap-container max-w-3xl">
          <Eyebrow><T lo="ປະຫວັດ" en="Our story" /></Eyebrow>
          <h1 className="lap-h1 mt-4 mb-5"><T lo="ປະຫວັດຄວາມເປັນມາຂອງ ບໍລິສັດ ລ້ານຊ້າງປະກັນໄພ ມະຫາຊົນ" en="The story of Lanexang Assurance Public Company" /></h1>
          <p className="text-lap-ink-600 text-lg leading-relaxed"><T lo="ຈາກການກໍ່ຕັ້ງໃນປີ 2010 ໂດຍ ທະນາຄານພັດທະນາລາວ (LDB) ແລະ ບໍລິສັດ ຮຸ້ນສ່ວນປະກັນໄພ ໄປສະນີ (PTI), ສູ່ບົດໃໝ່ໃນປີ 2025 ພາຍໃຕ້ການນຳຂອງ ບໍລິສັດ ອາວີ ອິນເວດສເມັ້ນ ຈຳກັດ (ARVY) — 15 ປີຂອງການບໍລິການປະກັນໄພທົ່ວໄປ ໃຫ້ບຸກຄົນ, ຫົວໜ່ວຍທຸລະກິດ, ອົງການຈັດຕັ້ງ ແລະ ໂຄງການລົງທຶນທົ່ວ ສປປ ລາວ." en="From a 2010 founding by Lao Development Bank (LDB) and the Post & Telecommunication Insurance Joint-Stock Corporation (PTI), to a new chapter in 2025 under ARVY Investment Co., Ltd — 15 years of general insurance serving individuals, businesses, organisations, and investment projects across the Lao PDR." /></p>
        </div>
      </section>
      <section className="pb-20">
        <div className="lap-container">
          <Reveal><Timeline milestones={milestones} /></Reveal>
        </div>
      </section>
    </>
  );
}
