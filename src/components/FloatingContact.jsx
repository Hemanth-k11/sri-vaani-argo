import React, { useState } from 'react';
import styles from './FloatingContact.module.css';
import { COMPANY_INFO } from '../data/products';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = COMPANY_INFO.phone1;
  const phoneNumber = COMPANY_INFO.phone1;
  const whatsappMessage = encodeURIComponent('Hello, I am interested in your agricultural machinery. Could you provide more information?');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className={styles.container}>
      {/* Menu Items */}
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        {/* WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.item}
          title="Chat on WhatsApp"
        >
          <span className={styles.icon}>💬</span>
          <span className={styles.label}>WhatsApp</span>
        </a>

        {/* Phone */}
        <a
          href={`tel:${phoneNumber}`}
          className={styles.item}
          title="Call us"
        >
          <span className={styles.icon}>📞</span>
          <span className={styles.label}>Call</span>
        </a>
      </div>

      {/* Toggle Button */}
      <button
        className={`${styles.toggle} ${isOpen ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact options"
        title="Contact us"
      >
        <span className={styles.toggleIcon}>✉️</span>
      </button>
    </div>
  );
}
