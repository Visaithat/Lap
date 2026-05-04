/* Shared <head> bootstrap: Tailwind config + lucide init.
   Pages also include tokens.css and Google Fonts directly. */
window.tailwind = window.tailwind || {};
tailwind.config = {
  theme: {
    extend: {
      colors: {
        lap: {
          'primary-900': '#014C75', 'primary-700': '#0290DA',
          'primary-500': '#36A9E1', 'primary-50':  '#E6F4FC',
          'accent-500':  '#FFC20F', 'accent-600':  '#E0A800',
          'accent-50':   '#FFF7DB',
          'danger-600':  '#DC2626',
          'ink-900':     '#0F172A', 'ink-700':     '#1E293B',
          'ink-600':     '#475569', 'ink-400':     '#94A3B8',
          'surface-0':   '#FFFFFF', 'surface-50':  '#FFFFFF',
          'border':      '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Lao', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'lap-rest':  '0 4px 20px -4px rgba(2,144,218,0.12)',
        'lap-hover': '0 10px 30px -8px rgba(2,144,218,0.18)',
      },
    },
  },
};
