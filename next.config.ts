import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next doesn't infer one of
  // the parent-directory lockfiles (e.g. C:\Users\Visaithat\package-lock.json).
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
