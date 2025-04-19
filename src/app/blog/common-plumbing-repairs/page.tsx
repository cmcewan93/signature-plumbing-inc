import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Common Plumbing Repairs in Etobicoke: What Every Homeowner Should Know | Signature Plumbing Blog',
  description: 'Learn about common household plumbing repairs in Etobicoke and the GTA, from leaky faucets to running toilets, and why timely repairs are crucial for your home.',
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
            <span className={styles.blogCategory}>Repairs</span>
            <h1 className={styles.blogPostTitle}>
              Common Plumbing Repairs in Etobicoke: What Every Homeowner Should Know
            </h1>
            <div className={styles.blogMeta}>
              <time dateTime="2024-04-21">April 21, 2024</time>
            </div>
          </div>

          <div className={styles.blogContent}>
            <p>
              Plumbing problems can strike when you least expect them, especially in Etobicoke's older homes and 
              changing weather conditions. From leaky faucets to running toilets, even small issues can become 
              major headaches if left unaddressed. At Signature Plumbing, we specialize in residential plumbing 
              repairs across Etobicoke, Toronto, and the GTA, helping homeowners maintain their properties and 
              prevent costly damage.
            </p>

            <h2>Common Plumbing Issues in Etobicoke Homes</h2>
            <p>
              In our area, certain plumbing problems are more prevalent due to our climate and housing stock:
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Leaky Faucets</strong>
                Common in older Etobicoke homes, these can waste significant water and increase your utility bills.
              </li>
              <li>
                <strong>Running Toilets</strong>
                Often caused by worn-out flappers or fill valves, especially in homes with hard water.
              </li>
              <li>
                <strong>Low Water Pressure</strong>
                Frequently related to pipe corrosion or hidden leaks in older plumbing systems.
              </li>
              <li>
                <strong>Dripping Showerheads</strong>
                Common in homes with mineral buildup from our hard water conditions.
              </li>
              <li>
                <strong>Clogged Drains</strong>
                Tree roots and aging pipes in older neighborhoods can lead to frequent blockages.
              </li>
            </ul>

            <h2>Why Timely Repairs Matter in the GTA</h2>
            <p>
              In Etobicoke and surrounding areas, ignoring plumbing issues can lead to:
            </p>
            <ul className={styles.warningSigns}>
              <li>Water damage to your home's structure</li>
              <li>Higher utility bills from wasted water</li>
              <li>Mold growth in our humid climate</li>
              <li>Foundation issues from water seepage</li>
              <li>Emergency repairs during extreme weather</li>
            </ul>

            <h2>Our Local Repair Services</h2>
            <p>
              At Signature Plumbing, we offer comprehensive repair services across Etobicoke:
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Emergency Repairs</strong>
                24/7 service for urgent plumbing issues in all Etobicoke neighborhoods.
              </li>
              <li>
                <strong>Preventive Maintenance</strong>
                Regular inspections to catch problems before they become emergencies.
              </li>
              <li>
                <strong>Water Conservation</strong>
                Helping homeowners reduce water waste and lower utility bills.
              </li>
              <li>
                <strong>Older Home Expertise</strong>
                Specialized knowledge of common issues in Etobicoke's historic homes.
              </li>
            </ul>

            <div className={styles.callToAction}>
              <h2>Need Plumbing Repairs in Etobicoke?</h2>
              <p>
                Our experienced plumbers serve all Etobicoke neighborhoods, including Islington, Kingsway, 
                New Toronto, and surrounding areas. We offer prompt, professional plumbing repair services 
                to keep your home's plumbing system running smoothly.
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