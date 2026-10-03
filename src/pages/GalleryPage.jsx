import React, { useState, useEffect, useCallback } from 'react';
import FadeUp from '../components/FadeUp';
import ContactStrip from '../components/ContactStrip';
import { COMPANY_INFO } from '../data/products';
import styles from './GalleryPage.module.css';

/* ─────────────────────────────────────────────────
   GALLERY DATA
   Add new items here; images should be imported or
   served from /public. Update src paths to match
   your project's asset pipeline.
───────────────────────────────────────────────── */
const GALLERY_ITEMS = [
  {
    id: 1,
    src: '/assets/images/blue_husker.jpeg',
    thumb: '/assets/images/blue_husker.jpeg',
    title: 'WALSON Blue Paddy Husker',
    caption: 'Our signature blue-painted paddy husker — fabricated in-house at the Chebrolu workshop with twin rubber-roll mechanism and integral belt drive.',
    category: 'Machines',
    tag: 'Husking',
    tagColor: '#1D6B38',
    span: 'tall',
  },
  {
    id: 2,
    src: '/assets/images/blue_paddy_sep.jpeg',
    thumb: '/assets/images/blue_paddy_sep.jpeg',
    title: 'Paddy Separator — Front View',
    caption: 'Multi-row zigzag paddy separator with hopper feed, blue MS frame and stainless grading deck. Separates paddy from milled rice with high efficiency.',
    category: 'Machines',
    tag: 'Separation',
    tagColor: '#2563EB',
  },
  {
    id: 3,
    src: '/assets/images/blue_paddy_sep2.jpeg',
    thumb: '/assets/images/blue_paddy_sep2.jpeg',
    title: 'Paddy Separator — Angle View',
    caption: 'Side-angle view showing the slotted deck assembly and structural frame of the WALSON paddy separator. Deck angle is adjustable for different paddy varieties.',
    category: 'Machines',
    tag: 'Separation',
    tagColor: '#2563EB',
  },
  {
    id: 4,
    src: '/assets/images/bucket_elevator.jpeg',
    thumb: '/assets/images/bucket_elevator.jpeg',
    title: 'Bucket Elevator',
    caption: 'Vertical grain handling — white and blue painted bucket elevator for lifting paddy, rice or other grains between processing stages. Custom heights available.',
    category: 'Machines',
    tag: 'Handling',
    tagColor: '#7C3AED',
    span: 'tall',
  },
  {
    id: 5,
    src: '/assets/images/grey_aspirator.jpeg',
    thumb: '/assets/images/grey_aspirator.jpeg',
    title: 'Grain Aspirator — Front',
    caption: 'Heavy-duty grey aspirator with centrifugal blower and multi-stage output trays. Separates husk, dust and light impurities from the grain stream.',
    category: 'Machines',
    tag: 'Cleaning',
    tagColor: '#0F766E',
  },
  {
    id: 6,
    src: '/assets/images/grey_aspirator2.jpeg',
    thumb: '/assets/images/grey_aspirator2.jpeg',
    title: 'Grain Aspirator — Side',
    caption: 'Side profile showing the blower unit, output chutes and cast-iron drive pulley. Drive pulley size can be customised to match available motor RPM.',
    category: 'Machines',
    tag: 'Cleaning',
    tagColor: '#0F766E',
  },
  {
    id: 7,
    src: '/assets/images/award_ceremony.jpeg',
    thumb: '/assets/images/award_ceremony.jpeg',
    title: 'Government Recognition Award',
    caption: 'Sri Vaani Agro Industries receiving recognition from ANGRAU for innovation in agricultural machinery. The award acknowledges our contribution to farmer income through affordable processing technology.',
    category: 'Recognition',
    tag: 'Award',
    tagColor: '#B45309',
    span: 'wide',
  },
  {
    id: 8,
    src: '/assets/images/newspaper1.jpeg',
    thumb: '/assets/images/newspaper1.jpeg',
    title: 'Media Coverage — ETV Guntur',
    caption: 'Telugu newspaper feature on proprietor Gade Vinayabhushan Reddy and the WALSON mini rice mill. The article highlights how the machine helps small farmers process and sell rice directly at higher margins.',
    category: 'Media',
    tag: 'Press',
    tagColor: '#DC2626',
    span: 'wide',
  },
];

const CATEGORIES = ['All', 'Machines', 'Recognition', 'Media'];

/* ─────────────────────────────────────────────────
   LIGHTBOX COMPONENT
───────────────────────────────────────────────── */
function Lightbox({ items, currentIndex, onClose, onPrev, onNext, onSelectId }) {
  const item = items[currentIndex];

  /* Close on Escape, navigate with arrow keys */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowLeft')  onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  /* Prevent body scroll while lightbox is open */
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!item) return null;

  return (
    <div className={styles.lightboxOverlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={item.title}>
      <div className={styles.lightboxPanel} onClick={(e) => e.stopPropagation()}>

        {/* Close */}
        <button className={styles.lightboxClose} onClick={onClose} aria-label="Close lightbox">✕</button>

        {/* Image area */}
        <div className={styles.lightboxImgWrap}>
          <img src={item.src} alt={item.title} className={styles.lightboxImg} />

          {/* Prev / Next */}
          <button
            className={`${styles.lightboxNav} ${styles.lightboxNavPrev}`}
            onClick={onPrev}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            className={`${styles.lightboxNav} ${styles.lightboxNavNext}`}
            onClick={onNext}
            aria-label="Next image"
          >
            ›
          </button>

          {/* Counter */}
          <div className={styles.lightboxCounter}>
            {currentIndex + 1} / {items.length}
          </div>
        </div>

        {/* Meta */}
        <div className={styles.lightboxMeta}>
          <span
            className={styles.lightboxTag}
            style={{ background: item.tagColor }}
          >
            {item.tag}
          </span>
          <h3 className={styles.lightboxTitle}>{item.title}</h3>
          <p className={styles.lightboxCaption}>{item.caption}</p>

          {/* Thumbnail strip */}
          <div className={styles.thumbStrip}>
            {items.map((t, i) => (
              <button
                key={t.id}
                className={`${styles.stripThumb} ${i === currentIndex ? styles.stripThumbActive : ''}`}
                onClick={() => onSelectId(t.id)}
                aria-label={`View ${t.title}`}
              >
                <img src={t.thumb} alt={t.title} className={styles.stripThumbImg} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   GALLERY CARD COMPONENT
───────────────────────────────────────────────── */
function GalleryCard({ item, index, onOpen }) {
  return (
    <FadeUp delay={index * 60}>
      <div
        className={`
          ${styles.card}
          ${item.span === 'tall' ? styles.cardTall : ''}
          ${item.span === 'wide' ? styles.cardWide : ''}
        `}
        onClick={() => onOpen(item.id)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onOpen(item.id)}
        aria-label={`Open ${item.title}`}
      >
        <div className={styles.cardImgWrap}>
          <img
            src={item.thumb}
            alt={item.title}
            className={styles.cardImg}
            loading="lazy"
          />
          <div className={styles.cardOverlay} />
        </div>

        <div className={styles.cardMeta}>
          <span
            className={styles.cardTag}
            style={{ background: item.tagColor }}
          >
            {item.tag}
          </span>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.cardCaption}>{item.caption}</p>
          <span className={styles.cardExpand}>⤢ View Full</span>
        </div>
      </div>
    </FadeUp>
  );
}

/* ─────────────────────────────────────────────────
   MAIN GALLERY PAGE
───────────────────────────────────────────────── */
function GalleryPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxId, setLightboxId]         = useState(null);

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((g) => g.category === activeCategory);

  const lightboxIndex = filtered.findIndex((g) => g.id === lightboxId);

  const openLightbox  = useCallback((id)  => setLightboxId(id), []);
  const closeLightbox = useCallback(()    => setLightboxId(null), []);

  const prevImage = useCallback(() => {
    setLightboxId((id) => {
      const idx = filtered.findIndex((g) => g.id === id);
      return filtered[(idx - 1 + filtered.length) % filtered.length].id;
    });
  }, [filtered]);

  const nextImage = useCallback(() => {
    setLightboxId((id) => {
      const idx = filtered.findIndex((g) => g.id === id);
      return filtered[(idx + 1) % filtered.length].id;
    });
  }, [filtered]);

  return (
    <main className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <FadeUp>
          <div className={styles.heroTag}>Gallery</div>
          <h1 className={styles.heroTitle}>
            Machines, Milestones &amp;<br />
            <span className={styles.accent}>Our Story in Images</span>
          </h1>
          <p className={styles.heroSub}>
            A visual record of every machine we build, every award we earn and every
            milestone Sri Vaani Agro Industries reaches — straight from the workshop floor.
          </p>
        </FadeUp>

        {/* Quick stats strip inside hero */}
        <FadeUp delay={120} className={styles.heroStats}>
          {[
            { num: `${GALLERY_ITEMS.length}+`, label: 'Photos' },
            { num: '8+',                       label: 'Machine Types' },
            { num: '500+',                     label: 'Units Delivered' },
          ].map((s) => (
            <div key={s.label} className={styles.heroStat}>
              <span className={styles.heroStatNum}>{s.num}</span>
              <span className={styles.heroStatLabel}>{s.label}</span>
            </div>
          ))}
        </FadeUp>
      </section>

      {/* ── Category Filter Bar ── */}
      <div className={styles.filterBar}>
        <div className={styles.filterInner}>
          <span className={styles.filterLabel}>Browse:</span>
          <div className={styles.filterBtns}>
            {CATEGORIES.map((cat) => {
              const count = cat === 'All'
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((g) => g.category === cat).length;
              return (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                  <span className={styles.filterCount}>{count}</span>
                </button>
              );
            })}
          </div>
          <span className={styles.filterResult}>
            {filtered.length} item{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* ── Gallery Grid ── */}
      <section className={styles.gridSection}>
        {filtered.length === 0 ? (
          <div className={styles.emptyState}>
            <span>📷</span>
            <p>No items in this category yet.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((item, i) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={i}
                onOpen={openLightbox}
              />
            ))}
          </div>
        )}
      </section>

      {/* ── Media / Press Section ── */}
      <section className={styles.pressSection}>
        <FadeUp>
          <div className={styles.sectionTag}>In the News</div>
          <h2 className={styles.sectionTitle}>Media Coverage</h2>
          <p className={styles.sectionSub}>
            Sri Vaani Agro Industries and our WALSON machines have been featured in
            regional Telugu newspapers and agricultural bulletins for innovation in
            affordable agro processing.
          </p>
        </FadeUp>

        <FadeUp delay={100} className={styles.pressCard}>
          <img
            src="/assets/images/newspaper1.jpeg"
            alt="ETV Guntur newspaper coverage"
            className={styles.pressImg}
          />
          <div className={styles.pressContent}>
            <div className={styles.pressSource}>ETV — Guntur Edition</div>
            <h3 className={styles.pressHeadline}>
              "ఆ రైతు మర ఆడించేశాడు" — That Farmer Made the Mill Dance
            </h3>
            <p className={styles.pressText}>
              A feature story on proprietor Gade Vinayabhushan Reddy and how the WALSON
              mini rice mill helps small farmers bypass middlemen — processing and selling
              rice directly for higher margins. The machine runs on single-phase power,
              making it viable for village-level use without costly 3-phase infrastructure.
            </p>
            <p className={styles.pressText}>
              ANGRAU authorities evaluated the machine and provided ₹4 lakh in financial
              assistance under the Samrudhi scheme, validating its technical merit and
              economic impact for marginal farmers.
            </p>
            <div className={styles.pressDate}>Published: February 18, 2022</div>
          </div>
        </FadeUp>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <FadeUp>
          <h2 className={styles.ctaTitle}>Visit Our Workshop</h2>
          <p className={styles.ctaSub}>
            Every machine in this gallery can be seen live at our Chebrolu, Guntur facility.
            Call us to schedule a demonstration.
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

      <ContactStrip />

      {/* ── Lightbox ── */}
      {lightboxId !== null && (
        <Lightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
          onSelectId={openLightbox}
        />
      )}
    </main>
  );
}

export default GalleryPage;