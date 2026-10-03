import React, { useState } from 'react';
import FadeUp from '../components/FadeUp';
import ProductCard from '../components/ProductCard';
import ContactStrip from '../components/ContactStrip';
import { PRODUCTS, CATEGORIES, COMPANY_INFO } from '../data/products';
import styles from './ProductsPage.module.css';

function ProductsPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('millets');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered = activeCategory === 'millets'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <main className={styles.page}>
      {/* Page Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <FadeUp>
          <div className={styles.sectionTag}>Product Catalogue</div>
          <h1 className={styles.heroTitle}>
            Our Machines &amp;<br />
            <span className={styles.accent}>Equipment Range</span>
          </h1>
          <p className={styles.heroSub}>
            All machines manufactured at our Guntur facility, tested before dispatch,
            and backed with after-sales service. Custom capacities available on request.
          </p>
        </FadeUp>
      </section>

      {/* Category Filter */}
      <div className={styles.filterBar}>
        <div className={styles.filterInner}>
          <span className={styles.filterLabel}>Filter by:</span>
          <div className={styles.filterBtns}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                {activeCategory === cat && (
                  <span className={styles.filterCount}>
                    {cat === 'millets' ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className={styles.gridSection}>
        <div className={styles.resultsInfo}>
          Showing <strong>{filtered.length}</strong> {activeCategory !== 'millets' ? activeCategory : ''} machine{filtered.length !== 1 ? 's' : ''}
        </div>

        <div className={styles.prodGrid}>
          {filtered.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              delay={i * 70}
              onViewDetail={(prod) => setSelectedProduct(prod)}
            />
          ))}
        </div>
      </section>

      {/* Custom Order Banner */}
      <FadeUp>
        <div className={styles.customBanner}>
          <div className={styles.customLeft}>
            <h3 className={styles.customTitle}>Need a Custom Configuration?</h3>
            <p className={styles.customDesc}>
              We build machines to your exact capacity requirements and grain type.
              All structural dimensions can be adjusted. Call us to discuss your needs.
            </p>
          </div>
          <div className={styles.customRight}>
            <a href={`tel:${COMPANY_INFO.phone1}`} className={styles.btnWhite}>
              📞 {COMPANY_INFO.phone1}
            </a>
            <button className={styles.btnOutlineW} onClick={() => onNavigate('contact')}>
              Send Enquiry
            </button>
          </div>
        </div>
      </FadeUp>

      <ContactStrip />
    </main>
  );
}

/* ─── Product Detail View ─── */
function ProductDetail({ product, onBack, onNavigate }) {
  const [activeImg, setActiveImg] = useState(0);
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <main className={styles.page}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <button className={styles.breadcrumbLink} onClick={() => onNavigate('home')}>Home</button>
        <span className={styles.breadcrumbSep}>›</span>
        <button className={styles.breadcrumbLink} onClick={onBack}>Products</button>
        <span className={styles.breadcrumbSep}>›</span>
        <span className={styles.breadcrumbCurrent}>{product.title}</span>
      </div>

      {/* Detail body */}
      <section className={styles.detailSection}>
        {/* Image panel */}
        <div className={styles.detailImages}>
          <div className={styles.mainImgWrap}>
            <img
              src={product.galleryImages[activeImg]}
              alt={product.title}
              className={styles.mainImg}
            />
            <span
              className={styles.detailTag}
              style={{ background: product.tagColor || '#1D6B38' }}
            >
              {product.tag}
            </span>
          </div>
          {product.galleryImages.length > 1 && (
            <div className={styles.thumbRow}>
              {product.galleryImages.map((img, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${activeImg === i ? styles.thumbActive : ''}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt={`View ${i + 1}`} className={styles.thumbImg} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info panel */}
        <div className={styles.detailInfo}>
          <div className={styles.detailCategory}>{product.category}</div>
          <h1 className={styles.detailTitle}>{product.title}</h1>
          <p className={styles.detailDesc}>{product.fullDesc}</p>

          {/* Specs table */}
          <div className={styles.specsBox}>
            <h3 className={styles.specsTitle}>Technical Specifications</h3>
            <table className={styles.specsTable}>
              <tbody>
                {product.specs.map((s) => (
                  <tr key={s.label} className={styles.specRow}>
                    <td className={styles.specLabel}>{s.label}</td>
                    <td className={styles.specValue}>{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Features */}
          <div className={styles.featuresBox}>
            <h3 className={styles.specsTitle}>Key Features</h3>
            <ul className={styles.featureList}>
              {product.features.map((f) => (
                <li key={f} className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className={styles.detailCta}>
            <button className={styles.btnGreen} onClick={() => onNavigate('contact')}>
              Request a Quote
            </button>
            <a href="tel:8074765385" className={styles.btnOutline}>
              📞 Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className={styles.relatedSection}>
          <FadeUp>
            <h2 className={styles.relatedTitle}>Related Products</h2>
          </FadeUp>
          <div className={styles.relatedGrid}>
            {relatedProducts.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                delay={i * 80}
                onViewDetail={(prod) => {}}
              />
            ))}
          </div>
        </section>
      )}

      <ContactStrip />
    </main>
  );
}

export default ProductsPage;
