import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode;
  error?: ReactNode;
  helpText?: ReactNode;
  containerClassName?: string;
  /**
   * Forwarded to the <label>'s `for=` attribute. If omitted we generate
   * one with `useId()` so RHF's register() result still wires up.
   */
  id?: string;
};

/**
 * Styled label + input that plays nicely with `react-hook-form` —
 * spread `{...register('field')}` onto it and you're done.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helpText,
      className,
      containerClassName,
      id,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    const helpId = `${inputId}-help`;

    return (
      <div className={cn('flex flex-col', containerClassName)}>
        {label && (
          <label htmlFor={inputId} className="lap-label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            error ? errorId : helpText ? helpId : undefined
          }
          className={cn(
            'lap-input',
            error && 'border-lap-danger-600 focus:border-lap-danger-600',
            className,
          )}
          {...rest}
        />
        {error && (
          <p id={errorId} className="text-lap-danger-600 mt-1.5 text-xs">
            {error}
          </p>
        )}
        {helpText && !error && (
          <p id={helpId} className="text-lap-ink-600 mt-1.5 text-xs">
            {helpText}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';
