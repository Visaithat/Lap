import { Breadcrumb } from '@/components/layout';
import { Eyebrow, Reveal } from '@/components/ui';
import { T } from '@/components/i18n';
import { ContactInfo } from '@/components/sections/ContactInfo';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <>
      <div className="lap-container pt-6 pb-2">
        <Breadcrumb items={[{ label: <T lo="ໜ້າຫຼັກ" en="Home" />, href: '/' }, { label: <T lo="ຕິດຕໍ່" en="Contact" /> }]} />
      </div>
      <section className="py-10 md:py-16">
        <div className="lap-container max-w-3xl">
          <Eyebrow><T lo="ຕິດຕໍ່ພວກເຮົາ" en="Get in touch" /></Eyebrow>
          <h1 className="lap-h1 mt-4 mb-5"><T lo="ຕິດຕໍ່ພວກເຮົາ" en="Contact us" /></h1>
          <p className="text-lap-ink-600 text-lg"><T lo="ມີຄຳຖາມ ຫລື ຕ້ອງການຄຳແນະນຳ? ສົ່ງຂໍ້ຄວາມໃຫ້ພວກເຮົາ ຫຼື ໂທສາຍດ່ວນ 1819." en="Got a question or need advice? Send us a message or call the 1819 hotline." /></p>
        </div>
      </section>
      <section className="pb-20">
        <div className="lap-container grid gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-5"><Reveal><ContactInfo /></Reveal></aside>
          <div className="lg:col-span-7"><Reveal delay={0.08}><ContactForm /></Reveal></div>
        </div>
      </section>
    </>
  );
}
