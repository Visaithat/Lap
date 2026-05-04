import { Breadcrumb } from '@/components/layout';
import { Eyebrow, Reveal } from '@/components/ui';
import { T } from '@/components/i18n';
import { DownloadGroup } from '@/components/sections/DownloadGroup';
import { downloadGroups } from '@/data/downloads';

export const metadata = { title: 'Downloads' };

export default function DownloadsPage() {
  return (
    <>
      <div className="lap-container pt-6 pb-2">
        <Breadcrumb items={[{ label: <T lo="ໜ້າຫຼັກ" en="Home" />, href: '/' }, { label: <T lo="ດາວໂຫລດ" en="Downloads" /> }]} />
      </div>
      <section className="py-10 md:py-16">
        <div className="lap-container max-w-3xl">
          <Eyebrow><T lo="ເອກະສານ" en="Forms & docs" /></Eyebrow>
          <h1 className="lap-h1 mt-4 mb-5"><T lo="ດາວໂຫລດແບບຟອມ" en="Download forms" /></h1>
          <p className="text-lap-ink-600 text-lg"><T lo="ແບບຟອມ PDF ສຳລັບການສະໝັກ, ການຮັບສະໝັກພະນັກງານ ແລະ ເງື່ອນໄຂປະກັນໄພ." en="PDF forms for applications, careers, and policy wordings." /></p>
        </div>
      </section>
      <section className="pb-20">
        <div className="lap-container flex flex-col gap-20">
          {downloadGroups.map((g, i) => (
            <Reveal key={g.id} delay={i * 0.06}>
              <DownloadGroup data={g} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
