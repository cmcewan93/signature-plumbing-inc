import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Plumbing Services in Rexdale, Etobicoke | Signature Plumbing',
  description: 'Expert plumbing services in Rexdale, Etobicoke. Serving residential and commercial properties with 24/7 emergency plumbing, repairs, and installations.',
  keywords: 'Rexdale plumbing, Etobicoke plumber, emergency plumbing Rexdale, plumbing services Rexdale, residential plumbing Rexdale',
};

export default function RexdaleServiceArea() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Rexdale', href: '/service-areas/rexdale' },
  ];

  return (
    <main className={styles.serviceAreaContainer}>
      <div className="container">
        <article className={styles.serviceAreaContent}>
          <Breadcrumbs items={breadcrumbs} />
          
          <div className={styles.heroSection}>
            <h1 className={styles.serviceAreaTitle}>Plumbing Services in Rexdale</h1>
            <p className={styles.serviceAreaDescription}>
              Comprehensive plumbing solutions for Rexdale's diverse community, 
              serving both residential and commercial properties with expert care.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h2>Commercial Plumbing</h2>
              <p>
                Professional plumbing services for Rexdale's businesses and 
                commercial properties:
              </p>
              <ul>
                <li>Restaurant plumbing</li>
                <li>Retail space maintenance</li>
                <li>Office building systems</li>
                <li>Industrial plumbing</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h2>Residential Repairs</h2>
              <p>
                Expert plumbing solutions for Rexdale homes and apartments:
              </p>
              <ul>
                <li>Fixture installation and repair</li>
                <li>Pipe replacement</li>
                <li>Water heater services</li>
                <li>Bathroom renovations</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h2>Drain Cleaning</h2>
              <p>
                Professional drain maintenance and cleaning services:
              </p>
              <ul>
                <li>Clog removal</li>
                <li>Preventive maintenance</li>
                <li>Video inspection</li>
                <li>Root removal</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h2>Emergency Service</h2>
              <p>
                24/7 emergency plumbing services for Rexdale:
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
            <h2>Why Choose Us for Rexdale Plumbing</h2>
            <div className={styles.expertiseGrid}>
              <div className={styles.expertiseCard}>
                <h3>Local Knowledge</h3>
                <p>
                  We understand Rexdale's unique plumbing needs, from commercial 
                  properties to residential communities.
                </p>
              </div>
              <div className={styles.expertiseCard}>
                <h3>Quick Response</h3>
                <p>
                  Fast emergency service throughout Rexdale, with average response 
                  times of 30-60 minutes.
                </p>
              </div>
              <div className={styles.expertiseCard}>
                <h3>Community Focus</h3>
                <p>
                  We're part of the Rexdale community and committed to providing 
                  reliable, local service.
                </p>
              </div>
            </div>
          </section>

          <div className={styles.callToAction}>
            <h2>Need Plumbing Service in Rexdale?</h2>
            <p>
              Our experienced plumbers are ready to help with any plumbing need in 
              Rexdale. We offer free estimates and same-day service for most jobs.
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