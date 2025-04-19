import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Eco-Friendly Plumbing Solutions: Save Water and Energy | Signature Plumbing Blog',
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
              Eco-Friendly Plumbing Solutions: Save Water and Energy
            </h1>
            <div className={styles.blogMeta}>
              <time dateTime="2024-04-22">April 22, 2024</time>
            </div>
          </div>

          <div className={styles.blogContent}>
            <p>
              Making your home more eco-friendly doesn't have to be complicated or expensive. Simple plumbing 
              upgrades and maintenance practices can significantly reduce your water and energy consumption, 
              lower your utility bills, and help protect the environment. Here are some effective eco-friendly 
              plumbing solutions for your home.
            </p>

            <h2>Water-Saving Fixtures</h2>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Low-Flow Toilets</strong>
                <p>Modern low-flow toilets use as little as 1.28 gallons per flush (GPF), compared to older models that use 3.5-7 GPF.</p>
              </li>
              <li>
                <strong>Water-Efficient Faucets</strong>
                <p>Aerators and low-flow faucets can reduce water usage by up to 30% without sacrificing performance.</p>
              </li>
              <li>
                <strong>High-Efficiency Showerheads</strong>
                <p>New showerhead technology provides excellent water pressure while using significantly less water.</p>
              </li>
              <li>
                <strong>Smart Irrigation Systems</strong>
                <p>Weather-based controllers and drip irrigation systems minimize water waste in your garden.</p>
              </li>
            </ul>

            <h2>Energy-Saving Solutions</h2>
            <ul className={styles.warningSigns}>
              <li>Tankless water heaters (on-demand hot water)</li>
              <li>Heat pump water heaters</li>
              <li>Solar water heating systems</li>
              <li>Pipe insulation to reduce heat loss</li>
              <li>Smart water monitoring systems</li>
            </ul>

            <h2>Maintenance Tips for Sustainability</h2>
            <ul className={styles.warningSigns}>
              <li>Regularly check for and repair leaks</li>
              <li>Insulate hot water pipes</li>
              <li>Maintain proper water pressure</li>
              <li>Schedule annual plumbing inspections</li>
              <li>Use eco-friendly drain cleaners</li>
            </ul>

            <div className={styles.callToAction}>
              <h2>Professional Eco-Friendly Plumbing Services</h2>
              <p>
                At Signature Plumbing, we're committed to helping you make your home more sustainable:
              </p>
              <ul className={styles.warningSigns}>
                <li>Water-efficient fixture installation</li>
                <li>Energy-saving water heater upgrades</li>
                <li>Leak detection and repair</li>
                <li>Water conservation audits</li>
                <li>Eco-friendly plumbing maintenance</li>
              </ul>
              <p>
                Make your home more environmentally friendly while saving money on your utility bills. 
                Our certified technicians can help you choose and install the right eco-friendly solutions 
                for your specific needs.
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