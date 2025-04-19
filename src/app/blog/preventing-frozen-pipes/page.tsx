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
              Preventing Frozen Pipes in Etobicoke: Essential Winter Plumbing Tips
            </h1>
            <div className={styles.blogMeta}>
              <time dateTime="2024-04-21">April 21, 2024</time>
            </div>
          </div>

          <div className={styles.blogContent}>
            <p>
              As Etobicoke homeowners know, our Canadian winters can be harsh, with temperatures often dropping below 
              freezing. Frozen pipes are a common issue in our area, and they can lead to costly damage if not prevented. 
              At Signature Plumbing, we've helped countless homeowners across Etobicoke, Toronto, and the GTA protect 
              their plumbing systems during winter. Here's what you need to know to prevent frozen pipes in your home.
            </p>

            <h2>Why Frozen Pipes Are a Concern in Etobicoke</h2>
            <p>
              In our area, several factors increase the risk of frozen pipes:
            </p>
            <ul className={styles.warningSigns}>
              <li>Sudden temperature drops common in our climate</li>
              <li>Older homes with less insulation</li>
              <li>Pipes in unheated areas like basements and crawl spaces</li>
              <li>Exterior walls in older Etobicoke neighborhoods</li>
              <li>Vacant properties during winter months</li>
            </ul>

            <h2>Preventive Measures for GTA Homes</h2>
            <p>
              Here are essential steps to protect your Etobicoke home's plumbing:
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Insulate Exposed Pipes</strong>
                Pay special attention to pipes in unheated areas like basements, attics, and garages.
              </li>
              <li>
                <strong>Seal Air Leaks</strong>
                Check for drafts around pipes, especially in older Etobicoke homes.
              </li>
              <li>
                <strong>Maintain Consistent Heat</strong>
                Keep your home at a minimum temperature of 13°C (55°F), even when away.
              </li>
              <li>
                <strong>Let Faucets Drip</strong>
                Allow a slow drip from faucets during extreme cold spells.
              </li>
              <li>
                <strong>Disconnect Outdoor Hoses</strong>
                Remove and drain garden hoses before winter sets in.
              </li>
            </ul>

            <h2>Signs of Frozen Pipes</h2>
            <p>
              If you notice any of these signs in your Etobicoke home, act quickly:
            </p>
            <ul className={styles.warningSigns}>
              <li>Reduced or no water flow from faucets</li>
              <li>Frost on exposed pipes</li>
              <li>Strange odors from drains</li>
              <li>Unusual sounds when using water</li>
              <li>Visible bulges in pipes</li>
            </ul>

            <h2>What to Do If Pipes Freeze</h2>
            <p>
              If you suspect frozen pipes in your Etobicoke home:
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Turn Off Water</strong>
                Shut off the main water supply to prevent flooding if pipes burst.
              </li>
              <li>
                <strong>Apply Heat Carefully</strong>
                Use a hair dryer or space heater to thaw pipes slowly.
              </li>
              <li>
                <strong>Call a Professional</strong>
                Contact Signature Plumbing for immediate assistance.
              </li>
            </ul>

            <div className={styles.callToAction}>
              <h2>Need Help with Frozen Pipes in Etobicoke?</h2>
              <p>
                Don't wait until you have a plumbing emergency. Our experienced plumbers serve all Etobicoke 
                neighborhoods, including Islington, Kingsway, New Toronto, and surrounding areas. We offer 
                24/7 emergency service to help you prevent and address frozen pipe issues.
              </p>
              <div className={styles.contactButtons}>
                <a href="tel:416-450-9504" className={styles.phoneButton}>
                  Call Now: 416-450-9504
                </a>
                <a href="/#contact" className={styles.contactButton}>
                  Schedule Service
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
} 