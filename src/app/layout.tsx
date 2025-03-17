// src/app/layout.tsx
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RootLayout from '@/components/layout/RootLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HLTHeStore - Health & Wellness for Active Adults 50+',
  description: 'Discover trusted health monitoring devices, supplements, fitness products, and wellness solutions designed for active adults over 50. Science-backed recommendations and educational content.',
  keywords: 'health, wellness, seniors, active adults, health monitoring, supplements, fitness, recovery, home health',
  openGraph: {
    title: 'HLTHeStore - Health & Wellness for Active Adults 50+',
    description: 'Discover trusted health monitoring devices, supplements, fitness products, and wellness solutions designed for active adults over 50.',
    url: 'https://hlthestore.com',
    siteName: 'HLTHeStore',
    images: [
      {
        url: 'https://hlthestore.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HLTHeStore - Health & Wellness for Active Adults 50+',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HLTHeStore - Health & Wellness for Active Adults 50+',
    description: 'Discover trusted health monitoring devices, supplements, fitness products, and wellness solutions designed for active adults over 50.',
    creator: '@hlthestore',
    images: ['https://hlthestore.com/twitter-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'verification_token',
  },
  alternates: {
    canonical: 'https://hlthestore.com',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
