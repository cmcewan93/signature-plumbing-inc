import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Plumbing Services in Streetsville, Mississauga | Signature Plumbing',
  description: 'Expert plumbing services in Streetsville, Mississauga. Specializing in historic home maintenance, commercial plumbing, and emergency repairs.',
  keywords: 'Streetsville plumbing, Mississauga plumber, historic home plumbing, commercial plumbing, emergency plumbing Streetsville',
};

export default function StreetsvilleServiceArea() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Streetsville', href: '/service-areas/streetsville' },
  ];

  return (
    <main className={styles.serviceAreaContainer}>
      <div className="container">
        <article className={styles.serviceAreaContent}>
          <Breadcrumbs items={breadcrumbs} />
          
          <div className={styles.heroSection}>
            <h1 className={styles.serviceAreaTitle}>Plumbing Services in Streetsville</h1>
            <p className={styles.serviceAreaDescription}>
              Expert plumbing services for Streetsville's historic village and 
              surrounding residential areas, preserving heritage while providing 
              modern conveniences.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h2>Historic Home Plumbing</h2>
              <p>
                Specialized plumbing services for Streetsville's historic properties:
              </p>
              <ul>
                <li>Heritage fixture preservation</li>
                <li>Period-appropriate upgrades</li>
                <li>Pipe replacement</li>
                <li>Bathroom renovations</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h2>Commercial Plumbing</h2>
              <p>
                Professional plumbing services for Streetsville's businesses:
              </p>
              <ul>
                <li>Restaurant plumbing</li>
                <li>Retail space maintenance</li>
                <li>Office building systems</li>
                <li>Industrial plumbing</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h2>Emergency Services</h2>
              <p>
                24/7 emergency plumbing services for Streetsville:
              </p>
              <ul>
                <li>Burst pipe repair</li>
                <li>Flood prevention</li>
                <li>Drain emergencies</li>
                <li>Water heater failures</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h2>Water Heater Installation</h2>
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
            <h2>Why Choose Us for Streetsville Plumbing</h2>
            <div className={styles.expertiseGrid}>
              <div className={styles.expertiseCard}>
                <h3>Local Knowledge</h3>
                <p>
                  We understand Streetsville's unique plumbing needs, from historic 
                  homes to modern businesses.
                </p>
              </div>
              <div className={styles.expertiseCard}>
                <h3>Quick Response</h3>
                <p>
                  Fast emergency service throughout Streetsville, with average 
                  response times of 30-60 minutes.
                </p>
              </div>
              <div className={styles.expertiseCard}>
                <h3>Community Focus</h3>
                <p>
                  We're part of the Streetsville community and committed to 
                  preserving its historic character.
                </p>
              </div>
            </div>
          </section>

          <div className={styles.callToAction}>
            <h2>Need Plumbing Service in Streetsville?</h2>
            <p>
              Our experienced plumbers are ready to help with any plumbing need in 
              Streetsville. We offer free estimates and same-day service for most jobs.
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