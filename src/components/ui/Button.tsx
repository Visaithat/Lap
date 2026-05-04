import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'emergency';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: 'lap-btn lap-btn-primary',
  secondary: 'lap-btn lap-btn-secondary',
  ghost: 'lap-btn lap-btn-ghost',
  emergency: 'lap-btn lap-btn-emergency',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className, type = 'button', ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(variantClass[variant], className)}
        {...rest}
      />
    );
  },
);
Button.displayName = 'Button';
