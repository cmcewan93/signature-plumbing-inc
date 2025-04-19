import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'How to Prevent Frozen Pipes This Winter | Signature Plumbing Blog',
  description: 'Learn essential tips to prevent frozen pipes and protect your home from water damage during cold weather.',
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
            <span className={styles.blogCategory}>Prevention</span>
            <h1 className={styles.blogPostTitle}>
              How to Prevent Frozen Pipes This Winter
            </h1>
            <div className={styles.blogMeta}>
              <time dateTime="2024-04-19">April 19, 2024</time>
            </div>
          </div>

          <div className={styles.blogContent}>
            <p>
              When temperatures drop, frozen pipes can burst, causing major water damage and costly repairs. 
              But with a few preventive steps, you can avoid this winter plumbing nightmare. At Signature 
              Plumbing, we've helped countless homeowners in the GTA protect their pipes from freezing.
            </p>

            <h2>Tips to Prevent Frozen Pipes</h2>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Insulate Exposed Pipes</strong>
                <p>Wrap pipes in basements, garages, and crawl spaces with foam pipe insulation or heat tape.</p>
              </li>
              <li>
                <strong>Maintain Proper Heating</strong>
                <p>Keep your home heated above 10°C (50°F), even when you're away.</p>
              </li>
              <li>
                <strong>Let Faucets Drip</strong>
                <p>During extreme cold, let faucets drip slightly to keep water moving through the pipes.</p>
              </li>
              <li>
                <strong>Open Cabinet Doors</strong>
                <p>Allow warm air to circulate around pipes under sinks and in cabinets.</p>
              </li>
              <li>
                <strong>Seal Air Leaks</strong>
                <p>Check for and seal any air leaks near pipes, especially where they enter the home.</p>
              </li>
            </ul>

            <h2>What to Do if Pipes Freeze</h2>
            <p>If you suspect frozen pipes:</p>
            <ol className={styles.warningSigns}>
              <li>Turn off the main water supply immediately</li>
              <li>Open faucets to relieve pressure</li>
              <li>Use a hair dryer or heating pad to gently thaw the pipe</li>
              <li>Never use an open flame to thaw pipes</li>
              <li>Call a licensed plumber to assess and prevent damage</li>
            </ol>

            <h2>High-Risk Areas to Watch</h2>
            <ul className={styles.warningSigns}>
              <li>Unheated basements and crawl spaces</li>
              <li>Garages and exterior walls</li>
              <li>Kitchen and bathroom cabinets on exterior walls</li>
              <li>Attics and roof spaces</li>
            </ul>

            <div className={styles.callToAction}>
              <h2>Professional Winter Plumbing Services</h2>
              <p>
                At Signature Plumbing, we offer comprehensive winter plumbing services to help you stay safe and dry:
              </p>
              <ul className={styles.warningSigns}>
                <li>Pipe insulation installation</li>
                <li>Winter plumbing inspections</li>
                <li>Emergency thawing services</li>
                <li>24/7 emergency response</li>
              </ul>
              <p>
                Don't wait for a plumbing emergency. Contact us today to prepare your home for winter 
                and prevent frozen pipes.
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