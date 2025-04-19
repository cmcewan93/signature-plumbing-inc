import { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Plumbing Services in Etobicoke | Signature Plumbing',
  description: 'Professional plumbing services in Etobicoke. Emergency plumbing, drain cleaning, water heater installation, and more. Serving Etobicoke and surrounding areas 24/7.',
  keywords: 'plumbing services etobicoke, emergency plumber etobicoke, drain cleaning etobicoke, water heater installation etobicoke, residential plumbing etobicoke, commercial plumbing etobicoke',
  openGraph: {
    title: 'Plumbing Services in Etobicoke | Signature Plumbing',
    description: 'Professional plumbing services in Etobicoke. Emergency plumbing, drain cleaning, water heater installation, and more. Serving Etobicoke and surrounding areas 24/7.',
    type: 'website',
    locale: 'en_CA',
  },
}

export default function EtobicokePage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>Professional Plumbing Services in Etobicoke</h1>
        <p>Your trusted local plumber serving Etobicoke and surrounding areas</p>
      </section>

      <section className={styles.services}>
        <h2>Our Plumbing Services in Etobicoke</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>Emergency Plumbing</h3>
            <p>24/7 emergency plumbing services in Etobicoke. Fast response times for urgent plumbing issues.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Drain Cleaning</h3>
            <p>Professional drain cleaning services for homes and businesses in Etobicoke.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Water Heater Services</h3>
            <p>Installation, repair, and maintenance of water heaters in Etobicoke.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Backwater Valve Installation</h3>
            <p>Protect your Etobicoke property from sewer backups with our backwater valve installation services.</p>
          </div>
        </div>
      </section>

      <section className={styles.areas}>
        <h2>Areas We Serve in Etobicoke</h2>
        <div className={styles.areaGrid}>
          <div className={styles.areaCard}>
            <h3>Central Etobicoke</h3>
            <ul>
              <li>Islington</li>
              <li>Kingsway</li>
              <li>New Toronto</li>
              <li>Long Branch</li>
            </ul>
          </div>
          <div className={styles.areaCard}>
            <h3>North Etobicoke</h3>
            <ul>
              <li>Rexdale</li>
              <li>West Humber</li>
              <li>Thistletown</li>
              <li>Elms-Old Rexdale</li>
            </ul>
          </div>
          <div className={styles.areaCard}>
            <h3>South Etobicoke</h3>
            <ul>
              <li>Mimico</li>
              <li>Alderwood</li>
              <li>Markland Wood</li>
              <li>Eringate-Centennial-West Deane</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Need a Plumber in Etobicoke?</h2>
        <p>Contact us today for reliable plumbing services in Etobicoke</p>
        <Link href="/#contact" className={styles.ctaButton}>Get a Free Quote</Link>
      </section>
    </main>
  )
} 