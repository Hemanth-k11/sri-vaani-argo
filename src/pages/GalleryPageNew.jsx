import React, { useState, useCallback } from 'react';
import FadeUp from '../components/FadeUp';
import ContactStrip from '../components/ContactStrip';
import { COMPANY_INFO } from '../data/products';
import styles from './GalleryPageNew.module.css';

const GALLERY_ITEMS = [
  {
    id: 1,
    src: '/assets/images/blue_husker.jpeg',
    title: 'WALSON Blue Paddy Husker',
    caption: 'Twin rubber-roll mechanism with integral belt drive fabricated in-house at our Chebrolu workshop.',
    category: 'Machines',
    tag: 'Husking',
  },
  {
    id: 2,
    src: '/assets/images/blue_paddy_sep.jpeg',
    title: 'Paddy Separator — Front View',
    caption: 'Multi-row zigzag separator with hopper feed, blue MS frame and stainless grading deck.',
    category: 'Machines',
    tag: 'Separation',
  },
  {
    id: 3,
    src: '/assets/images/blue_paddy_sep2.jpeg',
    title: 'Paddy Separator — Angle View',
    caption: 'Side view showing slotted deck assembly and structural frame with adjustable deck angle.',
    category: 'Machines',
    tag: 'Separation',
  },
  {
    id: 4,
    src: '/assets/images/bucket_elevator.jpeg',
    title: 'Bucket Elevator',
    caption: 'Vertical grain handling for paddy, rice or other grains between processing stages.',
    category: 'Machines',
    tag: 'Handling',
  },
  {
    id: 5,
    src: '/assets/images/grey_aspirator.jpeg',
    title: 'Grain Aspirator — Front',
    caption: 'Heavy-duty aspirator with centrifugal blower and multi-stage output trays.',
    category: 'Machines',
    tag: 'Cleaning',
  },
  {
    id: 6,
    src: '/assets/images/grey_aspirator2.jpeg',
    title: 'Grain Aspirator — Side',
    caption: 'Side profile showing blower unit, output chutes and cast-iron drive pulley.',
    category: 'Machines',
    tag: 'Cleaning',
  },
  {
    id: 7,
    src: '/assets/images/red_machine_front.jpeg',
    title: 'Red Machine — Front View',
    caption: 'Industrial red-painted agricultural machine showing front assembly and control interface.',
    category: 'Machines',
    tag: 'Equipment',
  },
  {
    id: 8,
    src: '/assets/images/red_machine_side.jpeg',
    title: 'Red Machine — Side View',
    caption: 'Side profile of the red machine displaying mechanical components and structural design.',
    category: 'Machines',
    tag: 'Equipment',
  },
  {
    id: 9,
    src: '/assets/images/red_machine_wide.jpeg',
    title: 'Red Machine — Wide View',
    caption: 'Complete overview of the red machine in operational setup at our facility.',
    category: 'Machines',
    tag: 'Equipment',
  },
  {
    id: 10,
    src: '/assets/images/teal_plant.jpeg',
    title: 'Facility Overview',
    caption: 'Bird\'s eye view of Sri Vaani Agro Industries workshop and manufacturing facility.',
    category: 'Machines',
    tag: 'Facility',
  },
  {
    id: 11,
    src: '/assets/images/award_ceremony.jpeg',
    title: 'Government Recognition Award',
    caption: 'ANGRAU recognition for innovation in agricultural machinery and farmer income support.',
    category: 'Recognition',
    tag: 'Award',
  },
  {
    id: 12,
    src: '/assets/images/newspaper1.jpeg',
    title: 'Media Coverage — ETV Guntur',
    caption: 'Feature story on WALSON mini rice mill helping farmers bypass middlemen.',
    category: 'Media',
    tag: 'Press',
  },
  {
    id: 13,
    src: '/assets/images/newspaper2.jpeg',
    title: 'Media Coverage — Newspaper Feature',
    caption: 'Press coverage highlighting our innovation in agricultural processing equipment.',
    category: 'Media',
    tag: 'Press',
  },
  {
    id: 14,
    src: '/assets/images/newspaper3.jpeg',
    title: 'Media Coverage — Industry Article',
    caption: 'Industry publication featuring Sri Vaani Agro Industries and WALSON machinery.',
    category: 'Media',
    tag: 'Press',
  },
];

const CATEGORIES = ['All', 'Machines', 'Recognition', 'Media'];

// Lightbox Component
function Lightbox({ item, onClose, onPrev, onNext, hasPrev, hasNext }) {
  React.useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!item) return null;

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
        
        <div className={styles.lightboxBody}>
          <img src={item.src} alt={item.title} className={styles.lightboxImg} />
          
          {hasPrev && (
            <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={onPrev} aria-label="Previous">
              ‹
            </button>
          )}
          {hasNext && (
            <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={onNext} aria-label="Next">
              ›
            </button>
          )}
        </div>

        <div className={styles.lightboxInfo}>
          <span className={styles.tag}>{item.tag}</span>
          <h3 className={styles.lightboxTitle}>{item.title}</h3>
          <p className={styles.lightboxCaption}>{item.caption}</p>
        </div>
      </div>
    </div>
  );
}

// Gallery Card Component
function GalleryCard({ item, onOpen }) {
  return (
    <FadeUp>
      <div className={styles.card} onClick={() => onOpen(item)}>
        <div className={styles.cardImage}>
          <img src={item.src} alt={item.title} loading="lazy" />
          <div className={styles.cardOverlay}>
            <span className={styles.viewBtn}>View</span>
          </div>
        </div>
        <div className={styles.cardContent}>
          <span className={styles.cardTag}>{item.tag}</span>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.cardDesc}>{item.caption}</p>
        </div>
      </div>
    </FadeUp>
  );
}

// Main Gallery Page
export default function GalleryPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const selectedIndex = filtered.findIndex(item => item.id === selectedItem?.id);
  const hasPrev = selectedIndex > 0;
  const hasNext = selectedIndex < filtered.length - 1;

  const openLightbox = useCallback((item) => setSelectedItem(item), []);
  const closeLightbox = useCallback(() => setSelectedItem(null), []);
  const prevImage = useCallback(() => {
    if (hasPrev) setSelectedItem(filtered[selectedIndex - 1]);
  }, [selectedIndex, filtered, hasPrev]);
  const nextImage = useCallback(() => {
    if (hasNext) setSelectedItem(filtered[selectedIndex + 1]);
  }, [selectedIndex, filtered, hasNext]);

  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <FadeUp>
          <h1 className={styles.heroTitle}>Gallery</h1>
          <p className={styles.heroSub}>
            Machines, milestones, and our story in images — straight from the workshop floor
          </p>
        </FadeUp>
      </section>

      {/* Filter Bar */}
      <section className={styles.filterSection}>
        <div className={styles.filterContainer}>
          <span className={styles.filterLabel}>Filter:</span>
          <div className={styles.filterButtons}>
            {CATEGORIES.map((cat) => {
              const count = cat === 'All'
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((g) => g.category === cat).length;
              return (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat} <span className={styles.count}>{count}</span>
                </button>
              );
            })}
          </div>
          <span className={styles.resultCount}>{filtered.length} item{filtered.length !== 1 ? 's' : ''}</span>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className={styles.gallerySection}>
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <p>No items in this category</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onOpen={openLightbox}
              />
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <FadeUp>
          <h2>Ready to See Our Workshop?</h2>
          <p>Every machine in this gallery can be seen live at our Chebrolu facility</p>
          <div className={styles.ctaButtons}>
            <a href={`tel:${COMPANY_INFO.phone1}`} className={styles.btnPrimary}>
              📞 {COMPANY_INFO.phone1}
            </a>
            <button className={styles.btnSecondary} onClick={() => onNavigate('products')}>
              View All Products
            </button>
          </div>
        </FadeUp>
      </section>

      <ContactStrip />

      {/* Lightbox */}
      {selectedItem && (
        <Lightbox
          item={selectedItem}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
          hasPrev={hasPrev}
          hasNext={hasNext}
        />
      )}
    </main>
  );
}
