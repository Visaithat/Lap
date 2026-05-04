'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';
import { createElement, type ReactNode } from 'react';

type AsTag = 'div' | 'section' | 'li' | 'article' | 'ul' | 'ol';

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Distance in px to slide up from. Default 56 (deliberately strong). */
  y?: number;
  /** Fraction of element that must be in view before firing. Default 0.05 — fires very early. */
  amount?: number;
  className?: string;
  as?: AsTag;
};

const variants: Variants = {
  hidden: (y: number) => ({ opacity: 0, y, scale: 0.96, filter: 'blur(6px)' }),
  visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
};

/**
 * Single-element scroll reveal. Plays opacity + y + scale + blur on entry.
 * Fires when the element is 120px below the viewport bottom so the user
 * actually sees the animation happen as they scroll.
 */
export function Reveal({
  children,
  delay = 0,
  y = 56,
  amount = 0.05,
  className,
  as = 'div',
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return createElement(as, { className }, children);
  }

  const Tag = motion[as];

  return (
    <Tag
      className={className}
      custom={y}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: '0px 0px -120px 0px' }}
      variants={variants}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// StaggerGroup / StaggerItem — for grids and lists where children should
// cascade in one-by-one rather than as a single block.
// ─────────────────────────────────────────────────────────────────────────────

const groupVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
  as?: AsTag;
  /** Override stagger interval (seconds). Default 0.09. */
  stagger?: number;
};

export function StaggerGroup({
  children,
  className,
  amount = 0.05,
  as = 'div',
  stagger,
}: StaggerGroupProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return createElement(as, { className }, children);
  }

  const variantsToUse: Variants = stagger
    ? {
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.06 },
        },
      }
    : groupVariants;

  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: '0px 0px -100px 0px' }}
      variants={variantsToUse}
    >
      {children}
    </Tag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: AsTag;
};

export function StaggerItem({
  children,
  className,
  as = 'div',
}: StaggerItemProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return createElement(as, { className }, children);
  }

  const Tag = motion[as];

  return (
    <Tag className={className} variants={itemVariants}>
      {children}
    </Tag>
  );
}
