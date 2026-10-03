import React from 'react';
import { COMPANY_INFO } from '../data/products';
import styles from './ContactStrip.module.css';

function ContactStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        <div className={styles.item}>
          <div className={styles.iconBox}>📞</div>
          <div>
            <div className={styles.label}>Call Us</div>
            <a href={`tel:${COMPANY_INFO.phone1}`} className={styles.val}>
              {COMPANY_INFO.phone1}
            </a>
            <a href={`tel:${COMPANY_INFO.phone2}`} className={styles.val2}>
              {COMPANY_INFO.phone2}
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.item}>
          <div className={styles.iconBox}>📍</div>
          <div>
            <div className={styles.label}>Workshop Address</div>
            <div className={styles.val}>{COMPANY_INFO.address.village}</div>
            <div className={styles.val2}>
              {COMPANY_INFO.address.mandal}, {COMPANY_INFO.address.district} –{' '}
              {COMPANY_INFO.address.pin}
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.item}>
          <div className={styles.iconBox}>🕐</div>
          <div>
            <div className={styles.label}>Working Hours</div>
            <div className={styles.val}>Mon – Sat: 9:00 AM – 6:00 PM</div>
            <div className={styles.val2}>Sunday: By Appointment</div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.item}>
          <div className={styles.iconBox}>✉️</div>
          <div>
            <div className={styles.label}>Email</div>
            <a href={`mailto:${COMPANY_INFO.email}`} className={styles.val}>
              {COMPANY_INFO.email}
            </a>
            <div className={styles.val2}>We reply within 24 hours</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactStrip;
