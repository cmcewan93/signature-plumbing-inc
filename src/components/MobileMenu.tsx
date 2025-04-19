'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './MobileMenu.module.css';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.mobileMenu}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        <span className={styles.menuIcon}>{isOpen ? '✕' : '☰'}</span>
      </button>
      {isOpen && (
        <nav className={styles.menuItems}>
          <Link href="/" className={styles.menuItem} onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/services" className={styles.menuItem} onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/about" className={styles.menuItem} onClick={toggleMenu}>
            About
          </Link>
          <Link href="/blog" className={styles.menuItem} onClick={toggleMenu}>
            Blog
          </Link>
          <Link href="/contact" className={styles.menuItem} onClick={toggleMenu}>
            Contact
          </Link>
        </nav>
      )}
    </div>
  );
} 