import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Spotting and Fixing Hidden Plumbing Leaks | Signature Plumbing Blog',
  description: 'Learn how to identify hidden plumbing leaks in your home, prevent water damage, and when to call a professional plumber.',
};

export default function HiddenPlumbingLeaksPage() {
  return (
    <main className={styles.blogPostContainer}>
      <div className={styles.blogPost}>
        <div className={styles.blogPostHeader}>
          <Link href="/blog" className={styles.backToBlog}>
            ← Back to Blog
          </Link>
          <span className={styles.blogCategory}>Maintenance</span>
          <h1 className={styles.blogPostTitle}>Spotting and Fixing Hidden Plumbing Leaks</h1>
          <div className={styles.blogMeta}>
            <time dateTime="2024-04-13">April 13, 2024</time>
          </div>
        </div>

        <div className={styles.blogContent}>
          <p>
            Hidden plumbing leaks can cause significant damage to your home before you even notice them. These silent threats often go undetected until they've already caused structural damage or mold growth. Here's how to identify and address hidden leaks before they become major problems.
          </p>

          <h2>Signs of Hidden Leaks</h2>
          <ul className={styles.benefitsList}>
            <li>Unexplained increase in water bills</li>
            <li>Musty odors or mold growth</li>
            <li>Warped or stained walls/ceilings</li>
            <li>Damp spots on floors</li>
            <li>Reduced water pressure</li>
            <li>Sounds of running water when fixtures are off</li>
          </ul>

          <h2>Common Locations for Hidden Leaks</h2>
          <ul className={styles.benefitsList}>
            <li>Behind walls</li>
            <li>Under floors</li>
            <li>In crawl spaces</li>
            <li>Around water heaters</li>
            <li>Near appliances</li>
            <li>In irrigation systems</li>
          </ul>

          <h2>How to Detect Hidden Leaks</h2>
          <h3>Water Meter Test:</h3>
          <ol>
            <li>Turn off all water fixtures</li>
            <li>Record the water meter reading</li>
            <li>Wait 1-2 hours without using water</li>
            <li>Check if the meter reading has changed</li>
          </ol>

          <h3>Visual Inspection:</h3>
          <ol>
            <li>Check for water stains on walls and ceilings</li>
            <li>Look for warped or buckled flooring</li>
            <li>Inspect cabinets under sinks</li>
            <li>Examine the water heater area</li>
            <li>Check the foundation for cracks</li>
          </ol>

          <h2>Professional Leak Detection Methods</h2>
          <ul className={styles.benefitsList}>
            <li>Acoustic listening devices</li>
            <li>Infrared cameras</li>
            <li>Video pipe inspection</li>
            <li>Pressure testing</li>
            <li>Thermal imaging</li>
          </ul>

          <h2>Preventive Measures</h2>
          <ul className={styles.benefitsList}>
            <li>Regular plumbing inspections</li>
            <li>Monitor water bills for unusual increases</li>
            <li>Install water leak detectors</li>
            <li>Maintain proper water pressure</li>
            <li>Replace old pipes and fixtures</li>
          </ul>

          <div className={styles.callToAction}>
            <h2>Need Professional Leak Detection?</h2>
            <p>
              Don't wait for visible damage to appear. Signature Plumbing offers advanced leak detection services using state-of-the-art equipment to find and fix hidden leaks before they cause major damage to your home.
            </p>
            <div className={styles.contactButtons}>
              <Link href="/contact" className="button primary">
                Schedule Inspection
              </Link>
              <Link href="tel:+1234567890" className="button secondary">
                Call: (123) 456-7890
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 