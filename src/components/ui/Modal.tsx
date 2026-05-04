'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ModalProps = {
  /** Controlled open state. Omit for uncontrolled (use `trigger`). */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Element that opens the modal — when provided we render uncontrolled. */
  trigger?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  /** Hide the built-in close button (rare). */
  hideCloseButton?: boolean;
  className?: string;
};

/**
 * Thin wrapper over Radix Dialog. Esc-close, outside-click-close, focus
 * trap, scroll lock, and `aria-modal` are all provided by Radix.
 */
export function Modal({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  hideCloseButton = false,
  className,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay className="bg-lap-ink-900/50 fixed inset-0 z-[60] backdrop-blur-sm" />
        <Dialog.Content
          className={cn(
            'border-lap-border fixed top-1/2 left-1/2 z-[60] w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border bg-white p-6 shadow-2xl outline-none',
            className,
          )}
        >
          {title && (
            <Dialog.Title className="text-lap-primary-900 text-lg font-semibold">
              {title}
            </Dialog.Title>
          )}
          {description && (
            <Dialog.Description className="text-lap-ink-600 mt-1 text-sm">
              {description}
            </Dialog.Description>
          )}
          {!title && !description && (
            // Radix warns when Title is missing; provide a hidden one.
            <Dialog.Title className="sr-only">Dialog</Dialog.Title>
          )}
          <div className={cn((title || description) && 'mt-4')}>{children}</div>
          {!hideCloseButton && (
            <Dialog.Close
              aria-label="Close"
              className="hover:bg-lap-surface-50 absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full"
            >
              <X className="h-4 w-4" aria-hidden />
            </Dialog.Close>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
