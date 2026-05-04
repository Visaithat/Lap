import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import tailwindPlugin from 'eslint-plugin-tailwindcss';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Wire eslint-plugin-tailwindcss in. The plugin is built primarily for
  // Tailwind 3; under Tailwind 4 we register it but keep all rules off so
  // it doesn't crash on `@theme` tokens it doesn't know how to resolve.
  // Wave-2 agents can re-enable rules once a Tailwind-4-aware version ships.
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      tailwindcss: tailwindPlugin,
    },
    rules: {
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/classnames-order': 'off',
      'tailwindcss/no-contradicting-classname': 'off',
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
