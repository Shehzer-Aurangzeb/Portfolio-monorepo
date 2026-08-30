import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shehzarabbasi.vercel.app'),
  title: {
    default: 'Shehzar Aurangzeb — Software Engineer',
    template: '%s — Shehzar Aurangzeb',
  },
  description:
    'Fullstack software engineer building polished web and mobile products. Selected work across React, React Native, Next.js, Node and Sanity.',
  applicationName: 'Shehzar Aurangzeb',
  authors: [{ name: 'Shehzar Aurangzeb', url: 'https://shehzarabbasi.vercel.app' }],
  creator: 'Shehzar Aurangzeb',
  keywords: [
    'Shehzar Aurangzeb',
    'Software Engineer',
    'Fullstack Developer',
    'React',
    'React Native',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Sanity',
    'Portfolio',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://shehzarabbasi.vercel.app',
    siteName: 'Shehzar Aurangzeb',
    title: 'Shehzar Aurangzeb — Software Engineer',
    description:
      'Fullstack software engineer building polished web and mobile products. Selected work across React, React Native, Next.js, Node and Sanity.',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shehzar Aurangzeb — Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shehzar Aurangzeb — Software Engineer',
    description: 'Fullstack software engineer building polished web and mobile products.',
    images: ['/og-image.png'],
    creator: '@shehzar',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
