import { Info } from 'lucide-react';
import { Breadcrumb } from '@/components/layout';
import { Eyebrow, Reveal } from '@/components/ui';
import { T } from '@/components/i18n';
import { OrgChart } from '@/components/sections/OrgChart';
import { orgChart, orgChartRootId } from '@/data/orgChart';

export default function OrgChartPage() {
  return (
    <>
      <div className="lap-container pt-6 pb-2">
        <Breadcrumb items={[{ label: <T lo="ໜ້າຫຼັກ" en="Home" />, href: '/' }, { label: <T lo="ໂຄງສ້າງອົງກອນ" en="Organization Chart" /> }]} />
      </div>
      <section className="py-10 md:py-16">
        <div className="lap-container max-w-3xl">
          <Eyebrow><T lo="ໂຄງສ້າງ" en="Structure" /></Eyebrow>
          <h1 className="lap-h1 mt-4 mb-5"><T lo="ໂຄງສ້າງອົງກອນ" en="Organization Chart" /></h1>
          <p className="text-lap-ink-600 text-lg"><T lo="ການແບ່ງໜ້າທີ່ ແລະ ຄວາມຮັບຜິດຊອບໃນ LAP." en="How responsibilities are split across LAP." /></p>
          <div className="bg-lap-accent-50 border-lap-accent-500/30 mt-6 flex items-start gap-3 rounded-xl border p-4 text-sm">
            <Info className="text-lap-accent-600 mt-0.5 h-5 w-5 shrink-0" aria-hidden />
            <span className="font-mono text-xs"><T lo="[ໂຄງສ້າງຕົວຢ່າງ - ຄວາມທີ່ລູກຄ້າຢືນຢັນ]" en="[placeholder structure - confirm with client]" /></span>
          </div>
        </div>
      </section>
      <section className="pb-20"><div className="lap-container"><Reveal><OrgChart nodes={orgChart} rootId={orgChartRootId} /></Reveal></div></section>
    </>
  );
}
