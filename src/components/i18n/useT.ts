'use client';

import { useCallback } from 'react';
import { useLang } from './useLang';
import { resolve } from './dict';

export function useT() {
  const { lang } = useLang();
  return useCallback((id: string) => resolve(lang, id), [lang]);
}
