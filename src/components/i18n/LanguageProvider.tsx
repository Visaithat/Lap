'use client';

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from 'react';

export type Lang = 'lo' | 'en';

export type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

export const LangContext = createContext<LangContextValue>({
  lang: 'lo',
  setLang: () => {},
});

const STORAGE_KEY = 'lap.lang';

/* ----------------------------------------------------------------
   External store backed by localStorage. Using useSyncExternalStore
   instead of useState+useEffect avoids the
   `react-hooks/set-state-in-effect` warning and keeps SSR safe.
   ---------------------------------------------------------------- */

const subscribers = new Set<() => void>();

function readLangFromStorage(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'lo' || saved === 'en') return saved;
  } catch {
    /* localStorage may be blocked */
  }
  return 'lo';
}

function getSnapshot(): Lang {
  return readLangFromStorage();
}

function getServerSnapshot(): Lang {
  return 'lo';
}

function subscribe(cb: () => void) {
  subscribers.add(cb);
  // React to writes from other tabs.
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) cb();
  };
  window.addEventListener('storage', onStorage);
  return () => {
    subscribers.delete(cb);
    window.removeEventListener('storage', onStorage);
  };
}

function notifySubscribers() {
  subscribers.forEach((cb) => cb());
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Mirror the active language onto <html lang> + data-lang.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore storage errors */
    }
    // localStorage events don't fire in the same tab — notify by hand.
    notifySubscribers();
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
