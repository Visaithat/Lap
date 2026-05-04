import { Mail, Phone } from 'lucide-react';
import { T } from '@/components/i18n';

export function CtaBand() {
  return (
    <section className="py-16 md:py-20">
      <div className="lap-container">
        <div className="bg-lap-primary-700 relative overflow-hidden rounded-[24px] p-6 text-white sm:rounded-[28px] sm:p-8 md:p-14">
          {/* Decorative ornament */}
          <svg
            className="absolute -right-20 -bottom-20 h-80 w-80 opacity-20"
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            <circle
              cx="100"
              cy="100"
              r="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            <circle cx="100" cy="100" r="20" fill="white" />
          </svg>

          <div className="relative grid items-center gap-6 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <span className="text-lap-primary-50/80 mb-3 inline-block text-xs font-semibold tracking-wider uppercase">
                <T lo="ຕ້ອງການຄຳແນະນຳ?" en="Need advice?" />
              </span>
              <h2 className="text-2xl leading-tight font-bold text-white sm:text-3xl md:text-4xl">
                <T
                  lo="ໃຫ້ພວກເຮົາຊ່ວຍເລືອກປະກັນໄພທີ່ເໝາະກັບທ່ານ."
                  en="Let us help you choose the right cover."
                />
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
              <a
                href="tel:0309029999"
                className="lap-btn lap-btn-primary justify-center"
              >
                <Phone className="h-4 w-4" aria-hidden />
                <span className="tabular-nums">Call 030 902 9999</span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=Contract@lap.com.la"
                target="_blank"
                rel="noopener noreferrer"
                className="lap-btn justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Email Contract@lap.com.la
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
