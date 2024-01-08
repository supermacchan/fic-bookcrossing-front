import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/styles/global.css';

import { Header, Footer } from '@/components';

const montserrat = Montserrat({ subsets: ['cyrillic-ext'] });

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
        className={`${montserrat.className} flex min-h-[100vh] flex-col bg-warmBg text-primary`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
