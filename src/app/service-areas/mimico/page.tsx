import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Plumbing Services in Mimico, Etobicoke | Signature Plumbing',
  description: 'Expert plumbing services in Mimico, Etobicoke. Serving residential and commercial properties with 24/7 emergency plumbing, repairs, and installations.',
  keywords: 'Mimico plumbing, Etobicoke plumber, emergency plumbing Mimico, plumbing services Mimico, residential plumbing Mimico',
};

export default function MimicoServiceArea() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Mimico', href: '/service-areas/mimico' },
  ];

  return (
    <main className={styles.serviceAreaContainer}>
      <div className="container">
        <article className={styles.serviceAreaContent}>
          <Breadcrumbs items={breadcrumbs} />
          
          <div className={styles.heroSection}>
            <h1 className={styles.serviceAreaTitle}>Plumbing Services in Mimico</h1>
            <p className={styles.serviceAreaDescription}>
              Serving Mimico's diverse community with expert plumbing solutions for 
              condominiums, historic homes, and modern residences.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h2>Condominium Plumbing</h2>
              <p>
                Specialized plumbing services for Mimico's growing condominium 
                community, including:
              </p>
              <ul>
                <li>Fixture installation and repair</li>
                <li>Water pressure optimization</li>
                <li>Drain cleaning and maintenance</li>
                <li>Emergency leak repairs</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h2>Historic Home Maintenance</h2>
              <p>
                Expert care for Mimico's historic properties, preserving their 
                character while ensuring modern functionality:
              </p>
              <ul>
                <li>Heritage fixture preservation</li>
                <li>Period-appropriate upgrades</li>
                <li>Pipe replacement and repair</li>
                <li>Water pressure management</li>
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

            <div className={styles.serviceCard}>
              <h2>Emergency Plumbing</h2>
              <p>
                24/7 emergency services for Mimico residents and businesses:
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
            <h2>Why Choose Us for Mimico Plumbing</h2>
            <div className={styles.expertiseGrid}>
              <div className={styles.expertiseCard}>
                <h3>Local Knowledge</h3>
                <p>
                  We understand Mimico's unique plumbing challenges, from historic 
                  infrastructure to modern high-rise systems.
                </p>
              </div>
              <div className={styles.expertiseCard}>
                <h3>Quick Response</h3>
                <p>
                  Fast emergency service throughout Mimico, with average response 
                  times of 30-60 minutes.
                </p>
              </div>
              <div className={styles.expertiseCard}>
                <h3>Community Focus</h3>
                <p>
                  We're part of the Mimico community and committed to providing 
                  reliable, local service.
                </p>
              </div>
            </div>
          </section>

          <div className={styles.callToAction}>
            <h2>Need Plumbing Service in Mimico?</h2>
            <p>
              Our experienced plumbers are ready to help with any plumbing need in 
              Mimico. We offer free estimates and same-day service for most jobs.
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