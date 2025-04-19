import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Sink & Faucet Repairs: Small Fixes with Big Impact | Signature Plumbing Blog',
  description: 'Learn about common sink and faucet issues, how to fix them, and when to call a professional plumber.',
};

export default function SinkFaucetRepairsPage() {
  return (
    <main className={styles.blogPostContainer}>
      <div className={styles.blogPost}>
        <div className={styles.blogPostHeader}>
          <Link href="/blog" className={styles.backToBlog}>
            ← Back to Blog
          </Link>
          <span className={styles.blogCategory}>Repairs</span>
          <h1 className={styles.blogPostTitle}>Sink & Faucet Repairs: Small Fixes with Big Impact</h1>
          <div className={styles.blogMeta}>
            <time dateTime="2024-04-14">April 14, 2024</time>
          </div>
        </div>

        <div className={styles.blogContent}>
          <p>
            Sink and faucet issues might seem minor, but they can lead to significant water waste and higher utility bills if left unaddressed. Understanding common problems and their solutions can help you maintain your plumbing fixtures effectively.
          </p>

          <h2>Common Sink and Faucet Problems</h2>
          <ul className={styles.benefitsList}>
            <li>Leaky faucets</li>
            <li>Low water pressure</li>
            <li>Clogged drains</li>
            <li>Dripping handles</li>
            <li>Loose connections</li>
            <li>Corroded parts</li>
          </ul>

          <h2>DIY Fixes for Common Issues</h2>
          <h3>For Leaky Faucets:</h3>
          <ol>
            <li>Turn off the water supply</li>
            <li>Disassemble the faucet</li>
            <li>Replace worn washers or O-rings</li>
            <li>Reassemble and test</li>
          </ol>

          <h3>For Low Water Pressure:</h3>
          <ol>
            <li>Clean the aerator</li>
            <li>Check for mineral buildup</li>
            <li>Inspect the supply lines</li>
            <li>Verify the shut-off valve is fully open</li>
          </ol>

          <h3>For Clogged Drains:</h3>
          <ol>
            <li>Use a plunger</li>
            <li>Try a drain snake</li>
            <li>Use a natural drain cleaner</li>
            <li>Remove and clean the P-trap if necessary</li>
          </ol>

          <h2>When to Call a Professional</h2>
          <p>
            While some issues can be fixed with basic tools, certain situations require professional attention:
          </p>
          <ul className={styles.warningSigns}>
            <li>Persistent leaks after DIY attempts</li>
            <li>Major pipe damage or corrosion</li>
            <li>Complete loss of water pressure</li>
            <li>Multiple fixtures affected simultaneously</li>
            <li>Visible water damage</li>
          </ul>

          <h2>Preventive Maintenance Tips</h2>
          <ul className={styles.benefitsList}>
            <li>Regularly clean aerators and showerheads</li>
            <li>Inspect for leaks monthly</li>
            <li>Use drain strainers to prevent clogs</li>
            <li>Avoid harsh chemical cleaners</li>
            <li>Schedule annual professional inspections</li>
          </ul>

          <div className={styles.callToAction}>
            <h2>Need Professional Sink or Faucet Repair?</h2>
            <p>
              Don't let small plumbing issues turn into big problems. Signature Plumbing's expert technicians can quickly diagnose and fix any sink or faucet issue, ensuring your fixtures work efficiently and last longer.
            </p>
            <div className={styles.contactButtons}>
              <Link href="/#contact" className="button primary">
                Schedule Repair
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