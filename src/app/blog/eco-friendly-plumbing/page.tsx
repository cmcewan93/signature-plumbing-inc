import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Eco-Friendly Plumbing Solutions for Etobicoke Homes | Signature Plumbing Blog',
  description: 'Discover how eco-friendly plumbing solutions can help you save water, reduce energy consumption, and lower your utility bills while protecting the environment.',
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
            <span className={styles.blogCategory}>Sustainability</span>
            <h1 className={styles.blogPostTitle}>
              Eco-Friendly Plumbing Solutions for Etobicoke Homes
            </h1>
            <div className={styles.blogMeta}>
              <time dateTime="2024-04-22">April 22, 2024</time>
            </div>
          </div>

          <div className={styles.blogContent}>
            <p>
              Making your Etobicoke home more eco-friendly doesn't have to be complicated or expensive. With our 
              local water quality and climate considerations, simple plumbing upgrades and maintenance practices 
              can significantly reduce your water and energy consumption, lower your utility bills, and help protect 
              the environment. At Signature Plumbing, we help homeowners across Etobicoke, Toronto, and the GTA 
              implement sustainable plumbing solutions.
            </p>

            <h2>Water Conservation Solutions for Etobicoke</h2>
            <p>
              In our area, water conservation is crucial due to:
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Hard Water Conditions</strong>
                Our water quality requires efficient fixtures to prevent mineral buildup.
              </li>
              <li>
                <strong>Seasonal Variations</strong>
                Summer water restrictions and winter conservation needs.
              </li>
              <li>
                <strong>Older Infrastructure</strong>
                Many Etobicoke homes can benefit from modern water-saving upgrades.
              </li>
            </ul>

            <h2>Eco-Friendly Upgrades for GTA Homes</h2>
            <p>
              Consider these sustainable plumbing solutions:
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Low-Flow Fixtures</strong>
                Install WaterSense-certified faucets and showerheads to reduce water usage.
              </li>
              <li>
                <strong>Dual-Flush Toilets</strong>
                Modern toilets that use less water per flush, ideal for our water conditions.
              </li>
              <li>
                <strong>Tankless Water Heaters</strong>
                Energy-efficient systems that provide hot water on demand.
              </li>
              <li>
                <strong>Rainwater Harvesting</strong>
                Collect and reuse rainwater for outdoor irrigation.
              </li>
              <li>
                <strong>Greywater Systems</strong>
                Reuse water from sinks and showers for toilet flushing.
              </li>
            </ul>

            <h2>Local Rebates and Incentives</h2>
            <p>
              Take advantage of these programs in Etobicoke:
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Toronto Water Rebates</strong>
                Rebates for water-efficient fixtures and appliances.
              </li>
              <li>
                <strong>Toronto Hydro Programs</strong>
                Incentives for energy-efficient water heating systems.
              </li>
              <li>
                <strong>City of Toronto Grants</strong>
                Support for sustainable home improvements.
              </li>
            </ul>

            <h2>Maintenance Tips for Sustainable Plumbing</h2>
            <p>
              Keep your eco-friendly systems running efficiently:
            </p>
            <ul className={styles.warningSigns}>
              <li>Regularly check for leaks and drips</li>
              <li>Clean aerators and showerheads to prevent mineral buildup</li>
              <li>Schedule annual maintenance for water heaters</li>
              <li>Monitor water usage with smart meters</li>
              <li>Insulate pipes to prevent heat loss</li>
            </ul>

            <div className={styles.callToAction}>
              <h2>Ready to Make Your Etobicoke Home More Eco-Friendly?</h2>
              <p>
                Our experienced plumbers serve all Etobicoke neighborhoods, including Islington, Kingsway, 
                New Toronto, and surrounding areas. We can help you implement sustainable plumbing solutions 
                that save water, reduce energy consumption, and lower your utility bills.
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