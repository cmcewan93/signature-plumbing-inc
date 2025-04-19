import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Sewer Line Repair: What Homeowners Need to Know | Signature Plumbing Blog',
  description: 'Learn about sewer line problems, signs of damage, and why prompt repair is essential for your home\'s plumbing system.',
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
              Sewer Line Repair: What Homeowners Need to Know
            </h1>
            <div className={styles.blogMeta}>
              <time dateTime="2024-04-20">April 20, 2024</time>
            </div>
          </div>

          <div className={styles.blogContent}>
            <p>
              Your sewer line plays a critical role in keeping waste safely out of your home. When damage 
              or blockages occur, it can cause serious disruptions—and even health hazards. Understanding 
              the signs of sewer line problems and knowing when to call a professional can save you from 
              costly repairs and potential health risks.
            </p>

            <h2>Signs of Sewer Line Problems</h2>
            <ul className={styles.warningSigns}>
              <li>Frequent drain backups</li>
              <li>Foul odors near drains or your yard</li>
              <li>Wet spots or sinkholes on your lawn</li>
              <li>Gurgling toilets</li>
              <li>Slow draining throughout your home</li>
              <li>Unusual lush patches of grass in your yard</li>
            </ul>

            <h2>Why Prompt Sewer Line Repair Is Critical</h2>
            <p>A damaged sewer line can result in:</p>
            <ul className={styles.warningSigns}>
              <li>Raw sewage backups into your home</li>
              <li>Contaminated groundwater</li>
              <li>Property damage and foundation issues</li>
              <li>Expensive emergency repairs</li>
              <li>Health hazards for your family</li>
            </ul>

            <h2>Common Causes of Sewer Line Damage</h2>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Tree Root Intrusion</strong>
                <p>Tree roots can grow into sewer lines, causing blockages and cracks.</p>
              </li>
              <li>
                <strong>Aging Pipes</strong>
                <p>Older pipes made of clay or cast iron can deteriorate over time.</p>
              </li>
              <li>
                <strong>Ground Shifting</strong>
                <p>Soil movement can cause pipes to crack or collapse.</p>
              </li>
              <li>
                <strong>Improper Installation</strong>
                <p>Poor workmanship can lead to early failure of sewer lines.</p>
              </li>
            </ul>

            <div className={styles.callToAction}>
              <h2>Protect Your Home with Expert Sewer Line Service</h2>
              <p>
                At Signature Plumbing, we offer comprehensive sewer line services including:
              </p>
              <ul className={styles.warningSigns}>
                <li>Video inspections to diagnose problems</li>
                <li>Trenchless sewer repairs to minimize disruption</li>
                <li>Full sewer line replacements when necessary</li>
                <li>24/7 emergency service for urgent issues</li>
              </ul>
              <p>
                Don't wait for a sewer emergency. Contact us today for a professional inspection 
                and keep your sewer system running efficiently.
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