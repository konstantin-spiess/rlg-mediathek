import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';
import './globals.css';

const font = Red_Hat_Display({ subsets: ['latin'] });

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
