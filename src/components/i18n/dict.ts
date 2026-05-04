import en from './locales/en.json';
import lo from './locales/lo.json';
import type { Lang } from './LanguageProvider';

const DICTS = { en, lo } as const;

export function resolve(lang: Lang, id: string): string {
  const root: unknown = DICTS[lang];
  const value = id.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, root);
  return typeof value === 'string' ? value : id;
}
