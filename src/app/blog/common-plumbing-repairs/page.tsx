import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Common Plumbing Repairs Every Homeowner Should Know About | Signature Plumbing Blog',
  description: 'Learn about common household plumbing repairs, from leaky faucets to running toilets, and why timely repairs are crucial for your home.',
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
              Common Plumbing Repairs Every Homeowner Should Know About
            </h1>
            <div className={styles.blogMeta}>
              <time dateTime="2024-04-21">April 21, 2024</time>
            </div>
          </div>

          <div className={styles.blogContent}>
            <p>
              Plumbing problems can strike when you least expect them. From leaky faucets to running toilets, 
              even small issues can become major headaches if left unaddressed. At Signature Plumbing, we 
              specialize in residential plumbing repairs across the GTA to keep your home safe and your water flowing.
            </p>

            <h2>Common Household Plumbing Repairs</h2>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Leaky Faucets</strong>
                <p>Wastes water and can increase your utility bills.</p>
              </li>
              <li>
                <strong>Running Toilets</strong>
                <p>Can waste hundreds of gallons a day.</p>
              </li>
              <li>
                <strong>Low Water Pressure</strong>
                <p>Often caused by pipe corrosion or hidden leaks.</p>
              </li>
              <li>
                <strong>Dripping Showerheads</strong>
                <p>May indicate a worn-out valve or faulty installation.</p>
              </li>
            </ul>

            <h2>Why Timely Repairs Matter</h2>
            <p>Ignoring plumbing issues can lead to:</p>
            <ul className={styles.warningSigns}>
              <li>Higher water bills</li>
              <li>Mold and mildew growth</li>
              <li>Water damage to walls and floors</li>
              <li>Reduced lifespan of your plumbing system</li>
            </ul>

            <div className={styles.callToAction}>
              <h2>Fast, Reliable Plumbing Repairs in the GTA</h2>
              <p>
                Whether it's a small fix or a bigger issue, our licensed plumbers deliver quality workmanship 
                you can count on. Contact Signature Plumbing for fast and affordable home plumbing repair services.
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