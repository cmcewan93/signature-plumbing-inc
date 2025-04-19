import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Plumbing Emergencies in Etobicoke: What to Do and Who to Call | Signature Plumbing Blog',
  description: 'Learn how to handle plumbing emergencies in Etobicoke, when to call for help, and what to expect from our 24/7 emergency plumbing services.',
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
            <span className={styles.blogCategory}>Emergency</span>
            <h1 className={styles.blogPostTitle}>
              Plumbing Emergencies in Etobicoke: What to Do and Who to Call
            </h1>
            <div className={styles.blogMeta}>
              <time dateTime="2024-04-16">April 16, 2024</time>
            </div>
          </div>

          <div className={styles.blogContent}>
            <p>
              Plumbing emergencies can happen at any time in Etobicoke, especially in our older neighborhoods. 
              Whether it's a burst pipe during a cold snap or a sewer backup during heavy rain, knowing how to 
              respond quickly can prevent extensive damage to your home. At Signature Plumbing, we provide 24/7 
              emergency plumbing services across Etobicoke, Toronto, and the GTA.
            </p>

            <h2>Common Plumbing Emergencies in Etobicoke</h2>
            <p>
              These are the most frequent emergencies we handle in our area:
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Burst Pipes</strong>
                Common during winter months in older Etobicoke homes with aging plumbing.
              </li>
              <li>
                <strong>Sewer Backups</strong>
                Often caused by heavy rainfall overwhelming our area's drainage systems.
              </li>
              <li>
                <strong>Water Heater Failures</strong>
                Critical during our cold winters, especially in homes with older units.
              </li>
              <li>
                <strong>Basement Flooding</strong>
                A risk during spring thaws and summer storms in our area.
              </li>
              <li>
                <strong>Gas Leaks</strong>
                Immediate attention required for safety in all Etobicoke neighborhoods.
              </li>
            </ul>

            <h2>What to Do in a Plumbing Emergency</h2>
            <p>
              Follow these steps while waiting for our emergency plumbers:
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Shut Off Water</strong>
                Locate your main water shutoff valve immediately.
              </li>
              <li>
                <strong>Call for Help</strong>
                Contact Signature Plumbing at 416-450-9504 for 24/7 service.
              </li>
              <li>
                <strong>Protect Property</strong>
                Move valuables and use towels to contain water.
              </li>
              <li>
                <strong>Document Damage</strong>
                Take photos for insurance claims.
              </li>
              <li>
                <strong>Stay Safe</strong>
                Avoid electrical hazards and gas leaks.
              </li>
            </ul>

            <h2>Our Emergency Response Services</h2>
            <p>
              We provide comprehensive emergency plumbing services:
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>24/7 Availability</strong>
                Immediate response to all Etobicoke neighborhoods.
              </li>
              <li>
                <strong>Rapid Response</strong>
                Average arrival time of 30-60 minutes in our service area.
              </li>
              <li>
                <strong>Emergency Repairs</strong>
                Temporary and permanent solutions for all emergencies.
              </li>
              <li>
                <strong>Water Damage Prevention</strong>
                Quick action to minimize property damage.
              </li>
              <li>
                <strong>Insurance Documentation</strong>
                Detailed reports for your claims process.
              </li>
            </ul>

            <h2>Preventing Emergencies in Etobicoke</h2>
            <p>
              Take these preventive measures for our area:
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Winter Preparation</strong>
                Insulate pipes and maintain consistent heat.
              </li>
              <li>
                <strong>Regular Maintenance</strong>
                Schedule annual inspections before winter.
              </li>
              <li>
                <strong>Backwater Valve</strong>
                Install to prevent sewer backups during storms.
              </li>
              <li>
                <strong>Know Your System</strong>
                Learn the location of shutoff valves and main lines.
              </li>
            </ul>

            <h2>Local Emergency Resources</h2>
            <p>
              Important contacts for Etobicoke residents:
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Signature Plumbing</strong>
                24/7 Emergency Service: 416-450-9504
              </li>
              <li>
                <strong>Toronto Water</strong>
                For main line issues: 311
              </li>
              <li>
                <strong>Toronto Hydro</strong>
                For electrical emergencies: 416-542-8000
              </li>
              <li>
                <strong>Enbridge Gas</strong>
                For gas emergencies: 1-866-763-5427
              </li>
            </ul>

            <div className={styles.callToAction}>
              <h2>Need Emergency Plumbing in Etobicoke?</h2>
              <p>
                Our experienced plumbers serve all Etobicoke neighborhoods, including Islington, Kingsway, 
                New Toronto, and surrounding areas. We offer 24/7 emergency plumbing services to protect 
                your home from water damage and ensure your safety.
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