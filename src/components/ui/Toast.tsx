'use client';

import * as RadixToast from '@radix-ui/react-toast';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { X, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { cn } from '@/lib/cn';

export type ToastTone = 'success' | 'error' | 'info';

export type ToastInput = {
  title: ReactNode;
  description?: ReactNode;
  tone?: ToastTone;
  duration?: number;
};

type ToastEntry = ToastInput & {
  id: number;
  open: boolean;
};

type ToastContextValue = {
  toast: (input: ToastInput) => void;
};

const ToastContext = createContext<ToastContextValue>({ toast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

const toneIcon: Record<ToastTone, ReactNode> = {
  success: <CheckCircle2 className="h-5 w-5" aria-hidden />,
  error: <AlertCircle className="h-5 w-5" aria-hidden />,
  info: <Info className="h-5 w-5" aria-hidden />,
};

const toneClass: Record<ToastTone, string> = {
  success: 'border-emerald-200 bg-emerald-50 text-emerald-900',
  error: 'border-lap-danger-600/30 bg-red-50 text-lap-danger-700',
  info: 'border-lap-primary-500/30 bg-lap-primary-50 text-lap-primary-900',
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<ToastEntry[]>([]);

  const toast = useCallback((input: ToastInput) => {
    const id = Date.now() + Math.random();
    setEntries((prev) => [
      ...prev,
      { id, open: true, tone: 'info', duration: 4000, ...input },
    ]);
  }, []);

  const setOpen = useCallback((id: number, open: boolean) => {
    setEntries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, open } : e)),
    );
    if (!open) {
      // Drop closed entries after the exit animation buffer.
      setTimeout(
        () => setEntries((prev) => prev.filter((e) => e.id !== id)),
        300,
      );
    }
  }, []);

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      <RadixToast.Provider swipeDirection="right">
        {children}
        {entries.map((entry) => {
          const tone = entry.tone ?? 'info';
          return (
            <RadixToast.Root
              key={entry.id}
              open={entry.open}
              onOpenChange={(o) => setOpen(entry.id, o)}
              duration={entry.duration}
              className={cn(
                'flex items-start gap-3 rounded-xl border p-4 shadow-lg',
                'data-[state=open]:animate-in data-[state=closed]:animate-out',
                toneClass[tone],
              )}
            >
              <span className="mt-0.5 shrink-0">{toneIcon[tone]}</span>
              <div className="flex-1 min-w-0">
                <RadixToast.Title className="text-sm font-semibold">
                  {entry.title}
                </RadixToast.Title>
                {entry.description && (
                  <RadixToast.Description className="mt-0.5 text-sm opacity-90">
                    {entry.description}
                  </RadixToast.Description>
                )}
              </div>
              <RadixToast.Close
                aria-label="Dismiss"
                className="shrink-0 rounded-full p-1 hover:bg-black/5"
              >
                <X className="h-4 w-4" aria-hidden />
              </RadixToast.Close>
            </RadixToast.Root>
          );
        })}
        <RadixToast.Viewport className="fixed bottom-4 right-4 z-[70] flex w-[92vw] max-w-sm flex-col gap-2 outline-none" />
      </RadixToast.Provider>
    </ToastContext.Provider>
  );
}
