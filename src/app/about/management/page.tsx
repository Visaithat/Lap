import { Breadcrumb } from '@/components/layout';
import { Eyebrow, Reveal } from '@/components/ui';
import { T } from '@/components/i18n';
import { PersonGrid } from '@/components/sections/PersonGrid';
import { management } from '@/data/management';

export default function ManagementPage() {
  return (
    <>
      <div className="lap-container pt-6 pb-2">
        <Breadcrumb
          items={[
            { label: <T lo="ໜ້າຫຼັກ" en="Home" />, href: '/' },
            { label: <T lo="ຄະນະຜູ້ບໍລິຫານ" en="Executive Management" /> },
          ]}
        />
      </div>
      <section className="py-10 md:py-16">
        <div className="lap-container max-w-3xl">
          <Eyebrow><T lo="ຜູ້ບໍລິຫານ" en="Executives" /></Eyebrow>
          <h1 className="lap-h1 mt-4 mb-5"><T lo="ຄະນະຜູ້ບໍລິຫານ" en="Executive Management" /></h1>
          <p className="text-lap-ink-600 text-lg"><T lo="ທີມຜູ້ບໍລິຫານທີ່ນຳພາການເຄື່ອນໄຫວປະຈຳວັນຂອງ LAP." en="The team driving day-to-day operations at LAP." /></p>
        </div>
      </section>
      <section className="pb-16">
        <div className="lap-container">
          <Reveal><PersonGrid people={management} variant="portrait" /></Reveal>
        </div>
      </section>
    </>
  );
}
