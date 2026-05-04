import Link from 'next/link';
import { T } from '@/components/i18n';
import { Eyebrow, StaggerGroup, StaggerItem } from '@/components/ui';
import { products } from '@/data/products';

export function ProductsGrid() {
  return (
    <div className="lap-section bg-white">
      <div className="lap-container">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
          <div>
            <Eyebrow>
              <T lo="ຜະລິດຕະພັນ" en="Products" />
            </Eyebrow>
            <h2 className="lap-h1 mt-4">
              <T lo="ຜະລິດຕະພັນປະກັນໄພ" en="Insurance Products" />
            </h2>
            <p className="text-lap-ink-600 mt-3 max-w-prose">
              <T
                lo="ເລືອກຄວາມຄຸ້ມຄອງທີ່ເໝາະກັບຊີວິດ ຄອບຄົວ ຫຼື ທຸລະກິດຂອງທ່ານ."
                en="Choose the cover that fits your life, family, or business."
              />
            </p>
          </div>
        </div>

        <StaggerGroup
          as="ul"
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem as="li" key={p.slug}>
                <Link
                  href={p.href}
                  className="lap-card lap-card-interactive group block p-6"
                >
                  <span className="bg-lap-primary-50 text-lap-primary-700 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="lap-h3 mb-2">
                    <T lo={p.titleLo} en={p.titleEn} />
                  </h3>
                  <p className="text-lap-ink-600 mb-5 text-sm">
                    <T lo={p.blurbLo} en={p.blurbEn} />
                  </p>
                  <span className="text-lap-primary-700 inline-flex items-center gap-1.5 text-sm font-semibold">
                    <T lo="ເບິ່ງລາຍລະອຽດ" en="View details" />
                    <span className="lap-arrow" aria-hidden>
                      →
                    </span>
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </div>
  );
}
