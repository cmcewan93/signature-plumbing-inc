import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'What to Do in a Plumbing Emergency | Signature Plumbing Blog',
  description: 'Learn how to handle common plumbing emergencies, from burst pipes to overflowing toilets, and when to call a professional plumber.',
};

export default function PlumbingEmergencyPage() {
  return (
    <main className={styles.blogPostContainer}>
      <div className={styles.blogPost}>
        <div className={styles.blogPostHeader}>
          <Link href="/blog" className={styles.backToBlog}>
            ← Back to Blog
          </Link>
          <span className={styles.blogCategory}>Emergency</span>
          <h1 className={styles.blogPostTitle}>What to Do in a Plumbing Emergency</h1>
          <div className={styles.blogMeta}>
            <time dateTime="2024-04-16">April 16, 2024</time>
          </div>
        </div>

        <div className={styles.blogContent}>
          <p>
            Plumbing emergencies can happen at any time and often require immediate attention to prevent significant damage to your home. Knowing how to respond quickly and effectively can save you time, money, and stress. Here's what you need to know about handling common plumbing emergencies.
          </p>

          <h2>Common Plumbing Emergencies</h2>
          <ul className={styles.benefitsList}>
            <li>Burst pipes</li>
            <li>Overflowing toilets</li>
            <li>Severe leaks</li>
            <li>No hot water</li>
            <li>Sewage backup</li>
            <li>Gas leaks</li>
          </ul>

          <h2>Immediate Actions to Take</h2>
          <h3>For Burst Pipes:</h3>
          <ol>
            <li>Turn off the main water supply immediately</li>
            <li>Open faucets to drain remaining water</li>
            <li>Turn off the water heater</li>
            <li>Call a professional plumber</li>
          </ol>

          <h3>For Overflowing Toilets:</h3>
          <ol>
            <li>Turn off the water supply valve behind the toilet</li>
            <li>Use a plunger to try to clear the blockage</li>
            <li>If the problem persists, call a plumber</li>
          </ol>

          <h3>For Gas Leaks:</h3>
          <ol>
            <li>Evacuate the premises immediately</li>
            <li>Do not use any electrical switches or appliances</li>
            <li>Call the gas company and emergency services</li>
            <li>Contact a licensed plumber for repairs</li>
          </ol>

          <h2>Preventive Measures</h2>
          <ul className={styles.benefitsList}>
            <li>Know the location of your main water shut-off valve</li>
            <li>Regularly inspect pipes for signs of wear or damage</li>
            <li>Keep emergency plumbing contact numbers handy</li>
            <li>Schedule regular maintenance checks</li>
          </ul>

          <h2>When to Call a Professional</h2>
          <p>
            While some minor issues can be handled with basic tools, many plumbing emergencies require professional attention. Call a plumber immediately if you experience:
          </p>
          <ul className={styles.warningSigns}>
            <li>Major water leaks or flooding</li>
            <li>Sewage backup or foul odors</li>
            <li>No water throughout the house</li>
            <li>Gas leaks or carbon monoxide concerns</li>
            <li>Water heater malfunctions</li>
          </ul>

          <div className={styles.callToAction}>
            <h2>Need Emergency Plumbing Services?</h2>
            <p>
              Don't let a plumbing emergency turn into a disaster. Signature Plumbing offers 24/7 emergency services to handle any plumbing crisis quickly and professionally.
            </p>
            <div className={styles.contactButtons}>
              <Link href="/#contact" className={`${styles.button} ${styles.primary}`}>
                Contact Us Now
              </Link>
              <Link href="tel:+1234567890" className={`${styles.button} ${styles.secondary}`}>
                Call: (123) 456-7890
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 