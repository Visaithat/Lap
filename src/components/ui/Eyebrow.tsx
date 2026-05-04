import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

/** Uppercase mini-label preceded by a short coloured rule. */
export function Eyebrow({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn('lap-eyebrow', className)} {...rest}>
      {children}
    </span>
  );
}
