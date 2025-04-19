import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image';

export const metadata = {
  title: 'Plumbing Services in Islington, Etobicoke | Signature Plumbing',
  description: 'Expert plumbing services in Islington, Etobicoke. Serving residential and commercial properties with 24/7 emergency plumbing, repairs, and installations.',
  keywords: 'Islington plumbing, Etobicoke plumber, emergency plumbing Islington, plumbing services Islington, residential plumbing Islington',
};

export default function IslingtonServiceArea() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Islington', href: '/service-areas/islington' },
  ];

  return (
    <main className={styles.serviceAreaContainer}>
      <div className="container">
        <article className={styles.serviceAreaContent}>
          <Breadcrumbs items={breadcrumbs} />
          
          <div className={styles.serviceAreaHeader}>
            <h1 className={styles.serviceAreaTitle}>
              Plumbing Services in Islington, Etobicoke
            </h1>
            <p className={styles.serviceAreaDescription}>
              Signature Plumbing provides expert plumbing services in Islington, 
              serving both residential and commercial properties with 24/7 emergency 
              service, repairs, and installations.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <Image
                src="/emergency_repair_icon.svg"
                alt="Emergency plumbing services in Islington - 24/7 availability"
                width={100}
                height={100}
                className={styles.serviceIcon}
              />
              <h2>Emergency Services</h2>
              <p>24/7 emergency plumbing services for urgent repairs and maintenance.</p>
            </div>

            <div className={styles.serviceCard}>
              <Image
                src="/drain_services_icon.svg"
                alt="Professional drain cleaning and maintenance in Islington"
                width={100}
                height={100}
                className={styles.serviceIcon}
              />
              <h2>Drain Services</h2>
              <p>Expert drain cleaning, snaking, and maintenance services.</p>
            </div>

            <div className={styles.serviceCard}>
              <Image
                src="/water_heater_icon.svg"
                alt="Water heater installation and repair services in Islington"
                width={100}
                height={100}
                className={styles.serviceIcon}
              />
              <h2>Water Heater Services</h2>
              <p>Installation, repair, and maintenance of water heaters.</p>
            </div>
          </div>

          <section className={styles.localExpertise}>
            <h2>Local Expertise in Islington</h2>
            <p>
              Our team of licensed plumbers has extensive experience serving the 
              Islington community. We understand the unique plumbing challenges 
              of the area and provide tailored solutions for your home or business.
            </p>
          </section>

          <div className={styles.callToAction}>
            <h2>Need Plumbing Service in Islington?</h2>
            <p>
              Contact us today for reliable plumbing services in Islington. 
              We offer free estimates and same-day service for most jobs.
            </p>
            <div className={styles.contactButtons}>
              <Link href="tel:416-450-9504" className={styles.phoneButton}>
                Call Now: 416-450-9504
              </Link>
              <Link href="/contact" className={styles.contactButton}>
                Schedule Service
              </Link>
            </div>
          </div>
        </article>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Signature Plumbing",
            "image": "https://signature-plumbing.ca/logo3.png",
            "description": "Professional plumbing services in Islington, Etobicoke. Emergency plumbing, drain cleaning, water heater installation, and more.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Islington",
              "addressRegion": "ON",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.6532",
              "longitude": "-79.3832"
            },
            "url": "https://signature-plumbing.ca/service-areas/islington",
            "telephone": "+14164509504",
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
            "areaServed": {
              "@type": "City",
              "name": "Islington",
              "containedInPlace": {
                "@type": "City",
                "name": "Etobicoke"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Plumbing",
                    "description": "24/7 emergency plumbing services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Drain Services",
                    "description": "Professional drain cleaning and maintenance"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Water Heater Services",
                    "description": "Installation and repair of water heaters"
                  }
                }
              ]
            }
          })
        }}
      />
    </main>
  );
} 