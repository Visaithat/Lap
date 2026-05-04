'use client';

import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type AccordionItem = {
  value: string;
  title: ReactNode;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  className?: string;
};

/**
 * Radix-backed accordion. Defaults to `type="single"` with a collapsible
 * design that matches the FAQ behaviour from the static site.
 */
export function Accordion({
  items,
  type = 'single',
  defaultValue,
  className,
}: AccordionProps) {
  const root =
    type === 'single' ? (
      <RadixAccordion.Root
        type="single"
        collapsible
        defaultValue={defaultValue as string | undefined}
        className={cn('flex flex-col gap-2', className)}
      >
        {items.map((it) => (
          <Item key={it.value} item={it} />
        ))}
      </RadixAccordion.Root>
    ) : (
      <RadixAccordion.Root
        type="multiple"
        defaultValue={defaultValue as string[] | undefined}
        className={cn('flex flex-col gap-2', className)}
      >
        {items.map((it) => (
          <Item key={it.value} item={it} />
        ))}
      </RadixAccordion.Root>
    );

  return root;
}

function Item({ item }: { item: AccordionItem }) {
  return (
    <RadixAccordion.Item
      value={item.value}
      className="border-lap-border overflow-hidden rounded-2xl border bg-white"
    >
      <RadixAccordion.Header asChild>
        <RadixAccordion.Trigger className="group hover:bg-lap-primary-50/40 text-lap-ink-900 flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium transition-colors">
          <span>{item.title}</span>
          <ChevronDown
            className="text-lap-ink-600 h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
      <RadixAccordion.Content className="text-lap-ink-700 px-5 pb-4 text-sm leading-relaxed">
        {item.content}
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
}
