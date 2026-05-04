'use client';

import type { ElementType, ReactNode } from 'react';
import { useLang } from './useLang';
import { resolve } from './dict';

type TPropsLegacy = {
  id?: undefined;
  lo: ReactNode;
  en: ReactNode;
  as?: ElementType;
  className?: string;
};

type TPropsKey = {
  id: string;
  lo?: undefined;
  en?: undefined;
  as?: ElementType;
  className?: string;
};

type TProps = TPropsLegacy | TPropsKey;

/**
 * Inline bilingual text. Two call shapes:
 *   <T id="footer.legal.privacy" />            (preferred — looks up locales/*.json)
 *   <T lo="ປົກປ້ອງ" en="Protect" />              (legacy — inline strings)
 *
 * Stamps `lang=` on the wrapper so screen readers and Lao-aware fonts
 * behave correctly.
 */
export function T(props: TProps) {
  const { lang } = useLang();
  const Component = (props.as ?? 'span') as ElementType;
  const content =
    props.id !== undefined
      ? resolve(lang, props.id)
      : lang === 'lo'
        ? props.lo
        : props.en;
  return (
    <Component lang={lang} className={props.className}>
      {content}
    </Component>
  );
}
