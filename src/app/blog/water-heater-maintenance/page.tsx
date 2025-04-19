import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Water Heater Maintenance and Efficiency Tips | Signature Plumbing Blog',
  description: 'Learn how to maintain your water heater for optimal performance, improve efficiency, and extend its lifespan with expert tips from Signature Plumbing.',
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
            <span className={styles.blogCategory}>Maintenance</span>
            <h1 className={styles.blogPostTitle}>
              Water Heater Maintenance and Efficiency Tips
            </h1>
            <div className={styles.blogMeta}>
              <time dateTime="2024-04-20">April 20, 2024</time>
            </div>
          </div>

          <div className={styles.blogContent}>
            <p>
              Your water heater is one of the most important appliances in your home, providing hot water for 
              showers, laundry, and dishes. Proper maintenance can significantly extend its lifespan and improve 
              efficiency. Here's what you need to know about keeping your water heater in top condition.
            </p>

            <h2>Regular Maintenance Tasks</h2>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Annual Flushing</strong>
                <p>Sediment buildup can reduce efficiency and damage your water heater. Flushing the tank annually helps maintain performance.</p>
              </li>
              <li>
                <strong>Temperature Check</strong>
                <p>Set your water heater to 120°F (49°C) for optimal efficiency and safety. Higher temperatures waste energy and increase scalding risk.</p>
              </li>
              <li>
                <strong>Anode Rod Inspection</strong>
                <p>The anode rod prevents tank corrosion. Check it every 2-3 years and replace when significantly worn.</p>
              </li>
              <li>
                <strong>Pressure Relief Valve Test</strong>
                <p>Test the valve annually to ensure it's working properly and prevent dangerous pressure buildup.</p>
              </li>
            </ul>

            <h2>Signs Your Water Heater Needs Attention</h2>
            <ul className={styles.warningSigns}>
              <li>Rusty or discolored water</li>
              <li>Unusual noises (popping, rumbling)</li>
              <li>Water temperature fluctuations</li>
              <li>Higher than normal energy bills</li>
              <li>Leaks around the tank</li>
              <li>Insufficient hot water</li>
            </ul>

            <h2>Energy Efficiency Tips</h2>
            <ul className={styles.warningSigns}>
              <li>Insulate your water heater and pipes</li>
              <li>Install low-flow fixtures</li>
              <li>Use a timer for electric water heaters</li>
              <li>Consider a tankless water heater</li>
              <li>Fix any leaks promptly</li>
              <li>Keep the area around the heater clear</li>
            </ul>

            <div className={styles.callToAction}>
              <h2>Professional Water Heater Services</h2>
              <p>
                At Signature Plumbing, we offer comprehensive water heater services:
              </p>
              <ul className={styles.warningSigns}>
                <li>Annual maintenance inspections</li>
                <li>Water heater repairs</li>
                <li>Professional installation</li>
                <li>Emergency services</li>
                <li>Efficiency upgrades</li>
              </ul>
              <p>
                Regular maintenance by our certified technicians can help prevent costly repairs and extend 
                the life of your water heater.
              </p>
              <div className={styles.contactButtons}>
                <Link href="tel:416-450-9504" className={styles.phoneButton}>
                  📞 Call us at 416-450-9504
                </Link>
                <Link href="/#contact" className={`${styles.button} ${styles.primary}`}>
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