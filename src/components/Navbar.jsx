import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/products';
import styles from './Navbar.module.css';

function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home',     page: 'home' },
    { label: 'Products', page: 'products' },
    { label: 'Gallery', page: 'gallery'},
    { label: 'About',    page: 'about' },
    { label: 'Contact',  page: 'contact' },
  ];

  const handleNav = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      {/* Brand */}
      <button className={styles.brand} onClick={() => handleNav('home')}>
        <div className={styles.logoBox}>
          <span className={styles.logoText}>SV</span>
        </div>
        <div className={styles.brandText}>
          <span className={styles.brandName}>{COMPANY_INFO.shortName}</span>
          <span className={styles.brandSub}>Industries Pvt. Ltd.</span>
        </div>
      </button>

      {/* Desktop nav */}
      <nav className={styles.desktopNav}>
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.page}>
              <button
                className={`${styles.navLink} ${currentPage === link.page ? styles.active : ''}`}
                onClick={() => handleNav(link.page)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <button className={styles.ctaBtn} onClick={() => handleNav('contact')}>
          Get a Quote
        </button>
      </nav>

      {/* Mobile hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <button
              key={link.page}
              className={`${styles.mobileLink} ${currentPage === link.page ? styles.mobileLinkActive : ''}`}
              onClick={() => handleNav(link.page)}
            >
              {link.label}
            </button>
          ))}
          <button className={styles.mobileCta} onClick={() => handleNav('contact')}>
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
