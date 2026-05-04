import { Breadcrumb } from '@/components/layout';
import { Eyebrow, Reveal } from '@/components/ui';
import { T } from '@/components/i18n';
import { PersonGrid } from '@/components/sections/PersonGrid';
import { board } from '@/data/board';

export default function BoardPage() {
  return (
    <>
      <div className="lap-container pt-6 pb-2">
        <Breadcrumb
          items={[
            { label: <T lo="ໜ້າຫຼັກ" en="Home" />, href: '/' },
            { label: <T lo="ສະພາບໍລິຫານ" en="Board of Directors" /> },
          ]}
        />
      </div>
      <section className="py-6 md:py-10">
        <div className="lap-container max-w-3xl">
          <Eyebrow><T lo="ຜູ້ນຳ" en="Leadership" /></Eyebrow>
          <h1 className="lap-h1 mt-3 mb-3"><T lo="ສະພາບໍລິຫານ" en="Board of Directors" /></h1>
          <p className="text-lap-ink-600 text-lg"><T lo="ສະພາບໍລິຫານຂອງ LAP ຮັບຜິດຊອບການກຳກັບ ແລະ ການກຳນົດທິດທາງຍຸດທະສາດໃນທຸກດ້ານ." en="The LAP board oversees governance and sets the strategic direction across all areas of the business." /></p>
        </div>
      </section>
      <section className="pb-6">
        <div className="lap-container">
          <Reveal><PersonGrid people={board} featured /></Reveal>
        </div>
      </section>
    </>
  );
}
