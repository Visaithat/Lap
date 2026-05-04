'use client';

import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { T } from '@/components/i18n';

type MobileNavProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/**
 * Right-side drawer navigation for tablet / mobile breakpoints.
 * Wraps Radix Dialog so we get focus trap, esc-to-close, scroll-lock,
 * and outside-click-close for free.
 */
export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const close = () => onOpenChange(false);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-lap-ink-900/40 data-[state=open]:animate-in data-[state=closed]:animate-out fixed inset-0 z-50 backdrop-blur-sm lg:hidden" />
        <Dialog.Content
          id="mobile-nav"
          aria-label="Mobile menu"
          className="fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm overflow-y-auto bg-white outline-none data-[state=closed]:translate-x-full data-[state=open]:translate-x-0 lg:hidden"
        >
          <div className="border-lap-border flex items-center justify-between border-b p-5">
            <Dialog.Title className="text-lap-primary-900 font-bold">
              <T lo="ເມນູ" en="Menu" />
            </Dialog.Title>
            <Dialog.Close
              className="hover:bg-lap-surface-50 inline-flex h-10 w-10 items-center justify-center rounded-full"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden />
            </Dialog.Close>
          </div>

          <nav className="flex flex-col p-3">
            <SectionLabel lo="ຜະລິດຕະພັນ" en="Products" />
            <DrawerLink onClose={close} href="/products/eco" lo="ປະກັນໄພລົດ" en="Vehicle Insurance" />
            <DrawerLink onClose={close} href="/products/loan" lo="ປະກັນໄພເງິນກູ້" en="Loan Insurance" />
            <DrawerLink onClose={close} href="/products/third-party" lo="ປະກັນໄພບຸກຄົນທີ່ສາມ" en="Third-Party" />

            <SectionLabel lo="ກ່ຽວກັບ" en="About" />
            <DrawerLink onClose={close} href="/about/board" lo="ສະພາບໍລິຫານ" en="Board" />
            <DrawerLink onClose={close} href="/about/management" lo="ຄະນະຜູ້ບໍລິຫານ" en="Management" />
            <DrawerLink onClose={close} href="/about/history" lo="ປະຫວັດ" en="History" />
            <DrawerLink onClose={close} href="/about/org-chart" lo="ໂຄງສ້າງອົງກອນ" en="Org Chart" />

            <SectionLabel lo="ອື່ນໆ" en="More" />
            <DrawerLink onClose={close} href="/contact" lo="ຕິດຕໍ່" en="Contact" />
            <DrawerLink onClose={close} href="/downloads" lo="ດາວໂຫລດ" en="Downloads" />
            <DrawerLink onClose={close} href="/login" lo="ເຂົ້າສູ່ລະບົບ" en="Login" />
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function SectionLabel({ lo, en }: { lo: string; en: string }) {
  return (
    <span className="text-lap-ink-400 px-3 pt-3 pb-1 text-xs font-semibold tracking-wider uppercase first:pt-3 [&:not(:first-child)]:pt-5">
      <T lo={lo} en={en} />
    </span>
  );
}

function DrawerLink({
  href,
  lo,
  en,
  onClose,
}: {
  href: string;
  lo: string;
  en: string;
  onClose: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="hover:bg-lap-primary-50 block rounded-xl px-3 py-2.5 font-medium"
    >
      <T lo={lo} en={en} />
    </Link>
  );
}
