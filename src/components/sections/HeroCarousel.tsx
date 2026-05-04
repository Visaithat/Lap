'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Landmark,
  Phone,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { T } from '@/components/i18n';
import { Eyebrow } from '@/components/ui';
import { cn } from '@/lib/cn';

const SLIDES = [
  { src: '/img/hero/hero-1.png', altLo: 'ປະກັນໄພການກໍ່ສ້າງ', altEn: 'Construction insurance' },
  { src: '/img/hero/hero-2.png', altLo: 'ສຸຂະພາບຄອບຄົວ', altEn: 'Family health' },
  { src: '/img/hero/hero-3.png', altLo: 'ປະກັນໄພການເດີນທາງ', altEn: 'Travel insurance' },
  { src: '/img/hero/hero-4.png', altLo: 'ປະກັນໄພຊັບສິນ', altEn: 'Property insurance' },
  { src: '/img/hero/hero-5.png', altLo: 'ຜະລິດຕະພັນທັງໝົດ', altEn: 'All products' },
] as const;

const AUTOPLAY_DELAY = 5000;

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeReducedMotion(cb: () => void) {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener('change', cb);
  return () => mql.removeEventListener('change', cb);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

/**
 * useSyncExternalStore avoids the `react-hooks/set-state-in-effect` lint error
 * that a useState+useEffect pair would trigger here, while still subscribing
 * to live changes of the user's reduced-motion preference.
 */
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

export function HeroCarousel() {
  const reducedMotion = usePrefersReducedMotion();

  // Build a fresh Autoplay plugin per render but stabilise the *reference*
  // by memoising on the only dependency (the reduced-motion preference).
  // Embla treats `[]` as no plugins, which is what we want when motion is
  // reduced so the carousel never auto-advances.
  const plugins = useMemo(
    () =>
      reducedMotion
        ? []
        : [
            Autoplay({
              delay: AUTOPLAY_DELAY,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ],
    [reducedMotion],
  );
  const options = useMemo(
    () => ({ loop: true, duration: reducedMotion ? 0 : 28 }),
    [reducedMotion],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (idx: number) => emblaApi?.scrollTo(idx),
    [emblaApi],
  );

  return (
    <section className="relative overflow-hidden pt-10 pb-12 md:pt-16 md:pb-20">
      {/* Soft background ornaments */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden sm:block">
        <div className="bg-lap-primary-50 absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full opacity-70 blur-3xl" />
        <div className="bg-lap-accent-50 absolute top-40 -left-24 h-[320px] w-[320px] rounded-full opacity-60 blur-3xl" />
      </div>

      <div className="lap-container">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Hero text */}
          <div className="lg:col-span-7">
            <Eyebrow>
              <T
                lo="ປະກັນໄພຄຸນນະພາບສາກົນ · ຕັ້ງແຕ່ 2010"
                en="International-grade insurance · Since 2010"
              />
            </Eyebrow>
            <h1 className="lap-display mt-5 mb-5">
              <T
                as="span"
                className="block"
                lo="ປົກປ້ອງສິ່ງສຳຄັນ"
                en="Protect what matters"
              />
              <T
                as="span"
                className="text-lap-primary-700 block"
                lo="ໃນຊີວິດທ່ານ"
                en="in your life"
              />
            </h1>
            <p className="text-lap-ink-600 mb-8 max-w-prose text-base sm:text-lg">
              <T
                lo="ໃຫ້ບໍລິການປະກັນໄພຄົບວົງຈອນຕັ້ງແຕ່ ປະກັນໄພລົດ ປະກັນໄພເງິນກູ້ ຈົນເຖິງປະກັນໄພບຸກຄົນທີ່ສາມ — ດ້ວຍຄວາມໄວ້ວາງໃຈຂອງລູກຄ້າທົ່ວ ສປປ ລາວ."
                en="Comprehensive insurance for vehicles, loans, and beyond — trusted by customers across the Lao PDR."
              />
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="/downloads" className="lap-btn lap-btn-primary">
                <T lo="ຮັບໃບສະເໜີລາຄາ" en="Get a Quote" />
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="#products" className="lap-btn lap-btn-secondary">
                <T lo="ເບິ່ງຜະລິດຕະພັນ" en="Browse Products" />
              </Link>
            </div>

            {/* Inline trust strip — mirrors source hero */}
            <ul className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              <li className="flex items-start gap-2.5">
                <ShieldCheck
                  className="text-lap-primary-700 mt-0.5 h-5 w-5 shrink-0"
                  aria-hidden
                />
                <div className="text-sm leading-snug">
                  <span className="text-lap-ink-900 block font-bold tabular-nums">
                    15+
                  </span>
                  <span className="text-lap-ink-600">
                    <T lo="ປີໃນຕະຫຼາດ" en="Years in market" />
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Users
                  className="text-lap-primary-700 mt-0.5 h-5 w-5 shrink-0"
                  aria-hidden
                />
                <div className="text-sm leading-snug">
                  <span className="text-lap-ink-900 block font-bold">
                    50,000+
                  </span>
                  <span className="text-lap-ink-600">
                    <T lo="ລູກຄ້າ" en="Customers" />
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  className="text-lap-primary-700 mt-0.5 h-5 w-5 shrink-0"
                  aria-hidden
                />
                <div className="text-sm leading-snug">
                  <span className="text-lap-ink-900 block font-bold">
                    24 / 7
                  </span>
                  <span className="text-lap-ink-600">
                    <T lo="ບໍລິການ" en="Service" />
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Landmark
                  className="text-lap-primary-700 mt-0.5 h-5 w-5 shrink-0"
                  aria-hidden
                />
                <div className="text-sm leading-snug">
                  <span className="text-lap-ink-900 block font-bold">
                    <T lo="ກຳກັບໂດຍ" en="Regulated by" />
                  </span>
                  <span className="text-lap-ink-600">
                    <T
                      lo="ທະນາຄານແຫ່ງ ສປປ ລາວ"
                      en="Bank of the Lao PDR"
                    />
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Hero campaign carousel */}
          <div className="lg:col-span-5">
            <div className="bg-lap-primary-50 shadow-lap-rest relative aspect-[4/5] overflow-hidden rounded-[28px]">
              {/* Embla viewport — invisibly drives the active index. Slides
                  themselves are absolutely positioned and cross-fade via
                  opacity, which is what the source ports calls for. */}
              <div className="h-full w-full opacity-0" ref={emblaRef}>
                <div className="flex h-full">
                  {SLIDES.map((s, i) => (
                    <div
                      key={s.src}
                      className="min-w-0 shrink-0 grow-0 basis-full"
                      aria-hidden
                      data-slide-index={i}
                    />
                  ))}
                </div>
              </div>

              {/* Visual stack — cross-fade via opacity */}
              <div className="pointer-events-none absolute inset-0">
                {SLIDES.map((s, i) => (
                  <div
                    key={s.src}
                    className={cn(
                      'absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none',
                      i === selectedIndex ? 'opacity-100' : 'opacity-0',
                    )}
                  >
                    <Image
                      src={s.src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      priority={i === 0}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Prev / next */}
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Previous slide"
                className="text-lap-primary-700 shadow-lap-rest absolute top-1/2 left-3 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Next slide"
                className="text-lap-primary-700 shadow-lap-rest absolute top-1/2 right-3 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>

              {/* Dots */}
              <div
                className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5"
                role="tablist"
                aria-label="Slide pagination"
              >
                {SLIDES.map((_, i) => {
                  const active = i === selectedIndex;
                  return (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-label={`Slide ${i + 1}`}
                      onClick={() => scrollTo(i)}
                      className={cn(
                        'h-1.5 rounded-full transition-all',
                        active ? 'w-6 bg-white' : 'w-1.5 bg-white/60',
                      )}
                    />
                  );
                })}
              </div>

              {/* Floating hotline chip */}
              <div className="shadow-lap-rest absolute top-5 right-5 flex items-center gap-2.5 rounded-2xl border border-white bg-white/95 px-4 py-2.5 backdrop-blur-sm">
                <span className="bg-lap-danger-600 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white">
                  <Phone className="h-4 w-4" aria-hidden />
                </span>
                <div className="leading-tight">
                  <span className="text-lap-ink-400 block text-[10px] font-semibold tracking-wider uppercase">
                    <T lo="ສາຍດ່ວນ" en="Hotline" />
                  </span>
                  <a
                    href="tel:1819"
                    className="text-lap-ink-900 block text-base font-bold tabular-nums"
                  >
                    1819
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
