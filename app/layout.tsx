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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${montserrat.variable} font-primary bg-primary-400 bg-none`}>
        <main className="overflow-hidden min-h-main">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
