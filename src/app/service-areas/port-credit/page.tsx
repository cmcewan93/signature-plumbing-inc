import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Plumbing Services in Port Credit, Mississauga | Signature Plumbing',
  description: 'Expert plumbing services in Port Credit, Mississauga. Specializing in waterfront property plumbing, historic home maintenance, and emergency repairs.',
  keywords: 'Port Credit plumbing, Mississauga plumber, waterfront plumbing, historic home plumbing, emergency plumbing Port Credit',
};

export default function PortCreditServiceArea() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Port Credit', href: '/service-areas/port-credit' },
  ];

  return (
    <main className={styles.serviceAreaContainer}>
      <div className="container">
        <article className={styles.serviceAreaContent}>
          <Breadcrumbs items={breadcrumbs} />
          
          <div className={styles.heroSection}>
            <h1 className={styles.serviceAreaTitle}>Plumbing Services in Port Credit</h1>
            <p className={styles.serviceAreaDescription}>
              Specialized plumbing services for Port Credit's waterfront properties 
              and historic district, addressing unique challenges of lakeside living.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h2>Waterfront Property Plumbing</h2>
              <p>
                Expert plumbing solutions for Port Credit's lakeside properties:
              </p>
              <ul>
                <li>Backwater valve installation</li>
                <li>Flood prevention systems</li>
                <li>Drainage solutions</li>
                <li>Water pressure management</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h2>Historic Home Renovations</h2>
              <p>
                Specialized plumbing services for Port Credit's historic properties:
              </p>
              <ul>
                <li>Heritage fixture preservation</li>
                <li>Period-appropriate upgrades</li>
                <li>Pipe replacement</li>
                <li>Bathroom renovations</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h2>Drainage Solutions</h2>
              <p>
                Comprehensive drainage services for Port Credit properties:
              </p>
              <ul>
                <li>Storm drain maintenance</li>
                <li>French drain installation</li>
                <li>Grading and slope solutions</li>
                <li>Waterproofing systems</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h2>Emergency Service</h2>
              <p>
                24/7 emergency plumbing services for Port Credit:
              </p>
              <ul>
                <li>Burst pipe repair</li>
                <li>Flood prevention</li>
                <li>Drain emergencies</li>
                <li>Water heater failures</li>
              </ul>
            </div>
          </div>

          <section className={styles.localExpertise}>
            <h2>Why Choose Us for Port Credit Plumbing</h2>
            <div className={styles.expertiseGrid}>
              <div className={styles.expertiseCard}>
                <h3>Local Knowledge</h3>
                <p>
                  We understand Port Credit's unique plumbing challenges, from 
                  waterfront properties to historic homes.
                </p>
              </div>
              <div className={styles.expertiseCard}>
                <h3>Quick Response</h3>
                <p>
                  Fast emergency service throughout Port Credit, with average 
                  response times of 30-60 minutes.
                </p>
              </div>
              <div className={styles.expertiseCard}>
                <h3>Community Focus</h3>
                <p>
                  We're part of the Port Credit community and committed to 
                  preserving its historic character.
                </p>
              </div>
            </div>
          </section>

          <div className={styles.callToAction}>
            <h2>Need Plumbing Service in Port Credit?</h2>
            <p>
              Our experienced plumbers are ready to help with any plumbing need in 
              Port Credit. We offer free estimates and same-day service for most jobs.
            </p>
            <div className={styles.contactButtons}>
              <a href="tel:416-450-9504" className={styles.phoneButton}>
                Call Now: 416-450-9504
              </a>
              <a href="/#contact" className={styles.contactButton}>
                Schedule Service
              </a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
} 