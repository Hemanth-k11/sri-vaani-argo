import React from 'react';
import FadeUp from '../components/FadeUp';
import ContactStrip from '../components/ContactStrip';
import { IMAGES, STATS, COMPANY_INFO } from '../data/products';
import styles from './AboutPage.module.css';

const TEAM_VALUES = [
  { icon: '🎯', title: 'Precision',    desc: 'Every weld, every cut, every assembly step is executed to exact tolerances. We do not compromise on build quality.' },
  { icon: '💡', title: 'Innovation',   desc: 'We constantly iterate on our machine designs based on field feedback from farmers and mill owners across Andhra Pradesh.' },
  { icon: '🤝', title: 'Reliability',  desc: 'A machine that breaks down costs our customers far more than its price. We build to last — with locally available spare parts.' },
  { icon: '🌾', title: 'Farmer First', desc: 'Every design decision is made with the end operator in mind — ease of use, safety and low cost of ownership always come first.' },
];

const MILESTONES = [
  { year: 2010, event: 'Sri Vaani Agro Industries founded in Chebrolu, Guntur by Gade Vinayabhushan Reddy.' },
  { year: 2013, event: 'Launched the first WALSON Mini Rice Mill series — became an instant bestseller in Krishna and Guntur districts.' },
  { year: 2016, event: 'Expanded workshop facility to handle complete processing plant fabrication and assembly.' },
  { year: 2018, event: 'Delivered 100th complete rice processing plant installation across Andhra Pradesh.' },
  { year: 2021, event: 'Introduced multi-grade grain separator range and vibrating screen cleaner series.' },
  { year: 2024, event: 'Expanded distributor network to Telangana and Tamil Nadu markets.' },
  { year: 2026, event: 'Serving 500+ customers across South India with 8+ machine types in production.' },
];

function AboutPage({ onNavigate }) {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <FadeUp>
          <div className={styles.heroTag}>About Us</div>
          <h1 className={styles.heroTitle}>
            Andhra Pradesh's Trusted<br />
            <span className={styles.accent}>Agro Machinery Maker</span>
          </h1>
          <p className={styles.heroSub}>
            Founded in {COMPANY_INFO.established}, Sri Vaani Agro Industries has grown
            from a small fabrication unit in Chebrolu into one of Guntur district's
            most trusted agro processing machinery manufacturers.
          </p>
        </FadeUp>
      </section>

      {/* Stats Bar */}
      <div className={styles.statsBar}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.statItem}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Story Section */}
      <section className={styles.storySection}>
        <FadeUp className={styles.storyText}>
          <div className={styles.sectionTag}>Our Story</div>
          <h2 className={styles.sectionTitle}>Built from the Ground Up</h2>
          <p className={styles.para}>
            Sri Vaani Agro Industries was founded in {COMPANY_INFO.established} by{' '}
            <strong>{COMPANY_INFO.proprietor}</strong> in Kothareddipalem Village,
            Chebrolu Mandal, Guntur. Starting with a small team and a single fabrication
            shed, the company set out with one goal — to build agro processing machinery
            that Indian farmers and mill owners could actually afford, operate, and maintain.
          </p>
          <p className={styles.para}>
            Today, our workshop houses a full fabrication, machining, assembly and testing
            facility. Every component — frames, hoppers, sieves, conveyors and drives —
            is fabricated in-house. This gives us complete control over quality and allows
            us to customise machines to the specific needs of each customer.
          </p>
          <p className={styles.para}>
            We serve rice mill owners, paddy farmers, agro processing cooperatives and
            government agencies across Andhra Pradesh, Telangana and Tamil Nadu, with
            ongoing expansion into new markets.
          </p>
        </FadeUp>

        <FadeUp delay={150} className={styles.storyImages}>
          <img src={IMAGES.factory}    alt="Workshop installation" className={styles.storyImgMain} />
          <img src={IMAGES.inspection} alt="Machine inspection"    className={styles.storyImgFloat} />
        </FadeUp>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <FadeUp>
          <div className={styles.sectionTag}>What We Stand For</div>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
        </FadeUp>
        <div className={styles.valuesGrid}>
          {TEAM_VALUES.map((v, i) => (
            <FadeUp key={v.title} delay={i * 80}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h4 className={styles.valueTitle}>{v.title}</h4>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <FadeUp>
          <div className={styles.sectionTag}>Our Journey</div>
          <h2 className={styles.sectionTitle}>Milestones &amp; Growth</h2>
        </FadeUp>
        <div className={styles.timeline}>
          {MILESTONES.map((m, i) => (
            <FadeUp key={m.year} delay={i * 60}>
              <div className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}>
                <div className={styles.timelineYear}>{m.year}</div>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <p className={styles.timelineText}>{m.event}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Factory Gallery */}
      <section className={styles.gallerySection}>
        <FadeUp>
          <div className={styles.sectionTag}>Our Facility</div>
          <h2 className={styles.sectionTitle}>Inside Our Workshop</h2>
          <p className={styles.sectionSub}>
            Located in Chebrolu Mandal, Guntur — our facility handles the complete
            build process from raw steel to finished machine.
          </p>
        </FadeUp>

        <div className={styles.galleryGrid}>
          {[
            { img: IMAGES.factory,       label: 'Main Assembly Hall' },
            { img: IMAGES.miniMillFront, label: 'WALSON Mill Production' },
            { img: IMAGES.huller,        label: 'Dehusker Fabrication' },
            { img: IMAGES.blueSystem,    label: 'Complete Plant Assembly' },
            { img: IMAGES.separatorTeal, label: 'Separator Line' },
            { img: IMAGES.multiGrade,    label: 'Quality Check' },
          ].map((g) => (
            <div key={g.label} className={styles.galleryItem}>
              <img src={g.img} alt={g.label} className={styles.galleryImg} loading="lazy" />
              <div className={styles.galleryLabel}>{g.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <FadeUp>
          <h2 className={styles.ctaTitle}>
            Come Visit Our Workshop
          </h2>
          <p className={styles.ctaSub}>
            We welcome customers to our Chebrolu facility for live machine demonstrations.
            Call us to schedule your visit.
          </p>
          <div className={styles.ctaBtns}>
            <a href={`tel:${COMPANY_INFO.phone1}`} className={styles.btnWhite}>
              📞 {COMPANY_INFO.phone1}
            </a>
            <button className={styles.btnOutlineW} onClick={() => onNavigate('products')}>
              View Products
            </button>
          </div>
        </FadeUp>
      </section>

      <ContactStrip />
    </main>
  );
}

export default AboutPage;
