import Link from 'next/link';
import styles from './page.module.css';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Service Areas | Signature Plumbing - Serving Etobicoke and the GTA',
  description: 'Signature Plumbing serves Etobicoke and surrounding areas with expert plumbing services. Find your neighborhood and learn about our local plumbing expertise.',
  keywords: 'Etobicoke plumbing service areas, GTA plumbing service, local plumber Etobicoke, neighborhood plumbing services',
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Service Areas', href: '/service-areas' }
];

export default function ServiceAreas() {
  return (
    <>
      <main className={styles.serviceAreasContainer}>
        <div className="container">
          <article className={styles.serviceAreasContent}>
            <Breadcrumbs items={breadcrumbs} />
            <h1 className={styles.serviceAreasTitle}>
              Our Service Areas in Etobicoke and the GTA
            </h1>
            <p className={styles.serviceAreasDescription}>
              Signature Plumbing proudly serves Etobicoke and surrounding areas with expert 
              plumbing services. Our local plumbers understand the unique needs of each 
              neighborhood and provide tailored solutions for your home or business.
            </p>

            <div className={styles.neighborhoodGrid}>
              <Link href="/service-areas/islington" className={styles.neighborhoodCard}>
                <h2>Islington</h2>
                <p>
                  Serving the vibrant Islington community with expert plumbing solutions 
                  for both residential and commercial properties.
                </p>
                <ul>
                  <li>Residential plumbing services</li>
                  <li>Commercial plumbing solutions</li>
                  <li>Emergency plumbing 24/7</li>
                  <li>Local plumbing expertise</li>
                </ul>
                <span className={styles.learnMore}>Learn More →</span>
              </Link>

              <Link href="/service-areas/kingsway" className={styles.neighborhoodCard}>
                <h2>Kingsway</h2>
                <p>
                  Specialized plumbing services for Kingsway's historic homes and luxury 
                  properties, preserving heritage while providing modern conveniences.
                </p>
                <ul>
                  <li>Historic home plumbing</li>
                  <li>Luxury bathroom renovations</li>
                  <li>Heritage fixture preservation</li>
                  <li>High-end plumbing solutions</li>
                </ul>
                <span className={styles.learnMore}>Learn More →</span>
              </Link>

              <Link href="/service-areas/new-toronto" className={styles.neighborhoodCard}>
                <h2>New Toronto</h2>
                <p>
                  Expert plumbing services for New Toronto's waterfront properties and 
                  historic homes, addressing unique challenges of lakeside living.
                </p>
                <ul>
                  <li>Waterfront property plumbing</li>
                  <li>Drainage solutions</li>
                  <li>Backwater valve installation</li>
                  <li>Older home plumbing expertise</li>
                </ul>
                <span className={styles.learnMore}>Learn More →</span>
              </Link>

              <Link href="/service-areas/mimico" className={styles.neighborhoodCard}>
                <h2>Mimico</h2>
                <p>
                  Professional plumbing services for Mimico's diverse community, from 
                  historic homes to modern condominiums.
                </p>
                <ul>
                  <li>Condominium plumbing</li>
                  <li>Historic home maintenance</li>
                  <li>Water heater services</li>
                  <li>Emergency repairs</li>
                </ul>
                <span className={styles.learnMore}>Learn More →</span>
              </Link>

              <Link href="/service-areas/rexdale" className={styles.neighborhoodCard}>
                <h2>Rexdale</h2>
                <p>
                  Comprehensive plumbing solutions for Rexdale's residential and 
                  commercial properties.
                </p>
                <ul>
                  <li>Commercial plumbing</li>
                  <li>Residential repairs</li>
                  <li>Drain cleaning</li>
                  <li>24/7 emergency service</li>
                </ul>
                <span className={styles.learnMore}>Learn More →</span>
              </Link>

              <Link href="/service-areas/port-credit" className={styles.neighborhoodCard}>
                <h2>Port Credit</h2>
                <p>
                  Specialized plumbing services for Port Credit's waterfront properties 
                  and historic district.
                </p>
                <ul>
                  <li>Waterfront property plumbing</li>
                  <li>Historic home renovations</li>
                  <li>Drainage solutions</li>
                  <li>Backwater valve installation</li>
                </ul>
                <span className={styles.learnMore}>Learn More →</span>
              </Link>

              <Link href="/service-areas/streetsville" className={styles.neighborhoodCard}>
                <h2>Streetsville</h2>
                <p>
                  Expert plumbing services for Streetsville's historic village and 
                  surrounding residential areas.
                </p>
                <ul>
                  <li>Historic home plumbing</li>
                  <li>Commercial plumbing</li>
                  <li>Emergency services</li>
                  <li>Water heater installation</li>
                </ul>
                <span className={styles.learnMore}>Learn More →</span>
              </Link>

              <Link href="/service-areas/long-branch" className={styles.neighborhoodCard}>
                <h2>Long Branch</h2>
                <p>
                  Specialized plumbing services for Long Branch's waterfront properties 
                  and historic homes, addressing unique challenges of lakeside living.
                </p>
                <ul>
                  <li>Waterfront property plumbing</li>
                  <li>Historic home maintenance</li>
                  <li>Emergency services</li>
                  <li>Water heater services</li>
                </ul>
                <span className={styles.learnMore}>Learn More →</span>
              </Link>

              <Link href="/service-areas/erin-mills" className={styles.neighborhoodCard}>
                <h2>Erin Mills</h2>
                <p>
                  Professional plumbing solutions for Erin Mills' residential communities 
                  and commercial properties.
                </p>
                <ul>
                  <li>Residential plumbing</li>
                  <li>Commercial services</li>
                  <li>Emergency repairs</li>
                  <li>Water filtration systems</li>
                </ul>
                <span className={styles.learnMore}>Learn More →</span>
              </Link>
            </div>

            <section className={styles.serviceAreaBenefits}>
              <h2>Why Choose Our Local Plumbing Services</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                  <h3>Local Expertise</h3>
                  <p>
                    Our plumbers know the unique plumbing challenges of each Etobicoke 
                    neighborhood and provide tailored solutions.
                  </p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Quick Response</h3>
                  <p>
                    Fast emergency service throughout our service areas, with average 
                    response times of 30-60 minutes.
                  </p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Community Focus</h3>
                  <p>
                    We're part of the Etobicoke community and understand the importance 
                    of reliable local service.
                  </p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Comprehensive Service</h3>
                  <p>
                    From emergency repairs to complete installations, we handle all 
                    plumbing needs in your neighborhood.
                  </p>
                </div>
              </div>
            </section>

            <div className={styles.callToAction}>
              <h2>Need Plumbing Service in Your Neighborhood?</h2>
              <p>
                Our experienced plumbers are ready to help with any plumbing need in 
                Etobicoke and surrounding areas. We offer free estimates and same-day 
                service for most jobs.
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
      <Footer />
    </>
  );
} 