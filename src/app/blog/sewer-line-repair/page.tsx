import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Sewer Line Repair in Etobicoke: What Homeowners Need to Know | Signature Plumbing Blog',
  description: 'Learn about sewer line issues common in Etobicoke homes, signs of problems, and why prompt repair is essential for your plumbing system.',
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
              Sewer Line Repair in Etobicoke: What Homeowners Need to Know
            </h1>
            <div className={styles.blogMeta}>
              <time dateTime="2024-04-20">April 20, 2024</time>
            </div>
          </div>

          <div className={styles.blogContent}>
            <p>
              Your sewer line plays a critical role in keeping waste safely out of your Etobicoke home. With our area's 
              aging infrastructure, tree root intrusion, and seasonal weather changes, sewer line issues are common. 
              At Signature Plumbing, we've helped countless homeowners across Etobicoke, Toronto, and the GTA address 
              sewer line problems before they become major emergencies.
            </p>

            <h2>Common Sewer Line Issues in Etobicoke</h2>
            <p>
              In our area, several factors contribute to sewer line problems:
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Tree Root Intrusion</strong>
                Many Etobicoke neighborhoods have mature trees whose roots can invade sewer lines.
              </li>
              <li>
                <strong>Aging Infrastructure</strong>
                Older homes in our area often have clay or cast iron pipes that are prone to deterioration.
              </li>
              <li>
                <strong>Ground Shifting</strong>
                Our freeze-thaw cycles can cause ground movement that damages sewer lines.
              </li>
              <li>
                <strong>Grease Buildup</strong>
                Improper disposal of cooking oils and fats can lead to blockages in our sewer system.
              </li>
            </ul>

            <h2>Signs of Sewer Line Problems</h2>
            <p>
              Watch for these warning signs in your Etobicoke home:
            </p>
            <ul className={styles.warningSigns}>
              <li>Slow drains throughout the house</li>
              <li>Gurgling sounds from toilets or drains</li>
              <li>Unpleasant odors in your yard or basement</li>
              <li>Patches of unusually green grass in your yard</li>
              <li>Backups in multiple fixtures simultaneously</li>
            </ul>

            <h2>Our Sewer Line Repair Services</h2>
            <p>
              At Signature Plumbing, we offer comprehensive sewer line services for Etobicoke homes:
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Video Inspection</strong>
                State-of-the-art cameras to diagnose issues without excavation.
              </li>
              <li>
                <strong>Trenchless Repair</strong>
                Minimally invasive solutions that preserve your landscaping.
              </li>
              <li>
                <strong>Root Removal</strong>
                Specialized equipment to clear tree roots from sewer lines.
              </li>
              <li>
                <strong>Pipe Relining</strong>
                Durable solutions for damaged pipes without full replacement.
              </li>
            </ul>

            <h2>Preventive Maintenance for Etobicoke Homes</h2>
            <p>
              Protect your sewer line with these local tips:
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Regular Inspections</strong>
                Schedule annual camera inspections to catch issues early.
              </li>
              <li>
                <strong>Proper Waste Disposal</strong>
                Avoid flushing items that can cause blockages in our system.
              </li>
              <li>
                <strong>Tree Root Management</strong>
                Regular root cutting to prevent sewer line intrusion.
              </li>
              <li>
                <strong>Backwater Valve Installation</strong>
                Protect your home from sewer backups during heavy rains.
              </li>
            </ul>

            <div className={styles.callToAction}>
              <h2>Need Sewer Line Service in Etobicoke?</h2>
              <p>
                Our experienced plumbers serve all Etobicoke neighborhoods, including Islington, Kingsway, 
                New Toronto, and surrounding areas. We offer emergency sewer line repair services 24/7 to 
                keep your home's plumbing system running smoothly.
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