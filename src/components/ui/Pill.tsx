import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type PillProps = HTMLAttributes<HTMLSpanElement> & {
  icon?: ReactNode;
};

export function Pill({ icon, className, children, ...rest }: PillProps) {
  return (
    <span className={cn('lap-pill', className)} {...rest}>
      {icon}
      {children}
    </span>
  );
}
