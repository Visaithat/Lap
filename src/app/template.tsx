'use client';

import { motion, useReducedMotion } from 'motion/react';
import { type ReactNode } from 'react';

/**
 * Per-route fade-in transition. Next.js re-mounts `template.tsx` on every
 * navigation while `layout.tsx` persists, so this is the right place for
 * cross-route transitions without re-mounting the header / footer / providers.
 */
export default function Template({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
