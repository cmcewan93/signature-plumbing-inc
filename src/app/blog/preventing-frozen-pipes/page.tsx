import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Preventing Frozen Pipes: Winter Plumbing Tips | Signature Plumbing Blog',
  description: 'Learn how to protect your pipes from freezing during winter, prevent costly damage, and what to do if your pipes freeze.',
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
            <span className={styles.blogCategory}>Winter Care</span>
            <h1 className={styles.blogPostTitle}>
              Preventing Frozen Pipes: Essential Winter Plumbing Tips
            </h1>
            <div className={styles.blogMeta}>
              <time dateTime="2024-04-21">April 21, 2024</time>
            </div>
          </div>

          <div className={styles.blogContent}>
            <p>
              Frozen pipes are one of the most common and costly winter plumbing problems. When water freezes, 
              it expands, which can cause pipes to burst and lead to significant water damage. Here's how to 
              protect your plumbing system during the cold winter months.
            </p>

            <h2>Preventive Measures</h2>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Insulate Exposed Pipes</strong>
                <p>Use pipe insulation sleeves or heat tape on pipes in unheated areas like basements, attics, and garages.</p>
              </li>
              <li>
                <strong>Seal Air Leaks</strong>
                <p>Check for and seal any gaps around pipes that allow cold air to enter, especially where pipes enter the home.</p>
              </li>
              <li>
                <strong>Keep Interior Temperature Consistent</strong>
                <p>Maintain a minimum temperature of 55°F (13°C) in your home, even when you're away.</p>
              </li>
              <li>
                <strong>Let Faucets Drip</strong>
                <p>During extreme cold, let faucets drip slightly to keep water moving and prevent freezing.</p>
              </li>
            </ul>

            <h2>Areas Most at Risk</h2>
            <ul className={styles.warningSigns}>
              <li>Pipes in exterior walls</li>
              <li>Unheated basements and crawl spaces</li>
              <li>Attics and garages</li>
              <li>Outdoor hose bibs</li>
              <li>Kitchen and bathroom cabinets on exterior walls</li>
            </ul>

            <h2>What to Do If Pipes Freeze</h2>
            <ul className={styles.warningSigns}>
              <li>Keep the faucet open to allow water to flow once thawed</li>
              <li>Apply heat to the frozen section using a hair dryer or heating pad</li>
              <li>Never use an open flame to thaw pipes</li>
              <li>If you can't locate the frozen area, call a professional plumber</li>
              <li>Check for leaks after thawing</li>
            </ul>

            <div className={styles.callToAction}>
              <h2>Professional Winter Plumbing Services</h2>
              <p>
                At Signature Plumbing, we offer specialized winter plumbing services:
              </p>
              <ul className={styles.warningSigns}>
                <li>Pipe insulation installation</li>
                <li>Winter plumbing inspections</li>
                <li>Emergency frozen pipe repairs</li>
                <li>Preventive maintenance</li>
                <li>24/7 emergency service</li>
              </ul>
              <p>
                Don't wait until it's too late. Schedule a winter plumbing inspection to ensure your 
                pipes are protected before the cold weather arrives.
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