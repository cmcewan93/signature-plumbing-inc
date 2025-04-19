import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Leaking Pipes: A Silent Threat to Your Home | Signature Plumbing Blog',
  description: 'Discover why leaking pipes are more dangerous than they seem and how to protect your home from water damage.',
};

export default function BlogPost() {
  return (
    <main className={styles.blogPostContainer}>
      <div className="container">
        <article className={styles.blogPost}>
          <div className={styles.blogPostHeader}>
            <Link href="/blog" className={styles.backToBlog}>
              ← Back to Blog
            </Link>
            <span className={styles.blogCategory}>Repairs</span>
            <h1 className={styles.blogPostTitle}>
              Leaking Pipes: A Silent Threat to Your Home
            </h1>
            <div className={styles.blogMeta}>
              <time dateTime="2024-04-18">April 18, 2024</time>
            </div>
          </div>

          <div className={styles.blogContent}>
            <p>
              Leaking pipes might not seem like a big deal at first—but over time, even a slow drip can 
              lead to serious damage. At Signature Plumbing, we've seen firsthand how small leaks can 
              cause major problems if left unaddressed. Understanding the causes and consequences of 
              leaking pipes is crucial for protecting your home.
            </p>

            <h2>Common Causes of Leaky Pipes</h2>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Corroded or Aging Pipes</strong>
                <p>Older pipes made of galvanized steel or copper can corrode over time, leading to leaks.</p>
              </li>
              <li>
                <strong>Loose Joints or Fittings</strong>
                <p>Improper installation or wear and tear can cause connections to loosen and leak.</p>
              </li>
              <li>
                <strong>High Water Pressure</strong>
                <p>Excessive water pressure can stress pipes and cause them to develop leaks.</p>
              </li>
              <li>
                <strong>Tree Root Intrusion</strong>
                <p>Tree roots can grow into pipes, causing cracks and leaks.</p>
              </li>
              <li>
                <strong>Temperature Changes</strong>
                <p>Extreme temperature fluctuations can cause pipes to expand and contract, leading to leaks.</p>
              </li>
            </ul>

            <h2>The Hidden Costs of Ignoring Leaks</h2>
            <ul className={styles.warningSigns}>
              <li>Mold and mildew growth</li>
              <li>Structural water damage</li>
              <li>Spiked water bills</li>
              <li>Reduced water pressure</li>
              <li>Foundation damage</li>
              <li>Increased risk of pipe bursts</li>
            </ul>

            <h2>Signs of Hidden Leaks</h2>
            <ul className={styles.warningSigns}>
              <li>Unexplained increase in water bills</li>
              <li>Musty odors in your home</li>
              <li>Stains on walls or ceilings</li>
              <li>Warped or buckling floors</li>
              <li>Low water pressure</li>
              <li>Sound of running water when no fixtures are in use</li>
            </ul>

            <div className={styles.callToAction}>
              <h2>Professional Leak Detection and Repair Services</h2>
              <p>
                At Signature Plumbing, we offer comprehensive leak detection and repair services:
              </p>
              <ul className={styles.warningSigns}>
                <li>Advanced leak detection technology</li>
                <li>Non-invasive inspection methods</li>
                <li>Expert pipe repair and replacement</li>
                <li>24/7 emergency service</li>
              </ul>
              <p>
                Don't let a small leak turn into a big problem. Contact us today for professional 
                leak detection and repair services.
              </p>
              <div className={styles.contactButtons}>
                <Link href="tel:416-450-9504" className={styles.phoneButton}>
                  📞 Call us at 416-450-9504
                </Link>
                <Link href="/#contact" className={styles.contactButton}>
                  Book Online
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
} 