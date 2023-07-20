import { Analytics } from '@vercel/analytics/react';
import Navigation from '@/components/navigation';
import { Inter } from 'next/font/google';

import './global.css';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Cristhian Tilleria - Freelance Graphic Designer',
  description:
    'Cristhian Tilleria is a freelance graphic-designer based in NYC working in brand-identity, typography, digital and print design',
  keywords: [
    'graphic-design',
    'design',
    'new-york graphic-designer',
    'freelance graphic-designer',
    'brand-identity',
    'digital-design',
    'print-design',
    'nyc-designer'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <body className={`container ${inter.className}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
