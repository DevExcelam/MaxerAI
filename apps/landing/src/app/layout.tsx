import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Maxeria - Cognitive Maintenance for Industry 4.0',
  description:
    'The only offline-first diagnostic platform powered by the MAXER method and generative AI. Predict failures before they happen.',
  keywords: [
    'maintenance',
    'industry 4.0',
    'predictive maintenance',
    'MAXER',
    'diagnostic',
    'AI',
    'offline-first',
  ],
  authors: [{ name: 'Maxeria' }],
  openGraph: {
    title: 'Maxeria - Cognitive Maintenance for Industry 4.0',
    description:
      'The only offline-first diagnostic platform powered by the MAXER method and generative AI.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Maxeria',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maxeria - Cognitive Maintenance for Industry 4.0',
    description:
      'The only offline-first diagnostic platform powered by the MAXER method and generative AI.',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f8f8' },
    { media: '(prefers-color-scheme: dark)', color: '#101f22' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        {/* Material Symbols for icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="font-display">{children}</body>
    </html>
  );
}
