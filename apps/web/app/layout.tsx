import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Maxeria - Cognitive Maintenance for Industry 4.0',
  description: 'The only offline-first diagnostic platform powered by the MAXER method and generative AI. Predict failures before they happen.',
  icons: {
    icon: '/favicon.svg',
    apple: '/icons/icon-192x192.png',
  },
  manifest: '/manifest.webmanifest',
  themeColor: '#13c8ec',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Maxeria',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-display antialiased`}>
        {children}
      </body>
    </html>
  );
}
