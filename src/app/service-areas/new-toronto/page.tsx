import Link from 'next/link';
import styles from './page.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Plumbing Services in New Toronto, Etobicoke | Signature Plumbing',
  description: 'Expert plumbing services in New Toronto, Etobicoke. Specializing in waterfront properties, older homes, and modern plumbing solutions for this historic neighborhood.',
  keywords: 'New Toronto plumbing, Etobicoke plumber, emergency plumbing New Toronto, waterfront plumbing, residential plumbing New Toronto',
};

export default function NewTorontoServiceArea() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'New Toronto', href: '/service-areas/new-toronto' },
  ];

  return (
    <main className={styles.serviceAreaContainer}>
      <div className="container">
        <article className={styles.serviceAreaContent}>
          <Breadcrumbs items={breadcrumbs} />
          
          <div className={styles.heroSection}>
            <h1 className={styles.serviceAreaTitle}>Plumbing Services in New Toronto</h1>
            <p className={styles.serviceAreaDescription}>
              Serving the New Toronto neighborhood with expert plumbing solutions since 2010. 
              Our team understands the unique challenges of waterfront properties and older 
              homes in this historic area.
            </p>
          </div>

          <div className={styles.serviceAreaDetails}>
            <section className={styles.areaOverview}>
              <h2>About New Toronto</h2>
              <p>
                New Toronto is a historic neighborhood in Etobicoke known for its waterfront 
                properties, older homes, and industrial heritage. The area's proximity to 
                Lake Ontario and its mix of residential and commercial properties create 
                unique plumbing needs that our team is well-equipped to handle.
              </p>
              <div className={styles.areaFeatures}>
                <h3>Key Features of New Toronto</h3>
                <ul>
                  <li>Waterfront properties with specific plumbing requirements</li>
                  <li>Mix of historic homes and modern developments</li>
                  <li>Proximity to industrial areas and commercial properties</li>
                  <li>Unique drainage challenges due to lake proximity</li>
                </ul>
              </div>
            </section>

            <section className={styles.commonIssues}>
              <h2>Common Plumbing Issues in New Toronto</h2>
              <p>
                Our experience in New Toronto has shown these frequent plumbing challenges:
              </p>
              <ul className={styles.issuesList}>
                <li>
                  <strong>Waterfront Drainage</strong>
                  Properties near the lake face unique drainage and flooding challenges.
                </li>
                <li>
                  <strong>Older Home Systems</strong>
                  Many homes have aging plumbing that needs careful maintenance or updating.
                </li>
                <li>
                  <strong>Seasonal Water Issues</strong>
                  Lake effect weather can impact plumbing systems.
                </li>
                <li>
                  <strong>Industrial Area Impact</strong>
                  Proximity to industrial zones can affect water quality and pressure.
                </li>
              </ul>
            </section>

            <section className={styles.ourServices}>
              <h2>Our Services in New Toronto</h2>
              <p>
                We offer specialized plumbing services for New Toronto properties:
              </p>
              <ul className={styles.servicesList}>
                <li>
                  <strong>Waterfront Property Plumbing</strong>
                  Specialized solutions for lakefront homes and businesses.
                </li>
                <li>
                  <strong>Drainage Solutions</strong>
                  Custom systems to handle unique waterfront drainage needs.
                </li>
                <li>
                  <strong>Emergency Plumbing</strong>
                  24/7 service for urgent plumbing issues in New Toronto.
                </li>
                <li>
                  <strong>Pipe Replacement</strong>
                  Upgrading aging systems with modern, durable materials.
                </li>
                <li>
                  <strong>Backwater Valve Installation</strong>
                  Essential protection against flooding in waterfront areas.
                </li>
              </ul>
            </section>

            <section className={styles.localTestimonials}>
              <h2>What New Toronto Residents Say</h2>
              <div className={styles.testimonial}>
                <p>
                  "Signature Plumbing's expertise with our waterfront property was invaluable. 
                  They installed a backwater valve that has protected us from several major storms."
                </p>
                <cite>- Robert K., New Toronto resident</cite>
              </div>
              <div className={styles.testimonial}>
                <p>
                  "Their understanding of older homes in our neighborhood made our plumbing 
                  renovation smooth and efficient."
                </p>
                <cite>- Maria S., New Toronto homeowner</cite>
              </div>
            </section>

            <section className={styles.areaBenefits}>
              <h2>Why Choose Us for New Toronto Plumbing</h2>
              <ul className={styles.benefitsList}>
                <li>Expertise with waterfront properties</li>
                <li>Understanding of older home plumbing systems</li>
                <li>Experience with industrial area plumbing challenges</li>
                <li>Knowledge of local drainage requirements</li>
                <li>24/7 emergency service for New Toronto residents</li>
              </ul>
            </section>

            <div className={styles.callToAction}>
              <h2>Need Plumbing Service in New Toronto?</h2>
              <p>
                Our experienced plumbers are ready to help with any plumbing need in New Toronto. 
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