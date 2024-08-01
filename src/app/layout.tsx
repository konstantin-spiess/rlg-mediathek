import { AppHeader } from '@/components/app-header';
import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

export const runtime = 'edge';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'RLG Mediathek',
  description: 'RLG Mediathek',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <ClerkProvider>
        <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
          <AppHeader />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
