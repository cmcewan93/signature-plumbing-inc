'use client';

import { useState } from 'react';
import styles from './MobileMenu.module.css';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.mobileMenu}>
      <button 
        className={`${styles.menuButton} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`${styles.mobileNav} ${isOpen ? styles.active : ''}`}>
        <ul>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="/blog" onClick={toggleMenu}>Blog</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          <li><a href="tel:416-450-9504" className={styles.phoneNumber}>416-450-9504</a></li>
        </ul>
      </nav>
    </div>
  );
} 