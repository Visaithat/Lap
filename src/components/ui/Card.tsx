import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** Adds the hover-lift / arrow-shift treatment from tokens.css. */
  interactive?: boolean;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ interactive = false, className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn('lap-card', interactive && 'lap-card-interactive', className)}
      {...rest}
    />
  ),
);
Card.displayName = 'Card';
