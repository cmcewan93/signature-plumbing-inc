import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Toilet Repairs and Replacements: When to Fix vs. Replace | Signature Plumbing Blog',
  description: 'Learn when to repair or replace your toilet, common toilet problems, and how to choose the right toilet for your home.',
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
              Toilet Repairs and Replacements: When to Fix vs. Replace
            </h1>
            <div className={styles.blogMeta}>
              <time dateTime="2024-04-19">April 19, 2024</time>
            </div>
          </div>

          <div className={styles.blogContent}>
            <p>
              Your toilet is one of the most used fixtures in your home, and when it's not working properly, 
              it can cause significant inconvenience. At Signature Plumbing, we help homeowners decide whether 
              to repair or replace their toilets based on the specific situation. Here's what you need to know 
              about common toilet problems and when it's time for a replacement.
            </p>

            <h2>Common Toilet Problems and Repairs</h2>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Running Toilet</strong>
                <p>Often caused by a faulty flapper or fill valve. Usually a simple repair that can save water and money.</p>
              </li>
              <li>
                <strong>Weak Flush</strong>
                <p>May be due to clogged rim jets or low water level in the tank. Can often be fixed with cleaning or adjustment.</p>
              </li>
              <li>
                <strong>Leaking Base</strong>
                <p>Usually indicates a worn wax ring. Requires immediate attention to prevent water damage.</p>
              </li>
              <li>
                <strong>Clogged Toilet</strong>
                <p>Can often be resolved with a plunger or auger, but recurring clogs may indicate a deeper issue.</p>
              </li>
              <li>
                <strong>Loose Handle</strong>
                <p>A simple repair that involves tightening or replacing the handle mechanism.</p>
              </li>
            </ul>

            <h2>When to Replace Your Toilet</h2>
            <ul className={styles.warningSigns}>
              <li>Frequent repairs needed</li>
              <li>Older than 20 years</li>
              <li>Visible cracks in the porcelain</li>
              <li>Constant running or leaking</li>
              <li>Poor flushing performance</li>
              <li>High water bills</li>
            </ul>

            <h2>Benefits of Modern Toilets</h2>
            <ul className={styles.warningSigns}>
              <li>Water efficiency (1.28 GPF or less)</li>
              <li>Improved flushing technology</li>
              <li>Better comfort and design</li>
              <li>Quieter operation</li>
              <li>Easier cleaning</li>
              <li>Longer lifespan</li>
            </ul>

            <div className={styles.callToAction}>
              <h2>Professional Toilet Services</h2>
              <p>
                At Signature Plumbing, we offer comprehensive toilet services:
              </p>
              <ul className={styles.warningSigns}>
                <li>Expert toilet repairs</li>
                <li>Professional toilet installation</li>
                <li>Toilet replacement consultation</li>
                <li>Emergency toilet services</li>
              </ul>
              <p>
                Whether you need a simple repair or a complete toilet replacement, our team of experts 
                can help you make the right decision for your home.
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