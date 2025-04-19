import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Plumbing Services in Kingsway, Etobicoke | Signature Plumbing',
  description: 'Expert plumbing services in Kingsway, Etobicoke. Specializing in historic home plumbing, emergency repairs, and modern plumbing solutions for this prestigious neighborhood.',
  keywords: 'Kingsway plumbing, Etobicoke plumber, emergency plumbing Kingsway, historic home plumbing, residential plumbing Kingsway',
};

export default function KingswayServiceArea() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Kingsway', href: '/service-areas/kingsway' },
  ];

  return (
    <main className={styles.serviceAreaContainer}>
      <div className="container">
        <article className={styles.serviceAreaContent}>
          <Breadcrumbs items={breadcrumbs} />
          
          <div className={styles.heroSection}>
            <h1 className={styles.serviceAreaTitle}>Plumbing Services in Kingsway</h1>
            <p className={styles.serviceAreaDescription}>
              Serving the prestigious Kingsway neighborhood with specialized plumbing solutions 
              since 2010. Our team understands the unique needs of Kingsway's historic homes 
              and luxury properties.
            </p>
          </div>

          <div className={styles.serviceAreaDetails}>
            <section className={styles.areaOverview}>
              <h2>About Kingsway</h2>
              <p>
                Kingsway is one of Etobicoke's most prestigious neighborhoods, known for its 
                historic homes, tree-lined streets, and upscale properties. The area's unique 
                character requires specialized plumbing expertise to maintain its heritage 
                while incorporating modern conveniences.
              </p>
              <div className={styles.areaFeatures}>
                <h3>Key Features of Kingsway</h3>
                <ul>
                  <li>Historic homes requiring careful plumbing preservation</li>
                  <li>Luxury properties with high-end plumbing fixtures</li>
                  <li>Mature landscaping affecting underground plumbing</li>
                  <li>Strict heritage preservation guidelines</li>
                </ul>
              </div>
            </section>

            <section className={styles.commonIssues}>
              <h2>Common Plumbing Issues in Kingsway</h2>
              <p>
                Our experience in Kingsway has shown these frequent plumbing challenges:
              </p>
              <ul className={styles.issuesList}>
                <li>
                  <strong>Historic Pipe Systems</strong>
                  Many homes have original plumbing that needs careful maintenance or updating.
                </li>
                <li>
                  <strong>Heritage Fixture Preservation</strong>
                  Balancing modern functionality with historic preservation requirements.
                </li>
                <li>
                  <strong>Landscaping Impact</strong>
                  Mature trees and extensive gardens can affect underground plumbing.
                </li>
                <li>
                  <strong>Modernization Needs</strong>
                  Upgrading systems while maintaining architectural integrity.
                </li>
              </ul>
            </section>

            <section className={styles.ourServices}>
              <h2>Our Services in Kingsway</h2>
              <p>
                We offer specialized plumbing services for Kingsway properties:
              </p>
              <ul className={styles.servicesList}>
                <li>
                  <strong>Historic Home Plumbing</strong>
                  Expert care for heritage properties and period fixtures.
                </li>
                <li>
                  <strong>Luxury Bathroom Renovations</strong>
                  High-end installations that respect the home's character.
                </li>
                <li>
                  <strong>Emergency Plumbing</strong>
                  24/7 service with minimal disruption to your property.
                </li>
                <li>
                  <strong>Pipe Replacement</strong>
                  Careful updates that maintain your home's integrity.
                </li>
                <li>
                  <strong>Fixture Restoration</strong>
                  Preserving and restoring historic plumbing features.
                </li>
              </ul>
            </section>

            <section className={styles.localTestimonials}>
              <h2>What Kingsway Residents Say</h2>
              <div className={styles.testimonial}>
                <p>
                  "Signature Plumbing's expertise with our historic home was impressive. They 
                  preserved the original character while modernizing our plumbing system."
                </p>
                <cite>- James R., Kingsway resident</cite>
              </div>
              <div className={styles.testimonial}>
                <p>
                  "Their attention to detail and respect for our property's heritage features 
                  made all the difference in our bathroom renovation."
                </p>
                <cite>- Elizabeth W., Kingsway homeowner</cite>
              </div>
            </section>

            <section className={styles.areaBenefits}>
              <h2>Why Choose Us for Kingsway Plumbing</h2>
              <ul className={styles.benefitsList}>
                <li>Expertise with historic and luxury properties</li>
                <li>Understanding of heritage preservation requirements</li>
                <li>Minimal disruption to your property and landscaping</li>
                <li>High-end fixture and material options</li>
                <li>24/7 emergency service with heritage property experience</li>
              </ul>
            </section>

            <div className={styles.callToAction}>
              <h2>Need Plumbing Service in Kingsway?</h2>
              <p>
                Our experienced plumbers are ready to help with any plumbing need in Kingsway. 
                We offer free estimates and same-day service for most jobs.
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
          </div>
        </article>
      </div>
    </main>
  );
} 