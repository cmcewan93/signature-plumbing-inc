import Link from 'next/link';
import styles from './page.module.css';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Plumbing Blog | Signature Plumbing',
  description: "Expert plumbing tips, maintenance advice, and industry insights from Signature Plumbing. Learn how to maintain your home's plumbing system.",
  keywords: 'plumbing blog, plumbing tips, plumbing maintenance, home plumbing advice'
};

const blogPosts = [
  {
    slug: 'water-heater-maintenance',
    title: 'Water Heater Maintenance and Efficiency Tips',
    excerpt: 'Learn how to maintain your water heater for optimal performance, improve efficiency, and extend its lifespan with expert tips.',
    category: 'Maintenance',
    date: 'April 22, 2024',
  },
  {
    slug: 'eco-friendly-plumbing',
    title: 'Eco-Friendly Plumbing Solutions: Save Water and Energy',
    excerpt: 'Discover how eco-friendly plumbing solutions can help you save water, reduce energy consumption, and lower your utility bills.',
    category: 'Sustainability',
    date: 'April 22, 2024',
  },
  {
    slug: 'preventing-frozen-pipes',
    title: 'Preventing Frozen Pipes: Essential Winter Plumbing Tips',
    excerpt: 'Learn how to protect your pipes from freezing during winter, prevent costly damage, and what to do if your pipes freeze.',
    category: 'Winter Care',
    date: 'April 21, 2024',
  },
  {
    slug: 'common-plumbing-repairs',
    title: 'Common Plumbing Repairs Every Homeowner Should Know About',
    excerpt: 'Learn about common household plumbing repairs, from leaky faucets to running toilets, and why timely repairs are crucial for your home.',
    category: 'Repairs',
    date: 'April 21, 2024',
  },
  {
    slug: 'sewer-line-repair',
    title: 'Sewer Line Repair: What Homeowners Need to Know',
    excerpt: 'Your sewer line plays a critical role in keeping waste safely out of your home. Learn about signs of problems and why prompt repair is essential.',
    category: 'Maintenance',
    date: 'April 20, 2024',
  },
  {
    slug: 'prevent-frozen-pipes',
    title: 'How to Prevent Frozen Pipes This Winter',
    excerpt: 'Learn essential tips to prevent frozen pipes and protect your home from water damage during cold weather.',
    category: 'Prevention',
    date: 'April 19, 2024',
  },
  {
    slug: 'leaking-pipes',
    title: 'Leaking Pipes: A Silent Threat to Your Home',
    excerpt: 'Discover why leaking pipes are more dangerous than they seem and how to protect your home from water damage.',
    category: 'Repairs',
    date: 'April 18, 2024',
  },
  {
    slug: 'toilet-repairs',
    title: 'Toilet Repairs & Replacements: What You Should Know',
    excerpt: 'Learn when to repair vs. replace your toilet and how to maintain it properly.',
    category: 'Repairs',
    date: 'April 17, 2024',
  },
  {
    slug: 'plumbing-emergency',
    title: 'What to Do in a Plumbing Emergency',
    excerpt: 'Be prepared for plumbing emergencies with our guide on common issues and immediate actions to take.',
    category: 'Emergency',
    date: 'April 16, 2024',
  },
  {
    slug: 'sump-pumps',
    title: 'How Sump Pumps Protect Your Basement from Flooding',
    excerpt: 'Learn how sump pumps work and why they are essential for protecting your basement from water damage.',
    category: 'Prevention',
    date: 'April 15, 2024',
  },
  {
    slug: 'sink-faucet-repairs',
    title: 'Sink & Faucet Repairs: Small Fixes with Big Impact',
    excerpt: 'Discover why timely sink and faucet repairs are crucial for water conservation and preventing bigger issues.',
    category: 'Repairs',
    date: 'April 14, 2024',
  },
  {
    slug: 'hidden-plumbing-leaks',
    title: 'Spotting and Fixing Hidden Plumbing Leaks',
    excerpt: 'Learn how to identify hidden plumbing leaks and prevent costly water damage to your home.',
    category: 'Maintenance',
    date: 'April 13, 2024',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' }
];

export default function BlogPage() {
  return (
    <>
      <main className={styles.blogPage}>
        <div className="container">
          <div className={styles.pageHeader}>
            <Breadcrumbs items={breadcrumbs} />
            <h1 className={styles.pageTitle}>Plumbing Tips, Repairs & Maintenance Advice</h1>
          </div>
          <p className={styles.pageDescription}>
            Expert insights and practical advice for maintaining your home's plumbing system.
          </p>
          
          <div className={styles.blogGrid}>
            {blogPosts.map((post) => (
              <article key={post.slug} className={styles.blogCard}>
                <Link href={`/blog/${post.slug}`} className={styles.blogLink}>
                  <div className={styles.blogCardContent}>
                    <span className={styles.blogCategory}>{post.category}</span>
                    <h2 className={styles.blogCardTitle}>{post.title}</h2>
                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                    <div className={styles.blogMeta}>
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 