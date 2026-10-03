import React from 'react';
import FadeUp from '../components/FadeUp';
import ProductCard from '../components/ProductCard';
import ContactStrip from '../components/ContactStrip';
import {
  IMAGES, PRODUCTS, STATS, WHY_ITEMS, PROCESS_STEPS,
  TESTIMONIALS, COMPANY_INFO,
} from '../data/products';
import styles from './HomePage.module.css';

/* ─── Marquee items ─── */
const MARQUEE_ITEMS = [
  'Mini Rice Mill', 'Paddy Dehusker', 'Grain Separator', 'Bucket Elevator',
  'Vibrating Cleaner', 'Processing Plant', 'Aspirator', 'Conveyor System',
  'Quality Assured', 'Made in India',
];

function HomePage({ onNavigate }) {
  return (
    <main className={styles.page}>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroBgPattern} aria-hidden="true" />

        <div className={styles.heroContent}>
          {/* Eyebrow */}
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Guntur, Andhra Pradesh · Est. {COMPANY_INFO.established}
          </div>

          {/* Headline */}
          <h1 className={styles.heroTitle}>
            Agro Machinery<br />
            <span className={styles.heroAccent}>Built for India's</span><br />
            Farmers &amp; Mills
          </h1>

          <p className={styles.heroSub}>
            {COMPANY_INFO.name} manufactures precision-engineered rice mills,
            grain separators, dehusking machines and complete processing plants —
            from our workshop in Chebrolu, Guntur.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnGreen} onClick={() => onNavigate('products')}>
              View Our Machines
            </button>
            <button className={styles.btnOutline} onClick={() => onNavigate('contact')}>
              Request a Quote
            </button>
          </div>

          {/* Stats row */}
          <div className={styles.statsRow}>
            {STATS.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <div className={styles.statDivider} />}
                <div className={styles.statItem}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Image collage */}
        <div className={styles.heroCollage}>
          <div className={styles.collageBadge}>
            Manufactured in India
            <span>Chebrolu, Guntur</span>
          </div>
          <img
            className={styles.collageMain}
            src={IMAGES.miniMillsRow}
            alt="WALSON Mini Rice Mills ready for dispatch"
          />
          <img
            className={styles.collageSm1}
            src={IMAGES.huller}
            alt="Paddy Dehusking Machine"
          />
          <img
            className={styles.collageSm2}
            src={IMAGES.factory}
            alt="Factory installation setup"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
      ═══════════════════════════════════════ */}
      <div className={styles.marqueeWrap} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>{item}</span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          PRODUCTS PREVIEW
      ═══════════════════════════════════════ */}
      <section className={styles.section}>
        <FadeUp>
          <div className={styles.sectionCenter}>
            <div className={styles.sectionTag}>Our Products</div>
            <h2 className={styles.sectionTitle}>
              Machines That Power<br />India's Agro Processing
            </h2>
            <p className={styles.sectionSub}>
              Every machine is fabricated in-house at our Guntur workshop —
              built tough to handle real field conditions with minimal maintenance.
            </p>
          </div>
        </FadeUp>

        <div className={styles.prodGrid}>
          {PRODUCTS.slice(0, 3).map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              delay={i * 100}
              onViewDetail={() => onNavigate('products')}
            />
          ))}
        </div>

        <div className={styles.centerBtn}>
          <button className={styles.btnGreen} onClick={() => onNavigate('products')}>
            See All 8 Products →
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SPLIT FEATURE – Factory Photo
      ═══════════════════════════════════════ */}
      <section className={styles.splitSection}>
        <FadeUp className={styles.splitImg}>
          <div className={styles.imgStack}>
            <img src={IMAGES.factory} alt="Factory installation" className={styles.imgStackMain} />
            <img src={IMAGES.inspection} alt="Machine inspection" className={styles.imgStackFloat} />
            <div className={styles.imgBadge}>
              <span className={styles.imgBadgeNum}>100+</span>
              <span className={styles.imgBadgeLabel}>Machines Delivered</span>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={150} className={styles.splitText}>
          <div className={styles.sectionTag}>Who We Are</div>
          <h2 className={styles.sectionTitle}>
            Andhra Pradesh's Trusted<br />Agro Machinery Maker
          </h2>
          <p className={styles.splitPara}>
            Sri Vaani Agro Industries has been manufacturing and supplying
            agro processing machinery across Andhra Pradesh since{' '}
            {COMPANY_INFO.established}. Our workshop in Chebrolu, Guntur
            houses the full fabrication, assembly and testing facility.
          </p>
          <p className={styles.splitPara}>
            We serve rice mill owners, paddy farmers, agro dealers and
            government processing units with machines built to Indian
            field conditions — robust, affordable and easy to maintain.
          </p>
          <div className={styles.splitHighlights}>
            {[
              { icon: '🏭', text: 'Full in-house fabrication & testing' },
              { icon: '🔧', text: 'Custom capacity configurations' },
              { icon: '🚚', text: 'Pan-India delivery available' },
              { icon: '📞', text: 'Dedicated after-sales support' },
            ].map((h) => (
              <div key={h.text} className={styles.highlight}>
                <span>{h.icon}</span>
                <span>{h.text}</span>
              </div>
            ))}
          </div>
          <button className={styles.btnGreen} onClick={() => onNavigate('about')}>
            Learn More About Us
          </button>
        </FadeUp>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS TIMELINE
      ═══════════════════════════════════════ */}
      <section className={styles.processSection}>
        <FadeUp>
          <div className={styles.sectionCenter}>
            <div className={styles.sectionTag}>How We Work</div>
            <h2 className={styles.sectionTitle}>From Order to Installation</h2>
            <p className={styles.sectionSub}>
              A simple, transparent 5-step process — so you always know what's happening.
            </p>
          </div>
        </FadeUp>

        <div className={styles.processGrid}>
          {PROCESS_STEPS.map((step, i) => (
            <FadeUp key={step.num} delay={i * 80}>
              <div className={styles.processStep}>
                <div className={styles.processNum}>{step.num}</div>
                <h4 className={styles.processTitle}>{step.title}</h4>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY US – dark panel
      ═══════════════════════════════════════ */}
      <section className={styles.whySection}>
        <FadeUp>
          <div className={styles.sectionTag} style={{ color: '#7DC891' }}>
            <span style={{ background: '#7DC891', display: 'inline-block', width: 24, height: 2, marginRight: 10, verticalAlign: 'middle' }} />
            Why Choose Us
          </div>
          <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>
            Built on Trust,<br />Delivered with Precision
          </h2>
          <p className={styles.sectionSub} style={{ color: '#5A7A5E' }}>
            Sri Vaani Agro Industries has been supplying agro processing machinery
            across Andhra Pradesh and beyond for over a decade.
          </p>
        </FadeUp>

        <div className={styles.whyGrid}>
          {WHY_ITEMS.map((item, i) => (
            <FadeUp key={item.title} delay={i * 80}>
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>{item.icon}</div>
                <h4 className={styles.whyTitle}>{item.title}</h4>
                <p className={styles.whyDesc}>{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY
      ═══════════════════════════════════════ */}
      <section className={styles.section}>
        <FadeUp>
          <div className={styles.sectionTag}>Gallery</div>
          <h2 className={styles.sectionTitle}>Our Workshop &amp; Installations</h2>
        </FadeUp>

        <div className={styles.galleryGrid}>
          {[
            { img: IMAGES.factory,       caption: 'Complete Installation – Guntur', tall: true  },
            { img: IMAGES.miniMillFront, caption: 'WALSON Mini Rice Mills',          tall: false },
            { img: IMAGES.vibroScreen,   caption: 'Vibrating Screen Demo',           tall: false },
            { img: IMAGES.blueSystem,    caption: 'Complete Processing Plant',        tall: false },
            { img: IMAGES.multiGrade,    caption: 'Multi-Grade Separator',            tall: false },
          ].map((g) => (
            <div key={g.caption} className={`${styles.galleryItem} ${g.tall ? styles.galleryTall : ''}`}>
              <img src={g.img} alt={g.caption} className={styles.galleryImg} loading="lazy" />
              <div className={styles.galleryOverlay} />
              <span className={styles.galleryCaption}>{g.caption}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════ */}
      <section className={styles.testimonialSection}>
        <FadeUp>
          <div className={styles.sectionCenter}>
            <div className={styles.sectionTag}>Customer Stories</div>
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
          </div>
        </FadeUp>

        <div className={styles.testimonialGrid}>
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={t.name} delay={i * 100}>
              <div className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.testimonialText}>{t.text}</p>
                <div className={styles.testimonialDivider} />
                <div className={styles.testimonialName}>{t.name}</div>
                <div className={styles.testimonialRole}>{t.role}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaPattern} aria-hidden="true" />
        <FadeUp>
          <h2 className={styles.ctaTitle}>
            Ready to Upgrade<br />
            <span className={styles.ctaAccent}>Your Processing Unit?</span>
          </h2>
          <p className={styles.ctaSub}>
            Call us or visit our workshop in Chebrolu, Guntur for a live
            demonstration of any machine.
          </p>
          <div className={styles.ctaBtns}>
            <a href={`tel:${COMPANY_INFO.phone1}`} className={styles.btnWhite}>
              📞 {COMPANY_INFO.phone1}
            </a>
            <button className={styles.btnOutlineW} onClick={() => onNavigate('products')}>
              View All Products
            </button>
          </div>
        </FadeUp>
      </section>

      {/* Contact Strip */}
      <ContactStrip />
    </main>
  );
}

export default HomePage;
