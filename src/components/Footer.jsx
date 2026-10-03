import React from 'react';
import { COMPANY_INFO, PRODUCTS, CATEGORIES } from '../data/products';
import styles from './Footer.module.css';

function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  const productLinks = PRODUCTS.slice(0, 6).map((p) => ({
    label: p.title,
    action: () => onNavigate('products'),
  }));

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand column */}
        <div className={styles.brandCol}>
          <button className={styles.brandBtn} onClick={() => onNavigate('home')}>
            <div className={styles.logoBox}>
              <span className={styles.logoText}>SV</span>
            </div>
            <span className={styles.brandName}>{COMPANY_INFO.shortName}</span>
          </button>
          <p className={styles.tagline}>
            Manufacturers of precision agro processing machinery for rice mills, grain
            separators and complete processing plants. Based in Chebrolu, Guntur.
          </p>
          <div className={styles.gstBox}>
            <span className={styles.gstLabel}>GSTIN</span>
            <span className={styles.gstVal}>{COMPANY_INFO.gstin}</span>
          </div>
          <div className={styles.gstBox} style={{ marginTop: 6 }}>
            <span className={styles.gstLabel}>Proprietor</span>
            <span className={styles.gstVal}>{COMPANY_INFO.proprietor}</span>
          </div>
        </div>

        {/* Products column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Products</h4>
          <ul className={styles.linkList}>
            {productLinks.map((l) => (
              <li key={l.label}>
                <button className={styles.footLink} onClick={l.action}>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Company column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Company</h4>
          <ul className={styles.linkList}>
            {[
              { label: 'Home',    page: 'home' },
              { label: 'Products', page: 'products' },
              { label: 'About Us', page: 'about' },
              { label: 'Gallery',  page: 'about' },
              { label: 'Contact',  page: 'contact' },
            ].map((l) => (
              <li key={l.label}>
                <button className={styles.footLink} onClick={() => onNavigate(l.page)}>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact Us</h4>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactIcon}>📞</span>
              <div>
                <a href={`tel:${COMPANY_INFO.phone1}`} className={styles.contactVal}>
                  {COMPANY_INFO.phone1}
                </a>
                <br />
                <a href={`tel:${COMPANY_INFO.phone2}`} className={styles.contactVal}>
                  {COMPANY_INFO.phone2}
                </a>
              </div>
            </li>
            <li>
              <span className={styles.contactIcon}>📍</span>
              <div className={styles.contactVal}>
                {COMPANY_INFO.address.village},<br />
                {COMPANY_INFO.address.mandal},<br />
                {COMPANY_INFO.address.district} – {COMPANY_INFO.address.pin}
              </div>
            </li>
            <li>
              <span className={styles.contactIcon}>✉️</span>
              <a href={`mailto:${COMPANY_INFO.email}`} className={styles.contactVal}>
                {COMPANY_INFO.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <span className={styles.copy}>
          © {year} {COMPANY_INFO.name}. All rights reserved.
        </span>
        <span className={styles.copy}>
          Est. {COMPANY_INFO.established} · Made in India 🇮🇳
        </span>
      </div>
    </footer>
  );
}

export default Footer;
