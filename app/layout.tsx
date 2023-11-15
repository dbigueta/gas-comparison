import Footer from '@/components/globals/Footer';
import './buttons.css';
import './globals.css';
import './typography.css';
import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: '400', variable: '--font-primary' });
const montserrat = Montserrat({ subsets: ['latin'], weight: '400', variable: '--font-secondary' });

export const metadata: Metadata = {
  title: 'Gas Comparison',
  description: 'Comparing gas prices between Canadian and US gas stations',
  authors: [{ name: 'Dexter Bigueta' }],
  publisher: 'Dexter Bigueta',
  creator: 'Dexter Bigueta',
  generator: 'Next.js',
  applicationName: 'Gas Comparison',
  icons: {
    icon: '/assets/favicon.ico',
  },
  openGraph: {
    title: 'Gas Comparison',
    description: 'Comparing gas prices between Canadian and US gas stations',
    url: 'https://gas-comparison.netlify.app',
    siteName: 'Gas Comparison',
    images: [
      {
        url: '/assets/DexterProfile.png',
        width: 500,
        height: 500,
        alt: 'Icon of Dexter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gas Comparison',
    description: 'Comparing gas prices between Canadian and US gas stations',
    creator: '@dexterbigueta',
    images: ['/assets/DexterProfile.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${montserrat.variable} font-primary bg-neutral-500 bg-none`}>
        <main className="overflow-hidden min-h-main bg-primary-400">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
