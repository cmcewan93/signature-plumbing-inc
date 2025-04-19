import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Plumbing Services in Long Branch, Etobicoke | Signature Plumbing',
  description: 'Expert plumbing services in Long Branch, Etobicoke. Specializing in waterfront property plumbing, historic home maintenance, and emergency repairs.',
  keywords: 'Long Branch plumbing, Etobicoke plumber, waterfront plumbing, historic home plumbing, emergency plumbing Long Branch',
};

export default function LongBranchServiceArea() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Long Branch', href: '/service-areas/long-branch' },
  ];

  return (
    <main className={styles.serviceAreaContainer}>
      <div className="container">
        <article className={styles.serviceAreaContent}>
          <Breadcrumbs items={breadcrumbs} />
          
          <div className={styles.heroSection}>
            <h1 className={styles.serviceAreaTitle}>Plumbing Services in Long Branch</h1>
            <p className={styles.serviceAreaDescription}>
              Professional plumbing solutions for Long Branch's waterfront properties 
              and historic homes, addressing unique challenges of lakeside living 
              while preserving neighborhood character.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h2>Waterfront Property Plumbing</h2>
              <p>
                Specialized plumbing services for Long Branch's lakeside properties:
              </p>
              <ul>
                <li>Backwater valve installation</li>
                <li>Flood prevention systems</li>
                <li>Drainage solutions</li>
                <li>Water pressure management</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h2>Historic Home Maintenance</h2>
              <p>
                Expert care for Long Branch's historic properties:
              </p>
              <ul>
                <li>Heritage fixture preservation</li>
                <li>Period-appropriate upgrades</li>
                <li>Pipe replacement and repair</li>
                <li>Water pressure management</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h2>Emergency Services</h2>
              <p>
                24/7 emergency plumbing services for Long Branch:
              </p>
              <ul>
                <li>Burst pipe repair</li>
                <li>Flood prevention</li>
                <li>Drain emergencies</li>
                <li>Water heater failures</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h2>Water Heater Services</h2>
              <p>
                Comprehensive water heater solutions for all property types:
              </p>
              <ul>
                <li>Installation and replacement</li>
                <li>Regular maintenance</li>
                <li>Emergency repairs</li>
                <li>Energy-efficient upgrades</li>
              </ul>
            </div>
          </div>

          <section className={styles.localExpertise}>
            <h2>Why Choose Us for Long Branch Plumbing</h2>
            <div className={styles.expertiseGrid}>
              <div className={styles.expertiseCard}>
                <h3>Local Knowledge</h3>
                <p>
                  We understand Long Branch's unique plumbing challenges, from 
                  waterfront properties to historic homes.
                </p>
              </div>
              <div className={styles.expertiseCard}>
                <h3>Quick Response</h3>
                <p>
                  Fast emergency service throughout Long Branch, with average 
                  response times of 30-60 minutes.
                </p>
              </div>
              <div className={styles.expertiseCard}>
                <h3>Community Focus</h3>
                <p>
                  We're part of the Long Branch community and committed to 
                  preserving its historic character.
                </p>
              </div>
            </div>
          </section>

          <div className={styles.callToAction}>
            <h2>Need Plumbing Service in Long Branch?</h2>
            <p>
              Our experienced plumbers are ready to help with any plumbing need in 
              Long Branch. We offer free estimates and same-day service for most jobs.
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