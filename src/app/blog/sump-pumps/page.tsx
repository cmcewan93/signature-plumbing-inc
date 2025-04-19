import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'How Sump Pumps Protect Your Basement from Flooding | Signature Plumbing Blog',
  description: 'Learn how sump pumps work, why they are essential for basement protection, and how to maintain them properly.',
};

export default function SumpPumpsPage() {
  return (
    <main className={styles.blogPostContainer}>
      <div className={styles.blogPost}>
        <div className={styles.blogPostHeader}>
          <Link href="/blog" className={styles.backToBlog}>
            ← Back to Blog
          </Link>
          <span className={styles.blogCategory}>Prevention</span>
          <h1 className={styles.blogPostTitle}>How Sump Pumps Protect Your Basement from Flooding</h1>
          <div className={styles.blogMeta}>
            <time dateTime="2024-04-15">April 15, 2024</time>
          </div>
        </div>

        <div className={styles.blogContent}>
          <p>
            A sump pump is one of the most important pieces of equipment in your home's flood prevention system. It works silently in the background to keep your basement dry and protect your property from water damage. Here's everything you need to know about sump pumps and their crucial role in home protection.
          </p>

          <h2>How Sump Pumps Work</h2>
          <p>
            Sump pumps are installed in a pit (sump basin) in the lowest part of your basement or crawlspace. When water enters the pit, the pump automatically activates and removes the water, directing it away from your home's foundation.
          </p>

          <h2>Types of Sump Pumps</h2>
          <ul className={styles.benefitsList}>
            <li><strong>Submersible Pumps:</strong> Installed inside the sump pit, these are quieter and more powerful</li>
            <li><strong>Pedestal Pumps:</strong> Motor sits above the pit, making it easier to service but louder</li>
            <li><strong>Battery Backup Pumps:</strong> Provide protection during power outages</li>
            <li><strong>Water-Powered Pumps:</strong> Use municipal water pressure as a backup</li>
          </ul>

          <h2>Benefits of a Sump Pump</h2>
          <ul className={styles.benefitsList}>
            <li>Prevents basement flooding</li>
            <li>Reduces humidity and mold growth</li>
            <li>Protects your foundation</li>
            <li>Maintains property value</li>
            <li>Prevents structural damage</li>
          </ul>

          <h2>Maintenance Tips</h2>
          <ol>
            <li>Test your pump monthly by pouring water into the pit</li>
            <li>Clean the pit of debris quarterly</li>
            <li>Check the discharge line for blockages</li>
            <li>Inspect the power cord and connections</li>
            <li>Test the backup battery system if you have one</li>
          </ol>

          <h2>Signs Your Sump Pump Needs Attention</h2>
          <ul className={styles.warningSigns}>
            <li>Unusual noises during operation</li>
            <li>Frequent cycling on and off</li>
            <li>Visible rust or corrosion</li>
            <li>Water not being pumped out effectively</li>
            <li>Age (most pumps last 7-10 years)</li>
          </ul>

          <div className={styles.callToAction}>
            <h2>Need Sump Pump Installation or Maintenance?</h2>
            <p>
              Don't wait for a flood to discover your sump pump isn't working properly. Signature Plumbing offers professional sump pump installation, maintenance, and repair services to keep your basement dry year-round.
            </p>
            <div className={styles.contactButtons}>
              <Link href="/#contact" className="button primary">
                Schedule Service
              </Link>
              <Link href="tel:416-450-9504" className="button secondary">
                Call: 416-450-9504
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 