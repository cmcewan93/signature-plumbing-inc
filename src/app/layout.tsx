import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Signature Plumbing | Professional Plumbing Services in Etobicoke & GTA",
  description: "Trusted plumbing services in Etobicoke and Greater Toronto Area. Emergency plumbing, drain cleaning, water heater installation, and more. 24/7 service available.",
  keywords: "plumbing, emergency plumbing, plumbing services, plumbing repairs, plumbing installation, Toronto plumber, Etobicoke plumbing, Mississauga plumbing",
  authors: [{ name: "Signature Plumbing" }],
  creator: "Signature Plumbing",
  publisher: "Signature Plumbing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://signature-plumbing.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Signature Plumbing | Professional Plumbing Services in Etobicoke & GTA",
    description: "Trusted plumbing services in Etobicoke and Greater Toronto Area. Emergency plumbing, drain cleaning, water heater installation, and more. 24/7 service available.",
    url: 'https://signature-plumbing.ca',
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
    title: "Signature Plumbing | Professional Plumbing Services in Etobicoke & GTA",
    description: "Trusted plumbing services in Etobicoke and Greater Toronto Area. Emergency plumbing, drain cleaning, water heater installation, and more. 24/7 service available.",
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
      { url: '/url-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/url-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/url-logo.png',
    apple: [
      { url: '/url-logo.png', sizes: '180x180', type: 'image/png' },
    ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Plumber",
              "name": "Signature Plumbing",
              "image": "https://signature-plumbing.ca/logo3.png",
              "description": "Professional plumbing services in Etobicoke and Greater Toronto Area. Emergency plumbing, drain cleaning, water heater installation, and more. 24/7 service available.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Etobicoke",
                "addressRegion": "ON",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "43.6532",
                "longitude": "-79.3832"
              },
              "url": "https://signature-plumbing.ca",
              "telephone": "+14164509504",
              "email": "signatureplumbinggta@gmail.com",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              ],
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Etobicoke",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Ontario"
                  },
                  "additionalProperty": {
                    "@type": "PropertyValue",
                    "name": "neighborhoods",
                    "value": [
                      "Islington",
                      "Kingsway",
                      "New Toronto",
                      "Long Branch",
                      "Mimico",
                      "Alderwood",
                      "Markland Wood",
                      "Rexdale",
                      "West Humber",
                      "Thistletown",
                      "Elms-Old Rexdale",
                      "Eringate-Centennial-West Deane"
                    ]
                  }
                },
                {
                  "@type": "City",
                  "name": "Toronto",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Ontario"
                  },
                  "additionalProperty": {
                    "@type": "PropertyValue",
                    "name": "neighborhoods",
                    "value": [
                      "North York",
                      "Scarborough",
                      "East York",
                      "York",
                      "Downtown Toronto"
                    ]
                  }
                },
                {
                  "@type": "City",
                  "name": "Mississauga",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Ontario"
                  }
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Plumbing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Emergency Plumbing",
                      "description": "24/7 emergency plumbing services for burst pipes, leaks, and urgent repairs"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Drain Cleaning",
                      "description": "Professional drain cleaning services including snaking, hydro jetting, and camera inspections"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Water Heater Services",
                      "description": "Installation, repair, and maintenance of tank and tankless water heaters"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Backwater Valve Installation",
                      "description": "Professional installation of backwater valves to prevent sewer backups"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sump Pump Installation",
                      "description": "Installation and maintenance of sump pumps for basement flood prevention"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Water Filtration",
                      "description": "Installation of water filtration systems for clean, safe drinking water"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "15",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "John Prikosovich"
                  },
                  "datePublished": "2024-04-04",
                  "reviewBody": "Dean was recommended to me as someone who could resolve some plumbing issues I had. He did a fantastic job, knowledgeable and prompt. Too bad reviews don't have 6 stars, he deserves it. I was very impressed, thanks again Dean!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Connie Andrews"
                  },
                  "datePublished": "2024-03-10",
                  "reviewBody": "I had a fantastic experience with Dean from Signature Plumbing. He was prompt and professional. Dean arrived on time, diagnosed the issue efficiently, and explained everything clearly before starting the work. Not only did he fix the problems, but he also ensured everything was clean before leaving. The pricing was fair, and the quality of work was top-notch."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Yusef Ahmed"
                  },
                  "datePublished": "2024-02-15",
                  "reviewBody": "Had Signature Plumbing come out to fix a backed up kitchen drain. They ended up snaking it and I also got them to replace my toilet with a water saving one. Prices were very reasonable and the work was completed quickly. They also cleaned up before they left. Customer service was excellent!"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/people/Signature-Plumbing/61575685340626/",
                "https://www.instagram.com/signatureplumbinginc/",
                "https://www.tiktok.com/@signatureplumbing"
              ]
            })
          }}
        />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
