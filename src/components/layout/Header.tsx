'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Banknote, Car, ChevronDown, Menu, Phone, ShieldCheck, User } from 'lucide-react';
import { cn } from '@/lib/cn';
import { T, useLang } from '@/components/i18n';
import { MobileNav } from './MobileNav';

const HOVER_CLOSE_DELAY_MS = 180;

function useHoverMenu() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const onMouseEnter = useCallback(() => {
    cancelClose();
    setOpen(true);
  }, [cancelClose]);

  const onMouseLeave = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), HOVER_CLOSE_DELAY_MS);
  }, [cancelClose]);

  useEffect(() => cancelClose, [cancelClose]);

  return { open, setOpen, onMouseEnter, onMouseLeave };
}

/**
 * Sticky, glass-blur header with the language toggle, hotline pill,
 * Products / About dropdowns, login button, and mobile drawer trigger.
 *
 * Ports the markup from lap/assets/js/partials.js verbatim, replacing
 * data-lo / data-en swaps with <T lo en /> and the hover-CSS dropdowns
 * with Radix DropdownMenu.
 */
export function Header() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={cn('lap-header', scrolled && 'is-scrolled')}>
        <div className="lap-container flex h-16 items-center gap-4 md:h-20">
          <Link
            href="/"
            className="mr-4 flex shrink-0 items-center gap-2"
            aria-label="LAP Insurance home"
          >
            <Image
              src="/img/lap-logo.png"
              alt="Lanexang Assurance logo"
              width={40}
              height={40}
              priority
              className="h-10 w-10"
            />
            <span className="text-lap-primary-900 hidden text-base leading-tight font-bold sm:inline">
              Lanexang
              <br />
              <span className="text-lap-ink-600 text-xs font-medium">Assurance</span>
            </span>
          </Link>

          <nav
            className="ml-2 hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            <ProductsMenu />
            <AboutMenu />
            <Link href="/contact" className="lap-btn lap-btn-ghost px-3 py-2">
              <T lo="ຕິດຕໍ່" en="Contact" />
            </Link>
            <Link href="/downloads" className="lap-btn lap-btn-ghost px-3 py-2">
              <T lo="ດາວໂຫລດ" en="Downloads" />
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-2 md:gap-3">
            <a
              href="tel:1819"
              className="text-lap-danger-600 border-lap-danger-600/20 bg-lap-danger-600/5 hover:bg-lap-danger-600/10 hidden items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-bold transition-colors sm:inline-flex"
              aria-label="Emergency hotline 1819"
            >
              <Phone className="h-4 w-4" aria-hidden />
              <span className="tabular-nums">1819</span>
            </a>

            <div className="lap-lang" role="group" aria-label="Language">
              <button
                type="button"
                data-lang-btn="lo"
                aria-pressed={lang === 'lo'}
                onClick={() => setLang('lo')}
              >
                ລາວ
              </button>
              <button
                type="button"
                data-lang-btn="en"
                aria-pressed={lang === 'en'}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>

            <Link
              href="/login"
              className="lap-btn lap-btn-secondary hidden !px-4 !py-2 text-sm md:inline-flex"
            >
              <T lo="ເຂົ້າສູ່ລະບົບ" en="Login" />
            </Link>
            <Link
              href="/login"
              className="border-lap-border inline-flex h-9 w-9 items-center justify-center rounded-full border sm:h-10 sm:w-10 md:hidden"
              aria-label="Login"
            >
              <User className="text-lap-ink-700 h-5 w-5" aria-hidden />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label="Open menu"
              className="border-lap-border inline-flex h-9 w-9 items-center justify-center rounded-full border sm:h-10 sm:w-10 lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
    </>
  );
}

function ProductsMenu() {
  const { open, setOpen, onMouseEnter, onMouseLeave } = useHoverMenu();
  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="lap-btn lap-btn-ghost inline-flex items-center gap-1 px-3 py-2"
        >
          <T lo="ຜະລິດຕະພັນ" en="Products" />
          <ChevronDown className="h-4 w-4" aria-hidden />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={0}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="w-[min(18rem,calc(100vw-2rem))] bg-transparent pt-4"
        >
          <div className="lap-dropdown-panel border-lap-border shadow-lap-hover rounded-2xl border bg-white p-2">
          <ProductLink
            href="/products/eco"
            icon={<Car className="h-4 w-4" aria-hidden />}
            titleLo="ປະກັນໄພລົດ"
            titleEn="Vehicle"
            blurbLo="Eco / ຍານພາຫະນະ"
            blurbEn="Eco / vehicle"
          />
          <ProductLink
            href="/products/loan"
            icon={<Banknote className="h-4 w-4" aria-hidden />}
            titleLo="ປະກັນໄພເງິນກູ້"
            titleEn="Loan"
            blurbLo="ປົກປ້ອງເງິນກູ້"
            blurbEn="Protect your loan"
          />
          <ProductLink
            href="/products/third-party"
            icon={<ShieldCheck className="h-4 w-4" aria-hidden />}
            titleLo="ປະກັນໄພບຸກຄົນທີ່ສາມ"
            titleEn="Third-Party"
            blurbLo="ສຳລັບຍານພາຫະນະ"
            blurbEn="For vehicles"
          />
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function AboutMenu() {
  const { open, setOpen, onMouseEnter, onMouseLeave } = useHoverMenu();
  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="lap-btn lap-btn-ghost inline-flex items-center gap-1 px-3 py-2"
        >
          <T lo="ກ່ຽວກັບພວກເຮົາ" en="About" />
          <ChevronDown className="h-4 w-4" aria-hidden />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={0}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="w-[min(16rem,calc(100vw-2rem))] bg-transparent pt-4"
        >
          <div className="lap-dropdown-panel border-lap-border shadow-lap-hover rounded-2xl border bg-white p-2">
            <AboutLink href="/about/board" lo="ສະພາບໍລິຫານ" en="Board of Directors" />
            <AboutLink
              href="/about/management"
              lo="ຄະນະຜູ້ບໍລິຫານ"
              en="Executive Management"
            />
            <AboutLink href="/about/history" lo="ປະຫວັດບໍລິສັດ" en="Company History" />
            <AboutLink
              href="/about/org-chart"
              lo="ໂຄງສ້າງອົງກອນ"
              en="Organization Chart"
            />
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function ProductLink({
  href,
  icon,
  titleLo,
  titleEn,
  blurbLo,
  blurbEn,
}: {
  href: string;
  icon: React.ReactNode;
  titleLo: string;
  titleEn: string;
  blurbLo: string;
  blurbEn: string;
}) {
  return (
    <DropdownMenu.Item asChild>
      <Link
        href={href}
        className="hover:bg-lap-primary-50 flex items-start gap-3 rounded-xl p-3 outline-none"
      >
        <span className="bg-lap-primary-50 text-lap-primary-700 inline-flex h-8 w-8 items-center justify-center rounded-lg">
          {icon}
        </span>
        <span>
          <span className="text-lap-ink-900 block text-sm font-semibold">
            <T lo={titleLo} en={titleEn} />
          </span>
          <span className="text-lap-ink-600 text-xs">
            <T lo={blurbLo} en={blurbEn} />
          </span>
        </span>
      </Link>
    </DropdownMenu.Item>
  );
}

function AboutLink({ href, lo, en }: { href: string; lo: string; en: string }) {
  return (
    <DropdownMenu.Item asChild>
      <Link
        href={href}
        className="hover:bg-lap-primary-50 block rounded-lg px-3 py-2 text-sm font-medium outline-none"
      >
        <T lo={lo} en={en} />
      </Link>
    </DropdownMenu.Item>
  );
}
