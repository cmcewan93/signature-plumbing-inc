import Link from 'next/link';
import styles from './Breadcrumbs.module.css';

interface BreadcrumbsProps {
  items: {
    label: string;
    href: string;
  }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
      <ol>
        {items.map((item, index) => (
          <li key={item.href}>
            {index < items.length - 1 ? (
              <>
                <Link href={item.href}>{item.label}</Link>
                <span className={styles.separator}>/</span>
              </>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
} 