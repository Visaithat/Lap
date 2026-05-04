/**
 * Tailwind 4 driven by `@theme` in src/app/globals.css.
 *
 * Tailwind v4 does not require a config file — the brief acknowledges this
 * and says: "If create-next-app gives you Tailwind 4 with `@theme` in CSS,
 * you may instead encode the same tokens as `@theme` directives in
 * globals.css — pick whichever the scaffold gives you and document the
 * choice in a comment."
 *
 * We chose the @theme approach (canonical Tailwind 4) but keep this file
 * documenting the same palette so anyone reading the repo can see the
 * tokens in one place. Tailwind v4 ignores this file unless explicitly
 * loaded via `@config "../../tailwind.config.ts";` in CSS.
 *
 * The actual source of truth is src/app/globals.css `@theme {}`.
 */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lap: {
          'primary-900': '#014C75',
          'primary-700': '#0290DA',
          'primary-500': '#36A9E1',
          'primary-50':  '#E6F4FC',
          'accent-500':  '#FFC20F',
          'accent-600':  '#E0A800',
          'accent-50':   '#FFF7DB',
          'danger-600':  '#DC2626',
          'danger-700':  '#B91C1C',
          'ink-900':     '#0F172A',
          'ink-700':     '#1E293B',
          'ink-600':     '#475569',
          'ink-400':     '#94A3B8',
          'surface-0':   '#FFFFFF',
          'surface-50':  '#FFFFFF',
          'border':      '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'var(--font-lao)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'lap-rest':  '0 4px 20px -4px rgba(2,144,218,0.12)',
        'lap-hover': '0 10px 30px -8px rgba(2,144,218,0.18)',
      },
      borderRadius: {
        'lap-card': '16px',
      },
    },
  },
  plugins: [],
};

export default config;
