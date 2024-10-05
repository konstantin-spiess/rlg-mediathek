import { loadEnvConfig } from '@next/env';
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// Use Next.js's `loadEnvConfig` to load environment variables as Drizzle only supports the `.env` file.
const projectDir = process.cwd();
loadEnvConfig(projectDir);

export const env = createEnv({
  server: {
    CF_ACCOUNT_ID: z.string().optional(),
    CF_USER_API_TOKEN: z.string().optional(),
    DB_PREVIEW_DATABASE_ID: z.string().optional(),
    DB_PROD_DATABASE_ID: z.string().optional(),
    DB_LOCAL_PATH: z.string().optional(),
    NODE_ENV: z.enum(['development', 'preview', 'production']).default('development'),
    CLERK_SECRET_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID: z.string().min(1),
    NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID: process.env.NEXT_CONTENTFUL_SPACE_ID,
    NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN: process.env.NEXT_CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  },
});
