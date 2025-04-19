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
      <button 
        className={styles.menuButton} 
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <span className={styles.menuIcon}>{isOpen ? '✕' : '☰'}</span>
      </button>
      <nav className={`${styles.menuItems} ${isOpen ? styles.active : ''}`}>
        <Link href="/" className={styles.menuItem} onClick={toggleMenu}>
          Home
        </Link>
        <Link href="#services" className={styles.menuItem} onClick={toggleMenu}>
          Services
        </Link>
        <Link href="/service-areas" className={styles.menuItem} onClick={toggleMenu}>
          Service Areas
        </Link>
        <Link href="#about" className={styles.menuItem} onClick={toggleMenu}>
          About
        </Link>
        <Link href="/blog" className={styles.menuItem} onClick={toggleMenu}>
          Blog
        </Link>
        <Link href="#contact" className={styles.menuItem} onClick={toggleMenu}>
          Contact
        </Link>
        <a href="tel:416-450-9504" className={styles.phoneNumber} onClick={toggleMenu}>
          416-450-9504
        </a>
      </nav>
    </div>
  );
} 