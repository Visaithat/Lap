import type { Metadata } from 'next';
import { Inter, Noto_Sans_Lao, JetBrains_Mono } from 'next/font/google';
import { LanguageProvider } from '@/components/i18n';
import { Header, Footer, EmergencyHotline } from '@/components/layout';
import { ToastProvider } from '@/components/ui';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const notoLao = Noto_Sans_Lao({
  subsets: ['lao'],
  variable: '--font-lao',
  display: 'swap',
  weight: ['400', '500', '700'],
});

const jetMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['500'],
});

export const metadata: Metadata = {
  title: {
    default: 'LAP — Lanexang Assurance',
    template: '%s · LAP',
  },
  description:
    'Lanexang Assurance — trusted insurance for Laos since 2010. Vehicle, loan, and third-party coverage with 24/7 service.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // Initial Lao-first; LanguageProvider's mount effect updates this
    // to whatever localStorage says on the client.
    <html
      lang="lo"
      className={`${inter.variable} ${notoLao.variable} ${jetMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <LanguageProvider>
          <ToastProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <EmergencyHotline />
          </ToastProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
