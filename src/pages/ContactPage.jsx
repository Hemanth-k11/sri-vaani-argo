import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import FadeUp from '../components/FadeUp';
import { COMPANY_INFO, PRODUCTS } from '../data/products';
import styles from './ContactPage.module.css';

const INIT = { name: '', phone: '', email: '', product: '', message: '', type: 'quote' };

// Initialize EmailJS
emailjs.init('esfMk0s2fpD-UF8Bc'); 

function ContactPage() {
  const [form, setForm] = useState(INIT);
  const [submitted, setSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.phone.trim())   e.phone   = 'Phone number is required';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Please describe your requirement';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
    setSendError('');
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    
    setLoading(true);
    setSendError('');

    try {
      const templateParams = {
        to_email: 'srivaaniagro@gmail.com',
        from_name: form.name,
        from_phone: form.phone,
        from_email: form.email || 'Not provided',
        inquiry_type: form.type,
        product: form.product || 'Not specified',
        message: form.message,
      };

      await emailjs.send(
        'service_o8u8jba',      // Replace with actual ID
        'template_5u4hevq',     // Replace with actual ID
        templateParams,
        'esfMk0s2fpD-UF8Bc'     // Explicitly passing Public Key
      );

      setSubmit(true);
      setForm(INIT);
    } catch (error) {
      console.error('Email send error:', error);
      setSendError('Failed to send enquiry. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  // SUCCESS VIEW
  if (submitted) {
    return (
      <main className={styles.page}>
        <div className={styles.successBox}>
          <div className={styles.successIcon}>✅</div>
          <h2 className={styles.successTitle}>Enquiry Received!</h2>
          <p className={styles.successText}>
            Thank you. We've received your enquiry and will call
            you back within 24 hours.
          </p>
          <button className={styles.btnGreen} onClick={() => setSubmit(false)}>
            Submit Another Enquiry
          </button>
        </div>
      </main>
    );
  }

  // FORM VIEW
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <FadeUp>
          <div className={styles.heroTag}>Contact Us</div>
          <h1 className={styles.heroTitle}>
            Get in Touch<br />
            <span className={styles.accent}>We'll Get Back Same Day</span>
          </h1>
          <p className={styles.heroSub}>
            Call us, visit our workshop, or fill in the form below. We respond to all
            enquiries within 24 hours.
          </p>
        </FadeUp>
      </section>

      {/* Main Content */}
      <section className={styles.mainGrid}>
        {/* Contact Info Cards */}
        <FadeUp className={styles.infoCol}>
          <h2 className={styles.infoTitle}>Contact Details</h2>
          {[
            {
              icon: '📞', label: 'Phone Numbers',
              content: (
                <>
                  <a href={`tel:${COMPANY_INFO.phone1}`} className={styles.infoVal}>{COMPANY_INFO.phone1}</a>
                  <a href={`tel:${COMPANY_INFO.phone2}`} className={styles.infoVal}>{COMPANY_INFO.phone2}</a>
                </>
              ),
            },
            {
              icon: '📍', label: 'Workshop Address',
              content: (
                <span className={styles.infoVal}>
                  {COMPANY_INFO.address.village},<br />
                  {COMPANY_INFO.address.mandal},<br />
                  {COMPANY_INFO.address.district} – {COMPANY_INFO.address.pin},<br />
                  {COMPANY_INFO.address.state}
                </span>
              ),
            },
            {
              icon: '✉️', label: 'Email',
              content: <a href={`mailto:${COMPANY_INFO.email}`} className={styles.infoVal}>{COMPANY_INFO.email}</a>,
            },
            {
              icon: '🕐', label: 'Working Hours',
              content: (
                <>
                  <span className={styles.infoVal}>Monday – Saturday: 9:00 AM – 6:00 PM</span>
                  <span className={styles.infoVal2}>Sunday: By prior appointment only</span>
                </>
              ),
            },
            {
              icon: '🆔', label: 'GST Number',
              content: <span className={styles.infoVal}>{COMPANY_INFO.gstin}</span>,
            },
          ].map((item) => (
            <div key={item.label} className={styles.infoCard}>
              <div className={styles.infoIcon}>{item.icon}</div>
              <div>
                <div className={styles.infoLabel}>{item.label}</div>
                {item.content}
              </div>
            </div>
          ))}
          <a href={`tel:${COMPANY_INFO.phone1}`} className={styles.callNow}>
            📞 Call Now: {COMPANY_INFO.phone1}
          </a>
        </FadeUp>

        {/* Enquiry Form */}
        <FadeUp delay={150} className={styles.formCol}>
          <h2 className={styles.formTitle}>Send Us an Enquiry</h2>
          <p className={styles.formSubtitle}>Fill in the form and we'll call you back within 24 hours.</p>

          <div className={styles.typeToggle}>
            {['quote', 'demo', 'support'].map((v) => (
              <button
                key={v}
                className={`${styles.typeBtn} ${form.type === v ? styles.typeBtnActive : ''}`}
                onClick={() => setForm((f) => ({ ...f, type: v }))}
              >
                {v === 'quote' ? 'Request a Quote' : v === 'demo' ? 'Request Demo' : 'Technical Support'}
              </button>
            ))}
          </div>

          {sendError && <div className={styles.errorAlert}>⚠️ {sendError}</div>}

          <div className={styles.formGrid}>
            <div className={styles.field}>
              <label className={styles.label}>Full Name *</label>
              <input className={`${styles.input} ${errors.name ? styles.inputError : ''}`} type="text" name="name" value={form.name} onChange={handleChange} />
              {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Phone Number *</label>
              <input className={`${styles.input} ${errors.phone ? styles.inputError : ''}`} type="tel" name="phone" value={form.phone} onChange={handleChange} />
              {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
            </div>
            <div className={`${styles.field} ${styles.fieldFull}`}>
              <label className={styles.label}>Email Address (Optional)</label>
              <input className={`${styles.input} ${errors.email ? styles.inputError : ''}`} type="email" name="email" value={form.email} onChange={handleChange} />
              {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
            </div>
            <div className={`${styles.field} ${styles.fieldFull}`}>
              <label className={styles.label}>Product of Interest</label>
              <select className={styles.input} name="product" value={form.product} onChange={handleChange}>
                <option value="">— Select a machine —</option>
                {PRODUCTS.map((p) => <option key={p.id} value={p.title}>{p.title}</option>)}
              </select>
            </div>
            <div className={`${styles.field} ${styles.fieldFull}`}>
              <label className={styles.label}>Your Requirement *</label>
              <textarea className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`} name="message" rows={5} value={form.message} onChange={handleChange} />
              {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
            </div>
          </div>

          <button className={styles.submitBtn} onClick={handleSubmit} disabled={loading}>
            {loading ? 'Sending...' : 'Send Enquiry →'}
          </button>
        </FadeUp>
      </section>

      {/* Map */}
      <div className={styles.mapSection}>
        <div className={styles.mapFrame}>
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3831.354524721995!2d80.50816927513873!3d16.202203684496762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDEyJzA3LjkiTiA4MMKwMzAnMzguNyJF!5e0!3m2!1sen!2sin!4v1778826729814!5m2!1sen!2sin"
            width="100%" height="400" style={{ border: 0 }} loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}

export default ContactPage;