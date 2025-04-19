import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Signature Plumbing | Professional Plumbing Services in Toronto",
  description: "Professional plumbing services in Toronto including emergency repairs, installations, and maintenance. Available 24/7 for all your plumbing needs. Call 416-450-9504 for immediate assistance.",
  keywords: "plumbing, emergency plumbing, plumbing services, plumbing repairs, plumbing installation, Toronto plumber, Etobicoke plumbing, Mississauga plumbing",
  authors: [{ name: "Signature Plumbing" }],
  creator: "Signature Plumbing",
  publisher: "Signature Plumbing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://signatureplumbing.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Signature Plumbing | Professional Plumbing Services in Toronto",
    description: "Professional plumbing services in Toronto including emergency repairs, installations, and maintenance. Available 24/7 for all your plumbing needs.",
    url: 'https://signatureplumbing.ca',
    siteName: 'Signature Plumbing',
    images: [
      {
        url: '/logo3.png',
        width: 180,
        height: 65,
        alt: 'Signature Plumbing Logo',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Signature Plumbing | Professional Plumbing Services in Toronto",
    description: "Professional plumbing services in Toronto including emergency repairs, installations, and maintenance. Available 24/7 for all your plumbing needs.",
    images: ['/logo3.png'],
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
  icons: {
    icon: [
      { url: '/url-logo.png', type: 'image/png' },
    ],
    shortcut: '/url-logo.png',
    apple: '/url-logo.png',
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
