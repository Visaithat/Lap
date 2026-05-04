'use client';

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useMotionValue,
  useTransform,
} from 'motion/react';
import { useEffect, useRef } from 'react';

type AnimatedCounterProps = {
  to: number;
  /** Suffix appended to the number, e.g. "+", "k+". */
  suffix?: string;
  /** Locale for grouping separators. Default 'en-US' (so "50,000"). */
  locale?: string;
  /** Animation duration in seconds. Default 1.6. */
  duration?: number;
  className?: string;
};

/**
 * Counts up from 0 → `to` when scrolled into view. Uses a single motion value
 * so React only re-renders the formatted text via `useTransform`.
 */
export function AnimatedCounter({
  to,
  suffix = '',
  locale = 'en-US',
  duration = 1.6,
  className,
}: AnimatedCounterProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  const count = useMotionValue(0);
  const formatted = useTransform(count, (v) =>
    Math.round(v).toLocaleString(locale) + suffix,
  );

  useEffect(() => {
    if (reduced) {
      count.set(to);
      return;
    }
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, reduced, to, duration, count]);

  return (
    <motion.span ref={ref} className={className}>
      {formatted}
    </motion.span>
  );
}
