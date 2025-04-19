import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Plumbing Services in Erin Mills, Mississauga | Signature Plumbing',
  description: 'Expert plumbing services in Erin Mills, Mississauga. Serving residential and commercial properties with 24/7 emergency plumbing, repairs, and installations.',
  keywords: 'Erin Mills plumbing, Mississauga plumber, emergency plumbing Erin Mills, plumbing services Erin Mills, residential plumbing Erin Mills',
};

export default function ErinMillsServiceArea() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Erin Mills', href: '/service-areas/erin-mills' },
  ];

  return (
    <main className={styles.serviceAreaContainer}>
      <div className="container">
        <article className={styles.serviceAreaContent}>
          <Breadcrumbs items={breadcrumbs} />
          
          <div className={styles.heroSection}>
            <h1 className={styles.serviceAreaTitle}>Plumbing Services in Erin Mills</h1>
            <p className={styles.serviceAreaDescription}>
              Professional plumbing solutions for Erin Mills' residential communities 
              and commercial properties, ensuring reliable service and modern 
              conveniences.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h2>Residential Plumbing</h2>
              <p>
                Comprehensive plumbing services for Erin Mills homes:
              </p>
              <ul>
                <li>Fixture installation and repair</li>
                <li>Pipe replacement</li>
                <li>Water heater services</li>
                <li>Bathroom renovations</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h2>Commercial Services</h2>
              <p>
                Professional plumbing solutions for Erin Mills businesses:
              </p>
              <ul>
                <li>Restaurant plumbing</li>
                <li>Retail space maintenance</li>
                <li>Office building systems</li>
                <li>Industrial plumbing</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h2>Emergency Repairs</h2>
              <p>
                24/7 emergency plumbing services for Erin Mills:
              </p>
              <ul>
                <li>Burst pipe repair</li>
                <li>Flood prevention</li>
                <li>Drain emergencies</li>
                <li>Water heater failures</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h2>Water Filtration Systems</h2>
              <p>
                Advanced water treatment solutions for Erin Mills properties:
              </p>
              <ul>
                <li>Water softener installation</li>
                <li>Reverse osmosis systems</li>
                <li>Whole house filtration</li>
                <li>Maintenance and repair</li>
              </ul>
            </div>
          </div>

          <section className={styles.localExpertise}>
            <h2>Why Choose Us for Erin Mills Plumbing</h2>
            <div className={styles.expertiseGrid}>
              <div className={styles.expertiseCard}>
                <h3>Local Knowledge</h3>
                <p>
                  We understand Erin Mills' unique plumbing needs, from residential 
                  communities to commercial properties.
                </p>
              </div>
              <div className={styles.expertiseCard}>
                <h3>Quick Response</h3>
                <p>
                  Fast emergency service throughout Erin Mills, with average 
                  response times of 30-60 minutes.
                </p>
              </div>
              <div className={styles.expertiseCard}>
                <h3>Community Focus</h3>
                <p>
                  We're part of the Erin Mills community and committed to providing 
                  reliable, local service.
                </p>
              </div>
            </div>
          </section>

          <div className={styles.callToAction}>
            <h2>Need Plumbing Service in Erin Mills?</h2>
            <p>
              Our experienced plumbers are ready to help with any plumbing need in 
              Erin Mills. We offer free estimates and same-day service for most jobs.
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