import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Header, Footer } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FiCTiON Буккросинг',
  description:
    'Офіційний сайт буккросингу для танцювальної групи FiCTiON та їх друзів',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body
        className={`${inter.className} flex min-h-[100vh] flex-col bg-warmBg text-primary`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
