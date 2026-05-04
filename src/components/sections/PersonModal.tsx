'use client';

import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { T } from '@/components/i18n';
import { Pill } from '@/components/ui';
import type { Person } from '@/data/board';

type PersonModalProps = {
  person: Person | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/**
 * Person details dialog. Built on Radix Dialog directly (rather than the
 * `Modal` primitive) so the layout — circular portrait header next to
 * name/role — can match the card visuals on the Board page.
 *
 * Esc-close, outside-click-close, focus trap, scroll lock, and `aria-modal`
 * all come from Radix.
 */
export function PersonModal({ person, open, onOpenChange }: PersonModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-lap-ink-900/55 fixed inset-0 z-[60] backdrop-blur-sm" />
        <Dialog.Content className="border-lap-border fixed top-1/2 left-1/2 z-[60] w-[92vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border bg-white p-5 shadow-2xl outline-none sm:p-8">
          {person ? (
            <>
              <div className="mb-5 flex items-start justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  {person.photoSrc ? (
                    <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
                      <Image
                        src={person.photoSrc}
                        alt={person.nameEn}
                        fill
                        sizes="(min-width: 640px) 80px, 64px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="bg-lap-primary-50 text-lap-primary-700 flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-bold sm:h-20 sm:w-20 sm:text-2xl">
                      {person.initials}
                    </div>
                  )}
                  <div>
                    <Dialog.Title asChild>
                      <h2 className="lap-h3 mb-1">
                        <T lo={person.nameLo} en={person.nameEn} />
                      </h2>
                    </Dialog.Title>
                    <Dialog.Description asChild>
                      <span>
                        <Pill>
                          <T lo={person.roleLo} en={person.roleEn} />
                        </Pill>
                      </span>
                    </Dialog.Description>
                  </div>
                </div>
                <Dialog.Close
                  aria-label="Close"
                  className="hover:bg-lap-surface-50 text-lap-ink-600 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                >
                  <X className="h-5 w-5" aria-hidden />
                </Dialog.Close>
              </div>
              <p className="text-lap-ink-600 leading-relaxed">
                <T lo={person.bioLo} en={person.bioEn} />
              </p>
            </>
          ) : (
            // Radix requires an accessible title even on empty content.
            <Dialog.Title className="sr-only">Person</Dialog.Title>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
